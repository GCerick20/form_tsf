<?php

print_r($_FILES); die();

// Verificar si se ha seleccionado un archivo
if ($_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
    // Obtener la información del archivo
    $archivo_nombre = $_FILES['archivo']['name'];
    $archivo_tipo = $_FILES['archivo']['type'];
    $archivo_tamano = $_FILES['archivo']['size'];
    $archivo_temporal = $_FILES['archivo']['tmp_name'];
    
    // Verificar que el archivo sea un PDF
    if ($archivo_tipo === 'application/pdf') {
        // Leer el contenido del archivo
        $archivo_contenido = file_get_contents($archivo_temporal);
        
        // Realizar la conexión a la base de datos
        $conexion = new mysqli('localhost', 'root', '', 'prueba');
        
        // Verificar si la conexión fue exitosa
        if ($conexion->connect_errno) {
            die('Error en la conexión a la base de datos: ' . $conexion->connect_error);
        }
        
        // Preparar la consulta para insertar el archivo en la base de datos
        $consulta = $conexion->prepare("INSERT INTO archivo (nombre, tipo, contenido) VALUES (?, ?, ?)");
        
        // Asociar los parámetros a la consulta
        $consulta->bind_param('sss', $archivo_nombre, $archivo_tipo, $archivo_contenido);
        
        // Ejecutar la consulta
        if ($consulta->execute()) {
            echo 'El archivo se ha guardado en la base de datos correctamente.';
        } else {
            echo 'Error al guardar el archivo en la base de datos.';
        }
        
        // Cerrar la conexión y liberar recursos
        $consulta->close();
        $conexion->close();
    } else {
        echo 'El archivo debe ser en formato PDF.';
    }
} else {
    echo 'Error al subir el archivo.';
}
?>
