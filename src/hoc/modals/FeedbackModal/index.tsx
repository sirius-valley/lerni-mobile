import React, { useEffect, useState } from 'react';
import { ModalProps } from '../interfaces';
import { StyledModal } from '../styles';
import {
  StyledColumn,
  StyledLine,
  StyledRow,
  StyledText,
  StyledTextArea,
} from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import { Switch } from 'react-native';
import LikeIcon from '../../../../assets/icons/LikeIcon';
import DislikeIcon from '../../../../assets/icons/DislikeIcon';
import FeedbackButton from './components/FeedbackButton';
import Button from '../../../components/styled/Button';
import { useFeedbackMutation } from '../../../redux/service/program.service';
import { closeModal, setModalOpen, showToast } from '../../../redux/slice/utils.slice';
import { ModalTypeEnum } from '../../../utils/utils';
import { useLDispatch, useLSelector } from '../../../redux/hooks';
import { setProgramId } from '../../../redux/slice/program.slice';
import { set } from 'husky';

interface FeedbackModalProps extends ModalProps {}

const FeedbackModal = ({ handleOnClose }: FeedbackModalProps) => {
  const theme = useTheme();
  const [feedback, setFeedback] = useState<{ like: boolean; dislike: boolean }>({
    like: false,
    dislike: false,
  });
  const [publicOpinion, setPublicOpinion] = useState<boolean>(true);
  const [text, setText] = useState<string>('');
  const dispatch = useLDispatch();
  const programId = useLSelector((state) => state.program.id);

  const [send, { isLoading }] = useFeedbackMutation();
  const handleSend = () => {
    send({
      vote: feedback.like ? 'up' : 'down',
      privacy: publicOpinion ? 'public' : 'private',
      content: text,
      programId: 'programId',
    })
      .then((res) => {
        dispatch(showToast({ type: 'success', text: 'Se agregó tu opinión con éxito!' }));
        dispatch(closeModal());
      })
      .catch((e) => {
        dispatch(showToast({ type: 'error', text: 'Ha ocurrido un error. Intente denuevo' }));
      });
  };

  useEffect(() => {
    return () => {
      dispatch(setProgramId({ id: undefined }));
    };
  }, []);
  return (
    <StyledModal css={{ alignItems: 'center', gap: 16 }}>
      <StyledColumn
        css={{ gap: 16, opacity: isLoading ? 0.2 : 1, width: '100%' }}
        pointerEvents={isLoading ? 'none' : 'auto'}
      >
        <StyledText variant="h1" css={{ textAlign: 'center', color: theme.white }}>
          {`Queremos conocer \n tu opinión 💬`}
        </StyledText>
        <StyledLine color={'primary600'} />
        <StyledColumn css={{ gap: 16, alignItems: 'center' }}>
          <StyledText variant={'h4'} css={{ color: theme.white }}>
            Te gustó el programa? <StyledText css={{ color: theme.red500 }}>*</StyledText>
          </StyledText>
          <StyledRow css={{ gap: 16 }}>
            <FeedbackButton
              selected={feedback.like}
              icon={LikeIcon}
              onPress={() => setFeedback({ dislike: false, like: true })}
            />
            <FeedbackButton
              selected={feedback.dislike}
              icon={DislikeIcon}
              onPress={() => setFeedback({ like: false, dislike: true })}
            />
          </StyledRow>
        </StyledColumn>
        <StyledColumn css={{ gap: 16, width: '100%' }}>
          <StyledText variant={'h4'} css={{ color: theme.white, textAlign: 'center' }}>
            Querés dejarnos algún comentario?
          </StyledText>
          <StyledTextArea
            multiline
            editable
            placeholder={'Escribe aquí tu comentario'}
            placeholderTextColor={theme.gray400}
            numberOfLines={5}
            value={text}
            onChangeText={(text) => setText(text)}
            maxLength={100}
            css={{
              fontSize: 12,
              color: theme.white,
              borderRadius: 4,
              width: '100%',
              height: 94,
            }}
          />

          <StyledRow css={{ gap: 8, alignItems: 'center' }}>
            <Switch
              value={publicOpinion}
              onValueChange={() => setPublicOpinion(!publicOpinion)}
              trackColor={{ true: theme.primary500, false: theme.gray600 }}
            />
            <StyledText variant={'body2'} css={{ color: theme.white }}>
              Público
              <StyledText variant={'body3'} css={{ color: theme.white }}>
                {` (Todos pueden ver tu comentario)`}
              </StyledText>
            </StyledText>
          </StyledRow>
        </StyledColumn>
      </StyledColumn>

      <Button
        onPress={handleSend}
        variant={'primary'}
        css={{ width: '100%' }}
        disabled={!feedback.like && !feedback.dislike}
        loading={isLoading}
      >
        Enviar
      </Button>
    </StyledModal>
  );
};

export default FeedbackModal;
