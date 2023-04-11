import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentManageCT from './ContentManageCT';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentManageState,
  requestContent
} from 'middlewares/reduxTookits/contentManageSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | ContentManageState => {
  return {
    ...state.common,
    ...state.log,
    ...state.contentManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestContent: (id?: string, contentId?: number): void => {
      dispatch(requestContent({ id, contentId }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentManageCT);
