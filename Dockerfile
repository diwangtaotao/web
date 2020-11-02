FROM nginx
 
ADD dist/index.html /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/default.conf
 
EXPOSE 80