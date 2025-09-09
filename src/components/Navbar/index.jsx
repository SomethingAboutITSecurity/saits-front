import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
// ...existing code...
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

const navbarItems = [
  {
    href: "about",
    text: "O nas",
  },
  {
    href: "conference",
    text: "Konferencja",
  },
  {
    href: "projects",
    text: "Działalność",
  },
  {
    href: "contact",
    text: "Kontakt",
  },
];

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
  window.addEventListener("scroll", changeNav);

  return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo onClick={toggleHome}>
          <img src="img/logo.png" width="130px" alt="Logo SAITS" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navbarItems.map((item) => (
            <NavItem key={item.href}>
              <NavLinks
                href={`#${item.href}`}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(item.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Przejdź do sekcji ${item.text}`}
              >
                {item.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
