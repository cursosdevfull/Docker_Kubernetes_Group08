# Pods

### Ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Listar pods

```
kubectl get pods
kubectl get po
```

### Información del pod

```
kubectl get po <nombre pod> -o yaml
kubectl get po <nombre pod> -o json
```

### Descripción del pod

```
kubectl describe po <nombre pod>
```

### Obtener el log de un pod

```
kubectl logs <nombre pod>
```

### Para eliminar un pod

```
kubectl delete po <nombre pod>
```

### Para eliminar un manifiesto

```
kubectl delete -f 01-pod.yaml
```

### Para listar pods con sus etiquetas

```
kubectl get po --show-labels
kubectl get po --show-labels -l env=dev
```
