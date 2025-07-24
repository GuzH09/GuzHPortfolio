---
web:
  title: 'Últimos Proyectos'
  projects:
    - title: 'Cordoba Bus Gamer'
      description: 'Landing page estática con Astro Framework y Tailwind.'
      link: 'https://busgamer.ar/'
      images:
        - '@/assets/projects/busgamer/project1.webp'
        - '@/assets/projects/busgamer/project2.webp'
        - '@/assets/projects/busgamer/project3.webp'
      details:
        summary: 'El sitio de Bus Gamer es una página Astro rápida y completamente responsiva que combina gradientes llamativos, video e imágenes optimizadas con datos dinámicos. Las paradas del tour se obtienen en tiempo de ejecución desde un CSV público de Google Sheets y se renderizan como tarjetas en una línea de tiempo, luego de un estado de carga esqueleto. Una barra de navegación con efecto glassmorphism, estética en modo oscuro y CTAs sociales completan una interfaz atractiva—todo mientras mantiene puntajes perfectos en Lighthouse.'
        characteristics:
          - 'Página única.'
          - 'Completamente responsiva.'
          - 'Calendario dinámico de paradas cargado del lado del cliente desde un CSV de Google Sheets.'
        performance:
          - '100 SEO'
          - '100 Buenas prácticas'
          - '100 Rendimiento'
          - '100 Accesibilidad'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'tailwind'
        release: '07.24'
        latestupdate: '07.24'
      slug: 'busgamer'

    - title: '¿Se Viene?'
      description: 'Micro-sitio que permite a los visitantes votar en tiempo real si “se viene” o no, mostrando los resultados con gráficos dinámicos.'
      link: 'https://cviene.com/'
      images:
        - '@/assets/projects/seviene/project1.webp'
        - '@/assets/projects/seviene/project2.webp'
        - '@/assets/projects/seviene/project3.webp'
      details:
        summary: '¿Se Viene? es una encuesta lúdica y que responde continuamente a la pregunta “¿Se viene?” registrando los votos de los visitantes en una base de datos SQLite alojada en el edge, y mostrando el porcentaje en vivo con un indicador y un gráfico histórico. Demuestra el uso de Server Actions de Next.js 14, base de datos edge con Turso y una interfaz totalmente responsiva.'
        characteristics:
          - 'Votación instantánea mediante Server Actions de Next.js'
          - 'Almacenamiento SQLite en el edge con Turso y revalidación ISR'
          - 'Indicador y gráficos de línea auto-actualizables con Recharts'
          - 'Enfriamiento para evitar el spam de votos'
          - 'Interfaz oscura responsiva con Tailwind CSS'
        performance:
          - '100 SEO'
          - '100 Buenas prácticas'
          - '100 Rendimiento'
          - '100 Accesibilidad'
        technologies:
          - 'nextjs'
          - 'react'
          - 'typescript'
          - 'tailwind'
        release: '06.19'
        latestupdate: '06.19'
      slug: 'seviene'

    - title: 'F1 Race Position Tracker'
      description: 'Visualización interactiva de carreras de Fórmula 1, mostrando la posición de cada piloto vuelta por vuelta con opciones de filtrado avanzadas.'
      link: 'https://f1racepositiontracker.vercel.app/'
      images:
        - '@/assets/projects/f1racepositiontracker/project1.webp'
        - '@/assets/projects/f1racepositiontracker/project2.webp'
        - '@/assets/projects/f1racepositiontracker/project3.webp'
      details:
        summary: 'F1 Race Position Tracker permite a los fanáticos explorar cada Gran Premio de Fórmula 1 desde 1950 mediante un gráfico de líneas dinámico. Construido con Next.js 15 (App Router) y Recharts, obtiene datos en vivo desde la API de Ergast, los almacena en caché en el edge y renderiza un gráfico interactivo donde los usuarios pueden enfocarse en pilotos o momentos específicos de la carrera. Una interfaz limpia con Tailwind y componentes de Radix UI brinda una experiencia rápida y accesible en todos los dispositivos.'
        characteristics:
          - 'Gráfico de líneas vuelta por vuelta con posiciones de pilotos'
          - 'Selectores de año y carrera con obtención de datos desde el servidor'
          - 'Filtros por piloto y rango de vueltas con actualizaciones instantáneas'
          - 'Líneas con colores de equipo y marcadores de abandono'
          - 'Solicitudes a la API almacenadas en caché en el edge (revalida cada 7 días)'
          - 'Interfaz totalmente responsiva y accesible con teclado'
        performance:
          - '100 SEO'
          - '100 Buenas prácticas'
          - '81 Rendimiento'
          - '100 Accesibilidad'
        technologies:
          - 'nextjs'
          - 'react'
          - 'typescript'
          - 'tailwind'
        release: '05.21'
        latestupdate: '05.21'
      slug: 'f1racepositiontracker'

    - title: 'RandomPong'
      description: 'Pong, pero Multijugador y con emparejamiento aleatorio.'
      link: 'https://random-pong-frontend.vercel.app/'
      images:
        - '@/assets/projects/randompong/project1.webp'
        - '@/assets/projects/randompong/project2.webp'
        - '@/assets/projects/randompong/project3.webp'
      details:
        summary: 'RandomPong es una versión moderna y multijugador del clásico juego Pong, con partidas en tiempo real y emparejamiento aleatorio. Desarrollado con Vite, React y Socket.IO, ofrece una experiencia donde los jugadores pueden desafiar a oponentes aleatorios. El juego presenta controles de paleta fluidos, física de pelota en tiempo real y un diseño limpio y minimalista, manteniendo la esencia clásica de Pong.'
        characteristics:
          - 'Multijugador en tiempo real con Socket.IO'
          - 'Sistema de emparejamiento aleatorio'
          - 'Bucle de juego a 60 FPS con Canvas de HTML5'
          - 'Controles receptivos mediante teclado'
          - 'Interfaz limpia y diseño minimalista'
        performance:
          - '100 SEO'
          - '100 Practices'
          - '94 Performance'
          - '100 Accessibility'
        technologies:
          - 'vite'
          - 'react'
          - 'tailwind'
          - 'express'
        release: '05.12'
        latestupdate: '05.12'
      slug: 'randompong'

    - title: 'YouTube Subs Manager'
      description: 'Gestor de Suscripciones de YouTube en NextJs.'
      link: 'https://www.youtube.com/watch?v=SYh2Suvz93s&ab_channel=GuzH'
      images:
        - '@/assets/projects/ybsubscriptions/project1.webp'
        - '@/assets/projects/ybsubscriptions/project2.webp'
        - '@/assets/projects/ybsubscriptions/project3.webp'
      details:
        summary: 'YouTube Subs Manager es una aplicación web completa que permite a los usuarios organizar sus suscripciones de YouTube en feeds personalizados. La aplicación utiliza Next.js para un rendimiento óptimo con Server Side Rendering y React para una interfaz de usuario dinámica. Los usuarios pueden sincronizar sus suscripciones de YouTube, crear feeds personalizados con los canales que deseen, y ver los últimos videos de cada feed con opciones de filtrado por tipo (todos, videos, shorts, livestreams) y estado (vistos, no vistos). La aplicación implementa actualizaciones optimistas para una experiencia de usuario fluida y rápida, paginación infinita para cargar videos adicionales sin interrupciones, y un sistema de caché inteligente utilizando TanStack Query.'
        characteristics:
          - 'Desplegado en Vercel'
          - 'Utiliza SSR (Server Side Rendering)'
          - 'Skeleton Loading (Server y Cliente)'
          - 'Supabase Auth & DB'
          - 'Sistema de feeds personalizados'
          - 'Paginación infinita con TanStack Query'
          - 'Optimistic Updates con TanStack Query'
          - 'Caching con TanStack Query'
        performance:
          - '100 SEO'
          - '100 Practices'
          - '97 Performance'
          - '89 Accessibility'
        technologies:
          - 'nextjs'
          - 'react'
          - 'tailwind'
          - 'supabase'
        release: '04.24'
        latestupdate: '04.24'
      slug: 'ybsubscriptions'

    - title: 'MGM Market'
      description: 'Shopify Ecommerce para MGM Group.'
      link: 'https://mgmtienda.com/'
      images:
        - '@/assets/projects/mgmtienda/project1.webp'
        - '@/assets/projects/mgmtienda/project2.webp'
        - '@/assets/projects/mgmtienda/project3.webp'
      details:
        summary: 'El sitio web de MGM Market es una tienda de comercio electrónico basada en Shopify, que permite una gestión eficiente de catálogos de productos, procesamiento de pagos y opciones de envío. Su diseño responsivo garantiza una experiencia de usuario óptima tanto en computadoras de escritorio como en dispositivos móviles, facilitando una navegación intuitiva por categorías como auriculares, micrófonos, parlantes y smartwatches. Funcionalidades adicionales como la gestión de cuentas de usuario y carritos de compra dinámicos mejoran la interacción y retención de clientes.'
        characteristics:
          - 'E-Commerce.'
          - 'Totalmente responsive.'
        performance:
          - '100 SEO'
          - '78 Practices'
          - '83 Performance'
          - '96 Accessibility'
        technologies:
          - 'liquid'
          - 'shopify'
        release: '03.25'
        latestupdate: '03.25'
      slug: 'mgmtienda'

    - title: 'MiFulbo'
      description: 'Aplicación móvil para llevar un registro de partidos de fútbol y estadísticas personales de rendimiento.'
      link: 'https://play.google.com/store/apps/details?id=com.guzh09.mifulbov2'
      images:
        - '@/assets/projects/mifulbo/project1.webp'
        - '@/assets/projects/mifulbo/project2.webp'
        - '@/assets/projects/mifulbo/project3.webp'
      details:
        summary: 'MiFulbo es una aplicación móvil desarrollada con React Native y Expo que permite a los usuarios registrar y analizar sus partidos de fútbol y su rendimiento personal a través de una interfaz atractiva e intuitiva. Incluye estadísticas personalizadas con gráficos interactivos, herramientas de gestión de partidos y autenticación segura de usuarios.'
        characteristics:
          - 'Añadir, editar, eliminar y visualizar partidos de fútbol.'
          - 'Estadísticas personalizadas con gráficos de pastel y datos generales.'
          - 'Autenticación segura mediante Supabase.'
        performance:
          - 'Interfaz rápida y responsiva optimizada para dispositivos móviles.'
          - 'Sincronización eficiente de datos en tiempo real con Supabase.'
          - 'Tamaño de la app minimizado con recursos y gráficos optimizados.'
          - 'Flujo de autenticación confiable para recuperación de contraseñas e inicio de sesión.'
        technologies:
          - 'react'
          - 'tailwind'
          - 'supabase'
          - 'js'
        release: '01.25'
        latestupdate: '01.25'
      slug: 'mifulbo'

    - title: 'Play Safe AR'
      description: 'Pagina estatica con Astro, y Tailwind.'
      link: 'https://playsafe.ar/'
      images:
        - '@/assets/projects/playsafe/project1.webp'
        - '@/assets/projects/playsafe/project2.webp'
        - '@/assets/projects/playsafe/project3.webp'
      details:
        summary: 'Play Safe es un sitio web estático dedicado al cuidado deportivo, la prevención de lesiones, la mejora del rendimiento y productos de calidad para atletas. Desarrollado con HTML, JavaScript y Tailwind CSS, está integrado perfectamente con Sanity CMS para una gestión de contenido sencilla y eficiente. El sitio utiliza Webhooks y GitHub Actions para activar automáticamente las reconstrucciones cada vez que se actualiza el contenido en Sanity CMS, asegurando que los cambios se reflejen en tiempo real.'
        characteristics:
          - 'Landing Page.'
          - 'Totalmente responsive.'
          - 'SanityCMS Incluido.'
          - 'Animaciones con Scroll.'
        performance:
          - '100 SEO'
          - '96 Practices'
          - '97 Performance'
          - '100 Accessibility'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'tailwind'
        release: '11.24'
        latestupdate: '11.24'
      slug: 'playsafe'

    - title: 'Pomberito'
      description: 'Pagina estatica con Astro, y Tailwind.'
      link: 'https://pomberitoweb.vercel.app/'
      images:
        - '@/assets/projects/pomberito/project1.webp'
        - '@/assets/projects/pomberito/project2.webp'
        - '@/assets/projects/pomberito/project3.webp'
      details:
        summary: 'Sitio Web estatico no-oficial para "Pomberito", videojuego Indie Argentino desarrollado por Lara The Pitbull. Utiliza HTML, Javascript y Tailwind. Es totalmente responsive y contiene tanto embeds de Youtube, como efectos de Carousel y Lightbox sin afectar el rendimiento. Todos los elementos fueron diseñados replicando la interfaz gráfica del videojuego.'
        characteristics:
          - 'Home y 404 page.'
          - 'Totalmente responsive.'
          - 'Desarrollada en Español e Ingles.'
          - 'Integra Flowbite para efectos de Carousel.'
          - 'Integra lite-youtube-embed para videos de Youtube.'
        performance:
          - '92 SEO'
          - '96 Practices'
          - '100 Performance'
          - '86 Accessibility'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'tailwind'
        release: '11.24'
        latestupdate: '11.24'
      slug: 'pomberito'

    - title: 'The Path Into The Abyss'
      description: 'Pagina estatica con Astro, y Tailwind.'
      link: 'https://thepathintotheabyssweb.vercel.app/'
      images:
        - '@/assets/projects/thepathintotheabyss/project1.webp'
        - '@/assets/projects/thepathintotheabyss/project2.webp'
        - '@/assets/projects/thepathintotheabyss/project3.webp'
      details:
        summary: 'Sitio Web estatico no-oficial para "The Path Into The Abyss", videojuego Argentino en desarrollo por Matias Rispau, y basado en la película argentina "Me encontraras en lo profundo del abismo". Contiene un Parallax Effect en el inicio desarrollado solo con CSS. Utiliza HTML, Javascript y Tailwind. Es totalmente responsive y contiene embeds de Youtube, sin afectar el rendimiento.'
        characteristics:
          - '3 Paginas mas pagina 404.'
          - 'Totalmente responsive.'
          - 'Desarrollada en Español e Ingles.'
          - 'Integra AOS para efectos con el scroll.'
          - 'Integra lite-youtube-embed para videos de Youtube.'
        performance:
          - '92 SEO'
          - '100 Practices'
          - '100 Performance'
          - '97 Accessibility'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'tailwind'
        release: '10.24'
        latestupdate: '10.24'
      slug: 'thepathintotheabyss'

    - title: 'Gauchos Inmortales'
      description: 'Pagina estatica con Astro, y Tailwind.'
      link: 'https://gauchosinmortalesweb.vercel.app/'
      images:
        - '@/assets/projects/gauchosinmortales/project1.webp'
        - '@/assets/projects/gauchosinmortales/project2.webp'
        - '@/assets/projects/gauchosinmortales/project3.webp'
      details:
        summary: 'Sitio Web estatico no-oficial para "Gauchos Inmortales", videojuego Argentino en desarrollo por RealiTeam. Utiliza HTML, Javascript y Tailwind. Es totalmente responsive, contiene embeds de Youtube y un video en loop como fondo, sin afectar el rendimiento.'
        characteristics:
          - '3 Paginas mas pagina 404.'
          - 'Totalmente responsive.'
          - 'Integra AstroEmbedYoutube y fsLightBox.'
        performance:
          - '100 SEO'
          - '96 Practices'
          - '99 Performance'
          - '95 Accessibility'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'tailwind'
        release: '10.24'
        latestupdate: '10.24'
      slug: 'gauchosinmortales'

    - title: 'Astro Ecommerce'
      description: 'Server Side Rendering con Astro, Tailwind y React.'
      link: 'https://guzhstore-astro.vercel.app/'
      images:
        - '@/assets/projects/astroecommerce/project1.webp'
        - '@/assets/projects/astroecommerce/project2.webp'
        - '@/assets/projects/astroecommerce/project3.webp'
      details:
        summary: 'Sitio Web dinamico para un e-commerce ficticio, desarrollado para integrar los conceptos presentes en la plantilla de ecommerce de Astro "storefront". Utiliza Server Side Rendering (SSR), contiene endpoints para gestionar los pagos con stripe, y usa astro:actions para conseguir los datos. Utiliza React para todo componente dinamico.'
        characteristics:
          - '3 Paginas mas pagina 404 y 500.'
          - 'Pagina de detalle para cada producto.'
          - 'Tema oscuro y claro.'
          - 'Totalmente responsive.'
          - 'Integra Stripe como pasarela de pagos.'
          - 'Integra Toastify para notificaciones.'
          - 'Utiliza Astro Endpoints.'
        performance:
          - '92 SEO'
          - '100 Practices'
          - '100 Performance'
          - '83 Accessibility'
        technologies:
          - 'html'
          - 'css'
          - 'js'
          - 'astro'
          - 'react'
          - 'tailwind'
        release: '09.24'
        latestupdate: '10.24'
      slug: 'astroecommerce'
---
