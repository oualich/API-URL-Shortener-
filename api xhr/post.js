// requests 2 POST
/*
const xhr = new XMLHttpRequest('json');
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({ id: '200' });
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
    }
}
xhr.open('POST', url);
xhr.send(data);
*/
// --- {Détails} ---- //

// Include data for accessing Google APIs

const apiKey = 'AIzaSyBiWR4W_QJ1b-Q12HPN5AdkRQLBj1U1iCw';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {

}

function shortenUrl() {
    const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = $inputField.val();
    const data = JSON.stringify({ longUrl: urlToShorten });
    const xhr = new XMLHttpRequest('json');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
        }
    }
    xhr.open('POST', urlWithKey);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function expand() {
    $responseField.empty();
    expandUrl();
    return false;
}

function shorten() {
    $responseField.empty();
    shortenUrl();
    return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);