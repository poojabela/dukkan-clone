import styled from "styled-components";
import { useState, useEffect } from 'react';

const Themes = () => {

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
        <ThemesContainer>
            <div className={`animated-element ${isVisible ? 'visible' : ''}`}>
                <div className="design"></div>
                <h2>Kickstart your online store with these themes</h2>
                <div className="themes">
                    <div className="theme-box">
                        <div className="image">
                            <img src="lightspeed.webp" alt="" />
                        </div>
                        <h3>Lightspeed</h3>
                    </div>
                    <div className="theme-box">
                        <div className="image">
                            <img src="matrix.webp" alt="" />
                        </div>
                        <h3>Matrix</h3>
                    </div>
                    <div className="theme-box">
                        <div className="image">
                            <img src="leo.webp" alt="" />
                        </div>
                        <h3>Leo</h3>
                    </div>
                    <div className="theme-box">
                        <div className="image">
                            <img src="oxford.webp" alt="" />
                        </div>
                        <h3>Oxford Pro</h3>
                    </div>
                    <div className="theme-box">
                        <div className="image">
                            <img src="nirvana.webp" alt="" />
                        </div>
                        <h3>Nirvana</h3>
                    </div>  
                    <div className="theme-box">
                        <div className="image">
                            <img src="mana.webp" alt="" />
                        </div>
                        <h3>Mana</h3>
                    </div>
                </div>
                <button>View all</button>
            </div>
        </ThemesContainer>
     );
}
 
export default Themes;

const ThemesContainer = styled.section` 

    position: relative;
    text-align: center;
    padding: 120px 0px;
    width: 100%;
    overflow: hidden;

    .design {
        width: 184px;
        height: 364px;
        position: absolute;
        background-size: 100%;
        top: 0;
    }

    h2 {
        font-size: 36px;
        line-height: 42px;
        font-weight: 700;
        letter-spacing: -.02em;
        padding: 0 8px;
    }

    .themes {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        margin: 0 auto;
        padding: 0 200px;
    }

    .theme-box {
        justify-self: center;
        margin-top: 64px;
    }

    .theme-box h3 {
        text-align: left;
        margin-top: 20px;
    }

    .image {
        max-width: 332px;
        max-height: 435.46px;
    }

   .image img {
    filter: drop-shadow(0 2px 8px rgba(26,24,30,.06));
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    max-width: 100%;
    vertical-align: bottom;
    max-height: 100%;
    width: 100%;
    height: 100%;
    }
    
    button {
        margin-top: 30px;
    }

    @media (max-width: 1024px) {

        .themes {
            grid-template-columns: repeat(2, 1fr); 
            padding: 0 100px; 
            grid-gap: 10px;
        }

    }

    @media (max-width: 576px) {

        h2 {
            font-size: 24px;
        }

        .themes {
            grid-template-columns: repeat(1, 1fr); 
            padding: 0 100px; 
            grid-gap: 10px;
        
    }

`