import { FaPlus } from "react-icons/fa";

const MoreInfoBTN: React.FC = () => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2 transition-all duration-300 hover:bg-gray-200 sm:px-6">
      <p className="text-sm font-bold sm:text-base md:text-lg">더 알아보기</p>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 sm:h-10 sm:w-10">
        <FaPlus className="text-lg text-blue-200 sm:text-xl md:text-2xl" />
      </div>
    </button>
  );
};

export default MoreInfoBTN;
