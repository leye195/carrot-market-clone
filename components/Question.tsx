import { timeFromToday } from "lib/client/utils";

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
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>궁금해요 {wonders}</span>
        </span>
        <span className="flex items-center space-x-2 text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span>답변 {answers}</span>
        </span>
      </div>
    </div>
  );
};

export default Question;
