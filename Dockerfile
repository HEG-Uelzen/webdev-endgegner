FROM httpd:2.4-alpine

# install nodejs
RUN apk update
RUN apk add nodejs npm

# copy project files to the container
RUN mkdir -p /var/www/html/endgegner

COPY . /var/www/html/endgegner

# run npm build
WORKDIR /var/www/html/endgegner

RUN npm i
RUN npm run build

RUN cp -R /var/www/html/endgegner/dist/* /usr/local/apache2/htdocs/
