import styled from "styled-components";

const Fashion = () => {
    return ( 
        <FashionContainer>
            <div className="fashion">
                <ul className="list-1">
                    <li>
                        <img src="uppercase.svg" alt="" />
                    </li>
                    <li>
                        <img src="vu.svg" alt="" />
                    </li>
                    <li>
                        <img src="gini-jony.svg" alt="" />
                    </li>
                    <li>
                        <img src="nonsense.svg" alt="" />
                    </li>
                    <li>
                        <img src="big-bazaar.svg" alt="" />
                    </li>
                    <li>
                        <img src="off-duty.svg" alt="" />
                    </li>
                </ul>
                <ul className="list-2">
                    <li>
                        <img src="uppercase.svg" alt="" />
                    </li>
                    <li>
                        <img src="vu.svg" alt="" />
                    </li>
                    <li>
                        <img src="gini-jony.svg" alt="" />
                    </li>
                    <li>
                        <img src="nonsense.svg" alt="" />
                    </li>
                    <li>
                        <img src="big-bazaar.svg" alt="" />
                    </li>
                    <li>
                        <img src="off-duty.svg" alt="" />
                    </li>
                </ul>
            </div>
        </FashionContainer>
     );
}
 
export default Fashion;
const FashionContainer = styled.section`

    .fashion {
        display: flex;
        width: 100%;
        overflow: hidden;
        background-color: #1a181e;
        padding: 48px 0;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 0 0 auto;
        animation: slide 90s linear infinite;
    }

    @keyframes slide {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    ul li {
        list-style: none;
        padding: 0 40px;
    }

    @media (max-width: 576px) {
        .fashion {
            padding: 20px 0;
        }

        img {
            min-height: 40px;
        }
    }
`

