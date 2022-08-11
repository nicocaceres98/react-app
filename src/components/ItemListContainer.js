import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./itemList/ItemList";
import Title from "./Title";
import { useParams } from "react-router-dom";

const product = [
  {
    id: 1,
    img: "https://xiaomicordoba.com/wp-content/uploads/2021/06/Xiaomi-Redmi-Note-10-Pro.jpg",
    nombre: "Xiaomi Redmi Note 11",
    category: "celulares",
    precio: "$127.000",
  },
  {
    id: 2,
    img: "https://xiaomicordoba.com/wp-content/uploads/2022/07/Haylou-rs4.jpg",
    nombre: "Reloj Haylou Rs4 Xiaomi ",
    category: "relojes",
    precio: "$13.500",
  },
  {
    id: 3,
    img: "https://xiaomicordoba.com/wp-content/uploads/2021/05/redmi-9c.jpg",
    nombre: "Xiaomi Redmi 9C",
    category: "celulares",
    precio: "$85.000",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((product) => product.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
