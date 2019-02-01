##build images
/usr/bin/docker build -t protobuf-frontend ./protobuf-frontend/Dockerfile
/usr/bin/docker build -t spring-protobuf-server ./spring-protobuf-server/Dockerfile

##execute 
/usr/bin/docker-compose up