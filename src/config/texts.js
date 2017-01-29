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
  },
  commentsTitle: {
    en: 'Comments',
    ru: 'Комментарии',
  },
  byTheWay: {
    en: 'By the way',
    ru: 'Кстати'
  },
  createIssue: {
    en: 'Create a GitHub issue for me',
    ru: 'Создайте для меня issue на GitHub'
  },
  spottedError: {
    en: ' if you\'ve spotted a typo or a mistake, or wish to add something on',
    ru: ', если вы заметили ошибку или хотите дополнить статью'
  },
  youCan: {
    en: 'Or you can ',
    ru: 'Или вы можете ',
  },
  editYorself: {
    en: 'edit this post yourself and make me a patch',
    ru: 'отредактировать пост самостоятельно и послать мне патч'
  }
}

module.exports = function(lang) {

    let texts4Lang = {}

    for (let key in texts) {
      texts4Lang[key] = texts[key][lang]
    }

    return texts4Lang

}
