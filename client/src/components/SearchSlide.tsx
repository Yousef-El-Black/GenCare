import CloseIcon from "@mui/icons-material/Close";

const SearchSlide = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 duration-700 w-[100vw] h-[100vh] bg-white flex justify-center gap-4 flex-wrap pt-12 z-12 ${
        isOpen ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <input
        type="text"
        className="w-[70vw] h-[50px] outline-0 indent-5 border rounded"
        placeholder="Search"
      />
      <button
        className="w-[50px] h-[50px] outline-0 flex justify-center items-center cursor-pointer"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setIsOpen(false);
        }}
      >
        <CloseIcon fontSize="large" />
      </button>
    </div>
  );
};

export default SearchSlide;
