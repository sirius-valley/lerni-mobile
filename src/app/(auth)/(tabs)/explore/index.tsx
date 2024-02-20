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
import { Status } from './utils';
import { Dimensions, Pressable } from 'react-native';
import ErrorDisplay from '../../../../components/common/ErrorDisplay';

const Page = () => {
  const router = useRouter();
  const theme = useTheme();
  const { data, isLoading: meLoading } = useMeQuery();
  const hasAssignedPrograms = false;
  const isLoading = false;

  const handleGoToProgram = (id: string) =>
    router.push({
      pathname: '(tabs)/explore/programDetail',
      params: {
        id,
      },
    });

  const handleGoToSearchScreen = () =>
    router.push({
      pathname: '(tabs)/explore/searchScreen',
    });

  const handleGoToIntroductionPill = () => router.push('/(auth)/pill/introduction');

  // useEffect(() => {
  //   router.push('/(auth)/pill/testQuestionnaire');
  // }, []);

  if (meLoading) {
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
              Explorar
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
            <>
              <ProgramCard
                id={'introduction'}
                title={'Introducción a la plataforma'}
                imgUrl={
                  'https://cdn.discordapp.com/attachments/411201278031560708/1202706664101380186/introduction.jpg?ex=65ce6edd&is=65bbf9dd&hm=1e66425900cef824c7105a23d993ede7534e758006238e6f926590aa3eeadadb&'
                }
                status={'not_started'}
                onPress={handleGoToIntroductionPill}
              />
            </>
          ) : !hasAssignedPrograms ? (
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
              <StyledColumn css={{ gap: 8 }}>
                <StyledRow
                  css={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <StyledText variant="h3" css={{ color: theme.gray100 }}>
                    En curso
                  </StyledText>
                  {inProgressMockedData.length > 3 && (
                    <Pressable onPress={() => alert('Ver más ')}>
                      <StyledText
                        css={{
                          color: theme.gray300,
                          textDecorationLine: 'underline',
                        }}
                      >
                        Ver más
                      </StyledText>
                    </Pressable>
                  )}
                </StyledRow>
                <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                  {data?.hasCompletedIntroduction &&
                    inProgressMockedData
                      .slice(0, 3)
                      .map(({ id, title, imgUrl, status }) => (
                        <ProgramCard
                          key={id}
                          onPress={() => handleGoToProgram(id)}
                          id={id}
                          title={title}
                          imgUrl={imgUrl}
                          status={status}
                        />
                      ))}
                </StyledRow>
              </StyledColumn>

              <StyledColumn css={{ gap: 8 }}>
                <StyledRow
                  css={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <StyledText variant="h3" css={{ color: theme.gray100 }}>
                    Por empezar
                  </StyledText>
                  {notStartedMockedData.length > 3 && (
                    <Pressable onPress={() => alert('Ver más ')}>
                      <StyledText
                        css={{
                          color: theme.gray300,
                          textDecorationLine: 'underline',
                        }}
                      >
                        Ver más
                      </StyledText>
                    </Pressable>
                  )}
                </StyledRow>
                <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                  {!data?.hasCompletedIntroduction &&
                    notStartedMockedData
                      .slice(0, 3)
                      .map(({ id, title, imgUrl, status }) => (
                        <ProgramCard
                          key={id}
                          onPress={() => handleGoToProgram(id)}
                          id={id}
                          title={title}
                          imgUrl={imgUrl}
                          status={status}
                        />
                      ))}
                </StyledRow>
              </StyledColumn>

              <StyledColumn css={{ gap: 8 }}>
                <StyledRow
                  css={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <StyledText variant="h3" css={{ color: theme.gray100 }}>
                    Finalizados
                  </StyledText>
                  {completedMockedData.length > 3 && (
                    <Pressable onPress={() => alert('Ver más ')}>
                      <StyledText
                        css={{
                          color: theme.gray300,
                          textDecorationLine: 'underline',
                        }}
                      >
                        Ver más
                      </StyledText>
                    </Pressable>
                  )}
                </StyledRow>
                <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
                  {!data?.hasCompletedIntroduction &&
                    completedMockedData
                      .slice(0, 3)
                      .map(({ id, title, imgUrl, status }) => (
                        <ProgramCard
                          key={id}
                          onPress={() => handleGoToProgram(id)}
                          id={id}
                          title={title}
                          imgUrl={imgUrl}
                          status={status}
                        />
                      ))}
                </StyledRow>
              </StyledColumn>
            </StyledColumn>
          )}
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

// mocked program data to be deleted
type MockedDataItem = {
  id: string;
  title: string;
  imgUrl: string;
  status: Status;
};
const inProgressMockedData: MockedDataItem[] = [
  {
    id: 'inprogress1',
    title: 'Programa en progreso 3',
    imgUrl:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
    status: 'in_progress',
  },
  {
    id: 'inprogress2',
    title: 'Programa en progreso 3',
    imgUrl:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
    status: 'in_progress',
  },
  {
    id: 'inprogress3',
    title: 'Programa en progreso 3',
    imgUrl:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
    status: 'in_progress',
  },
];
const notStartedMockedData: MockedDataItem[] = [
  {
    id: 'notStarted1',
    title: 'Comenzar 1',
    imgUrl: 'https://reactnative.dev/img/logo-og.png',
    status: 'not_started',
  },
  {
    id: 'notStarted2',
    title: 'Comenzar 2',
    imgUrl: 'https://reactnative.dev/img/logo-og.png',
    status: 'not_started',
  },
  {
    id: 'notStarted3',
    title: 'Comenzar 3',
    imgUrl: 'https://reactnative.dev/img/logo-og.png',
    status: 'not_started',
  },
];

const completedMockedData: MockedDataItem[] = [
  {
    id: 'completed1',
    title: 'Completado 1',
    imgUrl:
      'https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png',
    status: 'completed',
  },
  {
    id: 'completed2',
    title: 'Completado 2',
    imgUrl:
      'https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png',
    status: 'completed',
  },
  {
    id: 'completed3',
    title: 'Completado 3',
    imgUrl:
      'https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png',
    status: 'completed',
  },
  {
    id: 'completed4',
    title: 'Completado 4',
    imgUrl:
      'https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png',
    status: 'completed',
  },
];

export default Page;
