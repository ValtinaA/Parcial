const cancion = () => {
  let Artista = document.getElementById('n_Artista').value;
  let nombre = document.getElementById('n_cancion').value;
  buscarCanApi(Artista, nombre);
};

const buscarCanApi = (p1, p2) => {
  const burl = 'https://api.lyrics.ovh/v1';
  const endpoint = `/${p1}/${p2}`;
  const url = `${burl}${endpoint}`;

  fetch(url)
    .then((resultado) => resultado.json())
    .then((data) => printdata(data.lyrics))
    .catch((err) => console.log(err));
};

const printdata = (lyrics) => {
  let resultado = document.getElementById('mostrarletra');
  resultado.innerHTML = `
    <label><h4>"${lyrics}"</h4></label>
    `;
};
