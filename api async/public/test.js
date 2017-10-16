console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function() {
    it('', function() {
        let structureOne = function() {
            function shortenUrl() {
                const urlWithKey = url + '?key=' + apiKey;
                const urlToShorten = $inputField.val();
                fetch(urlWithKey, {

                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        longUrl: urlToShorten
                    })
                });

            };
        };

        let isMatchOne = Structured.match(code, structureOne);
        assert.isOk(isMatchOne, 'Did you add the code from the instructions after the code from the previous step, separated by a comma?');
    });
});
$(document).ready(function() {
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop().slideDown("slow");
        },
        function() {
            $('.dropdown-menu', this).stop().slideUp("slow");
        });
});