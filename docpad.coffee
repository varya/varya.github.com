# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
languageRegex = /^(.+?)_(en|ru)$/
langs = [
    'en'
    'ru'
]
langBase = {
    'ru' : 'en',
    'en' : 'ru'
    }

fs = require('fs')
glob = require("glob")

docpadConfig = {

plugins:
    grunt:
        writeAfter: false
        generateAfter: ["bem", "copy"]
    moment:
        formats: [
            {raw: 'date', format: 'MMMM Do YYYY', formatted: 'humanDate'}
            {raw: 'date', format: 'YYYY-MM-DD', formatted: 'computerDate'}
        ]
    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'
    rss:
        default:
            collection: 'posts'
            url: '/feed.xml'
        posts_en:
            collection: 'posts_en'
            url: '/en/feed.xml'
        posts_ru:
            collection: 'posts_ru'
            url: '/ru/feed.xml'

templateData:

    cutTag: '<excerpt/>'

    site:
        langs: [
            'en',
            'ru'
        ]
        twitter:
            en: 'varya_en'
            ru: 'toivonens'
        github: 'varya'
        siteRoot:
            en: 'http://varya.me/'
            ru: 'http://varya.me/ru/'
        url: 'http://varya.me/'
        title: 'var ya; stepanova'
        description: 'Front end developer, blogger and cats lover.'
        author: 'Varya Stepanova'
        name:
            en: 'Varya Stepanova'
            ru: 'Варя Степанова'
        services:
            disqus: 'varya'

    i18n: (phrase) ->

        words =
            'On this site':
                ru: 'На этом сайте'
            'Follow me on twitter':
                ru: 'Читайте меня в Твиттере'
            'Published on':
                ru: 'Опубликовано'
            'Comments':
                ru: 'Обсуждение'
            'By the way':
                ru: 'Кстати'
            'Create a GitHub issue for me':
                ru: 'Создайте для меня issue на GitHub'
            "if you've spotted":
                en: " if you've spotted a typo or a mistake, or wish to add something on"
                ru: ', если вы заметили ошибку или хотите дополнить статью'
            'Recently in the blog':
                ru: 'Недавние заметки'

        if !words[phrase]
            return phrase

        return words[phrase][@document.lang] || phrase

    translationUrl: ->

        replaceLang = (str, lang) ->
            str.replace('/' + lang + '/', '/' + langBase[lang] + '/')

        p = @document.relativePath
            .replace(/\d{4}-\d{2}-\d{2}-/, '*')
            .replace('_' + @document.lang, '_' + langBase[@document.lang])
        hasTranslation = glob.sync('src/documents/'+ p).length

        if @document.basename == "index_en"
            return "/ru/"
        if @document.basename == "index_ru"
            return "/"
        if hasTranslation
            return replaceLang(@document.url, @document.lang)

    # Post part before “cut”
    cuttedContent: (content) ->
        if @hasReadMore content
            cutIdx = content.search @cutTag
            content[0..cutIdx-1]
        else
            content

    # Has “cut”?
    hasReadMore: (content) ->
        content and ((content.search @cutTag) isnt -1)

collections:
    posts: ->
        @getCollection("documents").findAllLive({
            relativeOutDirPath: 'posts'
        }, [{date:-1}])
    posts_en: ->
        @getCollection("documents").findAllLive({
            relativeOutDirPath: 'posts',
            basename: /_en$/
        }, [{date:-1}])
    posts_ru: ->
        @getCollection("documents").findAllLive({
            relativeOutDirPath: 'posts',
            basename: /_ru$/
        }, [{date:-1}])

    translate: (database) ->
        @getCollection('documents').findAllLive({basename: languageRegex}).on 'add', (document) ->
            a = document.attributes
            parts = a.basename.match(languageRegex)
            outPath = document.get('outPath')

            basename = parts[1]
            language = parts[2]

            document.set('lang', language)

            document.set('htmlTitle', document.get('htmlTitle') || document.get('title'))

            if outPath.indexOf('/pages/') != -1
                document.set('isPage', true)
                newOutPath = outPath
                    .replace('_' + language + '.html', '.html')
                    .replace('/pages/', '/' + language + '/')

                newUrl = "#{language}/#{basename}.#{a.outExtension}"
                if basename == 'index' && language == 'en'
                    newUrl = "#{basename}.#{a.outExtension}"

            if outPath.indexOf('/posts/') != -1
                document.set('isPost', true)
                newOutPath = outPath
                    .replace('_' + language + '.html', '.html')
                    .replace('/posts/', '/' + language + '/posts/')

                ownDate = basename.match(/^(\d{4})-(\d{2})-(\d{2})-/)
                if (ownDate)
                    basename = basename.replace(ownDate[0], '')
                    document.setMeta('date', new Date(ownDate[1], ownDate[2], ownDate[3]))

                if document.get('old')
                    a.relativeOutDirPath = 'issues'
                    a.disqusIdentifier = 'undefined';

                newUrl = "#{language}/#{a.relativeOutDirPath}/#{basename}.#{a.outExtension}"

            urls = ["/#{newUrl}"]

            document
                .setMetaDefaults({
                    #outPath: newOutPath,
                    url: urls[0]
                })
                .addUrl(urls)

    generated: () ->
        link2Old = (targetPath, targetFile, src) ->
            if !fs.existsSync(targetPath)
                fs.mkdirSync(targetPath)
            target = targetPath + '/' + targetFile
            if fs.existsSync(target)
                fs.unlinkSync(target)
            fs.linkSync(src, target)

        link2Old('./out/en/issues', 'index.html', './out/en/posts/index.html')
        link2Old('./out/ru/issues', 'index.html', './out/ru/posts/index.html')
        link2Old('./out/ru/issues/bem-tools-1.0.0-alpha', 'index.html', './out/ru/issues/bem-tools-100-alpha/index.html')

env: 'static'

}



# Export the DocPad Configuration
module.exports = docpadConfig
