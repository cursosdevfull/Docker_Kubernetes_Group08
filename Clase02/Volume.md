# Volúmenes

### Volúmen nombrado para MongoDB

```
docker run -d --name server-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db_curso -v D:\\Cursos\\Docker_Kubernetes_Group08\\Clase02\\02-mongo\\db:/data/db mongo:3.6.23
```

### Creación de volumen nombrado

```
docker volume create vol-web-nginx
```

### Listar volúmenes

```
docker volume ls
```

### Inspeccionar volúmen

```
docker volume inspect vol-web-nginx
```

### Crear contenedor con volumen nombrado

```
docker run -d --name server-nginx -p 9300:80 -v vol-web-nginx:/usr/share/nginx/html nginx:alpine
```

### Crear contenedor con volumen anónimo

```
docker run -d --name server-nginx -p 9300:80 -v /usr/share/nginx/html nginx:alpine
```
