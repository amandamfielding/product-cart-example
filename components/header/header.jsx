import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  navToCart() {
    this.props.router.push('cart');
  }

  render()  {
    return (
      <div className="header-container">
        <div className="logo">FIJI Water Accessories</div>
        <div className="cart-header">
          <div onClick={() => this.navToCart()}>Cart |  {this.props.items.count}</div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
