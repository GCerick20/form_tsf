<?php

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
        print_r($archivo_contenido);die();
        
        // Crea una conexión a la base de datos
        $conn = new mysqli("localhost", "root", "1234", "prueba");

        // Verifica si hay errores de conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Prepara la consulta SQL
        $sql = "INSERT INTO archivos (nombre, tipo, contenido) VALUES (?, ?, ?)";

        // Prepara la declaración
        $stmt = $conn->prepare($sql);

        // Vincula los parámetros
        $stmt->bind_param("sss", $archivo_nombre, $archivo_tipo, $archivo_contenido);

        // Ejecuta la consulta
        if ($stmt->execute()) {
            echo "Archivo PDF registrado correctamente.";
        } else {
            echo "Error al registrar el archivo PDF: " . $conn->error;
        }

        // Cierra la declaración y la conexión
        $stmt->close();
        $conn->close();
    } else {
        echo 'El archivo debe ser en formato PDF.';
    }
} else {
    echo 'Error al subir el archivo.';
}
