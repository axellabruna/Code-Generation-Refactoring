import requests

def get_weather(city, api_key):
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"
    }
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        return {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"]
        }
    else:
        return {"error": "Unable to fetch weather data"}


API_KEY = "a526b0a914338b4eba6a0b02eeb0dc15"  # Replace with your OpenWeatherMap API key
city_name = input("Enter the city name: ")
weather = get_weather(city_name, API_KEY)
if "error" in weather:
    print(weather["error"])
else:
    print(f"City: {weather['city']}")
    print(f"Temperature: {weather['temperature']}°C")
    print(f"Weather: {weather['description']}")