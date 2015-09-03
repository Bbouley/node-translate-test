// add scripts


$(document).on('ready', function() {
  console.log('sanity check!');


  url = "https://datamarket.accesscontrol.windows.net/v2/OAuth2-13/grant_type=client_credentials&client_id=" + id + "&client_secret=" + secret + "=&scope=http://api.microsofttranslator.com";

  $.ajax({
    url: url,
    method: 'post',
  }).done(function(data){
    console.log(data);
  });

});
