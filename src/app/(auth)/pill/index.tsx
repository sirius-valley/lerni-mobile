import React, { useRef } from 'react';
import { StyledBox, StyledText } from '../../../components/styled/styles';
import {
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import PillMainContainer from '../../../components/pill/PillMainContainer';
import { useLSelector } from '../../../redux/hooks';
import PillRender from '../../../components/pill/PillRender';
import { useGetIntroductionPillQuery } from '../../../redux/service/pills.service';
import FreeTextAnswer from '../../../components/bubbles/FreeTextAnswer';
import MainContainer from '../../../components/common/MainContainer';
import PillHeader from '../../../components/pill/PillHeader';

const Pill = () => {
  const { data } = useGetIntroductionPillQuery();
  const blocksIds = useLSelector((state) => state.pill.blocksIds);
  const pillTitle = useLSelector((state) => state.pill.pill?.pill?.name);
  const pillProgress = useLSelector((state) => state.pill.pill?.pill?.progress);
  const virtualRef = useRef<VirtualizedList<unknown> | null>();

  return (
    <PillMainContainer backgroundColor="primary900">
      <SafeAreaView>
        <KeyboardAvoidingView
          enabled
          style={{ height: '100%' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <PillHeader title={pillTitle ?? ''} pillNumber={1} percentageDone={pillProgress ?? 0} />
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
      </SafeAreaView>
    </PillMainContainer>
  );
};

export default Pill;
