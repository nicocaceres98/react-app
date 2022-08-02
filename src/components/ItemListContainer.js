import React from "react";
import ItemCount from "./ItemCount/ItemCount";
import Title from "./Title";

export const ItemListContainer = ({ texto }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
