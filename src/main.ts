import { createApp } from 'vue'
import { createPinia } from 'pinia'
6-crear-página-de-error-404
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
 main

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
 6-crear-página-de-error-404
})

});
 main

app.mount('#app')