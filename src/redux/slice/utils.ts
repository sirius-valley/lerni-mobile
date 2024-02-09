import { removeHtmlTags } from '../../utils/utils';
import { BubbleResponse } from '../service/types/pill.response';

export const transformResponseBlock = (acc: any[], block: BubbleResponse) => {
  console.log('block: ', block);
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
