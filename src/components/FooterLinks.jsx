export default function FooterLinks() {
  const links = [
    {
      href: "#home",
      id: 1,
      className:
        "hover:text-slate-900 hover:underline transition-all duration-300 pb-2 pt-1",
      label: "Home",
    },
    {
      href: "#about",
      id: 2,
      className:
        "hover:text-slate-900 hover:underline transition-all duration-300 pb-2 pt-1",
      label: "O nas",
    },
    {
      href: "#offer",
      id: 3,
      className:
        "hover:text-slate-900 hover:underline transition-all duration-300 pb-2 pt-1",
      label: "Oferta",
    },
    {
      href: "#policy",
      id: 4,
      className:
        "hover:text-slate-900 hover:underline transition-all duration-300",
      label: "Polityka prywatności",
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
