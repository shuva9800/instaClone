import React from "react";
import serchbar from "../assets/searchbar.svg";
import "./Header.css";
import home from "../assets/home.svg";
import insta1 from "../assets/insta1.svg";
import insta2 from "../assets/insta2.svg";
import insta3 from "../assets/insta3.svg";
import battery from "../assets/battery.svg";


export default function Header() {
  return (
    <div class="wrapper">
      <header>
        <div class="header-img">
          <h3>Instragem</h3>
        </div>
        <div class="serchbar">
          <div>
            <img src={serchbar} />
            <p>Search</p>
          </div>
        </div>
        <div class="icon">
                <img src={home} />
                <img src={insta1} />
                <img src={insta2} />
                <img src={insta3} />
                <img src={battery} />
               
            </div>
      </header>
    </div>
  );
}
