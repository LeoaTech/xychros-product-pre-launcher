import ReactDOM from "react-dom";

import App from "./App";
import { StateProvider } from "./context/StateContext";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("app")
);
