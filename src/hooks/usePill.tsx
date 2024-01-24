import React, { useState } from 'react';
import { useAnswerMutation, usePillByIdQuery } from '../redux/service/pills.service';
import SingleAnswer from '../components/bubbles/SingleAnswer';
import { MessageContainer } from '../components/bubbles/ChatBubble/styles';
import TextBubble from '../components/bubbles/TextBubble';
import ImageBubble from '../components/bubbles/ImageBubble';
import MultipleAnswer from '../components/bubbles/MultipleAnswer';
import Spinner from '../components/common/Spinner';
import { UserTypes } from '../utils/constants';
import { Avatar } from '../components/common/Avatar';

type BubbleType = 'free-text' | 'text' | 'image' | 'single-choice' | 'multiple-choice' | 'carousel';

interface CommonBlockType {
  id: string;
  value?: string | string[] | number | number[] | boolean | boolean[];
}

interface SingleChoiceBlockType extends CommonBlockType {
  type: 'single-choice';
  value?: string[];
  options: {
    id: string;
    text: string;
    selected?: boolean;
  }[];
}

interface MultipleChoiceBlockType extends CommonBlockType {
  type: 'multiple-choice';
  value?: string[];
  options: {
    id: string;
    text: string;
    selected?: boolean;
  }[];
}

interface TextBlockType extends CommonBlockType {
  type: 'text';
  value: string;
}

interface ImageBlockType extends CommonBlockType {
  type: 'image';
  value: string;
}

type BlockType = TextBlockType | SingleChoiceBlockType | ImageBlockType | MultipleChoiceBlockType;

type PillType = {
  id: string;
  name: string;
  description: string;
  block: BlockType[];
};

const ProfessorBubble = ['text', 'image'];
const StudentBubble = ['single-choice', 'multiple-choice', 'carousel'];

