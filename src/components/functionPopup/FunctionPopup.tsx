import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './FunctionPopup.module.scss';
import SVG from 'modules/SVG';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const FunctionPopup = ({
  isNight,
  isActive,
  children,
  onClose
}: typeFunctionPopup): JSX.Element => {
  return (
    <>
      {isActive ? (
        <div
          className={
            isNight
              ? [styles.background, styles.night].join(' ')
              : styles.background
          }
        >
          <div className={styles.modal_body}>
            <div className={styles.dnd} draggable>
              <SVG
                type="dnd"
                width="25px"
                height="25px"
                fill={isNight ? '#fff' : '#000'}
              />
            </div>
            <div className={styles.close} onClick={() => onClose()}>
              <SVG
                type="close"
                width="20px"
                height="20px"
                fill={isNight ? '#fff' : '#000'}
              />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typeFunctionPopup extends CommonState {
  isActive: boolean;
  children: JSX.Element | null;
  onClose: (idx?: number) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionPopup);
