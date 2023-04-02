# Postgres

```
docker run -d --name server-postgres -e POSTGRES_PASSWORD=12345 -p 5432:5432 postgres
```

### Cliente de Postgres

```
docker run -d --name client-postgres -p 9200:80 -e PGADMIN_DEFAULT_PASSWORD=54321 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com dpage/pgadmin4
```
