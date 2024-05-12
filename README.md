# Client Gateway Microservice

## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo .env basado en el env.template
4. Levantar el servidor NATS

```bash
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

5. Levantar el servidor

```bash
nvm use 20.12.2

npm install

npm run start:dev
```

## Para crear la imagen de Docker para Prod

```bash
docker build -f Dockerfile.prod -t client-gateway .  
```
