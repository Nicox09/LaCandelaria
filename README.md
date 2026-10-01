# La Candelaria — Sitio web

Sitio institucional de Cabaña La Candelaria (criadero de llamas, Jujuy, Argentina), en **Español, English e Italiano**.

Construido con **Astro** + **Tailwind CSS**, pensado para hostearse gratis en **Cloudflare Pages**.

## 🚀 Cómo correrlo en tu computadora

Necesitás [Node.js](https://nodejs.org) 22 o superior instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar el formulario de contacto (ver sección de abajo)
cp .env.example .env
# editá .env y pegá tu clave de Web3Forms

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrí `http://localhost:4321/es/` en el navegador. Los cambios en el código se reflejan al instante.

## 📁 Estructura del proyecto

```
src/
  assets/img/        → fotos (se optimizan automáticamente al hacer build)
  components/         → Navbar.astro, Footer.astro
  i18n/
    ui.ts             → TODO el texto del sitio, en los 3 idiomas
    utils.ts          → helpers de idioma/rutas
  layouts/
    Layout.astro       → HTML base, <head>, meta tags
  pages/
    index.astro         → redirige "/" a "/es/"
    [lang]/
      index.astro       → Inicio
      historia.astro    → Nuestra Historia
      productos.astro   → Productos
      contacto.astro    → Contacto
  styles/
    global.css          → paleta de colores y tipografías (Tailwind)
public/
  img/                  → logo (no se optimiza, se sirve tal cual)
```

## ✍️ Cómo editar contenido

**Todo el texto del sitio vive en un solo archivo:** `src/i18n/ui.ts`.

Ahí vas a encontrar tres bloques (`es`, `en`, `it`) con la misma estructura. Para cambiar un título, una descripción de producto, un dato de contacto, etc., buscá el texto en español y editalo — y hacé lo mismo en `en` e `it` si querés mantener los 3 idiomas actualizados.

**Para agregar o cambiar fotos:**
1. Poné el archivo en `src/assets/img/`
2. Importalo en la página correspondiente (`src/pages/[lang]/....astro`) con `import miFoto from "../../assets/img/mi-foto.jpg"`
3. Usalo en un componente `<Image src={miFoto} ... />`

Astro la va a optimizar (comprimir, convertir a WebP, generar tamaños para mobile/desktop) automáticamente al hacer build.

## 📧 Formulario de contacto (Web3Forms)

El formulario de la página de Contacto usa [Web3Forms](https://web3forms.com), un servicio gratuito que reenvía el mensaje por email sin necesidad de programar un backend.

1. Entrá a https://web3forms.com y anotá el email donde querés recibir las consultas.
2. Te dan una **Access Key** gratis al instante (no requiere cuenta).
3. Local: pegala en tu archivo `.env` (ver `.env.example`).
4. En producción (Cloudflare Pages): Settings → Environment variables → agregar `PUBLIC_WEB3FORMS_KEY` con esa clave.

## 🌍 Idiomas

Las URLs quedan así:
- `/es/`, `/es/historia/`, `/es/productos/`, `/es/contacto/`
- `/en/`, `/en/historia/`, `/en/productos/`, `/en/contacto/`
- `/it/`, `/it/historia/`, `/it/productos/`, `/it/contacto/`

El selector de idioma (arriba a la derecha) mantiene a la persona en la misma página al cambiar de idioma.

Las traducciones a inglés e italiano fueron hechas por IA; recomendamos que alguien bilingüe las revise antes o después del lanzamiento — son fáciles de ajustar en `src/i18n/ui.ts`.

## 🌐 Deploy a Cloudflare Pages (gratis)

### Opción A — Conectando un repositorio de GitHub (recomendado)

1. Subí este proyecto a un repositorio de GitHub.
2. Entrá a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Elegí el repositorio.
4. Configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. En **Environment variables**, agregá `PUBLIC_WEB3FORMS_KEY` con tu clave real.
6. Deploy. Cloudflare te da una URL gratis tipo `lacandelaria.pages.dev`, y después podés conectar el dominio propio (`llama.com.ar`) gratis también, desde la misma sección.

Cada vez que hagas `git push`, Cloudflare vuelve a buildear y publicar solo.

### Opción B — Deploy manual (sin GitHub)

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=lacandelaria
```

## 🔍 SEO

- Cada página tiene su `<title>` y `<meta description>` en el idioma correspondiente.
- Se genera un `sitemap.xml` automáticamente en cada build.
- Tags `hreflang` para que Google entienda las 3 versiones de idioma.

## ⚠️ Antes de lanzar

- [ ] Cargar la Access Key real de Web3Forms
- [ ] Revisar las traducciones EN/IT con alguien bilingüe
- [ ] Reemplazar `site: 'https://lacandelaria.pages.dev'` en `astro.config.mjs` por el dominio final
- [ ] Sacar/reemplazar `public/favicon.png` si quieren un ícono distinto
- [ ] Revisar los textos de ejemplo del footer (dirección, teléfono) por si cambia algo
