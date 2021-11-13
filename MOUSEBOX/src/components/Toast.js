class Toast {
  constructor({ $app, state }) {
    this.$app = $app;
    this.state = state;
    this.$target = document.createElement("div");
    this.$app.appendChild(this.$target);
    this.render();
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
  render() {
    if (this.state.loading) {
      this.$target.innerHTML = `<i class="fas fa-spinner"></i>`;
      return;
    }

    if (this.state.isDuplicate) {
      this.$target.innerHTML = `❌ 중복되었습니다.`;
      return;
    }

    if (this.state.isDuplicate === false) {
      this.$target.innerHTML = `✅ 사용가능합니다`;
    }
  }
}
export default Toast;
