import React, {useState} from 'react';
import MediaQuery from 'react-responsive';

import {MobileHeaderFixed, MobileHeader, DesktopHeader, Logo, MenuBtn, Navbar, LinkList, MenuLink, CloseMenuArea, UserArea, UserImg, UserName, UserLink} from './style';

function Header() {
  const [menuVisible,setMenuVisible] = useState(false);


  return (
    <div>
      <MediaQuery minWidth={0} maxWidth={800}>
        <MobileHeaderFixed>
          <MobileHeader>
            <Logo>Mensa Di Napoli</Logo>
            <MenuBtn iconChange={menuVisible} onClick={(event)=>{setMenuVisible(!menuVisible)}}/>
            <CloseMenuArea visibleMenu = {menuVisible} onClick={(event)=>{setMenuVisible(!menuVisible)}}/>
            <Navbar visibleMenu = {menuVisible}>
              <UserArea href="/">
                <UserImg img="https://github.com/BrunoHPLS.png"/>
                <UserName>Bruno Henrique</UserName>
                <UserLink/>
              </UserArea>
              <LinkList title="Menu" icon="restaurant_menu">
                <li>
                  <MenuLink icon="restaurant" href="/">Cardápio</MenuLink>
                </li>
                <li>
                  <MenuLink icon="receipt" href="/">Pedidos</MenuLink>
                </li>
                <li>
                  <MenuLink icon="local_offer" href="/">Cupons</MenuLink>
                </li>
                <li>
                  <MenuLink icon="today" href="/">Oferta do Dia</MenuLink>
                </li>
              </LinkList>
              <LinkList title="Configurações" icon="settings">
                <li>
                  <MenuLink icon="display_settings" href="/">Ajustes</MenuLink>
                </li>
                <li>
                  <MenuLink icon="logout" href="/">Sair</MenuLink>
                </li>
              </LinkList>
            </Navbar>
          </MobileHeader>
        </MobileHeaderFixed>
      </MediaQuery>
      <MediaQuery minWidth={801}>
        <DesktopHeader/>
      </MediaQuery>
    </div>);
}

export default Header;