import React from 'react';
import PillHeader from '../../../components/pill/PillHeader';
import { StyledColumn } from '../../../components/styled/styles';
import Spinner from '../../../components/common/Spinner';
import { SafeAreaView } from 'react-native';
import PillMainContainer from '../../../components/pill/PillMainContainer';
import usePills from '../../../hooks/usePills';

const Pill = () => {
  const { pillData, isLoading, renderPills } = usePills('bubble_id');

  return (
    <PillMainContainer backgroundColor="primary900">
      <SafeAreaView>
        <StyledColumn
          css={{
            height: '100%',
            justifyContent: 'space-between',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          {isLoading ? (
            <StyledColumn css={{ height: '100%', justifyContent: 'center' }}>
              <Spinner />
            </StyledColumn>
          ) : (
            <StyledColumn>
              <PillHeader
                title={pillData?.pillHeader?.title ?? ''}
                pillNumber={pillData?.pillHeader?.pillNumber ?? 1}
                percentageDone={pillData?.pillHeader?.percentageDone ?? 0}
              />
              {renderPills()}
            </StyledColumn>
          )}
        </StyledColumn>
      </SafeAreaView>
    </PillMainContainer>
  );
};

export default Pill;
