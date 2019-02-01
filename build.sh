#!/bin/bash
#
echo  "Noddus java+docker Use Case build and run script.\n"

#
# build projects
### backend
echo "[START] backend build.\n"
/usr/bin/mvn package -f ./spring-protobuf-server/

### frontend [OPTIONAL NODEJS REQUIRED!!!]
# echo "[START] frontend build"
## LOAD nodejs dependencies
# /usr/bin/npm install --prefix ./protobuf-frontend
## BUILD frontend
# /usr/bin/npm build --prefix ./protobuf-frontend


##build images
echo "[START] build docker images.\n"
/usr/bin/docker build -t spring-protobuf-server ./spring-protobuf-server/Dockerfile
/usr/bin/docker build -t protobuf-frontend ./protobuf-frontend/Dockerfile

## create a shared network
/usr/bin/docker network create -d bridge proto-network

echo "[RUN] protobuf backend and frontend..\n"

## run containers
/usr/bin/docker run -d --rm -p 8080:8080 --network proto-network -h backend --name backend spring-protobuf-server
/usr/bin/docker run -d --rm -p 80:80 --network proto-network -h frontend --name frontend protobuf-frontend