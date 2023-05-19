import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import CommentUpdateCT from './CommentUpdateCT';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentUpdateCT);
