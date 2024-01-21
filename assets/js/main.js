
import { elementos } from "./elementos.js";

const generarHTML = ({ name, partes, img }) => `
    <div class="col col-sm-12 col-md-6 col-lg-4">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="1280px" height="auto"
                xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice"
                focusable="false" src="assets/imgs/${img}">
            <div class="card-body">
                <p class="card-text">
                    <h3>${name}</h3>
                    <p>${partes}</p>
                </p>
            </div>
        </div>
    </div>
`;

// Genera el HTML para cada elemento
const html = elementos.map(generarHTML).join('');

// Inserta el HTML en el contenedor
document.querySelector('#contenedor').innerHTML = html;