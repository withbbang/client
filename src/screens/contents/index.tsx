import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentsCT from './ContentsCT';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentManageState,
  requestContents,
  requestDeleteRestoreContent
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
    requestContents: (id?: string): void => {
      dispatch(requestContents({ id }));
    },
    requestDeleteRestoreContent: (contentId: number, id?: string): void => {
      dispatch(requestDeleteRestoreContent({ contentId, id }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentsCT);
