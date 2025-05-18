import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t text-center headings px-3 py-5">
      Made with ❤️ by{" "}
      <Link
        to={"https://elblackdev.vercel.app"}
        className="font-headings hover:text-softteal text-darkcharcoal duration-500"
      >
        Yousef Aboalata
      </Link>
    </div>
  );
};

export default Footer;