const usePill = (pillId: string) => {
  const [blocks, setBlocks] = useState<BlockType[]>([
    {
      id: '1',
      type: 'text',
      value: 'Hola, soy el bot de OncoLife, ',
    },
    {
      id: '2',
      type: 'text',
      value: '¿Cómo te llamas?',
    },
    {
      id: '3',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Opción 1',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Opción 2',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Opción 3',
          selected: undefined,
        },
      ],
    },
    {
      id: '4',
      type: 'text',
      value: '¿Cuál es tu edad?',
    },
    {
      id: '5',
      type: 'image',
      value: 'https://statics-cuidateplus.marca.com/cms/2023-02/edad-cerebral.jpg',
    },
    {
      id: '6',
      type: 'multiple-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Menor a 12',
          selected: undefined,
        },
        {
          id: '2',
          text: '18 o más',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Prefiero no decirlo',
          selected: undefined,
        },
      ],
    },
    {
      id: '7',
      type: 'text',
      value: '¿Cuál es tu género?',
    },
    {
      id: '8',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Hombre',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Mujer',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Prefiero no decirlo',
          selected: undefined,
        },
      ],
    },
    {
      id: '9',
      type: 'text',
      value: '¿Cuál es tu ciudad de residencia?',
    },
    {
      id: '10',
      type: 'text',
      value: '¿Tienes alguna pregunta sobre la salud?',
    },
    {
      id: '11',
      type: 'multiple-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '12',
      type: 'text',
      value: 'Por favor, comparte tu pregunta',
    },
    {
      id: '13',
      type: 'text',
      value: '¿Practicas algún deporte regularmente?',
    },
    {
      id: '14',
      type: 'multiple-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '15',
      type: 'text',
      value: 'Si practicas deporte, ¿cuál es tu favorito?',
    },
    {
      id: '16',
      type: 'text',
      value: '¿Cuál es tu ocupación actual?',
    },
    {
      id: '17',
      type: 'text',
      value: '¿Tienes alguna alergia alimentaria?',
    },
    {
      id: '18',
      type: 'multiple-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '19',
      type: 'text',
      value: '¿Cuál es tu platillo favorito?',
    },
    {
      id: '20',
      type: 'text',
      value: '¿Tienes alguna mascota?',
    },
    {
      id: '21',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Perro',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Gato',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ninguna',
          selected: undefined,
        },
      ],
    },
    {
      id: '22',
      type: 'text',
      value: '¿Cuántas horas duermes en promedio por noche?',
    },
    {
      id: '23',
      type: 'text',
      value: '¿Cuál es tu destino de vacaciones soñado?',
    },
    {
      id: '24',
      type: 'text',
      value: '¿Cómo te mantienes informado(a)?',
    },
    {
      id: '25',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Noticias en línea',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Televisión',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Redes sociales',
          selected: undefined,
        },
      ],
    },
    {
      id: '26',
      type: 'text',
      value: '¿Practicas alguna actividad artística?',
    },
    {
      id: '27',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '28',
      type: 'text',
      value: 'Si practicas alguna actividad artística, ¿cuál es tu favorita?',
    },
    {
      id: '29',
      type: 'text',
      value: '¿Cuál es tu libro favorito?',
    },
    {
      id: '30',
      type: 'text',
      value: '¿Prefieres café o té?',
    },
    {
      id: '31',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Café',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Té',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ninguno',
          selected: undefined,
        },
      ],
    },
    {
      id: '32',
      type: 'text',
      value: '¿Cuál es tu película favorita?',
    },
    {
      id: '33',
      type: 'text',
      value: '¿Tienes alguna meta a corto plazo?',
    },
    {
      id: '34',
      type: 'text',
      value: '¿Cómo te gusta pasar tu tiempo libre?',
    },
    {
      id: '35',
      type: 'text',
      value: '¿Cuál es tu deporte favorito para ver en la televisión?',
    },
    {
      id: '36',
      type: 'text',
      value: '¿Tienes alguna superstición?',
    },
    {
      id: '37',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '38',
      type: 'text',
      value: 'Si tienes alguna superstición, por favor compártela',
    },
    {
      id: '39',
      type: 'text',
      value: '¿Cuál es tu estación del año favorita?',
    },
    {
      id: '40',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Primavera',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Verano',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Otoño',
          selected: undefined,
        },
        {
          id: '4',
          text: 'Invierno',
          selected: undefined,
        },
      ],
    },
    {
      id: '41',
      type: 'text',
      value: '¿Tienes alguna habilidad especial o talento único?',
    },
    {
      id: '42',
      type: 'text',
      value: '¿Cuál es tu color favorito?',
    },
    {
      id: '43',
      type: 'text',
      value: '¿Prefieres la playa o la montaña?',
    },
    {
      id: '44',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Playa',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Montaña',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ambos',
          selected: undefined,
        },
      ],
    },
    {
      id: '45',
      type: 'text',
      value: '¿Eres madrugador(a) o nocturno(a)?',
    },
    {
      id: '46',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Madrugador(a)',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Nocturno(a)',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ambos',
          selected: undefined,
        },
      ],
    },
    {
      id: '47',
      type: 'text',
      value: '¿Cuál es tu serie de televisión favorita?',
    },
    {
      id: '48',
      type: 'text',
      value: '¿Tienes alguna tradición familiar especial?',
    },
    {
      id: '49',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '50',
      type: 'text',
      value: 'Si tienes una tradición familiar, por favor compártela',
    },
    {
      id: '51',
      type: 'text',
      value: '¿Cuál es tu objetivo a largo plazo?',
    },
    {
      id: '52',
      type: 'text',
      value: '¿Te consideras más introvertido(a) o extrovertido(a)?',
    },
    {
      id: '53',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Introvertido(a)',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Extrovertido(a)',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ambos',
          selected: undefined,
        },
      ],
    },
    {
      id: '54',
      type: 'text',
      value: '¿Tienes alguna fobia?',
    },
    {
      id: '55',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '56',
      type: 'text',
      value: 'Si tienes alguna fobia, por favor compártela',
    },
    {
      id: '57',
      type: 'text',
      value: '¿Cuál es tu aplicación móvil favorita?',
    },
    {
      id: '58',
      type: 'text',
      value: '¿Tienes algún hábito saludable que sigas regularmente?',
    },
    {
      id: '59',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
    {
      id: '60',
      type: 'text',
      value: 'Si tienes algún hábito saludable, por favor compártelo',
    },
    {
      id: '61',
      type: 'text',
      value: '¿Prefieres viajar en avión o en automóvil?',
    },
    {
      id: '62',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Avión',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Automóvil',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ambos',
          selected: undefined,
        },
      ],
    },
    {
      id: '63',
      type: 'text',
      value: '¿Tienes alguna meta de viaje pendiente?',
    },
    {
      id: '64',
      type: 'text',
      value: '¿Cuál es tu tipo de música favorita?',
    },
    {
      id: '65',
      type: 'text',
      value: '¿Eres más de películas o de series?',
    },
    {
      id: '66',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Películas',
          selected: undefined,
        },
        {
          id: '2',
          text: 'Series',
          selected: undefined,
        },
        {
          id: '3',
          text: 'Ambos',
          selected: undefined,
        },
      ],
    },
    {
      id: '67',
      type: 'text',
      value: '¿Cuál es tu instrumento musical favorito?',
    },
    {
      id: '68',
      type: 'text',
      value: '¿Tienes alguna rutina matutina que sigas regularmente?',
    },
    {
      id: '69',
      type: 'single-choice',
      value: undefined,
      options: [
        {
          id: '1',
          text: 'Sí',
          selected: undefined,
        },
        {
          id: '2',
          text: 'No',
          selected: undefined,
        },
      ],
    },
  ]);
  const [index, setIndex] = useState<number>(68);
  const { data, isLoading: pillLoading } = usePillByIdQuery(pillId, {
    skip: !pillId,
  });
  const [answer, { data: AnswerData, isLoading: answerLoading }] = useAnswerMutation();

  const AnswerBubble = (value: string | undefined | string[]) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      newBlocks[index].value = value;
      return newBlocks;
    });
  };

  const AnswerSingleBubble = (id: string) => {
    const block: SingleChoiceBlockType = blocks[index] as SingleChoiceBlockType;
    block.options = block.options.map((option) => {
      if (option.id === id) {
        option.selected = option?.selected === undefined ? true : undefined;
      }
      return option;
    });
    const blocksMinusOne = blocks.slice(0, index);
    const blocksToUpdate = [...blocksMinusOne, block];
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if ('options' in newBlocks[index]) {
        // @ts-ignore
        newBlocks[index].options = block.options;
      }
      return newBlocks;
    });
    SendAnswerBubble(blocksToUpdate);
  };

  const AnswerMultipleBubble = (id: string) => {
    const block: MultipleChoiceBlockType = blocks[index] as MultipleChoiceBlockType;
    block.options = block.options.map((option) => {
      if (option.id === id) {
        option.selected = option?.selected === undefined ? true : undefined;
      }
      return option;
    });
    const blocksMinusOne = blocks.slice(0, index);
    const blocksToUpdate = [...blocksMinusOne, block];
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if ('options' in newBlocks[index]) {
        // @ts-ignore
        newBlocks[index].options = block.options;
      }
      return newBlocks;
    });
  };

  const SendAnswerBubble = (blocksArg?: BlockType[]) => {
    const blockToUse = blocksArg ?? blocks;
    const body = {
      id: blockToUse[index].id,
      value: blockToUse[index].value,
    };
    answer(body).then((response: any) => {
      if ('data' in response) {
        setBlocks(response.data.blocks);
        setIndex(response.data.blocks.length + 1);
      } else if ('error' in response) {
        console.log(response.error);
      }
    });
  };

  const renderBubble = (block: BlockType, nextBlockType: UserTypes) => {
    const isLast = blocks[blocks.length - 1].id === block.id;
    const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
    const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
    const isLastBubbleSide = user !== nextBlockUser;
    console.log(block, nextBlockType, isLastBubbleSide);
    const BubbleToRender = () => {
      switch (block.type) {
        case 'text':
          return (
            <>
              <TextBubble key={'bubble-inner-' + block.id} content={block.value} user={user} />
              {isLastBubbleSide && <Avatar />}
            </>
          );
        case 'image':
          return (
            <>
              <ImageBubble key={'bubble-inner-' + block.id} url={block.value} user={user} />
              {isLastBubbleSide && <Avatar />}
            </>
          );
        case 'multiple-choice':
          return (
            <MultipleAnswer
              key={'bubble-inner-' + block.id}
              options={block.options}
              onPress={SendAnswerBubble}
              onChange={AnswerMultipleBubble}
              sealed={!isLast}
            />
          );
        case 'single-choice':
          return (
            <SingleAnswer
              key={'bubble-inner-' + block.id}
              options={block.options}
              onPress={(id) => AnswerSingleBubble(id)}
              sealed={false}
            />
          );
      }
    };

    return (
      <MessageContainer
        key={'bubble-' + block.id}
        user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
      >
        <BubbleToRender />
      </MessageContainer>
    );
  };

  const renderThread = () => (
    <>
      {blocks.map((block, index) => {
        const nextBlock: BlockType | undefined =
          index + 1 < blocks.length ? blocks[index + 1] : undefined;
        return renderBubble(block, nextBlock?.type as UserTypes);
      })}
      {
        // Here we should add the loading bubble
        answerLoading && <Spinner />
      }
    </>
  );

  // useEffect(()=>{
  //     if(data) {
  //         setBlocks(data?.block ?? [])
  //         setIndex(data.block.length - 1)
  //     }
  // },[data])

  return {
    blocks,
    pillLoading,
    renderThread,
    SendAnswerBubble,
    AnswerBubble,
  };
};

export default usePill;
