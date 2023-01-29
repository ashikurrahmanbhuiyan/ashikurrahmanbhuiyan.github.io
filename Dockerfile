FROM httpd:2.4
COPY . /usr/local/apache2/htdocs/

#docker build -t hello2/contact:1.0 .
#docker run --rm -d -p 8080:80/tcp hello2/contact:1.0