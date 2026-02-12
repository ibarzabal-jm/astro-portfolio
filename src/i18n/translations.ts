export const locales = ["es", "en", "pt"] as const;

export type Locale = (typeof locales)[number];

type TranslationSchema = {
  meta: { description: string; homeTitle: string; experienceTitle: string };
  nav: { home: string; experiences: string; projects: string; contact: string; downloadCv: string };
  sections: { experiences: string; projects: string; contact: string };
  home: { greeting: string; description: string; location: string; availability: string };
  contact: {
    infoTitle: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    whatsappText: string;
    contactLink: string;
    success: string;
    error: string;
  };
  projects: {
    viewProject: string;
    demoAriaLabel: string;
    list: Array<{ title: string; description: string }>;
  };
  timeline: { knowMore: string; current: string };
  experience: {
    current: string;
    responsibilities: string;
    achievements: string;
    technologies: string;
  };
  clipboard: { ariaLabel: string; success: string; error: string };
  footer: { madeWith: string; by: string; signatureAriaLabel: string };
  language: { label: string };
  accessibility: {
    menu: string;
    toggleTheme: string;
    github: string;
    linkedin: string;
    email: string;
    captionsSpanish: string;
  };
};

export const translations: Record<Locale, TranslationSchema> = {
  es: {
    meta: {
      description: "Portfolio de Juanma Ibarzabal Salles, frontend developer. Hecho con Astro.",
      homeTitle: "Juanma Ibarzabal | Portfolio",
      experienceTitle: "Experiencia en",
    },
    nav: {
      home: "Inicio",
      experiences: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCv: "Descargar CV",
    },
    sections: { experiences: "Experiencia", projects: "Proyectos", contact: "Contacto" },
    home: {
      greeting: "Hola, soy Juanma",
      description:
        "Soy un desarrollador web con más de {years} años de experiencia con React y Nextjs. Me gusta crear páginas web, con muchas funcionalidades y con bonitas interfaces.",
      location: "Buenos Aires, Argentina",
      availability: "Disponible para nuevos desafíos",
    },
    contact: {
      infoTitle: "Información de contacto",
      formTitle: "Envíame un email",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      whatsappText: "Hola Juanma, vi tu portfolio y me gustaría contactarte.",
      contactLink: "¿Te gustaría ser el siguiente? 😉",
      success: "¡Mensaje enviado con éxito!",
      error:
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o ponte en contacto conmigo por otro medio.",
    },
    projects: {
      viewProject: "Ver proyecto",
      demoAriaLabel: "Demostración del proyecto",
      list: [
        {
          title: "Aerolab Challenge",
          description:
            "Challenge de la empresa Aerolab para el puesto Frontend Developer, realizado con Nextjs (app router), Typescript, Css Modules.",
        },
        {
          title: "Buscaminas",
          description: "Clásico juego de buscaminas, realizado con React.js, Css y Typescript.",
        },
        {
          title: "NeonGiphy Search",
          description:
            "Buscador de gifs con estilo Neon, realizado con Next.js y Typescript. Está inactivo temporalmente por coste de Vercel.",
        },
        {
          title: "Juanma Pokedex",
          description:
            "Desafío 5 de DevOff: una Pokedex hecha en React.js utilizando Chakra-UI y la API de pokeapi.co.",
        },
      ],
    },
    timeline: { knowMore: "Saber más", current: "Actualidad" },
    experience: {
      current: "Actualidad",
      responsibilities: "Responsabilidades:",
      achievements: "Logros:",
      technologies: "Tecnologías utilizadas:",
    },
    clipboard: {
      ariaLabel: "Copiar al portapapeles",
      success: "¡Copiado al portapapeles!",
      error: "Error al copiar el texto",
    },
    footer: { madeWith: "Hecho con", by: "por", signatureAriaLabel: "Firma de Juanma Ibarzabal" },
    language: { label: "Idioma" },
    accessibility: {
      menu: "Menú",
      toggleTheme: "Cambiar tema",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      captionsSpanish: "Español",
    },
  },
  en: {
    meta: {
      description: "Portfolio of Juanma Ibarzabal Salles, frontend developer. Built with Astro.",
      homeTitle: "Juanma Ibarzabal | Portfolio",
      experienceTitle: "Experience at",
    },
    nav: {
      home: "Home",
      experiences: "Experience",
      projects: "Projects",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    sections: { experiences: "Experience", projects: "Projects", contact: "Contact" },
    home: {
      greeting: "Hi, I'm Juanma",
      description:
        "I'm a web developer with more than {years} years of experience with React and Nextjs. I enjoy building websites with lots of features and beautiful interfaces.",
      location: "Buenos Aires, Argentina",
      availability: "Open to new challenges",
    },
    contact: {
      infoTitle: "Contact information",
      formTitle: "Send me an email",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      whatsappText: "Hi Juanma, I saw your portfolio and I would like to contact you.",
      contactLink: "Would you like to be next? 😉",
      success: "Message sent successfully!",
      error:
        "There was an error sending your message. Please try again or contact me through another channel.",
    },
    projects: {
      viewProject: "View project",
      demoAriaLabel: "Project demo",
      list: [
        {
          title: "Aerolab Challenge",
          description:
            "Aerolab challenge for a Frontend Developer role, built with Nextjs (app router), Typescript and CSS Modules.",
        },
        {
          title: "Minesweeper",
          description: "Classic Minesweeper game built with React.js, CSS and Typescript.",
        },
        {
          title: "NeonGiphy Search",
          description:
            "Neon-style GIF search engine built with Next.js and Typescript. It is temporarily offline due to Vercel costs.",
        },
        {
          title: "Juanma Pokedex",
          description:
            "DevOff challenge #5: a Pokedex built with React.js, Chakra-UI, and pokeapi.co.",
        },
      ],
    },
    timeline: { knowMore: "Learn more", current: "Present" },
    experience: {
      current: "Present",
      responsibilities: "Responsibilities:",
      achievements: "Achievements:",
      technologies: "Technologies used:",
    },
    clipboard: {
      ariaLabel: "Copy to clipboard",
      success: "Copied to clipboard!",
      error: "Error while copying text",
    },
    footer: { madeWith: "Made with", by: "by", signatureAriaLabel: "Juanma Ibarzabal signature" },
    language: { label: "Language" },
    accessibility: {
      menu: "Menu",
      toggleTheme: "Toggle theme",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      captionsSpanish: "Spanish",
    },
  },
  pt: {
    meta: {
      description: "Portfólio de Juanma Ibarzabal Salles, desenvolvedor frontend. Feito com Astro.",
      homeTitle: "Juanma Ibarzabal | Portfólio",
      experienceTitle: "Experiência na",
    },
    nav: {
      home: "Início",
      experiences: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      downloadCv: "Baixar CV",
    },
    sections: { experiences: "Experiência", projects: "Projetos", contact: "Contato" },
    home: {
      greeting: "Olá, eu sou Juanma",
      description:
        "Sou um desenvolvedor web com mais de {years} anos de experiência com React e Nextjs. Gosto de criar sites com muitos recursos e interfaces bonitas.",
      location: "Buenos Aires, Argentina",
      availability: "Disponível para novos desafios",
    },
    contact: {
      infoTitle: "Informações de contato",
      formTitle: "Envie-me um e-mail",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      whatsappText: "Olá Juanma, vi seu portfólio e gostaria de entrar em contato.",
      contactLink: "Você gostaria de ser o próximo? 😉",
      success: "Mensagem enviada com sucesso!",
      error:
        "Ocorreu um erro ao enviar a mensagem. Tente novamente ou entre em contato comigo por outro canal.",
    },
    projects: {
      viewProject: "Ver projeto",
      demoAriaLabel: "Demonstração do projeto",
      list: [
        {
          title: "Desafio Aerolab",
          description:
            "Desafio da empresa Aerolab para vaga de Frontend Developer, feito com Nextjs (app router), Typescript e CSS Modules.",
        },
        {
          title: "Campo Minado",
          description: "Jogo clássico de campo minado, feito com React.js, CSS e Typescript.",
        },
        {
          title: "NeonGiphy Search",
          description:
            "Buscador de GIFs com estilo neon, feito com Next.js e Typescript. Está temporariamente offline por custo do Vercel.",
        },
        {
          title: "Juanma Pokedex",
          description:
            "Desafio 5 da DevOff: uma Pokedex feita em React.js usando Chakra-UI e a API pokeapi.co.",
        },
      ],
    },
    timeline: { knowMore: "Saiba mais", current: "Atual" },
    experience: {
      current: "Atual",
      responsibilities: "Responsabilidades:",
      achievements: "Conquistas:",
      technologies: "Tecnologias utilizadas:",
    },
    clipboard: {
      ariaLabel: "Copiar para a área de transferência",
      success: "Copiado para a área de transferência!",
      error: "Erro ao copiar o texto",
    },
    footer: {
      madeWith: "Feito com",
      by: "por",
      signatureAriaLabel: "Assinatura de Juanma Ibarzabal",
    },
    language: { label: "Idioma" },
    accessibility: {
      menu: "Menu",
      toggleTheme: "Alterar tema",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
      captionsSpanish: "Espanhol",
    },
  },
};
