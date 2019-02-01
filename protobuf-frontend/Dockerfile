FROM nginx:1.15.8-alpine
LABEL MAINTAINER mauricio.acevedo@gmail.com
COPY ./build/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
