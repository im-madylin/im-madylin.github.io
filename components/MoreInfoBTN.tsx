import { FaPlus } from "react-icons/fa";

const MoreInfoBTN: React.FC = () => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full bg-appleGray-100 px-6 py-2">
      <p className="text-lg font-bold">더 알아보기</p>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
        <FaPlus className="text-2xl text-blue-200" />
      </div>
    </button>
  );
};

export default MoreInfoBTN;
