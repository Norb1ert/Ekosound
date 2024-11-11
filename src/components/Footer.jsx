import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-slate-700  flex flex-col sm:flex-row px-6 py-6 gap-6 justify-center items-center lg:text-xl">
      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <h3 className="text-lg font-bold">Kontakt</h3>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur,</p>
        <p>mail.example.com</p>
        <p>+48 748 488 888</p>
      </div>

      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <h3 className="text-lg font-bold">Odnośniki</h3>
        <FooterLinks />
      </div>

      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-3">
          <p>&copy; 2024 Ekosound Akustyka.</p>
          <p>Wszelkie prawa zastrzeżone</p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <FaWhatsapp className="hover:text-slate-500 transition-all duration-400" />
          <FaFacebook className="hover:text-slate-500 transition-all duration-400" />
        </div>
        <div className="text-center ">
          <p className=" text-slate-400">Created by Norbert</p>
        </div>
      </div>
    </footer>
  );
}
