import { useEffect, useState } from 'react';
import { ChatBubble } from '../components/styled/ChatBubble';
import { mockedPill } from '../redux/service/pills.service';

type UserType = 'student' | 'professor';
type PillBodyType = 'image' | 'text';
type PillData = typeof mockedPill;

const usePills = (id: string) => {
  const [pillData, setPillData] = useState<PillData>();
  const [isLoading, setIsLoading] = useState(false);

  const renderPills = () => {
    if (pillData) {
      return pillData?.pillBody?.map((pill) => {
        return (
          <ChatBubble
            key={pill.id}
            user={pill.user ?? 'professor'}
            isLast={pill.isLast}
            content={pill.content}
            type={pill.type}
          />
        );
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
