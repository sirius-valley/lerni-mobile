import { useTheme } from 'styled-components/native';

const colorMap:  Record<number, string> = {};

export const useGetNameColor = (author: number) => {
 const theme = useTheme();

 // If we haven't assigned a color to this author yet, generate a random color
 if (!colorMap[author]) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Convert the RGB values to a hex color
    let color = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    // Store the color in our map
    colorMap[author] = color;
 }

 // Return the color associated with this author
 return colorMap[author];
};