class Mole {
  timeoutId = null;
  isVisible = false;
  isWhacked = false;

  static hideDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  static showDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  handleClick(view) {
    view.style.display = "none";
  }

  timeoutCallback(view) {
    let delay = 0;
    if (this.isVisible === true) {
      view.style.display = "none";
      delay = Mole.hideDelay();
    }

    if (this.isVisible === false) {
      view.style.display = "initial";
      delay = Mole.hideDelay();
    }

    this.isVisible = !this.isVisible;
    setTimeout(this.timeoutCallback.bind(this, view), delay);
  }

  render() {
    const container = document.createElement("span");
    container.innerHTML = "Mole";
    container.style.display = "none";
    container.addEventListener("click", this.handleClick.bind(this, container));
    setTimeout(this.timeoutCallback.bind(this, container), Mole.showDelay());
    return container;
  }
}
