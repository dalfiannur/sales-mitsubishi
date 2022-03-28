FROM httpd:latest-alpine

WORKDIR /usr/local/apache2/htdocs

ADD ./dist .