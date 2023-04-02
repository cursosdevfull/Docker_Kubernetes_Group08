# Redes

### Listar

```
docker network ls
```

### Crear una red de tipo bridge

```
docker network create net-curso -d bridge
```

### Crear contenedor vinculado a una red

```
docker run -d --network net-curso --name server01 nginx:alpine
```

### Vincular contenedor a una red

```
docker network connect net-curso server03
```

### Inspeccionar una red

```
docker network inspect net-curso
```

### Desvincular contenedor a una red

```
docker network disconnect net-curso server03
```
