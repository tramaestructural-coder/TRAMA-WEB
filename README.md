# Sitio web de Trama Estructural

Esta guía explica, paso a paso y sin dar nada por sabido, cómo bajar este proyecto a tu computador, editarlo con Claude Code, y volver a subir tus cambios para que todos los vean. Está escrita para alguien que **nunca ha usado Git, GitHub ni una consola/terminal** — así que no te saltes pasos aunque te parezcan obvios.

Vas a ver la palabra "terminal" o "consola" varias veces: es una ventana negra donde se escriben comandos (instrucciones de texto) en vez de hacer clic. Da un poco de miedo la primera vez, pero solo vas a usar 4 o 5 comandos distintos, siempre los mismos.

---

## Antes de empezar: instala 3 programas (esto se hace una sola vez por computador)

### 1. Git
Sirve para descargar el proyecto y subir tus cambios.

- Entra a **[git-scm.com/downloads](https://git-scm.com/downloads)**, descarga la versión para Windows e instálala.
- Durante la instalación puedes dejar todas las opciones por defecto (solo dale "Next" a todo).
- Al terminar, vas a tener un programa nuevo llamado **"Git Bash"** — esa es la terminal que vamos a usar en esta guía.

### 2. Node.js
Sirve para que la página funcione en tu computador mientras la editas.

- Entra a **[nodejs.org](https://nodejs.org)** y descarga la versión que dice **"LTS"** (es la recomendada, no la otra).
- Instálala dejando todo por defecto.

### 3. Claude Code
Es la herramienta con la que vas a pedirle cambios a la IA.

- Si ya tienes acceso a Claude Code, sigue al siguiente paso.
- Si no sabes cómo instalarlo, pídele ayuda a Juan Enrique — la forma más simple, una vez que ya instalaste Node.js (paso anterior), es abrir Git Bash y escribir:

  ```
  npm install -g @anthropic-ai/claude-code
  ```

  y presionar Enter.

---

## Paso 1: Elegir dónde vas a guardar el proyecto

Antes de descargar nada, crea (o elige) una carpeta en tu computador donde vas a guardar este proyecto. Por ejemplo: `Documentos > TramaWeb`.

**Importante — evita esta carpeta:** no lo guardes dentro de una carpeta de **Google Drive, OneDrive o Dropbox**. Estos programas sincronizan cada archivo con la nube en tiempo real, y las herramientas de programación crean miles de archivos pequeños de golpe — eso hace que la sincronización choque y el proyecto quede corrupto. Usa una carpeta normal de tu disco, como `Documentos` o `Escritorio`.

---

## Paso 2: Descargar el proyecto (esto se llama "clonar")

1. Ve a la carpeta que elegiste en el Paso 1 (por ejemplo `Documentos`), haz clic derecho dentro de ella (en un espacio vacío) y elige **"Git Bash Here"** (aparece en el menú después de instalar Git). Se abrirá una ventana de terminal.
2. Escribe (o copia y pega) esto y presiona Enter:

   ```
   git clone https://github.com/Jcastros1/trama-estructural-web.git
   ```

3. Te va a pedir que inicies sesión con tu cuenta de GitHub (la que ya tiene acceso al repositorio: `tramaestructural-coder`). Sigue las instrucciones en pantalla.
4. Cuando termine, vas a ver una carpeta nueva llamada **`trama-estructural-web`** dentro de tu carpeta — ahí está todo el proyecto completo.

Esto solo se hace **una vez**. Las próximas veces no vuelves a "clonar", solo abres esa misma carpeta (ver Paso 3 en adelante).

---

## Paso 3: Instalar las piezas que necesita la página (una sola vez por computador)

1. En la terminal (Git Bash), entra a la carpeta que se creó:

   ```
   cd trama-estructural-web
   ```

2. Escribe:

   ```
   npm install
   ```

   y espera — puede tardar uno o dos minutos. Esto descarga todas las "piezas" (librerías) que la página necesita para funcionar. Vas a ver mucho texto pasar, es normal.

Este paso solo se repite si alguien agrega una pieza nueva al proyecto (Claude te avisará si hace falta).

---

## Paso 4: Abrir el proyecto con Claude Code

Todavía dentro de la carpeta `trama-estructural-web` en la terminal, escribe:

```
claude
```

y presiona Enter. Esto abre Claude Code, listo para que le pidas cambios.

---

## Paso 5: Ver la página funcionando en tu computador

Antes de editar, es útil ver la página en vivo. Dentro de Claude Code (o en otra ventana de Git Bash, en la misma carpeta), escribe:

```
npm run dev
```

Vas a ver un mensaje que dice algo como `Ready` y una dirección `http://localhost:3000`. Copia esa dirección y ábrela en tu navegador (Chrome, Edge, etc.) — ahí vas a ver la página funcionando **solo en tu computador**, como una vista previa privada. Todavía no es lo que ve el público.

Mientras hagas cambios con Claude, esta vista se va actualizando sola cada vez que guardes algo.

---

## Paso 6: Pedirle cambios a Claude

Con Claude Code abierto, simplemente escríbele lo que quieres cambiar, en tus propias palabras. Por ejemplo:

> "Cambia el texto del botón de Inicio por 'Conversemos'"

> "Agrega una foto nueva al proyecto Quincho"

Claude va a hacer el cambio directamente en los archivos del proyecto, y lo podrás ver reflejado en `http://localhost:3000`.

---

## Paso 7: Subir tus cambios a GitHub (para que los demás los vean)

Esto es lo más importante: mientras no hagas este paso, tus cambios **solo existen en tu computador**. Nadie más los ve hasta que los subas.

La forma más simple: dentro de Claude Code, simplemente pídele:

> "Sube estos cambios a GitHub"

Claude se encarga de todo. Si prefieres hacerlo tú mismo desde la terminal, son estos 3 comandos, uno por uno:

```
git add -A
git commit -m "Describe brevemente qué cambiaste"
git push
```

- `git add -A` — prepara todos los archivos que cambiaste.
- `git commit -m "..."` — guarda esos cambios con una nota describiendo qué hiciste (escribe algo breve entre las comillas, como `"cambio de foto en Quincho"`).
- `git push` — sube todo a GitHub, donde los demás lo pueden ver y descargar.

---

## Paso 8: Antes de empezar a editar cada vez, actualiza tu copia

Si alguien más (otro socio, o yo) hizo cambios después de tu última vez, necesitas traerlos a tu computador **antes** de empezar a editar tú. Al entrar a la carpeta del proyecto en la terminal, escribe:

```
git pull
```

Esto trae la versión más reciente. Hazlo siempre como primer paso, cada vez que te sientes a trabajar.

---

## Resumen rápido (para cuando ya sepas el proceso)

Cada vez que quieras trabajar en el sitio:

1. Abre Git Bash dentro de la carpeta `trama-estructural-web`.
2. `git pull` (traer lo último).
3. `npm run dev` (ver la página en vivo).
4. `claude` (abrir Claude Code y pedir cambios).
5. `git add -A`, `git commit -m "..."`, `git push` (subir tus cambios) — o simplemente pídeselo a Claude.

---

## ¿Y si algo falla o no entiendo un mensaje de error?

No te compliques: copia el mensaje de error y pégaselo a Claude Code preguntándole qué significa y cómo solucionarlo. Si sigue sin resolverse, contacta a Juan Enrique.
