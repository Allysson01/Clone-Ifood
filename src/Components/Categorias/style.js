import styled from "styled-components";

export const AreaCategoria = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom:130px;
`;

export const RestauranteMercado = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 842px;
  gap: 20px;
`;

export const Restaurante = styled.div`
  width: 411px;
  height: 220px;
  background: #ea1d2c;
  border-radius: 20px;
  position: relative;
`;

export const Mercado = styled(Restaurante)`
  background: #b6d048;
`;

export const Pelicula = styled.div`
  height: 220px;
  background: transparent;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  cursor: pointer;
  padding: 0 20px;

  & p {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
  }

  & div {
    padding: 8px 10px;
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
    border-radius: 10px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
  }

  & img {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
`;

export const AreaOpcoes = styled(RestauranteMercado)``;

export const ItemOpcoes = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  margin: 100px 0 20px 0;
  transform: scale(0.9);
  transition: all 0.5s ease;
  cursor: pointer;

  & img {
    max-width: 140px;
    max-height: 140px;
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
  }

  & p {
    position: absolute;
    bottom: -40px;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }

  &:hover {
    transform: scale(1);
  }
`;
