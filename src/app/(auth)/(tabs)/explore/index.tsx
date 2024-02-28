import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../components/styled/styles';
import { useTheme } from 'styled-components';
import SearchIcon from '../../../../../assets/icons/SearchIcon';
import ProgramCard from '../../../../components/program/ProgramCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import SkeletonHome from '../../../../components/explore/HomeSkeleton';
import { useMeQuery } from '../../../../redux/service/student.service';
import { Pressable } from 'react-native';
import { useHomeProgramsQuery } from '../../../../redux/service/program.service';
import { ProgramsData } from '../../../../redux/service/types/program.response';
import ExploreRow from '../../../../components/explore/ExploreRow';
import { useLSelector } from '../../../../redux/hooks';

const Page = () => {
  const router = useRouter();
  const theme = useTheme();
  const { data, isLoading: meLoading } = useMeQuery();

  const handleGoToSearchScreen = () =>
    router.push({
      pathname: '(tabs)/explore/searchScreen',
    });

  const handleGoToIntroductionPill = () => router.push('/(auth)/pill/introduction');

  const {
    data: homePrograms,
    isLoading,
    isError,
  } = useHomeProgramsQuery() as {
    data: ProgramsData;
    isLoading: boolean;
    isError: boolean;
  };

  const { programsCompleted, programsInProgress, programsNotStarted } = useLSelector(
    (state) => state.program,
  );

  if (isLoading) {
    return <SkeletonHome />;
  }

  return (
    <StyledBox
      css={{
        width: '100%',
        flexGrow: 1,
        paddingTop: 20,
      }}
    >
      <ScrollView scrollIndicatorInsets={{ right: -30 }}>
        <StyledColumn css={{ gap: 24, flexGrow: 1 }}>
          <StyledRow
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <StyledText variant="h1" css={{ color: theme.gray100 }}>
              {'Explorar'}
            </StyledText>
            <Pressable onPress={handleGoToSearchScreen}>
              <StyledBox css={{ padding: 3 }}>
                <SearchIcon size={24} />
              </StyledBox>
            </Pressable>
          </StyledRow>
          {!data?.hasCompletedIntroduction ? (
            <ProgramCard
              id={'introduction'}
              title={'Introducción a la plataforma'}
              imgUrl={'https://lerni-images-2024.s3.amazonaws.com/introduction_image.png'}
              status={'not_started'}
              onPress={handleGoToIntroductionPill}
            />
          ) : null}
          <StyledColumn css={{ gap: 24 }}>
            {data?.hasCompletedIntroduction && programsInProgress.length ? (
              <ExploreRow
                programs={programsInProgress}
                hasIntroduction={data?.hasCompletedIntroduction ?? false}
                title={'En curso'}
                status={'in_progress'}
              />
            ) : null}

            {programsNotStarted ||
            (programsCompleted && !programsInProgress) ||
            (!programsCompleted && programsInProgress) ? (
              <ExploreRow
                programs={programsNotStarted}
                title={'Por empezar'}
                status={'not_started'}
                hasIntroduction={data?.hasCompletedIntroduction ?? false}
              />
            ) : null}

            {data?.hasCompletedIntroduction && programsCompleted.length ? (
              <ExploreRow
                programs={programsCompleted}
                status={'completed'}
                hasIntroduction={data?.hasCompletedIntroduction ?? false}
                title={'Finalizados'}
              />
            ) : null}
          </StyledColumn>
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Page;
