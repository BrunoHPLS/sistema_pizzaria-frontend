import React, {useState} from 'react';
import MediaQuery from 'react-responsive';

import {MobileHeaderFixed, MobileHeader, DesktopHeader, Logo, MenuBtn, Navbar, LinkList, CloseMenuArea} from './headerStyle';

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
              <LinkList title="Menu">
                <li>Cardápio</li>
                <li>Pedidos</li>
                <li>Cupons</li>
                <li>Oferta do Dia</li>
              </LinkList>
              <LinkList title="Configurações">
                <li>Ajustes</li>
                <li>Sair</li>
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