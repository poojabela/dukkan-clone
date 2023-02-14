import styled from "styled-components";

const GrowStore = () => {
    return ( 
        <GrowStoreContainer>
            <h2>Grow your online store. <br /> Learn the tips and tricks from experts.</h2>
            <div className="products">
                <div className="product 1">
                    <img src="dukaan-dimensions-featured-image.jpg" alt="" />
                    <h3>Press</h3>
                    <h4>Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by Dukaan</h4>
                </div>
                <div className="product 3">
                    <img src="sell-antiques-online.jpg" alt="" />
                    <h3>Sell online</h3>
                    <h4>How to Sell Antiques Online the Right Way – Detailed 8 Step Guide</h4>
                </div>
                <div className="product 3">
                    <img src="how-to-sell-cookies-online.jpg" alt="" />
                    <h3>Sell online</h3>
                    <h4>How to Sell Cookies Online Successfully – 7 Step Guide for Beginners</h4>
                </div>
            </div>
            <button>View all</button>
        </GrowStoreContainer>
     );
}
 
export default GrowStore;

const GrowStoreContainer = styled.section`

    padding: 64px 0;
    text-align: center;
    margin: 0 auto;
    background-color: #fafafa;

    h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 64px;
        letter-spacing: -.02em
    }

    .products {
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        padding: 0 210px;
        grid-gap: 10px;
        width: 100%;
        overflow: hidden;
        text-align: left;
    }

    .product {
        justify-self: center;
    }

    img {
        min-height: 180px;
        border-radius: 4px;
        max-width: 100%;
        width: 100%;
    }

    .product img:hover {
        filter: opacity(70%);
        cursor: pointer;
        transition: all 1s ease-in-out;
    }

    .product h4 {
        font-size: 16px;
        line-height: 26px;
        font-weight: 500;
    }

     .product h4:hover {
        color: grey;
        cursor: pointer;
        transition: all 1s ease-in-out;
    }

    h3 {
        color: grey;
        font-weight: 300;
        font-size: 15px;
        margin: 10px 0;
    }

    button {
        margin-top: 50px;
    }

    @media (max-width: 1200px) {

        .products {
            grid-template-columns: repeat(2, 1fr); 
            padding: 0 100px;
        }

        img {
            max-height: 180px;
            max-width: 446px;
            border-radius: 4px;
        }
    }

    @media (max-width: 768px) {
        .products {
            grid-template-columns: repeat(1, 1fr); 
            padding: 0 100px;
        }

        .product {
            margin-top: 10px;
        }
    }

    @media (max-width: 576px) {
        h2{
            font-size: 24px;
        }
    }

`