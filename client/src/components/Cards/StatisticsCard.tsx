const StatisticsCard = ({
  icon,
  label,
  num,
}: {
  icon: React.ReactNode;
  label: string;
  num: number;
}) => {
  return (
    <div className="card px-3 py-5 flex items-center bg-white shadow-lg border-darkcharcoal border rounded-lg justify-center gap-3 flex-1 text-deepblue">
      <div className="icon">{icon}</div>
      <div className="text-darkcharcoal">
        <h3 className="label text-lg">{label} </h3>
        <span className="text-xl font-bold">{num}</span>
      </div>
    </div>
  );
};

export default StatisticsCard;
