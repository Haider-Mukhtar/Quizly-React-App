import { Route, Routes } from "react-router-dom";

import GlobalBackground from "./components/global-background";
import WelcomePage from "./pages/welcome-page";

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalBackground />}>
        <Route path="/" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
