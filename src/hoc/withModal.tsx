import React, { FunctionComponent } from 'react';
import { ModalTypeEnum } from '../utils/utils';
import { useLDispatch, useLSelector } from '../redux/hooks';
import IntroModal from './modals/IntroModal';
import { closeModal } from '../redux/slice/utils.slice';
import { BlurView } from 'expo-blur';
import FeedbackModal from './modals/FeedbackModal';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const withModal = (Component: FunctionComponent) => (props: any) => {
  const type = useLSelector((state) => state.utils.modalType);
  const open = !!type;
  const dispatch = useLDispatch();

  const handleOnClose = () => {
    dispatch(closeModal());
  };

  const renderModal = () => {
    switch (type) {
      case ModalTypeEnum.INTRO_MODAL:
        return <IntroModal handleOnClose={handleOnClose} />;
      case ModalTypeEnum.FEEDBACK_MODAL:
        return <FeedbackModal handleOnClose={handleOnClose} />;
    }
  };

  const ModalContainer = () => {
    return (
      <BlurView
        style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        intensity={10}
      >
        <KeyboardAvoidingView
          enabled
          style={{ height: '100%' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={10}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            {renderModal()}
          </ScrollView>
        </KeyboardAvoidingView>
      </BlurView>
    );
  };

  return (
    <>
      <Component {...props} />
      {open && ModalContainer()}
    </>
  );
};
