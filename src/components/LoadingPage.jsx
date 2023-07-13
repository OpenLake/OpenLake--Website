import React from "react";
import "./css/LoadingPage.css";

const LoadingPage = () => {
  return (
    <div class="loader">
      <div class="book">
        <div class="book__pg-shadow"></div>
        <div class="book__pg"></div>
        <div class="book__pg book__pg--2"></div>
        <div class="book__pg book__pg--3"></div>
        <div class="book__pg book__pg--4"></div>
        <div class="book__pg book__pg--5"></div>
      </div>
      <div id="load">
        <div>O</div>
        <div>P</div>
        <div>E</div>
        <div>N</div>
        <div>L</div>
        <div>A</div>
        <div>K</div>
        <div>E</div>
      </div>
    </div>
  );
};

export default LoadingPage;
