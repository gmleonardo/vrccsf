AFRAME.registerComponent("change-color", {
  init: function () {
    let el = this.el;
    this.changeColor = function () {
      el.setAttribute("color", "green");
    };
    this.el.addEventListener("click", this.changeColor);
  },

  remove: function () {
    this.el.removeEventListener("click", this.changeColor);
  },
});
