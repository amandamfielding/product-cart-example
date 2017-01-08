import React from 'react';

class ProductIndexItem extends React.Component {
  constructor(props) {
   super(props);
   this.state = {items: []};
  }

  render() {
    return (
      <div className="product-index-item">
        <ul className="product-details">
          <img className="product-pic" src={"http:"+this.props.product.mainImage.ref}/>
          <div className="index-details">
            <li>{this.props.product.name}</li>
            <li className="price">${(this.props.product.minPrice)/100}</li>
          </div>
        </ul>
        <button onClick={() => this.props.addItem([this.props.product])} className="add-to-cart">Add To Cart</button>
      </div>
    );
  }
}

export default ProductIndexItem;
