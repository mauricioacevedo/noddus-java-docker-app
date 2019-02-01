# Base Java runtime image
FROM openjdk:8-jdk-alpine

LABEL MAINTAINER mauricio.acevedo@gmail.com

RUN mkdir -p /saved_protos

ARG JAR_FILE=target/spring-protobuf-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]

EXPOSE 8080