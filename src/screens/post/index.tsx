import { connect } from 'react-redux';
import { PropState } from 'middlewares/configureReducer';
import { PostState, requestPost } from 'middlewares/reduxTookits/postSlice';
import { Action } from 'redux';
import PostCT from './PostCT';

const mapStateToProps = (state: PropState): PostState => {
  return {
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
