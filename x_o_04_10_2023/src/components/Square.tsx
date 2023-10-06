import React, { FC } from "react";

interface ISquareProps {
    value: string | null;
    onClick: () => void;
}

const Square: FC<ISquareProps> = ({ value, onClick }): JSX.Element => {
    return (
        <button className="squere" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
