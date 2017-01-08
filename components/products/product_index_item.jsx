import React from 'react';
import { withRouter } from 'react-router';

class ProductIndexItem  extends React.Component {
  constructor(props) {
   super(props);
 }

  render() {
    return (
      <div className="product-index-item">
        <ul className="product-details">
          <img className="product-pic" src={"http:"+this.props.product.mainImage.ref}/>
          <div className="index-details">
            <li>{this.props.product.name}</li>
            <li>${(this.props.product.minPrice)/100}</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(ProductIndexItem);
