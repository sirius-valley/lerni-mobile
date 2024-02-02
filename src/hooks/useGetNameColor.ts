import { generateColorRGB } from '@marko19907/string-to-color';

export const useGetNameColor = (id: string) => {
  return generateColorRGB(id);
};
