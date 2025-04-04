const Homepage = () => {
  return (
    <>
      <h1 className="indent-5">Colors</h1>
      <div className="flex gap-5 m-5">
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-white font-bold bg-deepblue">
          Deep Blue
        </div>
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-white font-bold bg-softteal">
          Soft Teal
        </div>
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-black font-bold bg-lightskyblue">
          Light Sky Blue
        </div>
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-black font-bold bg-coolgray">
          Cool Gray
        </div>
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-white font-bold bg-darkcharcoal">
          Dark Charcoal
        </div>
        <div className="border-2 border-black w-[100px] h-[100px] rounded-full flex justify-center items-center text-center text-black font-bold bg-white">
          White
        </div>
      </div>
      <h1 className="indent-5">Colors</h1>
      <div>
        <h1 className="font-headings">Poppins</h1>
        <h1 className="font-body">Merriweather</h1>
      </div>
    </>
  );
};

export default Homepage;
