export default function ({ menus }) {
  const renderedNavigation = menus.map((menu, menuIndex) => {
    return (
      <div key={75953 + menuIndex} className="bottom-menu">
        <p className="bottom-menu-header">{menu.header}</p>
        {menu.links.map((link, linkIndex) => {
          return (
            <a
              key={35 + linkIndex}
              className="bottom-menu-link"
              href={link.href}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    );
  });
  return renderedNavigation;
}
