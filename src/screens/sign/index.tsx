import { Action } from 'redux';
import SignCT from './SignCT';
import { connect } from 'react-redux';
import { requestKeyPair } from 'middlewares/reduxTookits/commonSlice';
import { PropState } from 'middlewares/configureReducer';

const mapStateToProps = (state: PropState) => {
  return state.common;
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestKeyPair: (): void => {
      dispatch(requestKeyPair());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignCT);
