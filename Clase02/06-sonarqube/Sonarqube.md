# Sonarqube

### Crear red

```
docker network create net-sonar -d bridge
```

### Crear server

```
docker run -d --name app-sonarqube -p 9000:9000 -p 9092:9092 --network net-sonar sonarqube:9.9.0-community
```

### Ejecutar el sonar-scanner localmente

```
sonar-scanner \
  -Dsonar.projectKey=proyectoprueba \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=sqp_35040ef016b92faa647704ac7e03bb7ef41911c9
```
