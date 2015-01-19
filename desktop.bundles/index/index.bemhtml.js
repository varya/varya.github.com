(function(g) {
  var __bem_xjst = (function(exports) {
     /// -------------------------------------
/// ---------- Bootstrap start ----------
/// -------------------------------------
function run(templates, context, ignore) {
  if (!ignore)
    ignore = {};
  var index = 0;
  var currentId = null;
  var last = null;

  Object.keys(ignore).forEach(function(key) {
    if (ignore[key] > 0)
      ignore[key]--;
  });

  function template() {
    var id = index++;
    var match = !context.$override &&
                Array.prototype.every.call(arguments, function(cond) {
      try {
        return typeof cond === 'function' ? cond.call(context) : cond;
      } catch (e) {
        if (/Cannot read property/.test(e.message))
          return false;
      }
    });

    // Respect applyNext
    if (match && ignore[id]) match = false;

    // Ignore body if match failed
    if (!match) return function() {};

    // Set current id
    currentId = id;

    return function bodyHandler(body) {
      last = {
        id: id,
        body: typeof body === 'function' ? body.bind(context)
                                         : function() { return body }
      };

      return null;
    };
  };

  function local() {
    var backup = [];

    Array.prototype.forEach.call(arguments, function(change) {
      Object.keys(change).forEach(function(key) {
        var parts = key.split('.'),
            newValue = change[key],
            oldValue,
            subContext = context;

        // Dive inside
        for (var i = 0; i < parts.length - 1; i++) {
          subContext = subContext[parts[i]];
        }

        // Set property and remember old value
        oldValue = subContext[parts[i]];
        subContext[parts[i]] = newValue;

        // Push old value to backup list
        backup.push({
          key: parts,
          value: oldValue
        });
      });
    });

    return function bodyHandler(body) {
      var result = typeof body === 'function' ? body.call(context) : body;

      // Rollback old values
      for (var i = backup.length - 1; i >= 0; i--) {
        var subContext = context,
            change = backup[i];

        // Dive inside
        for (var j = 0; j < change.key.length - 1; j++) {
          subContext = subContext[change.key[j]];
        }

        // Restore value
        subContext[change.key[j]] = change.value;
      }

      return result;
    };
  };

  function apply() {
    return local.apply(this, arguments)(function() {
      return run(templates, context, ignore);
    });
  };

  function applyNext() {
    return local.apply(this, arguments)(function() {
      ignore[currentId] = 2;
      return run(templates, context, ignore);
    });
  };

  function oninit(cb) {
    if (context.$init) cb(exports, context.$context);
  }

  templates.call(context, template, local, apply, applyNext, oninit);

  if (!last) {
    if (context.$init) return;
    throw new Error('Match failed');
  }
  return last.body();
};
exports.apply = function apply(ctx) {
  try {
    return applyc(ctx || this);
  } catch (e) {
    e.xjstContext = ctx || this;
    throw e;
  }
};function applyc(ctx) {
  return run(templates, ctx);
};
try {
  applyc({
    $init:true,
    $exports: exports,
    $context: { recordExtensions: function() {} }
  });
} catch (e) {
  // Just ignore any errors
}
function templates(template, local, apply, applyNext, oninit) {
/// -------------------------------------
/// ---------- Bootstrap end ------------
/// -------------------------------------

/// -------------------------------------
/// ---------- User code start ----------
/// -------------------------------------
/// -------------------------------------
/// --------- BEM-XJST Runtime Start ----
/// -------------------------------------

  var __$that = this,
      __$blockRef = {},
      __$elemRef = {},
      __$queue = [];

  // Called after all matches
  function __$flush() {
    __$queue.filter(function(item) {
      return !item.__$parent;
    }).forEach(function(item) {
      function apply(conditions, item) {
        if (item && item.__$children) {
          // Sub-template
          var subcond = conditions.concat(item.__$cond);
          item.__$children.forEach(function(child) {
            apply(subcond, child);
          });
        } else {
          var hasBlock = false;
          var hasElem = false;
          conditions = conditions.filter(function(cond) {
            if (cond === __$blockRef) {
              hasBlock = true;
              return false;
            }
            if (cond === __$elemRef) {
              hasElem = true;
              return false;
            }
            return true;
          });
          if (hasBlock && !hasElem) conditions.push(!__$that.elem);

          // Body
          template.apply(null, conditions)(item);
        }
      }
      apply([], item);
    });
  };

  // Matching
  function match() {
    function fn() {
      var args = Array.prototype.slice.call(arguments);

      args.forEach(function(arg) {
        if (arg && arg.__$children) {
          // Sub-template
          arg.__$parent = fn;
        }
        fn.__$children.push(arg);
      });

      // Handle match().match()
      var res = fn;
      while (res.__$parent) res = res.__$parent;
      return res;
    };
    __$queue.push(fn);
    fn.__$children = [];
    fn.__$parent = null;
    fn.__$cond = Array.prototype.slice.call(arguments);

    fn.match = match;
    fn.elemMatch = elemMatch;
    fn.block = block;
    fn.elem = elem;
    fn.mode = mode;
    fn.mod = mod;
    fn.elemMod = elemMod;
    fn.def = def;
    fn.tag = tag;
    fn.attrs = attrs;
    fn.cls = cls;
    fn.js = js;
    fn.jsAttr = jsAttr;
    fn.bem = bem;
    fn.mix = mix;
    fn.content = content;

    // match().match()
    if (this && this.__$children) {
      this.__$children.push(fn);
      fn.__$parent = this;
    }

    return fn;
  };

  function block(name) {
    return match.call(this, __$blockRef, __$that.block === name);
  };

  function elemMatch() {
    var args = Array.prototype.slice.call(arguments);
    return match.apply(this, [__$elemRef].concat(args));
  }

  function elem(name) {
    return match.call(this, __$elemRef, __$that.elem === name);
  };

  function mode(name) {
    return match.call(this, __$that._mode === name);
  };

  function mod(name, value) {
    return match.call(this, __$that.mods, function() {
      return __$that.mods[name] === value;
    });
  }

  function elemMod(name, value) {
    return match.call(this, __$that.elemMods, function() {
      return __$that.elemMods[name] === value;
    });
  }

  function def() { return mode.call(this, 'default'); };
  function tag() { return mode.call(this, 'tag'); };
  function attrs() { return mode.call(this,'attrs'); };
  function cls() { return mode.call(this, 'cls'); };
  function js() { return mode.call(this, 'js'); };
  function jsAttr() { return mode.call(this, 'jsAttr'); };
  function bem() { return mode.call(this, 'bem'); };
  function mix() { return mode.call(this, 'mix'); };
  function content() { return mode.call(this, 'content'); };

  // Apply by mode, local by mode and applyCtx
  apply = function(apply) {
    return function bemApply() {
      var args = Array.prototype.map.call(arguments, function(arg) {
        if (typeof arg === 'string') {
          return { _mode: arg };
        } else {
          return arg;
        }
      });
      return apply.apply(null, args);
    };
  }(apply);

  applyNext = function(applyNext) {
    return function bemApplyNext() {
      var args = Array.prototype.map.call(arguments, function(arg) {
        if (typeof arg === 'string') {
          return { _mode: arg };
        } else {
          return arg;
        }
      });
      return applyNext.apply(null, args);
    };
  }(applyNext);

  local = function(local) {
    return function bemLocal() {
      var args = Array.prototype.map.call(arguments, function(arg) {
        if (typeof arg === 'string') {
          return { _mode: arg };
        } else {
          return arg;
        }
      });
      return local.apply(null, args);
    };
  }(local);

  function applyCtx() {
    var context = arguments[arguments.length - 1];
    var rest = Array.prototype.slice.call(arguments, 0, -1);
    return applyNext.apply(this, [{ _mode: '', ctx: context }].concat(rest));
  };
;
;
/// -------------------------------------
/// --------- BEM-XJST Runtime End ------
/// -------------------------------------

/// -------------------------------------
/// ------ BEM-XJST User-code Start -----
/// -------------------------------------
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/__css/page__css.bemhtml */
block('page').elem('css')(
    bem()(false),
    tag()('style'),
    match(function() { return this.ctx.url; })(
        tag()('link'),
        attrs()(function() { return { rel : 'stylesheet', href : this.ctx.url }; })
    )
);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/__css/page__css.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/desktop.blocks/page/__css/page__css.bemhtml */
block('page').elem('css')(
    def()
        .match(function() { return this.ctx.hasOwnProperty('ie'); })
        .match(function() { return !this.ctx._ieCommented; })(
            function() {
                var ie = this.ctx.ie,
                    hideRule = !ie?
                        ['gt IE 9', '<!-->', '<!--'] :
                        ie === '!IE'?
                            [ie, '<!-->', '<!--'] :
                            [ie, '', ''];
                apply(
                    '',
                    { 'ctx._ieCommented' : true },
                    {
                        ctx : [
                            '<!--[if ' + hideRule[0] + ']>' + hideRule[1],
                            this.ctx,
                            hideRule[2] + '<![endif]-->'
                        ]
                    }
                );
            },
            match(function() { return this.ctx.ie === true; })(function() {
                var url = this.ctx.url;
                applyCtx([6, 7, 8, 9].map(function(v) {
                    return { elem : 'css', url : url + '.ie' + v + '.css', ie : 'IE ' + v };
                }));
            }))
);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/desktop.blocks/page/__css/page__css.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/__css/page__css.bemhtml */
var cache;
match(function() { return this.block === "page" }, function() { return this.elem === "css" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "css" }, function() { return this._mode === "tag" })(function() {return "style"});
match(function() { return this.block === "page" }, function() { return this.elem === "css" }, function() { return this._mode === "default" }, function() { return this.ctx.hasOwnProperty("ie") }, function() { return !this.ctx._ieCommented })(function() {{var _$2ie = this.ctx.ie;if(_$2ie === true){local({ "_mode": (""), "ctx": ([6,7,8,9].map(function (v){return {"elem": "css","url": (this.ctx.url + ".ie" + v + ".css"),"ie": ("IE " + v)}},this)) })(function() { apply()});;undefined}else{var _$2hideRule = !_$2ie?["gt IE 9","<!-->","<!--"]:_$2ie === "!IE"?[_$2ie,"<!-->","<!--"]:[_$2ie,"",""];local({ "_mode": (""), "ctx._ieCommented": (true), "ctx": ([("<!--[if " + _$2hideRule[0] + "]>"),_$2hideRule[1],this.ctx,_$2hideRule[2],"<![endif]-->"]) })(function() { apply()});;undefined}}});
match(function() { return this.block === "page" }, function() { return this.elem === "css" }, function() { return this.ctx.url }, function() { return this._mode === "tag" })(function() {return "link"});
match(function() { return this.block === "page" }, function() { return this.elem === "css" }, function() { return this.ctx.url }, function() { return this._mode === "attrs" })(function() {return {"rel": "stylesheet","href": this.ctx.url}})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/__css/page__css.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/__js/page__js.bemhtml */
block('page').elem('js')(
    bem()(false),
    tag()('script'),
    attrs().match(function() { return this.ctx.url; })(function() {
        return { src : this.ctx.url };
    })
);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/__js/page__js.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/__js/page__js.bemhtml */
var cache;
match(function() { return this.block === "page" }, function() { return this.elem === "js" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "js" }, function() { return this._mode === "tag" })(function() {return "script"});
match(function() { return this.block === "page" }, function() { return this.elem === "js" }, function() { return this._mode === "attrs" }, function() { return this.ctx.url })(function() {return {"src": this.ctx.url}})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/__js/page__js.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/ua/ua.bemhtml */
block('ua')(
    tag()('script'),
    bem()(false),
    content()([
        '(function(e,c){',
            'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");',
        '})(document.documentElement,"className");'
    ])
);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/ua/ua.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/ua/ua.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "ua" }, function() { return this._mode === "tag" })(function() {return "script"});
match(function() { return !this.elem }, function() { return this.block === "ua" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return !this.elem }, function() { return this.block === "ua" }, function() { return this._mode === "content" })(function() {return [";(function(d,e,c,r){","e=d.documentElement;","c=\"className\";","r=\"replace\";","e[c]=e[c][r](\"ua_js_no\",\"ua_js_yes\");","if(d.compatMode!=\"CSS1Compat\")","e[c]=e[c][r](\"ua_css_standart\",\"ua_css_quirks\")","})(document);"].join("")})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/ua/ua.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/header/header.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "header" }, function() { return this._mode === "tag" })(function() {return "header"});
match(function() { return !this.elem }, function() { return this.block === "header" }, function() { return this._mode === "content" })(function() {return [{"elem": "left","mix": {"block": "candies","js": {"size": {"max": 28,"min": 12},"reverse": true}}},{"block": "logo","mix": {"block": "header","elem": "center"}},{"elem": "right","mix": {"block": "candies","js": {"size": {"max": 28,"min": 12}}}}]})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/header/header.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/logo/logo.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "logo" }, function() { return this._mode === "tag" })(function() {return "logo"});
match(function() { return !this.elem }, function() { return this.block === "logo" }, function() { return this._mode === "content" })(function() {return "&sdot;&sdot;&sdot;<b class=\"var\">var</b>&sdot;<b class=\"ya\">ya</b>;<b class=\"cursor\"></b>"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/logo/logo.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/main/main.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "main" }, function() { return this._mode === "tag" })(function() {return "section"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/main/main.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/article/article.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "article" }, function() { return this._mode === "content" })(function() {return [{"elem": "body","mix": {"block": "box","elem": "body"},"content": [{"elem": "header","content": this.ctx.title},{"elem": "details","content": "by Varya Stepanova on 29th April"}]},{"elem": "text","content": this.ctx.text}]});
match(function() { return this.block === "article" }, function() { return this.elem === "header" }, function() { return this._mode === "tag" })(function() {return "h1"});
match(function() { return this.block === "article" }, function() { return this.elem === "details" }, function() { return this._mode === "tag" })(function() {return "span"});
match(function() { return this.block === "article" }, function() { return this.elem === "details" }, function() { return this._mode === "cls" })(function() {return "author vcard"});
match(function() { return this.block === "article" }, function() { return this.elem === "text" }, function() { return this._mode === "mix" })(function() {return [{"block": "box","elem": "island"}]});
match(function() { return this.block === "article" }, function() { return this.elem === "text" }, function() { return this._mode === "content" })(function() {return [{"block": "share"},this.ctx.content]})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/article/article.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/related/related.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "related" }, function() { return this._mode === "content" })(function() {return [{"elem": "body","mix": {"block": "box","elem": "body"},"content": [{"elem": "header","content": "Related info"}]},{"elem": "text","content": this.ctx.text}]});
match(function() { return this.block === "related" }, function() { return this.elem === "header" }, function() { return this._mode === "tag" })(function() {return "h4"});
match(function() { return this.block === "related" }, function() { return this.elem === "text" }, function() { return this._mode === "mix" })(function() {return [{"block": "box","elem": "island"}]})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/related/related.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/sidebar/sidebar.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "sidebar" }, function() { return this._mode === "tag" })(function() {return "nav"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/sidebar/sidebar.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/menu-vert/menu-vert.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "menu-vert" }, function() { return this._mode === "tag" })(function() {return "ul"});
match(function() { return this.block === "menu-vert" }, function() { return this.elem === "item" }, function() { return this._mode === "tag" })(function() {return "li"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/menu-vert/menu-vert.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-components/common.blocks/link/link.bemhtml */
block('link')(
    tag()('a'),

    attrs()(function() {
        var attrs = {},
            ctx = this.ctx,
            url = ctx.url,
            typeOfUrl = typeof url;

        typeOfUrl !== 'undefined' && (attrs.href = typeOfUrl === 'string'?
            url :
            BEMHTML.apply(url)); // в урле может лежать bemjson

        ctx.title && (attrs.title = ctx.title);
        ctx.target && (attrs.target = ctx.target);

        return attrs;
    })
)

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-components/common.blocks/link/link.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/link/link.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "link" }, function() { return this._mode === "tag" })(function() {return "a"});
match(function() { return !this.elem }, function() { return this.block === "link" }, function() { return this._mode === "attrs" })(function() {{var _$tctx = this.ctx,_$tprops = ["title","target"],_$tp = typeof _$tctx.url,_$ta = {"href": (((_$tp === "undefined" || _$tp === "string")?_$tctx.url:((_$tp = [] , local({ "_buf": (_$tp), "_mode": (""), "ctx": (_$tctx.url) })(function() { return apply()}) , _$tp.join("")))))};while(_$tp = _$tprops.pop()){_$tctx[_$tp] && ((_$ta[_$tp] = _$tctx[_$tp]))};return _$ta}})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/link/link.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/prompting/prompting.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "prompting" }, function() { return this._mode === "tag" })(function() {return "aside"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/prompting/prompting.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/social-ico/social-ico.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "social-ico" }, function() { return this["__$anflg1"] !== true }, function() { return this._mode === "default" })(function() {local({ "__$anflg1": (true) })(function() { local({ "_mode": (""), "ctx": ({"block": "menu-vert","mix": [{"block": "social-ico"}],"content": [{"elem": "item","content": [{"block": "menu-vert","mix": [{"block": "social-ico","elem": "text"}],"content": [{"elem": "item","content": {"block": "link","mix": [{"block": "social-ico","elem": "rss-text"}],"url": "/en/feed.xml","title": "New on Varya.me in English","content": "en"}},{"elem": "item","content": {"block": "link","mix": [{"block": "social-ico","elem": "rss-text"}],"url": "/ru/feed.xml","title": "Новые записи на Varya.me","content": "ru"}}]},{"block": "social-ico","elem": "ico","mods": {"type": "rss"},"url": "/feed.xml","title": "New on Varya.me in both English and Russian"}]},{"elem": "item","content": {"block": "social-ico","elem": "ico","mods": {"type": "twitter"},"url": "https://twitter.com/toivonens"}},{"elem": "item","content": {"block": "social-ico","elem": "ico","mods": {"type": "github"},"url": "https://github.com/toivonen"}},{"elem": "item","content": {"block": "social-ico","elem": "ico","mods": {"type": "facebook"},"url": "https://www.facebook.com/varvara.stepanova.9"}},{"elem": "item","content": {"block": "social-ico","elem": "ico","mods": {"type": "linkedin"},"url": "http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b"}}]}) })(function() { apply()});});});
match(function() { return this.block === "social-ico" }, function() { return this.elem === "ico" }, function() { return this["__$anflg2"] !== true }, function() { return this._mode === "default" })(function() {local({ "__$anflg2": (true) })(function() { local({ "_mode": (""), "ctx": ({"block": "link","mix": [{"block": this.ctx.block,"elem": this.ctx.elem,"mods": this.ctx.mods}],"url": this.ctx.url,"title": this.ctx.title,"target": "_blank"}) })(function() { apply()});});})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/social-ico/social-ico.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/footer/footer.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "footer" }, function() { return this["__$anflg3"] !== true }, function() { return this._mode === "default" })(function() {local({ "__$anflg3": (true) })(function() { local({ "ctx": ({"block": "footer","elem": "outer","content": this.ctx}) })(function() { apply()});});});
match(function() { return !this.elem }, function() { return this.block === "footer" }, function() { return this._mode === "tag" })(function() {return "footer"});
match(function() { return this.block === "footer" }, function() { return this.elem === "left" }, function() { return this._mode === "content" })(function() {return [{"block": "b-menu-vert","content": [{"elem": "item","content": {"block": "b-link","url": "#","content": "Blog"}},{"elem": "item","content": {"block": "b-link","url": "#","content": "Articles and talks"}},{"elem": "item","content": {"block": "b-link","url": "#","content": "About me"}}]}]});
match(function() { return this.block === "footer" }, function() { return this.elem === "center" }, function() { return this._mode === "content" })(function() {return "xxx"});
match(function() { return this.block === "footer" }, function() { return this.elem === "right" }, function() { return this._mode === "content" })(function() {return "O"})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/footer/footer.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/i-bem/i-bem.bemhtml */
/*global oninit */
oninit(function(exports, context) {

var BEM_ = {},
    toString = Object.prototype.toString,
    isArray = Array.isArray || function(obj) {
        return toString.call(obj) === '[object Array]';
    },
    SHORT_TAGS = { // хэш для быстрого определения, является ли тэг коротким
        area : 1, base : 1, br : 1, col : 1, command : 1, embed : 1, hr : 1, img : 1,
        input : 1, keygen : 1, link : 1, meta : 1, param : 1, source : 1, wbr : 1 };

/** @fileOverview - module for internal BEM helpers */
/** @requires BEM */

(function(BEM, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between block names and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable names of elements and modifiers
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

function buildModPostfix(modName, modVal) {
    var res = MOD_DELIM + modName;
    if (modVal !== true) res += MOD_DELIM + modVal;
    return res;
}

function buildBlockClass(name, modName, modVal) {
    var res = name;
    if (modVal) res += buildModPostfix(modName, modVal);
    return res;
}

function buildElemClass(block, name, modName, modVal) {
    var res = buildBlockClass(block) + ELEM_DELIM + name;
    if (modVal) res += buildModPostfix(modName, modVal);
    return res;
}

BEM.INTERNAL = {

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : buildModPostfix,

    /**
     * Builds the class for a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Element name
     * @returns {String} Class string
     */
    buildClass : function(block, elem, modName, modVal) {
        var typeOfModName = typeof modName;
        if(typeOfModName === 'string' || typeOfModName === 'boolean') {
            var typeOfModVal = typeof modVal;
            if(typeOfModVal !== 'string' && typeOfModVal !== 'boolean') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOfModName !== 'undefined') {
            modName = undefined;
        } else if(elem && typeof elem !== 'string') {
            elem = undefined;
        }

        if(!(elem || modName)) { // оптимизация для самого простого случая
            return block;
        }

        if (elem)
            return buildElemClass(block, elem, modName, modVal);
        else
            return buildBlockClass(block, modName, modVal);
    },

    /**
     * Builds modifier classes
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifier name
     * @returns {String} Class string
     */
    buildModsClasses : function(block, elem, mods) {

        var res = '';

        if(mods) {
            var modName; // TODO: разобраться с OmetaJS и YUI Compressor
            for(modName in mods) {
                if(!mods.hasOwnProperty(modName)) continue;

                var modVal = mods[modName];
                if(!modVal && modVal !== 0) continue;
                typeof modVal !== 'boolean' && (modVal += '');

                res += ' ' + (elem?
                    buildElemClass(block, elem, modName, modVal) :
                    buildBlockClass(block, modName, modVal));
            }
        }

        return res;

    },

    /**
     * Builds full classes for a block or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifier name
     * @returns {String} Class string
     */
    buildClasses : function(block, elem, mods) {

        var res = '';

        if (elem)
            res += buildElemClass(block, elem);
        else
            res += buildBlockClass(block);

        res += this.buildModsClasses(block, elem, mods);

        return res;

    }

};

})(BEM_);

var buildEscape = (function() {
    var ts = { '"' : '&quot;', '&' : '&amp;', '<' : '&lt;', '>' : '&gt;' },
        f = function(t) { return ts[t] || t; };
    return function(r) {
        r = new RegExp(r, 'g');
        return function(s) { return ('' + s).replace(r, f); };
    };
})();

function BEMContext(context, apply_) {
    this.ctx = typeof context === null ? '' : context;
    this.apply = apply_;
    this._str = '';

    // Compatibility stuff, just in case
    var self = this;
    this._buf = {
      push: function() {
        var chunks = Array.prototype.slice.call(arguments).join('');
        self._str += chunks;
      },
      join: function() {
        return this._str;
      }
    };
    this._ = this;

    // Stub out fields that will be used later
    this._start = true;
    this._mode = '';
    this._listLength = 0;
    this._notNewList = false;
    this.position = 0;
    this.block = undefined;
    this.elem = undefined;
    this.mods = undefined;
    this.elemMods = undefined;
}
context.BEMContext = BEMContext;

BEMContext.prototype.isArray = isArray;

BEMContext.prototype.isSimple = function isSimple(obj) {
    if(!obj || obj === true) return true;
    var t = typeof obj;
    return t === 'string' || t === 'number';
};

BEMContext.prototype.isShortTag = function isShortTag(t) {
    return SHORT_TAGS.hasOwnProperty(t);
};

BEMContext.prototype.extend = function extend(o1, o2) {
    if(!o1 || !o2) return o1 || o2;
    var res = {}, n;
    for(n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
    for(n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
    return res;
};

BEMContext.prototype.identify = (function() {
    var cnt = 0,
        id = (+new Date()),
        expando = '__' + id,
        get = function() { return 'uniq' + id + (++cnt); };
    return function(obj, onlyGet) {
        if(!obj) return get();
        if(onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return (obj[expando] = get());
        }
    };
})();

BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
BEMContext.prototype.attrEscape = buildEscape('["&<>]');

BEMContext.prototype.BEM = BEM_;

BEMContext.prototype.isFirst = function isFirst() {
    return this.position === 1;
};

BEMContext.prototype.isLast = function isLast() {
    return this.position === this._listLength;
};

BEMContext.prototype.generateId = function generateId() {
    return this.identify(this.ctx);
};

// Wrap xjst's apply and export our own
var oldApply = exports.apply;
exports.apply = BEMContext.apply = function _apply(context) {
    var ctx = new BEMContext(context || this, oldApply);
    ctx.apply();
    return ctx._str;
};

BEMContext.prototype.reapply = BEMContext.apply;

}); // oninit

match(this._mode === '')(

    match()(function() {
        var vBlock = this.ctx.block,
            vElem = this.ctx.elem,
            block = this._currBlock || this.block;

        this.ctx || (this.ctx = {});

        local('default', {
            block : vBlock || (vElem? block : undefined),
            _currBlock : vBlock || vElem? undefined : block,
            elem : this.ctx.elem,
            mods : vBlock? this.ctx.mods || (this.ctx.mods = {}) : this.mods,
            elemMods : this.ctx.elemMods || {}
        })(function() {
            (this.block || this.elem)?
                (this.position = (this.position || 0) + 1) :
                this._listLength--;
            apply();
        });
    }),

    match(function() { return this._.isArray(this.ctx); })(function() {
        var v = this.ctx,
            l = v.length,
            i = 0,
            prevPos = this.position,
            prevNotNewList = this._notNewList;

        if(prevNotNewList) {
            this._listLength += l - 1;
        } else {
            this.position = 0;
            this._listLength = l;
        }

        this._notNewList = true;

        while(i < l)
            apply({ ctx : v[i++] });

        prevNotNewList || (this.position = prevPos);
    }),

    match(!this.ctx)(function() {
        this._listLength--;
    }),

    match(function() { return this._.isSimple(this.ctx); })(function() {
        this._listLength--;

        var ctx = this.ctx;
        if (ctx && ctx !== true || ctx === 0) {
            this._buf.push(ctx + '');
        }
    }),

    // hack-check for Vow-promise
    match(this.ctx && this.ctx._vow)(function() {
        applyCtx(this.ctx._value);
    })

);

def()(function() {
    var _this = this,
        BEM_ = _this.BEM,
        v = this.ctx,
        isBEM,
        tag,
        result;

    local({ _str: '' })(function() {
        tag = apply('tag');
        typeof tag !== 'undefined' || (tag = v.tag);
        typeof tag !== 'undefined' || (tag = 'div');

        if(tag) {
            var jsParams, js;
            if(this.block && v.js !== false) {
                js = apply('js');
                js = js? this._.extend(v.js, js === true? {} : js) : v.js === true? {} : v.js;
                js && ((jsParams = {})[BEM_.INTERNAL.buildClass(this.block, v.elem)] = js);
            }

            this._str += '<' + tag;

            isBEM = apply('bem');
            typeof isBEM !== 'undefined' || (isBEM = typeof v.bem !== 'undefined' ? v.bem : v.block || v.elem);

            var cls = apply('cls');
            cls || (cls = v.cls);

            var addJSInitClass = v.block && jsParams;
            if(isBEM || cls) {
                this._str += ' class="';
                if(isBEM) {

                    this._str += BEM_.INTERNAL.buildClasses(this.block, v.elem, v.elemMods || v.mods);

                    var mix = apply('mix');
                    v.mix && (mix = mix? mix.concat(v.mix) : v.mix);

                    if(mix) {
                        var visited = {},
                            visitedKey = function (block, elem) {
                              return (block || '') + '__' + (elem || '');
                            };

                        visited[visitedKey(this.block, this.elem)] = true;

                        // Transform mix to the single-item array if it's not array
                        if (!this._.isArray(mix)) mix = [mix];
                        for (var i = 0; i < mix.length; i++) {
                            var mixItem = mix[i],
                                hasItem = mixItem.block || mixItem.elem,
                                block = mixItem.block || mixItem._block || _this.block,
                                elem = mixItem.elem || mixItem._elem || _this.elem;

                            if (hasItem) this._str += ' ';
                            this._str += BEM_.INTERNAL[hasItem? 'buildClasses' : 'buildModsClasses'](
                                block,
                                mixItem.elem || mixItem._elem ||
                                    (mixItem.block ? undefined : _this.elem),
                                mixItem.elemMods || mixItem.mods);

                            if(mixItem.js) {
                                (jsParams || (jsParams = {}))[BEM_.INTERNAL.buildClass(block, mixItem.elem)] = mixItem.js === true? {} : mixItem.js;
                                addJSInitClass || (addJSInitClass = block && !mixItem.elem);
                            }

                            // Process nested mixes
                            if (hasItem && !visited[visitedKey(block, elem)]) {
                                visited[visitedKey(block, elem)] = true;
                                var nestedMix = apply('mix', {
                                    block: block,
                                    elem: elem
                                });

                                if (nestedMix) {
                                    for (var j = 0; j < nestedMix.length; j++) {
                                        var nestedItem = nestedMix[j];
                                        if (!nestedItem.block &&
                                            !nestedItem.elem ||
                                            !visited[visitedKey(
                                              nestedItem.block,
                                              nestedItem.elem
                                            )]) {
                                            nestedItem._block = block;
                                            nestedItem._elem = elem;
                                            mix.splice(i + 1, 0, nestedItem);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (cls) this._str += isBEM? ' ' + cls : cls;

                if (addJSInitClass)
                    this._str += ' i-bem"';
                else
                    this._str += '"';
            }

            if(isBEM && jsParams) {
                this._str += ' data-bem="' +
                    this._.attrEscape(JSON.stringify(jsParams)) +
                    '"';
            }

            var attrs = apply('attrs');
            attrs = this._.extend(attrs, v.attrs); // NOTE: возможно стоит делать массив, чтобы потом быстрее сериализовывать
            if(attrs) {
                var name, attr; // TODO: разобраться с OmetaJS и YUI Compressor
                for(name in attrs) {
                    attr = attrs[name];
                    if(attr === undefined) continue;
                    this._str += ' ' + name + '="' +
                        this._.attrEscape(this._.isSimple(attr)?
                            attr :
                            this.reapply(attr)) +
                        '"';
                }
            }
        }

        if(this._.isShortTag(tag)) {
            this._str += '/>';
        } else {
            if(tag) this._str += '>';

            var content = apply('content');
            if(content || content === 0) {
                isBEM = this.block || this.elem;
                apply('', {
                    _notNewList: false,
                    position: isBEM ? 1 : this.position,
                    _listLength: isBEM ? 1 : this._listLength,
                    ctx: content
                });
            }

            if (tag) this._str += '</' + tag + '>';
        }

        // If the buffer was replaced, pretend that we're pushing to the buffer
        result = this._str;
    });

    this._buf.push(result);
});

tag()(undefined);
attrs()(undefined);
cls()(undefined);
js()(undefined);
bem()(undefined);
mix()(undefined);
content()(function() { return this.ctx.content; });

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/i-bem/i-bem.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-highlight.js/blocks/highlight/highlight.bemhtml */
block('highlight')(

    js()({
        //lang: this.ctx.lang
    }),

    content()(function(){
        return {
            tag: 'pre',
            content: {
                elem: 'code',
                content: this._.xmlEscape(this.ctx.content)
            }
        };
    }),

    elem('code')(
        tag()('code')
    )

)

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-highlight.js/blocks/highlight/highlight.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/github/github.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "github" }, function() { return this._mode === "content" })(function() {return [{"elem": "header","content": [{"elem": "title","content": "Me on GitHub","mix": {"block": "box","elem": "title"}}]},{"elem": "body"}]})
/* end: /Users/varya/WebDev/Personal/varya.github.com/desktop.blocks/github/github.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/page.bemhtml */
block('page')(

    def()(function() {
        var ctx = this.ctx;
        applyCtx([
            ctx.doctype || '<!DOCTYPE html>',
            {
                tag : 'html',
                cls : 'ua_js_no',
                content : [
                    {
                        elem : 'head',
                        content : [
                            { tag : 'meta', attrs : { charset : 'utf-8' } },
                            { tag : 'title', content : ctx.title },
                            { block : 'ua' },
                            ctx.head,
                            ctx.styles,
                            ctx.favicon? { elem : 'favicon', url : ctx.favicon } : ''
                        ]
                    },
                    // Добавляем элемент, чтобы сработал другой шаблон и не было зацикливания
                    this.extend(ctx, { elem : 'body' })
                ]
            }
        ]);
    }),

    elem('body')(
        tag()('body'),
        content()(function() {
            return [
                applyNext(),
                this.ctx.scripts
            ];
        }),
        def()(function() {
            // Обратно очищаем поле elem, чтобы сохранить правильный контекст
            this.ctx.elem = null;
            applyNext();
        })
    ),

    elem('head')(
        bem()(false),
        tag()('head')
    ),

    elem('meta')(
        bem()(false),
        tag()('meta')
    ),

    elem('link')(
        bem()(false),
        tag()('link')
    ),

    elem('favicon')(
        bem()(false),
        tag()('link'),
        attrs()(function() { return { rel : 'shortcut icon', href : this.ctx.url }; })
    )

);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/common.blocks/page/page.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/desktop.blocks/page/page.bemhtml */
block('page')(
    elem('head')(
        content()(function () {
            return [
                this.ctx['x-ua-compatible'] === false ?
                    false :
                    {
                        tag : 'meta',
                        attrs : {
                            'http-equiv' : 'X-UA-Compatible',
                            content : this.ctx['x-ua-compatible'] || 'IE=edge'
                        }
                    },
                applyNext()
            ];
        })
    )
);

/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bem-core/desktop.blocks/page/page.bemhtml */
/* begin: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/page.bemhtml */
var cache;
match(function() { return !this.elem }, function() { return this.block === "page" }, function() { return this._mode === "doctype" })(function() {return this.ctx.doctype || "<!DOCTYPE html>"});
match(function() { return !this.elem }, function() { return this.block === "page" }, function() { return this._mode === "xUACompatible" })(function() {return this.ctx["x-ua-compatible"] === false?false:{"tag": "meta","attrs": {"http-equiv": "X-UA-Compatible","content": (this.ctx["x-ua-compatible"] || "IE=edge")}}});
match(function() { return !this.elem }, function() { return this.block === "page" }, function() { return this["__$anflg4"] !== true }, function() { return this._mode === "default" })(function() {{var _$15ctx = this.ctx,_$15dtype = local({ "_mode": ("doctype") })(function() { return apply()}),_$15xUA = local({ "_mode": ("xUACompatible") })(function() { return apply()}),_$15buf = [_$15dtype,{"elem": "root","content": [{"elem": "head","content": [{"tag": "meta","attrs": {"charset": "utf-8"}},_$15xUA,{"tag": "title","content": _$15ctx.title},(_$15ctx.favicon?{"elem": "favicon","url": _$15ctx.favicon}:""),_$15ctx.meta,{"block": "i-ua"},_$15ctx.head]},_$15ctx]}];local({ "__$anflg4": (true) })(function() { local({ "ctx": (_$15buf), "_mode": ("") })(function() { apply()});});;undefined}});
match(function() { return !this.elem }, function() { return this.block === "page" }, function() { return this._mode === "tag" })(function() {return "body"});
match(function() { return !this.elem }, function() { return this.block === "page" }, function() { return this._mode === "mix" })(function() {return [{"elem": "body"}]});
match(function() { return this.block === "page" }, function() { return this.elem === "root" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "root" }, function() { return this._mode === "tag" })(function() {return "html"});
match(function() { return this.block === "page" }, function() { return this.elem === "root" }, function() { return this._mode === "cls" })(function() {return "ua_js_no ua_css_standard"});
match(function() { return this.block === "page" }, function() { return this.elem === "head" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "head" }, function() { return this._mode === "tag" })(function() {return "head"});
match(function() { return this.block === "page" }, function() { return this.elem === "meta" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "meta" }, function() { return this._mode === "tag" })(function() {return "meta"});
match(function() { return this.block === "page" }, function() { return this.elem === "meta" }, function() { return this._mode === "attrs" })(function() {return this.ctx.attrs});
match(function() { return this.block === "page" }, function() { return this.elem === "favicon" }, function() { return this._mode === "bem" })(function() {return false});
match(function() { return this.block === "page" }, function() { return this.elem === "favicon" }, function() { return this._mode === "tag" })(function() {return "link"});
match(function() { return this.block === "page" }, function() { return this.elem === "favicon" }, function() { return this._mode === "attrs" })(function() {return {"rel": "shortcut icon","href": this.ctx.url}})
/* end: /Users/varya/WebDev/Personal/varya.github.com/libs/bouwdoos/desktop.blocks/page/page.bemhtml */;
/// -------------------------------------
/// ------ BEM-XJST User-code End -------
/// -------------------------------------
__$flush();
/// -------------------------------------
/// ---------- User code end ------------
/// -------------------------------------
};;
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);