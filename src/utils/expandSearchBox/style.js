import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import { white,shadow } from "../styles/colors";
export const SearchBoxStyle = styled.div`
input{
  all:unset;
}
.input-parent{
  display:flex;
  align-items:center;
  border: 1px solid #d1d1d1;
  height:32px;
  padding:0 12px;
  border-radius: 4px;
}
.search-result{
  background: ${white};
    max-height: 250px;
    overflow: auto;
    position: absolute;
    z-index: 3;
    box-shadow:${shadow};
    top:60px;
    padding: 0 16px;
    min-width:200px;
}
a{
  text-decoration:none;
}
`