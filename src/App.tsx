import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome-page";


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />}   />
    </Routes>
  );
};

export default App;
