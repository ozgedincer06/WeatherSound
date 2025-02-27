let weather = {
  apiKey: "1d9ca06cdf59c7892424e103b855e814",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

    
    let playlistEmbed;
    if (description.includes("clear sky")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhkGftn1D0Mh?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //sunshine
    }
    else if (description.includes("shower rain")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIcE10fGQVrZK?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //love song mix
    } 
    else if (description.includes("rain")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIeODNDegVpao?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //melancholy sad mix
    }
    else if (description.includes("overcast clouds")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIg6WzaX6zBkQ?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //smooth mix
    } 
    else if (description.includes("few clouds")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIgG2NEOhqsD7?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; // feel good happy mix
    } 
    else if (description.includes("scattered clouds")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIcVD7Tg8a0MY?utm_source=generator" width="100%" height="390" background-color: #000000d0; frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //energetic mix
    } 
    else if (description.includes("broken clouds")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIfGTO5ifSspn?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //chill moody mix
    } 
    else if (description.includes("snow")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhrpDnXo5ST9?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //happy winter mix
    } else if (description.includes("thunderstorm")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIeOmlQSSmx93?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //thunderstorm mix
    } else if (description.includes("mist")) {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIdkh8F75duzX?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //mystical music
    } 
    else {
      playlistEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2vYju3i0lNX?utm_source=generator" width="100%" height="390" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'; //chilled jazz
    }

 
    document.querySelector(".playlist").innerHTML = playlistEmbed;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Zonguldak");

