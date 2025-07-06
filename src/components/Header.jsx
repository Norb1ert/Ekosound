// import { IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
function Header() {
  const links = [
    { href: "#home", label: "Home", id: 1 },
    { href: "#about", label: "O nas", id: 2 },
    { href: "#services", label: "Usługi", id: 3 },
    { href: "#contact", label: "Kontakt", id: 4 },
  ];

  return (
    <>
      <MobileMenu />
      <header className=" h-28 hidden sm:block bg-black">
        <div className="container mx-auto flex justify-between items-center min-h-full gap-8 font-montserrat font-thin">
          {/* <h1 className="text-2xl font-bold">Logo</h1> */}
          <img src="./logo-main.png" className="w-full max-w-[70px]"/>
          <ul className="flex gap-3 px-3 md:gap-5 lg:gap-8 text-gray-400">
            {links.map((link) => (
              <li key={link.id} className="cursor-pointer ">
                <a
                  href={link.href}
                  className="text-2xl scroll-smooth hover:text-orange-500 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
