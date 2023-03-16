import { PropState } from 'middlewares/configureReducer';
import {
  requestAdminInfo,
  AdminState
} from 'middlewares/reduxTookits/adminSlice';
import { requestLogOut } from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import AdminCT from './AdminCT';

const mapStateToProps = (state: PropState): AdminState => {
  return {
    ...state.admin
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestAdminInfo: (): void => {
      dispatch(requestAdminInfo());
    },
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCT);
