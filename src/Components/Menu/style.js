import styled from "styled-components";

export const AreaMenu = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 136px;
  z-index: 10;
  background: ${(props) => (props.focarMenu ? "#f7f7f7" : "transparent")};
  border-bottom: ${(props) => (props.focarMenu ? "solid 1px #f2f2f2" : "none")};
  box-shadow: ${(props) => (props.focarMenu ? "0 0 1em #c1c1c1" : "none")};
`;

export const Cabecalho = styled.header`
  display: grid;
  grid-template-columns: 88px 1fr 114px 104px;
  margin: 0 35.5px;
  padding: 40px 32px;
  column-gap: 20px;
`;

export const Marca = styled.div`
  display: block;
  padding: 3px;
`;

export const SpanMarca = styled.span`
  fill: #ea1d2c;
  transition: 700ms;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export const BotaoCriar = styled.button`
  border: none;
  background: transparent;
  color: #ea1d2c;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #c2121f;
  }
`;

export const BotaoEntrar = styled.button`
  height: 44px;
  width: 104px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #ea1d2c;
  margin: 3px 0;
  cursor: pointer;

  &:hover {
    background: #c2121f;
  }
`;
