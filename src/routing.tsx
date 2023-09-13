import { Routes, Route } from "react-router-dom";
import { MainHome } from "./home/components/mainHome";
import { MainDetail } from "./detail/components/mainDetail";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="detail" element={<MainDetail />} />
    </Routes>
  );
}

