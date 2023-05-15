# Despliegue en Azure

### Obtener una cuenta

- [Portal Azure](https://portal.azure.com)

### Crear un Resource Group

### Descargar e instalar el Azure CLI

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli)

### Loguearse con Azure

```
az login
```

### Vincular con el Container Registry

```
az acr login --name cursosdev08
```

### Crear las imágenes usando docker compose

```
docker compose -f docker-compose-azure.yaml build
```

### Publicar las imágenes en el Container Registry

```
docker compose -f docker-compose-azure.yaml push
```

### Agregar el repositorio de un ingress controller

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```

### Instalar el ingress controller

```
helm install nginx-ingress ingress-nginx/ingress-nginx --set controller.replicaCount=2     --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux --set controller.admissionWebhooks.patch.nodeSelector."beta\.kubernetes\.io/os"=linux
```
