import { Action } from 'redux';
import IndexCT from './IndexCT';
import { connect } from 'react-redux';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';

const mapStateToProps = (state: PropState): CommonState | LogState => {
  return {
    ...state.common,
    ...state.log
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
