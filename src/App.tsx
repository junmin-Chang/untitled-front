import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Routing from "./routes/Routing";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
