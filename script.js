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
	
  
  //recherche + affichage resultat 
  
  $(".btn").click(function(){
  	//changement de css pour #resultat
	$("#main").css("opacity","1");
  
  //masque le tableau
  $(".tab").hide();
  
    let search = $("#pokemon_search").val();


    $.ajax({
      url:"https://pokeapi.co/api/v2/pokemon/"+search+"",
      type:"GET",
      success: function(result){
			
        $('#resultat').html("<div class='col-4'></div><div id='pokemon' class='col-4 text-center d-block mx-auto'><h2 class=''>"+result.name+"</h2><img class='img_pokemon text-center d-block mx-auto' alt='illustration "+result.name+"'src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+result.id+".png'></img><hr><p>Type principal : "+result.types[0].type.name+"</p><p>Poids : "+result.weight+"</p><p>Taille : "+result.height+"</p></div><div class='col-4'></div>");
       	$("#pokemon").css( "border", "black 0.5px solid" );
		

      },
      error : function(error) {
        console.log(error);
      },
    });

  });
  
});