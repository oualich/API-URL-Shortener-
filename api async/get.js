 async function getData() {
     try {
         let response = await fetch('https://www.googleapis.com/urlshortener/v1/url');
         if (response.ok) {
             let jsonResponse = await response.json();
             return jsonResponse;
         }
         throw new Error('Request failed!');
     } catch (error) {
         console.log(error);
     }
 }

 // Include data for accessing Google APIs
 const apiKey = 'AIzaSyBiWR4W_QJ1b-Q12HPN5AdkRQLBj1U1iCw';
 const url = 'https://www.googleapis.com/urlshortener/v1/url';

 // Some page elements
 const $inputField = $('#input');
 const $expandButton = $('#expand');
 const $shortenButton = $('#shorten');
 const $responseField = $('#responseField');

 // AJAX functions

 async function expandUrl() {
     const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
     try {
         let response = await fetch(urlToExpand);
         if (response.ok) {
             let jsonResponse = await response.json();
             $responseField.append('<p> Your expanded URL is </p><p>' + jsonResponse.longUrl + '</p>');
             return jsonResponse;
         }
     } catch (error) {
         console.log(error);
     }
 }


 // Clear page and call AJAX functions
 function expand() {
     $responseField.empty();
     expandUrl();
     return false;
 };

 function shorten() {
     $responseField.empty();
     shortenUrl();
     return false;
 };

 $expandButton.click(expand);
 $shortenButton.click(shorten);