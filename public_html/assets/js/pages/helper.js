/*
 * @Author: Vinod Selvin
 * @Desc: Store images in Localstorage
 */
function saveImages(dress_type, dress){
    
    var img_obj = localStorage.getItem('images_pool');
    img_obj = img_obj == null ? {} : JSON.parse(img_obj);
    
    //if file exists
    if(img_obj.hasOwnProperty(dress_type)){
        img_obj[dress_type] = img_obj[dress_type].concat(dress);
    }
    else{
        img_obj[dress_type] = dress;
    }
    
    localStorage.setItem('images_pool', JSON.stringify(img_obj));
}

/*
 * @Author: Vinod Selvin
 * @Desc: Get images from Localstorage
 */
function getImages(){
    
    var img_obj = localStorage.getItem('images_pool');
    img_obj = img_obj == null ? {} : JSON.parse(img_obj);
    
    return img_obj;
}


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  
  return "/";
}