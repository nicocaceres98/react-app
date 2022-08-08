import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const info = {
  id: 1,
  img: "https://xiaomicordoba.com/wp-content/uploads/2021/06/Xiaomi-Redmi-Note-10-Pro.jpg",
  title: "Xiaomi Redmi note 10",
  precio: "$80000",
  desc: "El Xiaomi Redmi Note 10 Pro 128GB es un smartphone que se caracteriza por su pantalla AMOLED de 6.67 pulgadas con tasa de refresco a 120 Hz, su batería de 5020 mAh con carga rápida de 33W y su cámara trasera de 108 MP + 8 MP + 5 MP + 2 MP. En cuanto a la CPU viene equipado con un Qualcomm Snapdragon 732G fabricado en un proceso de 8nm. Los altavoces duales en la parte superior e inferior del dispositivo ofrecen una experiencia de sonido más envolvente, perfecta para disfrutar de contenido multimedia, jugar o escuchar tu música favorita.",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(info);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
