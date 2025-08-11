const ProgressBar = ({
  name,
  percent,
  color,
}: {
  name: string;
  percent: number;
  color: string;
}) => {
  return (
    <div className="mb-2">
      <h3 className="p-2">{name}</h3>
      <div className="bg-coolgray rounded-full w-full h-[8px] relative">
        <div
          className="absolute top-0 left-0 rounded-full h-[8px]"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
