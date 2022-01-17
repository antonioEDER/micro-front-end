import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecyle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});

export const _bootstrap = vueLifecycles.bootstrap;
export const _mount = vueLifecycles.mount;
export const _unmount = vueLifecycles.unmount;

export async function bootstrap (props) {
  return new Promise(resolve => {
    console.log('init bootstrap Vuejs');
    setTimeout(() => {
      resolve(_bootstrap(props))
    }, 500);
  });
}

export async function mount (props)  {
  console.log('init mount Vuejs');
  return await _mount(props);
}

export async function unmount (props)  {
  console.log('init unmount Vuejs');
  return await _unmount(props);
}
