# Sistema de Gestión para el Laboratorio Patológico CEDHIC

Este es un proyecto en desarrollo realizado por un equipo de estudiantes junto a un docente guía, con el objetivo de brindar una solución personalizada al laboratorio patológico **CEDHIC** (Centro de Diagnóstico Histo y Citopatológico).

## Objetivo del Proyecto

Desarrollar un sistema informático que optimice la gestión interna del laboratorio, permitiendo un manejo más eficiente de:

- Pacientes
- Muestras
- Informes de resultados
- Caja diaria
- Acceso de pacientes a sus estudios

Actualmente, CEDHIC utiliza un sistema comercial que presenta limitaciones, lo que motivó la creación de una solución a medida basada en sus necesidades reales.

## Tecnologías utilizadas

- **TypeScript** - Lenguaje principal en backend y frontend  
- **Node.js** - Entorno de ejecución para el backend  
- **Express.js** - Framework para APIs RESTful  
- **React** - Librería para construcción de interfaces  
- **Material UI** - Librería de componentes UI estilizados  
- **Prisma** - ORM para manejo de base de datos  
- **PostgreSQL** - Base de datos relacional

## Estado del Proyecto

 Actualmente en desarrollo.  
 Etapas completadas:
- Relevamiento y análisis de necesidades reales dentro del entorno laboral.
- Diseño de la arquitectura y primeras pantallas del sistema.

 En curso:
- Implementación de módulos clave (registro de pacientes, carga de informes, gestión de usuarios, etc.)

 Próximos pasos:
- Pruebas internas.
- Validación de informes.
- Generación automática de contraseñas para pacientes.
- Código QR para la autenticación de pacientes y médicos.
- Nuevas tablas.
- Implementar técnicas de SEO una vez desplegado el sistema en producción.

## Diagrama de Bloques

![Diagrama de Bloques](./images/Diagrama_Bloque.jpg)

## Diagrama de Flujo

![Diagrama de Flujo](./images/Diagrama_Flujo.jpg)

## ¿Cómo ejecutar el proyecto de manera local?

1. Clonar el repositorio:
    git clone https://github.com/MaiaAgostina1006/Proyecto

2. Abrir dos terminales y posicionarse en las carpetas client y server respectivamente:
    "cd Proyecto/client" y "cd Proyecto/server"

3. En cada terminal, instalar las dependencias:
    "npm install"

4. Finalmente, ejecutar ambos proyectos con:
    "npm run dev"

**Importante:**  
> Para que el backend funcione correctamente, es necesario contar con una instancia de PostgreSQL activa, crear la base de datos correspondiente y configurar un archivo `.env` dentro de la carpeta `server` con las variables de entorno necesarias.  
> Un ejemplo de contenido para el archivo `.env` sería:

DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/clinica"
PORT=5000