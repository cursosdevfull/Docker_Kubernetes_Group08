# MySQL

```
docker run -d --name server-mysql -p 4800:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=shidalgo -e MYSQL_PASSWORD=54321 -e MYSQL_DATABASE=db_curso mysql:8
```

### PHPMyAdmin

```
docker run -d --name phpmyadmin -p 8090:80 -e PMA_ARBITRARY=1 phpmyadmin
```
