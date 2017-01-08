import { connect } from 'react-redux';
import ProductIndex from './products_index';
import { requestProducts, receiveProducts } from '../../actions/product_actions';

const mapStateToProps = ({ products }) => ({
   products: Object.keys(products).map(key => products[key])
 });

export default connect(
  mapStateToProps
)(ProductIndex);
