var coll = document.getElementsByClassName("menu");
  var i;
  
  for (i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function() {
      
      this.classList.toggle("active");

      var content = this.nextElementSibling;
      
      if (content.style.maxHeight){

        content.style.maxHeight = null;

      } 
      
      else {
        
        content.style.maxHeight = content.scrollHeight + "px";
      
      } 
    
    });

  } //[1]

/*
Referecnes: 

[1] Refnes Data. "How TO - Collapse" W3Schools website. Accessed: Jan. 13, 2024. [Online]. 
Available: https://www.w3schools.com/howto/howto_js_collapsible.asp.

*/