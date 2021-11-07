import data from "../dummy/data.js";
import Input from "./Input.js";

class App {
  constructor({ $app }) {
    this.$app = $app;
    this.state = {
      nickname: "",
      isDuplicate: null,
      loading: false,
    };
    this.render();
  }
  setState(newState) {
    this.state = newState;
    this.input.setState({
      nickname: this.state.nickname,
      isDuplicate: this.state.isDuplicate,
      loading: this.state.loading,
    });
  }
  render() {
    this.input = new Input({
      $app: this.$app,
      state: {
        nickname: this.state.nickname,
        isDuplicate: this.state.isDuplicate,
        loading: this.state.loading,
      },
      onChange: (e) => {
        let isDuplicate = false;

        if (data.includes(e.target.value)) {
          isDuplicate = true;
        }

        this.setState({
          ...this.state,
          isDuplicate,
          loading: false,
        });
      },
    });
  }
}

export default App;
