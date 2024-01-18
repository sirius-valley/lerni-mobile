import { useEffect, useState } from 'react';
import { ChatBubble } from '../components/styled/ChatBubble';

const mockedPill = {
  pillId: 'id01',
  pillHeader: {
    title: 'Test_pill',
    pillNumber: 1,
    percentageDone: 0.3,
  },
  pillBody: [
    {
      id: 'bodypill_id_01',
      user: 'professor' as UserType,
      content: 'Respuesta',
      type: 'text' as PillBodyType,
      isLast: false,
    },
    {
      id: 'bodypill_id_02',
      user: 'professor' as UserType,
      content: 'Y otra pregunta para que responda el alumno?',
      type: 'text' as PillBodyType,
      isLast: true,
    },
    {
      id: 'bodypill_id_03',
      user: 'student' as UserType,
      content: 'Respuesta del alumno',
      type: 'text' as PillBodyType,
      isLast: true,
    },
  ],
};

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
