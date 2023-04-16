# Angular

```
docker run -d --name server-web-react -p 9100:80 -v $(pwd -W)/dist:/usr/share/nginx/web:ro -v $(pwd -W)/conf/default.conf:/etc/nginx/conf.d/default.conf:ro nginx:1.24-alpine
```
