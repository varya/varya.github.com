---

title: Visual diffs for the images in a git repo

date: 2016-03-14

layout: post

meta:
  desc: >
    The modified images in git repositories can have a decent visual representation of file changes. For that, you
    simply run `git diff` command. However, to get this output, you have to do a little configuration.
    This article shows how.

---

My first task for new projects is to create a git repository. Weather it is a new app, or conference slides, or even an
article, I prefer to keep everything in Git. It is an excellent tool, and, personally, I enjoy its command line
interface.

However, there is always room for improvement. Recently I found an idea how to make my git visualize the changes that
I've done to the images in a repository.

<excerpt/>

```sh
Varyas-MBP £ ~/path/to/project ⤳ master*
  › git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   desktop.blocks/social-ico/social-ico__rss.png
    modified:   desktop.blocks/social-ico/social-ico__twitter.png

no changes added to commit (use "git add" and/or "git commit -a")
Varyas-MBP £ ~/path/to/project ⤳ master*
```

I can run `git diff` over each of the modified images to see the following:

![](/posts/image-diffs-with-git/diff1.png)

![](/posts/image-diffs-with-git/diff2.png)

For every picture displayed, I can see a previous version (on the left side), a current version (on the right side) and
visually represented difference (in between). This feature is useful for tracking exact changes im the image. Now, I can
easily spot if some particular details were shifted, some colors were changed, or a picture was accidentally blended
with another one.

You can configure git to do the same. First, install ImageMagick to provide a visual comparison. Note that for the
latest versions of OS X you need to install a package with a support of X11. To install with `brew`, do the following:

```
  › brew install imagemagick --with-x11
```

Then, create a script to compares two given images. Run `cat ~/bin/git-imgdiff`, and paste inside:

```
#!/bin/sh
compare $2 $1 png:- | montage -geometry +4+4 $2 - $1 png:- | display -title "$1" -
```

Now, test the script. It should do the comparison of two processed images:

```
  › ~/bin/git-imgdiff img1.png img2.png
```

At this step, you need to show a comparisson of two processed images. For that, define the image files their extensions
in a special file. Run `cat ~/.gitattributes` and paste the following:

```
*.gif diff=image
*.jpg diff=image
*.png diff=image
```

Provide git with this configuration with:

```
  › git config --global core.attributesfile '~/.gitattributes'
```

The last step is to instruct git to use your script when `diff` command is applied to the matching files:

```
  › git config --global diff.image.command '~/bin/git-imgdiff'
```

That's it. Now, running a `git diff` over your images you will get a human-friendly output. Enjoy!

### References
* [1] http://www.akikoskinen.info/image-diffs-with-git/
* [2] http://paulmestemaker.com/imagemagick-display-mac-os-x/
