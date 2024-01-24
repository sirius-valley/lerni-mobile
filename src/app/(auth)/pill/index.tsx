import React, { useEffect } from 'react';
import { StyledText } from '../../../components/styled/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import PillMainContainer from '../../../components/pill/PillMainContainer';
import usePill from '../../../hooks/usePill';

const Pill = () => {
  const { blocks, AnswerBubble, renderThread: RenderThread } = usePill('bubble_id');

  useEffect(() => {
    console.log('bubble blocks ', blocks);
  }, [blocks]);

  return (
    <PillMainContainer backgroundColor="primary900">
      <SafeAreaView>
        <StyledText variant={'h1'} css={{ color: 'white' }}>
          Pill
        </StyledText>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <RenderThread />
        </ScrollView>
      </SafeAreaView>
    </PillMainContainer>
  );
};

export default Pill;
