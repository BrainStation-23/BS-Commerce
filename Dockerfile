FROM node:10.24.1-alpine3.11

WORKDIR /home/mean

# Install git for bower install
RUN apk update
RUN apk add git

# Install Mean.JS packages
ADD package.json /home/mean/package.json
ADD package-lock.json /home/mean/package-lock.json

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/mean/.bowerrc
ADD bower.json /home/mean/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/mean

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000
CMD ./node_modules/.bin/forever -m 3 server.js -l ./logs/access.log