# Wordpress

### Crear la red

```
docker network create net-wp -d bridge
```

### Crear volúmenes

```
docker volume create vol-app-wp
docker volume create vol-app-mysql
```

### Crear contenedor MySQL

```
docker run -d --name server-mysql-wp -p 5100:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=shidalgo -e MYSQL_PASSWORD=54321 -e MYSQL_DATABASE=db_curso -v vol-app-mysql:/var/lib/mysql --network net-wp mysql:8
```

### Crear contenedor Wordpress

```
docker run -d --name server-wp -p 9900:80 -v vol-app-wp:/var/www/html -e WORDPRESS_DB_HOST=server-mysql-wp -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=12345 -e WORDPRESS_DB_NAME=db_curso --network net-wp wordpress
```
