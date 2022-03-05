type Props = {
  title?: string;
  price?: number;
};

const SimilarItem = ({ title = "Galaxy S60", price = 6 }: Props) => {
  return (
    <div>
      <div className="h-52 w-full bg-slate-300 mb-3 rounded-md" />
      <h3 className=" text-gray-700 -mb-1">{title}</h3>
      <span className="text-sm font-medium text-gray-900">${price}</span>
    </div>
  );
};

export default SimilarItem;
