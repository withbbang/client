import { PropState } from 'middlewares/configureReducer';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import {
  SearchContentsState,
  requestSearchContents
} from 'middlewares/reduxTookits/searchContents';
import { connect } from 'react-redux';
import { Action } from 'redux';
import SearchCT from './SearchCT';
import { LogState } from 'middlewares/reduxTookits/logSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | SearchContentsState => {
  return {
    ...state.common,
    ...state.log,
    ...state.searchContents
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestSearchContents: (snippet: string, id?: string): void => {
      dispatch(requestSearchContents({ snippet, id }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCT);
