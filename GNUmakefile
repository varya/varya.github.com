NODE_MODULES := ./node_modules/

do_git = \
	@REPO_PATH=$(join s/libs/, $(3)); \
	if [ -d "$${REPO_PATH}" ]; then \
		echo "Fetching $(3)"; \
		cd $${REPO_PATH} && git fetch --prune && cd - && break; \
	else \
		echo "Cloning $(3)"; \
		git clone $(1) -b $(2) $${REPO_PATH}; \
	fi;

all:: css

libs:: libs/bem-core
libs:: libs/bouwdoos

libs/bem-core:
	$(call do_git, git@github.com:bem/bem-core.git, v1, $(@F))

libs/bouwdoos:
	$(call do_git, git@github.com:toivonen/bouwdoos.git, v1, $(@F))

.PHONY: css
css:: $(patsubst %.css,%.min.css, $(shell find s -name '*.css' -not -name '*.min.css'))

%.min.css: %.built.css
	$(NODE_MODULES).bin/csso -i $*.built.css -o $@

%.built.css:
	$(NODE_MODULES).bin/borschik -t css -i $*.css -o $@
