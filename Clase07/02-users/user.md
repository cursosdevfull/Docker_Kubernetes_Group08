# Usuarios

### Para crear un usuario

(copiar los archivos crt y key a la carpeta de kubernetes - C:\Users\HP\.kube)
(moverse a la carpeta C:\Users\HP\.kube)

```
kubectl config set-credentials sergiohidalgo --client-certificate=sergiohidalgo.crt --client-key=sergiohidalgo.key
```

### Crear un contenedor para conectarnos

```
 docker run --rm -it -v D:\\Cursos\\Docker_Kubernetes_Group08\\Clase07\\01-certificate:/test -v D:\\Cursos\\Docker_Kubernetes_Group08\\Clase07\\01-certificate\\ca.crt:/ca.crt -w /test -v /usr/bin/kubectl:/usr/bin/kubectl alpine sh
```

### Para listar los clusters

```
kubectl config view
```

### Para conocer la ruta del cluster al que queremos conectarnos

```
kubectl cluster-info
```

### Crear un cluster dentro del contenedor

```
kubectl config set-cluster cursosdev --server=https://127.0.0.1:8443 --certificate-authority=/ca.crt
```

### Para crear un usuario desde el contenedor

```
kubectl config set-credentials sergiohidalgo --clie
nt-certificate=sergiohidalgo.crt --client-key=sergiohidalgo
.key
```

### Para crear un contexto desde el contenedor

```
kubectl config set-context sergiohidalgo --cluster=
cursosdev --user=sergiohidalgo
```

### Para cambiar al contexto creado en el contenedor

```
kubectl config use-context sergiohidalgo
```
