# K8s-fullstack

## Backend Build and Deploy

Frontend instructions are found in webui/Readme.md.
For Backend build+deploy simply open your eclipse ide,
import existing maven project (point here), and build the backend docker image via maven plugin configured in pom.xml.     

docker push [docker repo]/k8s-fullstack:0.0.1-SNAPSHOT

minikube start

kubectl config use-context minikube

kubectl cluster-info

minikube dashboard

eval $(minikube docker-env)

kubectl delete services k8s-fullstack

kubectl delete deployments k8s-fullstack

kubectl run k8s-fullstack --image=[docker repo]/k8s-fullstack:0.0.1-SNAPSHOT --port=8080

kubectl expose deployment k8s-fullstack --
type=LoadBalancer

minikube service k8s-fullstack
