# Apache

```
docker run -d --name server-web-apache -p 9200:80 -v $(pwd -W)/html:/usr/local/apache2/htdocs:ro httpd:alpine3.16
```
