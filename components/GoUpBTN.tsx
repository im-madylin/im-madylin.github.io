import { FaArrowUp } from "react-icons/fa";

const GoUpBTN: React.FC = () => {
  return (
    <div className="bg-appleGray-100/70 fixed bottom-4 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-3xl">
      <FaArrowUp className="text-appleGray-500 text-2xl" />
    </div>
  );
};

export default GoUpBTN;
