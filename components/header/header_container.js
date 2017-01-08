import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ items }) => ({
   items: items
 });

export default connect(
  mapStateToProps
)(Header);
