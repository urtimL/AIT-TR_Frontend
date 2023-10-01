import React from "react";
import main from "../images/main.jpg";

const Hero: React.FC = (): JSX.Element => {
    return (
        <section className="left">
            <img src={main} alt="hero" />
        </section>
    );
};

export default Hero;
