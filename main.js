var locations = {
    location_1: {
      scale: 1,
    },
    location_2: {
      scale: 4,
      translate: ["26.5%", "-4%"],
    },
    location_3: {
      scale: 5,
      translate: ["-10.5%", "-9%"],
    },
    location_4: {
      scale: 6.5,
      translate: ["-19%", "25%"],
    },
    location_5: {
      scale: 3,
      translate: ["-32%", "19%"],
    },
    location_6: {
        scale: 1,
      },
  };

  window.onscroll = function () {
    var locationNames = Object.keys(locations);
    for (var i = 0; i < locationNames.length; i++) {
      var locationName = locationNames[i];
      if (isElementOnScreen(locationName)) {
        setActiveSection(locationName);
        break;
      }
    }
  };

  var activeLocationName = "location_1";
  function setActiveSection(locationName) {
    if (locationName === activeLocationName) return;

    zoomToLocation(locations[locationName]);

    document.getElementById(locationName).setAttribute("class", "active");
    document.getElementById(activeLocationName).setAttribute("class", "");

    activeLocationName = locationName;
  }

  function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  function zoomToLocation(loc) {
    var map = document.getElementById("map");
    var css = "";
    Object.keys(loc).forEach((l) => {
      css += `${l}(${loc[l]}) `;
    });
    css = css.slice(0, -1);
    map.style.transform = css;
  }