FROM centos:7

ARG DIRECTORY=src

RUN yum install epel-release -y && \
    yum update -y && \
    yum install nginx -y

COPY ${DIRECTORY}/web /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]