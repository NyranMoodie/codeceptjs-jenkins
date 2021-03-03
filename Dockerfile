FROM atools/chrome-headless:java11-node14-latest

WORKDIR /app
COPY . .



RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/run-tests.sh"]