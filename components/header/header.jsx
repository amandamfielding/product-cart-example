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
        <div className="header-right">
          <div><button onClick={() => this.navToCart()} className="cart-button">Cart</button> |    {this.props.items.length}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
