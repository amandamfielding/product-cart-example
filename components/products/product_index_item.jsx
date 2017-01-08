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
            <img className="item-pic" src={"http:"+this.props.product.mainImage.ref}/>
            <li className="index-item-value">{this.props.product.name}</li>
            <li className="index-item-value">{this.props.product.minPrice}</li>
          </ul>
      </div>
    );
  }
}

export default withRouter(ProductIndexItem);
