document.getElementById('editar-button').addEventListener('click', function() {
    var tituloActual = document.getElementById('titulo').innerText;
    var descripcionActual = document.getElementById('descripcion').innerText;

    document.getElementById('titulo').style.display = 'none';
    document.getElementById('descripcion').style.display = 'none';
    document.getElementById('editar-button').style.display = 'none';

    document.getElementById('nuevo-titulo').value = tituloActual;
    document.getElementById('nueva-descripcion').value = descripcionActual;

    document.getElementById('formulario-edicion').style.display = 'block';
});

document.getElementById('guardar-cambios').addEventListener('click', function() {
    var nuevoTitulo = document.getElementById('nuevo-titulo').value;
    var nuevaDescripcion = document.getElementById('nueva-descripcion').value;

    document.getElementById('titulo').innerText = nuevoTitulo;
    document.getElementById('descripcion').innerText = nuevaDescripcion;

    document.getElementById('titulo').style.display = 'block';
    document.getElementById('descripcion').style.display = 'block';
    document.getElementById('editar-button').style.display = 'block';
    document.getElementById('formulario-edicion').style.display = 'none';
});
