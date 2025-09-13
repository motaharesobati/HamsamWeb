import React from "react";
import tvimg from "../images/HeroBGMask.png";
import '../CssComponent/Homepage.css';
import SuggestionApp from "../components/sugApps";
import TextExplain from "../components/TextExplain";

export default function HomePage() {
  return (
    <>
    <div className="main-background">
      <div className="hero">
        <img src={tvimg} className="img-fluid hero-img" alt="hero" />
        <SuggestionApp />
      </div>
        <TextExplain />
      </div>
    </>
  );
}