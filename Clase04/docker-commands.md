# Otros comandos

### Para listar imágenes huérfanas

```
docker images -f dangling=true
```

### Para listar los ID de las imágenes huérfanas

```
docker images -f dangling=true -q
```

### Para eliminar imágenes huérfanas

```
docker images -f dangling=true -q | xargs docker rmi
```

### Para eliminar volúmenes huérfanos

```
docker volume ls -f dangling=true | xargs docker volume rm
```
