import React from 'react';
import { withRouter } from 'react-router';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  navToProducts() {
    this.props.router.push('');
  }

  calculateTotal() {
    let total = 0;
    this.props.items.forEach((item) => {total += (parseInt(item.minPrice)/100);});
    return total;
  }

  render() {
    if (this.props.items) {
      let items = this.props.items.map(item => {

        if (item) {
          return (
            <CartItem
              item={item}
              key={item.id}
              cart={this}
              deleteItem={this.props.deleteItem}
            />
            );
          }
        });
        return (
          <div className="items-container">
            <div className="items">
              {items}
            </div>
            <div className="total-box">
              <div className="total">Total ${this.calculateTotal()}</div>
              <button onClick={() => alert("Sorry, I won't let you spend your hard earned money on FIJI Water bottle accessories.")} className="checkout">Checkout</button>
              <button onClick={() => this.navToProducts()} className="checkout">Continue Shopping</button>
            </div>
          </div>
        );
      } else {
        return (<div></div>);
      }
  }
}

export default withRouter(Cart);
