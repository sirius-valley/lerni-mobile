import { StyledColumn } from '../../../components/styled/styles';
import { LoadingVersus } from '../../../components/trivia/LoadingVersus';

const Page = () => {
  console.log('montado');

  return (
    <StyledColumn style={{ width: '100%', height: '100%' }}>
      <LoadingVersus />
    </StyledColumn>
  );
};

export default Page;
