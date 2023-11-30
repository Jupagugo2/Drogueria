 
 var baseDeDatos = [
    { nombre: 'Analgésico', marca: 'MarcaEjemplo', categoria: 'Medicamentos', precio: 10.99, cantidad: 50, peso: '50g', fabricante: 'FabricanteEjemplo', elaborado: '2023-01-15', lote: 'ABC123', descripcion: 'Alivio rápido del dolor' },
    { nombre: 'Antibiótico', marca: 'MarcaAntibiótico', categoria: 'Medicamentos', precio: 15.99, cantidad: 30, peso: '60g', fabricante: 'FabricanteAntibiótico', elaborado: '2023-02-20', lote: 'XYZ456', descripcion: 'Tratamiento de infecciones' },
    { nombre: 'Vitaminas', marca: 'MarcaVitaminas', categoria: 'Suplementos', precio: 8.99, cantidad: 60, peso: '80g', fabricante: 'FabricanteVitaminas', elaborado: '2023-03-10', lote: 'DEF789', descripcion: 'Promueve la salud general' },
    { nombre: 'Jarabe', marca: 'MarcaJarabe', categoria: 'Medicamentos', precio: 12.50, cantidad: 20, peso: '120ml', fabricante: 'FabricanteJarabe', elaborado: '2023-04-05', lote: 'GHI123', descripcion: 'Alivio de la tos' },
    { nombre: 'Desinfectante', marca: 'MarcaDesinfectante', categoria: 'Higiene', precio: 7.99, cantidad: 40, peso: '250ml', fabricante: 'FabricanteDesinfectante', elaborado: '2023-05-15', lote: 'JKL456', descripcion: 'Elimina gérmenes y bacterias' },
    { nombre: 'Cepillo', marca: 'MarcaCepillo', categoria: 'Higiene Oral', precio: 2.99, cantidad: 100, peso: '20g', fabricante: 'FabricanteCepillo', elaborado: '2023-06-01', lote: 'MNO789', descripcion: 'Limpieza efectiva' },
    { nombre: 'Pasta', marca: 'MarcaPasta', categoria: 'Higiene Oral', precio: 4.50, cantidad: 80, peso: '100g', fabricante: 'FabricantePasta', elaborado: '2023-07-10', lote: 'PQR123', descripcion: 'Frescura duradera' },
    { nombre: 'Enjuague', marca: 'MarcaEnjuague', categoria: 'Higiene Oral', precio: 6.75, cantidad: 50, peso: '150ml', fabricante: 'FabricanteEnjuague', elaborado: '2023-08-20', lote: 'STU456', descripcion: 'Protección contra la placa' },
    { nombre: 'Vendas', marca: 'MarcaVendas', categoria: 'Botiquín', precio: 3.25, cantidad: 60, peso: '30g', fabricante: 'FabricanteVendas', elaborado: '2023-09-05', lote: 'VWX789', descripcion: 'Para vendajes seguros' },
    { nombre: 'Gasas', marca: 'MarcaGasas', categoria: 'Botiquín', precio: 2.75, cantidad: 70, peso: '40g', fabricante: 'FabricanteGasas', elaborado: '2023-10-10', lote: 'YZA123', descripcion: 'Cubiertas para heridas' },
    { nombre: 'Antiácido', marca: 'MarcaAntiácido', categoria: 'Medicamentos', precio: 7.99, cantidad: 25, peso: '40g', fabricante: 'FabricanteAntiácido', elaborado: '2023-11-15', lote: 'ABC456', descripcion: 'Alivio de la acidez estomacal' },
    { nombre: 'Pañuelos', marca: 'MarcaPañuelos', categoria: 'Papel', precio: 2.50, cantidad: 50, peso: '100g', fabricante: 'FabricantePañuelos', elaborado: '2023-12-01', lote: 'DEF789', descripcion: 'Suaves y absorbentes' },
    { nombre: 'Tiritas', marca: 'MarcaTiritas', categoria: 'Botiquín', precio: 4.75, cantidad: 40, peso: '20g', fabricante: 'FabricanteTiritas', elaborado: '2024-01-10', lote: 'GHI123', descripcion: 'Para pequeñas heridas' },
    { nombre: 'Sales', marca: 'MarcaSales', categoria: 'Baño', precio: 9.99, cantidad: 30, peso: '500g', fabricante: 'FabricanteSales', elaborado: '2024-02-15', lote: 'JKL456', descripcion: 'Relajación y bienestar' },
    { nombre: 'Esparadrapo', marca: 'MarcaEsparadrapo', categoria: 'Botiquín', precio: 3.25, cantidad: 60, peso: '30g', fabricante: 'FabricanteEsparadrapo', elaborado: '2024-03-01', lote: 'MNO789', descripcion: 'Para sujetar vendajes' },
    { nombre: 'Preservativos', marca: 'MarcaPreservativos', categoria: 'Intimidad', precio: 12.50, cantidad: 20, peso: '10g', fabricante: 'FabricantePreservativos', elaborado: '2024-04-10', lote: 'PQR123', descripcion: 'Protección segura' },
    { nombre: 'Algodón', marca: 'MarcaAlgodón', categoria: 'Higiene', precio: 5.75, cantidad: 70, peso: '50g', fabricante: 'FabricanteAlgodón', elaborado: '2024-05-15', lote: 'STU456', descripcion: 'Suave y absorbente' },
    { nombre: 'Sedante', marca: 'MarcaSedante', categoria: 'Medicamentos', precio: 8.99, cantidad: 35, peso: '80g', fabricante: 'FabricanteSedante', elaborado: '2024-06-01', lote: 'VWX789', descripcion: 'Relajante para dormir' },
    { nombre: 'Antihistamínico', marca: 'MarcaAntihistamínico', categoria: 'Medicamentos', precio: 6.50, cantidad: 45, peso: '60g', fabricante: 'FabricanteAntihistamínico', elaborado: '2024-07-10', lote: 'YZA123', descripcion: 'Alivio de alergias' },
    { nombre: 'Loción', marca: 'MarcaLoción', categoria: 'Cuidado Personal', precio: 14.99, cantidad: 15, peso: '120ml', fabricante: 'FabricanteLoción', elaborado: '2024-08-20', lote: 'BCD456', descripcion: 'Piel suave y nutrida' },
    { nombre: 'Cepillo', marca: 'MarcaCepillo', categoria: 'Higiene', precio: 2.75, cantidad: 90, peso: '25g', fabricante: 'FabricanteCepillo', elaborado: '2024-09-05', lote: 'EFG789', descripcion: 'Limpieza efectiva' },
    { nombre: 'Shampoo', marca: 'MarcaShampoo', categoria: 'Cuidado Capilar', precio: 9.50, cantidad: 25, peso: '300ml', fabricante: 'FabricanteShampoo', elaborado: '2024-10-10', lote: 'HIJ123', descripcion: 'Fortalece el cabello' },
    { nombre: 'Acondicionador', marca: 'MarcaAcondicionador', categoria: 'Cuidado Capilar', precio: 7.25, cantidad: 30, peso: '250ml', fabricante: 'FabricanteAcondicionador', elaborado: '2024-11-15', lote: 'KLM456', descripcion: 'Desenreda y suaviza' },
    { nombre: 'Jabón', marca: 'MarcaJabón', categoria: 'Cuidado Personal', precio: 3.99, cantidad: 40, peso: '150g', fabricante: 'FabricanteJabón', elaborado: '2024-12-01', lote: 'ABC456', descripcion: 'Limpieza suave y refrescante' },
    { nombre: 'Crema', marca: 'MarcaCrema', categoria: 'Cuidado Personal', precio: 5.50, cantidad: 30, peso: '100ml', fabricante: 'FabricanteCrema', elaborado: '2025-01-10', lote: 'DEF789', descripcion: 'Piel suave y nutrida' },
    { nombre: 'Toallas', marca: 'MarcaToallas', categoria: 'Higiene Femenina', precio: 6.75, cantidad: 25, peso: '20 unidades', fabricante: 'FabricanteToallas', elaborado: '2025-02-15', lote: 'GHI123', descripcion: 'Protección y comodidad' },
    { nombre: 'Anticonceptivos', marca: 'MarcaAnticonceptivos', categoria: 'Intimidad', precio: 15.99, cantidad: 20, peso: '12 unidades', fabricante: 'FabricanteAnticonceptivos', elaborado: '2025-03-01', lote: 'JKL456', descripcion: 'Prevención segura' },
    { nombre: 'Protectores', marca: 'MarcaProtectores', categoria: 'Higiene Femenina', precio: 4.25, cantidad: 35, peso: '30 unidades', fabricante: 'FabricanteProtectores', elaborado: '2025-04-10', lote: 'MNO789', descripcion: 'Frescura y comodidad' },
    { nombre: 'Desodorante', marca: 'MarcaDesodorante', categoria: 'Cuidado Personal', precio: 2.99, cantidad: 50, peso: '50ml', fabricante: 'FabricanteDesodorante', elaborado: '2025-05-15', lote: 'PQR123', descripcion: 'Protección duradera' },
    { nombre: 'Cotonetes', marca: 'MarcaCotonetes', categoria: 'Higiene', precio: 1.75, cantidad: 80, peso: '100 unidades', fabricante: 'FabricanteCotonetes', elaborado: '2025-06-01', lote: 'STU456', descripcion: 'Limpieza precisa' },
    { nombre: 'Desinfectante', marca: 'MarcaDesinfectante', categoria: 'Higiene', precio: 7.25, cantidad: 40, peso: '250ml', fabricante: 'FabricanteDesinfectante', elaborado: '2025-07-10', lote: 'VWX789', descripcion: 'Elimina gérmenes y bacterias' },
    { nombre: 'Pañales', marca: 'MarcaPañales', categoria: 'Bebé', precio: 12.50, cantidad: 15, peso: 'Paquete', fabricante: 'FabricantePañales', elaborado: '2025-08-20', lote: 'YZA123', descripcion: 'Suavidad y absorción' },
    { nombre: 'Toallitas', marca: 'MarcaToallitas', categoria: 'Bebé', precio: 4.99, cantidad: 30, peso: '80 unidades', fabricante: 'FabricanteToallitas', elaborado: '2025-09-05', lote: 'BCD456', descripcion: 'Limpieza suave' },
    { nombre: 'Gel', marca: 'MarcaGel', categoria: 'Higiene Personal', precio: 6.50, cantidad: 25, peso: '200ml', fabricante: 'FabricanteGel', elaborado: '2025-10-10', lote: 'EFG789', descripcion: 'Limpieza profunda' },
    { nombre: 'Sales', marca: 'MarcaSales', categoria: 'Baño', precio: 8.99, cantidad: 20, peso: '500g', fabricante: 'FabricanteSales', elaborado: '2025-11-15', lote: 'HIJ123', descripcion: 'Relajación y bienestar' },
    { nombre: 'Mascarillas', marca: 'MarcaMascarillas', categoria: 'Protección', precio: 10.75, cantidad: 10, peso: 'Pack', fabricante: 'FabricanteMascarillas', elaborado: '2025-12-01', lote: 'KLM456', descripcion: 'Protección contra partículas' },
    { nombre: 'Lentes', marca: 'MarcaLentes', categoria: 'Accesorios', precio: 15.50, cantidad: 15, peso: 'Unidad', fabricante: 'FabricanteLentes', elaborado: '2026-01-10', lote: 'NOP789', descripcion: 'Estilo y protección UV' },
    { nombre: 'Gotas', marca: 'MarcaGotas', categoria: 'Cuidado Ocular', precio: 4.25, cantidad: 25, peso: '15ml', fabricante: 'FabricanteGotas', elaborado: '2026-02-15', lote: 'QRS123', descripcion: 'Alivio de ojos secos' },
    { nombre: 'Jarabe', marca: 'MarcaJarabe', categoria: 'Medicamentos', precio: 12.99, cantidad: 20, peso: '120ml', fabricante: 'FabricanteJarabe', elaborado: '2026-03-01', lote: 'TUV456', descripcion: 'Alivio de la tos' },
    { nombre: 'Pastillas', marca: 'MarcaPastillas', categoria: 'Medicamentos', precio: 6.75, cantidad: 30, peso: '30 unidades', fabricante: 'FabricantePastillas', elaborado: '2026-04-10', lote: 'WXY789', descripcion: 'Alivio rápido' },
    { nombre: 'Suplementos', marca: 'MarcaSuplementos', categoria: 'Salud', precio: 9.50, cantidad: 25, peso: '60 unidades', fabricante: 'FabricanteSuplementos', elaborado: '2026-05-15', lote: 'ZAB123', descripcion: 'Apoyo nutricional' },
    { nombre: 'Antidiarreico', marca: 'MarcaAntidiarreico', categoria: 'Medicamentos', precio: 5.99, cantidad: 40, peso: '20 unidades', fabricante: 'FabricanteAntidiarreico', elaborado: '2026-06-01', lote: 'BCD456', descripcion: 'Alivio eficaz' },
    { nombre: 'CepilloDientes', marca: 'MarcaCepilloDientes', categoria: 'HigieneOral', precio: 3.99, cantidad: 70, peso: '25g', fabricante: 'FabricanteCepilloDientes', elaborado: '2026-07-10', lote: 'CDE789', descripcion: 'Limpieza avanzada' },
    { nombre: 'EnjuagueBucal', marca: 'MarcaEnjuagueBucal', categoria: 'HigieneOral', precio: 5.50, cantidad: 40, peso: '200ml', fabricante: 'FabricanteEnjuagueBucal', elaborado: '2026-08-20', lote: 'EFG123', descripcion: 'Protección bucal' },
    { nombre: 'CepilloPelo', marca: 'MarcaCepilloPelo', categoria: 'CuidadoCapilar', precio: 6.75, cantidad: 30, peso: '150g', fabricante: 'FabricanteCepilloPelo', elaborado: '2026-09-05', lote: 'HIJ456', descripcion: 'Cuida tu cabello' },
    { nombre: 'LociónCorporal', marca: 'MarcaLociónCorporal', categoria: 'CuidadoPersonal', precio: 8.99, cantidad: 25, peso: '250ml', fabricante: 'FabricanteLociónCorporal', elaborado: '2026-10-10', lote: 'KLM789', descripcion: 'Hidratación profunda' },
    { nombre: 'DesodoranteSpray', marca: 'MarcaDesodoranteSpray', categoria: 'CuidadoPersonal', precio: 4.25, cantidad: 50, peso: '100ml', fabricante: 'FabricanteDesodoranteSpray', elaborado: '2026-11-15', lote: 'NOP123', descripcion: 'Protección duradera' },
    { nombre: 'JabonManos', marca: 'MarcaJabonManos', categoria: 'CuidadoPersonal', precio: 2.99, cantidad: 60, peso: '120g', fabricante: 'FabricanteJabonManos', elaborado: '2026-12-01', lote: 'QRS456', descripcion: 'Limpieza suave' },
    { nombre: 'ProtectorSolar', marca: 'MarcaProtectorSolar', categoria: 'CuidadoPersonal', precio: 12.50, cantidad: 20, peso: '50ml', fabricante: 'FabricanteProtectorSolar', elaborado: '2027-01-10', lote: 'TUV789', descripcion: 'Protección UV' },
    { nombre: 'ToallitasDesmaquillantes', marca: 'MarcaToallitasDesmaquillantes', categoria: 'CuidadoFacial', precio: 7.25, cantidad: 35, peso: '30 unidades', fabricante: 'FabricanteToallitasDesmaquillantes', elaborado: '2027-02-15', lote: 'WXY123', descripcion: 'Elimina maquillaje' }
    // Agrega más datos según sea necesario
];
var baseDeDatosOriginal = baseDeDatos.slice();

