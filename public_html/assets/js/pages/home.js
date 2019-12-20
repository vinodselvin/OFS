Vue.use(VueMaterial.default)

import { routes } from './routes.js'
import { AddNewOutfit } from './components/add_new_outfit.js'

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

var app = new Vue({
    el: "#app",
    name: 'Reveal',
    data: () => ({
        menuVisible: false,
    }),
    methods: {
        
    },
});


var new_app = new Vue({
  el: '#app_content',
  name: 'Reveal',
  data: () => ({
//    menuVisible: false,
    currentRoute: getQueryVariable('page')
  }),
  methods: {
    },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  components: {
        'add-new-outfit' : AddNewOutfit
    },
  render (h) { return h(this.ViewComponent) }
})
