// requests 1 GET
/* const xhr = new XMLHttpRequest('json');
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
    }
}
xhr.open('GET', url);
xhr.send();
*/
// --- {Détails} ---- //


// Include data for accessing Google APIs

const apiKey = 'AIzaSyBiWR4W_QJ1b-Q12HPN5AdkRQLBj1U1iCw';
const projection = "FULL";
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
    const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val() + '&projection=' + projection;
    const xhr = new XMLHttpRequest('json');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
        }
    }
}

function shortenUrl() {

}

function expand() {
    $responseField.empty();
    expandUrl();
    xhr.open('GET', urlToExpand);
    xhr.send();
    return true;

}

function shorten() {
    $responseField.empty();
    shortenUrl();
    return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);