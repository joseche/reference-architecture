FROM node:21-bullseye-slim as node_builder

# set app dir
WORKDIR /usr/src/app

# copy package files and install dependencies
COPY package*.json ./
RUN yarn install

# copy the app
COPY . .

# build the js and css
RUN yarn run build

# Nginx configuration
FROM nginx:stable-alpine3.17-slim
COPY --from=node_builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
