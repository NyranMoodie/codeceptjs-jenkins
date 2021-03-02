FROM atools/chrome-headless:java11-node14-latest


# Fix certificate issues
RUN apt-get update --no-install-recommends && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;
    
COPY codecept.conf.js /app/
COPY steps_file.js /app/
COPY package.json /app/
COPY tests /app/tests
COPY run-tests.sh /app
COPY trigger-tests.sh /app


WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/run-tests.sh"]