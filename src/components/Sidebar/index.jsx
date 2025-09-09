import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
    SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
      aria-label="Menu nawigacyjne"
      aria-modal="true"
      role="dialog"
    >
      <Icon onClick={toggle} aria-label="Zamknij menu">
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu role="menu">
          <SidebarRoute to="/about" onClick={toggle}>
            O nas
          </SidebarRoute>
          <SidebarRoute to="/conference" onClick={toggle} aria-label="Przejdź do sekcji Konferencja">
            Konferencja
          </SidebarRoute>
          <SidebarRoute to="/projects" onClick={toggle} aria-label="Przejdź do sekcji Działalność">
            Działalność
          </SidebarRoute>
          <SidebarRoute to="/contact" onClick={toggle} aria-label="Przejdź do sekcji Kontakt">
            Kontakt
          </SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
