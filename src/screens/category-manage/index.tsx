import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import {
  CategoryManageState,
  requestCategory,
  requestCreateCategory,
  requestSingleUpdateCategory,
  requestMultiUpdateCategory,
  requestDeleteRestoreCategory
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
    ...state.categoryManage,
    ...state.common,
    ...state.log,
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
    requestSingleUpdateCategory: (
      isDeleted: string,
      title: string,
      id: string,
      path: string,
      categoryId: number,
      auth: number,
      priority?: number
    ): void => {
      dispatch(
        requestSingleUpdateCategory({
          isDeleted,
          title,
          id,
          path,
          categoryId,
          auth,
          priority
        })
      );
    },
    requestMultiUpdateCategory: (
      categories: Array<Category>,
      id?: string
    ): void => {
      dispatch(requestMultiUpdateCategory({ id, categories }));
    },
    requestDeleteRestoreCategory: (
      isDeleted: string,
      categoryId: number,
      id?: string
    ): void => {
      dispatch(requestDeleteRestoreCategory({ isDeleted, categoryId, id }));
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
