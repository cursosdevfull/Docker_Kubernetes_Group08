FROM centos:7

RUN yum install epel-release -y && \
    yum update -y && \
    yum install nginx -y

COPY web /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]