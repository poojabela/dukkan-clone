import styled from "styled-components";

const Plugins = () => {
    return ( 
        <PluginsContainer className="">
            <div className="content">
               <h2>Enhance your site's functionality with plugins</h2>
               <p>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There's a plugin for everything.</p>
            </div>
            <div className="plugins-container">
                <ul>
                    <li className="first">
                         <img src="facebook.svg" alt="" />
                    </li>
                    <li className="second">
                         <img src="merchent.svg" alt="" />
                    </li>
                    <li className="third">
                         <img src="mailchimp.svg" alt="" />
                    </li>
                    <li className="fourth">
                         <img src="google-analytics.svg" alt="" />
                    </li>
                    <li className="fifth">
                         <img src="clarity.svg" alt="" />
                    </li>
                    <li className="sixth">
                         <img src="privy.svg" alt="" />
                    </li>
                    <li className="seventh">
                         <img src="facebook.svg" alt="" />
                    </li>
                    <li className="eighth">
                         <img src="merchent.svg" alt="" />
                    </li>
                    <li className="ninth">
                         <img src="mailchimp.svg" alt="" />
                    </li>
                    <li className="tenth">
                         <img src="google-analytics.svg" alt="" />
                    </li>
                    <li className="eleventh">
                         <img src="clarity.svg" alt="" />
                    </li>
                    <li className="twelveth">
                         <img src="privy.svg" alt="" />
                    </li>
                    <li className="thirteen">
                         <img src="merchent.svg" alt="" />
                    </li>
                    <li className="fourteen">
                         <img src="mailchimp.svg" alt="" />
                    </li>
                </ul>
            </div>
            <button>Take a look</button>
        </PluginsContainer>
     );
}
 
export default Plugins;

const PluginsContainer = styled.section`

    background-color: rgba(250,183,59,.1);
    padding: 64px 0;
    width: 100%;
    overflow: hidden;
    text-align: center;

    h2 {
     font-size: 36px;
     line-height: 42px;
     font-weight: 700;
     letter-spacing: -.02em;
     color: #1a181e;
    }

    .content {
     padding: 0 10px;
     width: 100%;
     margin: 0 auto;
    }

    p {
     font-size: 18px;
     line-height: 28px;
     max-width: 736px;
     margin: 16px auto 0;
     text-align: center;
    }

    .plugins-container {
     width: 100%;
     overflow: hidden;
    }

    .plugins-container ul{
     margin: 0;
     padding: 48px 0 0;
     position: relative;
     display: flex;
     width: 100%;
     justify-content: space-between;
     overflow: hidden;
    }

    img {
     max-height: 80px;
     max-width: 80px;
     border-radius: 4px;
    }

    li {   
     position: relative;
     list-style: none;
     padding: 0 15px;
    }

    .first {
     margin-top: 58px;
     padding: 0 15px 0 0;
    }
    
    .second, .thirteen {
        margin-top: 46px;
    }

    .third, .twelveth {
     margin-top: 24px;
    }

    .fourth, .eleventh {
     margin-top: 0px;
    }

    .fifth, .tenth {
     margin-top: 15px;
    }

    .sixth, .ninth {
     margin-top: 42px;
    }

    .seventh, .eighth {
     margin-top: 76px;
    }

    button {
     margin-top: 30px;
    }

    @media (max-width: 1024px) {
     .first, .fourteen, .second, .thirteen, .third, .twelveth {
          display: none;
     }

    }

    @media (max-width: 576px) {

     h2 {
          font-size: 24px;
          margin: 0 0 8px;
      }

      p {
          font-size: 14px;
      }


     li {   
          position: relative;
          list-style: none;
          padding: 0 15px;
         }
     
     img {
          max-width: 40px;
          max-height: 42px;
     }

    }

`