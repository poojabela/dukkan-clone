import styled from "styled-components";
import Button from "../ui/Button"

const HeroSection = () => {
    return ( 
        <HeroContainer>
            <div className="image-banner">
                <img src="banner.webp" alt="" />
            </div>
            <div className="flex-container">
                <div className="content-container">
                    <h1>The global commerce platform, built for performance</h1>
                    <p className="description">Effortlessly launch a stunning online store, attract and convert more customers.</p>
                    <Button primary>Start 7 day free trial</Button>
                    <div className="available">
                        <p>Also available on</p>
                        <div className="icons">
                            <img src="apple.svg" alt="" />
                            <img src="playstore.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="hero_image.webp" alt="" />
                </div>

            </div>
        </HeroContainer>
     );
}
 
export default HeroSection;

const HeroContainer = styled.section`

    padding: 30px 0 90px; 
    width: 100%;
    overflow: hidden;

    .image-banner img{
        position: absolute;
        top: 0;
        width: 100%;
        height: 610px;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

   .flex-container {
    display: flex;
    width: 100%;
    overflow: hidden;
   }

   .content-container {
    padding-left: 200px;
    max-width: 50%;
    padding-top: 30px;
   }

   .content-container h1{
    font-size: 45px;
    font-weight: 800;
    line-height: 50px;
    margin-bottom: 10px;
   }

   .content-container .description {
    color: #4d4d4d;
    font-size: 18px;
    line-height: 28px;
    margin-top: 20px;
    max-width: 486px;
   }

   button {
    margin-top: 30px;
   }

   .available {
    display: flex;
    margin-top: 20px;
    align-items: center;
   }

   .available p {
    font-size: 13px;
   }

   .available img {
    margin-left: 10px;
    width: 16px;
    height: 16px;
   }

   .hero-image {
    position: relative;
    right: 0;
    height: 600px;
    width: 700px;
    left: 79px;
   }

   .hero-image img {
    position: absolute;
    left: 55px;
    right: 0;
    top: -60px;
    height: 100%;
    width: 100%;
   }

   @media (max-width: 1300px) {
    .content-container {
        padding-left: 100px;
    }
   }

   @media (max-width: 1024px) {

    .content-container h1{
        font-size: 32px;
        line-height: 36px;
        font-weight: 800;
        letter-spacing: -1.12px;
       }
   }

   .hero-image {
    height: 500px;
    width: 100%;
    left: 0px;
    top: 150px;
   }


   @media (max-width: 776px) {
    .content-container {
        padding-left: 30px;
    }

    .content-container .description {
        font-size: 16px;
        line-height: 24px;
    }

   }

   @media (max-width: 562px) {

    padding-bottom: 0;

    .content-container h1{
        width: 400px;
    }

    .content-container .description {
        width: 300px;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
       }

    .hero-image {
        height: 300px;
        width: 600px;
        left: -90px;
        top: 50px;
       }
   }

}
`