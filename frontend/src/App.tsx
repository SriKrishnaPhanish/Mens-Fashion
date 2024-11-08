import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import { PostNum } from "./pages/postnum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<PostNum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
