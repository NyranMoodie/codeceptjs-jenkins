FROM atools/chrome-headless:java11-node14-latest

COPY codecept.conf.js /app/
COPY package.json /app/
COPY tests /app/tests
COPY run-tests.sh /app

WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/run-tests.sh"]