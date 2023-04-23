# Laravel

### Para crear un proyecto de Laravel

```
docker compose run --rm composer-service create-project --prefer-dist laravel/laravel .
composer --ignore-platform-reqs create-project --prefer-dist laravel/laravel .
```

### Para ejecutar el artisan

```
docker compose run --rm artisan-service migrate
php /var/www/html/artisan migrate
```
