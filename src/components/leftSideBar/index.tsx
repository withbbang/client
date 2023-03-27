import { PropState } from 'middlewares/configureReducer';
import {
  CommonState,
  requestPublicKey,
  requestSideBarCategory,
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

const mapStateToProps = (state: PropState): CommonState | LogState => {
  return {
    ...state.common,
    ...state.log
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
    requestSideBarCategory: (): void => {
      dispatch(requestSideBarCategory());
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
