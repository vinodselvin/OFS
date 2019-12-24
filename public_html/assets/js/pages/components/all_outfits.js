//Vue.use(VueMaterial.default)

var AllOutfits = Vue.component('AddNewOutfit', {
  data: function () {
        return {
            dress_image_list: getImages()
        }
  },
  mounted() {
      var script = document.createElement('script');
      script.setAttribute('src', 'https://vinodselvin.github.io/Kombu-Image-Previewer/image-previewer.js');
      document.head.appendChild(script);
  },
  template: `
        <div>
          <div class="md-layout md-gutter md-alignment-center">
            <div v-for="(e_dress_image, e_dress_type) in dress_image_list" class="md-medium-size-100" style="width: 90%; padding-top: 20px;">
                <h1>{{ e_dress_type }}</h1>
                <img v-for="e_dress_image_src in e_dress_image" :src="e_dress_image_src" class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 dress_image _img_tb_previewed"/>
                
            </div>
          </div>
        </div>`,
    methods: {
        
    }
});

export  {AllOutfits};