// discord popup
if(!sessionStorage.getItem("discord")) {
  document.getElementById("discord-popup").classList.remove("hidden");

  document.getElementById("discord-popup").addEventListener("click", () => {
    document.getElementById("discord-popup").classList.add("hidden");
  });

  setTimeout(() => {
    document.getElementById("discord-popup").classList.add("hidden");
  }, 60000);

  sessionStorage.setItem("discord", "true");
}

// settings
window.settings = getSettings();

// tab cloak
if(settings["tab-cloak"]) {
  document.addEventListener("visibilitychange", ()  => {
    if (document.hidden) {
      document.title = settings["tab-cloak-text"];
      document.querySelector("link[rel='icon']").href = settings["tab-cloak-icon"];
    } else {
      document.title = "Radon Games";
      document.querySelector("link[rel='icon']").href = "/favicon.ico";
    }
  });
}

// analytics
if(settings["analytics"]) {
  // gtag
  const gtagScript = document.createElement("script");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0GR0HN1RFL";
  gtagScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0GR0HN1RFL');
  };
  document.head.appendChild(gtagScript);
  // goatcounter
  const gc = document.createElement("script");
  gc.src = "/js/count.v3.js";
  gc.setAttribute("data-goatcounter", "https://radon-games.goatcounter.com/count");
  document.head.appendChild(gc);
}