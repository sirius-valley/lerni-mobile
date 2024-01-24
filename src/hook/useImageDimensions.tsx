import { useState, useEffect } from 'react';
import { Image, Dimensions } from 'react-native';

const useImageDimensions = (imageSource: string) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imageSource) {
      Image.getSize(
        imageSource,
        (width, height) => {
          let newWidth = width;
          let newHeight = height;
          if (width > Dimensions.get('window').width) {
            newWidth = Dimensions.get('window').width * 0.85;
            newHeight = (Dimensions.get('window').width * 0.85 * height) / width;
          } else if (height > Dimensions.get('window').height) {
            newHeight = Dimensions.get('window').height * 0.85;
            newWidth = (Dimensions.get('window').height * 0.85 * width) / height;
          }
          setDimensions({ width: newWidth, height: newHeight });
        },
        (error) => {
          console.error('Error obteniendo dimensiones de la imagen:', error);
        },
      );
    }
  }, [imageSource]);

  return dimensions;
};

export default useImageDimensions;
