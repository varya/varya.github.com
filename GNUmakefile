NODE_MODULES := ./node_modules/

all:: css

.PHONY: css
css:: $(patsubst %.css,%.min.css, $(shell find s -name '*.css' -not -name '*.min.css'))
	echo 1

%.min.css:: %.built.css
	echo 'xxx'

%.built.css::
	echo $(*D)
