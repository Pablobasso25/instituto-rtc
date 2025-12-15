# 🚀 Instituto - Práctica Prisma & PostgreSQL

> Proyecto de práctica para gestionar un instituto educativo. El objetivo principal es aprender a utilizar Prisma ORM para interactuar con una base de datos PostgreSQL, modelando relaciones entre Profesores, Cursos y Alumnos. 🎓📚

## 📖 Tabla de Contenidos

- [✨ Características](#-características)
- [📦 Instalación](#-instalación)
- [💻 Uso](#-uso)
- [🛠️ Tecnologías](#-tecnologías)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [💻 Autor](#-autor)

## ✨ Características

Este proyecto se centra en la práctica de backend y bases de datos:

- 🐘 **PostgreSQL & Prisma**: Conexión y manejo de base de datos relacional moderna.
- 👥 **Modelado de Datos**:
  - **Alumnos**: Gestión de estudiantes.
  - **Cursos**: Materias disponibles.
  - **Profesores**: Cuerpo docente.
- 🔄 **Relaciones**: Implementación de relaciones Uno a Muchos (Profesor-Cursos) y Muchos a Muchos (Alumnos-Cursos).
- 🛠️ **Servicios Modulares**: Lógica de consultas separada en servicios específicos (`alumno.services.js`, `curso.service.js`, etc.).

## 📦 Instalación

Sigue estos pasos para configurar el proyecto localmente.

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/rollingcodeschool/instituto-rtc
   ```

2. **Navega al directorio**
   ```bash
   cd instituto
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Configura la Base de Datos**
   Asegúrate de tener un archivo `.env` con la variable `DATABASE_URL` apuntando a tu instancia de PostgreSQL y ejecuta las migraciones:
   ```bash
   npx prisma migrate dev
   ```

## 💻 Uso

El proyecto incluye scripts de servicio para probar las consultas. Puedes ejecutar los archivos ubicados en la carpeta `services` (ej. `src/services`):

```bash
node src/services/alumno.services.js
node src/services/curso.service.js
node src/services/profesor.service.js
node src/services/instituto.service.js
```

## 🛠️ Tecnologías

Este proyecto fue construido utilizando las siguientes herramientas:

*   **Backend**: Node.js 
*   **Base de Datos**: PostgreSQL

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes sugerencias para mejorar esto, por favor haz un fork del repositorio y crea un pull request.

1. Haz un Fork del proyecto 🍴
2. Crea tu rama de características (`git checkout -b feature/NuevaCaracteristica`)
3. Haz Commit de tus cambios (`git commit -m 'Agrega NuevaCaracteristica'`)
4. Haz Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request 📩

## 📄 Licencia

Distribuido bajo la Licencia MIT. 

## 💻 Autor

 - [Ing. Emilse Arias](https://github.com/emiarias)