var paginaActual = 0;
var filasPorPagina = 10;

function cargarTabla() {
    var tabla = document.getElementById('miTabla');
    var tbody = tabla.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    var inicio = paginaActual * filasPorPagina;
    var fin = inicio + filasPorPagina;

    baseDeDatos.slice(inicio, fin).forEach(function (item, index) {
        var fila = tbody.insertRow();

        Object.keys(item).forEach(function (key) {
            var celda = fila.insertCell();
            var input = document.createElement('input');
            input.type = 'text';
            input.value = item[key];
            input.disabled = true;
            celda.appendChild(input);
        });

        var celdaAcciones = fila.insertCell();
        celdaAcciones.innerHTML = '<div class="crud-buttons">' +
            '<button onclick="editar(' + (index + inicio) + ')">Editar</button>' +
            '<button onclick="eliminar(' + (index + inicio) + ')">Eliminar</button>' +
            '</div>' +
            '<button class="update-button" onclick="actualizar(' + (index + inicio) + ')">Actualizar</button>';
    });

    actualizarPaginacion();
}

function actualizarPaginacion() {
    var paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = '';

    var totalPaginas = Math.ceil(baseDeDatos.length / filasPorPagina);

    var spanPaginaActual = document.createElement('span');
    spanPaginaActual.textContent = 'Página: ' + (paginaActual + 1);
    paginacion.appendChild(spanPaginaActual);

    var botonAtras = document.createElement('button');
    botonAtras.textContent = 'Atrás';
    botonAtras.onclick = function () {
        if (paginaActual > 0) {
            paginaActual--;
            cargarTabla();
        }
    };
    botonAtras.disabled = paginaActual === 0; 
    paginacion.appendChild(botonAtras);

    var botonSiguiente = document.createElement('button');
    botonSiguiente.textContent = 'Siguiente';
    botonSiguiente.onclick = function () {
        if (paginaActual < totalPaginas - 1) {
            paginaActual++;
            cargarTabla();
        }
    };
    botonSiguiente.disabled = paginaActual === totalPaginas - 1; 
    paginacion.appendChild(botonSiguiente);
}


