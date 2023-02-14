import styled from "styled-components";
import { useState, useEffect } from 'react';


const Features = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });
  
      const node = document.querySelector('.animated-element');
      observer.observe(node);
  
      return () => {
        observer.unobserve(node);
      };
    }, [])

    return ( 
        <FeaturesContainer className={`animated-element ${isVisible ? 'visible' : ''}`}>
            <h2 className="header">Be it a startup or a legacy business, here’s why you need Dukaan</h2>
            <div className="features-container">
                <div className="launch-feature">
                    <div className="content">
                        <h2>Launch Fast</h2>
                        <ul>
                            <li>Fully responsive e-commerce website & mobile app.</li>
                            <li>Loads 6X faster than existing solutions.</li>
                            <li>Upload/import products and inventory in bulk.</li>
                            <li>Integrate payment gateways.</li>
                            <li>Easily customizable themes.</li>
                        </ul>
                    </div>
                    <div className="image-container">
                        <img src="launch-fast.svg" alt="" />
                    </div>
                </div>
                <div className="scale-feature">
                    <div className="content">
                        <h2>Scale Faster</h2>
                        <ul>
                            <li>Your store will have 99.5% uptime.</li>
                            <li>60+ third party plugins.</li>
                            <li>Marketing tools and discounts to drive repeat orders.</li>
                            <li>Add staff accounts, assign different roles.</li>
                            <li>Unlimited transactions, 0% transaction fees.</li>
                        </ul>
                    </div>
                    <div className="image-container">
                        <img src="scale-faster.svg" alt="" />
                    </div>
                </div>
                <div className="manage-better">
                    <div className="content">
                        <h2>Launch Fast</h2>
                        <ul>
                            <li>Fully responsive e-commerce website & mobile app.</li>
                            <li>Loads 6X faster than existing solutions.</li>
                            <li>Upload/import products and inventory in bulk.</li>
                            <li>Integrate payment gateways.</li>
                            <li>Easily customizable themes.</li>
                        </ul>
                    </div>
                    <div className="image-container">
                        <img src="manage-better.svg" alt="" />
                    </div>
                </div>
            </div>
        </FeaturesContainer>
     );
}
 
export default Features;

const FeaturesContainer = styled.section`
    padding: 120px 0 80px;
    width: 100%;
    overflow: hidden;

    .header {
        max-width: 658px;
        margin: 0 auto 64px;
        text-align: center;
        font-size: 36px;
        line-height: 42px;
        font-weight: 700;
        letter-spacing: -.02em;
    }

    .features-container {
        padding: 0 20px;
        width: 100%;
        margin: 0 auto;
    }

    .features-container h2 {
        font-size: 28px;
        line-height: 36px;
        font-weight: 700;
        margin-bottom: 32px;
    }

    .features-container li {
        position: relative;
         font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        margin-bottom: 16px;
        list-style: none
    }

    .scale-feature, .manage-better, .launch-feature {
        display: flex;
        justify-content: center;
        margin: 0 -40px 64px;
        width: 100%;
    }

    .content {
        padding : 0 40px;
        max-width: 50%;
    }

    .launch-feature .content, .manage-better .content {
        order: 2;
    }

    .launch-feature li:before, .scale-feature li:before, .manage-better li:before {
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        position: absolute;
        content: "";
        left: -32px;
        top: 3px;
    } 

    .image-container {
        max-width: 50%;
        padding: 0 40px;
    }

    .image-container img {
        width: 100%;
    }

    @media (max-width: 568px) {

    .header {
        padding: 0 10px;
        font-size: 24px;
    }


    .features-container {
        padding: 0;
    }

    .content {
        max-width: 100%;
    }

    .scale-feature, .manage-better, .launch-feature {
        display: block;
        margin: 0 auto;
    }

    .image-container {
        max-width: 100%;
    }
}

`