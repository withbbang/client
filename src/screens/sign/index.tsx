import { Action } from 'redux';
import SignCT from './SignCT';
import { connect } from 'react-redux';
import {
  CommonState,
  requestKeyPair
} from 'middlewares/reduxTookits/commonSlice';
import { PropState } from 'middlewares/configureReducer';
import { requestSignIn } from 'middlewares/reduxTookits/signSlice';

const mapStateToProps = (state: PropState): CommonState => {
  return state.common;
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestKeyPair: (): void => {
      dispatch(requestKeyPair());
    },
    requestSignIn: (data: Object): void => {
      dispatch(requestSignIn(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignCT);
