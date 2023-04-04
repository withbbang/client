import { connect } from 'react-redux';
import { PropState } from 'middlewares/configureReducer';
import { PostState, requestPost } from 'middlewares/reduxTookits/postSlice';
import { Action } from 'redux';
import PostCT from './PostCT';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';

const mapStateToProps = (state: PropState): CommonState | PostState => {
  return {
    ...state.common,
    ...state.post
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestPost: (code: string): void => {
      dispatch(requestPost({ code }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCT);
