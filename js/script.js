$(document).ready(function() { 
    
// Arrays
    var deliverablesVend = ["poster", "logo", "album cover", "illustration", "brochure", "website", "icons", "typography", "app", "isometric", "motion graphic", "map", "book cover"]
    
    var typeOfDesignVend = ["vector", "vector", "vector", "vector", "vector", "imagery", "imagery", "vector and imagery"]
    
    var colorInspirationVend = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "grey"]
    
    var colorPalatteVend = ["complimentary", "shades", "triad", "analogous", "tetrad"]
    
    var subjectVend = ["aquatic animal", "plant", "flower", "mammel", "reptile", "insect", "bird", "technology", "game", "cryptocurrency", "world problem", "awareness", "people", "transportation", "celebrities", "space"]
    
    var subject2Vend = ["aquatic animal", "plant", "flower", "mammel", "reptile", "insect", "bird", "technology", "game", "cryptocurrency", "world problem", "awareness", "people", "transportation", "celebrities", "space"]
    
  
$('h1').click(function(){
    $("#deliverables h2").text(deliverablesVend[Math.floor(Math.random() * (deliverablesVend.length - 0)) + 0]);
    $("#type-of-design h2").text(typeOfDesignVend[Math.floor(Math.random() * (typeOfDesignVend.length - 0)) + 0]);
    
    $("#color-inspiration h2").text(colorInspirationVend[Math.floor(Math.random() * (colorInspirationVend.length - 0)) + 0]);
    $("#color-palette h2").text(colorPalatteVend[Math.floor(Math.random() * (colorPalatteVend.length - 0)) + 0]);
    
    $("#subject h2").text(subject2Vend[Math.floor(Math.random() * (subjectVend.length - 0)) + 0]);
    $("#subject-2 h2").text(subject2Vend[Math.floor(Math.random() * (subject2Vend.length - 0)) + 0]);
    
    if($('h2').hasClass('hide-display')){
        $('h2').removeClass('hide-display');
        $('h2').addClass('show-display');
   }                                                     
});
    
    
}); // end jQuery