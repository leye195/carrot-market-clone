import { timeFromToday } from "lib/client/utils";
import Icon from "./Icon";

type Props = {
  question: string;
  name: string;
  answers: number;
  wonders: number;
  updatedAt: Date;
};

const Question = ({ name, question, answers, wonders, updatedAt }: Props) => {
  return (
    <div className="flex flex-col items-start pt-4 bg-white cursor-pointer">
      <span className="flex items-center mx-2 px-3 py-0.5 rounded-md text-xs font-medium bg-gray-100">
        동네질문
      </span>
      <p className="px-3 mt-2 text-gray-700 ">
        <span className="text-orange-500 font-medium">Q.</span> {question}
      </p>
      <div className="px-3 mt-3 flex items-center justify-between w-full text-gray-500 text-xs font-medium">
        <span>{name}</span>
        <span>{timeFromToday(updatedAt)}</span>
      </div>
      <div className="flex space-x-4 px-3 mt-3 text-gray-700 py-2 border-t-[1.5px] w-full">
        <span className="flex items-center space-x-2 text-sm">
          <Icon.WonderIcon />
          <span>궁금해요 {wonders}</span>
        </span>
        <span className="flex items-center space-x-2 text-sm">
          <Icon.CommentIcon />
          <span>답변 {answers}</span>
        </span>
      </div>
    </div>
  );
};

export default Question;
