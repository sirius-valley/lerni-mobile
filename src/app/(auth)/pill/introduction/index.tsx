import React, { useEffect, useRef, useState } from 'react';
import { useGetIntroductionPillQuery } from '../../../../redux/service/pills.service';
import { useLSelector } from '../../../../redux/hooks';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  VirtualizedList,
} from 'react-native';
import PillMainContainer from '../../../../components/pill/PillMainContainer';
import PillHeader from '../../../../components/pill/PillHeader';
import PillRender from '../../../../components/pill/PillRender';
import FreeTextAnswer from '../../../../components/bubbles/FreeTextAnswer';
import { StyledBox, StyledColumn } from '../../../../components/styled/styles';
import { SuccessPill } from '../../../../components/common/Result/SuccessPill';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePrevious from '../../../../hook/usePrevious';
import { PillResponse } from '../../../../redux/service/types/pill.response';

const Pill = () => {
  const { data } = useGetIntroductionPillQuery();
  const blocksIds = useLSelector((state) => state.pill.blocksIds);
  const pillTitle = useLSelector((state) => state.pill.pill?.pill?.name);
  const pillProgress = useLSelector((state) => state.pill.pill?.pill?.progress);
  const pillCompleted = useLSelector((state) => state.pill.pill?.pill?.completed);

  const virtualRef = useRef<VirtualizedList<unknown> | null>();
  const prevData = usePrevious<boolean>(pillCompleted);

  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height - insets.top - insets.bottom - 40;
  const box1Height = useRef(new Animated.Value(0)).current;
  const box2Height = useRef(new Animated.Value(screenHeight)).current;

  const [show, setShow] = useState<boolean>(false);

  const animateBoxes = () => {
    Animated.parallel([
      Animated.timing(box1Height, {
        toValue: screenHeight,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(box2Height, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
    setShow(true);
  };

  useEffect(() => {
    if (prevData !== undefined && pillCompleted !== prevData) {
      setTimeout(() => animateBoxes(), 1250);
    }
  }, [pillCompleted, prevData]);

  return (
    <PillMainContainer backgroundColor="primary900">
      <PillHeader title={pillTitle ?? ''} pillNumber={1} percentageDone={pillProgress ?? 0} />
      <StyledColumn css={{ flexGrow: 1 }}>
        <Animated.View
          style={{
            height: box2Height as unknown as number,
            overflow: 'hidden',
          }}
        >
          <KeyboardAvoidingView
            enabled
            style={{ height: '100%' }}
            keyboardVerticalOffset={120}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <VirtualizedList
              ref={(ref) => {
                virtualRef.current = ref;
              }}
              renderItem={({ item, index }: ListRenderItemInfo<any>) => (
                <PillRender
                  key={'bubble-inner-' + item.id}
                  blockId={item}
                  nextBlockId={blocksIds?.[index + 1] ?? undefined}
                />
              )}
              contentContainerStyle={{
                padding: 24,
                flexGrow: 1,
              }}
              onContentSizeChange={(comp) =>
                setTimeout(() => {
                  virtualRef?.current?.scrollToEnd();
                }, 250)
              }
              data={blocksIds}
              getItemCount={() => blocksIds.length}
              getItem={(data, index) => data[index]}
              keyExtractor={(item, index) => index.toString()}
            />
            <FreeTextAnswer />
            <StyledBox />
          </KeyboardAvoidingView>
        </Animated.View>
        <Animated.View
          style={{
            height: box1Height as unknown as number,
            overflow: 'hidden',
          }}
        >
          <StyledBox
            css={{
              padding: 24,
              height: screenHeight,
            }}
          >
            <SuccessPill show={show} programName={'la introducción'} />
          </StyledBox>
        </Animated.View>
      </StyledColumn>
    </PillMainContainer>
  );
};

export default Pill;
