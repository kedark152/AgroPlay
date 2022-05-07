import "./App.css";
import "./styles/common.css";
import "./styles/layouts/scrollbar.css";
import "./styles/utils/variables.css";
import { PageRoutes } from "./routes/PageRoutes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <PageRoutes />
    </div>
  );
}

export default App;
