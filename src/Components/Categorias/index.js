import React from "react";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import {
  AreaCategoria,
  RestauranteMercado,
  Restaurante,
  Mercado,
  Pelicula,
  ItemOpcoes,
  AreaOpcoes,
} from "./style";

const Categoria = () => {
  return (
    <>
      <AreaCategoria>
        <RestauranteMercado>
          <Restaurante>
            <Pelicula>
              <img
                class="landing-v2-multi-categories-big-link__image landing-v2-multi-categories-big-link__image--restaurant"
                src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"
                alt="Ver opções"
              />
              <p>
                Restaurante
                <ArrowForwardIosSharpIcon
                  style={{ width: 12, height: 12 }}
                />{" "}
              </p>
              <div>
                Ver opções
                <ArrowForwardIosSharpIcon style={{ width: 12, height: 12 }} />
              </div>
            </Pelicula>
          </Restaurante>
          <Mercado>
            <Pelicula>
              <img
                class="landing-v2-multi-categories-big-link__image landing-v2-multi-categories-big-link__image--market"
                src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png"
                alt="Buscar lojas"
              />
              <p>
                Mercado
                <ArrowForwardIosSharpIcon
                  style={{ width: 12, height: 12 }}
                />{" "}
              </p>
              <div>
                Buscar lojas
                <ArrowForwardIosSharpIcon style={{ width: 12, height: 12 }} />
              </div>
            </Pelicula>
          </Mercado>
        </RestauranteMercado>
        <AreaOpcoes>
          <ItemOpcoes style={{ background: "#F6D553" }}>
            <img
              class="landing-v2-multi-categories-small-link__image landing-v2-multi-categories-small-link__image--drinks"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/drinks.png"
              alt="Bebidas"
            />
            <p>
              Bebidas
              <ArrowForwardIosSharpIcon
                style={{
                  width: 12,
                  height: 12,
                  color: "#ea1d2c",
                  fontSize:"large"
                }}
              />{" "}
            </p>
          </ItemOpcoes>
          <ItemOpcoes style={{ background: "#F9879C" }}>
            <img
              class="landing-v2-multi-categories-small-link__image landing-v2-multi-categories-small-link__image--pharmacy"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/pharmacy.png"
              alt="Farmácia"
            />
            <p>
              Farmácia
              <ArrowForwardIosSharpIcon
                style={{ width: 12, height: 12, color: "#ea1d2c" }}
              />{" "}
            </p>
          </ItemOpcoes>
          <ItemOpcoes style={{ background: "#ea1d2c" }}>
            <img
              class="landing-v2-multi-categories-small-link__image landing-v2-multi-categories-small-link__image--express"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/express.png"
              alt="Express"
            />
            <p>
              Express
              <ArrowForwardIosSharpIcon
                style={{ width: 12, height: 12, color: "#ea1d2c" }}
              />{" "}
            </p>
          </ItemOpcoes>
          <ItemOpcoes style={{ background: "#8C60C5" }}>
            <img
              class="landing-v2-multi-categories-small-link__image landing-v2-multi-categories-small-link__image--petshop"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/petshop.png"
              alt="Pet shop"
            />
            <p>
              Pet shop{" "}
              <ArrowForwardIosSharpIcon
                style={{ width: 12, height: 12, color: "#ea1d2c" }}
              />
            </p>
          </ItemOpcoes>
        </AreaOpcoes>
      </AreaCategoria>
    </>
  );
};
export default Categoria;
