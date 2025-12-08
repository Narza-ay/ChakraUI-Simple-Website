import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ChakraUIVuePlugin from '@chakra-ui/vue-next'

const app = createApp(App)
app.use(ChakraUIVuePlugin)
app.mount('#app')