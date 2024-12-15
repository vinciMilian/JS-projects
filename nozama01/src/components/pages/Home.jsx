import react from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/home.scss"

function Home() {
  return (
    <div className="containerHome">
        <header>
            <h2>LOGO</h2>
            <div className="searchContainer">
                <div className="searchbar">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="searchbutton">
                    <p>Buscar</p>
                </div>
            </div>
            <div className="navbuttons">
                <a href="#">A</a>
                <a href="#">B</a>
                <a href="#">C</a>
            </div>
        </header>
    </div>
  );
}

export default Home;