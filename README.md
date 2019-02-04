# Noddus Java and Docker Use Case
Small project using Java and Docker to implement a serialization based on the Google Protobuf mechanism. The app is separed in back and front end.

## Backend: Spring Boot app
Folder: spring-protobuf-server. Using a spring boot project, handled by maven, it was developed a REST service that can receive a simple JSON body and save it as a binary protobuf file. It has 2 REST services:
    -	/create: POST service that receives a JSON with the id/name convention ( {“id”: “_ID”, “name”:” _NAME”} ) and creates a protobuf binary file in the /saved_protos folder. The service also checks if the id value is a number, if not returns an error.
    -	/check: GET service used to know if the app is responding.

## Frontend: light React form
Folder: protobuf-frontend. Small react frontend that makes easy the communication with the REST Service /create.

## Usage
For the project to run you need installed in your system:
    - Java 8 +
    - Maven 3+ 
    - Nodejs 10+ \[OPTIONAL\]
    - docker and docker compose
You have 2 alternatives to build and execute the whole system:
1. Docker-compose SIMPLE: the repo file docker-compose-SIMPLE.yml load pre-built images hosted on Docker hub (https://cloud.docker.com/u/macevedg/repository/list) so then you just grab the docker-compose-SIMPLE.yml file, put it in your system and run: 
```
docker-compose -f docker-compose-SIMPLE.yml
```

2. Docker-compose LOCAL: executing the bash script build.sh the program :
    1. Build the Spring Boot project.
    2. Build the images needed (spring-protobuf-server and protobuf-frontend).
    3. Run the docker-compose command using the file docker-compose-LOCAL.yml:
       ```
       docker-compose -f docker-compose-LOCAL.yml
       ```

## Aside notes:
1.	Project tested on Windows, Centos 7 and Ubuntu server 18.04 LTS.
2.	For the execution of every command you need to have an administrative account or access to sudo.
3.	To build the project it’s a must to have installed the recommended software:
    -   Java jdk (openjdk) 1.8+
    -	Maven 3
    -	Nodejs 10+ \[OPTIONAL\]
    -	Docker 18+
    -	Comments and suggestions please let me know at my email: Mauricio.acevedo@gmail.com.
4. Integrates with CircleCI for CI
