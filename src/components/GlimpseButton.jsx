import React from "react";
import "./css/GlimpseButton.css";
import {  sharearrow } from "../assets";
const GlimpseButton = ({ButtonName}) => {
    return (
        <div className="box">
            <div className="button-wrapper">
                <div className="button">
                    <div className="text-wrapper">{ButtonName}</div>
                    <img className="vector w-4" alt="Vector" src={sharearrow} />
                </div>
            </div>
        </div>
    );
};
export default GlimpseButton;