# Mongo

```
docker run -d --name server-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db_curso mongo:3.6.23
```

### Cliente

```
docker run -d --name client-mongo -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345 -e ME_CONFIG_MONGODB_SERVER=172.17.0.6 -e ME_CONFIG_MONGODB_PORT=27017 -p 8100:8081 mongo-express
```
