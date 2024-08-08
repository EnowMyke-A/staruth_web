import React from "react";
import HomeContactComponent from "./contact_section/contact";
import HomeHeroComponent from "./hero_section/hero";
import "home.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <HomeHeroComponent />
            <HomeContactComponent/>
        </div>
    );
};

export default HomePage;
