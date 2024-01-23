import { useEffect, useState } from 'react';
import { useLDispatch, useLSelector } from '../redux/hooks';

interface UseGetCommentsProps {
  programId: string;
}

export const useGetComments = () => {
  const comments = [
    {
      author: 'Daniel',
      comment: 'Make situation as explicitly as possible for alignment.',
      avatar:
        'https://i.pravatar.cc/40',
      id: '1',
    },
    {
      author: 'Sunnie',
      comment:
        'It’s better to keep things simple following the SCQA structure and leave space for follow-up questions.',
      avatar:
        'https://i.pravatar.cc/63',
      id: '2',
    },
    {
      author: 'Anita',
      comment:
        'I usually jump to the key question or answer, especially on Slack because I’ve already thought about the situation and the complication. For my audiences though, I need to practice giving them more context on those. It helps set the stage for good, mutual understanding and lets them feel empowered in responding to the request.',
      avatar:
        'https://i.pravatar.cc/61',
      id: '3',
    },
    {
      author: 'Jess',
      comment:
        'Working entirely remote and async requires a lot of written communication. I learned that often times I include too much “fluff” in my communication. The SCQA framework is clear, concise, and can be instantly applied to daily communication here at Shopify.',
      avatar:
        'https://i.pravatar.cc/65',
      id: '4',
    },
    {
      author: 'Lindsay',
      comment:
        'I probably can shorten my communications with this new structure. It seems like a really great way to organize thoughts and likely elicit responses from others due to readability and comprehension being really clear!',
      avatar:
        'https://i.pravatar.cc/75',
      id: '5',
    },
    {
      author: 'Endrick Lamar',
      comment:
        'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, vitae commodo dui efficitur non. Fusce efficitur pulvinar diam vel dictum.',      
      avatar:
      'https://i.pravatar.cc/65210',
      id: '6',
    },
  ];
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  //   const programs = useLSelector((state) => state.generalApi)
  //   const dispatch = useLDispatch();

  //   useEffect(() => {
  //     try {
  //       setLoading(true);
  //       setError(false);
  //       // getcomments
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //   }, [programId]);
  return { comments };
  //   return { programs, loading, error}
};
