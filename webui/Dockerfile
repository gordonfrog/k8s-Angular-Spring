FROM node:6.14 as builder
RUN pwd
RUN mkdir -p /coda && \
    mkdir -p /coda/dist

WORKDIR /coda

COPY . ./
COPY package*.json ./
RUN npm install && \
    npm run build

RUN echo '*********************************' && \
    ls dist/



#RUN npm install --global typescript
#RUN echo "install done"
#RUN npm install --force && npm run build

FROM nginx:alpine
ARG SERVICE_HOST=192.168.99.100
ARG SERVICE_PORT=31464
ENV DOCKERIZE_VERSION v0.2.0
RUN apk update && apk add bash ca-certificates curl && \
   curl -sSLf -o /tmp/dockerize.tar.gz https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz && \
   tar -C /usr/local/bin -xzf /tmp/dockerize.tar.gz && \
   rm /tmp/dockerize.tar.gz
WORKDIR /usr/share/nginx/html
ENV SERVICE_HOST=${SERVICE_HOST} SERVICE_PORT=${SERVICE_PORT}
COPY --from=builder /coda/dist .
RUN ls

RUN mkdir /temp
COPY ./nginx.conf.template /temp
#COPY ./nginx.conf.template /etc/nginx/nginx.conf
COPY ./entrypoint.sh /temp
RUN chmod +x /temp/entrypoint.sh
RUN echo "daemon off;" /etc/nginx/nginx.conf
ENTRYPOINT ["/temp/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
