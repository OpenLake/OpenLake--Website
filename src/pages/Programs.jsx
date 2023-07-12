import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Carousel, GlimpseButton } from "../components";
import Xarrow, { Xwrapper } from "react-xarrows";
import { repoavatar, github, img1 } from "../assets";
import "../assets/css/programs.css";
import { motion } from "framer-motion";
import MyCarousel from "../components/Carousel";
function Programs() {
  return (
    <div>
      <div>
        <MyCarousel />
      </div>
      <div className="TopStat flex flex-col md:flex-row gap-10 sm:gap-6 sm:justify-center">
        <div className="w-1/3 md:w-1/4 h-40 bg-gradient-to-l from-neutral-900 to-gray-900 rounded"></div>
        <div className="w-1/3 md:w-1/4 h-40 bg-gradient-to-l from-neutral-900 to-gray-900 rounded"></div>
        <div className="w-1/3 md:w-1/4 h-40 bg-gradient-to-l from-neutral-900 to-gray-900 rounded"></div>
      </div>
      <div className="absolute top:0"></div>
    </div>
  );
}

export default Programs;
