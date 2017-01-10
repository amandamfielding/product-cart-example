import { connect } from 'react-redux';
import Cart from './cart';

const mapStateToProps = ( {items} ) => ({
   items: Object.keys(items).map(key => items[key])
 });

export default connect(
  mapStateToProps
)(Cart);
