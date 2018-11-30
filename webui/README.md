## Frontend Build and Deploy

IF UPDATE:
docker build -t [docker repo]/frontend:v4 .

kubectl set image deployment/frontend frontend=frontend:v4

minikube service frontend

If New (from webui)
docker build -t [docker repo]/frontend:v1 .

docker push [docker repo]/frontend:v1

kubectl delete services frontend

kubectl delete deployments frontend

kubectl run frontend --image=[docker repo]/frontend:v1 --port=80 

kubectl expose deployment frontend --type=LoadBalancer

minikube service frontend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Run as docker container
Docker needs two build arguments(`SERVICE_HOST`, `SERVICE_PORT`) for nginx configuration.
`SERVICE_HOST` - backend container name.
`SERVICE_PORT` - backend container port.
so, docker build command looks like this
`docker build --build-arg SERVICE_HOST=${SERVICE_HOST} --build-arg SERVICE_PORT=${SERVICE_PORT} -t ${IMAGE_NAME_WEBUI} .`
