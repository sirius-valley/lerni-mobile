import { View, Text, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import {
  ProgramCardStructure,
  mockedProgramCardsData,
  programCardsStructure,
} from '../(tabs)/explore/utils';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import ProgramCard from '../../../components/program/ProgramCard';
import { useLazyMeQuery } from '../../../redux/service/student.service';

const Home = () => {
  const router = useRouter();
  const theme = useTheme();

  const [refetch, { data: aboutMe }] = useLazyMeQuery();
  const handleGoToPill = (id: string) =>
    router.push({ pathname: 'pill/introduction', params: { id } });
  // missing pill logic
  return (
    <StyledBox
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 12,
      }}
    >
      <ScrollView>
        <StyledColumn css={{ gap: 24 }}>
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
                      <Pressable onPress={() => alert('Ver más ')}>
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
                          status={!aboutMe.hasCompletedIntroduction ? 'locked' : status}
                          progress={progressBar ? progress : undefined}
                          onPress={() => handleGoToPill(id)}
                        />
                      ))}
                  </StyledRow>
                  {/* this will be added on fabros PR, of the pill */}
                  {/* {aboutMe?.hasCompletedIntroduction && <Pressable onPress={handleGoToPill(id)}><IntroductionPill /></Pressable>} */}
                </StyledColumn>
              ),
            )}
          </StyledColumn>
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Home;
