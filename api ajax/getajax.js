// GET ajax
/*
$.ajax({
    url: 'https://www.googleapis.com/urlshortener/v1/url?key=',
    type: 'GET',
    data: { longUrl: "http://www.google.com/" },
    dataType: 'json',
    success(response) {
        console.log(response);
    },
    error(jqXHR, status, errorThrown) {
        $.ajax()
    }
});
*/
// --- {Détails} ---- //

// Include data for accessing Google APIs

const apiKey = 'AIzaSyBiWR4W_QJ1b-Q12HPN5AdkRQLBj1U1iCw';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
    const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
    $.ajax({
        url: urlToExpand,
        type: 'GET',
        dataType: 'json',
        success(response) {
            $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        },
        error(jqXHR, status, errorThrown) {
            console.log(jqXHR);
        }
    });
}

function shortenUrl() {
    const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = inputField.val();
    const data = JSON.stringify({ longUrl: urlToShorten });

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
        }
    };

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