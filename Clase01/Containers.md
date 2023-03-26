# Contenedores

### Crear un contenedor sin ejecutarlo

```
docker create --name <nombre contenedor> <nombre imagen>:<tag de la imagen>
```

### Listar contenedores ejecutándose

```
docker ps
docker ps | grep <término a buscar>
```

### Listar contenedores ejecutándose o no

```
docker ps -a
```

### Iniciar un contenedor

```
docker start <nombre contenedor>
```

### Detener un contenedor

```
docker stop <nombre contenedor>
```

### Crear un contenedor

```
docker run <nombre imagen>
docker run --name <nombre contenedor> <nombre imagen>:<tag imagen>
```

### Eliminar un contenedor detenido

```
docker rm <nombre contenedor | identificador contenedor>
```

### Eliminar un contenedor que no está detenido

```
docker stop <nombre contenedor>
docker rm <nombre contenedor>

docker rm -f <nombre contenedor>
```
