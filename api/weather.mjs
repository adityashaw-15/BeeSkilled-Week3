// Vercel server-side endpoint: GET /api/weather?city=Kolkata
// The secret is configured in Vercel > Project > Settings > Environment Variables.
export async function GET(request) {
  const city = new URL(request.url).searchParams.get('city')?.trim();

  if (!city || city.length > 80) {
    return Response.json({ error: 'Please enter a valid city name.' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Weather API is not configured on the server.' }, { status: 500 });
  }

  const params = new URLSearchParams({ q: city, appid: apiKey, units: 'metric' });

  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?' + params,
      { signal: AbortSignal.timeout(8000) }
    );

    if (response.status === 404) {
      return Response.json({ error: 'City not found. Check the spelling.' }, { status: 404 });
    }
    if (response.status === 401) {
      return Response.json({ error: 'OpenWeatherMap key is invalid or not active.' }, { status: 502 });
    }
    if (!response.ok) {
      return Response.json({ error: 'Weather service is temporarily unavailable.' }, { status: 502 });
    }

    const data = await response.json();
    return Response.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
      windSpeed: data.wind.speed
    }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' } });
  } catch {
    return Response.json({ error: 'Weather request timed out or could not connect.' }, { status: 502 });
  }
}
