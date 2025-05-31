export default function FooterLinks() {
  const links = [
    {
      href: "#home",
      id: 1,
      className:
        "hover:text-slate-900 transition-all duration-300 pb-2 pt-1 cursor-pointer",
      label: "Home",
    },
    {
      href: "#about",
      id: 2,
      className:
        "hover:text-slate-900  transition-all duration-300 pb-2 pt-1 cursor-pointer",
      label: "O nas",
    },
    {
      href: "#offer",
      id: 3,
      className:
        "hover:text-slate-900  transition-all duration-300 pb-2 pt-1 cursor-pointer",
      label: "Oferta",
    },
    
  ];
  return (
    <ul className="text-center ">
      {links.map((link) => (
        <li className={link.className} key={link.id} href={link.href}>
          {link.label}
        </li>
      ))}
    </ul>
  );
}
