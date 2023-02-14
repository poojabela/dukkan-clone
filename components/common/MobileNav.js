import Anchor from "../ui/Anchor";
import Button from "../ui/Button";
import styled from "styled-components";

const MobileNav = ({ onClose }) => {
    return ( 
        <MobileNavContainer>
            <div className="mobile-header">
                <div className="flex">
                    <img src="logo.svg" alt="logo" style={{width: "135px", height: "44px"}} />
                    <img src="x.svg" alt="" onClick={onClose} className="menu"/>
                </div>
                <div className="menu-links">
                    <Anchor>Products
                        <span>v</span>
                    </Anchor>
                    <Anchor>Company
                        <span>v</span>
                    </Anchor>
                    <Anchor primary>Pricing</Anchor>
                </div>
                <div className="sign-up-links">
                    <Button primary>Start free trial</Button>
                </div>
            </div>
        </MobileNavContainer>
     );
}
 
export default MobileNav;

const MobileNavContainer = styled.section`
    .mobile-header {
        position: fixed;
        background-color: #fff;
        height: 100vh;
        left: 0;
        right: 0;
        top: 0;
        padding: 12px 20px;
    }

    .menu {
        cursor: pointer;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    a {
        display: block;
        padding: 10px 0;
    }

    span {
        margin-left: 5px;
    }

    .menu-links {
        margin-top: 60px;
        margin-bottom: 100px;
    }
`