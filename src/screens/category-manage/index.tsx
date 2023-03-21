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

const mapStateToProps = (state: PropState): CategoryManageState => {
  return {
    ...state.categoryManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestCategory: (): void => {
      dispatch(requestCategory());
    },
    requestCreateCategory: (title: string, priority?: number): void => {
      dispatch(requestCreateCategory({ title, priority }));
    },
    requestUpdateCategory: (categories: Array<Category>): void => {
      dispatch(requestUpdateCategory({ categories }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManageCT);
