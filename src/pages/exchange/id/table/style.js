import styled from "styled-components";
import { shadow, green, red, white} from "../../../../utils/styles/colors";
export const TableStyleId = styled.div`
.container{
    max-width:1200px;
    margin: 0 auto;
}
.ant-table-wrapper table{
    box-shadow:${shadow};
    margin-bottom: 32px;
    border-radius: 8px;
}
.green-change{
    color:${green};
}
.red-change{
    color:${red};
}
Button{
    all:unset;
    padding: 12px 40px;
    background: ${green};
    border-radius:24px;
    cursor:pointer;
    span{
        color:${white}
    }
    :hover{
        background-color: ${green} !important;
        opacity:0.8;
    }
}
.view-more-btn{
    display:block;
    margin: 0 auto;
}
`