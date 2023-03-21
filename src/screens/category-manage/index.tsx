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
    requestUpdateCategory: (title: string, priority?: number): void => {
      dispatch(requestUpdateCategory({ title, priority }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManageCT);
