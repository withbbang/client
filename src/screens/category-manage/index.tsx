import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import {
  CategoryManageState,
  requestCategory,
  requestCreateCategory,
  requestUpdateCategory
} from 'middlewares/reduxTookits/categoryManageSlice';
import { Action } from 'redux';
import CategoryManageCT from './CategoryManageCT';
import { Category } from 'modules/types';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  AuthorityState,
  requestAuthority
} from 'middlewares/reduxTookits/authoritySlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | CategoryManageState | AuthorityState => {
  return {
    ...state.common,
    ...state.log,
    ...state.categoryManage,
    ...state.authority
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestCategory: (id?: string): void => {
      dispatch(requestCategory({ id }));
    },
    requestCreateCategory: (
      title: string,
      path: string,
      auth: number,
      id?: string,
      priority?: number
    ): void => {
      dispatch(requestCreateCategory({ title, path, auth, id, priority }));
    },
    requestUpdateCategory: (categories: Array<Category>): void => {
      dispatch(requestUpdateCategory({ categories }));
    },
    requestAuthority: (id?: string): void => {
      dispatch(requestAuthority({ id }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManageCT);
