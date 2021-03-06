FROM nginx:1.15.2-alpine
COPY ./build /var/www
RUN apk update && apk upgrade && apk add curl
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]