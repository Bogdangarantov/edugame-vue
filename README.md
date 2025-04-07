# crm-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

## Project deployment
```
docker build -t edugame-app .
```
```
docker run -d -p 443:443 -p 80:80 --name edugame-app edugame-app
```
