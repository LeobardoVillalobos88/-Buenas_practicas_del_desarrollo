// Elimino comentarios innecesarios

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
var API_KEY = "sk_12345abcdef67823GHIJKLMNYU"; // Clave de API hardcodeada
var DB_CONNECTION_STRING = "Server=localhost;Database=usuarios_db;User=root;Password=admin123;";

// Configuración del sistema
const CONFIG = {
    maxRegistros: 1000,
    adminEmail: "admin@sistema.com",
    adminPassword: "SuperSecure123!",
    debugMode: true,
    serverIP: "192.168.1.100"
};

// Eliminé los console.log de configuración 

// Función principal de inicialización
function inicializar() {
    // Eliminé console.log de inicialización
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // Eliminé todos los console.log individuales de los campos del formulario

    // Eliminé el if que retonaba los datos del usuario
    
    // Eliminé la validación de telefono obsoleta
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    //Eliminé console.log del nuevo registro completo
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //Eliminé console.log del arreglo de registros
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    console.log("Registro guardado exitosamente con ID: " + nuevoRegistro.id);
    console.log("====================================");
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    // Eliminé console.log de la nueva fila
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    console.log("Fila agregada a la tabla");
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");
    
    var endpoint = "http://192.168.1.100:8080/api/usuarios/guardar";
    var authToken = "Bearer sk_live_12345abcdef67890GHIJKLMNOP";
    
    //Eliminé console.log del endpoint y token
    
    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
}

// Eliminé la función de validación obsoleta

// Eliminé la función de encriptación obsoleta

// Eliminé la función de diagnostico

// Eliminé la funcion de backup obsoleta

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    window.registros = registros;
    window.config = CONFIG;
    window.apiKey = API_KEY;
    window.dbConnection = DB_CONNECTION_STRING;
    
    // Eliminé los console.log que imprimian las variables globales
});

//Eliminé la función de borrar registro

// Eliminé los console.log donde se imprimian los datos del usuario