function editar(index) {
    
    var indexEnPagina = index % filasPorPagina;

    
    var fila = document.getElementById('miTabla').rows[indexEnPagina + 1];

    
    fila.querySelector('.update-button').style.display = 'inline-block';

    
    fila.querySelector('.crud-buttons').style.display = 'none';

    
    for (var i = 0; i < fila.cells.length - 1; i++) {
        var input = fila.cells[i].querySelector('input');
        input.disabled = false;
    }
}


function actualizar(index) {
    
    var indexEnPagina = index % filasPorPagina;

    
    var fila = document.getElementById('miTabla').rows[indexEnPagina + 1];

    
    fila.querySelector('.update-button').style.display = 'none';

    
    fila.querySelector('.crud-buttons').style.display = 'inline-block';

    
    for (var i = 0; i < fila.cells.length - 1; i++) {
        var input = fila.cells[i].querySelector('input');
        input.disabled = true;
    }

    
    Object.keys(baseDeDatos[index]).forEach(function (key, i) {
        baseDeDatos[index][key] = fila.cells[i].querySelector('input').value;
    });

    
    cargarTabla();
}



function eliminar(index) {
    var nombreProducto = baseDeDatos[index].nombre;

    var confirmacion = confirm('¿Estás seguro de que quieres eliminar el producto "' + nombreProducto + '"?');
    if (confirmacion) {
        baseDeDatos.splice(index, 1);
        cargarTabla();
    }
}


