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
                  ? "text-white text-6xl fixed z-40 right-0 py-3 px-3"
                  : "text-white text-6xl fixed z-40 right-0 py-3 px-3"
              }
            >
              {open ? <IoClose /> : <IoMenu />}
            </span>
          </DisclosureButton>

          <DisclosurePanel transition className={``}>
            <div className="flex flex-col bg-slate-300/70 backdrop-blur-sm fixed inset-0 w-full h-screen justify-center items-center text-4xl text-white font-bold z-20">
              <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="block p-4 hover:text-orange-500"
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
