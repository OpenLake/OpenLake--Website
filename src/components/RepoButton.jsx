import React from "react";
import "./css/RepoButton.css";
import {  goto } from "../assets";
const RepoButton = ({ButtonName}) => {
    return (
        <div className="boxing">
            <div className="button-wrapper">
                <div className="button">
                    <div className="text-wrapper">{ButtonName}</div>
                    <img className="vector" alt="Vector" src={goto} />
                </div>
            </div>
        </div>
    );
};
export default RepoButton;