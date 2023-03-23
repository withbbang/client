import { PropState } from 'middlewares/configureReducer';
import { LogState, requestLogOut } from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import AdminCT from './AdminCT';

const mapStateToProps = (state: PropState): LogState => {
  return {
    ...state.log
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCT);
