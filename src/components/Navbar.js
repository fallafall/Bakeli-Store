import React from "react";
import Image1 from "../imgs/Image1.png";
import {BsSearch} from "react-icons/bs";
import {Link, Navigate} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (

      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={Image1} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Marketing Digital</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Gestion de Projet</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Programmation</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <form className="d-flex position-relative forme" role="search">
              <input className="form-control ms-5 recherche" type="search" aria-label="Search" />
              <button className="search"><BsSearch/></button>
           </form>
           <button className="btn connect" type="submit">       
           <Link className="connexion pl-5 " to="/Connexion"> Se connecter</Link>
          </button>
         <button className="btn inscrire" type="submit">
           <Link className="inscription" to="/Inscription"> S'inscrire </Link> 
        </button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
