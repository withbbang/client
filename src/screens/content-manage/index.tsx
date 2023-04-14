import { PropState } from 'middlewares/configureReducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ContentManageCT from './ContentManageCT';
import {
  CommonState,
  handleCodeMessage
} from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import {
  ContentManageState,
  requestContent,
  requestCreateContent
} from 'middlewares/reduxTookits/contentManageSlice';
import {
  CategoryManageState,
  requestCategory
} from 'middlewares/reduxTookits/categoryManageSlice';

const mapStateToProps = (
  state: PropState
): CommonState | LogState | CategoryManageState | ContentManageState => {
  return {
    ...state.common,
    ...state.log,
    ...state.categoryManage,
    ...state.contentManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestCategory: (id?: string): void => {
      dispatch(requestCategory({ id }));
    },
    requestContent: (id?: string, contentId?: number): void => {
      dispatch(requestContent({ id, contentId }));
    },
    requestCreateContent: (
      categoryId: number,
      title: string,
      content: string,
      id?: string
    ) => {
      dispatch(requestCreateContent({ categoryId, title, content, id }));
    },
    handleCodeMessage: (code: string, message: string): void => {
      dispatch(handleCodeMessage({ code, message }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentManageCT);
