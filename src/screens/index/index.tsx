import { Action } from 'redux';
import IndexCT from './IndexCT';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return state.users;
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
