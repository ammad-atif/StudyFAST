import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { Test } from "./Test";
function App() {
  return (
    <BrowserRouter>
      <AuthPage />
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
