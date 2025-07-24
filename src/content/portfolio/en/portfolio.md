---
web:
  title: 'Latest Projects'
  projects:
    - title: 'Cordoba Bus Gamer'
      description: 'Static Landing Page With Astro Framework, and Tailwind.'
      link: 'https://busgamer.ar/'
      images:
        - '@/assets/projects/busgamer/project1.webp'
        - '@/assets/projects/busgamer/project2.webp'
        - '@/assets/projects/busgamer/project3.webp'
      details:
        summary: 'The Bus Gamer site is a fast, fully responsive Astro page that blends bold gradients, video, and optimized imagery with dynamic data. Tour stops are pulled at runtime from a public Google Sheets CSV, rendered into timeline cards after a skeleton loading state. A glass-morphism navbar, dark-mode aesthetics and social CTAs round out the engaging UI—all while keeping perfect Lighthouse scores.'
        characteristics:
          - 'Single Page.'
          - 'Fully responsive.'
          - 'Dynamic tour schedule loaded client-side from Google Sheets CSV.'
        performance:
          - '100 SEO'
          - '100 Practices'
          - '100 Performance'
          - '100 Accessibility'
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
      description: 'Micro-site that lets visitors vote in real time whether “se viene” or not, displaying the results with dynamic charts.'
      link: 'https://cviene.com/'
      images:
        - '@/assets/projects/seviene/project1.webp'
        - '@/assets/projects/seviene/project2.webp'
        - '@/assets/projects/seviene/project3.webp'
      details:
        summary: '¿Se Viene? is a playful, serverless poll that continuously answers the question “¿Se viene?” by recording visitor votes in an edge-hosted SQLite database and rendering the live percentage with a gauge and historical line chart. It showcases Next.js 14 Server Actions, Turso edge DB and a fully responsive dark-mode UI.'
        characteristics:
          - 'Instant voting through Next.js Server Actions'
          - 'Edge SQLite storage with Turso and ISR revalidation'
          - 'Auto-updating gauge & line charts powered by Recharts'
          - 'Cooldown to prevent vote spamming'
          - 'Responsive dark UI with Tailwind CSS'
        performance:
          - '100 SEO'
          - '100 Practices'
          - '100 Performance'
          - '100 Accessibility'
        technologies:
          - 'nextjs'
          - 'react'
          - 'typescript'
          - 'tailwind'
        release: '06.19'
        latestupdate: '06.19'
      slug: 'seviene'

    - title: 'F1 Race Position Tracker'
      description: 'Interactive visualisation of Formula 1 races, showing each driver’s position lap-by-lap with rich filtering options.'
      link: 'https://f1racepositiontracker.vercel.app/'
      images:
        - '@/assets/projects/f1racepositiontracker/project1.webp'
        - '@/assets/projects/f1racepositiontracker/project2.webp'
        - '@/assets/projects/f1racepositiontracker/project3.webp'
      details:
        summary: 'F1 Race Position Tracker lets fans explore every Formula 1 Grand Prix since 1950 in a dynamic line-chart. Built with Next.js 15 (App Router) and Recharts, it fetches live data from the Ergast API, caches it on the edge, and renders an interactive chart where users can focus on specific drivers or parts of the race. A clean Tailwind-powered UI and Radix UI components deliver a fast, accessible experience across devices.'
        characteristics:
          - 'Lap-by-lap line chart of driver positions'
          - 'Year and race selectors with server-side data fetching'
          - 'Driver and lap-range filters with instant updates'
          - 'Team-coloured lines and retirement markers'
          - 'Edge-cached API requests (revalidate every 7 days)'
          - 'Fully responsive, keyboard-accessible UI'
        performance:
          - '100 SEO'
          - '100 Best Practices'
          - '81 Performance'
          - '100 Accessibility'
        technologies:
          - 'nextjs'
          - 'react'
          - 'typescript'
          - 'tailwind'
        release: '05.21'
        latestupdate: '05.21'
      slug: 'f1racepositiontracker'

    - title: 'RandomPong'
      description: 'Pong, but Multiplayer only and with random match-making.'
      link: 'https://random-pong-frontend.vercel.app/'
      images:
        - '@/assets/projects/randompong/project1.webp'
        - '@/assets/projects/randompong/project2.webp'
        - '@/assets/projects/randompong/project3.webp'
      details:
        summary: 'RandomPong is a modern multiplayer implementation of the classic Pong game, featuring real-time gameplay with random matchmaking. Built with React and Socket.IO, it offers a gaming experience where players can challenge random opponents. The game features smooth paddle controls, real-time ball physics, and a clean minimalist design, all while maintaining the classic Pong gameplay mechanics.'
        characteristics:
          - 'Real-time multiplayer with Socket.IO'
          - 'Random matchmaking system'
          - '60 FPS game loop with HTML5 Canvas'
          - 'Responsive controls with keyboard input'
          - 'Clean and minimalist UI design'
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
      description: 'YouTube Subscription Manager built with Next.js.'
      link: 'https://www.youtube.com/watch?v=SYh2Suvz93s&ab_channel=GuzH'
      images:
        - '@/assets/projects/ybsubscriptions/project1.webp'
        - '@/assets/projects/ybsubscriptions/project2.webp'
        - '@/assets/projects/ybsubscriptions/project3.webp'
      details:
        summary: 'YouTube Subs Manager is a full-featured web application that allows users to organize their YouTube subscriptions into custom feeds. The app uses Next.js for optimal performance with Server Side Rendering and React for a dynamic user interface. Users can sync their YouTube subscriptions, create custom feeds with their selected channels, and view the latest videos from each feed with filtering options by type (all, videos, shorts, livestreams) and status (watched, unwatched). The app implements optimistic updates for a smooth and fast user experience, infinite scrolling to load more videos seamlessly, and a smart caching system using TanStack Query.'
        characteristics:
          - 'Deployed on Vercel'
          - 'Uses SSR (Server Side Rendering)'
          - 'Skeleton Loading (Server and Client)'
          - 'Supabase Auth & DB'
          - 'Custom feed system'
          - 'Infinite pagination with TanStack Query'
          - 'Optimistic Updates with TanStack Query'
          - 'Caching with TanStack Query'
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
      description: 'Shopify Ecommerce for MGM Group.'
      link: 'https://mgmtienda.com/'
      images:
        - '@/assets/projects/mgmtienda/project1.webp'
        - '@/assets/projects/mgmtienda/project2.webp'
        - '@/assets/projects/mgmtienda/project3.webp'
      details:
        summary: 'MGM Market website is a Shopify E-Commerce website, which provides efficient management of product catalogs, payment processing, and shipping options. Its responsive design ensures an optimal user experience across both desktop and mobile devices, facilitating intuitive navigation through categories such as headphones, microphones, speakers, and smartwatches. Additional features like user account management, and dynamic shopping carts, enhance customer interaction and retention.'
        characteristics:
          - 'E-Commerce.'
          - 'Fully responsive.'
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
      description: 'Mobile app for tracking soccer matches and personal performance statistics.'
      link: 'https://play.google.com/store/apps/details?id=com.guzh09.mifulbov2'
      images:
        - '@/assets/projects/mifulbo/project1.webp'
        - '@/assets/projects/mifulbo/project2.webp'
        - '@/assets/projects/mifulbo/project3.webp'
      details:
        summary: 'MiFulbo is a mobile app built with React Native and Expo that enables users to log and analyze their soccer matches and performance through a visually appealing and intuitive interface. It features personalized statistics with interactive charts, match management tools, and secure user authentication.'
        characteristics:
          - 'Add, edit, delete, and view soccer matches.'
          - 'Personalized performance statistics with pie charts and general stats.'
          - 'Secure authentication using Supabase.'
        performance:
          - 'Fast and responsive UI optimized for mobile devices.'
          - 'Efficient data syncing with Supabase for real-time updates.'
          - 'Minimal app size with optimized assets and images.'
          - 'Reliable authentication flow for password resets and login.'
        technologies:
          - 'react'
          - 'tailwind'
          - 'supabase'
          - 'js'
        release: '01.25'
        latestupdate: '01.25'
      slug: 'mifulbo'

    - title: 'Play Safe AR'
      description: 'Static Site With Astro Framework, and Tailwind.'
      link: 'https://playsafe.ar/'
      images:
        - '@/assets/projects/playsafe/project1.webp'
        - '@/assets/projects/playsafe/project2.webp'
        - '@/assets/projects/playsafe/project3.webp'
      details:
        summary: 'Play Safe is a fully responsive static website dedicated to sports care, injury prevention, performance improvement, and quality products for athletes. Built with HTML, JavaScript, and Tailwind CSS, it is seamlessly integrated with Sanity CMS to allow effortless content management. The site leverages Webhooks and GitHub Actions to automatically trigger rebuilds whenever content is updated in Sanity CMS, ensuring that changes are reflected in real time.'
        characteristics:
          - 'Landing Page.'
          - 'Fully responsive.'
          - 'SanityCMS Included.'
          - 'Scroll animations.'
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
      description: 'Static Site With Astro Framework, and Tailwind.'
      link: 'https://pomberitoweb.vercel.app/'
      images:
        - '@/assets/projects/pomberito/project1.webp'
        - '@/assets/projects/pomberito/project2.webp'
        - '@/assets/projects/pomberito/project3.webp'
      details:
        summary: 'Unofficial static website for "Pomberito" an Argentine indie video game developed by Lara The Pitbull. Made with HTML, JavaScript, and Tailwind. It is fully responsive and includes YouTube embeds, and a Carousel without affecting performance. All elements were designed to resemble the game UI.'
        characteristics:
          - 'Home and 404 page.'
          - 'Fully responsive.'
          - 'Developed in Spanish and English.'
          - 'Includes Flowbite for Carousel effects.'
          - 'Includes lite-youtube-embed for YouTube videos.'
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
      description: 'Static Site With Astro Framework, and Tailwind.'
      link: 'https://thepathintotheabyssweb.vercel.app/'
      images:
        - '@/assets/projects/thepathintotheabyss/project1.webp'
        - '@/assets/projects/thepathintotheabyss/project2.webp'
        - '@/assets/projects/thepathintotheabyss/project3.webp'
      details:
        summary: 'Unofficial static website for "The Path Into The Abyss", an Argentine video game in development by Matias Rispau, based on the Argentine movie "The Abyss". Contains a Parallax Effect at the Home page developed purely with CSS. Made with HTML, JavaScript, and Tailwind. It is fully responsive and includes YouTube embeds, without affecting performance.'
        characteristics:
          - '3 pages plus 404 page.'
          - 'Fully responsive.'
          - 'Developed in Spanish and English.'
          - 'Includes AOS for scroll effects.'
          - 'Includes lite-youtube-embed for YouTube videos.'
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
      description: 'Static Site With Astro Framework, and Tailwind.'
      link: 'https://gauchosinmortalesweb.vercel.app/'
      images:
        - '@/assets/projects/gauchosinmortales/project1.webp'
        - '@/assets/projects/gauchosinmortales/project2.webp'
        - '@/assets/projects/gauchosinmortales/project3.webp'
      details:
        summary: 'Unofficial static website for "Gauchos Inmortales," an Argentine video game in development by RealiTeam. Uses HTML, JavaScript, and Tailwind. It is fully responsive, includes YouTube embeds, and a looping video as the background without affecting performance.'
        characteristics:
          - '3 pages plus 404 page.'
          - 'Fully responsive.'
          - 'Includes AstroEmbedYouTube and fsLightBox.'
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
      description: 'SSR With Astro Framework, Tailwind and React.'
      link: 'https://guzhstore-astro.vercel.app/'
      images:
        - '@/assets/projects/astroecommerce/project1.webp'
        - '@/assets/projects/astroecommerce/project2.webp'
        - '@/assets/projects/astroecommerce/project3.webp'
      details:
        summary: 'Dynamic website for a fictional e-commerce, developed to integrate concepts from the Astro "storefront" e-commerce template. Uses Server-Side Rendering (SSR), includes endpoints to manage payments with Stripe, and uses astro:actions to fetch data. React is used for all dynamic components.'
        characteristics:
          - '3 pages plus 404 and 500 pages.'
          - 'Product detail page for each product.'
          - 'Dark and light theme.'
          - 'Fully responsive.'
          - 'Includes Stripe as a payment gateway.'
          - 'Includes Toastify for notifications.'
          - 'Uses Astro Endpoints.'
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
