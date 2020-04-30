import LocalizedStrings from 'localized-strings';

const strings = new LocalizedStrings({
  en: {
    brand: {
      title: 'QAlfy',
      legend: 'Your secure browser in the cloud',
    },
    placeholder: {
      url: 'URL'
    },
    menu: {
      account: 'Account',
      logout: 'Logout'
    },
    tabs: {
      developers: 'For Developers',
      qa: 'For QA',
      corporate: 'For Corporate',
      anyone: 'For Anyone'
    },
    desc: {
      developers: [
        '<span style="color:#41b6d3">Collaborate</span> with your team by sharing the same browser session.',
        '<span style="color:#41b6d3">Debug</span> alone or with others. A fully compliant browser with dev tools integrated at your disposal.',
        '<span style="color:#41b6d3">Run code</span> and interact with others while using your application.',
        '<span style="color:#41b6d3">Absolute privacy</span> and platform <span style="color:#41b6d3">isolation</span>. You keep your resources.',
        '<span style="color:#41b6d3">Develop</span> custom <i>QAlfy</i> plugins and optimize your workflow considerably.'
      ],
      qa: [
        '<span style="color:#41b6d3">Record and Play</span> application interaction for later analysis.',
        '<span style="color:#41b6d3">Export</span> your recordings for use with popular testing libraries (Selenium, PhantomJS, etc).',
        '<span style="color:#41b6d3">Organize and share</span> your sessions with anyone so they can replay your actions and work right away under the exact same context to build a bug free application.',
        '<span style="color:#41b6d3">Run your existing tests</span> in a <i>QAlfy</i> session and forget about the boilerplate setup.'
      ],
      corporate: [
        'Make <i>QAlfy</i> the default Internet Gateway and <span style="color:#41b6d3">erradicate the dangers</span> of exposing your assets and infrastructure.',
        'With <u>absolute privacy</u> in mind, <span style="color:#41b6d3">take control</span> of what goes in and what goes out. When, how and where.',
        '<span style="color:#41b6d3">Free the resources up</span> by delegating bandwith usage and processing power to our highly secured servers.',
        '<span style="color:#41b6d3">Extend</span> the capabilities of <i>QAlfy</i> with plugins and customization. Extract the most potential out of your users\' browsing experience.'
      ],
      anyone: [
        '<span style="color:#41b6d3;font-weight:700">Customer Support:</span> provide live assistance to your customers by browsing together on the same tab.',
        '<span style="color:#41b6d3;font-weight:700">Family Assistance:</span> help your loved ones interact with a website or any complex form while you show them how to do it. It\'s like being sitted in front of their computers while they watch you do it.',
        '<span style="color:#41b6d3;font-weight:700">Personal Usage:</span> your browser is now in the Cloud. You keep your resources and bandwith untouched while at the same time, you get <u>absolute privacy</u>. Nothing is attached to your identity unless you allow that.',
      ]
    },
    email: 'Email Address',
    emailTip: 'We\'ll never share your email address',
    submit: 'Submit',
    subscribe: 'Subscribe now for the upcoming <b>BETA</b> version'
  },
  es: {
    brand: {
      title: 'QAlfy',
      legend: 'Su navegador seguro en la nube',
    },
    placeholder: {
      url: 'URL'
    },
    menu: {
      account: 'Cuenta',
      logout: 'Salir'
    },
    tabs: {
      developers: 'Para Developers',
      qa: 'Para QA',
      corporate: 'Para Empresas',
      anyone: 'Para Cualquiera'
    },
    desc: {
      developers: [
        '<span style="color:#41b6d3">Colabora</span> con tu equipo compartiendo la misma sesión.',
        '<span style="color:#41b6d3">Depura</span> por tu cuenta o con otras personas. Un navegador moderno en línea a tu disposición.',
        '<span style="color:#41b6d3">Ejecuta código</span> e interactúa con tu equipo mientras usan su aplicación.',
        '<span style="color:#41b6d3">Privacidad absoluta</span> y una plataforma <span style="color:#41b6d3">aislada</span>. Mantiene tus recursos a salvo.',
        '<span style="color:#41b6d3">Desarrolla</span> plugins <i>QAlfy</i> personalizados y optimiza tu trabajo considerablemente.'
      ],
      qa: [
        '<span style="color:#41b6d3">Graba y Reproduce</span> cualquier interacción para posterior análisis.',
        '<span style="color:#41b6d3">Exporta</span> tus grabaciones para ser usadas con librerias de testing populares (Selenium, PhantomJS, etc).',
        '<span style="color:#41b6d3">Organiza y comparte</span> tus sesiones con otras personas para que reproduzcan tus acciones en el mismo contexto.',
        '<span style="color:#41b6d3">Ejecuta tus tests</span> actuales en una sesión <i>QAlfy</i> y olvídate de tediosas configuraciones.'
      ],
      corporate: [
        'Convierta a <i>QAlfy</i> en la entrada a Internet por defecto y <span style="color:#41b6d3">elimine los peligros</span> de la exposición de los activos de la compañía y su infraestructura.',
        'Con la <u>privacidad absoluta</u> en mente, <span style="color:#41b6d3">tome control</span> de lo que ingresa y lo que sale. Cuándo, cómo y dónde.',
        '<span style="color:#41b6d3">Libere los recursos</span> delegando ancho de banda y poder de procesamiento a nuestros servidores de máxima seguridad.',
        '<span style="color:#41b6d3">Extienda</span> las capacidades de <i>QAlfy</i> con plugins personalizados. Aproveche al máximo el potencial en la experiencia de navegación de sus usuarios.'
      ],
      anyone: [
        '<span style="color:#41b6d3;font-weight:700">Atención al Cliente:</span> ofrezca asistencia en vivo navegando en la misma pestaña con su cliente.',
        '<span style="color:#41b6d3;font-weight:700">Asistencia Familiar:</span> ayude a sus seres queridos al utilizar aplicaciones o rellenar formularios complejos. Es como si estuviese sentado junto a ellos mostrándoles como hacerlo.',
        '<span style="color:#41b6d3;font-weight:700">Uso Personal:</span> tu navegador seguro en la nube. Tus recursos y ancho de banda liberados; al mismo tiempo obtenga <u>absoluta privacidad</u>. Nada se vincula a su identidad al menos que usted lo requiera.',
      ]
    },
    email: 'Correo Electrónico',
    emailTip: 'Nunca compartiremos su dirección de correo',
    submit: 'Enviar',
    subscribe: 'Subscríbase ahora para sumarse a la versión <b>BETA</b>'
  }
});

export default strings;