import data from "../dummy/data.js";
import { debounce } from "../utils/debounce.js";
import Input from "./Input.js";
import Toast from "./Toast.js";

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
    this.toast.setState({
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
      onChange: debounce(
        (e) => {
          let isDuplicate = false;

          if (data.includes(e.target.value)) {
            isDuplicate = true;
          }

          this.setState({
            ...this.state,
            nickname: e.target.value,
            isDuplicate,
            loading: false,
          });
        },
        1000,
        (e) => {
          this.setState({
            ...this.state,
            nickname: e.target.value,
            loading: true,
          });
        }
      ),
    });

    this.toast = new Toast({
      $app: this.$app,
      state: {
        isDuplicate: this.state.isDuplicate,
        loading: this.state.loading,
      },
    });
  }
}

export default App;
