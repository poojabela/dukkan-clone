import styled from "styled-components";
import { useState, useEffect } from 'react';

const Tools = () => {

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
        <ToolsContainer className={`animated-element ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h2>E-commerce, made (incredibly) easy</h2>
                <p>All the tools you need to grow your online business.</p>
                <div className="content-container">
                    <div className="content">
                        <img src="watch.svg" alt="" />
                        <h3>Site Speed</h3>
                        <p>Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!</p>
                    </div>
                    <div className="content">
                        <img src="warehouse.svg" alt="" />
                        <h3>Multi-Warehouse</h3>
                        <p>One store, multiple locations. Ship products from multiple warehouses across India.</p>
                    </div>
                    <div className="content">
                        <img src="basket.svg" alt="" />
                        <h3>Optimised Checkouts</h3>
                        <p>Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.</p>
                    </div>
                    <div className="content">
                        <img src="account.svg" alt="" />
                        <h3>Staff Accounts</h3>
                        <p>Add employees, colleagues and teammates to help you grow your business while managing access.</p>
                    </div>
                    <div className="content">
                        <img src="mobile.svg" alt="" />
                        <h3>Android App</h3>
                        <p>The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.</p>
                    </div>
                    <div className="content">
                        <img src="analytics.svg" alt="" />
                        <h3>Advanced Analytics</h3>
                        <p>All the information about your sales, traffic, regions and products, just a single click away.</p>
                    </div>
                </div>
            </div>
        </ToolsContainer>
     );
}
 
export default Tools;

const ToolsContainer = styled.section`
    background-color: rgba(250,183,59,.1);
    padding: 64px 0;
    text-align: center;
    width: 100%;
    overflow: hidden;

    .container {
        margin: 0 auto;
        padding: 0 200px;
    }

    h2 {
        font-size: 36px;
        margin: 0 0 16px;
    }

    p {
        font-size: 20px;
    }

    .content-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 70px;
        grid-gap: 30px;
    }

    .content {
        border-radius: 8px;
        padding: 24px;
        box-shadow: 0 2px 8px rgb(26 24 30 / 6%);
    }

    .content h3 {
        margin: 20px 0 8px;
    }

    .content p {
        font-size: 16px;
    }

    img {
        width: 64px;
        height: 64px;
    }

    .content {
        background: #fff;
    }

    @media (max-width: 1024px) {
        .container {
            padding: 0 100px;
        }
    } 

    @media (max-width: 768px) {

        .content-container {
            grid-template-columns: repeat(2, 1fr);
        }

        .container {
            padding: 0 40px;
        }
        @media (max-width: 576px) {

            h2 {
                font-size: 24px;
                margin: 0 0 8px;
            }

            p {
                font-size: 14px;
            }

            .content h3 {
                font-size: 16px;
                margin: 10px 0 2px;
            }

            .content p {
                font-size: 14px;
                margin-top: 10px;
            }

            .content-container {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`