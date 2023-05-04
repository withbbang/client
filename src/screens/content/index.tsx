import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentCT from './ContentCT';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentsState,
  requestContent
} from 'middlewares/reduxTookits/contentsSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | ContentsState => {
  return {
    ...state.common,
    ...state.log,
    ...state.contents
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentCT);
