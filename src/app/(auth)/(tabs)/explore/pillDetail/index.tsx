import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../../components/styled/styles';
import BackArrow from '../../../../../../assets/icons/BackArrow';
import { Pressable, ScrollView, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ChatBubble } from '../../../../../components/bubbles/ChatBubble';
import * as Progress from 'react-native-progress';
import { Avatar } from '../../../../../components/common/Avatar';
import PillSkeleton from './PillSkeleton';
import Button from '../../../../../components/styled/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LockIcon from '../../../../../../assets/icons/LockIcon';
import { mockedPillDetail, mockedProfessorMessage } from '../utils';

const PillDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const isLoading = false;

  if (isLoading)
    return (
      <StyledColumn css={{ width: '100%', height: '100%' }}>
        <PillSkeleton />
      </StyledColumn>
    );
  return (
    <>
      <ScrollView
        style={{ width: '100%', height: '100%', paddingHorizontal: 12 }}
        scrollIndicatorInsets={{ right: -30 }}
      >
        <StyledColumn css={{ flex: 1, justifyContent: 'flex-start', height: '100%' }}>
          <StyledColumn
            css={{
              gap: 16,
              width: '100%',
              height: '100%',
            }}
          >
            <StyledRow
              css={{
                height: 33,
                alignItems: 'center',
              }}
            >
              <StyledBox
                css={{
                  height: 33,
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                }}
              >
                <Pressable onPress={() => router.back()}>
                  <BackArrow />
                </Pressable>
              </StyledBox>
            </StyledRow>
            <StyledColumn css={{ gap: 8, alignItems: 'center' }}>
              <StyledBox
                css={{
                  width: 166,
                  height: 166,
                  justifyContent: ' center',
                  alignItems: ' center',
                }}
              >
                <Progress.Circle
                  size={166}
                  thickness={10}
                  borderColor={theme.gray600}
                  unfilledColor={theme.gray600}
                  color={theme.primary500}
                  progress={mockedPillDetail.progress}
                  showsText={true}
                  formatText={() =>
                    !mockedPillDetail.introductionDone ? (
                      <LockIcon size={72} />
                    ) : (
                      mockedPillDetail.order
                    )
                  }
                  textStyle={{
                    fontSize: 43,
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: 6,
                  }}
                  animated={false}
                />
              </StyledBox>
              <StyledText
                variant="h2"
                css={{
                  gap: 6,
                  alignItems: 'center',
                  color: theme.white,
                }}
              >
                Píldora {mockedPillDetail.order}
              </StyledText>
              <StyledText
                variant="body1"
                css={{
                  gap: 6,
                  alignItems: 'center',
                  color: theme.gray400,
                }}
              >
                {mockedPillDetail.professor}
              </StyledText>
            </StyledColumn>
            <StyledColumn
              css={{
                alignItems: 'center',
                gap: 24,
              }}
            >
              <StyledColumn
                css={{
                  gap: 8,
                  justifyContent: 'center',
                  width: 342,
                }}
              >
                <StyledText
                  variant="h3"
                  css={{
                    color: theme.gray100,
                  }}
                >
                  Descripción de la píldora
                </StyledText>
                <StyledText
                  variant="body1"
                  css={{
                    color: theme.gray100,
                  }}
                >
                  {mockedPillDetail.description}
                </StyledText>
              </StyledColumn>
              {mockedPillDetail.approved.length > 0 && (
                <StyledRow
                  css={{
                    gap: 8,
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <StyledRow css={{ alignItems: 'center', gap: -20 }}>
                    {mockedPillDetail.approved.slice(0, 5).map((element) => (
                      <Avatar key={element} size={48} />
                    ))}
                  </StyledRow>
                  <StyledColumn>
                    <StyledText
                      variant="body3"
                      css={{ color: theme.white, fontFamily: 'Roboto-Bold' }}
                    >
                      {`${mockedPillDetail.approved.length} ${
                        mockedPillDetail.approved.length === 1 ? 'alumno' : 'alumnos'
                      }`}
                    </StyledText>
                    <StyledText variant="body3" color="white">
                      {`${
                        mockedPillDetail.approved.length === 1
                          ? 'completó esta píldora'
                          : 'completaron esta píldora'
                      }`}
                    </StyledText>
                  </StyledColumn>
                </StyledRow>
              )}

              <ChatBubble
                type={mockedProfessorMessage.type}
                user={mockedProfessorMessage.user}
                content={mockedProfessorMessage.content}
              />
            </StyledColumn>
          </StyledColumn>
        </StyledColumn>
      </ScrollView>
      <StyledRow
        css={{
          position: 'absolute',
          bottom: insets.bottom - 24,
          width: '100%',
          height: '42px',
          marginLeft: 12,
        }}
      >
        <Button
          disabled={!mockedPillDetail.introductionDone}
          variant="primary"
          onPress={() => alert('to be defined')}
          css={{
            width: '100%',
            height: '100%',
          }}
        >
          Comenzar
        </Button>
      </StyledRow>
    </>
  );
};

export default PillDetail;
