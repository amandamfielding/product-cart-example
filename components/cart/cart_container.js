import { connect } from 'react-redux';
import Cart from './cart';

const mapStateToProps = ({ items }) => {
  debugger
return ({
  items: Object[0].Object.items.keys(items).map(key => items[key])
}
);
 };

export default connect(
  mapStateToProps
)(Cart);
