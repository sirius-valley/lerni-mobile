import { removeHtmlTags } from '../../utils/utils';
import { BubbleResponse, ImagesOptions } from '../service/types/pill.response';
import { BubbleResponseQuestionnaire } from '../service/types/questionnaire.response';

export const transformResponseBlock = (acc: any[], block: BubbleResponseQuestionnaire) => {
  if (block?.content) {
    return {
      ...acc,
      [block.id]: {
        ...block,
        content: removeHtmlTags(block.content),
      },
    };
  } else if (block?.options) {
    return {
      ...acc,
      [block.id]: {
        ...block,
        options: block.options.reduce((acc: any, option: string) => {
          return [
            ...acc,
            {
              id: option,
              text: option,
              selected: block.value === '' ? undefined : block!.value === option,
            },
          ];
        }, []),
      },
    };
  } else {
    return {
      ...acc,
      [block.id]: block,
    };
  }
};

export const transformQuestionnaireResponseBlock = (
  acc: any[],
  block: BubbleResponseQuestionnaire,
) => {
  if (block?.content) {
    return {
      ...acc,
      [block.id]: {
        ...block,
        content: removeHtmlTags(block.content),
      },
    };
  } else if (block?.type === 'carousel' && block?.optionDescriptions) {
    return {
      ...acc,
      [block.id]: {
        ...block,
        imgOptions: block.options?.reduce((acc: any, option: string, index: number) => {
          return [
            ...acc,
            {
              title: block?.optionDescriptions?.[index],
              description: block?.optionDescriptions?.[index],
              image: option,
              id: `id-${Math.random().toString().slice(2, 8)}`,
              selected: block.value === '' ? false : block!.value === option,
            },
          ];
        }, []),
      },
    };
  } else if (block?.options) {
    /*
      options: string[];
      value: string;
      correct?: boolean;
      pointsAwarded?: number;
     */
    return {
      ...acc,
      [block.id]: {
        ...block,
        pointsAwarded: block.pointsAwarded,
        correctAnswer: block.correctValue,
        options: block.options.reduce((acc: any, option: string) => {
          return [
            ...acc,
            {
              id: option,
              text: option,
              selected:
                typeof block.value === 'string'
                  ? block.value === ''
                    ? false
                    : block!.value === option
                  : (block.value as string[]).find((val) => val === option),
            },
          ];
        }, []),
      },
    };
  } else {
    return {
      ...acc,
      [block.id]: block,
    };
  }
};
