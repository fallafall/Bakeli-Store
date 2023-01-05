import React from "react";
import { useNavigate} from 'react-router-dom';
import Profil from "../imgs/Profil.png";
import Rectangle7 from "../imgs/Rectangle7.png";
import Rectangle2 from "../imgs/Rectangle2.png";
import Rectangle5 from "../imgs/Rectangle5.png";
import Rectangle8 from "../imgs/Rectangle8.png";
import Rectangle23 from "../imgs/Rectangle23.png";
import Rectangle24 from "../imgs/Rectangle24.png";
import Rectangle26 from "../imgs/Rectangle26.png";
import Rectangle27 from "../imgs/Rectangle27.png";
import Rectangle18 from "../imgs/Rectangle18.png";
import Rectangle19 from "../imgs/Rectangle19.png";
import Rectangle20 from "../imgs/Rectangle20.png";
import Vector3 from '../imgs/Vector3.png';
import Vector4 from '../imgs/Vector4.png';
// import {AiOutlineStar} from "react-icons/ai";
import "./Home.css";


function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row ligne1">
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <h2 className="titre">Bakeli store</h2>
          <p className="para">
            Bakeli store est une bibliothèque
            <br /> numérique crée par des bakelistes avec <br />
            des templetes dans differents domaines.{" "}
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <img className="img1" src={Rectangle18} />
          <img className="img2" src={Rectangle19} />
          <img className="img3" src={Rectangle20} />{" "}
        </div>
      </div>
      <p className="categ">Tops catégories</p>

      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div onClick={()=>navigate("/Marketing")} className="card text-bg-dark carte">
              <img src={Rectangle23} className="card-img" alt="image" />
            <div className="card-img-overlay">
              <p className="card-text">
              <h5 className="card-title">Plan Marketing</h5>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card text-bg-dark carte">
            <a href="/Marketing"  target="_blank" rel="noreferrer">
            <img
              className="card-img-top"
              src={Rectangle24}
              alt="Card image cap" />
            </a>
              <div className="card-img-overlay">
                <h5 className="card-title">Apps</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card text-bg-dark carte">
            <img src={Rectangle26} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Chartes graphique</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card text-bg-dark carte">
            <img src={Rectangle27} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Planifier un Projet</h5>
            </div>
          </div>
        </div>
      </div>
      <p className="categ">Plus notées</p>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card-group">
            <div className="card carte2">
              <img
                className="card-img-top"
                src={Rectangle7}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Universal icons community</p>
                <p>
                  <img src={Profil} /> Ndiaga Sall <br/>
                  <small className="text-muted texte">Design graphique</small>
                </p>
                <p className="comment">commenter ici..... <img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card carte2">
            <img
              className="card-img-top"
              src={Rectangle2}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Universal icons community</p>
              <p>
                <img src={Profil} /> Ndiaga Sall<br/>
                <small className="text-muted texte">Design graphique</small>
              </p>
              <p className="comment">commenter ici.....  <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card carte2">
            <img
              className="card-img-top"
              src={Rectangle8}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Universal icons community</p>
              <p>
                <img src={Profil} /> Ndiaga Sall<br/>
                <small className="text-muted texte">Design graphique</small>
              </p>
              <p className="comment">commenter ici.....    <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <div className="card carte2">
            <img
              className="card-img-top"
              src={Rectangle5}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Universal icons community</p>
              <p>
                <img src={Profil} /> Ndiaga Sall<br/>
                <small className="text-muted texte">Design graphique</small>
              </p>
            </div>
            <p className="comment"> commenter ici.....    <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
