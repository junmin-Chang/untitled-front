import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routing from "./routes/Routing";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
