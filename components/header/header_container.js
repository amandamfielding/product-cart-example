import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ( {items} ) => ({
   items: Object.keys(items).map(key => items[key])
 });

export default connect(
  mapStateToProps
)(Header);
