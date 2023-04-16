# Servidor web con Nginx

### Usando PS

```
docker run -d --name server-web-nginx -p 8900:80 -v ${PWD}\html:/usr/share/nginx/web:ro -v ${PWD}\conf\default.conf:/etc/nginx/conf.d/default.conf nginx:1.24-alpine
```

### Usando terminales tipo linux

```
docker run -d --name server-web-nginx -p 8900:80 -v $(pwd -W)/html:/usr/share/nginx/web:ro -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf:ro nginx:1.24-alpine
```
