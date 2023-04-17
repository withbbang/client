import React, { useState } from 'react';
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
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [currentX, setCurrentX] = useState<number | undefined>();
  const [currentY, setCurrentY] = useState<number | undefined>();
  const [initialX, setInitialX] = useState<number | undefined>();
  const [initialY, setInitialY] = useState<number | undefined>();
  const [xOffset, setXOffset] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);

  const handleSetTranslate = (
    xPos: number,
    yPos: number,
    el: HTMLElement | null
  ) => {
    if (el) {
      el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setInitialX(e.clientX - xOffset);
    setInitialY(e.clientY - yOffset);

    if (e.target === document.getElementById('item')) {
      setIsDragging(true);
    }
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setInitialX(currentX);
    setInitialX(currentY);
    setIsDragging(false);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      e.preventDefault();

      initialX && setCurrentX(e.clientX - initialX);
      initialY && setCurrentY(e.clientY - initialY);

      currentX && setXOffset(currentX);
      currentY && setYOffset(currentY);

      currentX &&
        currentY &&
        handleSetTranslate(currentX, currentY, document.getElementById('item'));
    }
  };

  return (
    <>
      {isActive ? (
        <div
          className={
            isNight
              ? [styles.background, styles.night].join(' ')
              : styles.background
          }
          id={'container'}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDrag}
        >
          <div className={styles.modal_body} id={'item'} draggable>
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
