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
import SkeletonHome from '../../../../components/home/HomeSkeleton';
import { useMeQuery } from '../../../../redux/service/student.service';
import { Dimensions, Pressable } from 'react-native';
import ErrorDisplay from '../../../../components/common/ErrorDisplay';
import { useHomeProgramsQuery } from '../../../../redux/service/program.service';
import { ProgramsData } from '../../../../redux/service/types/program.response';

const Page = () => {
  const router = useRouter();
  const theme = useTheme();
  const { data, isLoading: meLoading } = useMeQuery();

  const handleGoToProgram = (id: string) =>
    router.push({
      pathname: '(tabs)/explore/programDetail',
      params: {
        id,
      },
    });

  const handleGoToPillDetail = (id: string) =>
    router.push({
      pathname: '(tabs)/explore/pillDetail',
      params: {
        id,
      },
    });

  const handleGoToSearchScreen = () =>
    router.push({
      pathname: '(tabs)/explore/searchScreen',
    });

  const handleGoToIntroductionPill = () => router.push('/(auth)/pill/introduction');

  const {
    data: programs,
    isLoading,
    isError,
  } = useHomeProgramsQuery() as {
    data: ProgramsData;
    isLoading: boolean;
    isError: boolean;
  };

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
          {isLoading ? (
            <SkeletonHome />
          ) : !data?.hasCompletedIntroduction ? (
            <ProgramCard
              id={'introduction'}
              title={'Introducción a la plataforma'}
              imgUrl={'https://lerni-images-2024.s3.amazonaws.com/introduction_image.png'}
              status={'not_started'}
              onPress={handleGoToIntroductionPill}
            />
          ) : !programs ? (
            <StyledColumn
              css={{
                justifyContent: 'center',
                height: Dimensions.get('window').height - 250,
              }}
            >
              <ErrorDisplay type="no-introduction" />
            </StyledColumn>
          ) : (
            <StyledColumn css={{ gap: 24 }}>
              {programs.programsInProgress && programs.programsInProgress.length ? (
                <StyledColumn css={{ gap: 8 }}>
                  <StyledRow
                    css={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText variant="h3" css={{ color: theme.gray100 }}>
                      {'En curso'}
                    </StyledText>
                    {programs.programsInProgress.length > 3 && (
                      <Pressable onPress={() => alert('Ver más ')}>
                        <StyledText
                          css={{
                            color: theme.gray300,
                            textDecorationLine: 'underline',
                          }}
                        >
                          {'Ver más'}
                        </StyledText>
                      </Pressable>
                    )}
                  </StyledRow>
                  <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                    {data?.hasCompletedIntroduction &&
                      programs?.programsInProgress
                        .slice(0, 3)
                        .map(({ id, name, icon, progress }) => (
                          <ProgramCard
                            key={id}
                            onPress={() => handleGoToProgram(id)}
                            id={id}
                            title={name}
                            imgUrl={icon}
                            status={'in_progress'}
                            progress={progress}
                          />
                        ))}
                  </StyledRow>
                </StyledColumn>
              ) : null}

              {programs?.programsNotStarted.length && programs.programsNotStarted.length ? (
                <StyledColumn css={{ gap: 8 }}>
                  <StyledRow
                    css={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText variant="h3" css={{ color: theme.gray100 }}>
                      {'Por empezar'}
                    </StyledText>
                    {programs.programsNotStarted.length > 3 && (
                      <Pressable onPress={() => alert('Ver más ')}>
                        <StyledText
                          css={{
                            color: theme.gray300,
                            textDecorationLine: 'underline',
                          }}
                        >
                          {'Ver más'}
                        </StyledText>
                      </Pressable>
                    )}
                  </StyledRow>
                  <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                    {data?.hasCompletedIntroduction &&
                      programs?.programsNotStarted
                        .slice(0, 3)
                        .map(({ id, name, icon }) => (
                          <ProgramCard
                            key={id}
                            onPress={() => handleGoToProgram(id)}
                            id={id}
                            title={name}
                            imgUrl={icon}
                            status={'not_started'}
                          />
                        ))}
                  </StyledRow>
                </StyledColumn>
              ) : (
                <StyledColumn css={{ gap: 8 }}>
                <StyledRow
                 css={{
                   justifyContent: 'space-between',
                   alignItems: 'center',
                 }}
               >
                 <StyledText variant="h3" css={{ color: theme.gray100 }}>
                   {'Por empezar'}
                 </StyledText>
                 </StyledRow>
                 <StyledBox css={{padding: '32px 0px', justifyContent: 'center', alignItems: 'center' }}>
                   <StyledText variant='body2' color='primary200'>{'Aún no tienes programas asignados'}</StyledText>
                 </StyledBox>
             </StyledColumn>
              )}

              {programs?.programsCompleted.length && programs.programsCompleted.length ? (
                <StyledColumn css={{ gap: 8 }}>
                  <StyledRow
                    css={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledText variant="h3" css={{ color: theme.gray100 }}>
                      {'Finalizados'}
                    </StyledText>
                    {programs.programsCompleted.length > 3 && (
                      <Pressable onPress={() => alert('Ver más ')}>
                        <StyledText
                          css={{
                            color: theme.gray300,
                            textDecorationLine: 'underline',
                          }}
                        >
                          {'Ver más'}
                        </StyledText>
                      </Pressable>
                    )}
                  </StyledRow>
                  <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                    {data?.hasCompletedIntroduction &&
                      programs?.programsCompleted
                        .slice(0, 3)
                        .map(({ id, name, icon }) => (
                          <ProgramCard
                            key={id}
                            onPress={() => handleGoToProgram(id)}
                            id={id}
                            title={name}
                            imgUrl={icon}
                            status={'completed'}
                          />
                        ))}
                  </StyledRow>
                </StyledColumn>
              ) : null}
            </StyledColumn>
          )}
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Page;
