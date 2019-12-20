Vue.use(VueMaterial.default)

import { AddNewOutfit } from './components/add_new_outfit.js'

var app = new Vue({
    el: "#app",
    name: 'Reveal',
    data: () => ({
        menuVisible: false,
    }),
    methods: {
        
    },
    components: {
        'add-new-outfit' : AddNewOutfit
    }
});
