import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio"; // your new component
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
