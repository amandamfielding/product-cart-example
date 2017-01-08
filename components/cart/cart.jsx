import React from 'react';
import { withRouter } from 'react-router';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.items) {
      let items = this.props.items.map(item => {
        if (item) {
          return (
            <div>
              {item.name}
            </div>
            );
          }
        });
        return (
          <div className="items-container">
            <div className="items">
              {items}
            </div>
          </div>
        );
      } else {
        return (<div></div>);
      }
  }
}

export default withRouter(Cart);
