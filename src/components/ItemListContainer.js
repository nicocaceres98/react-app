import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./itemList/ItemList";
import Title from "./Title";

const product = [
  {
    id: 1,
    image: "https://xiaomicordoba.com/wp-content/uploads/2022/03/Note-11-1.jpg",
    nombre: "Xiaomi Redmi Note 11",
  },
  {
    id: 1,
    image:
      "https://xiaomicordoba.com/wp-content/uploads/2022/07/Haylou-rs4.jpg",
    nombre: "Reloj inteligente Xiaomi ",
  },
  {
    id: 1,
    image: "https://xiaomicordoba.com/wp-content/uploads/2021/05/redmi-9c.jpg",
    nombre: "Xiaomi Redmi 9C",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

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
