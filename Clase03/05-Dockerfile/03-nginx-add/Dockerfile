FROM centos:7

RUN yum install epel-release -y && \
    yum update -y && \
    yum install nginx -y

COPY web /usr/share/nginx/html

ADD https://i.blogs.es/d0a067/chat/1366_2000.jpeg /usr/share/nginx/html/images/chatgpt.jpg

RUN chmod 777 /usr/share/nginx/html/images/chatgpt.jpg

CMD ["nginx", "-g", "daemon off;"]