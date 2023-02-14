import styled from "styled-components";

const Footer = () => {
    return ( 
        <FooterSection>
            <div className="top">
                <img src="logo2.svg" alt="" />
                <div className="links-container">
                    <div className="links">
                        <ul>
                            <li>Business tools</li>
                            <li>Dukaan finder</li>
                            <li>Dukaan for PC</li>
                            <li>Dukaan delivery</li>
                            <li>Dukaan plugins</li>
                            <li>Dukaan themes</li>
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            <li>Awards '22</li>
                            <li>Help center</li>
                            <li>Blog</li>
                            <li>Banned items</li>
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            <li>About</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Contact</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            <li>Jobs</li>
                            <li>Branding</li>
                            <li>Press inquiry</li>
                            <li>Bug bounty</li>
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <img src="logo2.svg" alt="" />
                <p>Growthpond Technology Pvt Ltd. All rights reserved, 2023.</p>
                <p>Made in India.</p>
            </div>
        </FooterSection>
     );
}
 
export default Footer;

const FooterSection = styled.footer`
    background-color: #1a181e; 
    width: 100%;
    overflow: hidden;
    padding: 0 150px;
    
    .top {
        width: 100%
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
    }

    img {
        width: 156px;
        height: 44px;
        margin-top: 20px;
    }

    li, p {
        color: #fff;
    }

    li {
        list-style: none;
        margin-top: 20px;
        cursor: pointer;
    }

    .top {
        display: flex;
    }

    .links-container {
        display: flex;
        justify-content: space-around;
        flex: 1 1;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-top: solid 1px hsla(0,0%,85.1%,.2);
    }

    .bottom img {
        display: none;
    }

    .bottom p {
        font-size: 14px;
    }  
    
    @media (max-width: 1024px) {
        padding: 0 70px;   
    }

    @media (max-width: 768px) {
        .links-container {
            display: block;
            flex: 0;
        }

        li {
            width: 150px;
        }
    }

    @media (max-width: 576px) {
        .links-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        li {
            font-size: 14px;
        }

        .top img {
            display: none;
        }

        .bottom {
            display: block;
            text-align: center;
        }

        .bottom img {
            display: block;
            width: 100%;
            margin: 0 auto;
            margin-bottom: 10px;
        }

        .bottom p {
            font-size: 12px;
            margin-bottom: 5px;
        }
    }
    
`