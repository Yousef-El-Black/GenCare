import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-5 bg-white flex justify-between py-4">
      <div className="left">2025 © All Rights Reserved By GenCare ERP</div>
      <div className="right">
        <Link className="underline text-deepblue" to={"privacypolicy"}>
          Privacy Policy
        </Link>{" "}
        |{"  "}
        <Link className="underline text-deepblue" to={"termandconditions"}>
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
