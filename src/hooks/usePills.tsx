import { useEffect, useState } from 'react';
import { ChatBubble } from '../components/styled/ChatBubble';
import { PillBodyType, mockedPill } from '../redux/service/pills.service';
import FreeTextBubble from '../components/common/FreeTextBubble';
import { StyledBox } from '../components/styled/styles';

type UserType = 'student' | 'professor';
type PillData = typeof mockedPill;

const usePills = (id: string) => {
  const [pillData, setPillData] = useState<PillData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [freeTextValue, setFreeTextValue] = useState('');

  const handleFreeTextChange = (value: string) => setFreeTextValue(value);
  const handleFreeTextOnPress = () => {
    answerPill(freeTextValue);
    setFreeTextValue('');
  };

  const renderPills = () => {
    if (pillData) {
      return pillData?.pillBody?.map((pill) => {
        switch (pill.type) {
          case 'text' || 'image':
            return (
              <ChatBubble
                key={pill.id}
                user={pill.user ?? 'professor'}
                isLast={pill.isLast}
                content={pill.content}
                type={pill.type}
              />
            );
          case 'free_text':
            return (
              <StyledBox key={pill.id} css={{ padding: '16px 0px', marginTop: 'auto' }}>
                <FreeTextBubble
                  value={freeTextValue}
                  onChangeText={handleFreeTextChange}
                  handlePress={handleFreeTextOnPress}
                />
              </StyledBox>
            );
        }
      });
    }
    return null;
  };

  const answerPill = (content: string) => {
    const nextPillBody = [
      ...(pillData?.pillBody.map((pill) => ({
        ...pill,
        ...(pill.user === 'student' ? { isLast: false } : { isLast: pill.isLast }),
      })) ?? []),
      {
        id: `${Math.random()}`,
        user: 'student' as UserType,
        type: 'text' as PillBodyType,
        isLast: true,
        content,
      },
    ];
    // swap positions
    const pillBodyLength = nextPillBody.length;
    [nextPillBody[pillBodyLength - 2], nextPillBody[pillBodyLength - 1]] = [
      nextPillBody[pillBodyLength - 1],
      nextPillBody[pillBodyLength - 2],
    ];

    const nextPillData = {
      pillHeader: pillData?.pillHeader || { title: '', pillNumber: 0, percentageDone: 0 },
      pillId: pillData?.pillId || '',
      pillBody: nextPillBody,
    };
    setPillData(nextPillData);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPillData(mockedPill);
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    pillData,
    isLoading,
    renderPills,
    answerPill,
  };
};

export default usePills;
