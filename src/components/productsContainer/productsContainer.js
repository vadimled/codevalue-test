import React, {Component} from 'react';
import {deleteItem, editItem} from "../../store/actions/registerActions";
import {connect} from "react-redux";
import style from "./productsContainer.module.scss";
import Product from "../product/product";

class ProductsContainer extends Component {
  
  onDeleteProduct = (id) => {
    this.props.deleteItem(id);
  };
  
  onEditProduct = (data) => {
    this.props.editItem(data);
  };
  
  render() {
    return <div className={style["product-container-wrapper"]}>
      <ul>{
        this.props.data.map( product => (
        <Product
          data={product}
          handleDelete={this.onDeleteProduct}
          handleEdit={this.onEditProduct}/>
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
    editItem: (id) => dispatch(editItem(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

