import { Action } from 'redux';
import IndexCT from './IndexCT';
import { connect } from 'react-redux';
import { getUser } from 'middlewares/reduxTookits/userSlice';

const mapStateToProps = (state: any) => {
  return state.users;
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
