import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div className="cart-item">
        <ul className="cart-details">
          <img className="cart-pic" src={"http:"+this.props.item.mainImage.ref}/>
          <div className="cart-index-details">
            <div className="cart-details-left">
              <li>{this.props.item.name}</li>
              <li className="price">${(this.props.item.minPrice)/100}</li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default CartItem;
