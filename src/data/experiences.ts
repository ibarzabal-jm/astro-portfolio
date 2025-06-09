export const experiences = {
  mercadoLibre: {
    endDate: new Date(),
    initDate: new Date("2024-11-04"),
    company: "Mercado Libre",
    title: "Software Engineer",
    location: "Argentina, Buenos Aires",
    url: "https://www.mercadolibre.com",
    logo: "mercadolibre",
    shortDescription:
      "Iniciando un nuevo desafío en la empresa más grande de latinoaméríca con esperanzas, sueños y desafios.",
    longDescription: "En construcción 🚧 , estoy escribiendo esto en mi 3er día recién.",
    responsibilities: ["Desarrollador y mantenimiento del CRM para +25k de representantes en el area de CX.", "Colaborador en el diseño, desarrolo y ejecucion del Admin para la configuración de dicho CRM y orquetación de los Microfrontends participantes"],
    technologies: ["React.js", "TypeScript", "Internal libraries"],
    color: "orange",
    achievements: ["Responsable de ejecucion de main features para el Admin del CRM", "Responsable de la ejecución del sistema de Search del mismo CRM"],
  },
  inventa: {
    endDate: new Date("2024-09-15"),
    initDate: new Date("2022-02-22"),
    company: "Inventa",
    title: "Frontend Software Engineer",
    location: "Brasil, São Paulo",
    logo: "inventa",
    shortDescription:
      "Comencé ayudando en el desarrollo de un marketplace B2B, y luego tuve la oportunidad de liderar el frontend del backoffice de Order Management, donde gestionábamos el seguimiento de pedidos utilizando Next.js 12 y TypeScript.  Con el tiempo pasé de no saber una palabra de portugués a hablarlo diariamente con mis compañeros, contribuyendo de forma significativa en el lanzamiento de nuevas funcionalidades.",
    responsibilities: [
      "Liderazgo técnico en el proyecto de Order Management.",
      "Implementación de nuevas funcionalidades transveersales a todo el frontend de la empresa.",
      "Colaboración en un equipo internacional, en inglés y portugués.",
      "Soporte de tickets de producción y resolución de incidencias (Jira).",
      "Participación en la guild de Frontends Developers de la empresa.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Chakra UI",
      "Zod",
      "React Hook Form",
      "React Query",
      "React Testing Library",
      "Jest",
      "Tanstack Query",
      "Tailwind CSS",
      "AWS S3",
      "Jira",
      "Github",
    ],
    color: "magenta",
    longDescription: `
    Empecé mi etapa en Inventa trabajando en el desarrollo de un Marketplace B2B exclusivo para personas jurídicas de Brasil (CNPJ). 
    Mi rol inicial se centró en crear una plataforma funcional y eficiente que cumpliera con las necesidades del sector empresarial.<br><br>

    Luego, tuve la oportunidad de liderar la creación y optimización de varios Backoffices, siendo el principal responsable del frontend del sistema de <b>Order Management</b>. 
    Allí, mi tarea consistió en desarrollar funcionalidades clave, como el listado de pedidos, el seguimiento de cada uno, la posibilidad de actualizar ítems en caso de faltantes, y gestionar cancelaciones o reaperturas de pedidos. 
    Además, implementé la opción de modificar las comisiones aplicables y mostrar detalles precisos sobre los pagos, tanto para vendedores como compradores, desglosando el costo de envío y otros aspectos financieros. 
    También incorporamos un sistema de comentarios para que el equipo de gestión pudiera dejar anotaciones y facilitar la comunicación interna respecto a cada pedido. 
    Desarrollamos módulos para la creación y gestión de compañías despachantes y un sistema de revisión y aprobación de pagos sujetos a revisiones por fraude, con detalles sobre los motivos de cada revisión.<br><br>

    Una de las características más importantes que implementamos fue el módulo de disputas, donde los compradores podían crear reclamos, como problemas con sus pedidos, y el vendedor podía aceptar o rechazar el reclamo, como tambien el equipo interno podía terminar resolviendo a favor del comprador,
    creando asi un módulo isolado que se pudiera usar en cualquiera de los proyectos.<br><br>

    Además del trabajo en <b>Order Management</b>, tuve el placer de trabajar en los proyectos de <b>Sales Agent</b> y <b>Vendors Portal</b>, involucrándome de lleno en todo lo relacionado con las disputas, devoluciones, carga de notas fiscales, comprobantes de entrega, y desglose de comisiones tanto para los agentes de ventas como para los vendedores. 
    También aseguré que el seguimiento de los pedidos fuera consistente con el Marketplace.<br><br>

    Cuando Order Management alcanzó una versión estable y sólida, me sumé al equipo de <b>Finance</b>, donde trabajé en la visualización de pagos, atrasos, sistema de créditos, y la administración de pagos a vendedores y agentes de ventas.<br><br>

    Un aspecto que destaco es la adaptación al idioma.  Si bien al principio trabajábamos en inglés, la transición a trabajar completamente en portugués me impulsó a aprender el idioma, permitiéndome integrarme plenamente en las reuniones
     y aportar con una visión clara al equipo.
  `,
    achievements: [
      "Lideré el desarrollo del frontend para el sistema de Order Management.",
      "Aprendí a hablar portugués.",
      "Componente isolado de disputas que fue utilizado en Backoffice, Marketplace, Vendors Portal y Sales Agent.",
      "Sin tener experiencia previa, pude entender el sistema financiero de Brasil y su sistema bancario.",
      "Utilicé Tanstack Query para optimizar el manejo de datos y mejore el rendimiento de la aplicación.",
    ],
  },
  cruce: {
    initDate: new Date("2021-04-05"),
    endDate: new Date("2022-02-02"),
    company: "Cruce",
    title: "Frontend Developer",
    url: "https://www.e-cruce.com/",
    location: "Argentina, Buenos Aires",
    logo: "cruce",
    shortDescription:
      "Mi primer trabajo en IT, donde fui el encargado del desarrollo, soporte y evolución de tiendas B2C principalemente, utilizando la plataforma Vtex. Con el tiempo pude liderar varios proyectos en donde tuve una comunicación directa con el cliente.",
    responsibilities: [
      "Desarrollo y mantenimiento de tiendas online B2C",
      "Implementación de diseños responsivos y optimización de rendimiento",
      "Gestión de proyectos y comunicación directa con clientes",
      "Integración de APIs y servicios de terceros",
      "Soporte y resolución de incidencias de producción",
    ],
    technologies: [
      "React.js",
      "React Classes",
      "Redux",
      "CSS Modules",
      "Sass",
      "JS",
      "Vtex",
      "React Hook Form",
      "Handlebars",
      "Gitlab",
    ],
    color: "blue",
    longDescription: `
    Cruce, o e-cruce, fue mi primera oportunidad formal en el mundo del desarrollo web, donde tuve la posibilidad de empezar a demostrar mi potencial como frontend developer. 
    Mi rol en la empresa se centraba en la creación, mantenimiento y desarrollo de sitios de e-commerce minoristas (B2C), utilizando la plataforma VTEX (antes del lanzamiento de VTEX IO).<br><br>

    Mi trabajo involucraba principalmente el uso de <b>React</b> y <b>CSS Modules</b>, aunque también tuve que manejar <b>Handlebars</b> y <b>JavaScript Vanilla</b> para el desarrollo del checkout y el sistema de notificaciones por email. 
    Era responsable de implementar muchas de las funcionalidades que los clientes finales requerían, como por ejemplo la creación de un módulo editable desde VTEX para un carrusel de ofertas o imágenes, la personalización del carrito de compras, la creación de menús, rutas, detalles de productos, listados de productos con paginación, y más.<br><br>

    A lo largo de mi tiempo en la empresa, fui parte de la mejora continua de hasta cinco tiendas: <b>Tienda NAP</b>, <b>Farmacias del Pueblo</b>, <b>ADT</b>, <b>ADT Chile</b> y <b>TV Compras</b>. 
    En cada una de ellas, mi trabajo consistía en mejorar lo que ya estaba creado, optimizar la performance, refactorizar código, reescribir funcionalidades, y adaptar el CMS para facilitar su uso por parte de los clientes. 
    Además, me encargaba de interactuar directamente con los clientes finales para entender sus necesidades, discutir la viabilidad de las propuestas, estimar tiempos de desarrollo, y garantizar que los resultados fueran los esperados.<br><br>

    Esta experiencia me permitió afianzar mis habilidades técnicas y ganar confianza en la interacción con clientes y la gestión de proyectos, lo que marcó el inicio de mi carrera como desarrollador web.
  `,
    achievements: [
      "Encargado de atender a más de 5 tiendas online B2C",
      "Mejoré tiempos de carga, accesibilidad y performance",
      "Lideré la migración de una tienda de React Classes a React Hooks",
    ],
  },
};
