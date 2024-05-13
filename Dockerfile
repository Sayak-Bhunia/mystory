FROM node:20 as Base
WORKDIR /usr/src/mystory
COPY *.json *.mjs *.js  ./
RUN npm install

FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production
COPY . .
RUN npm run build
CMD ["npm", "start"]

