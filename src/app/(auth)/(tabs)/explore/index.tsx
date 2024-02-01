import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
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
import { ProgramCardStructure, mockedProgramCardsData, programCardsStructure } from './utils';
import { useRouter } from 'expo-router';
import SkeletonHome from '../../../../components/home/HomeSkeleton';
import Button from '../../../../components/styled/Button';

const Page = () => {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  if (loading) {
    return <SkeletonHome />;
  }

  const handleGoToProgram = (id: string) =>
    router.push({
      pathname: '(tabs)/explore/programDetail',
      params: {
        id,
      },
    });

  return (
    <StyledBox
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 12,
      }}
    >
      <ScrollView scrollIndicatorInsets={{ right: -30 }}>
        <StyledColumn css={{ gap: 24 }}>
          <Button onPress={() => router.push('/(auth)/pill/introduction')}>Introduccion</Button>
          <StyledRow
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <StyledText variant="h1" css={{ color: theme.gray100 }}>
              Explorar
            </StyledText>
            <StyledBox css={{ padding: 3 }}>
              <SearchIcon size={24} />
            </StyledBox>
          </StyledRow>
          <StyledColumn css={{ gap: 32 }}>
            {programCardsStructure.map(
              ({ label, status, progressBar }: ProgramCardStructure, index: number) => (
                <StyledColumn key={index} css={{ gap: 8 }}>
                  <StyledRow
                    css={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <StyledText variant="h3" css={{ color: theme.gray100 }}>
                      {label}
                    </StyledText>
                    {mockedProgramCardsData[status].length > 3 && (
                      <Pressable onPress={() => {}}>
                        <StyledText
                          css={{
                            color: theme.gray300,
                            textDecorationLine: 'underline',
                            marginRight: 24,
                          }}
                        >
                          Ver más
                        </StyledText>
                      </Pressable>
                    )}
                  </StyledRow>
                  <StyledRow css={{ gap: 8 }}>
                    {mockedProgramCardsData[status]
                      .slice(0, 3)
                      .map(({ id, image, title, progress }) => (
                        <ProgramCard
                          key={id}
                          id={id}
                          title={title}
                          imgUrl={image}
                          status={status}
                          progress={progressBar ? progress : undefined}
                          onPress={() => handleGoToProgram(id)}
                        />
                      ))}
                  </StyledRow>
                </StyledColumn>
              ),
            )}
          </StyledColumn>
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Page;
