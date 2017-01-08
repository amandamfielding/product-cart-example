import { connect } from 'react-redux';
import ProductIndex from './products_index';
import { addItem } from '../../actions/cart_actions';

const mapStateToProps = ({ products }) => ({
   products: Object.keys(products).map(key => products[key])
 });

 const mapDispatchToProps = (dispatch) => ({
   addItem: item => dispatch(addItem(item))
 });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
