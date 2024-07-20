export default {
  config: {
    locales: ["pt-BR"],
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary500: "#b91b7a",
          primary600: "#F231A5",
          primary700: "#F231A5",
          secondary500: "#3CD3C1",
          secondary600: "#8cccc5",
          secondary700: "#ace4dd",
          alternative500: "#FF725F",
          alternative600: "#fc9a8d",
          alternative700: "#f5bbb3",
          buttonPrimary500: "#49c7b8",
          buttonPrimary600: "#3CD3C1",
        },
      },
      // overwrite dark theme properties
      dark: {
        colors: {
          primary100: "#242966",
          primary200: "#242966",
          primary500: "#b91b7a",
          primary600: "#F231A5",
          primary700: "#F231A5",
          neutral0: "#080c38",
          neutral100: "#06092B",
          neutral150: "#1C204C",
          neutral200: "#1C204C",
          secondary100: "#06092B",
          secondary200: "#06092B",
          secondary500: "#3CD3C1",
          secondary600: "#8cccc5",
          secondary700: "#ace4dd",
          alternative100: "#242966",
          alternative200: "#06024296692B",
          alternative500: "#FF725F",
          alternative600: "#fc9a8d",
          alternative700: "#f5bbb3",
          buttonPrimary500: "#49c7b8",
          buttonPrimary600: "#3CD3C1",
        },
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Won Games",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.title": "Welcome to Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap(app: any) {
    console.log(app);
  },
};
