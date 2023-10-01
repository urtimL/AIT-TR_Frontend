import React, { useContext } from "react";
import { navItems } from "../utils";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import StarWars from "./StarWars";
import Home from "./Home";
import { CurrentPageContext } from "../App";
//import Footer from "./Footer";

const Main: React.FC<{ currentPage: string }> = ({
    currentPage,
}): JSX.Element => {
    const myStr = useContext(CurrentPageContext);

    switch (currentPage) {
        case navItems[1]:
            return <AboutMe />;
        case navItems[2]:
            return <StarWars />;
        case navItems[3]:
            return <Contact />;
        default:
            return <Home />;
    }
};

export default Main;
