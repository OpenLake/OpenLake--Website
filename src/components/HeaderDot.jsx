import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/HeaderDot.css";

const HeaderDot = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <div className="box" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="group-wrapper">
                <div className="group">
                    <div className="overlap-group">
                        <div className="ellipse" />
                        <div className="div" />
                        <div className="ellipse-2" />
                        <span className="arrow">&#8592;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderDot;