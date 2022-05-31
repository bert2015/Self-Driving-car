"use strict";

class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.revers = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.revers = true;
          break;
      }
      console.table(this); // გასარკვევი
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.revers = false;
          break;
      }
      console.table(this); // გასარკვევი
    };
  }
}
