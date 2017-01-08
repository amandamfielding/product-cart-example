import React from 'react';
import { withRouter } from 'react-router';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.products) {
      let products = this.props.products.map(product => {
        if (product) {
          return (
            <ProductIndexItem
              product={product}
              key={product["id"]} />
            );
          }
        });

      return (
        <div className="products-container">
          <div className="products">
            {products}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ProductIndex;
