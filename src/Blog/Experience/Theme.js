import { EventEmitter } from "events";

export default class Theme extends EventEmitter {
    constructor() {
        super();

        this.theme = "light";
        this.blogBox = document.querySelector(".blog-box");
        this.toggleButton = document.querySelector(".toggle-button");
        this.toggleCircle = document.querySelector(".toggle-circle");

        this.setEventListeners();
    }

    setEventListeners() {
        this.toggleButton.addEventListener("click", () => {
            this.toggleCircle.classList.toggle("slide");
            this.theme = this.theme === "light" ? "dark" : "light";
            this.blogBox.classList.toggle("dark-theme");
            this.blogBox.classList.toggle("light-theme");
            console.log(this.theme);

            this.emit("switch", this.theme);
        });
    }
}
