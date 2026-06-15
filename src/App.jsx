import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SymbolPage from "./pages/SymbolPage";
import QrPage from "./pages/QrPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symbols/:slug" element={<SymbolPage />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </BrowserRouter>
  );
}
