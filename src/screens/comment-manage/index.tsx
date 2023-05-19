import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import {
  CommonState,
  handleCodeMessage,
  requestPublicKey
} from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import CommentManageCT from './CommentManageCT';
import { requestDeleteComment } from 'middlewares/reduxTookits/commentSlice';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
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
    requestDeleteComment: (commentId: number, password: string): void => {
      dispatch(requestDeleteComment({ commentId, password }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentManageCT);
