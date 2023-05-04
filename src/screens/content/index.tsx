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
import { requestHeartsCount } from 'middlewares/reduxTookits/heartSlice';

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
    requestHeartsCount: (contentId?: number): void => {
      dispatch(requestHeartsCount({ contentId }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCT);
