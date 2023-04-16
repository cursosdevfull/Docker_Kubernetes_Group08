FROM centos:7

RUN yum update -y && \
    yum install httpd -y

ENV PORT=5000 HOST=0.0.0.0

WORKDIR /var/www/html

RUN echo $PORT > ./test.html

RUN echo "<h3>PORT: $HOST:$PORT</h3>" > ./test2.html

COPY env ./env

ENV $(cat ./env | xargs)

#EXPOSE 80

CMD ["apachectl", "-DFOREGROUND"]