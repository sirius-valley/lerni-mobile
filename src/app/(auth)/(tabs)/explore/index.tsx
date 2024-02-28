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
import { useEffect } from 'react';

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

  // useEffect(() => {
  //   handleGoToPillDetail('pillId');
  //   handleGoToProgram('programId');
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
                imgUrl={'https://lerni-images-2024.s3.amazonaws.com/introduction_image.png'}
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
                      .map(({ id, title, imgUrl, status, progress }) => (
                        <ProgramCard
                          key={id}
                          onPress={() => handleGoToProgram(id)}
                          id={id}
                          title={title}
                          imgUrl={imgUrl}
                          status={status}
                          progress={progress}
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
export type MockedDataItem = {
  id: string;
  title: string;
  imgUrl: string;
  status: Status;
  progress?: number;
};
export const inProgressMockedData: MockedDataItem[] = [
  {
    id: 'inprogress1',
    title: 'Programa en progreso 1',
    imgUrl:
      'https://media.discordapp.net/attachments/1163814783913562132/1205135747217100861/image.png?ex=65d74520&is=65c4d020&hm=cba5fd93c2bd2dae25e78fd4940674b2559fb95183fc0c030730370f6abc4039&=&format=webp&quality=lossless&width=220&height=220',
    status: 'in_progress',
    progress: 0.67,
  },
  {
    id: 'inprogress2',
    title: 'Programa en progreso 2',
    imgUrl:
      'https://media.discordapp.net/attachments/1163814783913562132/1205135747443855371/image_1.png?ex=65d74520&is=65c4d020&hm=3083227db29e72488b3f85c474178f024f2a838149f14330187c027b8591eb9b&=&format=webp&quality=lossless&width=218&height=220',
    status: 'in_progress',
    progress: 0.24,
  },
  {
    id: 'inprogress3',
    title: 'Programa en progreso 3',
    imgUrl:
      'https://media.discordapp.net/attachments/1163814783913562132/1205135747670212638/image_2.png?ex=65d74520&is=65c4d020&hm=f83dc10c501f285fdafb14559bb82e6b405151344115ce1ef31fcb0f149266c4&=&format=webp&quality=lossless&width=218&height=220',
    status: 'in_progress',
    progress: 0.93,
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
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
    status: 'completed',
  },
  {
    id: 'completed2',
    title: 'Completado 2',
    imgUrl:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
    status: 'completed',
  },
  {
    id: 'completed3',
    title: 'Completado 3',
    imgUrl:
      'https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33',
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
