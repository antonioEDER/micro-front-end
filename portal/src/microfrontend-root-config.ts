import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontend/appvuejs",
  app: () =>
    System.import(
      "@microfrontend/appvuejs"
    ),
  activeWhen: () => true,
});

registerApplication({
  name: "@microfrontend/appvuejs2",
  app: () =>
    System.import(
      "@microfrontend/appvuejs2"
    ),
    activeWhen: () => true,
});

registerApplication({
  name: "@microfrontend/appreactjs",
  app: () =>
    System.import(
      "@microfrontend/appreactjs"
    ),
  activeWhen: () => true,
});



start({
  urlRerouteOnly: true,
});
