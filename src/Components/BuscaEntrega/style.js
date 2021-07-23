import styled from "styled-components";

export const AreaBusca = styled.section`
  padding-top: calc(136px + 4vh);
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Corpo = styled.div`
  width: 90%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 842px;
`;

export const TextoCabecalho = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 14px 0;
`;

export const TextoSegundo = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #717171;
  margin-bottom: 30px;
`;

export const Formulario = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const AreaInput = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex: 1;

  & span {
    padding: 5px;
    width: 50px;
  }
`;

export const BuscaInput = styled.input`
  border: none;
  background: transparent;
  padding: 13px;
  font-size: 1rem;
  color: #c1c1c1;
  outline: none;  
  flex: 1;

  &::-webkit-input-placeholder {
    color: #c1c1c1;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #c1c1c1;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #c1c1c1;
  }

  &:-ms-input-placeholder {
    color: #c1c1c1;
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
  box-shadow: 2.77778px 2.77778px 10.4167px rgb(0 0 0 / 10%);
`;
