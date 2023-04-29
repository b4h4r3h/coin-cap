import styled from "styled-components";
import { white } from "../../utils/styles/colors";
export const FooterStyle = styled.div`
.main-footer{   
    display:flex;
    gap:160px;
}
.inner-element{
    display:flex;
    flex-direction:column;
    gap:8px;
}
.container{
    max-width:1200px;
    margin: 0 auto;
}
.margin-top-padding{
    margin-top:64px;
    padding:32px 0 32px 0;
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
}
.inner-element{
    a{
        color: ${white};
        text-decoration: none;
        opacity:0.5;
        white-space:nowrap;
        :hover{
            color: ${white};
            opacity:1;
        }
    }
}
P{
    color: ${white};
}
.nowrap-bold{
    white-space:nowrap;
    font-weight: 600;
}
`