FROM node:22-alpine
WORKDIR /tool
COPY package.json index.js LICENSE ./
COPY bin/cli.js ./bin/
USER node
ENTRYPOINT ["node", "/tool/bin/cli.js"]
CMD ["help"]
