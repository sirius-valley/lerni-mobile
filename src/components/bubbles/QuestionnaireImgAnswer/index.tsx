import Item from './Item';
import { StyledColumn, StyledRow } from '../../styled/styles';
import React, { useState } from 'react';
import useZoomImage from '../../../hooks/useZoomImage';
import { LabeledSend } from '../../bubbles/LabeledSend';
import { StyledContainer } from './styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import PointsDisplay from '../PointsDisplay';
import useQuestionnaire from '../../../hooks/useQuestionnaire';
import { CarouselBlockType } from '../../../redux/slice/pill.slice';
import { useLSelector } from '../../../redux/hooks';

type QuestionnaireImgAnswerItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  selected?: boolean;
};

interface QuestionnaireImgAnswerProps {
  blockId: string;
  nextBlockId: string;
  // items: QuestionnaireImgAnswerItem[];
  // onSelect: (id: string) => void;
  // onPress: () => void;
  // sealed: boolean;
  // correctAnswerId: string;
  // isImgSelectedCorrect: boolean;
  // points?: number;
}

const QuestionnaireImgAnswer = ({
  blockId,
  nextBlockId,
  // items,
  // onSelect,
  // onPress,
  // sealed,
  // correctAnswerId,
  // isImgSelectedCorrect,
  // points,
}: QuestionnaireImgAnswerProps) => {
  const { block, handleSealedImageSelection } = useQuestionnaire(blockId, { nextBlockId }) as {
    block: CarouselBlockType;
    handleSealedImageSelection: (carouselBlock: CarouselBlockType) => void;
  };
  const [values, setValues] = useState(block);

  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      block.options?.map((item) => ({
        url: item.image,
      })) ?? [],
  });
  const last = useLSelector((state) => state.questionnaire.last);
  const sealed = block.sealed || !(last === block.id);

  const correctAnswerId = block.correctAnswer?.[0] ?? '';
  const isImgSelectedCorrect = values.value === block.correctAnswer?.[0];

  const handleSelect = (answerId: string) => {
    setValues((prev) => ({
      ...prev,
      imgOptions: prev.imgOptions?.map((option) => {
        return {
          ...option,
          selected: option.id === answerId ? true : false,
        };
      }),
    }));
  };

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
        {values.imgOptions?.map((item, index) => {
          return (
            <StyledColumn key={item.id} css={{ alignItems: 'flex-end' }}>
              <StyledRow css={{ gap: '8px' }}>
                <Item
                  imgUrl={item.image}
                  selected={!!item.selected}
                  handleOpenImage={() => handleOpenImage(index)}
                  handleSelect={() => handleSelect(item.id ?? '')}
                  title={item.title}
                  description={item.description}
                  disabled={sealed}
                  sealed={sealed}
                  hideSelf={sealed && !item?.selected && !isImgSelectedCorrect}
                  hasOpacity={sealed && !item?.selected}
                />
                {renderStatusIcon(item.image, !!item?.selected)}
              </StyledRow>
              {sealed && item.selected && <PointsDisplay points={block.points ?? 0} />}
            </StyledColumn>
          );
        })}
      </StyledContainer>
      {!sealed && (
        <StyledRow style={{ alignItems: 'center', gap: 6, paddingHorizontal: 24 }}>
          <LabeledSend
            onPress={() => handleSealedImageSelection(values)}
            status={
              values.imgOptions?.some((item) => item.selected) ? 'selected' : 'one_selection_only'
            }
          />
        </StyledRow>
      )}
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default QuestionnaireImgAnswer;
