import { useEffect, useState } from 'react';
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
import Button from '../../../../components/styled/Button';
import { useMeQuery } from '../../../../redux/service/student.service';

const Page = () => {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const { data } = useMeQuery();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
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

  const handleGoToIntroductionPill = () => router.push('/(auth)/pill/introduction');

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
            <StyledColumn css={{ gap: 8 }}>
              <StyledText variant="h3" css={{ color: theme.gray100 }}>
                Por empezar
              </StyledText>
              <StyledRow css={{ gap: 8 }}>
                {!data?.hasCompletedIntroduction && (
                  <ProgramCard
                    id={'introduction'}
                    title={'Introducción a la plataforma'}
                    imgUrl={
                      'https://cdn.discordapp.com/attachments/411201278031560708/1202706664101380186/introduction.jpg?ex=65ce6edd&is=65bbf9dd&hm=1e66425900cef824c7105a23d993ede7534e758006238e6f926590aa3eeadadb&'
                    }
                    status={'not_started'}
                    onPress={handleGoToIntroductionPill}
                  />
                )}
              </StyledRow>
            </StyledColumn>
          </StyledColumn>
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Page;
