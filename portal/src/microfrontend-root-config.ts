import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontend/appvuejs",
  app: () =>
    System.import(
      "@microfrontend/appvuejs"
    ),
  activeWhen: ['/appvue'],
});

registerApplication({
  name: "@microfrontend/appreactjs",
  app: () =>
    System.import(
      "@microfrontend/appreactjs"
    ),
  activeWhen: ['/appreact'],
});

registerApplication({
  name: "@microfrontend/appvuejs2",
  app: () =>
    System.import(
      "@microfrontend/appvuejs2"
    ),
    activeWhen: ['/appvue2'],
});


start({
  urlRerouteOnly: true,
});
