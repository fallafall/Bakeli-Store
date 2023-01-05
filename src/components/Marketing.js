import React from 'react'
import Profil from "../imgs/Profil.png";
import Rectangle7 from "../imgs/Rectangle7.png";
import Rectangle2 from "../imgs/Rectangle2.png";
import Rectangle5 from "../imgs/Rectangle5.png";
import Rectangle8 from "../imgs/Rectangle8.png";
import Vector3 from '../imgs/Vector3.png';
import Vector4 from '../imgs/Vector4.png';
import Rectangle1 from "../imgs/Rectangle1.png";
import Rectangle3 from "../imgs/Rectangle3.png";
import Rectangle4 from "../imgs/Rectangle4.png";
import Rectangle6  from "../imgs/Rectangle6.png";
import { useNavigate} from 'react-router-dom';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>;
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>



function Marketing() {
  const navigate = useNavigate();

  return (
    <div>
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card-group">
            <div onClick={()=>navigate("/Detail")} className="card carte2">
              <img
                className="card-img-top"
                src={Rectangle3}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Universal icons community</p>
                <p>
                  <img src={Profil} /> Ndiaga Sall <br/>
                  <small className="text-muted texte">Design graphique</small>
                </p>
                <input className='input border-0' type="text" placeholder='Commenter ici.......' />
                 <img  className='icon' src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
          <div className="card carte2">
            <img
              className="card-img-top"
              src={Rectangle1}
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
              src={Rectangle4}
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
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
          <div className="card carte2">
            <img
              className="card-img-top"
              src={Rectangle6}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Universal icons community</p>
              <p>
                <img src={Profil} /> Ndiaga Sall<br/>
                <small className="text-muted texte">Design graphique</small>
              </p>
            </div>
            <p className="comment"> commenter ici.....  <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
          </div>
        </div>
      </div>
      <br/>
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
                <p className="comment">commenter ici.....  <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
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
              <p className="comment">commenter ici.....  <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
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
            <p className="comment"> commenter ici.....  <img src={Vector4}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/><img src={Vector3}/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketing