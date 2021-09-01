function displayWindowSize() {
  var w = document.documentElement.clientWidth;

  if (w < 579) {
    document.getElementById("header").style.backgroundImage =
      "url('./images/phone/AM_003_P.png')";

    document.getElementById("section1").style.backgroundImage =
      "url('./images/phone/AM_003_P(2).png')";

    document.getElementById("section2").style.backgroundImage =
      "url('./images/phone/AM_003_P(3).png')";

    document.getElementById("section3").style.backgroundImage =
      "url('./images/phone/AM_003_P(4).png')";
  } else if (w > 580 && w < 800) {
    document.getElementById("header").style.backgroundImage =
      "url('./images/tab_p/one.png')";

    document.getElementById("section1").style.backgroundImage =
      "url('./images/tab_p/two.png')";

    document.getElementById("section2").style.backgroundImage =
      "url('./images/tab_p/three.png')";

    document.getElementById("section3").style.backgroundImage =
      "url('./images/tab_p/four.png')";
  } else if (w > 800 && w < 1199) {
    document.getElementById("header").style.backgroundImage =
      "url('./images/tab_l/1.png')";

    document.getElementById("section1").style.backgroundImage =
      "url('./images/tab_l/2.png')";

    document.getElementById("section2").style.backgroundImage =
      "url('./images/tab_l/3.png')";

    document.getElementById("section3").style.backgroundImage =
      "url('./images/tab_l/4.png')";
  } else if (w > 1200) {
    document.getElementById("header").style.backgroundImage =
      "url('./images/desktop/AM_003_D.png')";

    document.getElementById("section1").style.backgroundImage =
      "url('./images/desktop/AM_003_D(2).png')";

    document.getElementById("section2").style.backgroundImage =
      "url('./images/desktop/AM_003_D(3).png')";

    document.getElementById("section3").style.backgroundImage =
      "url('./images/desktop/AM_003_D(4).png')";
  }
}

window.addEventListener("resize", displayWindowSize);

displayWindowSize();
