import { PropState } from 'middlewares/configureReducer';
import {
  LogState,
  requestForceLogOut
} from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import ErrorPopupCT from './ErrorPopupCT';

const mapStateToProps = (
  state: PropState
): CommonState | SignState | LogState | CategoryManageState => {
  return {
    ...state.common,
    ...state.sign,
    ...state.log,
    ...state.categoryManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestForceLogOut: (id: string): void => {
      dispatch(requestForceLogOut({ id }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopupCT);
