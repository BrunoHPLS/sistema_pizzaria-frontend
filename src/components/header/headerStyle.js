import styled from "styled-components";

//Mobile First
export const MobileHeaderFixed = styled.header`
    position: fixed;
    z-index: 1;
    width: 100vw;
    top: 0px;
    box-sizing: border-box;
`;

export const MobileHeader = styled.div`
    position: relative;
    background-color: var(--laranja);
    display: flex;
    padding: 15px 1.5rem;
    align-items: center;
    justify-content: space-between;

    border-bottom: solid 4px var(--branco);

    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.25);

    &::before{
        position: absolute;
        content: "";
        width: 33%;
        height: 4px;
        background-color: var(--verde-italia);
        bottom: -4px;
        left: 0;
    }

    &::after{
        position: absolute;
        content: "";
        width: 33%;
        height: 4px;
        background-color: var(--vermelho-italia);
        bottom: -4px;
        right: 0;
    }
`;

export const Logo = styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: var(--branco);
`;

export const MenuBtn = styled.button`
    display: flex;
    width: 1.8rem;
    height: 1.8rem;

    &::before{
        transition: all 0.5s ease-in-out;
        font-family: 'Material Icons';
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--branco);
        content: ${({iconChange})=>(iconChange) ? '"close";':'"menu";'};
    }
`;

export const Navbar = styled.nav`
    position: absolute;
    top: calc(2rem + 30px + 4px);
    right: 0;
    z-index: 2;
    width: 270px;
    height: calc(100vh - calc(2rem + 30px + 4px));
    background-color: var(--branco-escuro);
    box-sizing: border-box;

    padding: 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    transition: all 0.3s ease-in-out;

    transform: translateX(${({visibleMenu})=>(visibleMenu ? "0px":"100%")});
`;

export const CloseMenuArea = styled.div`
    z-index: 0;
    position: absolute;
    top: calc(2rem + 30px + 4px);
    left: 0;
    width: 100vw;
    height: calc(100vh - calc(2rem + 30px + 4px));
    ${({visibleMenu})=>(visibleMenu ? `display: initial`:"display: none")}
`;

export const UserArea = styled.a`
    align-self: center;
    display: grid;
    grid-template-areas: 
    "userimg username"
    "userimg userlink";
    align-items: center;
    justify-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    background-color: var(--cinza-claro);
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 3rem 10px 10px 3rem;
    max-width: 250px;
`;

export const UserImg = styled.div`
    position: relative;
    grid-area: userimg;
    background-color: var(--cinza);
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    overflow: hidden;

    ${({img})=>(img ? 
    `
    background-image: url("${img}");
    background-size: 100%;
    `:
    `
    &::before{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-65%);
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        background-color: var(--cinza-escuro);
    }

    &::after{
        content: "";
        position: absolute;
        bottom: -50%;
        transform: translateX(-50%);
        left: 50%;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 100%;
        background-color: var(--cinza-escuro);
    }
    `)}
`;

export const UserName = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-self: flex-end;
    justify-self: start;
    grid-area: username;
    color: var(--laranja);
    font-size: 1.3rem;
`;

export const UserLink = styled.span`
    align-self: flex-start;
    justify-self: start;
    grid-area: userlink;
    font-size: 1.1rem;
    color: var(--cinza-escuro);
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &::before{
        font-size: 1.5rem;
        font-family: "Material Icons";
        content: "manage_accounts";
    }

    &::after{
        content: "Editar dados";
    }
`;

export const LinkList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 1.2rem;
    color: var(--cinza);

    &>li{
        padding-left: 2rem;
    }

    &::after{
        top: 0.05rem;
        font-size: 1.7rem;
        position: absolute;
        font-family: 'Material Icons';
        content: "${({icon})=> icon}";
    }

    &::before{
        font-size: 1.2rem;
        background-color: var(--cinza-claro);
        padding: 0.3rem 0px 0.3rem 2rem;
        width: 80%;
        border-radius: 5px;
        color: var(--cinza-escuro);
        align-self: flex-start;
        content: "${({title})=> title}";
    }
`;

export const MenuLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        font-size: 1.5rem;
        font-family: 'Material Icons';
        content: "${({icon})=>icon}";
    }
`;

//Desktop
export const DesktopHeader = styled.header`
    width: 100vw;
    height: 4rem;
    background-color: red;
`;