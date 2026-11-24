# BeeSkilled Web Development – Week 3

## Project: Live Weather App

A responsive weather app built using HTML, CSS, JavaScript, and the **OpenWeatherMap Current Weather API**.

### Features
- Search for weather by city name
- View temperature (°C), weather condition, humidity, and wind speed
- Responsive design, loading state, and error messages
- API key kept in a server-side environment variable (not in source code)

### Project structure
```text
BeeSkilled-Week3/
  index.html
  api/
    weather.mjs
  README.md
```

### Deploy (Vercel)
1. Upload the contents of this folder to a GitHub repository, including the `api/` directory.
2. Import the GitHub repo at https://vercel.com/new.
3. Use **Other** framework, root `./`, and default deployment settings.
4. Add the **Production** environment variable `OPENWEATHER_API_KEY` with your private OpenWeatherMap API key. Use a newly rotated key if an old one was shared.
5. Deploy. If you add or change the environment variable after deploying, redeploy.
6. Open the deployment URL and search for `Kolkata`.

> **Important:** GitHub Pages and opening `index.html` directly on your computer **do not run** `api/weather.mjs`. To use the live weather search, deploy this project to Vercel (or run it with a compatible local serverless development environment).
>
> The API key is never included in this repository. Anyone can still call the public weather endpoint, so add rate limiting and monitor usage for larger deployments.

### Technologies used
HTML5 · CSS3 · Vanilla JavaScript · Vercel Functions · OpenWeatherMap API

### Week 3 practice exercises
1. Write a function to check even or odd numbers.
2. Create a button that changes color when clicked.
3. Build a simple calculator using HTML and JavaScript.
4. Display today's date dynamically on a webpage.

These are listed as practice exercises; this repo contains the Weather App assignment.

**Student:** Aditya Kumar Shaw