cargarTabla();


function abrirFormulario() {
    
    var modal = document.createElement('div');
    modal.id = 'modalFormulario';
    modal.className = 'modal fade';

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Formulario de Agregar Elemento</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required><br>
    
                <label for="marca">Marca:</label>
                <input type="text" id="marca" required><br>
    
                <label for="categoria">Categoría:</label>
                <input type="text" id="categoria" required><br>
    
                <label for="precio">Precio:</label>
                <input type="number" id="precio" required><br>
    
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" required><br>
    
                <label for="peso">Peso:</label>
                <input type="text" id="peso" required><br>
    
                <label for="fabricante">Fabricante:</label>
                <input type="text" id="fabricante" required><br>
    
                <label for="elaborado">Elaborado:</label>
                <input type="date" id="elaborado" required><br>
    
                <label for="lote">Lote:</label>
                <input type="text" id="lote" required><br>
    
                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" required></textarea><br>
    

                    

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="agregarElemento()">Registrar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-secondary" onclick="limpiarCampos()">Limpiar Campos</button>
                </div>
            </div>
        </div>
    `;

    
    document.body.appendChild(modal);

    
    $('#modalFormulario').modal('show');
}

function agregarElemento() {
    
    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var categoria = document.getElementById('categoria').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var peso = document.getElementById('peso').value;
    var fabricante = document.getElementById('fabricante').value;
    var elaborado = document.getElementById('elaborado').value;
    var lote = document.getElementById('lote').value;
    var descripcion = document.getElementById('descripcion').value;

    
    if (
        nombre === '' ||
        marca === '' ||
        categoria === '' ||
        precio === '' ||
        cantidad === '' ||
        peso === '' ||
        fabricante === '' ||
        elaborado === '' ||
        lote === '' ||
        descripcion === ''
    ) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    if (existeNombreEnBaseDeDatos(nombre)) {
        alert('El nombre ingresado ya existe en la base de datos. Por favor, elige otro nombre.');
        return;
    }

    
    var nuevoElemento = {
        nombre: nombre,
        marca: marca,
        categoria: categoria,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad),
        peso: peso,
        fabricante: fabricante,
        elaborado: elaborado,
        lote: lote,
        descripcion: descripcion
    };

    
    baseDeDatos.push(nuevoElemento);

    
    cargarTabla();

  

    
}
 
 limpiarCampos();

$('#modalFormulario').modal('hide');


function existeNombreEnBaseDeDatos(nombre) {
    return baseDeDatos.some(function (elemento) {
        return elemento.nombre === nombre;
    });
}


function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('fabricante').value = '';
    document.getElementById('elaborado').value = '';
    document.getElementById('lote').value = '';
    document.getElementById('descripcion').value = '';
}







function filtrar() {
    var filtroCategoria = document.getElementById('filtroCategoria').value.toLowerCase();
    var filtroElaborado = document.getElementById('filtroElaborado').value;

    var resultadosFiltrados = baseDeDatos.filter(function (item) {
        var cumpleCategoria = filtroCategoria === '' || item.categoria.toLowerCase().includes(filtroCategoria);
        var cumpleElaborado = filtroElaborado === '' || item.elaborado.includes(filtroElaborado);

        return cumpleCategoria && cumpleElaborado;
    });

    
    baseDeDatos = resultadosFiltrados;

    
    paginaActual = 0;
    cargarTabla();
}

function limpiarFiltros() {
    
    baseDeDatos = baseDeDatosOriginal.slice(); 
    paginaActual = 0;
    cargarTabla();
    document.getElementById('filtroCategoria').value = '';
    document.getElementById('filtroElaborado').value = '';
}