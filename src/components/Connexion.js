import React from "react";
import './Connexion.css';
import mail from "../imgs/mail.png";
import facebook from "../imgs/facebook.png";
import twitter from "../imgs/twitter.png";

function Connexion() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 colsm-12 col-xs-12 col1">
          <h2 className="titre">Bakeli store</h2>
          <p className="para">
            Bakeli store est une bibliothèque
            <br /> numérique crée par des bakelistes avec <br />
            des templetes dans differents domaines.{" "}
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 login">
            <h2 className=" mon-titre mb-3">Connexion</h2>
            <fom className="form">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label label">
              Email
            </label>
            <input
              type="email"
              className="form-control connect-input w-75"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label label">
             Mot de Passe
            </label>
            <input
              type="passWord"
              className="form-control connect-input w-75"
              id="floatingPassword"
            />
          </div>
          <button type="btn" className="bouton w-75 ">Connecter</button>
          </fom>
          <div className='image'>  <img  className='icons' src={mail}/> <img  className='icons' src={facebook}/> <img  className='icons' src={twitter}/></div> 
        </div>
      </div>
    </div>
  );
}

export default Connexion;
