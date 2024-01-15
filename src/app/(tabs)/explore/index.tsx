import { Text } from 'react-native';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import SearchIcon from '../../../../assets/icons/SearchIcon';

export default function Page() {
  const mockedData = {
    in_progress: [
      {
        id: '001',
        title: 'Project A',
        image: 'project_a_image.jpg',
        progress: 50,
      },
      {
        id: '002',
        title: 'Task B',
        image: 'task_b_image.png',
        progress: 75,
      },
      {
        id: '003',
        title: 'Ongoing Feature',
        image: 'ongoing_feature_image.jpg',
        progress: 30,
      },
    ],
    completed: [
      {
        id: '101',
        title: 'Completed Project',
        image: 'completed_project_image.png',
      },
      {
        id: '102',
        title: 'Finished Task',
        image: 'finished_task_image.jpg',
      },
    ],
    not_started: [
      {
        id: '201',
        title: 'New Task',
        image: 'new_task_image.jpg',
      },
      {
        id: '202',
        title: 'Unstarted Project',
        image: 'unstarted_project_image.png',
      },
      {
        id: '203',
        title: 'Upcoming Feature',
        image: 'upcoming_feature_image.jpg',
      },
      {
        id: '204',
        title: 'Pending Assignment',
        image: 'pending_assignment_image.png',
      },
    ],
  };
  const theme = useTheme();
  return (
    <StyledBox
      css={{
        background: theme.primary900,
        width: '100%',
        height: '100%',
        paddingTop: 60,
        paddingHorizontal: 24,
      }}
    >
      <StyledColumn css={{ gap: 16 }}>
        <StyledRow
          css={{
            width: 342,
            height: 33,
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.white,
          }}
        >
          <StyledText variant="h1" css={{ color: theme.gray6 }}>
            Explorar
          </StyledText>
          <StyledBox css={{ padding: 3 }}>
            <SearchIcon size={24} />
          </StyledBox>
        </StyledRow>
        <StyledColumn css={{ gap: 32 }}>
          <StyledColumn css={{ gap: 8, background: theme.gray200 }}>
            <StyledRow css={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <StyledText variant="h3">En curso</StyledText>
            </StyledRow>
            <StyledRow css={{ gap: 8 }}></StyledRow>
          </StyledColumn>
          <StyledColumn css={{ gap: 8, background: theme.gray200 }}></StyledColumn>
          <StyledColumn css={{ gap: 8, background: theme.gray200 }}></StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </StyledBox>
  );
}
