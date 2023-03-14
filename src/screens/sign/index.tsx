import { Action } from 'redux';
import SignCT from './SignCT';
import { connect } from 'react-redux';
import {
  CommonState,
  requestPublicKey
} from 'middlewares/reduxTookits/commonSlice';
import { PropState } from 'middlewares/configureReducer';
import {
  requestSignUp,
  requestSignOut,
  SignState
} from 'middlewares/reduxTookits/signSlice';

const mapStateToProps = (state: PropState): CommonState | SignState => {
  return {
    ...state.common,
    ...state.sign
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestPublicKey: (): void => {
      dispatch(requestPublicKey());
    },
    requestSignUp: ({
      id,
      password
    }: {
      id: string;
      password: string;
    }): void => {
      dispatch(requestSignUp({ id, password }));
    },
    requestSignOut: ({
      id,
      password
    }: {
      id: string;
      password: string;
    }): void => {
      dispatch(requestSignOut({ id, password }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignCT);
