# Docker Compose

### Para ejecutar docker-compose.yaml

```
docker compose up -d
```

### Para detener el docker-compose.yaml

```
docker compose down
```

### Para revisar el estado de los contenedores

```
docker compose ps
```

### Para ejecutar un archivo de Docker Compose en una ubicación distinta y con un nombre distinto

```
docker compose -f compose/docker-compose-wp.yaml up -d
```

### Para ejecutar solo algunos servicios

```
docker compose up -d <nombre servicio>
```
