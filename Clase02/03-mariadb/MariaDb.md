# MariaDB

```
docker run -d --name server-mariadb -p 4900:3306 -e MARIADB_ROOT_PASSWORD=12345 -e MARIADB_USER=shidalgo -e MARIADB_PASSWORD=54321 -e MARIADB_DATABASE=db_curso mariadb:10.8.4
```
