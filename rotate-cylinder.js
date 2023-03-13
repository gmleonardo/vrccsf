AFRAME.registerComponent("rotate-cylinder", {
  init: function () {
    var el = this.el;
    var rotationSpeed = 0.5; // Set rotation speed (in degrees per frame)

    el.setAttribute("animation", {
      property: "rotation",
      to: "360 0 0",
      loop: true,
      dur: 1000 / rotationSpeed,
    });
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var cylinder = document.querySelector("#my-cylinder");
  cylinder.setAttribute("rotate-cylinder", "");
});
