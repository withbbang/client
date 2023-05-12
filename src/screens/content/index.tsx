import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentCT from './ContentCT';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentsState,
  requestContent
} from 'middlewares/reduxTookits/contentsSlice';
import { HeartState, requestHeart } from 'middlewares/reduxTookits/heartSlice';

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
    requestContent: (id?: string, contentId?: number): void => {
      dispatch(requestContent({ id, contentId }));
    },
    requestHeart: (contentId?: number): void => {
      dispatch(requestHeart({ contentId }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCT);
