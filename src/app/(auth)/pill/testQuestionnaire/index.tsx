import React, { useEffect, useRef, useState } from 'react';
import PillMainContainer from '../../../../components/pill/PillMainContainer';
import PillHeader from '../../../../components/pill/PillHeader';
import { StyledBox, StyledColumn } from '../../../../components/styled/styles';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  VirtualizedList,
} from 'react-native';
import { useLDispatch, useLSelector } from '../../../../redux/hooks';
import { useQuestionnaireByIdQuery } from '../../../../redux/service/questionnaire.service';
import { getQuestionnaireById } from '../../../../redux/slice/questionnaire.slice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePrevious from '../../../../hooks/usePrevious';
import { SuccessPill } from '../../../../components/common/Result/SuccessPill';
import QuestionnaireRender from '../../../../components/pill/QuestionnaireRender';

const index = () => {
  const { data } = useQuestionnaireByIdQuery({ id: '01' });
  const [show, setShow] = useState(false);

  const blocksIds = useLSelector((state) => state.questionnaire.blocksIds);
  const pillTitle = useLSelector((state) => state.questionnaire.questionnaire?.pill.name);
  const pillProgress = useLSelector((state) => state.questionnaire.questionnaire?.pill?.progress);
  const pillCompleted = useLSelector((state) => state.questionnaire.questionnaire?.pill?.completed);

  const virtualRef = useRef<VirtualizedList<unknown> | null>();
  const prevData = usePrevious<boolean>(pillCompleted);

  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height - insets.top - insets.bottom - 40;
  const box1Height = useRef(new Animated.Value(0)).current;
  const box2Height = useRef(new Animated.Value(screenHeight)).current;

  const dispatch = useLDispatch();

  useEffect(() => {
    dispatch(getQuestionnaireById('01'));
  }, []);

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
            keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 75}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <VirtualizedList
              ref={(ref) => {
                virtualRef.current = ref;
              }}
              renderItem={({ item, index }: ListRenderItemInfo<any>) => (
                <QuestionnaireRender
                  key={'bubble-inner-' + item.id}
                  blockId={item}
                  nextBlockId={blocksIds?.[index + 1] ?? undefined}
                />
              )}
              contentContainerStyle={{
                paddingHorizontal: 24,
                padding: 24,
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

export default index;
