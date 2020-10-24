```jsx
import { BlogComponent } from "./Blog.js";

const data = {
  posts: {
    edges: [
      {
        node: {
          excerpt:
            "Nested structures are useful for managing and editing. But when it comes to representation in UI, it might\nnot be trivial to iterate through…",
          fields: {
            slug: "blog/flatten-array-with-reduce/",
          },
          frontmatter: {
            title: "Flatten array with JavaScript reduce function",
            date: "01 June 2020",
            cover: {
              childImageSharp: {
                sizes: {
                  base64:
                    "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAe4188XQqKEXFf/EAB4QAAEDBAMAAAAAAAAAAAAAABIBAhEDFCFBIjEy/9oACAEBAAEFAt6ToalxmG+R5ioNSG//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAACAwEBAAAAAAAAAAAAAAAAARAREiJR/9oACAEBAAY/ApvXHkKzQ0JH/8QAGxABAQEBAQADAAAAAAAAAAAAAREAITFBYbH/2gAIAQEAAT8h63OeaNc3ln9dfWCpJgnyJ2ZoU8JLi5RUc/I4Tf/aAAwDAQACAAMAAAAQjMD8/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAEDAQE/EDaf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAECAQE/EIYf/8QAHhABAQACAgIDAAAAAAAAAAAAAREAITFBUaFxkcH/2gAIAQEAAT8QhWwCOLtN+sBIQxdvOCWIzi2Zy0TI7acfOTYJs2JhBGrwXuYeyF6n1giZtNG+PzOhq9M//9k=",
                  aspectRatio: 0.8513513513513513,
                  src:
                    "/static/d74aa486feb57818f4c5271cffcda76e/8f7df/thumb.jpg",
                  srcSet:
                    "/static/d74aa486feb57818f4c5271cffcda76e/e7079/thumb.jpg 63w,\n/static/d74aa486feb57818f4c5271cffcda76e/1ada3/thumb.jpg 125w,\n/static/d74aa486feb57818f4c5271cffcda76e/8f7df/thumb.jpg 250w,\n/static/d74aa486feb57818f4c5271cffcda76e/01f8d/thumb.jpg 375w,\n/static/d74aa486feb57818f4c5271cffcda76e/0f3a1/thumb.jpg 500w,\n/static/d74aa486feb57818f4c5271cffcda76e/ec6c5/thumb.jpg 1280w",
                  sizes: "(max-width: 250px) 100vw, 250px",
                },
              },
            },
          },
        },
      },
      {
        node: {
          excerpt:
            "Linking web fonts in SASS when using Webpack might not work as expected. The most common problem is incorrect URL resolving if a font is…",
          fields: {
            slug: "blog/webfonts-with-sass-and-webpack/",
          },
          frontmatter: {
            title: "Using web fonts with SASS and Webpack",
            date: "12 May 2020",
            cover: {
              childImageSharp: {
                sizes: {
                  base64:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABb0lEQVQY0z1QS0sCYRSdf5V/w7aJDOQgBM0iCjcRrcPaqGBjMwwl5bQQBRsdMM3JBN8PUPGJ43tGENGdpnVwqLu4nO+ee+499yPuPYyHZfnHJzEiaZqmKEqv15vP5+VyOZvNplKpbrfL87zD4aAoSpKk0WjU6XSazWa73SYODAaj8ZA8pk5O6dlsVqvVWq2WqqqZTMbv93Mcl8/nE4lENBoNhUIQgBoMBvoIwuv1PvteHjj2LRwZDoegsarf74NGE4wsFotqtSrLcjweV/aBNrAwSISl8OdX0vcqvH/IkNXr9UKhoBsrlUqQAeOEdDpdqVQgwBMAlWKxSNA0fXZ+QZLkze0dbDcaDaxdLpfBYNDlcjEMI4piLpdjWTYQCIzHY3xELBYTBAF3EVar9chkMpvNl1fXqqrpxjBlOp3C22QyWa1WbrfbYrHYbDYsxJlOp9NutyMTP3+x2+3W6/X3PjabDTAyMMB2u9V79Mp//y/gakhieW6uIwAAAABJRU5ErkJggg==",
                  aspectRatio: 2.739130434782609,
                  src:
                    "/static/8b7fb31084ad1663709e418f8b101db6/e1953/thumb.png",
                  srcSet:
                    "/static/8b7fb31084ad1663709e418f8b101db6/72176/thumb.png 63w,\n/static/8b7fb31084ad1663709e418f8b101db6/62d80/thumb.png 125w,\n/static/8b7fb31084ad1663709e418f8b101db6/e1953/thumb.png 250w,\n/static/8b7fb31084ad1663709e418f8b101db6/c6fa8/thumb.png 375w,\n/static/8b7fb31084ad1663709e418f8b101db6/46604/thumb.png 500w,\n/static/8b7fb31084ad1663709e418f8b101db6/9c108/thumb.png 585w",
                  sizes: "(max-width: 250px) 100vw, 250px",
                },
              },
            },
          },
        },
      },
      {
        node: {
          excerpt:
            "In these unique times, well-organized remote work becomes one of the key factors for success. This applies to any kind of work, and managing…",
          fields: {
            slug: "blog/design-system-remote-work/",
          },
          frontmatter: {
            title: "Remote work in a design system team",
            date: "30 April 2020",
            cover: {
              childImageSharp: {
                sizes: {
                  base64:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAACMUlEQVQoz2PQ274KgnR3rTFYtdBiSp/RutkGK+aYT+7V373erL7euKvNZM5k/Qk9JhM7zdfM1t21Tm/bSp2NSzRWzGFAaN6+ymjbCvvFs3zKI01WzHDYskJv90bfvhbbuVMNdqwLbat2mDfZeP9mzTXz1JfOUFkwWWX+JIRmoHn6u9ea7ttksna52bY1tjvXOy2Y4XFwq9vcdstdq1wObTKf3qfW36G8aIrKvEkgzQsmwzRvAzp7rf7S2Y6zJ8sVF4v7hUgGR2qVFapP6dZprdbqalSeOdGuudqgtVZpyXSgnaiagc7esdpo3UKvtQulklLFrOylnT2Nu7qX3L3effSQgLuPhKubRnuT+boFavMnK4N1omgGIoPd66z3b9JdNEOlvyvm8N7Ky6cufXpff2CPWHSCkKu3ZnuT4YrZcGtBmvW3r9TfsVp/xyq9zctUV85xWLPYfeFshb4Wh62rAlYtUp3ebbtstsnMPqnsQr25C1TmTVRdMAmOGDS3rVNdv1xx+XyFhTMl5/QnHViXvmNV98a1qw7t3XB43/Zjh9Yd3DNnx47qpa2Nc1KVp3cpLpqpsGA6BDG0rzBvXmxUt9Ckc7mOY2uMVlmnbUW9TMEE3dqZbeuPz99zJahnuXBqu111Z2Zvh2xuftF8s9L5RqULjIGI4cgKhqMrGQ4vZzy9hmF6n7BluF10nmFCvnpcrkZCoVZ8oVZCgVZMrkZyiZZFpF1ikfrahQyrFjAsnw9CALUsGWwKcTvmAAAAAElFTkSuQmCC",
                  aspectRatio: 2.032258064516129,
                  src:
                    "/static/d1c13cff17828aa03b40dd8723430bd1/e1953/thumb.png",
                  srcSet:
                    "/static/d1c13cff17828aa03b40dd8723430bd1/72176/thumb.png 63w,\n/static/d1c13cff17828aa03b40dd8723430bd1/62d80/thumb.png 125w,\n/static/d1c13cff17828aa03b40dd8723430bd1/e1953/thumb.png 250w,\n/static/d1c13cff17828aa03b40dd8723430bd1/c6fa8/thumb.png 375w,\n/static/d1c13cff17828aa03b40dd8723430bd1/46604/thumb.png 500w,\n/static/d1c13cff17828aa03b40dd8723430bd1/d6aa4/thumb.png 1956w",
                  sizes: "(max-width: 250px) 100vw, 250px",
                },
              },
            },
          },
        },
      },
      {
        node: {
          excerpt:
            "As you might know, I recently run the  BEM\nLOVE  project to demonstrate how blocks\ncan communicate with JavaScript. The first example is…",
          fields: {
            slug: "en/posts/patterned-triangle/",
          },
          frontmatter: {
            title: "Patterned triangles with  CSS",
            date: "19 March 2013",
            cover: null,
          },
        },
      },
    ],
  },
};

<BlogComponent data={data} />;
```
