 $("#search-button").click(function(){
     
  var  searchTerm = $('#search-term').val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
$.ajax({
   url:request_url,
   method: "get",
   success: function(response){
       //var url= response.data[0].images.original.url;
       //var url= response.data[2].images.original_still.url;
       
       var pic_url = response.data[0].images.original.url;
           $('body').append('<img src=' + pic_url + '>');
     //console.log(response);
       }
 })
  
 });
