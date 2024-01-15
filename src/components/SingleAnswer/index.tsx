import { Choice, ChoiceProps } from "../styled/Choice";

interface SingleAnswerProps {
  answers?: ChoiceProps[]
}

export const SingleAnswer = ({answers}: SingleAnswerProps) => {
  answers = [{status: "question", text: 'choice 1'}, {status: "question", text: 'choice 2'}, {status: "question", text: 'choice 3'}]
  answers?.map((a) => {
    return (
      <Choice status={a.status} text={a.text} />
    )
  })
  return null
}