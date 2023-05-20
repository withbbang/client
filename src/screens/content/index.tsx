import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentCT from './ContentCT';
import {
  CommonState,
  handleCodeMessage,
  requestPublicKey
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
import {
  CommentState,
  requestComments,
  requestCreateComment
} from 'middlewares/reduxTookits/commentSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | ContentsState | HeartState | CommentState => {
  return {
    ...state.common,
    ...state.log,
    ...state.contents,
    ...state.heart,
    ...state.comment
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    },
    requestPublicKey: (): void => {
      dispatch(requestPublicKey());
    },
    requestContent: (id?: string, contentId?: number): void => {
      dispatch(requestContent({ id, contentId }));
    },
    requestHeart: (contentId?: number): void => {
      dispatch(requestHeart({ contentId }));
    },
    requestSetHeart: (contentId?: number): void => {
      dispatch(requestSetHeart({ contentId }));
    },
    requestComments: (id?: string, contentId?: number): void => {
      dispatch(requestComments({ id, contentId }));
    },
    requestCreateComment: (
      nickName: string,
      password: string,
      contentId: number,
      comments: string,
      isSecret?: string,
      refId?: number
    ): void => {
      dispatch(
        requestCreateComment({
          nickName,
          password,
          contentId,
          comments,
          isSecret,
          refId
        })
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCT);
