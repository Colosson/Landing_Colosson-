# Guía de Despliegue en Hostinger con Dokploy - Colosson Website

Este documento contiene la guía completa para desplegar la página web de **Colosson** en un VPS de **Hostinger** utilizando **Dokploy** como plataforma de despliegue (PaaS).

---

## 📋 Requisitos Previos

1. **VPS en Hostinger**: Servidor VPS con Ubuntu 22.04 / 24.04 LTS y Docker instalado.
2. **Dokploy Instalado**: Instancia de Dokploy corriendo en el VPS (accesible en `http://tu-vps-ip:3000` o en un subdominio configurado).
3. **Repositorio Git**: El código fuente subido a un repositorio en GitHub, GitLab o Bitbucket (o subida por Git directo).
4. **Dominio**: Dominio apuntando a la dirección IP de tu VPS de Hostinger mediante un registro tipo A.

---

## 🚀 Método 1: Despliegue mediante Dockerfile (Recomendado)

El proyecto cuenta con un `Dockerfile` optimizado (Node.js 22 Multi-stage build).

### Pasos en Dokploy:

1. **Crear Proyecto y Aplicación**:
   - Inicia sesión en el panel de **Dokploy**.
   - Ve a **Projects** -> **Create Project** (nombre sugerido: `Colosson`).
   - Dentro del proyecto, haz clic en **Add Application** y dale un nombre (ej. `colosson-web`).

2. **Configurar la Fuente de Código (Source)**:
   - Selecciona **Provider**: `GitHub` (o tu proveedor Git).
   - Elige el repositorio y la rama (ej. `main`).

3. **Configurar el Build Type**:
   - En **Build Type**, selecciona **Dockerfile**.
   - **Dockerfile Path**: `/Dockerfile`
   - **Context Path**: `/`

4. **Configurar Puerto y Variables de Entorno**:
   - Ve a la pestaña **Environment**:
     ```env
     NODE_ENV=production
     PORT=3000
     HOST=0.0.0.0
     ```
   - Ve a **General** / **Network** y establece el **Port** en `3000`.

5. **Configurar Dominio y Certificado SSL**:
   - Ve a la pestaña **Domains** en Dokploy.
   - Añade tu dominio (ejemplo: `colosson.com` o `www.colosson.com`).
   - Habilita HTTPS / Let's Encrypt (Dokploy con Traefik gestionará y renovará el certificado SSL automáticamente).

6. **Desplegar**:
   - Haz clic en **Deploy**.
   - Dokploy construirá la imagen Docker y lanzará el contenedor automáticamente.

---

## ⚙️ Método 2: Despliegue mediante Nixpacks / Buildpacks

Si prefieres no usar Dockerfile directo y dejar que Dokploy detecte Node.js automáticamente:

1. En **Build Type**, selecciona **Nixpacks**.
2. Configura los comandos:
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
3. Ajusta el puerto a `3000`.
4. Haz clic en **Deploy**.

---

## 🛠️ Comandos Locales para Pruebas Previas

Si deseas probar el build localmente antes de desplegar en Dokploy:

```bash
# 1. Instalación de dependencias
npm install

# 2. Compilar producción
npm run build

# 3. Iniciar el servidor local
npm run start
```

### Probar con Docker localmente:

```bash
# Construir imagen Docker
docker build -t colosson-web .

# Correr contenedor localmente
docker run -p 3000:3000 colosson-web
```

---

## 📁 Estructura del Proyecto

- `Dockerfile`: Archivo de empaquetado contenedorizado para Dokploy / Docker.
- `app/`: Interfaz de usuario, arquitectura bilingüe (EN/ES) y animaciones.
- `public/`: Multimedia, vídeos, imágenes, logos e isotipos optimizados.
- `worker/`: Punto de entrada runtime compatible con Cloudflare / Vinext.
- `vite.config.ts`: Configuración principal de compilación y bundling.
- `package.json`: Definición de scripts (`dev`, `build`, `start`) y dependencias.

---

## 🔍 Monitoreo y Mantenimiento en Dokploy

- **Ver Logs**: En Dokploy, entra a la aplicación `colosson-web` -> Pestaña **Logs** para auditar el estado del servidor en tiempo real.
- **Redespliegue Automático**: Puedes activar la casilla **Auto Deploy** en Dokploy con Webhooks de GitHub para que cada `git push` a `main` actualice el sitio en Hostinger automáticamente.
