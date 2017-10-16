console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function() {
    it('', function() {

        let structureOne = function() {

            async function shortenUrl() {
                const urlToShorten = $inputField.val();
                const urlWithKey = url + '?key=' + apiKey;
                try {
                    let response = await fetch(urlWithKey, {
                        method: 'POST',
                        body: JSON.stringify({ longUrl: urlToShorten }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (response.ok) {
                        let jsonResponse = await response.json();
                        $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
                        return jsonResponse;
                    }
                } catch (error) {
                    console.log(error)
                }
            }

        };
        let isMatchOne = Structured.match(code, structureOne);

        assert.isOk(isMatchOne, 'Did you delete console.log() and replace it with the code from the instructions?');

    });
});