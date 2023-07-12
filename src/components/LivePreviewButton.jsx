import React from "react";
import "./css/LivePreview.css";
import { share } from "../assets";

const LivePreviewButton = () => {
  return (
    <div className="boxlive">
      <div className="button-wrapper">
        <div className="button">
          <div className="text-wrapper">Live preview</div>
          <img className="share" alt="Share" src={share} />
        </div>
      </div>
    </div>
  );
};
export default LivePreviewButton;