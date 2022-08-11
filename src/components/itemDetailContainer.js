import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const product = [
  {
    id: 1,
    img: "https://xiaomicordoba.com/wp-content/uploads/2021/06/Xiaomi-Redmi-Note-10-Pro.jpg",
    title: "Xiaomi Redmi note 10",
    precio: "$80000",
    category: "celulares",
    desc: "El Xiaomi Redmi Note 10 Pro 128GB es un smartphone que se caracteriza por su pantalla AMOLED de 6.67 pulgadas con tasa de refresco a 120 Hz, su batería de 5020 mAh con carga rápida de 33W y su cámara trasera de 108 MP + 8 MP + 5 MP + 2 MP. En cuanto a la CPU viene equipado con un Qualcomm Snapdragon 732G fabricado en un proceso de 8nm. Los altavoces duales en la parte superior e inferior del dispositivo ofrecen una experiencia de sonido más envolvente, perfecta para disfrutar de contenido multimedia, jugar o escuchar tu música favorita.",
  },
  {
    id: 2,
    img: "https://xiaomicordoba.com/wp-content/uploads/2022/07/Haylou-rs4.jpg",
    title: "Reloj Haylou Rs4 Xiaomi",
    precio: "$13.500",
    category: "relojes",
    desc: "Con el nuevo Haylou RS4, la marca da un salto de calidad y apuesta por el diseño y la gran pantalla para convencer a los usuarios que busquen calidad-precio para su smartwatch. Es de destacar que un smartwatch con el precio del RS4 cuente con un cuerpo metálico justo a ese panel Amoled. Además, cuenta con resistencia al agua y al polvo con certificado IP68.",
  },
  {
    id: 3,
    img: "https://xiaomicordoba.com/wp-content/uploads/2021/05/redmi-9c.jpg",
    title: "Xiaomi Redmi 9C",
    precio: "$80000",
    category: "celulares",
    desc: "Este smartphone de gama de entrada se caracteriza por su pantalla HD+ de 6.53 pulgadas y sus tres cámaras traseras. Además otro elemento destacable es su batería de 5000 mAh que lo dota de gran autonomía.",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });
    getData.then((res) =>
      setData(res.find((products) => products.id === parseInt(detalleId)))
    );
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
