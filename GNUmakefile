NODE_MODULES := ./node_modules/

all:: css

.PHONY: css
css:: $(patsubst %.css,%.min.css, $(shell find s -name '*.css' -not -name '*.min.css'))

%.min.css: %.built.css
	$(NODE_MODULES).bin/csso -i $*.built.css -o $@

%.built.css:
	$(NODE_MODULES).bin/borschik -t css -i $*.css -o $@
