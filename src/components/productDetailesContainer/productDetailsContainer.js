import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductDetails from "../productDetailes";
import style from "./productDetailesContainer.module.css";

class ProductDetailsContainer extends Component {
  handleSubmit = e => {
    console.log(e.target);
  };
  
  handleOnChange = e => {
    console.log(e.target);
  };
  
  render() {
    const {data, id} = this.props;
    
    return id &&
      (<div className={style["product-details-container-wrapper"]}>
        <ProductDetails
          descriptionValue={"uteiuqrEF;"}
          nameValue={"DAN"}
          priceValue={23}
          submit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
      </div>)
  }
}

const mapStateToProps = state => {
  return {
    data: state.currData.data,
    id: state.currData.selectedProductId
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
