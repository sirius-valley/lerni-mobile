import React, { FunctionComponent } from 'react';
import { ModalTypeEnum } from '../utils/utils';
import { useLDispatch, useLSelector } from '../redux/hooks';
import IntroModal from './modals/IntroModal';
import { closeModal } from '../redux/slice/utils.slice';
import { BlurView } from 'expo-blur';

export const withModal = (Component: FunctionComponent) => (props: any) => {
  const modalType = useLSelector((state) => state.utils.modalType);
  const modalOpen = !!modalType;
  const dispatch = useLDispatch();

  const handleOnClose = () => {
    dispatch(closeModal());
  };

  const renderModal = () => {
    switch (modalType) {
      case ModalTypeEnum.INTRO_MODAL:
        return <IntroModal handleOnClose={handleOnClose} />;
    }
  };

  const ModalContainer = () => {
    return (
      <>
        <BlurView
          style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          intensity={10}
        >
          {renderModal()}
        </BlurView>
      </>
    );
  };

  return (
    <>
      <Component {...props} />
      {modalOpen && ModalContainer()}
    </>
  );
};
