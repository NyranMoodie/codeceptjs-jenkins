FROM atools/chrome-headless:java11-node14-latest

COPY .. /app


WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/run-tests.sh"]