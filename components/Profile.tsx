type Props = {
  className?: string;
  name: string;
};

const Profile = ({ className = "", name }: Props) => {
  return (
    <div
      className={`flex items-center space-x-4 py-4 border-t border-b cursor-pointer ${className}`}
    >
      <div className="w-12 h-12 bg-slate-300 rounded-full" />
      <div>
        <p className="text-sm font-medium text-gray-700">{name}</p>
        <p className="text-xs font-medium text-gray-500">View Profile &rarr;</p>
      </div>
    </div>
  );
};

export default Profile;
