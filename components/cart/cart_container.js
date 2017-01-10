import { connect } from 'react-redux';
import Cart from './cart';
import { deleteItem } from '../../actions/cart_actions';

const mapStateToProps = ( {items} ) => ({
   items: Object.keys(items).map(key => items[key])
 });

const mapDispatchToProps = (dispatch) => ({
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
