import Item from './Item';
import { StyledColumn, StyledRow } from '../../styled/styles';
import React from 'react';
import useZoomImage from '../../../hooks/useZoomImage';
import { LabeledSend } from '../../bubbles/LabeledSend';
import { StyledContainer } from './styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import PointsDisplay from '../PointsDisplay';

type QuestionnaireImgAnswerItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  selected?: boolean;
};

interface QuestionnaireImgAnswerProps {
  items: QuestionnaireImgAnswerItem[];
  onSelect: (id: string) => void;
  onPress: () => void;
  sealed: boolean;
  correctAnswerId: string;
  isImgSelectedCorrect: boolean;
  points?: number;
}

const QuestionnaireImgAnswer = ({
  items,
  onSelect,
  onPress,
  sealed,
  correctAnswerId,
  isImgSelectedCorrect,
  points,
}: QuestionnaireImgAnswerProps) => {
  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      items?.map((item) => ({
        url: item.image,
      })) ?? [],
  });

  const renderStatusIcon = (id: string, selected: boolean) => {
    if (selected && sealed) {
      const isCorrect = correctAnswerId === id;
      return isCorrect ? <CheckIcon /> : <MultiplyIcon />;
    }
    return null;
  };

  return (
    <StyledColumn
      css={{
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      <StyledContainer
        horizontal={sealed ? false : true}
        contentContainerStyle={{
          paddingLeft: 8,
          paddingRight: 24,
          gap: 24,
          alignItems: 'flex-end',
        }}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => {
          return (
            <StyledColumn key={item.id} css={{ alignItems: 'flex-end' }}>
              <StyledRow css={{ gap: '8px' }}>
                <Item
                  imgUrl={item.image}
                  selected={item.selected}
                  handleOpenImage={() => handleOpenImage(index)}
                  handleSelect={() => onSelect(item.id)}
                  title={item.title}
                  description={item.description}
                  disabled={sealed}
                  sealed={sealed}
                  hideSelf={sealed && !item?.selected && !isImgSelectedCorrect}
                  hasOpacity={sealed && !item?.selected}
                />
                {renderStatusIcon(item.image, !!item?.selected)}
              </StyledRow>
              {sealed && item.selected && <PointsDisplay points={points ?? 0} />}
            </StyledColumn>
          );
        })}
      </StyledContainer>
      {!sealed && (
        <StyledRow style={{ alignItems: 'center', gap: 6, paddingHorizontal: 24 }}>
          <LabeledSend
            onPress={onPress}
            status={items.some((item) => item.selected) ? 'selected' : 'one_selection_only'}
          />
        </StyledRow>
      )}
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default QuestionnaireImgAnswer;
