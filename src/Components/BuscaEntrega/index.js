import React from "react";
import {
  AreaBusca,
  TextoCabecalho,
  TextoSegundo,
  Corpo,
  Formulario,
  BuscaInput,
  AreaInput,
  BotaoEntrar,
} from "./style";

const BuscaEntrega = () => {
  const [busca, setBusca] = React.useState("");
  return (
    <>
      <AreaBusca>
        <Corpo>
          <TextoCabecalho>Tudo pra facilitar seu dia a dia</TextoCabecalho>
          <TextoSegundo>
            O que você precisa está aqui. Peça e receba onde estiver.
          </TextoSegundo>
          <Formulario>
            <AreaInput>
              <span style={{ color: "#ea1d2c", transition: "700ms" }}>
                <svg
                  class="landing-v2-address-search__pin-icon"
                  width="25.45"
                  height="25"
                  viewBox="0 0 18 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.835 17.274c-.555 0-1.058-.324-1.313-.855L4.305 9.635a5.985 5.985 0 0 1 .105-5.289c.81-1.56 2.22-2.557 3.855-2.731.367-.04.757-.04 1.125 0 1.635.174 3.037 1.172 3.855 2.731a5.96 5.96 0 0 1 .105 5.289.556.556 0 0 1-.758.269.62.62 0 0 1-.255-.8 4.726 4.726 0 0 0-.09-4.188c-.607-1.211-1.695-1.987-2.962-2.121a4.274 4.274 0 0 0-.9 0c-1.26.134-2.348.91-2.978 2.121a4.726 4.726 0 0 0-.082 4.188l3.217 6.785c.083.174.24.198.3.198s.218-.016.3-.198l1.613-3.412a.558.558 0 0 1 .757-.27.62.62 0 0 1 .255.8l-1.612 3.412c-.255.523-.758.855-1.32.855z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8.835 9.555c-1.275 0-2.317-1.1-2.317-2.446 0-1.354 1.042-2.446 2.317-2.446 1.275 0 2.318 1.1 2.318 2.446.007 1.354-1.035 2.446-2.318 2.446zm0-3.705c-.66 0-1.192.563-1.192 1.26 0 .696.532 1.258 1.192 1.258.66 0 1.193-.562 1.193-1.259.007-.696-.533-1.259-1.193-1.259z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <BuscaInput
                value={busca}
                placeholder="Endereço de entrega e número"
                onChange={(e) => setBusca(e.target.value)}
              />
            </AreaInput>
            <BotaoEntrar>Buscar</BotaoEntrar>
          </Formulario>
        </Corpo>
      </AreaBusca>
    </>
  );
};
export default BuscaEntrega;
