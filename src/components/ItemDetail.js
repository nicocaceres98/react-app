import "./ItemDetail.css";
import React from "react";

function ItemDetail({ data }) {
  return (
    <div className="toparticulo">
      <div className="card">
        <img className="card-img-top" src={data.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.desc}</p>
          <p class="card-text fs-2">{data.precio}</p>
          <a href="#" className="btn btn-primary">
            Detalle
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
