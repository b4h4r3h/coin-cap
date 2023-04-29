import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import { white } from "../styles/colors";
export const MarketSnapShotStyle = styled.div`
.marketsnap-inner-element{
    display:flex;
    justify-content: space-around;
    text-align:center;
}
.container{
    max-width:1200px;
    margin: 0 auto;
}
.bg{
    background:
    linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
    padding-bottom:150px;
    width:100%;
    position:absolute;
}
.bg{
    .marketsnap-inner-element{
        p{
            color:${white};
            font-size:18px;
            margin-bottom:8px;
        }
        span{
            color:${white};
            font-size:18px;
        }
    }
}
`