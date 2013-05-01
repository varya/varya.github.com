var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    !function() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
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
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(c) {
        var __this = this;
        if (this.block === "footer" && this.elem === "right" && this._mode === "content") {
            return "O";
            return;
        }
        if (this.block === "footer" && this.elem === "center" && this._mode === "content") {
            return "xxx";
            return;
        }
        if (this.block === "footer" && this.elem === "left" && this._mode === "content") {
            return [ {
                block: "b-menu-vert",
                content: [ {
                    elem: "item",
                    content: {
                        block: "b-link",
                        url: "#",
                        content: "Blog"
                    }
                }, {
                    elem: "item",
                    content: {
                        block: "b-link",
                        url: "#",
                        content: "Articles and talks"
                    }
                }, {
                    elem: "item",
                    content: {
                        block: "b-link",
                        url: "#",
                        content: "About me"
                    }
                } ]
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "footer" && this._mode === "tag") {
            return "footer";
            return;
        }
        if (!!this.elem === false && this.block === "footer" && !(this["__$anflg"] !== 511492516) === false && this._mode === "default") {
            {
                "";
                var __r76 = this["__$anflg"];
                this["__$anflg"] = 511492516;
                {
                    "";
                    var __r77 = this.ctx;
                    this.ctx = {
                        block: "footer",
                        elem: "outer",
                        content: this.ctx
                    };
                    apply.call(__this);
                    this.ctx = __r77;
                    "";
                }
                this["__$anflg"] = __r76;
                "";
            }
            return;
        }
        if (this.block === "social-ico" && this.elem === "github" && this._mode === "attrs") {
            return {
                href: "https://github.com/toivonen",
                target: "_blank"
            };
            return;
        }
        if (this.block === "social-ico" && this.elem === "linkedin" && this._mode === "attrs") {
            return {
                href: "http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b",
                target: "_blank"
            };
            return;
        }
        if (this.block === "social-ico" && this.elem === "facebook" && this._mode === "attrs") {
            return {
                href: "http://www.facebook.com/varvara.stepanova.9",
                target: "_blank"
            };
            return;
        }
        if (this.block === "social-ico" && this.elem === "twitter" && this._mode === "attrs") {
            return {
                href: "https://twitter.com/toivonens",
                target: "_blank"
            };
            return;
        }
        if (this.block === "social-ico" && !this.elem === false && this._mode === "mix") {
            return {
                elem: "ico"
            };
            return;
        }
        if (this.block === "social-ico" && !this.elem === false && this._mode === "tag") {
            return "a";
            return;
        }
        if (!!this.elem === false && this.block === "social-ico" && this._mode === "content") {
            return [ {
                elem: "rss"
            }, {
                elem: "twitter"
            }, {
                elem: "github"
            }, {
                elem: "facebook"
            }, {
                elem: "linkedin"
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "prompting" && this._mode === "tag") {
            return "aside";
            return;
        }
        if (!!this.elem === false && this.block === "github" && this._mode === "content") {
            return [ {
                elem: "header",
                content: [ {
                    elem: "title",
                    content: "Me on GitHub",
                    mix: {
                        block: "box",
                        elem: "title"
                    }
                } ]
            }, {
                elem: "body"
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "b-link" && this._mode === "attrs") {
            {
                var _$1vctx = this.ctx, _$1vprops = [ "title", "target" ], _$1vp = typeof _$1vctx.url, _$1va = {
                    href: _$1vp === "undefined" || _$1vp === "string" ? _$1vctx.url : (_$1vp = [], "", __r72 = this._buf, this._buf = _$1vp, __r73 = this._mode, this._mode = "", __r74 = this.ctx, this.ctx = _$1vctx.url, __r75 = apply.call(__this), this._buf = __r72, this._mode = __r73, this.ctx = __r74, "", __r75, _$1vp.join(""))
                };
                while (_$1vp = _$1vprops.pop()) {
                    _$1vctx[_$1vp] && (_$1va[_$1vp] = _$1vctx[_$1vp]);
                }
                return _$1va;
            }
            return;
        }
        if (!!this.elem === false && this.block === "b-link" && this._mode === "tag") {
            return "a";
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "submenu" && this._mode === "tag") {
            return "ul";
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "item-selector" && this._mode === "tag") {
            return "span";
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "layout-unit" && this._mode === "mix") {
            {
                var _$1rmix = [];
                this.isFirst() && _$1rmix.push({
                    elemMods: {
                        position: "first"
                    }
                });
                this.isLast() && _$1rmix.push({
                    elemMods: {
                        position: "last"
                    }
                });
                return _$1rmix;
            }
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "layout-unit" && this._mode === "tag") {
            return "li";
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "item" && this._mode === "default" && !!this.ctx._wrap === false) {
            {
                "";
                var __r67 = this._mode;
                this._mode = "";
                var __r68 = this.ctx, __r69 = __r68._wrap;
                __r68._wrap = true;
                var __r70 = this.position;
                this.position = this.position - 1;
                var __r71 = this.ctx;
                this.ctx = {
                    elem: "layout-unit",
                    content: [ this.ctx, this.ctx["item-content"] ]
                };
                this.apply();
                this._mode = __r67;
                __r68._wrap = __r69;
                this.position = __r70;
                this.ctx = __r71;
                "";
            }
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "layout" && this._mode === "tag") {
            return "ul";
            return;
        }
        if (!!this.elem === false && this.block === "b-menu-vert" && this._mode === "content") {
            return [ this.ctx.title, {
                elem: "layout",
                content: this.ctx.content
            } ];
            return;
        }
        if (this.block === "b-menu-vert" && this.elem === "title" && this._mode === "tag") {
            return "h3";
            return;
        }
        if (!!this.elem === false && this.block === "sidebar" && this._mode === "tag") {
            return "nav";
            return;
        }
        if (this.block === "related" && this.elem === "text" && this._mode === "mix") {
            return [ {
                block: "box",
                elem: "island"
            } ];
            return;
        }
        if (this.block === "related" && this.elem === "header" && this._mode === "tag") {
            return "h4";
            return;
        }
        if (!!this.elem === false && this.block === "related" && this._mode === "content") {
            return [ {
                elem: "body",
                mix: {
                    block: "box",
                    elem: "body"
                },
                content: [ {
                    elem: "header",
                    content: "Related info"
                } ]
            }, {
                elem: "text",
                content: this.ctx.text
            } ];
            return;
        }
        if (this.block === "article" && this.elem === "text" && this._mode === "mix") {
            return [ {
                block: "box",
                elem: "island"
            } ];
            return;
        }
        if (this.block === "article" && this.elem === "details" && this._mode === "cls") {
            return "author vcard";
            return;
        }
        if (this.block === "article" && this.elem === "details" && this._mode === "tag") {
            return "span";
            return;
        }
        if (this.block === "article" && this.elem === "header" && this._mode === "tag") {
            return "h1";
            return;
        }
        if (!!this.elem === false && this.block === "article" && this._mode === "content") {
            return [ {
                elem: "body",
                mix: {
                    block: "box",
                    elem: "body"
                },
                content: [ {
                    elem: "header",
                    content: this.ctx.title
                }, {
                    elem: "details",
                    content: "by Varya Stepanova on 29th April"
                } ]
            }, {
                elem: "text",
                content: this.ctx.text
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "main" && this._mode === "tag") {
            return "section";
            return;
        }
        if (!!this.elem === false && this.block === "logo" && this._mode === "content") {
            return '···<b class="var">var</b>·<b class="ya">ya</b>;<b class="cursor"></b>';
            return;
        }
        if (!!this.elem === false && this.block === "logo" && this._mode === "tag") {
            return "logo";
            return;
        }
        if (!!this.elem === false && this.block === "header" && this._mode === "content") {
            return [ {
                elem: "left",
                mix: {
                    block: "candies",
                    js: {
                        size: {
                            max: 28,
                            min: 12
                        },
                        reverse: true
                    }
                }
            }, {
                block: "logo",
                mix: {
                    block: "header",
                    elem: "center"
                }
            }, {
                elem: "right",
                mix: {
                    block: "candies",
                    js: {
                        size: {
                            max: 28,
                            min: 12
                        }
                    }
                }
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "header" && this._mode === "tag") {
            return "header";
            return;
        }
        if (this.block === "b-page" && this.elem === "js" && this._mode === "attrs" && !this.ctx.url === false) {
            return {
                src: this.ctx.url
            };
            return;
        }
        if (this.block === "b-page" && this.elem === "js" && this._mode === "tag") {
            return "script";
            return;
        }
        if (this.block === "b-page" && this.elem === "js" && this._mode === "bem") {
            return false;
            return;
        }
        if (this.block === "b-page" && this.elem === "css" && !this.ctx.url === false && this._mode === "attrs") {
            return {
                rel: "stylesheet",
                href: this.ctx.url
            };
            return;
        }
        if (this.block === "b-page" && this.elem === "css" && !this.ctx.url === false && this._mode === "tag") {
            return "link";
            return;
        }
        if (this.block === "b-page" && this.elem === "css" && this._mode === "default" && !this.ctx.hasOwnProperty("ie") === false && !!this.ctx._ieCommented === false) {
            {
                var _$12ie = this.ctx.ie;
                if (_$12ie === true) {
                    {
                        "";
                        var __r61 = this._mode;
                        this._mode = "";
                        var __r62 = this.ctx;
                        this.ctx = [ 6, 7, 8, 9 ].map(function(v) {
                            return {
                                elem: "css",
                                url: this.ctx.url + ".ie" + v + ".css",
                                ie: "IE " + v
                            };
                        }, this);
                        apply.call(__this);
                        this._mode = __r61;
                        this.ctx = __r62;
                        "";
                    }
                    undefined;
                } else {
                    var _$12hideRule = !_$12ie ? [ "gt IE 9", "<!-->", "<!--" ] : _$12ie === "!IE" ? [ _$12ie, "<!-->", "<!--" ] : [ _$12ie, "", "" ];
                    {
                        "";
                        var __r63 = this._mode;
                        this._mode = "";
                        var __r64 = this.ctx, __r65 = __r64._ieCommented;
                        __r64._ieCommented = true;
                        var __r66 = this.ctx;
                        this.ctx = [ "<!--[if " + _$12hideRule[0] + "]>", _$12hideRule[1], this.ctx, _$12hideRule[2], "<![endif]-->" ];
                        apply.call(__this);
                        this._mode = __r63;
                        __r64._ieCommented = __r65;
                        this.ctx = __r66;
                        "";
                    }
                    undefined;
                }
            }
            return;
        }
        if (this.block === "b-page" && this.elem === "css" && this._mode === "tag") {
            return "style";
            return;
        }
        if (this.block === "b-page" && this.elem === "css" && this._mode === "bem") {
            return false;
            return;
        }
        if (this.block === "b-page" && this.elem === "favicon" && this._mode === "attrs") {
            return {
                rel: "shortcut icon",
                href: this.ctx.url
            };
            return;
        }
        if (this.block === "b-page" && this.elem === "favicon" && this._mode === "tag") {
            return "link";
            return;
        }
        if (this.block === "b-page" && this.elem === "favicon" && this._mode === "bem") {
            return false;
            return;
        }
        if (this.block === "b-page" && this.elem === "meta" && this._mode === "attrs") {
            return this.ctx.attrs;
            return;
        }
        if (this.block === "b-page" && this.elem === "meta" && this._mode === "tag") {
            return "meta";
            return;
        }
        if (this.block === "b-page" && this.elem === "meta" && this._mode === "bem") {
            return false;
            return;
        }
        if (this.block === "b-page" && this.elem === "head" && this._mode === "tag") {
            return "head";
            return;
        }
        if (this.block === "b-page" && this.elem === "head" && this._mode === "bem") {
            return false;
            return;
        }
        if (this.block === "b-page" && this.elem === "root" && this._mode === "cls") {
            return "i-ua_js_no i-ua_css_standard";
            return;
        }
        if (this.block === "b-page" && this.elem === "root" && this._mode === "tag") {
            return "html";
            return;
        }
        if (this.block === "b-page" && this.elem === "root" && this._mode === "bem") {
            return false;
            return;
        }
        if (!!this.elem === false && this.block === "b-page" && this._mode === "mix") {
            return [ {
                elem: "body"
            } ];
            return;
        }
        if (!!this.elem === false && this.block === "b-page" && this._mode === "tag") {
            return "body";
            return;
        }
        if (!!this.elem === false && this.block === "b-page" && !(this["__$anflg"] !== 877991130) === false && this._mode === "default") {
            {
                var _$mctx = this.ctx, _$mdtype = ("", __r52 = this._mode, this._mode = "doctype", __r53 = apply.call(__this), this._mode = __r52, "", __r53), _$mxUA = ("", __r54 = this._mode, this._mode = "xUACompatible", __r55 = apply.call(__this), this._mode = __r54, "", __r55), _$mbuf = [ _$mdtype, {
                    elem: "root",
                    content: [ {
                        elem: "head",
                        content: [ {
                            tag: "meta",
                            attrs: {
                                charset: "utf-8"
                            }
                        }, _$mxUA, {
                            tag: "title",
                            content: _$mctx.title
                        }, _$mctx.favicon ? {
                            elem: "favicon",
                            url: _$mctx.favicon
                        } : "", _$mctx.meta, {
                            block: "i-ua"
                        }, _$mctx.head ]
                    }, _$mctx ]
                } ];
                {
                    "";
                    var __r56 = this["__$anflg"];
                    this["__$anflg"] = 877991130;
                    {
                        "";
                        var __r57 = this.ctx;
                        this.ctx = _$mbuf;
                        var __r58 = this._mode;
                        this._mode = "";
                        apply.call(__this);
                        this.ctx = __r57;
                        this._mode = __r58;
                        "";
                    }
                    this["__$anflg"] = __r56;
                    "";
                }
                undefined;
            }
            return;
        }
        if (!!this.elem === false && this.block === "b-page" && this._mode === "xUACompatible") {
            return this.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: this.ctx["x-ua-compatible"] || "IE=edge"
                }
            };
            return;
        }
        if (!!this.elem === false && this.block === "b-page" && this._mode === "doctype") {
            return this.ctx.doctype || "<!DOCTYPE html>";
            return;
        }
        if (this.block === "i-jquery" && this.elem === "core" && this._mode === "default") {
            return "", __r49 = this._mode, this._mode = "", __r50 = this.ctx, this.ctx = {
                block: "b-page",
                elem: "js",
                url: "//yandex.st/jquery/1.7.2/jquery.min.js"
            }, __r51 = apply.call(__this), this._mode = __r49, this.ctx = __r50, "", __r51;
            return;
        }
        if (!!this.elem === false && this.block === "i-ua" && this._mode === "content") {
            return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
            return;
        }
        if (!!this.elem === false && this.block === "i-ua" && this._mode === "bem") {
            return false;
            return;
        }
        if (!!this.elem === false && this.block === "i-ua" && this._mode === "tag") {
            return "script";
            return;
        }
        if (this._mode === "content") {
            return this.ctx.content;
            return;
        }
        if (this._mode === "mix") {
            return undefined;
            return;
        }
        if (this._mode === "bem") {
            return undefined;
            return;
        }
        if (this._mode === "jsAttr") {
            return undefined;
            return;
        }
        if (this._mode === "js") {
            return undefined;
            return;
        }
        if (this._mode === "cls") {
            return undefined;
            return;
        }
        if (this._mode === "attrs") {
            return undefined;
            return;
        }
        if (this._mode === "tag") {
            return undefined;
            return;
        }
        if (!this.ctx === false && !!this._.isSimple(this.ctx) === false && !this.ctx.link === false) {
            {
                function _$7follow() {
                    if (this.ctx.link === "no-follow") {
                        return undefined;
                    } else {
                        undefined;
                    }
                    var data = this._links[this.ctx.link];
                    return "", __r47 = this.ctx, this.ctx = data, __r48 = apply.call(__this), this.ctx = __r47, "", __r48;
                }
                if (!cache || !this._cacheLog) {
                    return _$7follow.call(this);
                } else {
                    undefined;
                }
                var _$7contents = this._buf.slice(this._cachePos).join("");
                this._cachePos = this._buf.length;
                this._cacheLog.push(_$7contents, {
                    log: this._localLog.slice(),
                    link: this.ctx.link
                });
                var _$7res = _$7follow.call(this);
                this._cachePos = this._buf.length;
                return _$7res;
            }
            return;
        }
        if (!cache === false && !this.ctx === false && !this.ctx.cache === false) {
            {
                var _$6cached;
                function _$6setProperty(obj, key, value) {
                    if (key.length === 0) {
                        return undefined;
                    } else {
                        undefined;
                    }
                    if (Array.isArray(value)) {
                        var target = obj;
                        for (var i = 0; i < value.length - 1; i++) {
                            target = target[value[i]];
                        }
                        value = target[value[i]];
                    } else {
                        undefined;
                    }
                    var host = obj, previous;
                    for (var i = 0; i < key.length - 1; i++) {
                        host = host[key[i]];
                    }
                    previous = host[key[i]];
                    host[key[i]] = value;
                    return previous;
                }
                if (_$6cached = cache.get(this.ctx.cache)) {
                    var _$6oldLinks = this._links;
                    if (this.ctx.links) {
                        this._links = this.ctx.links;
                    } else {
                        undefined;
                    }
                    for (var _$6i = 0; _$6i < _$6cached.log.length; _$6i++) {
                        if (typeof _$6cached.log[_$6i] === "string") {
                            this._buf.push(_$6cached.log[_$6i]);
                            continue;
                        } else {
                            undefined;
                        }
                        var _$6log = _$6cached.log[_$6i], _$6reverseLog;
                        _$6reverseLog = _$6log.log.map(function(entry) {
                            return {
                                key: entry[0],
                                value: _$6setProperty(this, entry[0], entry[1])
                            };
                        }, this).reverse();
                        {
                            "";
                            var __r37 = this.ctx, __r38 = __r37.cache;
                            __r37.cache = null;
                            var __r39 = this._cacheLog;
                            this._cacheLog = null;
                            var __r40 = this.ctx, __r41 = __r40.link;
                            __r40.link = _$6log.link;
                            apply.call(__this);
                            __r37.cache = __r38;
                            this._cacheLog = __r39;
                            __r40.link = __r41;
                            "";
                        }
                        undefined;
                        _$6reverseLog.forEach(function(entry) {
                            _$6setProperty(this, entry.key, entry.value);
                        }, this);
                    }
                    this._links = _$6oldLinks;
                    return _$6cached.res;
                } else {
                    undefined;
                }
                var _$6cacheLog = [], _$6res;
                {
                    "";
                    var __r42 = this.ctx, __r43 = __r42.cache;
                    __r42.cache = null;
                    var __r44 = this._cachePos;
                    this._cachePos = this._buf.length;
                    var __r45 = this._cacheLog;
                    this._cacheLog = _$6cacheLog;
                    var __r46 = this._localLog;
                    this._localLog = [];
                    {
                        _$6res = apply.call(__this);
                        var _$6tail = this._buf.slice(this._cachePos).join("");
                        if (_$6tail) {
                            _$6cacheLog.push(_$6tail);
                        } else {
                            undefined;
                        }
                    }
                    __r42.cache = __r43;
                    this._cachePos = __r44;
                    this._cacheLog = __r45;
                    this._localLog = __r46;
                    "";
                }
                cache.set(this.ctx.cache, {
                    log: _$6cacheLog,
                    res: _$6res
                });
                return _$6res;
            }
            return;
        }
        if (this._mode === "default") {
            {
                var _$5_this = this, _$5BEM_ = _$5_this.BEM, _$5v = this.ctx, _$5buf = this._buf, _$5tag;
                _$5tag = ("", __r8 = this._mode, this._mode = "tag", __r9 = apply.call(__this), this._mode = __r8, "", __r9);
                typeof _$5tag != "undefined" || (_$5tag = _$5v.tag);
                typeof _$5tag != "undefined" || (_$5tag = "div");
                if (_$5tag) {
                    var _$5jsParams, _$5js;
                    if (this.block && _$5v.js !== false) {
                        _$5js = ("", __r12 = this._mode, this._mode = "js", __r13 = apply.call(__this), this._mode = __r12, "", __r13);
                        _$5js = _$5js ? this._.extend(_$5v.js, _$5js === true ? {} : _$5js) : _$5v.js === true ? {} : _$5v.js;
                        _$5js && ((_$5jsParams = {})[_$5BEM_.INTERNAL.buildClass(this.block, _$5v.elem)] = _$5js);
                    } else {
                        undefined;
                    }
                    _$5buf.push("<", _$5tag);
                    var _$5isBEM = ("", __r14 = this._mode, this._mode = "bem", __r15 = apply.call(__this), this._mode = __r14, "", __r15);
                    typeof _$5isBEM != "undefined" || (_$5isBEM = typeof _$5v.bem != "undefined" ? _$5v.bem : _$5v.block || _$5v.elem);
                    var _$5cls = ("", __r16 = this._mode, this._mode = "cls", __r17 = apply.call(__this), this._mode = __r16, "", __r17);
                    _$5cls || (_$5cls = _$5v.cls);
                    var _$5addJSInitClass = _$5v.block && _$5jsParams;
                    if (_$5isBEM || _$5cls) {
                        _$5buf.push(' class="');
                        if (_$5isBEM) {
                            _$5BEM_.INTERNAL.buildClasses(this.block, _$5v.elem, _$5v.elemMods || _$5v.mods, _$5buf);
                            var _$5mix = ("", __r18 = this._mode, this._mode = "mix", __r19 = apply.call(__this), this._mode = __r18, "", __r19);
                            _$5v.mix && (_$5mix = _$5mix ? _$5mix.concat(_$5v.mix) : _$5v.mix);
                            if (_$5mix) {
                                var _$5visited = {};
                                function _$5visitedKey(block, elem) {
                                    return (block || "") + "__" + (elem || "");
                                }
                                _$5visited[_$5visitedKey(this.block, this.elem)] = true;
                                if (!this._.isArray(_$5mix)) {
                                    _$5mix = [ _$5mix ];
                                } else {
                                    undefined;
                                }
                                for (var _$5i = 0; _$5i < _$5mix.length; _$5i++) {
                                    var _$5mixItem = _$5mix[_$5i], _$5hasItem = _$5mixItem.block || _$5mixItem.elem, _$5block = _$5mixItem.block || _$5mixItem._block || _$5_this.block, _$5elem = _$5mixItem.elem || _$5mixItem._elem || _$5_this.elem;
                                    _$5hasItem && _$5buf.push(" ");
                                    _$5BEM_.INTERNAL[_$5hasItem ? "buildClasses" : "buildModsClasses"](_$5block, _$5mixItem.elem || _$5mixItem._elem || (_$5mixItem.block ? undefined : _$5_this.elem), _$5mixItem.elemMods || _$5mixItem.mods, _$5buf);
                                    if (_$5mixItem.js) {
                                        (_$5jsParams || (_$5jsParams = {}))[_$5BEM_.INTERNAL.buildClass(_$5block, _$5mixItem.elem)] = _$5mixItem.js === true ? {} : _$5mixItem.js;
                                        _$5addJSInitClass || (_$5addJSInitClass = _$5block && !_$5mixItem.elem);
                                    } else {
                                        undefined;
                                    }
                                    if (_$5hasItem && !_$5visited[_$5visitedKey(_$5block, _$5elem)]) {
                                        _$5visited[_$5visitedKey(_$5block, _$5elem)] = true;
                                        var _$5nestedMix = ("", __r20 = this.block, this.block = _$5block, __r21 = this.elem, this.elem = _$5elem, __r22 = this._mode, this._mode = "mix", __r23 = apply.call(__this), this.block = __r20, this.elem = __r21, this._mode = __r22, "", __r23);
                                        if (_$5nestedMix) {
                                            for (var _$5j = 0; _$5j < _$5nestedMix.length; _$5j++) {
                                                var _$5nestedItem = _$5nestedMix[_$5j];
                                                if (!_$5nestedItem.block && !_$5nestedItem.elem || !_$5visited[_$5visitedKey(_$5nestedItem.block, _$5nestedItem.elem)]) {
                                                    _$5nestedItem._block = _$5block;
                                                    _$5nestedItem._elem = _$5elem;
                                                    _$5mix.splice(_$5i + 1, 0, _$5nestedItem);
                                                } else {
                                                    undefined;
                                                }
                                            }
                                        } else {
                                            undefined;
                                        }
                                    } else {
                                        undefined;
                                    }
                                }
                            } else {
                                undefined;
                            }
                        } else {
                            undefined;
                        }
                        _$5cls && _$5buf.push(_$5isBEM ? " " : "", _$5cls);
                        _$5addJSInitClass && _$5buf.push(" i-bem");
                        _$5buf.push('"');
                    } else {
                        undefined;
                    }
                    if (_$5jsParams) {
                        var _$5jsAttr = ("", __r26 = this._mode, this._mode = "jsAttr", __r27 = apply.call(__this), this._mode = __r26, "", __r27);
                        _$5buf.push(" ", _$5jsAttr || "onclick", '="return ', this._.attrEscape(JSON.stringify(_$5jsParams)), '"');
                    } else {
                        undefined;
                    }
                    var _$5attrs = ("", __r28 = this._mode, this._mode = "attrs", __r29 = apply.call(__this), this._mode = __r28, "", __r29);
                    _$5attrs = this._.extend(_$5attrs, _$5v.attrs);
                    if (_$5attrs) {
                        var _$5name;
                        for (_$5name in _$5attrs) {
                            if (_$5attrs[_$5name] === undefined) {
                                continue;
                            } else {
                                undefined;
                            }
                            _$5buf.push(" ", _$5name, '="', this._.attrEscape(_$5attrs[_$5name]), '"');
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                if (this._.isShortTag(_$5tag)) {
                    _$5buf.push("/>");
                } else {
                    _$5tag && _$5buf.push(">");
                    var _$5content = ("", __r30 = this._mode, this._mode = "content", __r31 = apply.call(__this), this._mode = __r30, "", __r31);
                    if (_$5content || _$5content === 0) {
                        var _$5isBEM = this.block || this.elem;
                        {
                            "";
                            var __r32 = this._notNewList;
                            this._notNewList = false;
                            var __r33 = this.position;
                            this.position = _$5isBEM ? 1 : this.position;
                            var __r34 = this._listLength;
                            this._listLength = _$5isBEM ? 1 : this._listLength;
                            var __r35 = this.ctx;
                            this.ctx = _$5content;
                            var __r36 = this._mode;
                            this._mode = "";
                            apply.call(__this);
                            this._notNewList = __r32;
                            this.position = __r33;
                            this._listLength = __r34;
                            this.ctx = __r35;
                            this._mode = __r36;
                            "";
                        }
                        undefined;
                    } else {
                        undefined;
                    }
                    _$5tag && _$5buf.push("</", _$5tag, ">");
                }
            }
            return;
        }
        if (this._mode === "" && !this._.isSimple(this.ctx) === false) {
            {
                this._listLength--;
                var _$4ctx = this.ctx;
                (_$4ctx && _$4ctx !== true || _$4ctx === 0) && this._buf.push(_$4ctx);
            }
            return;
        }
        if (this._mode === "" && !!this.ctx === false) {
            this._listLength--;
            return;
        }
        if (this._mode === "" && !this._.isArray(this.ctx) === false) {
            {
                var _$2v = this.ctx, _$2l = _$2v.length, _$2i = 0, _$2prevPos = this.position, _$2prevNotNewList = this._notNewList;
                if (_$2prevNotNewList) {
                    this._listLength += _$2l - 1;
                } else {
                    this.position = 0;
                    this._listLength = _$2l;
                }
                this._notNewList = true;
                while (_$2i < _$2l) {
                    var _$2newCtx = _$2v[_$2i++];
                    {
                        "";
                        var __r7 = this.ctx;
                        this.ctx = _$2newCtx === null ? "" : _$2newCtx;
                        apply.call(__this);
                        this.ctx = __r7;
                        "";
                    }
                    undefined;
                }
                _$2prevNotNewList || (this.position = _$2prevPos);
            }
            return;
        }
        if (this._mode === "" && !true === false) {
            {
                var _$1vBlock = this.ctx.block, _$1vElem = this.ctx.elem, _$1block = this._currBlock || this.block;
                this.ctx || (this.ctx = {});
                {
                    "";
                    var __r0 = this._mode;
                    this._mode = "default";
                    var __r1 = this._links;
                    this._links = this.ctx.links || this._links;
                    var __r2 = this.block;
                    this.block = _$1vBlock || (_$1vElem ? _$1block : undefined);
                    var __r3 = this._currBlock;
                    this._currBlock = _$1vBlock || _$1vElem ? undefined : _$1block;
                    var __r4 = this.elem;
                    this.elem = this.ctx.elem;
                    var __r5 = this.mods;
                    this.mods = (_$1vBlock ? this.ctx.mods : this.mods) || {};
                    var __r6 = this.elemMods;
                    this.elemMods = this.ctx.elemMods || {};
                    {
                        this.block || this.elem ? this.position = (this.position || 0) + 1 : this._listLength--;
                        apply.call(__this);
                        undefined;
                    }
                    this._mode = __r0;
                    this._links = __r1;
                    this.block = __r2;
                    this._currBlock = __r3;
                    this.elem = __r4;
                    this.mods = __r5;
                    this.elemMods = __r6;
                    "";
                }
            }
            return;
        }
        if (!!this.elem === false && this.block === "custom-fonts" && this._mode === "tag") {
            return "";
            return;
        }
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    if (!options) options = {};
    cache = options.cache;
    return xjst.apply.call(
[this]
    );
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);