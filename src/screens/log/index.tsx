import { Action } from 'redux';
import LogCT from './LogCT';
import { connect } from 'react-redux';
import {
  CommonState,
  requestPublicKey
} from 'middlewares/reduxTookits/commonSlice';
import { PropState } from 'middlewares/configureReducer';
import {
  requestLogIn,
  LogState,
  requestLogOut
} from 'middlewares/reduxTookits/logSlice';

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
    requestLogIn: (id: string, password: string): void => {
      dispatch(requestLogIn({ id, password }));
    },
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogCT);
