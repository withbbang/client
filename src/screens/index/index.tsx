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
    requestContents: (path?: string, id?: string): void => {
      dispatch(requestContents({ path, id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
