import React, {Component} from 'react';
import {deleteItem, selectedItem} from "../../store/actions/registerActions";
import {connect} from "react-redux";
import style from "./productsContainer.module.scss";
import Product from "../product/product";

class ProductsContainer extends Component {
  
  onDeleteProduct = (id) => {
    this.props.deleteItem(id);
  };
  
  onSelectProduct = (id) => {
    this.props.selectedItem(id);
  };
  
  render() {
    return <div className={style["product-container-wrapper"]}>
      <ul>{
        this.props.data.map( product => (
        <Product
          data={product}
          handleDelete={this.onDeleteProduct}
          handleSelect={this.onSelectProduct}/>
        ))}
      </ul>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.currData.data,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    selectedItem: (id) => dispatch(selectedItem(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

