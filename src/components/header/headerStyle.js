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
    background-color: #ee7600;
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
    color: #FDFDFD;
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
        color: white;
        content: ${({iconChange})=>(iconChange) ? '"close";':'"menu";'};
    }
`;

export const Navbar = styled.nav`
    position: absolute;
    top: calc(2rem + 30px + 4px);
    right: 0;
    z-index: 0;
    width: 60vw;
    height: calc(100vh - calc(2rem + 30px + 4px));
    background-color: #e5e5e5;
    box-sizing: border-box;

    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    transition: all 0.3s ease-in-out;

    transform: translateX(${({visibleMenu})=>(visibleMenu ? "0px":"100%")});
`;

export const CloseMenuArea = styled.div`
    position: absolute;
    top: calc(2rem + 30px + 4px);
    left: 0;
    width: 40vw;
    height: calc(100vh - calc(2rem + 30px + 4px));
    ${({visibleMenu})=>(visibleMenu ? `display: initial`:"display: none")}
`;

export const LinkList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 1.2rem;
    color: #909090;

    &>li{
        padding-left: 2rem;
    }

    &::before{
        background-color: #d5d5d5;
        width: 100%;
        padding: 0.3rem;
        border-radius: 5px;
        color: #5f6368;
        align-self: flex-start;
        content: "${({title})=> title}";
    }
`;

//Desktop
export const DesktopHeader = styled.header`
    width: 100vw;
    height: 4rem;
    background-color: red;
`;