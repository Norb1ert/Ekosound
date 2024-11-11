import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
export default function MobileMenu() {
  const links = [
    { href: "#home", label: "Home", id: 1 },
    { href: "#about", label: "O nas", id: 2 },
    { href: "#services", label: "Usługi", id: 3 },
    { href: "#contact", label: "Kontakt", id: 4 },
  ];

  return (
    <Disclosure defaultOpen={false}>
      {({ open }) => (
        <>
          <DisclosureButton className="sm:hidden">
            <span
              className={
                open
                  ? "text-slate-800 text-6xl absolute z-20 right-0 py-3 px-3"
                  : "text-slate-800 text-6xl absolute z-20 right-0 py-3 px-3"
              }
            >
              {open ? <IoClose /> : <IoMenu />}
            </span>
          </DisclosureButton>

          <DisclosurePanel transition className={``}>
            <div className="flex flex-col bg-slate-300/70 backdrop-blur-sm absolute w-full h-screen justify-center items-center text-4xl text-slate-700 font-bold z-10">
              <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="block p-4 hover:text-slate-800"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
