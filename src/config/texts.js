const texts = {
  'menuTitle': {
    en: 'On this site',
    ru: 'На этом сайте'
  },
  publishedOn: {
    en: 'Published on',
    ru: 'Опубликовано'
  },
  recentPostsTitle: {
    en: 'Recently in the blog',
    ru: 'Недавние заметки'
  },
  githubTitle: {
    en: 'Last updated repos',
    ru: 'Репозитории'
  }
}

module.exports = function(lang) {

    let texts4Lang = {}

    for (let key in texts) {
      texts4Lang[key] = texts[key][lang]
    }

    return texts4Lang

}
