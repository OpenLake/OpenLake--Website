import React from "react";
import "./css/RepoButton.css";
import {  goto } from "../assets";
const RepoButton = () => {
    return (
        <div className="box">
            <div className="button-wrapper">
                <div className="button">
                    <div className="text-wrapper">Github repo</div>
                    <img className="vector" alt="Vector" src={goto} />
                </div>
            </div>
        </div>
    );
};
export default RepoButton;