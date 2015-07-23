# varya.github.com

Social icons by Victor Gonzalez
http://www.iconarchive.com/show/so-smooth-social-icons-by-minisoft.es.html

## Install blog:

    npm install
    docpad run --env static

## Build static files

    ./node_modules/.bin/enb make --no-cache

## Deploy

    docpad deploy-ghpages --env static

## Run gemini

* Run selemium server
* Run phantom phantomjs --webdriver=4444
* Снять эталонные скриншоты:
  ./node_modules/gemini/bin/gemini gather --root-url http://varya.me tests/gemini-test.j
