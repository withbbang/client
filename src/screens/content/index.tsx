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
import {
  HeartState,
  requestHeart,
  requestSetHeart
} from 'middlewares/reduxTookits/heartSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | ContentsState | HeartState => {
  return {
    ...state.common,
    ...state.log,
    ...state.contents,
    ...state.heart
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    },
    requestContent: (id?: string, contentId?: number): void => {
      dispatch(requestContent({ id, contentId }));
    },
    requestHeart: (contentId?: number): void => {
      dispatch(requestHeart({ contentId }));
    },
    requestSetHeart: (contentId?: number): void => {
      dispatch(requestSetHeart({ contentId }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCT);
