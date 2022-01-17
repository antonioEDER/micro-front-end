import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

//  function domElementGetter (): HTMLElement {
//   return document.querySelector("main#appreactjs")
// }

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // domElementGetter,
});

export const { bootstrap: _bootstrap, mount: _mount, unmount: _unmount } = lifecycles;

export async function bootstrap (props): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('init bootstrap ReactJS');
      resolve(_bootstrap(props))
    }, 500);
  });
}

export async function mount (props): Promise<any>  {
  console.log('init mount ReactJS');
  return await _mount(props);
}

export async function unmount (props): Promise<any>  {
  console.log('init unmount ReactJS');
  return await _unmount(props);
}
