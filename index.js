const express = require('express');
const app = express();
const port = 8082;

// Ruta para la Liveness Probe
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

// Ruta para la Readiness Probe
app.get('/ready', (req, res) => {
    res.status(200).send('READY');
});

// Ruta principal de la aplicación
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                    }
                    header {
                        background-color: #4CAF50;
                        padding: 20px;
                        color: white;
                        font-size: 2em;
                    }
                    section {
                        padding: 40px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                        font-size: 1.2em;
                    }
                    .button {
                        background-color: #4CAF50;
                        border: none;
                        color: white;
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 10px 5px;
                        cursor: pointer;
                    }
                    .button:hover {
                        background-color: #45a049;
                    }
                    footer {
                        background-color: #333;
                        color: white;
                        padding: 10px;
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                    }
                </style>
                <title>Bootcamp Deployment</title>
            </head>
            <body>
                <header>
                    Bienvenido al Despliegue de Aplicación Bootcamp
                </header>
                <section>
                    <h1>¡Despliegue Exitoso!</h1>
                    <p>Has completado con éxito el despliegue de tu aplicación en Kubernetes usando Minikube. Este es un ejemplo de cómo una aplicación puede ser orquestada y gestionada con Kubernetes.</p>
                    <a href="https://kubernetes.io/docs/home/" class="button">Aprende más sobre Kubernetes</a>
                    <a href="https://minikube.sigs.k8s.io/docs/" class="button">Guía de Minikube</a>
                </section>
                <footer>
                    &copy; 2024 Bootcamp de Despliegue
                </footer>
            </body>
        </html>
    `);
});

// Inicializa la aplicación en el puerto especificado
app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`);
});
