import "./itemcount.css";

import React, { useEffect, useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrementarContador = () => {
    setCount(count - 1);
  };

  const incrementarContador = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrementarContador}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementarContador}>
        +
      </button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
