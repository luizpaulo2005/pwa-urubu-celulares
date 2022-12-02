import { useEffect, useState } from "react";

const Map = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const sucesso = (posicao) => {
      setLatitude(posicao.coords.latitude);
      setLongitude(posicao.coords.longitude);
    };

    const erro = (error) => {
      let errorMessage;
      switch (error.code) {
        case 0:
          errorMessage = "Erro desconhecido";
          break;
        case 1:
          errorMessage = "Permissão Negada";
          break;
        case 2:
          errorMessage = "Captura de posição indisponível";
          break;
        case 3:
          errorMessage = "Tempo de solicitação excedido";
          break;
      }
      console.log("Ocorreu um erro:" + errorMessage);
    };
    navigator.geolocation.getCurrentPosition(sucesso, erro);
  });

  return (
    <div class="conteudo align-self-center">
      <header class="cabecalhoConteudo">
        <h2 class="text-center">Minha Localização</h2>
      </header>
      <div class="conteudoLocalizacao text-center">
        <p>
          Latitude: <span id="latitude">{latitude}</span>
        </p>
        <p>
          Longitude: <span id="longitude">{longitude}</span>
        </p>
      </div>
      <div id="map">
        <div class="mapouter border rounded mt-2">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src={
                "https://maps.google.com/maps?q=" +
                latitude +
                "," +
                longitude +
                "&z=13&ie=UTF8&iwloc=&output=embed"
              }
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            <style></style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
