# varya.github.com

Social icons by Victor Gonzalez
http://www.iconarchive.com/show/so-smooth-social-icons-by-minisoft.es.html

## Install dependencies:

    npm install

## Run locally:

    npm start

## Build static files

    npm run build

## Build and deploy

    npm run deploy

## Adding new content

New posts should be added to `src/content/posts/` in markdown format.

### Adding images with captions and credits

If you want to add picture credits info and/or link, you need to provide data in the image attributes as follows:

```md
![Image Alt](./figure1.png#caption=caption text;credit=Jane Doe;creditLink=www.google.com)
```

Note that it should be separated from any other content with empty lines above and below.

```md
![Image Alt](./figure1.png "Caption text in title attribute")
```

**Note**. Gatsby wraps images with paragraph tag by default; since image with caption lives in `<figure>` tag, we need to unwrap it to prevent semantic error. Current setup utilizes `gatsby-remark-unwrap-images` plugin, but it will fail if you place any tags on the same line with image. See below:

```md
  <!--- This is WRONG --->

![Image alt text](./image.png)<br/>

  <!--- This is OK --->

![Image alt text](./image.png)
<br/>
```
