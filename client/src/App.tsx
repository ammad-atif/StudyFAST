import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
function App() {
  return (
    <BrowserRouter>
      <AuthPage />
    </BrowserRouter>
  );
}

export default App;
