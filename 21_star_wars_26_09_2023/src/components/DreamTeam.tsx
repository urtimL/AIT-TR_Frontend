import React from "react";
import { friends } from "../utils";
import Friend from "./Friend";

const DreamTeam = () => {
    return (
        <section className="right">
            <h2>Dream Team</h2>
            {friends.map((item, index) => (
                <Friend photo={item} number={index+1} key={index} />
            ))}
        </section>
    );
};

export default DreamTeam;