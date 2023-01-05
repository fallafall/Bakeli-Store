import React from 'react';
import './Inscription.css';
// import {SlSocialFacebook} from "react-icons/sl";
// import {TfiTwitter} from "react-icons/tfi"
import mail from "../imgs/mail.png";
import facebook from "../imgs/facebook.png";
import twitter from "../imgs/twitter.png";

function Inscription() {
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
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 login2">
            <h2 className=" mon-titre2 mb-3">Inscription</h2>
            <fom className="form">
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label label">
             Nom complet
            </label>
            <input
              type="text"
              className="form-control connect-input w-75"
              id="nom complet"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label label">
              Email
            </label>
            <input
              type="email"
              className="form-control connect-input w-75"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label label">
             Mot de Passe
            </label>
            <input
              type="passWord"
              className="form-control connect-input w-75"
              id="Password"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label label">
             Confirmer votre mot de Passe
            </label>
            <input
              type="passWord"
              className="form-control connect-input w-75"
              id="confirmPassword"
            />
          </div>
          <button type="btn" className="bouton w-75">S'inscrire</button>
          </fom>
          <div className='image justufy-content-center'>  <img  className='icons' src={mail}/> <img  className='icons' src={facebook}/> <img  className='icons' src={twitter}/></div> 
        </div>
      </div>
    </div>
  )
}

export default Inscription