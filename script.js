$(document).ready(function(){
	 
	 //masque par défaut le tableau
	 $("#tab").hide();
	 
	  let i = 0
      while (i < 11) {
		 //recherche AJAX
		 $.ajax({
		  url:"https://pokeapi.co/api/v2/pokemon/"+i,
		  type:"GET",
		  
		  //en cas de succès : affiche les données dans #resultat
		  success: function(result){
		  //affiche le tableau	
		  $("#tab").show();
		  
		 
				let pokemon = result.name;
				
				//affiche les resultats dans un tableau
		  $("#tab_resultat").append("<tr><td>"+result.id+"</td><td>"+pokemon+"</td><td><img alt='"+pokemon+" image' src='"+result.sprites.front_default+"'/></td><td>"+result.types[0].type.name+"</td></tr>");
				
				console.log(pokemon);
			
		  },
		  
		  //en cas d'erreur : affiche une erreur dans la console 
		  error : function(error) {
			console.log(error);
		  },
		
	    });
		i++
	  }; //fin de la boucle.
	
  
  /*$(".btn").click(function(){
  
  $(".resultat").show();
  
    let search = $("#pokemon_search").val();

 

    $.ajax({
      url:"https://pokeapi.co/api/v2/pokemon/"+search+"",
      type:"GET",
      success: function(result){
      
      let i = 0
      while (i < result.types.length) {
            let type = result.types[i].type.name;
      			$("#types").append("<li>"+type+"</li>");
            i++
            console.log(type);
            };
        
        $('#resultat').html("<h2 class='align-self-center'>"+result.name+"</h2><img class='' alt='illustration "+result.name+"'src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+result.id+".png'></img>");
        $("#caract").html("<p>Weight : "+result.weight+"  Height : "+result.height+"</p>")
      },
      error : function(error) {
        console.log(error);
      },
    });

  });
  */
  
});