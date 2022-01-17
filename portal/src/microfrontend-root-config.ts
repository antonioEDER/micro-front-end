import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@microfrontend/appvuejs",
  app: () =>
    System.import(
      "@microfrontend/appvuejs"
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
