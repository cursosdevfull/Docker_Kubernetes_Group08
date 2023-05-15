# Certificados

### Para crear el key

```
openssl genrsa -out sergiohidalgo.key 2048
```

### Para crear la solicitud

```
openssl req -new -key sergiohidalgo.key -out sergiohidalgo.csr -subj "/CN=sergiohidalgo/O=cursosdev"
```

### Para generar el certificado final

```
openssl x509 -req -in sergiohidalgo.csr -CA \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.key -CAcreateserial -out sergiohidalgo.crt -days 500
```
