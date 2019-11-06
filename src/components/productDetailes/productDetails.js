import React from 'react';
import style from "./productDetailes.module.scss";
import {Button, Input} from "antd";

const { TextArea } = Input;

function ProductDetails({nameValue, descriptionValue, priceValue, submit, onChange}) {
  
  const isSubmitEnabled = () => {
    return nameValue && descriptionValue && priceValue;
  };
  
  
  return (
    <div className={style["product-details-wrapper"]}>
      <form className="evidence-form" onSubmit={submit}>
        <div className="form-item">
        <div className="image"/>
        </div>
        <div className="form-item">
          <label htmlFor={"evidence-source"}>Source</label>
          <Input
            id="username"
            name="productUserName"
            onChange={onChange}
            className={"form-item-source"}
            value={nameValue}
            required
          />
        </div>
         <div className="form-item">
          <label htmlFor={"product-description-textarea"}>Description</label>
          <TextArea
            id={"product-description-textarea"}
            autosize
            value={descriptionValue}
            name={"product-description-textarea"}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor={"price"}>Source</label>
          <Input
            id="product-price"
            name="productPrice"
            onChange={onChange}
            className={"form-item-source"}
            value={priceValue}
            required
          />{ "$"}
        </div>
  
        <div className="divider" />
        <Button type="primary" htmlType="submit" disabled={!isSubmitEnabled()}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default ProductDetails;
