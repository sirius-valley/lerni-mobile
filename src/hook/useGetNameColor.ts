import { useTheme } from 'styled-components/native';

const colorMap: Record<number, string> = {};

export const useGetNameColor = (author: number) => {
  const theme = useTheme();
  // debería de mappear segun el id del autor y asociar el color con el id.

  if (!colorMap[author]) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    colorMap[author] = color;
  }

  return colorMap[author];
};
