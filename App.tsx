import { store } from "./src/store";
import { Provider } from "react-redux";
import Toaster from "./src/components/Toaster";
import Routes from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster />
    </Provider>
  );
}
