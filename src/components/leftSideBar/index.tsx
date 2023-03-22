import { PropState } from 'middlewares/configureReducer';
import { AdminState } from 'middlewares/reduxTookits/adminSlice';
import {
  CategoryManageState,
  requestCategory
} from 'middlewares/reduxTookits/categoryManageSlice';
import {
  CommonState,
  requestPublicKey,
  requestVisitCount
} from 'middlewares/reduxTookits/commonSlice';
import {
  LogState,
  requestLogIn,
  requestLogOut
} from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import LeftSideBarCT from './LeftSideBarCT';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | AdminState | CategoryManageState => {
  return {
    ...state.common,
    ...state.log,
    ...state.admin,
    ...state.categoryManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestPublicKey: (): void => {
      dispatch(requestPublicKey());
    },
    requestVisitCount: (): void => {
      dispatch(requestVisitCount());
    },
    requestCategory: (): void => {
      dispatch(requestCategory());
    },
    requestLogIn: (id: string, password: string): void => {
      dispatch(requestLogIn({ id, password }));
    },
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBarCT);
