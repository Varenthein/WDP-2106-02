import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getDeviceType, setWidth } from '../../../redux/deviceRedux';

const mapStateToProps = state => ({
  deviceType: getDeviceType(state),
});

const mapDispatchToProps = dispatch => ({
  setWidth: window => dispatch(setWidth(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
