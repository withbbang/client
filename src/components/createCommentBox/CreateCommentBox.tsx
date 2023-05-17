import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './CreateCommentBox.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const CreateCommentBox = ({
  isNight,
  nickName,
  password,
  comments,
  isSecret,
  isDoing,
  onSetNickName,
  onSetPassword,
  onSetComments,
  onSetIsSecret,
  onSetIsDoing,
  onCreateUpdateComment
}: typeCreateCommentBox): JSX.Element => {
  return (
    <>
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.topContents}>
          <input
            placeholder="NICKNAME"
            type="text"
            id="nickName"
            value={nickName}
            onChange={(e) => onSetNickName(e.target.value)}
          />
          <input
            placeholder="PASSWORD"
            type="password"
            id="password"
            value={password}
            onChange={(e) => onSetPassword(e.target.value)}
          />
          <label className={styles.secret}>
            <input
              type="checkbox"
              defaultValue={'N'}
              value={isSecret}
              onChange={(e) => onSetIsSecret(e.target.checked ? 'Y' : 'N')}
            />
            &nbsp;Secret
          </label>
          {isDoing !== undefined && (
            <button
              onClick={() =>
                onSetIsDoing && isDoing !== undefined && onSetIsDoing(!isDoing)
              }
            >
              Cancel
            </button>
          )}
          <button onClick={onCreateUpdateComment}>Comment !</button>
        </div>
        <div className={styles.bottomContents}>
          <textarea
            placeholder="COMMENTS"
            id="comments"
            value={comments}
            onChange={(e) => onSetComments(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

interface typeCreateCommentBox extends CommonState {
  nickName: string;
  password: string;
  comments: string;
  isSecret: string;
  isDoing?: boolean;
  onSetNickName: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword: React.Dispatch<React.SetStateAction<string>>;
  onSetComments: React.Dispatch<React.SetStateAction<string>>;
  onSetIsSecret: React.Dispatch<React.SetStateAction<string>>;
  onSetIsDoing?: React.Dispatch<React.SetStateAction<boolean>>;
  onCreateUpdateComment: () => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentBox);
