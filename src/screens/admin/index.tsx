import { PropState } from 'middlewares/configureReducer';
import { requestUserInfo, UserState } from 'middlewares/reduxTookits/userSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import AdminCT from './AdminCT';

const mapStateToProps = (state: PropState): UserState => {
  return {
    ...state.user
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestUserInfo: (id: string): void => {
      dispatch(requestUserInfo({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCT);
