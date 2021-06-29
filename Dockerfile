# Use Node.js 14 Alpine
FROM node:14-alpine

COPY package.json /app

RUN npm install

COPY . /app

# Build the appliction
RUN npm run-script build

# Run the built application
CMD ["node", "build"]
