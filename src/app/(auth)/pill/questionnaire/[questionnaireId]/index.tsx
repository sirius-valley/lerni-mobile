import React, { useEffect, useRef, useState } from 'react';
import PillMainContainer from '../../../../../components/pill/PillMainContainer';
import PillHeader from '../../../../../components/pill/PillHeader';
import { StyledBox, StyledColumn } from '../../../../../components/styled/styles';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  VirtualizedList,
} from 'react-native';
import { useLDispatch, useLSelector } from '../../../../../redux/hooks';
import { useQuestionnaireByIdQuery } from '../../../../../redux/service/questionnaire.service';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePrevious from '../../../../../hooks/usePrevious';
import { SuccessPill } from '../../../../../components/common/Result/SuccessPill';
import QuestionnaireRender from '../../../../../components/pill/QuestionnaireRender';
import { QuestionnaireState } from '../../../../../redux/service/types/questionnaire.response';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FailurePill } from '../../../../../components/common/Result/FailurePill';
import { setModalOpen } from '../../../../../redux/slice/utils.slice';
import { ModalTypeEnum } from '../../../../../utils/utils';
import { api } from '../../../../../redux/service/api';

const Questionnaire = () => {
  const { questionnaireId } = useLocalSearchParams();
  const { data } = useQuestionnaireByIdQuery(
    { id: questionnaireId as string },
    {
      skip: !questionnaireId,
    },
  );

  const dispatch = useLDispatch();
  const programId = useLSelector((state) => state.program.id);
  const pointsTotal = useLSelector((state) => state.questionnaire.totalPointsAwarded);

  const blocksIds = useLSelector((state) => state.questionnaire.blocksIds);
  const pillProgress = useLSelector(
    (state) => state.questionnaire?.questionnaire?.questionnaire.progress,
  );
  const pillCompleted = useLSelector(
    (state) => state.questionnaire?.questionnaire?.questionnaire.questionnaireState,
  );

  const route = useRouter();

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
    if (
      pillCompleted !== undefined &&
      prevData !== undefined &&
      [QuestionnaireState.COMPLETED, QuestionnaireState.FAILED].includes(pillCompleted)
    ) {
      setTimeout(() => {
        animateBoxes();
      }, 850);
    }
  }, [pillCompleted, prevData]);

  return (
    <PillMainContainer backgroundColor="primary900">
      <PillHeader
        title={'Cuestionario'}
        pillNumber={1}
        percentageDone={pillProgress ?? 0}
        isQuestionnaire
      />
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
            {pillCompleted === QuestionnaireState.COMPLETED ? (
              <SuccessPill
                show={show}
                programName={'el cuestionario'}
                callbackAction={() => {
                  route.push('/(auth)/(tabs)/explore');
                  dispatch(api.util?.invalidateTags(['ME']));
                  dispatch(api.util?.invalidateTags([{ type: 'ProgramById', id: programId }]));
                  dispatch(setModalOpen({ modalType: ModalTypeEnum.FEEDBACK_MODAL }));
                }}
                hasConfeti
                winsPoints={pointsTotal}
              />
            ) : (
              <FailurePill callback={() => dispatch(api.util?.invalidateTags(['Questionnaire']))} />
            )}
          </StyledBox>
        </Animated.View>
      </StyledColumn>
    </PillMainContainer>
  );
};

export default Questionnaire;
