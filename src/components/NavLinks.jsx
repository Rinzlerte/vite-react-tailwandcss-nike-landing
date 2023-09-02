const NavLinks = (props) => {
  return (
    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
      {props.navLinks?.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
