const Card = ({ title, value, color,icon }) => {
  return (
    <div className={`flex items-center bg-gray-800 p-5 rounded-lg text-${color}`}>
      <div className={`text-2xl rounded text-${color} `}>{icon}</div>
      <div className="ml-4">
        <p className=" font-bold text-white">{title}</p>
        <p className="text-lg text-white ">{value}</p>
      </div>
    </div>
  );
};

export default Card;
