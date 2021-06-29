# Use Node.js 14 Alpine
FROM node:14-alpine

COPY package.json /app

RUN npm install

ADD ./* $HOME/src/

# Build the appliction
RUN npm install

# Run the built application
CMD ["node", "build"]
