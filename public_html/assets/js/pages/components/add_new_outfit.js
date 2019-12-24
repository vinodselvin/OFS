//Vue.use(VueMaterial.default)

var AddNewOutfit = Vue.component('AddNewOutfit', {
    data: function () {
    return {
        dress_type: null,
        dress_image: [],
        dress_image_list: getImages(),
    }
  },
  template: `
    <div>
        <md-field>
            <label for="dress_type">OutFits</label>
            <md-select v-model="dress_type" name="dress_type" id="dress_type">
                <md-option value="Tops" >Tops</md-option>
                <md-option value="Bottoms">Bottoms</md-option>
                <md-option value="Footwear">Footwear</md-option>
            </md-select>
        </md-field>
        <md-field><label>Upload Images</label><md-file v-on:change.native="saveImage" accept="image/*" multiple/></md-field>
        <md-button class="md-raised md-primary"  v-on:click.native="saveWears" >Save</md-button>
        <div class="md-layout md-gutter md-alignment-center">
            <div v-for="(e_dress_image, e_dress_type) in dress_image_list" class="md-medium-size-100" style="width: 90%; padding-top: 20px;">
                <h1>{{ e_dress_type }}</h1>
                <img v-for="e_dress_image_src in e_dress_image" :src="e_dress_image_src" class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100 dress_image _img_tb_previewed"/>
                
            </div>
        </div>
    </div>`,
    methods: {
        saveWears: function(event){
            var dress_type = this.dress_type;
            var dress = this.dress_image;
            
            if(dress_type && dress && dress.length > 0){
//                this.dress_image_list = dress;
                
                saveImages(dress_type, dress);
                this.dress_image_list = getImages();
            }
            else{
                alert('Please! Select all the required fields.');
            }
        },
        saveImage: function(event){
            
            this.dress_image = null;
            var all_files = [];
            var files = event.target.files;
            var reader = null;
            
            if(files.length > 0){
                Array.from(files).forEach(function(file){
                    reader = new FileReader();
                    reader.onload = (function(file) {
                      return function(e) {
                        var temp_img = (this.dress_image ? this.dress_image : []);
                        all_files.push(e.target.result);
                        this.dress_image = temp_img;
                      };
                    })(file);
                    reader.readAsDataURL(file);
                });
                
                this.dress_image = all_files;
            }
        }
    }
});

export  {AddNewOutfit};