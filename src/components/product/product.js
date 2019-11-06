import React from 'react';
import style from "./product.module.scss";
import {Button} from "antd";

function Product({data, handleDelete, handleEdit}) {
  const {description, name, id} = data;
  return (
    <li className={style["product-wrapper"]} onClick={() => handleEdit(id)}>
      <div className="product-content">
        <div className="image"/>
        <div className="description-wrapper">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
        <Button type="primary"
                onClick={handleDelete}
                size="large">Delete</Button>
      </div>
    </li>
  );
}

export default Product;
