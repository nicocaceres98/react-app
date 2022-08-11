import React from "react";
import "./itemlist.css";
import { Link } from "react-router-dom";
import "./itemlist.css";

const Item = ({ info }) => {
  return (
    <div className="toparticulo">
      <div className="card">
        <img className="card-img-top" src={info.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{info.nombre}</h5>
          <p className="card-text">{info.desc}</p>
          <p class="card-text fs-2">{info.precio}</p>
          <Link to={`/detalle/${info.id}`} className="btn btn-primary">
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
