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
    fetch(urlToExpand).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)).then(jsonResponse => {
        $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
        return jsonResponse;
    });
};


function shortenUrl() {

};

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