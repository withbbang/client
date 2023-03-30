import { Action } from 'redux';
import IndexCT from './IndexCT';
import { connect } from 'react-redux';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentsState,
  requestContents
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
    requestContents: (title?: string, id?: string): void => {
      dispatch(requestContents({ title, id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
