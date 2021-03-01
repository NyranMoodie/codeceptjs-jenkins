FROM peternguyentr/node-java-chrome:latest

COPY codecept.conf.js /app/
COPY package.json /app/
COPY test /app/tests
COPY load-tests /app/load-tests
COPY docker/run-tests.sh /app/docker/

WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/docker/run-docker-tests.sh"]