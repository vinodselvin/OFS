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

function generateAndSaveImagesCombination(){
    
    var images = getImages();
    
    var tops = images.hasOwnProperty('Tops') && images.Tops && images.Tops.length > 0 ? getIndexes(images.Tops) : [];
    var bottoms = images.hasOwnProperty('Bottoms') && images.Bottoms && images.Bottoms.length > 0 ? getIndexes(images.Bottoms) : [];
    var footwears = images.hasOwnProperty('Footwear') && images.Footwear && images.Footwear.length > 0 ? getIndexes(images.Footwear) : [];

    var images_ids = [tops, bottoms, footwears];
    
    var combos = allPossibleCombinations(images_ids);
    
    console.log(combos);
}

function getIndexes(arr){
    
    var indexes = [];
    
    for(var x in arr){
        indexes.push(x);
    }
    
    return indexes;
}

function allPossibleCombinations(items, isCombination=false){
    // finding all possible combinations of the last 2 items
    // remove those 2, add these combinations
    // isCombination shows if the last element is itself part of the combination series
    if(items.length == 1){
       return items[0]
    }
    else if(items.length == 2){
       var combinations = []
       for (var i=0; i<items[1].length; i++){
           for(var j=0; j<items[0].length; j++){
               if(isCombination){
                   // clone array to not modify original array
                   var combination = items[1][i].slice();
                   combination.push(items[0][j]);
               }
               else{
                   var combination = [items[1][i], items[0][j]];
               }
               combinations.push(combination);
           }
       }
       return combinations
    }
    else if(items.length > 2){
       var last2 = items.slice(-2);
       var butLast2 = items.slice(0, items.length - 2);
       last2 = allPossibleCombinations(last2, isCombination);
       butLast2.push(last2)
       var combinations = butLast2;
       return allPossibleCombinations(combinations, isCombination=true)
    }
}