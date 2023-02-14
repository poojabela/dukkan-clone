import Button from "../ui/Button" 
import Anchor from "../ui/Anchor";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import React, { useState, useEffect } from 'react';

const Header = () => {

    const [scroll, setScroll] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
      const onScroll = () => {
        setScroll(window.scrollY);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return ( 
        <HeaderSection style={{
            background: scroll > 5 ? '#fff' : 'transparent',
            boxShadow: scroll > 5 ? '0 4px 20px 0 hsl(0deg 0% 60% / 20%)' : 'none',
             transition: 'all 0.3s ease-in-out',
          }}>
            <div className="header">
                <div className="right">
                    <div className="logo-icon">
                        <img src="logo.svg" alt="logo" style={{width: "135px", height: "44px"}}/>
                    </div>
                    <div className="menu-links-1">
                        <Anchor>Products
                            <span>v</span>
                        </Anchor>
                        <Anchor>Company
                            <span>v</span>
                        </Anchor>
                        <Anchor primary>Pricing</Anchor>
                    </div>
                </div>
                <div className="sign-up-links-1">
                    <Anchor primary>Sign in</Anchor>
                    <Button primary>Start free trial</Button>
                </div>
                <div className="menu-icons" onClick={handleOpen}>
                    <img src="menu.svg" alt="" />
                </div>
            </div>
            {open == true && <MobileNav onClose={handleClose} />}
        </HeaderSection>
     );
}
 
export default Header;

const HeaderSection = styled.header`

    padding: 18px 200px;
    background-color: transparent;
    z-index: 999;
    position: sticky;
    align-items: center;
    top: 0;
    width: 100%;
    overflow: hidden;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }

    .menu-icons {
        display: none;
        cursor: pointer;
    }

    .right {
        display: flex;
        align-items: center;
    }

    .logo-icon {
        margin-right: 60px;
    }

    .menu-links-1 a {
        margin-right: 30px;
    }

    .menu-links-1 a span{
        margin-left: 8px;
    }

    .sign-up-links-1 a {
        margin-right: 20px;
    }

    @media (max-width: 1300px)  {
        padding: 18px 100px;
    }

    @media (max-width: 1240px) {

        .menu-icons {
            display: block;
            background-color: rgba(255, 255, 255, 0.4);
            padding: 5px;
            border-radius: 4px;
       }

       .menu-links-1, .sign-up-links-1 {
        display: none;
       }
    }

    @media (max-width: 776px) {
        padding: 18px 30px;
    }
`