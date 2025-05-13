const endpoint = "http://192.168.1.14";


function getGuestLed() {
  fetch(endpoint + "/guest", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        guest.classList.add("item-submit-active");
        guestImg.src = "./assets/led-on.png";
      } else {
        guest.classList.remove("item-submit-active");
        guestImg.src = "./assets/led-off.png";
      }
    });
}

function getDinningLed() {
  fetch(endpoint + "/dining", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        dining.classList.add("item-submit-active");
        diningImg.src = "./assets/led-on.png";
      } else {
        dining.classList.remove("item-submit-active");
        diningImg.src = "./assets/led-off.png";
      }
    });
}

function getToiletLed() {
  fetch(endpoint + "/toilet", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        toilet.classList.add("item-submit-active");
        toiletImg.src = "./assets/led-on.png";
      } else {
        toilet.classList.remove("item-submit-active");
        toiletImg.src = "./assets/led-off.png";
      }
    });
}

const setGuestLed = () => {
  fetch(endpoint + "/guest", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
};

const setDiningLed = () => {
  fetch(endpoint + "/dining", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
};

const setToiletLed = () => {
  fetch(endpoint + "/toilet", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
};

getGuestLed();
getDinningLed();
getToiletLed();
