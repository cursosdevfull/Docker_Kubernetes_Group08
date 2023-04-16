#!bin/bash

echo "Ejecutando el contenedor"
echo "Contenedor de Ngix iniciado..." > ./init.html

apachectl -DFOREGROUND
