import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import { Image, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import { LockIcon } from '../../../../assets/icons/LockIcon';
import { setModalOpen } from '../../../redux/slice/utils.slice';
import { ModalTypeEnum } from '../../../utils/utils';
import { useDispatch } from 'react-redux';

interface ProgramCardProps {
  id: string;
  title: string;
  imgUrl: string;
  status: 'in_progress' | 'completed' | 'not_started' | 'locked';
  progress?: number;
  onPress?: () => void;
}

const ProgramCard = ({ id, title, imgUrl, status, progress, onPress }: ProgramCardProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleOnPress = () => onPress && onPress();

  const openIntroModal = () => {
    dispatch(setModalOpen({ modalType: ModalTypeEnum.INTRO_MODAL }));
  };
  return (
    <StyledColumn
      key={id}
      css={{
        width: 109,
        height: 145,
        gap: 6,
        alignItems: 'center',
      }}
    >
      <ProgramImage status={status} imgUrl={imgUrl} />

      <StyledText
        variant="body1"
        css={{ color: theme.gray100, opacity: status === 'locked' ? 0.3 : 1 }}
      >
        {title}
      </StyledText>

      {status === 'in_progress' && (
        <StyledBox css={{ width: '100%', gap: 10 }}>
          <Progress.Bar
            unfilledColor={theme.gray600}
            color={theme.primary400}
            height={6}
            progress={progress}
            borderWidth={0}
            width={null}
            borderRadius={20}
          />
        </StyledBox>
      )}
    </StyledColumn>
  );
};

export default ProgramCard;
