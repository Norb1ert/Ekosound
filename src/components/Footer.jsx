
import { FaFacebook } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import CopyButton from './CopyButton'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-slate-700  flex flex-col sm:flex-row px-6 py-6 gap-6 justify-center items-center lg:text-xl">
      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <h3 className="text-lg font-bold">Kontakt</h3>
        <p>ekosoundakustyka@gmail.com</p>
        <p>+48 604 640 660</p>
      </div>

      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <h3 className="text-lg font-bold">Odnośniki</h3>
        <FooterLinks />
      </div>

      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-3">
          <p>&copy; 2025 Ekosound Akustyka</p>
          <p>Wszelkie prawa zastrzeżone</p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {/* <a href="+48604640660"> 
          <FaWhatsapp className="hover:text-slate-500 transition-all duration-400" />
          </a> */}
          <CopyButton />
          <a  href="https://www.facebook.com/profile.php?id=100063580772293&locale=pl_PL" className="text-blue-700 flex justify-center items-center gap-2">
          <FaFacebook className="hover:text-blue-700 transition-all duration-400 text-blue-700" />
          Facebook
          </a>
        </div>
        <div className="text-center ">
          <p className=" text-slate-400">Created by Norbert</p>
        </div>
      </div>
    </footer>
  );
}
