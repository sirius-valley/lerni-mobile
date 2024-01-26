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
import { ProgramStatus } from '../../../../../components/program/ProgramImage';
import { useTheme } from 'styled-components';
import RhombusIcon from '../../../../../../assets/icons/RhombusIcon';
import BulletListIcon from '../../../../../../assets/icons/BulletListIcon';
import ClockIcon from '../../../../../../assets/icons/ClockIcon';
import { ChatBubble } from '../../../../../components/bubbles/ChatBubble';
import * as Progress from 'react-native-progress';
import { Avatar } from '../../../../../components/common/Avatar';
import PillSkeleton from './PillSkeleton';

const PillDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const isLoading = true;

  if (isLoading)
    return (
      <StyledColumn css={{ width: '100%', height: '100%' }}>
        <PillSkeleton />
      </StyledColumn>
    );
  return (
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
                progress={0.3}
                showsText={true}
                formatText={() => 1}
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
              Píldora 1
            </StyledText>
            <StyledText
              variant="body1"
              css={{
                gap: 6,
                alignItems: 'center',
                color: theme.gray400,
              }}
            >
              Profesor/Autor
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
                Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
                ullamcorper mauris, vitae commodo dui efficitur non. Fusce efficitur pulvinar diam
                vel dictum.
              </StyledText>
            </StyledColumn>
            <StyledRow
              css={{
                gap: 8,
                width: '100%',
                alignItems: 'center',
              }}
            >
              <StyledRow css={{ alignItems: 'center', gap: -20 }}>
                <Avatar size={48} />
                <Avatar size={48} />
                <Avatar size={48} />
                <Avatar size={48} />
                <Avatar size={48} />
              </StyledRow>
              <StyledColumn>
                <StyledText variant="body3" css={{ color: theme.white, fontFamily: 'Roboto-Bold' }}>
                  53 alumnos
                </StyledText>
                <StyledText variant="body3" color="white">
                  aprobaron esta píldora
                </StyledText>
              </StyledColumn>
            </StyledRow>

            <ChatBubble
              type="text"
              user="professor"
              content="Bienvenidos!! Mi nombre es ......., soy profesor en ....... y en este curso vamos a hablar sobre ........"
            ></ChatBubble>
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </ScrollView>
  );
};

export default PillDetail;
