FROM node:alpine as build
WORKDIR /usr/app/portfolio
COPY . .
RUN npm install && npm run build

FROM nginx:latest as main
COPY --from=build /usr/app/portfolio/dist /usr/share/nginx/html
COPY ./devops/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4001
