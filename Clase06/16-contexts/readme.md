# Contexts

### Contexto actual

```
kubectl config current-context
```

### Listar contextos

```
kubectl config view
```

### Crear un contexto

```
kubectl config set-context ctx-docker12 --cluster=docker-desktop --user=user-docker12
```

### Cambiar de contexto

```
kubectl config use-context ctx-docker12
```

### Eliminar un contexto

```
kubectl config delete delete-context ctx-docker12
```
