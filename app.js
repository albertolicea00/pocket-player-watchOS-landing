/* ═══════════════════════════════════════════════════
   PocketPlayer Landing — Alpine app + i18n
   app.js must load BEFORE Alpine (no defer here),
   Alpine loads with defer so app() is already defined.
═══════════════════════════════════════════════════ */

/* ── i18n dictionaries ───────────────────────────── */
const TRANSLATIONS = {
  es: {
    nav: {
      features: 'Funciones',
      how:      'Cómo funciona',
      manual:   'Manual',
      faq:      'FAQ',
      roadmap:  'Roadmap',
      notify:   'Avísame',
    },
    hero: {
      badge:  '🚀 Open Source · Beta pública en GitHub',
      title1: 'Tu música en',
      title2: 'el Apple Watch',
      sub:    'PocketPlayer reproduce tus canciones directamente desde el reloj, sin necesidad de llevar el iPhone. Transfiere archivos desde iCloud o tu dispositivo y disfruta de la música en completa libertad.',
      cta1:   'Ver en GitHub',
      cta2:   'Avísame cuando salga',
      scroll: 'Descubre más',
    },
    preview: {
      tag:    'Vista previa',
      title:  'Diseñado para tu muñeca',
      sub:    'Una interfaz limpia y familiar tanto en el iPhone como en el Apple Watch.',
      iphone: 'App iPhone (Companion)',
      watch:  'App Apple Watch',
    },
    features: {
      tag:   'Funciones',
      title: 'Todo lo que necesitas, nada que sobre',
    },
    f: {
      f1: { t: 'Reproducción independiente',   d: 'Escucha música en el Apple Watch sin llevar el iPhone. Totalmente autónomo.' },
      f2: { t: 'Explorador de archivos',        d: 'Interfaz tipo Finder para gestionar tu biblioteca de música en el reloj.' },
      f3: { t: 'iCloud Drive',                  d: 'Detecta automáticamente archivos de audio en tu carpeta de iCloud. Fácil sincronización.' },
      f4: { t: 'Compresión de audio',           d: 'Convierte y comprime canciones a AAC/MP3 en el iPhone antes de transferirlas.' },
      f5: { t: 'Privacidad total',              d: 'Sin cuentas, sin servidores externos. Todo queda en tu sandbox local.' },
      f6: { t: 'Indicador de almacenamiento',   d: 'Monitoriza el espacio disponible en el Watch en tiempo real.' },
    },
    cando: {
      tag:   '¿Qué puedes hacer?',
      title: 'Tu música, tus reglas',
      sub:   'PocketPlayer te da control total sobre lo que escuchas y cómo lo escuchas.',
      items: [
        'Reproducir MP3 y M4A en el Apple Watch sin iPhone',
        'Transferir canciones desde iCloud Drive',
        'Usar el selector de archivos de iOS para importar cualquier audio',
        'Ver la lista de canciones y gestionar la biblioteca',
        'Eliminar canciones con deslizar',
        'Ver el espacio disponible en el reloj',
        'Recibir notificaciones cuando llega una canción nueva',
        'Reproducir en segundo plano mientras usas otras apps del Watch',
      ],
    },
    how: {
      tag:   '¿Cómo funciona?',
      title: 'En 5 pasos simples',
      steps: [
        { t: 'Instala la app',         d: 'Clona el repositorio de GitHub y abre el proyecto en Xcode. Instala la app en tu iPhone y Apple Watch via Xcode o TestFlight.' },
        { t: 'Importa tu música',      d: 'Abre la app en el iPhone y accede a tus archivos de iCloud Drive o usa el selector de documentos para importar canciones desde cualquier fuente.' },
        { t: 'Transfiere al Watch',    d: 'Pulsa el botón de transferencia junto a cada canción. La app comprime el audio y lo envía via WCSession al Apple Watch.' },
        { t: 'Reproduce en el Watch',  d: 'Abre PocketPlayer en el Watch. Verás tu biblioteca. Toca una canción para reproducirla directamente desde el reloj.' },
        { t: 'Disfruta sin límites',   d: 'Deja el iPhone en casa. Sal a correr, ir al gimnasio o cualquier actividad. Tu música te acompaña en la muñeca.' },
      ],
    },
    manual: {
      tag:   'Manual de usuario',
      title: 'Cómo usar PocketPlayer',
      sub:   'Guía paso a paso para sacar el máximo partido a la app.',
      sections: [
        {
          icon: '📲', title: 'Instalación desde GitHub',
          steps: [
            'Ve a github.com/albertolicea00/PocketPlayer y pulsa "Code → Clone".',
            'Abre el fichero PocketPlayer.xcodeproj en Xcode 15 o superior.',
            'Selecciona tu iPhone y Apple Watch como destinos de compilación.',
            'Pulsa ▶ en Xcode para compilar e instalar en los dispositivos.',
            'Acepta los permisos de acceso a archivos y WatchConnectivity en el iPhone.',
          ],
        },
        {
          icon: '🎵', title: 'Importar música en el iPhone',
          steps: [
            'Abre la app PocketPlayer en el iPhone.',
            'Toca el botón "+" en la barra superior para abrir el selector de documentos.',
            'Navega a iCloud Drive, Archivos o cualquier app compatible y selecciona un archivo MP3 o M4A.',
            'El archivo aparecerá en la lista "iCloud / Local Files".',
            'La app indicará el espacio libre disponible en el Apple Watch.',
          ],
        },
        {
          icon: '📡', title: 'Transferir canciones al Apple Watch',
          steps: [
            'En la lista de archivos del iPhone, pulsa el icono ↑ junto a la canción que quieres transferir.',
            'El proceso de compresión y transferencia comenzará automáticamente.',
            'Puedes ver el progreso en la sección "Transfers" de la app del iPhone.',
            'El Apple Watch mostrará una notificación cuando la canción llegue.',
            'Si la transferencia falla, revisa que el Watch esté en alcance Bluetooth.',
          ],
        },
        {
          icon: '🎧', title: 'Reproducir música en el Apple Watch',
          steps: [
            'Abre PocketPlayer en el Apple Watch (desde el menú de apps o el Dock).',
            'Verás la lista de canciones descargadas en el reloj.',
            'Toca cualquier canción para reproducirla inmediatamente.',
            'Usa los controles de reproducción: Play/Pause, anterior y siguiente.',
            'La reproducción continúa en segundo plano aunque bajes la muñeca.',
          ],
        },
        {
          icon: '🗑️', title: 'Gestionar y eliminar canciones',
          steps: [
            'En la biblioteca del Watch, desliza una canción hacia la izquierda.',
            'Aparecerá el botón rojo "Eliminar". Tócalo para borrar el archivo.',
            'El espacio se libera inmediatamente y se actualiza el indicador de almacenamiento.',
            'Desde el iPhone puedes ver el espacio libre en el Watch antes de transferir.',
          ],
        },
      ],
    },
    privacy: {
      tag:   'Privacidad',
      title: 'Tu música es solo tuya',
      items: [
        { icon: '🚫', t: 'Sin telemetría',         d: 'Ni análisis, ni datos enviados a servidores. Cero tracking.' },
        { icon: '📴', t: 'Sin internet requerido',  d: 'Funciona completamente offline. Solo necesitas Bluetooth para transferir.' },
        { icon: '🔓', t: 'Open Source',             d: 'Código 100% público en GitHub. Audita cada línea si quieres.' },
      ],
    },
    compat: {
      tag:         'Compatibilidad',
      title:       'Requisitos del sistema',
      formats:     'Formatos de audio',
      formatsNote: '* WAV y FLAC requieren conversión previa en el iPhone.',
      os:          'Sistema operativo',
    },
    adv: {
      tag:     'Ventajas',
      title:   'Por qué PocketPlayer',
      feature: 'Característica',
      similar: 'Apps similares que también puedes probar',
      rows: [
        { feature: 'Sin suscripción',              pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Archivos locales propios',      pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Sin internet en el Watch',      pocket: '✅', spotify: '❌', apple: '⚠️' },
        { feature: 'Reproducción en Watch',         pocket: '✅', spotify: '✅', apple: '✅' },
        { feature: 'Privacidad total',              pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Open Source',                  pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Catálogo de millones de songs', pocket: '❌', spotify: '✅', apple: '✅' },
      ],
    },
    similar: [
      { name: 'Spotify',       icon: '🎵', desc: 'Streaming con suscripción',  url: 'https://www.spotify.com' },
      { name: 'Podcast Guru',  icon: '🎙️', desc: 'Podcasts en Watch',          url: 'https://podcastguru.io' },
      { name: 'Musi',          icon: '🎶', desc: 'YouTube Music gratuito',      url: 'https://feelthemusi.com' },
    ],
    faq: {
      tag:   'Preguntas frecuentes',
      title: 'FAQ',
      items: [
        { q: '¿Necesito tener el iPhone cerca para reproducir música?',     a: 'No. Una vez transferidas las canciones al Apple Watch, puedes dejarlo en casa. PocketPlayer reproduce de forma completamente independiente.' },
        { q: '¿Cuántas canciones puedo guardar en el Watch?',               a: 'Depende del modelo. El Series 7/8/9 tiene entre 32 y 64 GB. Un MP3 a 128 kbps ocupa ~1 MB/min, así que caben cientos de canciones.' },
        { q: '¿Qué formatos de audio soporta?',                             a: 'MP3 y M4A/AAC de forma nativa. WAV y otros formatos requieren conversión previa en el iPhone (próximamente automática).' },
        { q: '¿Está disponible en la App Store?',                           a: 'Aún no. PocketPlayer está en beta pública. Para instalarlo necesitas clonar el repositorio y compilar en Xcode. Suscríbete para que te avisemos.' },
        { q: '¿Es gratis?',                                                 a: 'Sí, completamente gratis y open source bajo licencia MIT. Puedes usar, modificar y distribuir el código libremente.' },
        { q: '¿Consume mucha batería el Watch?',                            a: 'El consumo es similar a otras apps de reproducción. La optimización de batería es uno de los objetivos del roadmap.' },
        { q: '¿Puedo contribuir al proyecto?',                              a: 'Por supuesto. Lee el fichero CONTRIBUTING.md en el repositorio de GitHub para conocer las normas y cómo enviar un Pull Request.' },
      ],
    },
    road: {
      tag:      'Roadmap',
      title:    'Próximas funciones',
      done:     '✅ Hecho',
      upcoming: '🔜 Próximo',
      items: [
        { done: true,  period: 'v0.1', title: 'Core player en Watch',           desc: 'AVAudioPlayer con soporte en segundo plano.' },
        { done: true,  period: 'v0.1', title: 'Transferencia WCSession',         desc: 'Envío de archivos iPhone → Watch via WatchConnectivity.' },
        { done: true,  period: 'v0.1', title: 'Biblioteca con swipe-to-delete',  desc: 'Lista de canciones y eliminación por gesto.' },
        { done: true,  period: 'v0.1', title: 'iCloud Drive integration',        desc: 'Detección automática de archivos de audio.' },
        { done: false, period: 'v0.2', title: 'Conversión automática de audio',  desc: 'Convertir WAV/FLAC a AAC antes de transferir.' },
        { done: false, period: 'v0.2', title: 'Playlists',                       desc: 'Crear y gestionar listas de reproducción en el Watch.' },
        { done: false, period: 'v0.2', title: 'Búsqueda por nombre',             desc: 'Filtrar canciones rápidamente en la biblioteca.' },
        { done: false, period: 'v0.3', title: 'Google Drive',                    desc: 'Integración OAuth2 con Google Drive.' },
        { done: false, period: 'v0.3', title: 'App Store release',               desc: 'Distribución pública en la App Store de Apple.' },
      ],
    },
    notify: {
      betaTitle:   '¿La app no está lista todavía?',
      betaSub:     'PocketPlayer está en beta. Introduce tu email y te avisamos cuando esté disponible en la App Store o haya una actualización importante.',
      newsTitle:   'Newsletter',
      newsSub:     'Novedades, tutoriales y actualizaciones directamente en tu bandeja de entrada. Sin spam.',
      placeholder: 'tu@email.com',
      btn:         'Avísame',
      ok:          '✅ ¡Apuntado! Te avisaremos pronto.',
    },
    social: { title: 'Comunidad y redes sociales' },
    cta2: {
      title: '¿Listo para liberar tu música?',
      sub:   'Únete a la beta, prueba la app y ayúdanos a mejorarla con tu feedback.',
      note:  'Open Source · MIT License · Sin coste',
    },
    footer: {
      desc:    'App de música independiente para Apple Watch. Open Source bajo licencia MIT.',
      nav:     'Navegación',
      legal:   'Legal & contacto',
      contact: 'Contacto',
      issues:  'Reportar un bug',
      copy:    'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      features: 'Features',
      how:      'How it works',
      manual:   'Manual',
      faq:      'FAQ',
      roadmap:  'Roadmap',
      notify:   'Notify me',
    },
    hero: {
      badge:  '🚀 Open Source · Public beta on GitHub',
      title1: 'Your music on',
      title2: 'your Apple Watch',
      sub:    'PocketPlayer plays your songs directly from the watch, no iPhone needed. Transfer files from iCloud or your device and enjoy music with total freedom.',
      cta1:   'View on GitHub',
      cta2:   'Notify me when ready',
      scroll: 'Discover more',
    },
    preview: {
      tag:    'App preview',
      title:  'Designed for your wrist',
      sub:    'A clean, familiar interface on both the iPhone and Apple Watch.',
      iphone: 'iPhone App (Companion)',
      watch:  'Apple Watch App',
    },
    features: {
      tag:   'Features',
      title: "Everything you need, nothing you don't",
    },
    f: {
      f1: { t: 'Independent playback',     d: 'Listen to music on your Apple Watch without carrying the iPhone. Fully autonomous.' },
      f2: { t: 'File explorer',            d: 'Finder-like interface to manage your music library on the watch.' },
      f3: { t: 'iCloud Drive',             d: 'Automatically detects audio files in your iCloud folder. Easy sync.' },
      f4: { t: 'Audio compression',        d: 'Converts and compresses songs to AAC/MP3 on the iPhone before transfer.' },
      f5: { t: 'Full privacy',             d: 'No accounts, no external servers. Everything stays in your local sandbox.' },
      f6: { t: 'Storage indicator',        d: 'Monitor available space on the Watch in real time.' },
    },
    cando: {
      tag:   'What can you do?',
      title: 'Your music, your rules',
      sub:   'PocketPlayer gives you full control over what you listen to and how.',
      items: [
        'Play MP3 and M4A on Apple Watch without iPhone',
        'Transfer songs from iCloud Drive',
        'Use the iOS file picker to import any audio',
        'Browse your song list and manage the library',
        'Delete songs with a swipe',
        'See available storage on the watch',
        'Receive notifications when a new song arrives',
        'Play in background while using other Watch apps',
      ],
    },
    how: {
      tag:   'How it works',
      title: '5 simple steps',
      steps: [
        { t: 'Install the app',      d: 'Clone the GitHub repo and open the project in Xcode. Install the app on your iPhone and Apple Watch via Xcode or TestFlight.' },
        { t: 'Import your music',    d: "Open the iPhone app and browse your iCloud Drive files or use the document picker to import songs from any source." },
        { t: 'Transfer to Watch',    d: 'Tap the transfer button next to each song. The app compresses the audio and sends it via WCSession to the Apple Watch.' },
        { t: 'Play on Watch',        d: "Open PocketPlayer on the Watch. You'll see your library. Tap a song to play it directly from the watch." },
        { t: 'Enjoy without limits', d: 'Leave the iPhone at home. Go running, to the gym, or any activity. Your music is on your wrist.' },
      ],
    },
    manual: {
      tag:   'User manual',
      title: 'How to use PocketPlayer',
      sub:   'Step-by-step guide to get the most out of the app.',
      sections: [
        {
          icon: '📲', title: 'Installation from GitHub',
          steps: [
            'Go to github.com/albertolicea00/PocketPlayer and click "Code → Clone".',
            'Open PocketPlayer.xcodeproj in Xcode 15 or later.',
            'Select your iPhone and Apple Watch as build targets.',
            'Click ▶ in Xcode to build and install on your devices.',
            'Accept the file access and WatchConnectivity permissions on the iPhone.',
          ],
        },
        {
          icon: '🎵', title: 'Import music on the iPhone',
          steps: [
            'Open the PocketPlayer app on the iPhone.',
            'Tap the "+" button in the top bar to open the document picker.',
            'Browse iCloud Drive, Files or any compatible app and select an MP3 or M4A file.',
            'The file will appear in the "iCloud / Local Files" list.',
            'The app shows available free space on the Apple Watch.',
          ],
        },
        {
          icon: '📡', title: 'Transfer songs to Apple Watch',
          steps: [
            'In the iPhone file list, tap the ↑ icon next to the song you want to transfer.',
            'The compression and transfer process will start automatically.',
            'You can see progress in the "Transfers" section of the iPhone app.',
            'The Apple Watch will show a notification when the song arrives.',
            'If the transfer fails, check that the Watch is in Bluetooth range.',
          ],
        },
        {
          icon: '🎧', title: 'Play music on Apple Watch',
          steps: [
            'Open PocketPlayer on the Apple Watch (from the app menu or Dock).',
            "You'll see the list of songs downloaded on the watch.",
            'Tap any song to play it immediately.',
            'Use playback controls: Play/Pause, previous and next.',
            'Playback continues in the background even when you lower your wrist.',
          ],
        },
        {
          icon: '🗑️', title: 'Manage and delete songs',
          steps: [
            'In the Watch library, swipe a song to the left.',
            'The red "Delete" button will appear. Tap it to remove the file.',
            'Space is freed immediately and the storage indicator updates.',
            'From the iPhone you can see available Watch space before transferring.',
          ],
        },
      ],
    },
    privacy: {
      tag:   'Privacy',
      title: 'Your music is yours alone',
      items: [
        { icon: '🚫', t: 'No telemetry',        d: 'No analytics, no data sent to servers. Zero tracking.' },
        { icon: '📴', t: 'No internet needed',   d: 'Works completely offline. Only Bluetooth to transfer.' },
        { icon: '🔓', t: 'Open Source',          d: '100% public code on GitHub. Audit every line if you want.' },
      ],
    },
    compat: {
      tag:         'Compatibility',
      title:       'System requirements',
      formats:     'Audio formats',
      formatsNote: '* WAV and FLAC require prior conversion on the iPhone.',
      os:          'Operating system',
    },
    adv: {
      tag:     'Advantages',
      title:   'Why PocketPlayer',
      feature: 'Feature',
      similar: 'Similar apps you might also like',
      rows: [
        { feature: 'No subscription',           pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Own local files',            pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'No internet on Watch',       pocket: '✅', spotify: '❌', apple: '⚠️' },
        { feature: 'Watch playback',             pocket: '✅', spotify: '✅', apple: '✅' },
        { feature: 'Full privacy',               pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Open Source',               pocket: '✅', spotify: '❌', apple: '❌' },
        { feature: 'Millions of songs catalog', pocket: '❌', spotify: '✅', apple: '✅' },
      ],
    },
    similar: [
      { name: 'Spotify',       icon: '🎵', desc: 'Streaming with subscription', url: 'https://www.spotify.com' },
      { name: 'Podcast Guru',  icon: '🎙️', desc: 'Podcasts on Watch',           url: 'https://podcastguru.io' },
      { name: 'Musi',          icon: '🎶', desc: 'Free YouTube Music',           url: 'https://feelthemusi.com' },
    ],
    faq: {
      tag:   'Frequently asked questions',
      title: 'FAQ',
      items: [
        { q: 'Do I need the iPhone nearby to play music?',  a: 'No. Once songs are transferred to the Apple Watch, you can leave the iPhone at home. PocketPlayer plays completely independently.' },
        { q: 'How many songs can I store on the Watch?',    a: 'It depends on your model. Series 7/8/9 has 32–64 GB. An MP3 at 128 kbps is ~1 MB/min, so hundreds of songs fit easily.' },
        { q: 'What audio formats are supported?',           a: 'MP3 and M4A/AAC natively. WAV and other formats require prior conversion on the iPhone (coming soon, automatically).' },
        { q: 'Is it on the App Store?',                     a: "Not yet. PocketPlayer is in public beta. To install it you need to clone the repo and build in Xcode. Subscribe to be notified." },
        { q: 'Is it free?',                                 a: 'Yes, completely free and open source under the MIT license. You can use, modify and distribute the code freely.' },
        { q: 'Does it drain the Watch battery?',            a: 'Consumption is similar to other playback apps. Battery optimization is one of the roadmap goals.' },
        { q: 'Can I contribute to the project?',            a: 'Absolutely. Read the CONTRIBUTING.md file in the GitHub repo to learn the guidelines and how to submit a Pull Request.' },
      ],
    },
    road: {
      tag:      'Roadmap',
      title:    'Upcoming features',
      done:     '✅ Done',
      upcoming: '🔜 Upcoming',
      items: [
        { done: true,  period: 'v0.1', title: 'Core Watch player',             desc: 'AVAudioPlayer with background execution support.' },
        { done: true,  period: 'v0.1', title: 'WCSession transfer',            desc: 'File sending iPhone → Watch via WatchConnectivity.' },
        { done: true,  period: 'v0.1', title: 'Library with swipe-to-delete',  desc: 'Song list and gesture deletion.' },
        { done: true,  period: 'v0.1', title: 'iCloud Drive integration',      desc: 'Auto-detection of audio files.' },
        { done: false, period: 'v0.2', title: 'Automatic audio conversion',    desc: 'Convert WAV/FLAC to AAC before transfer.' },
        { done: false, period: 'v0.2', title: 'Playlists',                     desc: 'Create and manage playlists on the Watch.' },
        { done: false, period: 'v0.2', title: 'Search by name',                desc: 'Filter songs quickly in the library.' },
        { done: false, period: 'v0.3', title: 'Google Drive',                  desc: 'OAuth2 integration with Google Drive.' },
        { done: false, period: 'v0.3', title: 'App Store release',             desc: 'Public distribution on the Apple App Store.' },
      ],
    },
    notify: {
      betaTitle:   'App not ready yet?',
      betaSub:     "PocketPlayer is in beta. Enter your email and we'll notify you when it's on the App Store or there's a major update.",
      newsTitle:   'Newsletter',
      newsSub:     'News, tutorials and updates straight to your inbox. No spam.',
      placeholder: 'your@email.com',
      btn:         'Notify me',
      ok:          "✅ Saved! We'll notify you soon.",
    },
    social: { title: 'Community & social media' },
    cta2: {
      title: 'Ready to free your music?',
      sub:   'Join the beta, try the app and help us improve it with your feedback.',
      note:  'Open Source · MIT License · No cost',
    },
    footer: {
      desc:    'Independent music app for Apple Watch. Open Source under MIT license.',
      nav:     'Navigation',
      legal:   'Legal & contact',
      contact: 'Contact',
      issues:  'Report a bug',
      copy:    'All rights reserved.',
    },
  },
}

/* ── Alpine component ────────────────────────────── */
function app() {
  return {
    /* state */
    dark: true,
    lang: 'es',
    notifyEmail: '',
    notifyOk: false,
    newsletterEmail: '',
    newsletterOk: false,

    /* i18n helper — resolves dot-separated keys */
    t(key) {
      const dict = TRANSLATIONS[this.lang] || TRANSLATIONS.es
      return key.split('.').reduce((o, k) => (o != null ? o[k] : undefined), dict) ?? key
    },

    toggleLang() {
      this.lang = this.lang === 'es' ? 'en' : 'es'
    },

    /* form handlers — wire up to your backend / Mailchimp here */
    submitNotify() {
      // TODO: POST to /api/notify  { email: this.notifyEmail }
      this.notifyOk = true
      this.notifyEmail = ''
    },
    submitNewsletter() {
      // TODO: POST to /api/newsletter  { email: this.newsletterEmail }
      this.newsletterOk = true
      this.newsletterEmail = ''
    },

    /* nav links */
    get navItems() {
      const d = TRANSLATIONS[this.lang]
      return [
        { href: '#features',     label: d.nav.features },
        { href: '#howto',        label: d.nav.how },
        { href: '#manual',       label: d.nav.manual },
        { href: '#faq',          label: d.nav.faq },
        { href: '#roadmap',      label: d.nav.roadmap },
        { href: '#notify',       label: d.nav.notify },
      ]
    },

    /* features cards */
    get features() {
      const f = TRANSLATIONS[this.lang].f
      return [
        { icon: '⌚', ...f.f1 },
        { icon: '📁', ...f.f2 },
        { icon: '☁️', ...f.f3 },
        { icon: '🗜️', ...f.f4 },
        { icon: '🔒', ...f.f5 },
        { icon: '💾', ...f.f6 },
      ]
    },

    /* manual sections — add open flag */
    get manualSections() {
      return (TRANSLATIONS[this.lang].manual.sections || []).map(s => ({ ...s, open: false }))
    },

    /* faq items — add open flag */
    get faqItems() {
      return (TRANSLATIONS[this.lang].faq.items || []).map(i => ({ ...i, open: false }))
    },

    /* footer year */
    get year() {
      return new Date().getFullYear()
    },
  }
}
