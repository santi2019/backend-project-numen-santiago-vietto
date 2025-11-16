# backend-project-numen-santiago-vietto

#### Autor: Vietto Herrera Santiago
#### Institucion: Academia Numen
#### Año: 2025

## Descripción

Proyecto final de Backend para Diplo. en Desarrollo FullStack en Academia Numen.

**Football App**

El sistema permite consultar jugadores, directores técnicos y clubes de futbol, almacenados en una base de datos de MongoDb.
Por otro lado, permite consultar a una API externa, llamada API-Sports, datos historicos de todos los partidos jugados en diferentes ligas o copas del mundo
mediante su ID correspondiente y una season en particular, mostrando como resultado datos de dicha competicion como estadio, árbitro, equipos y goles. Además
es posible consultar todos los partidos que se esten jugando en el mundo en vivo !

## Librerias

Las librerias implementadas son las siguientes:

```bash
npm i

dotenv
express
express-validator
mongoose
node-fetch
nodemon
```

## Servicios

**Frontend**

Terminal:

```bash
npm run dev
```


## Resultados

### Requerimientos:

✅ Contar con una base de datos propia y cuenta en MongoDB Atlas.

✅ Desarrollar el proyecto con un servidor en Node que utilice rutas con sus respectivos métodos HTTP para la comunicación con la base de datos.

✅ Poseer un esquema propio y original.

✅ Poseer aunque sea 4 rutas para conformar un CRUD.

✅ Validar las rutas que sean necesarias con el uso de express-validator.

✅ Desarrollar un middleware propio.

✅ Tener una ruta que se comunique con una API externa.
