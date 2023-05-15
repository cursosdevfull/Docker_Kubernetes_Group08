# Despliegue en Google Cloud

### Obtener una cuenta de Google Cloud

- [Google Cloud](https://cloud.google.com)

### Crear un proyecto

### Descargar e instalar GCloud

- [Descargar](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe?hl=Es)

### Autenticarse

```
gcloud auth login
```

### Conectar con un proyecto

```
gcloud config set project PROJECT_ID
gcloud auth configure-docker
```

### Habilitar el control de acceso inicial

```
gcloud projects get-iam-policy cursodocker03 --flatten="bindings[].members" --format='table(bindings.role)' --filter="bindings.members:service-845412221130@containerregistry.iam.gserviceaccount.com"
```

### Dominios posibles para los repositorios de imágenes

```
    "gcr.io": "gcloud",
    "us.gcr.io": "gcloud",
    "eu.gcr.io": "gcloud",
    "asia.gcr.io": "gcloud",
    "staging-k8s.gcr.io": "gcloud",
    "marketplace.gcr.io": "gcloud"
```

### Estructura del nombre de las imágenes

- [hostname]/[project id]/[nombre de la imagen]
- gcr.io/cursodocker03/frontend

### Generar las imágenes desde el docker compose

```
docker compose -f docker-compose-google.yaml build
```

### Publicar las imágenes

```
docker compose -f docker-compose-google.yaml push
```

### Habilitar Kubernetes Engine API

### Conectarse al Cluster de Google Cloud

```
gcloud container clusters get-credentials cluster-cursosdev --zone us-central1-c --project cursodocker03
```
