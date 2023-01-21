import React from "react";
import { BrowserRouter } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Routes from "./Routes";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
