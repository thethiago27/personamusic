import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@features/home";
import Callback from "@features/callback";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
