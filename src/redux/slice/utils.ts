import { removeHtmlTags } from '../../utils/utils';
import { BubbleResponse, ImagesOptions } from '../service/types/pill.response';

export const transformResponseBlock = (acc: any[], block: BubbleResponse) => {
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
              selected: block.value === '' ? 'default' : block!.value === option,
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

export const transformQuestionnaireResponseBlock = (acc: any[], block: BubbleResponse) => {
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
              selected: block.value === '' ? false : block!.value === option,
            },
          ];
        }, []),
      },
    };
  } else if (block?.imgOptions) {
    return {
      ...acc,
      [block.id]: {
        ...block,
        imgOptions: block.imgOptions?.reduce((acc: any, option: ImagesOptions) => {
          return [
            ...acc,
            {
              title: option.title,
              description: option.description,
              image: option.image,
              id: `id-${Math.random().toString().slice(2, 8)}`,
              selected: block.value === '' ? false : block!.value === option.image,
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
