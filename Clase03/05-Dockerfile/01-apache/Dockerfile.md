# FROM - RUN - COPY - CMD

## FROM

- Indica la imagen base que se utilizará para crear la imagen final. En este caso, se utiliza la imagen oficial de CentOS 7.

```
FROM centos:7
```

### RUN

- Ejecuta un comando en la imagen base. En este caso, se actualiza el sistema operativo e instala el servidor web Apache.

```
RUN yum update
RUN yum install httpd

```

### COPY

- Copia un archivo o directorio de la máquina local al contenedor. En este caso, se copia el directorio web al directorio /var/www/html del contenedor.

```
COPY web /var/www/html
```

### CMD

- Ejecuta un comando en el contenedor. En este caso, se ejecuta el comando apachectl para iniciar el servidor web Apache.

```
CMD ["apachectl", "-DFOREGROUND"]
```
