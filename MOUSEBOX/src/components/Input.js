import { debounce } from "../utils/debounce.js";

class Input {
  constructor({ $app, state, onChange }) {
    this.$app = $app;
    this.$target = document.createElement("input");
    this.$target.addEventListener("input", onChange);
    this.state = state;
    this.$app.appendChild(this.$target);
    this.render();
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
  render() {
    let className = "";
    if (this.state.loading) {
      className = `loading`;
    }

    if (this.state.isDuplicate === true) {
      className = `${className} fail`;
    }

    if (this.state.isDuplicate === false) {
      className = `${className} success`;
    }

    this.$target.value = this.state.nickname;
    this.$target.className = className;
  }
}
export default Input;
