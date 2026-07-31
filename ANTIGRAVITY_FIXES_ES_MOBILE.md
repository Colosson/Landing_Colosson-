# Correcciones móviles — versión en español de Colosson

## Objetivo

Corregir tres problemas visuales que aparecen en la versión **ES** de la página
en Safari móvil. La versión inglesa, el diseño de escritorio, las animaciones,
el cambio de tema por scroll, el loader y el botón flotante de WhatsApp deben
seguir funcionando exactamente como ahora.

La solución debe ser responsive y no puede consistir en esconder palabras,
eliminar signos de puntuación o reducir globalmente toda la tipografía.

## Alcance técnico

- Proyecto React/Vinext.
- El idioma activo ya está expuesto en:
  `html[data-language="en"]` y `html[data-language="es"]`.
- Aplicar los ajustes únicamente a español y a los breakpoints móviles que lo
  necesiten, preferiblemente con selectores como:
  `html[data-language="es"] ...`
- Revisar principalmente:
  - `app/ContactSection.tsx`
  - `app/AnimatedWorkTitle.tsx`
  - `app/page.tsx`
  - `app/globals.css`

---

## 1. El signo `¿` se recorta en el CTA final

### Problema

En la sección verde final, el encabezado debe decir:

> ¿Una idea que merece ser realidad?

En Safari móvil, la parte inferior/izquierda del signo `¿` queda recortada por
el contenedor animado y visualmente parece un signo roto o acompañado por un
punto extraño.

La estructura actual usa `.contact-line` con `overflow: clip`, además de
letter-spacing negativo y una animación vertical. Esa combinación está
recortando el voladizo del glifo.

### Corrección esperada

- Mantener el texto y la puntuación exactos.
- Darle al primer renglón suficiente espacio óptico a la izquierda y suficiente
  margen de recorte para que el signo `¿` se renderice completo.
- Conservar la animación de entrada de las líneas.
- No solucionar el problema usando `overflow: visible` de forma global si eso
  hace visible el texto antes de la animación.
- Si hace falta, aplicar padding/margen compensado solo al primer
  `.contact-line` en español o ampliar su `overflow-clip-margin`.

### Resultado requerido

Debe leerse claramente `¿Una idea`, sin recortes, puntos duplicados ni
desplazamientos respecto a las líneas inferiores.

---

## 2. El botón “Explorar” invade el párrafo del hero

### Problema

En el hero móvil en español, el párrafo es más largo que su equivalente en
inglés. El botón circular **EXPLORAR ↓** termina encima de las últimas palabras
del párrafo, especialmente alrededor de “productos físicos” y “construidos”.

Los elementos involucrados son:

- `.hero-bottom`
- `.hero-bottom > p`
- `.circle-link`

### Corrección esperada

- En móvil y en español, reservar una columna real para el botón.
- El párrafo debe ocupar únicamente el espacio disponible y envolver sus líneas
  sin pasar por debajo del círculo.
- Una solución recomendada es convertir `.hero-bottom` en una cuadrícula con:
  - texto: `minmax(0, 1fr)`
  - botón: columna de ancho fijo
- Mantener el botón con un área táctil mínima de 44 × 44 px.
- Conservar la órbita verde, la flecha, el enlace y su animación.
- Si el contenido ya no cabe verticalmente, ajustar de forma moderada el
  tamaño/line-height del párrafo o la distribución del hero, únicamente en
  español móvil. No ocultar texto.

### Resultado requerido

Debe existir una separación visual clara entre el párrafo y el círculo. Ninguna
letra puede quedar debajo del botón y el botón no debe salirse del viewport.

---

## 3. El título de “Proyectos seleccionados” queda amontonado

### Problema

El título español:

> Cosas que hicimos realidad.

usa la misma escala y line-height que el copy inglés, aunque sus palabras son
más largas. En móvil, “Cosas que” y “hicimos” quedan demasiado grandes y
apretadas; las líneas casi se pisan y el bloque negro/verde de `realidad.` queda
pegado al resto del título y a la descripción.

Los elementos involucrados son:

- `.animated-work-title`
- `.work-title-line`
- `.work-title-word`
- `.work-title-accent`
- `.work-heading`
- `.work-heading .heading-note`

### Corrección esperada

- Mantener el texto exacto y la animación palabra por palabra.
- Crear una escala tipográfica específica para español móvil.
- Aumentar ligeramente el `line-height` del título respecto al valor global
  actual de `0.78`.
- Asegurar una separación consistente:
  1. entre la primera y la segunda línea;
  2. entre `hicimos` y el bloque `realidad.`;
  3. entre el título completo y el párrafo descriptivo.
- El bloque negro con texto verde de `realidad.` debe conservar el mismo efecto,
  transición y lenguaje visual del hero.
- No reducir el título inglés ni modificar la versión de escritorio.

### Resultado requerido

El título debe leerse en orden y sin colisiones:

```text
Cosas que
hicimos
realidad.
```

Puede adaptarse el salto responsivo si otra composición funciona mejor, siempre
que ninguna palabra se corte, se monte sobre otra o salga del viewport.

---

## Breakpoints que deben probarse

Validar la versión española en Safari/WebKit o emulación equivalente en:

- 320 × 568
- 375 × 812
- 390 × 844
- 393 × 852
- 430 × 932

También comprobar:

- Inglés móvil en 390 × 844.
- Español y inglés en escritorio a 1440 px.

## Criterios de aceptación

- [ ] El signo inicial `¿` se ve completo.
- [ ] El botón “Explorar” no tapa ninguna palabra.
- [ ] El título “Cosas que hicimos realidad.” no tiene colisiones ni recortes.
- [ ] No existe scroll horizontal:
      `document.documentElement.scrollWidth === document.documentElement.clientWidth`
- [ ] El selector EN/ES sigue funcionando.
- [ ] El loader conserva su animación.
- [ ] Las animaciones se reinician correctamente al volver a entrar a una
      sección.
- [ ] El botón de WhatsApp sigue visible y no tapa contenido esencial.
- [ ] `npm run build` finaliza sin errores.

## Restricciones

- No reemplazar la página completa.
- No reestructurar componentes no relacionados.
- No cambiar el copy indicado.
- No desactivar animaciones como atajo.
- No aplicar arreglos globales que degraden inglés o escritorio.

Al terminar, entregar un resumen de los selectores modificados y capturas de
validación de los tres bloques en 390 × 844.
