---

title: Visual diffs for the images in a git repo

date: 2016-03-14

layout: post

meta:
  desc: >
    The modified images stored in git repositories may have nice visual representation of gotten changes. You need
    nothing more run `git diff` command to see such output. To get that working, it is only needed to provide a bit of
    configuration. This article shows how.

---

When starting a new project, I always make a git repository first. Either a new application, or slides for a conference
talk, or even an article - I prefer to store everything under git. It is a great tool, and I'm very happy with its
command-line interface. However, there is always room for improvement and modding. Recently I tought my git to visualize
the changes made to the images tracking in the repository.

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

Now, having modified images in the repository, I may run `git diff` command over each of them, and see something like
this:

![](/posts/image-diffs-with-git/diff1.png)

![](/posts/image-diffs-with-git/diff2.png)

In every picture you can see previous version of an image at the left side, current version at the right side and
visually represented difference in between.
This is very useful for spotting what exactly has been changed in the image. It is clear if one particular image detail
was shifted, or if some color has changed, or if an image was acidentally mixed with another one.

You may teach git at your machine to do the same. First, install imagemagick needed for visual comparison. For the
latest versions of OS X it is important to have it with X11 support. If you are using `brew`, install like that:

```
  › brew install imagemagick --with-x11
```

Then, create a script which compares 2 given images. Run `cat ~/bin/git-imgdiff`, and insert inside:

```
#!/bin/sh
compare $2 $1 png:- | montage -geometry +4+4 $2 - $1 png:- | display -title "$1" -
```

Test the script. It must do the comparison if 2 images are processed with it like:

```
  › ~/bin/git-imgdiff img1.png img2.png
```

The last steps are to teach git use this script when dealing with images.

You describe what are the files to consider images (based on their extensions) in a special file. Run
`cat ~/.gitattributes`, and paste inside:

```
*.gif diff=image
*.jpg diff=image
*.png diff=image
```

Make git know about this configuration by

```
  › git config --global core.attributesfile '~/.gitattributes'
```

And the last thing, insrtuct to use the image comparing script when `diff` command is applied to the matching files:

```
  › git config --global diff.image.command '~/bin/git-imgdiff'
```

That's it. Now, running `git diff` over a modified image you will get human-friendly output. Enjoy!

### References
* [1] http://www.akikoskinen.info/image-diffs-with-git/
* [2] http://paulmestemaker.com/imagemagick-display-mac-os-x/
