# Use Node.js 14 Alpine
FROM node:14-alpine



# Remove the old build directory
RUN rm -rf build

# Install the dependancies
RUN cd /tmp && npm install -q

ADD ./ /src


WORKDIR /src

# Build the appliction
RUN npm run-script build

# Run the built application
CMD ["node", "build/index.js"]
