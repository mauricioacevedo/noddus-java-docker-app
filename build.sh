#!/bin/bash
#
echo "#######################################################"
echo "#######################################################"
echo "## Noddus java+docker Use Case build and run script. ##"
echo "#######################################################"
sleep 2
#
# build projects
### backend
echo "[START] backend build"
/usr/bin/mvn package -f ./spring-protobuf-server/pom.xml

### frontend [OPTIONAL NODEJS REQUIRED!!!]
# echo "[START] frontend build"
# sleep 2
## LOAD nodejs dependencies
# /usr/bin/npm install --prefix ./protobuf-frontend
## BUILD frontend
# /usr/bin/npm build --prefix ./protobuf-frontend


##build images
echo "[START] build docker images.\n"
sleep 2
/usr/bin/docker build -t spring-protobuf-server ./spring-protobuf-server/
/usr/bin/docker build -t protobuf-frontend ./protobuf-frontend/

## create a shared network
/usr/bin/docker network create -d bridge proto-network

echo "[RUN] protobuf backend and frontend..\n"
sleep 2
## run containers
/usr/bin/docker run -d --rm -p 8080:8080 --network proto-network -h backend --name backend spring-protobuf-server
/usr/bin/docker run -d --rm -p 80:80 --network proto-network -h frontend --name frontend protobuf-frontend