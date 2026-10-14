 Proyecto Colaborativo - Expo Go

¡Bienvenidos al repositorio del equipo! Este archivo contiene la guía paso a paso para configurar el entorno de desarrollo local, instalar las dependencias necesarias y ejecutar la aplicación en sus dispositivos o emuladores utilizando Expo Go.

 Requisitos previos

Antes de comenzar, asegúrate de tener instalado en tu computadora lo siguiente:

Node.js (Versión LTS recomendada, puedes descargarla desde nodejs.org).

Un administrador de paquetes como npm (viene incluido con Node.js) o yarn.

Git para clonar y gestionar el repositorio.

Expo Go instalado en tu celular (disponible en Google Play Store para Android y App Store para iOS).

 Pasos para levantar el proyecto

1. Clonar el repositorio

Abre tu terminal y clona este repositorio en tu máquina local:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DE_LA_CARPETA>



2. Instalar las dependencias

Como la carpeta node_modules se encuentra excluida en el archivo .gitignore para mantener limpio el repositorio, debes instalar todas las dependencias ejecutando:

npm install



(O si prefieres usar yarn: yarn install)

3. Iniciar el servidor de desarrollo

Una vez finalizada la instalación de las dependencias, arranca el servidor de Expo con el siguiente comando:

npx expo start



Esto abrirá una interfaz en tu terminal con un código QR y varias opciones de ejecución.

 Cómo abrir y probar la aplicación

Dependiendo de cómo prefieras probar el proyecto, sigue alguna de las siguientes opciones:

Celular físico con Expo Go:

Asegúrate de que tu celular y tu computadora estén conectados a la misma red Wi-Fi.

En Android: Abre la app Expo Go en tu teléfono y utiliza el escáner interno de la aplicación para leer el código QR que aparece en la terminal.

En iPhone: Abre la app Cámara nativa de tu iPhone y apunta al código QR; te aparecerá una notificación para abrirlo automáticamente en Expo Go.

Emulador de Android:

Con el servidor de desarrollo corriendo en la terminal, presiona la tecla a para abrir la app en tu emulador configurado.

Simulador de iOS (Solo para macOS):

Con el servidor de desarrollo corriendo en la terminal, presiona la tecla i para abrir la app en el simulador de Xcode.

 Flujo de Trabajo y Buenas Prácticas de Git

Para mantener el código ordenado, evitar conflictos masivos y asegurar una integración fluida, seguiremos estas pautas:

Trabajo por ramas: Nunca desarrolles ni hagas commits directamente sobre la rama main. Crea siempre una rama nueva combinando tu nombre o tu usuario de GitHub para mayor claridad.

Sincronización constante: Antes de empezar a trabajar en tu rama o cuando tu US esté cerca de terminar, actualiza tu entorno local con los últimos cambios de main:

git checkout main
git pull origin main
git checkout tu-rama
git merge main



Merge inmediato al terminar: Una vez que la User Story esté completamente desarrollada, probada y funcionando en tu entorno, sube tu rama a GitHub y solicita un Pull Request (PR) hacia main para hacer el merge de inmediato y mantener el proyecto actualizado para todo el equipo.

 Consejos útiles para el desarrollo colaborativo

Nunca subas los cambios del directorio node_modules/ ni variables de entorno sensibles (.env).

Si instalas una nueva librería mediante npm install, comunícale al equipo para que también puedan sincronizar sus dependencias localmente.