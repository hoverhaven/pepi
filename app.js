const motos = [
  // 🏁 SPORT
  {
    nombre:"Yamaha R1",
    tipo:"sport",
    img:"img/r1.jpg",
    desc:"Superbike de 1000cc diseñada para alto rendimiento y pista."
  },
  {
    nombre:"Kawasaki Ninja ZX-10R",
    tipo:"sport",
    img:"img/zx10r.webp",
    desc:"Potente moto deportiva con tecnología de competición."
  },
  {
    nombre:"Suzuki GSX-R750",
    tipo:"sport",
    img:"img/gsxr750.jpg",
    desc:"Equilibrio perfecto entre potencia y control."
  },
  {
    nombre:"Honda CBR1000RR",
    tipo:"sport",
    img:"img/cbr1000.jpg",
    desc:"Deportiva avanzada con gran estabilidad y potencia."
  },

  // 🛵 NAKED
  {
    nombre:"Yamaha MT-07",
    tipo:"naked",
    img:"img/mt07.jpg",
    desc:"Ligera, ágil y perfecta para ciudad."
  },
  {
    nombre:"Yamaha MT-09",
    tipo:"naked",
    img:"img/mt09.jpg",
    desc:"Naked potente con gran respuesta y agresividad."
  },
  {
    nombre:"Kawasaki Z900",
    tipo:"naked",
    img:"img/z900.jpg",
    desc:"Diseño agresivo y excelente rendimiento."
  },
  {
    nombre:"Honda CB650R",
    tipo:"naked",
    img:"img/cb650r.jpeg",
    desc:"Estilo neo-retro con gran equilibrio."
  },

  // 🌍 TOURING / ADVENTURE
  {
    nombre:"BMW R1250GS",
    tipo:"touring",
    img:"img/gs.jpg",
    desc:"Ideal para viajes largos y aventura."
  },
  {
    nombre:"Honda Africa Twin",
    tipo:"touring",
    img:"img/africa.jpg",
    desc:"Gran rendimiento en carretera y off-road."
  },
  {
    nombre:"KTM 1290 Super Adventure",
    tipo:"touring",
    img:"img/ktm1290.jpg",
    desc:"Máxima potencia y confort para viajes largos."
  },
  {
    nombre:"Ducati Multistrada V4",
    tipo:"touring",
    img:"img/multistrada.jpg",
    desc:"Tecnología avanzada para touring premium."
  },

  // 🏔️ ENDURO / OFF-ROAD
  {
    nombre:"KTM 300 EXC",
    tipo:"enduro",
    img:"img/ktm300.jpg",
    desc:"Ligera y potente para terrenos extremos."
  },
  {
    nombre:"Yamaha WR450F",
    tipo:"enduro",
    img:"img/wr450.jpg",
    desc:"Enduro profesional de alto rendimiento."
  },
  {
    nombre:"Honda CRF450L",
    tipo:"enduro",
    img:"img/crf450.webp",
    desc:"Versátil para off-road y uso mixto."
  },

  // 🛣️ CRUISER
  {
    nombre:"Harley-Davidson Iron 883",
    tipo:"cruiser",
    img:"img/iron883.jpg",
    desc:"Estilo clásico americano con mucha personalidad."
  },
  {
    nombre:"Harley-Davidson Fat Boy",
    tipo:"cruiser",
    img:"img/fatboy.jpg",
    desc:"Cruiser icónica con gran presencia."
  },
  {
    nombre:"Indian Scout",
    tipo:"cruiser",
    img:"img/scout.jpg",
    desc:"Diseño elegante y potente."
  },

  // ⚡ EXTRA MODERNAS
  {
    nombre:"Ducati Panigale V4",
    tipo:"sport",
    img:"img/panigale.jpeg",
    desc:"Una de las deportivas más avanzadas del mundo."
  },
  {
    nombre:"Aprilia RSV4",
    tipo:"sport",
    img:"img/rsv4.jpeg",
    desc:"Tecnología de MotoGP en una moto de calle."
  }
];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtro = document.getElementById("filtro");

/* RENDER */
function render(lista){
  catalogo.innerHTML = "";

  lista.forEach(moto=>{
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${moto.img}">
      <h3>${moto.nombre}</h3>
    `;

    card.onclick = ()=>abrirModal(moto);

    catalogo.appendChild(card);
  });
}

render(motos);

/* FILTRO */
function filtrar(){
  const texto = buscador.value.toLowerCase();
  const tipo = filtro.value;

  const res = motos.filter(m =>
    m.nombre.toLowerCase().includes(texto) &&
    (tipo==="todos" || m.tipo===tipo)
  );

  render(res);
}

buscador.addEventListener("input", filtrar);
filtro.addEventListener("change", filtrar);

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const cerrar = document.getElementById("cerrar");

function abrirModal(moto){
  modal.classList.add("activo");
  modalImg.src = moto.img;
  modalTitulo.textContent = moto.nombre;
  modalDesc.textContent = moto.desc;
}

function cerrarModal(){
  modal.classList.remove("activo");
}

cerrar.onclick = cerrarModal;

modal.onclick = (e)=>{
  if(e.target === modal) cerrarModal();
};