/* @generated */
G.def("ga", function() {
    window._gaq = window._gaq || [], document.location.host.indexOf("liuyanbaike.com") !== -1 ? (_gaq.push(["_setAccount", "UA-43361346-1"]), _gaq.push(["_setDomainName", "liuyanbaike.com"])) : (_gaq.push(["_setAccount", "UA-19521615-1"]), _gaq.push(["_setDomainName", "guokr.com"])), window.ukey ? (_gaq.push(["_setCustomVar", 1, "Is Registered", "Yes", 1]), _gaq.push(["_setCustomVar", 2, "Is Signed In", "Yes", 3])) : (_gaq.push(function() {
        var a = _gat._getTrackerByName(),
            b = a._getVisitorCustomVar(1);
        b !== "Yes" && b !== "No" && _gaq.push(["_setCustomVar", 1, "Is Registered", "No", 1])
    }), _gaq.push(["_setCustomVar", 2, "Is Signed In", "No", 3])), _gaq.push(["_trackPageview"]), _gaq.push(["_trackPageLoadTime"]);
    var a = "text/javascript",
        b = !0,
        c = document.getElementsByTagName("script")[0],
        d = document.createElement("script");
    d.type = a, d.async = b, d.src = "", c.parentNode.insertBefore(d, c), _gaq.push(["_addOrganic", "image.baidu.com", "word", !0]), _gaq.push(["_addOrganic", "video.baidu.com", "word", !0]), _gaq.push(["_addOrganic", "news.baidu.com", "word", !0]), _gaq.push(["_addOrganic", "baidu", "word"]), _gaq.push(["_addOrganic", "image.so.com", "q"]), _gaq.push(["_addOrganic", "video.so.com", "q"]), _gaq.push(["_addOrganic", "news.so.com", "q"]), _gaq.push(["_addOrganic", "so", "q"]), _gaq.push(["_addOrganic", "pic.sogou.com", "query"]), _gaq.push(["_addOrganic", "v.sogou.com", "query"]), _gaq.push(["_addOrganic", "news.sogou.com", "query"]), _gaq.push(["_addOrganic", "sogou", "query"]), _gaq.push(["_addOrganic", "image.soso.com", "w"]), _gaq.push(["_addOrganic", "video.soso.com", "w"]), _gaq.push(["_addOrganic", "news.soso.com", "w"]), _gaq.push(["_addOrganic", "soso", "w"]), _gaq.push(["_addOrganic", "image.youdao.com", "q"]), _gaq.push(["_addOrganic", "video.youdao.com", "q"]), _gaq.push(["_addOrganic", "news.youdao.com", "q"]), _gaq.push(["_addOrganic", "youdao", "q"]), _gaq.push(["_addOrganic", "pic.gougou.com", "search"]), _gaq.push(["_addOrganic", "movie.gougou.com", "search"]), _gaq.push(["_addOrganic", "gougou", "search"]);
    var e = document.referrer;
    if (e.search(/google.*imgres/) != -1) {
        var f = new RegExp(".google.([^/]+)(.*)"),
            g = f.exec(e);
        _gaq.push(["_setReferrerOverride", "http://images.google." + g[1] + g[2]])
    }
    _gaq.push(["_addOrganic", "images.google", "q", !0])
}), G.def("jQuery", function() {
    function e(a, c, e) {
        if (e === undefined && a.nodeType === 1) {
            e = a.getAttribute("data-" + c);
            if (typeof e == "string") {
                try {
                    e = e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : b.isNaN(e) ? d.test(e) ? b.parseJSON(e) : e : parseFloat(e)
                } catch (f) {}
                b.data(a, c, e)
            } else e = undefined
        }
        return e
    }

    function u() {
        return !1
    }

    function v() {
        return !0
    }

    function B(a, c, d) {
        return d[0].type = a, b.event.handle.apply(c, d)
    }

    function D(a) {
        var c, d, e, f, g, h, i, j, k, l, m, o, p, q = [],
            r = [],
            s = b.data(this, this.nodeType ? "events" : "__events__");
        typeof s == "function" && (s = s.events);
        if (a.liveFired === this || !s || !s.live || a.button && a.type === "click") return;
        a.namespace && (o = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
        var t = s.live.slice(0);
        for (i = 0; i < t.length; i++) g = t[i], g.origType.replace(n, "") === a.type ? r.push(g.selector) : t.splice(i--, 1);
        f = b(a.target).closest(r, a.currentTarget);
        for (j = 0, k = f.length; j < k; j++) {
            m = f[j];
            for (i = 0; i < t.length; i++) {
                g = t[i];
                if (m.selector === g.selector && (!o || o.test(g.namespace))) {
                    h = m.elem, e = null;
                    if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType, e = b(a.relatedTarget).closest(g.selector)[0];
                    (!e || e !== h) && q.push({
                        elem: h,
                        handleObj: g,
                        level: m.level
                    })
                }
            }
        }
        for (j = 0, k = q.length; j < k; j++) {
            f = q[j];
            if (d && f.level > d) break;
            a.currentTarget = f.elem, a.data = f.handleObj.data, a.handleObj = f.handleObj, p = f.handleObj.origHandler.apply(f.elem, arguments);
            if (p === !1 || a.isPropagationStopped()) {
                d = f.level, p === !1 && (c = !1);
                if (a.isImmediatePropagationStopped()) break
            }
        }
        return c
    }

    function E(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(p, "`").replace(q, "&")
    }

    function M(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function N(a, c, d) {
        if (b.isFunction(c)) return b.grep(a, function(a, b) {
            var e = !!c.call(a, b, a);
            return e === d
        });
        if (c.nodeType) return b.grep(a, function(a, b) {
            return a === c === d
        });
        if (typeof c == "string") {
            var e = b.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (J.test(c)) return b.filter(c, e, !d);
            c = b.filter(c, e)
        }
        return b.grep(a, function(a, e) {
            return b.inArray(a, c) >= 0 === d
        })
    }

    function Y(a, c) {
        return b.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Z(a, c) {
        var d = 0;
        c.each(function() {
            if (this.nodeName !== (a[d] && a[d].nodeName)) return;
            var c = b.data(a[d++]),
                e = b.data(this, c),
                f = c && c.events;
            if (f) {
                delete e.handle, e.events = {};
                for (var g in f)
                    for (var h in f[g]) b.event.add(this, g, f[g][h], f[g][h].data)
            }
        })
    }

    function _(a, c) {
        c.src ? b.ajax({
            url: c.src,
            async: !1,
            dataType: "script"
        }) : b.globalEval(c.text || c.textContent || c.innerHTML || ""), c.parentNode && c.parentNode.removeChild(c)
    }

    function bn(a, c, d) {
        var e = c === "width" ? bh : bi,
            f = c === "width" ? a.offsetWidth : a.offsetHeight;
        return d === "border" ? f : (b.each(e, function() {
            d || (f -= parseFloat(b.css(a, "padding" + this)) || 0), d === "margin" ? f += parseFloat(b.css(a, "margin" + this)) || 0 : f -= parseFloat(b.css(a, "border" + this + "Width")) || 0
        }), f)
    }

    function bB(a, c, d, e) {
        b.isArray(c) && c.length ? b.each(c, function(c, f) {
            d || bt.test(a) ? e(a, f) : bB(a + "[" + (typeof f == "object" || b.isArray(f) ? c : "") + "]", f, d, e)
        }) : !d && c != null && typeof c == "object" ? b.isEmptyObject(c) ? e(a, "") : b.each(c, function(b, c) {
            bB(a + "[" + b + "]", c, d, e)
        }) : e(a, c)
    }

    function bH(a, c) {
        var d = {};
        return b.each(bG.concat.apply([], bG.slice(0, c)), function() {
            d[this] = a
        }), d
    }

    function bI(a) {
        if (!bC[a]) {
            var c = b("<" + a + ">").appendTo("body"),
                d = c.css("display");
            c.remove();
            if (d === "none" || d === "") d = "block";
            bC[a] = d
        }
        return bC[a]
    }

    function bL(a) {
        return b.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var a = window.document,
        b = function() {
            function I() {
                if (b.isReady) return;
                try {
                    a.documentElement.doScroll("left")
                } catch (c) {
                    setTimeout(I, 1);
                    return
                }
                b.ready()
            }
            var b = function(a, c) {
                    return new b.fn.init(a, c)
                },
                c = window.jQuery,
                d = window.$,
                e, f = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                g = /^.[^:#\[\.,]*$/,
                h = /\S/,
                i = /\s/,
                j = /^\s+/,
                k = /\s+$/,
                l = /\W/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = navigator.userAgent,
                x, y = !1,
                z = [],
                A, B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                G = Array.prototype.indexOf,
                H = {};
            return b.fn = b.prototype = {
                init: function(c, d) {
                    var g, h, i, j;
                    if (!c) return this;
                    if (c.nodeType) return this.context = this[0] = c, this.length = 1, this;
                    if (c === "body" && !d && a.body) return this.context = a, this[0] = a.body, this.selector = "body", this.length = 1, this;
                    if (typeof c == "string") {
                        g = f.exec(c);
                        if (g && (g[1] || !d)) {
                            if (g[1]) return j = d ? d.ownerDocument || d : a, i = n.exec(c), i ? b.isPlainObject(d) ? (c = [a.createElement(i[1])], b.fn.attr.call(c, d, !0)) : c = [j.createElement(i[1])] : (i = b.buildFragment([g[1]], [j]), c = (i.cacheable ? i.fragment.cloneNode(!0) : i.fragment).childNodes), b.merge(this, c);
                            h = a.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return e.find(c);
                                this.length = 1, this[0] = h
                            }
                            return this.context = a, this.selector = c, this
                        }
                        return !d && !l.test(c) ? (this.selector = c, this.context = a, c = a.getElementsByTagName(c), b.merge(this, c)) : !d || d.jquery ? (d || e).find(c) : b(d).find(c)
                    }
                    return b.isFunction(c) ? e.ready(c) : (c.selector !== undefined && (this.selector = c.selector, this.context = c.context), b.makeArray(c, this))
                },
                selector: "",
                jquery: "1.4.4",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return E.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
                },
                pushStack: function(a, c, d) {
                    var e = b();
                    return b.isArray(a) ? D.apply(e, a) : b.merge(e, a), e.prevObject = this, e.context = this.context, c === "find" ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")"), e
                },
                each: function(a, c) {
                    return b.each(this, a, c)
                },
                ready: function(c) {
                    return b.bindReady(), b.isReady ? c.call(a, b) : z && z.push(c), this
                },
                eq: function(a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(b.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || b(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
                var a, c, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !b.isFunction(h) && (h = {}), j === i && (h = this, --i);
                for (; i < j; i++)
                    if ((a = arguments[i]) != null)
                        for (c in a) {
                            d = h[c], e = a[c];
                            if (h === e) continue;
                            k && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, g = d && b.isArray(d) ? d : []) : g = d && b.isPlainObject(d) ? d : {}, h[c] = b.extend(k, g, e)) : e !== undefined && (h[c] = e)
                        }
                return h
            }, b.extend({
                noConflict: function(a) {
                    return window.$ = d, a && (window.jQuery = c), b
                },
                isReady: !1,
                readyWait: 1,
                ready: function(c) {
                    c === !0 && b.readyWait--;
                    if (!b.readyWait || c !== !0 && !b.isReady) {
                        if (!a.body) return setTimeout(b.ready, 1);
                        b.isReady = !0;
                        if (c !== !0 && --b.readyWait > 0) return;
                        if (z) {
                            var d, e = 0,
                                f = z;
                            z = null;
                            while (d = f[e++]) d.call(a, b);
                            b.fn.trigger && b(a).trigger("ready").unbind("ready")
                        }
                    }
                },
                bindReady: function() {
                    if (y) return;
                    y = !0;
                    if (a.readyState === "complete") return setTimeout(b.ready, 1);
                    if (a.addEventListener) a.addEventListener("DOMContentLoaded", A, !1), window.addEventListener("load", b.ready, !1);
                    else if (a.attachEvent) {
                        a.attachEvent("onreadystatechange", A), window.attachEvent("onload", b.ready);
                        var c = !1;
                        try {
                            c = window.frameElement == null
                        } catch (d) {}
                        a.documentElement.doScroll && c && I()
                    }
                },
                isFunction: function(a) {
                    return b.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return b.type(a) === "array"
                },
                isWindow: function(a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNaN: function(a) {
                    return a == null || !m.test(a) || isNaN(a)
                },
                type: function(a) {
                    return a == null ? String(a) : H[B.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || b.type(a) !== "object" || a.nodeType || b.isWindow(a)) return !1;
                    if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    var c;
                    for (c in a);
                    return c === undefined || C.call(a, c)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw a
                },
                parseJSON: function(a) {
                    if (typeof a != "string" || !a) return null;
                    a = b.trim(a);
                    if (o.test(a.replace(p, "@").replace(q, "]").replace(r, ""))) return window.JSON && window.JSON.parse ? window.JSON.parse(a) : (new Function("return " + a))();
                    b.error("Invalid JSON: " + a)
                },
                noop: function() {},
                globalEval: function(c) {
                    if (c && h.test(c)) {
                        var d = a.getElementsByTagName("head")[0] || a.documentElement,
                            e = a.createElement("script");
                        e.type = "text/javascript", b.support.scriptEval ? e.appendChild(a.createTextNode(c)) : e.text = c, d.insertBefore(e, d.firstChild), d.removeChild(e)
                    }
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        h = g === undefined || b.isFunction(a);
                    if (d) {
                        if (h) {
                            for (e in a)
                                if (c.apply(a[e], d) === !1) break
                        } else
                            for (; f < g;)
                                if (c.apply(a[f++], d) === !1) break
                    } else if (h) {
                        for (e in a)
                            if (c.call(a[e], e, a[e]) === !1) break
                    } else
                        for (var i = a[0]; f < g && c.call(i, f, i) !== !1; i = a[++f]);
                    return a
                },
                trim: F ? function(a) {
                    return a == null ? "" : F.call(a)
                } : function(a) {
                    return a == null ? "" : a.toString().replace(j, "").replace(k, "")
                },
                makeArray: function(a, c) {
                    var d = c || [];
                    if (a != null) {
                        var e = b.type(a);
                        a.length == null || e === "string" || e === "function" || e === "regexp" || b.isWindow(a) ? D.call(d, a) : b.merge(d, a)
                    }
                    return d
                },
                inArray: function(a, b) {
                    if (b.indexOf) return b.indexOf(a);
                    for (var c = 0, d = b.length; c < d; c++)
                        if (b[c] === a) return c;
                    return -1
                },
                merge: function(a, b) {
                    var c = a.length,
                        d = 0;
                    if (typeof b.length == "number")
                        for (var e = b.length; d < e; d++) a[c++] = b[d];
                    else
                        while (b[d] !== undefined) a[c++] = b[d++];
                    return a.length = c, a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, b, c) {
                    var d = [],
                        e;
                    for (var f = 0, g = a.length; f < g; f++) e = b(a[f], f, c), e != null && (d[d.length] = e);
                    return d.concat.apply([], d)
                },
                guid: 1,
                proxy: function(a, c, d) {
                    return arguments.length === 2 && (typeof c == "string" ? (d = a, a = d[c], c = undefined) : c && !b.isFunction(c) && (d = c, c = undefined)), !c && a && (c = function() {
                        return a.apply(d || this, arguments)
                    }), a && (c.guid = a.guid = a.guid || c.guid || b.guid++), c
                },
                access: function(a, c, d, e, f, g) {
                    var h = a.length;
                    if (typeof c == "object") {
                        for (var i in c) b.access(a, i, c[i], e, f, d);
                        return a
                    }
                    if (d !== undefined) {
                        e = !g && e && b.isFunction(d);
                        for (var j = 0; j < h; j++) f(a[j], c, e ? d.call(a[j], j, f(a[j], c)) : d, g);
                        return a
                    }
                    return h ? f(a[0], c) : undefined
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                browser: {}
            }), b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                H["[object " + b + "]"] = b.toLowerCase()
            }), x = b.uaMatch(w), x.browser && (b.browser[x.browser] = !0, b.browser.version = x.version), b.browser.webkit && (b.browser.safari = !0), G && (b.inArray = function(a, b) {
                return G.call(b, a)
            }), i.test(" ") || (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/), e = b(a), a.addEventListener ? A = function() {
                a.removeEventListener("DOMContentLoaded", A, !1), b.ready()
            } : a.attachEvent && (A = function() {
                a.readyState === "complete" && (a.detachEvent("onreadystatechange", A), b.ready())
            }), window.jQuery = window.$ = b
        }();
    (function() {
        b.support = {};
        var c = a.documentElement,
            d = a.createElement("script"),
            e = a.createElement("div"),
            f = "script" + b.now();
        e.style.display = "none", e.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var g = e.getElementsByTagName("*"),
            h = e.getElementsByTagName("a")[0],
            i = a.createElement("select"),
            j = i.appendChild(a.createElement("option"));
        if (!g || !g.length || !h) return;
        b.support = {
            leadingWhitespace: e.firstChild.nodeType === 3,
            tbody: !e.getElementsByTagName("tbody").length,
            htmlSerialize: !!e.getElementsByTagName("link").length,
            style: /red/.test(h.getAttribute("style")),
            hrefNormalized: h.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(h.style.opacity),
            cssFloat: !!h.style.cssFloat,
            checkOn: e.getElementsByTagName("input")[0].value === "on",
            optSelected: j.selected,
            deleteExpando: !0,
            optDisabled: !1,
            checkClone: !1,
            scriptEval: !1,
            noCloneEvent: !0,
            boxModel: null,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableHiddenOffsets: !0
        }, i.disabled = !0, b.support.optDisabled = !j.disabled, d.type = "text/javascript";
        try {
            d.appendChild(a.createTextNode("window." + f + "=1;"))
        } catch (k) {}
        c.insertBefore(d, c.firstChild), window[f] && (b.support.scriptEval = !0, delete window[f]);
        try {
            delete d.test
        } catch (k) {
            b.support.deleteExpando = !1
        }
        c.removeChild(d), e.attachEvent && e.fireEvent && (e.attachEvent("onclick", function n() {
            b.support.noCloneEvent = !1, e.detachEvent("onclick", n)
        }), e.cloneNode(!0).fireEvent("onclick")), e = a.createElement("div"), e.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var l = a.createDocumentFragment();
        l.appendChild(e.firstChild), b.support.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, b(function() {
            var c = a.createElement("div");
            c.style.width = c.style.paddingLeft = "1px", a.body.appendChild(c), b.boxModel = b.support.boxModel = c.offsetWidth === 2, "zoom" in c.style && (c.style.display = "inline", c.style.zoom = 1, b.support.inlineBlockNeedsLayout = c.offsetWidth === 2, c.style.display = "", c.innerHTML = "<div style='width:4px;'></div>", b.support.shrinkWrapBlocks = c.offsetWidth !== 2), c.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
            var d = c.getElementsByTagName("td");
            b.support.reliableHiddenOffsets = d[0].offsetHeight === 0, d[0].style.display = "", d[1].style.display = "none", b.support.reliableHiddenOffsets = b.support.reliableHiddenOffsets && d[0].offsetHeight === 0, c.innerHTML = "", a.body.removeChild(c).style.display = "none", c = d = null
        });
        var m = function(b) {
            var c = a.createElement("div");
            b = "on" + b;
            var d = b in c;
            return d || (c.setAttribute(b, "return;"), d = typeof c[b] == "function"), c = null, d
        };
        b.support.submitBubbles = m("submit"), b.support.changeBubbles = m("change"), c = d = e = g = h = null
    })();
    var c = {},
        d = /^(?:\{.*\}|\[.*\])$/;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + b.now(),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        data: function(a, d, e) {
            if (!b.acceptData(a)) return;
            a = a == window ? c : a;
            var f = a.nodeType,
                g = f ? a[b.expando] : null,
                h = b.cache,
                i;
            if (f && !g && typeof d == "string" && e === undefined) return;
            return f ? g || (a[b.expando] = g = ++b.uuid) : h = a, typeof d == "object" ? f ? h[g] = b.extend(h[g], d) : b.extend(h, d) : f && !h[g] && (h[g] = {}), i = f ? h[g] : h, e !== undefined && (i[d] = e), typeof d == "string" ? i[d] : i
        },
        removeData: function(a, d) {
            if (!b.acceptData(a)) return;
            a = a == window ? c : a;
            var e = a.nodeType,
                f = e ? a[b.expando] : a,
                g = b.cache,
                h = e ? g[f] : f;
            if (d) h && (delete h[d], e && b.isEmptyObject(h) && b.removeData(a));
            else if (e && b.support.deleteExpando) delete a[b.expando];
            else if (a.removeAttribute) a.removeAttribute(b.expando);
            else if (e) delete g[f];
            else
                for (var i in a) delete a[i]
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var c = b.noData[a.nodeName.toLowerCase()];
                if (c) return c !== !0 && a.getAttribute("classid") === c
            }
            return !0
        }
    }), b.fn.extend({
        data: function(a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    var f = this[0].attributes,
                        g;
                    d = b.data(this[0]);
                    for (var h = 0, i = f.length; h < i; h++) g = f[h].name, g.indexOf("data-") === 0 && (g = g.substr(5), e(this[0], g, d[g]))
                }
                return d
            }
            if (typeof a == "object") return this.each(function() {
                b.data(this, a)
            });
            var j = a.split(".");
            return j[1] = j[1] ? "." + j[1] : "", c === undefined ? (d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === undefined && this.length && (d = b.data(this[0], a), d = e(this[0], a, d)), d === undefined && j[1] ? this.data(j[0]) : d) : this.each(function() {
                var d = b(this),
                    e = [j[0], c];
                d.triggerHandler("setData" + j[1] + "!", e), b.data(this, a, c), d.triggerHandler("changeData" + j[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                b.removeData(this, a)
            })
        }
    }), b.extend({
        queue: function(a, c, d) {
            if (!a) return;
            c = (c || "fx") + "queue";
            var e = b.data(a, c);
            return d ? (!e || b.isArray(d) ? e = b.data(a, c, b.makeArray(d)) : e.push(d), e) : e || []
        },
        dequeue: function(a, c) {
            c = c || "fx";
            var d = b.queue(a, c),
                e = d.shift();
            e === "inprogress" && (e = d.shift()), e && (c === "fx" && d.unshift("inprogress"), e.call(a, function() {
                b.dequeue(a, c)
            }))
        }
    }), b.fn.extend({
        queue: function(a, c) {
            return typeof a != "string" && (c = a, a = "fx"), c === undefined ? b.queue(this[0], a) : this.each(function(d) {
                var e = b.queue(this, a, c);
                a === "fx" && e[0] !== "inprogress" && b.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                b.dequeue(this, a)
            })
        },
        delay: function(a, c) {
            return a = b.fx ? b.fx.speeds[a] || a : a, c = c || "fx", this.queue(c, function() {
                var d = this;
                setTimeout(function() {
                    b.dequeue(d, c)
                }, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var f = /[\n\t]/g,
        g = /\s+/,
        h = /\r/g,
        i = /^(?:href|src|style)$/,
        j = /^(?:button|input)$/i,
        k = /^(?:button|input|object|select|textarea)$/i,
        l = /^a(?:rea)?$/i,
        m = /^(?:radio|checkbox)$/i;
    b.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    }, b.fn.extend({
        attr: function(a, c) {
            return b.access(this, a, c, !0, b.attr)
        },
        removeAttr: function(a, c) {
            return this.each(function() {
                b.attr(this, a, ""), this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                var d = b(this);
                d.addClass(a.call(this, c, d.attr("class")))
            });
            if (a && typeof a == "string") {
                var c = (a || "").split(g);
                for (var d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (f.nodeType === 1)
                        if (!f.className) f.className = a;
                        else {
                            var h = " " + f.className + " ",
                                i = f.className;
                            for (var j = 0, k = c.length; j < k; j++) h.indexOf(" " + c[j] + " ") < 0 && (i += " " + c[j]);
                            f.className = b.trim(i)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                var d = b(this);
                d.removeClass(a.call(this, c, d.attr("class")))
            });
            if (a && typeof a == "string" || a === undefined) {
                var c = (a || "").split(g);
                for (var d = 0, e = this.length; d < e; d++) {
                    var h = this[d];
                    if (h.nodeType === 1 && h.className)
                        if (a) {
                            var i = (" " + h.className + " ").replace(f, " ");
                            for (var j = 0, k = c.length; j < k; j++) i = i.replace(" " + c[j] + " ", " ");
                            h.className = b.trim(i)
                        } else h.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, c) {
            var d = typeof a,
                e = typeof c == "boolean";
            return b.isFunction(a) ? this.each(function(d) {
                var e = b(this);
                e.toggleClass(a.call(this, d, e.attr("class"), c), c)
            }) : this.each(function() {
                if (d === "string") {
                    var f, h = 0,
                        i = b(this),
                        j = c,
                        k = a.split(g);
                    while (f = k[h++]) j = e ? j : !i.hasClass(f), i[j ? "addClass" : "removeClass"](f)
                } else if (d === "undefined" || d === "boolean") this.className && b.data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : b.data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if ((" " + this[c].className + " ").replace(f, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            if (!arguments.length) {
                var c = this[0];
                if (c) {
                    if (b.nodeName(c, "option")) {
                        var d = c.attributes.value;
                        return !d || d.specified ? c.value : c.text
                    }
                    if (b.nodeName(c, "select")) {
                        var e = c.selectedIndex,
                            f = [],
                            g = c.options,
                            i = c.type === "select-one";
                        if (e < 0) return null;
                        for (var j = i ? e : 0, k = i ? e + 1 : g.length; j < k; j++) {
                            var l = g[j];
                            if (l.selected && (b.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !b.nodeName(l.parentNode, "optgroup"))) {
                                a = b(l).val();
                                if (i) return a;
                                f.push(a)
                            }
                        }
                        return f
                    }
                    return m.test(c.type) && !b.support.checkOn ? c.getAttribute("value") === null ? "on" : c.value : (c.value || "").replace(h, "")
                }
                return undefined
            }
            var n = b.isFunction(a);
            return this.each(function(c) {
                var d = b(this),
                    e = a;
                if (this.nodeType !== 1) return;
                n && (e = a.call(this, c, d.val())), e == null ? e = "" : typeof e == "number" ? e += "" : b.isArray(e) && (e = b.map(e, function(a) {
                    return a == null ? "" : a + ""
                }));
                if (b.isArray(e) && m.test(this.type)) this.checked = b.inArray(d.val(), e) >= 0;
                else if (b.nodeName(this, "select")) {
                    var f = b.makeArray(e);
                    b("option", this).each(function() {
                        this.selected = b.inArray(b(this).val(), f) >= 0
                    }), f.length || (this.selectedIndex = -1)
                } else this.value = e
            })
        }
    }), b.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return undefined;
            if (e && c in b.attrFn) return b(a)[c](d);
            var f = a.nodeType !== 1 || !b.isXMLDoc(a),
                g = d !== undefined;
            c = f && b.props[c] || c;
            var h = i.test(c);
            if (c === "selected" && !b.support.optSelected) {
                var m = a.parentNode;
                m && (m.selectedIndex, m.parentNode && m.parentNode.selectedIndex)
            }
            if ((c in a || a[c] !== undefined) && f && !h) {
                g && (c === "type" && j.test(a.nodeName) && a.parentNode && b.error("type property can't be changed"), d === null ? a.nodeType === 1 && a.removeAttribute(c) : a[c] = d);
                if (b.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
                if (c === "tabIndex") {
                    var n = a.getAttributeNode("tabIndex");
                    return n && n.specified ? n.value : k.test(a.nodeName) || l.test(a.nodeName) && a.href ? 0 : undefined
                }
                return a[c]
            }
            if (!b.support.style && f && c === "style") return g && (a.style.cssText = "" + d), a.style.cssText;
            g && a.setAttribute(c, "" + d);
            if (!a.attributes[c] && a.hasAttribute && !a.hasAttribute(c)) return undefined;
            var o = !b.support.hrefNormalized && f && h ? a.getAttribute(c, 2) : a.getAttribute(c);
            return o === null ? undefined : o
        }
    });
    var n = /\.(.*)$/,
        o = /^(?:textarea|input|select)$/i,
        p = /\./g,
        q = / /g,
        r = /[^\w\s.|`]/g,
        s = function(a) {
            return a.replace(r, "\\$&")
        },
        t = {
            focusin: 0,
            focusout: 0
        };
    b.event = {
        add: function(a, c, d, e) {
            if (a.nodeType === 3 || a.nodeType === 8) return;
            b.isWindow(a) && a !== window && !a.frameElement && (a = window);
            if (d === !1) d = u;
            else if (!d) return;
            var f, g;
            d.handler && (f = d, d = f.handler), d.guid || (d.guid = b.guid++);
            var h = b.data(a);
            if (!h) return;
            var i = a.nodeType ? "events" : "__events__",
                j = h[i],
                k = h.handle;
            typeof j == "function" ? (k = j.handle, j = j.events) : j || (a.nodeType || (h[i] = h = function() {}), h.events = j = {}), k || (h.handle = k = function() {
                return typeof b != "undefined" && !b.event.triggered ? b.event.handle.apply(k.elem, arguments) : undefined
            }), k.elem = a, c = c.split(" ");
            var l, m = 0,
                n;
            while (l = c[m++]) {
                g = f ? b.extend({}, f) : {
                    handler: d,
                    data: e
                }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), g.namespace = n.slice(0).sort().join(".")) : (n = [], g.namespace = ""), g.type = l, g.guid || (g.guid = d.guid);
                var o = j[l],
                    p = b.event.special[l] || {};
                if (!o) {
                    o = j[l] = [];
                    if (!p.setup || p.setup.call(a, e, n, k) === !1) a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                }
                p.add && (p.add.call(a, g), g.handler.guid || (g.handler.guid = d.guid)), o.push(g), b.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function(a, c, d, e) {
            if (a.nodeType === 3 || a.nodeType === 8) return;
            d === !1 && (d = u);
            var f, g, h, i, j = 0,
                k, l, m, n, o, p, q, r = a.nodeType ? "events" : "__events__",
                t = b.data(a),
                v = t && t[r];
            if (!t || !v) return;
            typeof v == "function" && (t = v, v = v.events), c && c.type && (d = c.handler, c = c.type);
            if (!c || typeof c == "string" && c.charAt(0) === ".") {
                c = c || "";
                for (g in v) b.event.remove(a, g + c);
                return
            }
            c = c.split(" ");
            while (g = c[j++]) {
                q = g, p = null, k = g.indexOf(".") < 0, l = [], k || (l = g.split("."), g = l.shift(), m = new RegExp("(^|\\.)" + b.map(l.slice(0).sort(), s).join("\\.(?:.*\\.)?") + "(\\.|$)")), o = v[g];
                if (!o) continue;
                if (!d) {
                    for (i = 0; i < o.length; i++) {
                        p = o[i];
                        if (k || m.test(p.namespace)) b.event.remove(a, q, p.handler, i), o.splice(i--, 1)
                    }
                    continue
                }
                n = b.event.special[g] || {};
                for (i = e || 0; i < o.length; i++) {
                    p = o[i];
                    if (d.guid === p.guid) {
                        if (k || m.test(p.namespace)) e == null && o.splice(i--, 1), n.remove && n.remove.call(a, p);
                        if (e != null) break
                    }
                }
                if (o.length === 0 || e != null && o.length === 1)(!n.teardown || n.teardown.call(a, l) === !1) && b.removeEvent(a, g, t.handle), f = null, delete v[g]
            }
            if (b.isEmptyObject(v)) {
                var w = t.handle;
                w && (w.elem = null), delete t.events, delete t.handle, typeof t == "function" ? b.removeData(a, r) : b.isEmptyObject(t) && b.removeData(a)
            }
        },
        trigger: function(a, c, d) {
            var e = a.type || a,
                f = arguments[3];
            if (!f) {
                a = typeof a == "object" ? a[b.expando] ? a : b.extend(b.Event(e), a) : b.Event(e), e.indexOf("!") >= 0 && (a.type = e = e.slice(0, -1), a.exclusive = !0), d || (a.stopPropagation(), b.event.global[e] && b.each(b.cache, function() {
                    this.events && this.events[e] && b.event.trigger(a, c, this.handle.elem)
                }));
                if (!d || d.nodeType === 3 || d.nodeType === 8) return undefined;
                a.result = undefined, a.target = d, c = b.makeArray(c), c.unshift(a)
            }
            a.currentTarget = d;
            var g = d.nodeType ? b.data(d, "handle") : (b.data(d, "__events__") || {}).handle;
            g && g.apply(d, c);
            var h = d.parentNode || d.ownerDocument;
            try {
                d && d.nodeName && b.noData[d.nodeName.toLowerCase()] || d["on" + e] && d["on" + e].apply(d, c) === !1 && (a.result = !1, a.preventDefault())
            } catch (i) {}
            if (!a.isPropagationStopped() && h) b.event.trigger(a, c, h, !0);
            else if (!a.isDefaultPrevented()) {
                var j, k = a.target,
                    l = e.replace(n, ""),
                    m = b.nodeName(k, "a") && l === "click",
                    o = b.event.special[l] || {};
                if ((!o._default || o._default.call(d, a) === !1) && !m && !(k && k.nodeName && b.noData[k.nodeName.toLowerCase()])) {
                    try {
                        k[l] && (j = k["on" + l], j && (k["on" + l] = null), b.event.triggered = !0, k[l]())
                    } catch (p) {}
                    j && (k["on" + l] = j), b.event.triggered = !1
                }
            }
        },
        handle: function(a) {
            var c, d, e, f, g, h = [],
                i = b.makeArray(arguments);
            a = i[0] = b.event.fix(a || window.event), a.currentTarget = this, c = a.type.indexOf(".") < 0 && !a.exclusive, c || (e = a.type.split("."), a.type = e.shift(), h = e.slice(0).sort(), f = new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)")), a.namespace = a.namespace || h.join("."), g = b.data(this, this.nodeType ? "events" : "__events__"), typeof g == "function" && (g = g.events), d = (g || {})[a.type];
            if (g && d) {
                d = d.slice(0);
                for (var j = 0, k = d.length; j < k; j++) {
                    var l = d[j];
                    if (c || f.test(l.namespace)) {
                        a.handler = l.handler, a.data = l.data, a.handleObj = l;
                        var m = l.handler.apply(this, i);
                        m !== undefined && (a.result = m, m === !1 && (a.preventDefault(), a.stopPropagation()));
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(c) {
            if (c[b.expando]) return c;
            var d = c;
            c = b.Event(d);
            for (var e = this.props.length, f; e;) f = this.props[--e], c[f] = d[f];
            c.target || (c.target = c.srcElement || a), c.target.nodeType === 3 && (c.target = c.target.parentNode), !c.relatedTarget && c.fromElement && (c.relatedTarget = c.fromElement === c.target ? c.toElement : c.fromElement);
            if (c.pageX == null && c.clientX != null) {
                var g = a.documentElement,
                    h = a.body;
                c.pageX = c.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0), c.pageY = c.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
            }
            return c.which == null && (c.charCode != null || c.keyCode != null) && (c.which = c.charCode != null ? c.charCode : c.keyCode), !c.metaKey && c.ctrlKey && (c.metaKey = c.ctrlKey), !c.which && c.button !== undefined && (c.which = c.button & 1 ? 1 : c.button & 2 ? 3 : c.button & 4 ? 2 : 0), c
        },
        guid: 1e8,
        proxy: b.proxy,
        special: {
            ready: {
                setup: b.bindReady,
                teardown: b.noop
            },
            live: {
                add: function(a) {
                    b.event.add(this, E(a.origType, a.selector), b.extend({}, a, {
                        handler: D,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    b.event.remove(this, E(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, c, d) {
                    b.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, b.removeEvent = a.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, b.Event = function(a) {
        if (!this.preventDefault) return new b.Event(a);
        a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a, this.timeStamp = b.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = v;
            var a = this.originalEvent;
            if (!a) return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = v;
            var a = this.originalEvent;
            if (!a) return;
            a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = v, this.stopPropagation()
        },
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u
    };
    var w = function(a) {
            var c = a.relatedTarget;
            try {
                while (c && c !== this) c = c.parentNode;
                c !== this && (a.type = a.data, b.event.handle.apply(this, arguments))
            } catch (d) {}
        },
        x = function(a) {
            a.type = a.data, b.event.handle.apply(this, arguments)
        };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, c) {
        b.event.special[a] = {
            setup: function(d) {
                b.event.add(this, c, d && d.selector ? x : w, a)
            },
            teardown: function(a) {
                b.event.remove(this, c, a && a.selector ? x : w)
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function(a, c) {
            if (this.nodeName.toLowerCase() !== "form") b.event.add(this, "click.specialSubmit", function(a) {
                var c = a.target,
                    d = c.type;
                if ((d === "submit" || d === "image") && b(c).closest("form").length) return a.liveFired = undefined, B("submit", this, arguments)
            }), b.event.add(this, "keypress.specialSubmit", function(a) {
                var c = a.target,
                    d = c.type;
                if ((d === "text" || d === "password") && b(c).closest("form").length && a.keyCode === 13) return a.liveFired = undefined, B("submit", this, arguments)
            });
            else return !1
        },
        teardown: function(a) {
            b.event.remove(this, ".specialSubmit")
        }
    });
    if (!b.support.changeBubbles) {
        var y, z = function(a) {
                var c = a.type,
                    d = a.value;
                return c === "radio" || c === "checkbox" ? d = a.checked : c === "select-multiple" ? d = a.selectedIndex > -1 ? b.map(a.options, function(a) {
                    return a.selected
                }).join("-") : "" : a.nodeName.toLowerCase() === "select" && (d = a.selectedIndex), d
            },
            A = function(c) {
                var d = c.target,
                    e, f;
                if (!o.test(d.nodeName) || d.readOnly) return;
                e = b.data(d, "_change_data"), f = z(d), (c.type !== "focusout" || d.type !== "radio") && b.data(d, "_change_data", f);
                if (e === undefined || f === e) return;
                if (e != null || f) return c.type = "change", c.liveFired = undefined, b.event.trigger(c, arguments[1], d)
            };
        b.event.special.change = {
            filters: {
                focusout: A,
                beforedeactivate: A,
                click: function(a) {
                    var b = a.target,
                        c = b.type;
                    if (c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") return A.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target,
                        c = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") return A.call(this, a)
                },
                beforeactivate: function(a) {
                    var c = a.target;
                    b.data(c, "_change_data", z(c))
                }
            },
            setup: function(a, c) {
                if (this.type === "file") return !1;
                for (var d in y) b.event.add(this, d + ".specialChange", y[d]);
                return o.test(this.nodeName)
            },
            teardown: function(a) {
                return b.event.remove(this, ".specialChange"), o.test(this.nodeName)
            }
        }, y = b.event.special.change.filters, y.focus = y.beforeactivate
    }
    a.addEventListener && b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(c, d) {
        function e(a) {
            return a = b.event.fix(a), a.type = d, b.event.trigger(a, null, a.target)
        }
        b.event.special[d] = {
            setup: function() {
                t[d]++ === 0 && a.addEventListener(c, e, !0)
            },
            teardown: function() {
                --t[d] === 0 && a.removeEventListener(c, e, !0)
            }
        }
    }), b.each(["bind", "one"], function(a, c) {
        b.fn[c] = function(a, d, e) {
            if (typeof a == "object") {
                for (var f in a) this[c](f, d, a[f], e);
                return this
            }
            if (b.isFunction(d) || d === !1) e = d, d = undefined;
            var g = c === "one" ? b.proxy(e, function(a) {
                return b(this).unbind(a, g), e.apply(this, arguments)
            }) : e;
            if (a === "unload" && c !== "one") this.one(a, d, e);
            else
                for (var h = 0, i = this.length; h < i; h++) b.event.add(this[h], a, g, d);
            return this
        }
    }), b.fn.extend({
        unbind: function(a, c) {
            if (typeof a == "object" && !a.preventDefault)
                for (var d in a) this.unbind(d, a[d]);
            else
                for (var e = 0, f = this.length; e < f; e++) b.event.remove(this[e], a, c);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function(a, c) {
            return this.each(function() {
                b.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            if (this[0]) {
                var d = b.Event(a);
                return d.preventDefault(), d.stopPropagation(), b.event.trigger(d, c, this[0]), d.result
            }
        },
        toggle: function(a) {
            var c = arguments,
                d = 1;
            while (d < c.length) b.proxy(a, c[d++]);
            return this.click(b.proxy(a, function(e) {
                var f = (b.data(this, "lastToggle" + a.guid) || 0) % d;
                return b.data(this, "lastToggle" + a.guid, f + 1), e.preventDefault(), c[f].apply(this, arguments) || !1
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var C = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    b.each(["live", "die"], function(a, c) {
            b.fn[c] = function(a, d, e, f) {
                var g, h = 0,
                    i, j, k, l = f || this.selector,
                    m = f ? this : b(this.context);
                if (typeof a == "object" && !a.preventDefault) {
                    for (var o in a) m[c](o, d, a[o], l);
                    return this
                }
                b.isFunction(d) && (e = d, d = undefined), a = (a || "").split(" ");
                while ((g = a[h++]) != null) {
                    i = n.exec(g), j = "", i && (j = i[0], g = g.replace(n, ""));
                    if (g === "hover") {
                        a.push("mouseenter" + j, "mouseleave" + j);
                        continue
                    }
                    k = g, g === "focus" || g === "blur" ? (a.push(C[g] + j), g += j) : g = (C[g] || g) + j;
                    if (c === "live")
                        for (var p = 0, q = m.length; p < q; p++) b.event.add(m[p], "live." + E(g, l), {
                            data: d,
                            selector: l,
                            handler: e,
                            origType: g,
                            origHandler: e,
                            preType: k
                        });
                    else m.unbind("live." + E(g, l), e)
                }
                return this
            }
        }), b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, c) {
            b.fn[c] = function(a, b) {
                return b == null && (b = a, a = null), arguments.length > 0 ? this.bind(c, a, b) : this.trigger(c)
            }, b.attrFn && (b.attrFn[c] = !0)
        }), window.attachEvent && !window.addEventListener && b(window).bind("unload", function() {
            for (var a in b.cache)
                if (b.cache[a].handle) try {
                    b.event.remove(b.cache[a].handle.elem)
                } catch (c) {}
        }),
        function() {
            function q(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        i = i[a];
                        while (i) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }

            function r(a, b, c, d, e, f) {
                for (var g = 0, i = d.length; g < i; g++) {
                    var j = d[g];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j.sizcache === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                f || (j.sizcache = c, j.sizset = g);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (h.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        d[g] = k
                    }
                }
            }
            var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = 0,
                e = Object.prototype.toString,
                f = !1,
                g = !0;
            [0, 0].sort(function() {
                return g = !1, 0
            });
            var h = function(b, d, f, g) {
                f = f || [], d = d || a;
                var k = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return f;
                var l, n, o, p, q, r, t, u, v = !0,
                    w = h.isXML(d),
                    x = [],
                    y = b;
                do {
                    c.exec(""), l = c.exec(y);
                    if (l) {
                        y = l[3], x.push(l[1]);
                        if (l[2]) {
                            p = l[3];
                            break
                        }
                    }
                } while (l);
                if (x.length > 1 && j.exec(b))
                    if (x.length === 2 && i.relative[x[0]]) n = s(x[0] + x[1], d);
                    else {
                        n = i.relative[x[0]] ? [d] : h(x.shift(), d);
                        while (x.length) b = x.shift(), i.relative[b] && (b += x.shift()), n = s(b, n)
                    }
                else {
                    !g && x.length > 1 && d.nodeType === 9 && !w && i.match.ID.test(x[0]) && !i.match.ID.test(x[x.length - 1]) && (q = h.find(x.shift(), d, w), d = q.expr ? h.filter(q.expr, q.set)[0] : q.set[0]);
                    if (d) {
                        q = g ? {
                            expr: x.pop(),
                            set: m(g)
                        } : h.find(x.pop(), x.length !== 1 || x[0] !== "~" && x[0] !== "+" || !d.parentNode ? d : d.parentNode, w), n = q.expr ? h.filter(q.expr, q.set) : q.set, x.length > 0 ? o = m(n) : v = !1;
                        while (x.length) r = x.pop(), t = r, i.relative[r] ? t = x.pop() : r = "", t == null && (t = d), i.relative[r](o, t, w)
                    } else o = x = []
                }
                o || (o = n), o || h.error(r || b);
                if (e.call(o) === "[object Array]")
                    if (!v) f.push.apply(f, o);
                    else if (d && d.nodeType === 1)
                    for (u = 0; o[u] != null; u++) o[u] && (o[u] === !0 || o[u].nodeType === 1 && h.contains(d, o[u])) && f.push(n[u]);
                else
                    for (u = 0; o[u] != null; u++) o[u] && o[u].nodeType === 1 && f.push(n[u]);
                else m(o, f);
                return p && (h(p, k, f, g), h.uniqueSort(f)), f
            };
            h.uniqueSort = function(a) {
                if (o) {
                    f = g, a.sort(o);
                    if (f)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, h.matches = function(a, b) {
                return h(a, null, null, b)
            }, h.matchesSelector = function(a, b) {
                return h(b, null, null, [a]).length > 0
            }, h.find = function(a, b, c) {
                var d;
                if (!a) return [];
                for (var e = 0, f = i.order.length; e < f; e++) {
                    var g, h = i.order[e];
                    if (g = i.leftMatch[h].exec(a)) {
                        var j = g[1];
                        g.splice(1, 1);
                        if (j.substr(j.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(/\\/g, ""), d = i.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(i.match[h], "");
                                break
                            }
                        }
                    }
                }
                return d || (d = b.getElementsByTagName("*")), {
                    set: d,
                    expr: a
                }
            }, h.filter = function(a, b, c, d) {
                var e, f, g = a,
                    j = [],
                    k = b,
                    l = b && b[0] && h.isXML(b[0]);
                while (a && b.length) {
                    for (var m in i.filter)
                        if ((e = i.leftMatch[m].exec(a)) != null && e[2]) {
                            var n, o, p = i.filter[m],
                                q = e[1];
                            f = !1, e.splice(1, 1);
                            if (q.substr(q.length - 1) === "\\") continue;
                            k === j && (j = []);
                            if (i.preFilter[m]) {
                                e = i.preFilter[m](e, k, c, j, d, l);
                                if (!e) f = n = !0;
                                else if (e === !0) continue
                            }
                            if (e)
                                for (var r = 0;
                                    (o = k[r]) != null; r++)
                                    if (o) {
                                        n = p(o, e, r, k);
                                        var s = d ^ !!n;
                                        c && n != null ? s ? f = !0 : k[r] = !1 : s && (j.push(o), f = !0)
                                    } if (n !== undefined) {
                                c || (k = j), a = a.replace(i.match[m], "");
                                if (!f) return [];
                                break
                            }
                        } if (a === g)
                        if (f == null) h.error(a);
                        else break;
                    g = a
                }
                return k
            }, h.error = function(a) {
                throw "Syntax error, unrecognized expression: " + a
            };
            var i = h.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !/\W/.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, i; f < g; f++)
                                if (i = a[f]) {
                                    while ((i = i.previousSibling) && i.nodeType !== 1);
                                    a[f] = e || i && i.nodeName.toLowerCase() === b ? i || !1 : i === b
                                } e && h.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !/\W/.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && h.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var e, f = d++,
                                g = r;
                            typeof b == "string" && !/\W/.test(b) && (b = b.toLowerCase(), e = b, g = q), g("parentNode", b, f, a, e, c)
                        },
                        "~": function(a, b, c) {
                            var e, f = d++,
                                g = r;
                            typeof b == "string" && !/\W/.test(b) && (b = b.toLowerCase(), e = b, g = q), g("previousSibling", b, f, a, e, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(/\\/g, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(/\\/g, "")
                        },
                        TAG: function(a, b) {
                            return a[1].toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            }
                            return a[0] = d++, a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1].replace(/\\/g, "");
                            return !f && i.attrMap[g] && (a[1] = i.attrMap[g]), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
                        },
                        PSEUDO: function(a, b, d, e, f) {
                            if (a[1] === "not")
                                if ((c.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = h(a[3], null, null, b);
                                else {
                                    var g = h.filter(a[3], b, d, !0 ^ f);
                                    return d || e.push.apply(e, g), !1
                                }
                            else if (i.match.POS.test(a[0]) || i.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            return a.unshift(!0), a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            return a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!h(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            return "text" === a.type
                        },
                        radio: function(a) {
                            return "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "checkbox" === a.type
                        },
                        file: function(a) {
                            return "file" === a.type
                        },
                        password: function(a) {
                            return "password" === a.type
                        },
                        submit: function(a) {
                            return "submit" === a.type
                        },
                        image: function(a) {
                            return "image" === a.type
                        },
                        reset: function(a) {
                            return "reset" === a.type
                        },
                        button: function(a) {
                            return "button" === a.type || a.nodeName.toLowerCase() === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = i.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || h.getText([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var j = 0, k = g.length; j < k; j++)
                                    if (g[j] === a) return !1;
                                return !0
                            }
                            h.error("Syntax error, unrecognized expression: " + e)
                        },
                        CHILD: function(a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    while (d = d.previousSibling)
                                        if (d.nodeType === 1) return !1;
                                    if (c === "first") return !0;
                                    d = a;
                                case "last":
                                    while (d = d.nextSibling)
                                        if (d.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    var e = b[2],
                                        f = b[3];
                                    if (e === 1 && f === 0) return !0;
                                    var g = b[0],
                                        h = a.parentNode;
                                    if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                        var i = 0;
                                        for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                                        h.sizcache = g
                                    }
                                    var j = a.nodeIndex - f;
                                    return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = i.attrHandle[c] ? i.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = i.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                j = i.match.POS,
                k = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var l in i.match) i.match[l] = new RegExp(i.match[l].source + /(?![^\[]*\])(?![^\(]*\))/.source), i.leftMatch[l] = new RegExp(/(^(?:.|\r|\n)*?)/.source + i.match[l].source.replace(/\\(\d+)/g, k));
            var m = function(a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(a.documentElement.childNodes, 0)[0].nodeType
            } catch (n) {
                m = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (e.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var f = a.length; c < f; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var o, p;
            a.documentElement.compareDocumentPosition ? o = function(a, b) {
                    return a === b ? (f = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (o = function(a, b) {
                    var c, d, e = [],
                        g = [],
                        h = a.parentNode,
                        i = b.parentNode,
                        j = h;
                    if (a === b) return f = !0, 0;
                    if (h === i) return p(a, b);
                    if (!h) return -1;
                    if (!i) return 1;
                    while (j) e.unshift(j), j = j.parentNode;
                    j = i;
                    while (j) g.unshift(j), j = j.parentNode;
                    c = e.length, d = g.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== g[k]) return p(e[k], g[k]);
                    return k === c ? p(a, g[k], -1) : p(e[k], b, 1)
                }, p = function(a, b, c) {
                    if (a === b) return c;
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }), h.getText = function(a) {
                    var b = "",
                        c;
                    for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += h.getText(c.childNodes));
                    return b
                },
                function() {
                    var b = a.createElement("div"),
                        c = "script" + (new Date).getTime(),
                        d = a.documentElement;
                    b.innerHTML = "<a name='" + c + "'/>", d.insertBefore(b, d.firstChild), a.getElementById(c) && (i.find.ID = function(a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d ? d.id === a[1] || typeof d.getAttributeNode != "undefined" && d.getAttributeNode("id").nodeValue === a[1] ? [d] : undefined : []
                        }
                    }, i.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), d.removeChild(b), d = b = null
                }(),
                function() {
                    var b = a.createElement("div");
                    b.appendChild(a.createComment("")), b.getElementsByTagName("*").length > 0 && (i.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), b.innerHTML = "<a href='#'></a>", b.firstChild && typeof b.firstChild.getAttribute != "undefined" && b.firstChild.getAttribute("href") !== "#" && (i.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), b = null
                }(), a.querySelectorAll && function() {
                    var b = h,
                        c = a.createElement("div"),
                        d = "__sizzle__";
                    c.innerHTML = "<p class='TEST'></p>";
                    if (c.querySelectorAll && c.querySelectorAll(".TEST").length === 0) return;
                    h = function(c, e, f, g) {
                        e = e || a, c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!g && !h.isXML(e))
                            if (e.nodeType === 9) try {
                                return m(e.querySelectorAll(c), f)
                            } catch (i) {} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var j = e.getAttribute("id"),
                                    k = j || d;
                                j || e.setAttribute("id", k);
                                try {
                                    return m(e.querySelectorAll("#" + k + " " + c), f)
                                } catch (l) {} finally {
                                    j || e.removeAttribute("id")
                                }
                            } return b(c, e, f, g)
                    };
                    for (var e in b) h[e] = b[e];
                    c = null
                }(),
                function() {
                    var b = a.documentElement,
                        c = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector,
                        d = !1;
                    try {
                        c.call(a.documentElement, "[test!='']:sizzle")
                    } catch (e) {
                        d = !0
                    }
                    c && (h.matchesSelector = function(a, b) {
                        b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                        if (!h.isXML(a)) try {
                            if (d || !i.match.PSEUDO.test(b) && !/!=/.test(b)) return c.call(a, b)
                        } catch (e) {}
                        return h(b, null, null, [a]).length > 0
                    })
                }(),
                function() {
                    var b = a.createElement("div");
                    b.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!b.getElementsByClassName || b.getElementsByClassName("e").length === 0) return;
                    b.lastChild.className = "e";
                    if (b.getElementsByClassName("e").length === 1) return;
                    i.order.splice(1, 0, "CLASS"), i.find.CLASS = function(a, b, c) {
                        if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                    }, b = null
                }(), a.documentElement.contains ? h.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : a.documentElement.compareDocumentPosition ? h.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : h.contains = function() {
                    return !1
                }, h.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var s = function(a, b) {
                var c, d = [],
                    e = "",
                    f = b.nodeType ? [b] : b;
                while (c = i.match.PSEUDO.exec(a)) e += c[0], a = a.replace(i.match.PSEUDO, "");
                a = i.relative[a] ? a + "*" : a;
                for (var g = 0, j = f.length; g < j; g++) h(a, f[g], d);
                return h.filter(e, d)
            };
            b.find = h, b.expr = h.selectors, b.expr[":"] = b.expr.filters, b.unique = h.uniqueSort, b.text = h.getText, b.isXMLDoc = h.isXML, b.contains = h.contains
        }();
    var F = /Until$/,
        H = /^(?:parents|prevUntil|prevAll)/,
        I = /,/,
        J = /^.[^:#\[\.,]*$/,
        K = Array.prototype.slice,
        L = b.expr.match.POS;
    b.fn.extend({
        find: function(a) {
            var c = this.pushStack("", "find", a),
                d = 0;
            for (var e = 0, f = this.length; e < f; e++) {
                d = c.length, b.find(a, this[e], c);
                if (e > 0)
                    for (var g = d; g < c.length; g++)
                        for (var h = 0; h < d; h++)
                            if (c[h] === c[g]) {
                                c.splice(g--, 1);
                                break
                            }
            }
            return c
        },
        has: function(a) {
            var c = b(a);
            return this.filter(function() {
                for (var a = 0, d = c.length; a < d; a++)
                    if (b.contains(this, c[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(N(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(N(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && b.filter(a, this).length > 0
        },
        closest: function(a, c) {
            var d = [],
                e, f, g = this[0];
            if (b.isArray(a)) {
                var h, i, j = {},
                    k = 1;
                if (g && a.length) {
                    for (e = 0, f = a.length; e < f; e++) i = a[e], j[i] || (j[i] = b.expr.match.POS.test(i) ? b(i, c || this.context) : i);
                    while (g && g.ownerDocument && g !== c) {
                        for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : b(g).is(h)) && d.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode, k++
                    }
                }
                return d
            }
            var l = L.test(a) ? b(a, c || this.context) : null;
            for (e = 0, f = this.length; e < f; e++) {
                g = this[e];
                while (g) {
                    if (l ? l.index(g) > -1 : b.find.matchesSelector(g, a)) {
                        d.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === c) break
                }
            }
            return d = d.length > 1 ? b.unique(d) : d, this.pushStack(d, "closest", a)
        },
        index: function(a) {
            return !a || typeof a == "string" ? b.inArray(this[0], a ? b(a) : this.parent().children()) : b.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, c) {
            var d = typeof a == "string" ? b(a, c || this.context) : b.makeArray(a),
                e = b.merge(this.get(), d);
            return this.pushStack(M(d[0]) || M(e[0]) ? e : b.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), b.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return b.dir(a, "parentNode")
        },
        parentsUntil: function(a, c, d) {
            return b.dir(a, "parentNode", d)
        },
        next: function(a) {
            return b.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return b.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return b.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return b.dir(a, "previousSibling")
        },
        nextUntil: function(a, c, d) {
            return b.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, c, d) {
            return b.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return b.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return b.sibling(a.firstChild)
        },
        contents: function(a) {
            return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
        }
    }, function(a, c) {
        b.fn[a] = function(d, e) {
            var f = b.map(this, c, d);
            return F.test(a) || (e = d), e && typeof e == "string" && (f = b.filter(e, f)), f = this.length > 1 ? b.unique(f) : f, (this.length > 1 || I.test(e)) && H.test(a) && (f = f.reverse()), this.pushStack(f, a, K.call(arguments).join(","))
        }
    }), b.extend({
        filter: function(a, c, d) {
            return d && (a = ":not(" + a + ")"), c.length === 1 ? b.find.matchesSelector(c[0], a) ? [c[0]] : [] : b.find.matches(a, c)
        },
        dir: function(a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === undefined || f.nodeType !== 1 || !b(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var O = / jQuery\d+="(?:\d+|null)"/g,
        P = /^\s+/,
        Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        R = /<([\w:]+)/,
        S = /<tbody/i,
        T = /<|&#?\w+;/,
        U = /<(?:script|object|embed|option|style)/i,
        V = /checked\s*(?:[^=]|=\s*.checked.)/i,
        W = /\=([^="'>\s]+\/)>/g,
        X = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    X.optgroup = X.option, X.tbody = X.tfoot = X.colgroup = X.caption = X.thead, X.th = X.td, b.support.htmlSerialize || (X._default = [1, "div<div>", "</div>"]), b.fn.extend({
        text: function(c) {
            return b.isFunction(c) ? this.each(function(a) {
                var d = b(this);
                d.text(c.call(this, a, d.text()))
            }) : typeof c != "object" && c !== undefined ? this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(c)) : b.text(this)
        },
        wrapAll: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                b(this).wrapAll(a.call(this, c))
            });
            if (this[0]) {
                var c = b(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return b.isFunction(a) ? this.each(function(c) {
                b(this).wrapInner(a.call(this, c))
            }) : this.each(function() {
                var c = b(this),
                    d = c.contents();
                d.length ? d.wrapAll(a) : c.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                b(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = b(arguments[0]);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, b(arguments[0]).toArray()), a
            }
        },
        remove: function(a, c) {
            for (var d = 0, e;
                (e = this[d]) != null; d++)
                if (!a || b.filter(a, [e]).length) !c && e.nodeType === 1 && (b.cleanData(e.getElementsByTagName("*")), b.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var a = 0, c;
                (c = this[a]) != null; a++) {
                c.nodeType === 1 && b.cleanData(c.getElementsByTagName("*"));
                while (c.firstChild) c.removeChild(c.firstChild)
            }
            return this
        },
        clone: function(a) {
            var c = this.map(function() {
                if (!b.support.noCloneEvent && !b.isXMLDoc(this)) {
                    var a = this.outerHTML,
                        c = this.ownerDocument;
                    if (!a) {
                        var d = c.createElement("div");
                        d.appendChild(this.cloneNode(!0)), a = d.innerHTML
                    }
                    return b.clean([a.replace(O, "").replace(W, '="$1">').replace(P, "")], c)[0]
                }
                return this.cloneNode(!0)
            });
            return a === !0 && (Z(this, c), Z(this.find("*"), c.find("*"))), c
        },
        html: function(a) {
            if (a === undefined) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(O, "") : null;
            if (typeof a == "string" && !U.test(a) && (b.support.leadingWhitespace || !P.test(a)) && !X[(R.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Q, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (b.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else b.isFunction(a) ? this.each(function(c) {
                var d = b(this);
                d.html(a.call(this, c, d.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? b.isFunction(a) ? this.each(function(c) {
                var d = b(this),
                    e = d.html();
                d.replaceWith(a.call(this, c, e))
            }) : (typeof a != "string" && (a = b(a).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                b(this).remove(), c ? b(c).before(a) : b(d).append(a)
            })) : this.pushStack(b(b.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof i == "string" && V.test(i)) return this.each(function() {
                b(this).domManip(a, c, d, !0)
            });
            if (b.isFunction(i)) return this.each(function(e) {
                var f = b(this);
                a[0] = i.call(this, e, c ? f.html() : undefined), f.domManip(a, c, d)
            });
            if (this[0]) {
                h = i && i.parentNode, b.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? e = {
                    fragment: h
                } : e = b.buildFragment(a, this, j), g = e.fragment, g.childNodes.length === 1 ? f = g = g.firstChild : f = g.firstChild;
                if (f) {
                    c = c && b.nodeName(f, "tr");
                    for (var k = 0, l = this.length; k < l; k++) d.call(c ? Y(this[k], f) : this[k], k > 0 || e.cacheable || this.length > 1 ? g.cloneNode(!0) : g)
                }
                j.length && b.each(j, _)
            }
            return this
        }
    }), b.buildFragment = function(c, d, e) {
        var f, g, h, i = d && d[0] ? d[0].ownerDocument || d[0] : a;
        return c.length === 1 && typeof c[0] == "string" && c[0].length < 512 && i === a && !U.test(c[0]) && (b.support.checkClone || !V.test(c[0])) && (g = !0, h = b.fragments[c[0]], h && h !== 1 && (f = h)), f || (f = i.createDocumentFragment(), b.clean(c, i, f, e)), g && (b.fragments[c[0]] = h ? f : 1), {
            fragment: f,
            cacheable: g
        }
    }, b.fragments = {}, b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, c) {
        b.fn[a] = function(d) {
            var e = [],
                f = b(d),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) return f[c](this[0]), this;
            for (var h = 0, i = f.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                b(f[h])[c](j), e = e.concat(j)
            }
            return this.pushStack(e, a, f.selector)
        }
    }), b.extend({
        clean: function(c, d, e, f) {
            d = d || a, typeof d.createElement == "undefined" && (d = d.ownerDocument || d[0] && d[0].ownerDocument || a);
            var g = [];
            for (var h = 0, i;
                (i = c[h]) != null; h++) {
                typeof i == "number" && (i += "");
                if (!i) continue;
                if (typeof i == "string" && !T.test(i)) i = d.createTextNode(i);
                else if (typeof i == "string") {
                    i = i.replace(Q, "<$1></$2>");
                    var j = (R.exec(i) || ["", ""])[1].toLowerCase(),
                        k = X[j] || X._default,
                        l = k[0],
                        m = d.createElement("div");
                    m.innerHTML = k[1] + i + k[2];
                    while (l--) m = m.lastChild;
                    if (!b.support.tbody) {
                        var n = S.test(i),
                            o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>" && !n ? m.childNodes : [];
                        for (var p = o.length - 1; p >= 0; --p) b.nodeName(o[p], "tbody") && !o[p].childNodes.length && o[p].parentNode.removeChild(o[p])
                    }!b.support.leadingWhitespace && P.test(i) && m.insertBefore(d.createTextNode(P.exec(i)[0]), m.firstChild), i = m.childNodes
                }
                i.nodeType ? g.push(i) : g = b.merge(g, i)
            }
            if (e)
                for (h = 0; g[h]; h++) f && b.nodeName(g[h], "script") && (!g[h].type || g[h].type.toLowerCase() === "text/javascript") ? f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]) : (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(b.makeArray(g[h].getElementsByTagName("script")))), e.appendChild(g[h]));
            return g
        },
        cleanData: function(a) {
            var c, d, e = b.cache,
                f = b.event.special,
                g = b.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && b.noData[i.nodeName.toLowerCase()]) continue;
                d = i[b.expando];
                if (d) {
                    c = e[d];
                    if (c && c.events)
                        for (var j in c.events) f[j] ? b.event.remove(i, j) : b.removeEvent(i, j, c.handle);
                    g ? delete i[b.expando] : i.removeAttribute && i.removeAttribute(b.expando), delete e[d]
                }
            }
        }
    });
    var ba = /alpha\([^)]*\)/i,
        bb = /opacity=([^)]*)/,
        bc = /-([a-z])/ig,
        bd = /([A-Z])/g,
        be = /^-?\d+(?:px)?$/i,
        bf = /^-?\d/,
        bg = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bh = ["Left", "Right"],
        bi = ["Top", "Bottom"],
        bj, bk, bl, bm = function(a, b) {
            return b.toUpperCase()
        };
    b.fn.css = function(a, c) {
        return arguments.length === 2 && c === undefined ? this : b.access(this, a, c, !0, function(a, c, d) {
            return d !== undefined ? b.style(a, c, d) : b.css(a, c)
        })
    }, b.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bj(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g = b.camelCase(c),
                h = a.style,
                i = b.cssHooks[g];
            c = b.cssProps[g] || g;
            if (d === undefined) return i && "get" in i && (f = i.get(a, !1, e)) !== undefined ? f : h[c];
            if (typeof d == "number" && isNaN(d) || d == null) return;
            typeof d == "number" && !b.cssNumber[g] && (d += "px");
            if (!i || !("set" in i) || (d = i.set(a, d)) !== undefined) try {
                h[c] = d
            } catch (j) {}
        },
        css: function(a, c, d) {
            var e, f = b.camelCase(c),
                g = b.cssHooks[f];
            c = b.cssProps[f] || f;
            if (g && "get" in g && (e = g.get(a, !0, d)) !== undefined) return e;
            if (bj) return bj(a, c, f)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        },
        camelCase: function(a) {
            return a.replace(bc, bm)
        }
    }), b.curCSS = b.css, b.each(["height", "width"], function(a, c) {
        b.cssHooks[c] = {
            get: function(a, d, e) {
                var f;
                if (d) {
                    a.offsetWidth !== 0 ? f = bn(a, c, e) : b.swap(a, bg, function() {
                        f = bn(a, c, e)
                    });
                    if (f <= 0) {
                        f = bj(a, c, c), f === "0px" && bl && (f = bl(a, c, c));
                        if (f != null) return f === "" || f === "auto" ? "0px" : f
                    }
                    return f < 0 || f == null ? (f = a.style[c], f === "" || f === "auto" ? "0px" : f) : typeof f == "string" ? f : f + "px"
                }
            },
            set: function(a, b) {
                if (!be.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(a, b) {
            return bb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, c) {
            var d = a.style;
            d.zoom = 1;
            var e = b.isNaN(c) ? "" : "alpha(opacity=" + c * 100 + ")",
                f = d.filter || "";
            d.filter = ba.test(f) ? f.replace(ba, e) : d.filter + " " + e
        }
    }), a.defaultView && a.defaultView.getComputedStyle && (bk = function(a, c, d) {
        var e, f, g;
        d = d.replace(bd, "-$1").toLowerCase();
        if (!(f = a.ownerDocument.defaultView)) return undefined;
        if (g = f.getComputedStyle(a, null)) e = g.getPropertyValue(d), e === "" && !b.contains(a.ownerDocument.documentElement, a) && (e = b.style(a, d));
        return e
    }), a.documentElement.currentStyle && (bl = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return !be.test(e) && bf.test(e) && (c = f.left, d = a.runtimeStyle.left, a.runtimeStyle.left = a.currentStyle.left, f.left = b === "fontSize" ? "1em" : e || 0, e = f.pixelLeft + "px", f.left = c, a.runtimeStyle.left = d), e === "" ? "auto" : e
    }), bj = bk || bl, b.expr && b.expr.filters && (b.expr.filters.hidden = function(a) {
        var c = a.offsetWidth,
            d = a.offsetHeight;
        return c === 0 && d === 0 || !b.support.reliableHiddenOffsets && (a.style.display || b.css(a, "display")) === "none"
    }, b.expr.filters.visible = function(a) {
        return !b.expr.filters.hidden(a)
    });
    var bo = b.now(),
        bp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bq = /^(?:select|textarea)/i,
        br = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bs = /^(?:GET|HEAD|DELETE)$/,
        bt = /\[\]$/,
        bu = /\=\?(&|$)/,
        bv = /\?/,
        bw = /([?&])_=[^&]*/,
        bx = /^(\w+:)?\/\/([^\/?#]+)/,
        by = /%20/g,
        bz = /#.*$/,
        bA = b.fn.load;
    b.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bA) return bA.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (b.isFunction(c) ? (d = c, c = null) : typeof c == "object" && (c = b.param(c, b.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return b.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function(a, c) {
                    (c === "success" || c === "notmodified") && h.html(f ? b("<div>").append(a.responseText.replace(bp, "")).find(f) : a.responseText), d && h.each(d, [a.responseText, c, a])
                }
            }), this
        },
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? b.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bq.test(this.nodeName) || br.test(this.type))
            }).map(function(a, c) {
                var d = b(this).val();
                return d == null ? null : b.isArray(d) ? b.map(d, function(a, b) {
                    return {
                        name: c.name,
                        value: a
                    }
                }) : {
                    name: c.name,
                    value: d
                }
            }).get()
        }
    }), b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        b.fn[c] = function(a) {
            return this.bind(c, a)
        }
    }), b.extend({
        get: function(a, c, d, e) {
            return b.isFunction(c) && (e = e || d, d = c, c = null), b.ajax({
                type: "GET",
                url: a,
                data: c,
                success: d,
                dataType: e
            })
        },
        getScript: function(a, c) {
            return b.get(a, null, c, "script")
        },
        getJSON: function(a, c, d) {
            return b.get(a, c, d, "json")
        },
        post: function(a, c, d, e) {
            return b.isFunction(c) && (e = e || d, d = c, c = {}), b.ajax({
                type: "POST",
                url: a,
                data: c,
                success: d,
                dataType: e
            })
        },
        ajaxSetup: function(a) {
            b.extend(b.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        ajax: function(c) {
            var d = b.extend(!0, {}, b.ajaxSettings, c),
                e, f, g, h = d.type.toUpperCase(),
                i = bs.test(h);
            d.url = d.url.replace(bz, ""), d.context = c && c.context != null ? c.context : d, d.data && d.processData && typeof d.data != "string" && (d.data = b.param(d.data, d.traditional));
            if (d.dataType === "jsonp") {
                if (h === "GET") bu.test(d.url) || (d.url += (bv.test(d.url) ? "&" : "?") + (d.jsonp || "callback") + "=?");
                else if (!d.data || !bu.test(d.data)) d.data = (d.data ? d.data + "&" : "") + (d.jsonp || "callback") + "=?";
                d.dataType = "json"
            }
            if (d.dataType === "json" && (d.data && bu.test(d.data) || bu.test(d.url))) {
                e = d.jsonpCallback || "jsonp" + bo++, d.data && (d.data = (d.data + "").replace(bu, "=" + e + "$1")), d.url = d.url.replace(bu, "=" + e + "$1"), d.dataType = "script";
                var j = window[e];
                window[e] = function(a) {
                    if (b.isFunction(j)) j(a);
                    else {
                        window[e] = undefined;
                        try {
                            delete window[e]
                        } catch (c) {}
                    }
                    g = a, b.handleSuccess(d, s, f, g), b.handleComplete(d, s, f, g), o && o.removeChild(p)
                }
            }
            d.dataType === "script" && d.cache === null && (d.cache = !1);
            if (d.cache === !1 && i) {
                var k = b.now(),
                    l = d.url.replace(bw, "$1_=" + k);
                d.url = l + (l === d.url ? (bv.test(d.url) ? "&" : "?") + "_=" + k : "")
            }
            d.data && i && (d.url += (bv.test(d.url) ? "&" : "?") + d.data), d.global && b.active++ === 0 && b.event.trigger("ajaxStart");
            var m = bx.exec(d.url),
                n = m && (m[1] && m[1].toLowerCase() !== location.protocol || m[2].toLowerCase() !== location.host);
            if (d.dataType === "script" && h === "GET" && n) {
                var o = a.getElementsByTagName("head")[0] || a.documentElement,
                    p = a.createElement("script");
                d.scriptCharset && (p.charset = d.scriptCharset), p.src = d.url;
                if (!e) {
                    var q = !1;
                    p.onload = p.onreadystatechange = function() {
                        !q && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && (q = !0, b.handleSuccess(d, s, f, g), b.handleComplete(d, s, f, g), p.onload = p.onreadystatechange = null, o && p.parentNode && o.removeChild(p))
                    }
                }
                return o.insertBefore(p, o.firstChild), undefined
            }
            var r = !1,
                s = d.xhr();
            if (!s) return;
            d.username ? s.open(h, d.url, d.async, d.username, d.password) : s.open(h, d.url, d.async);
            try {
                (d.data != null && !i || c && c.contentType) && s.setRequestHeader("Content-Type", d.contentType), d.ifModified && (b.lastModified[d.url] && s.setRequestHeader("If-Modified-Since", b.lastModified[d.url]), b.etag[d.url] && s.setRequestHeader("If-None-Match", b.etag[d.url])), n || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Accept", d.dataType && d.accepts[d.dataType] ? d.accepts[d.dataType] + ", */*; q=0.01" : d.accepts._default)
            } catch (t) {}
            if (d.beforeSend && d.beforeSend.call(d.context, s, d) === !1) return d.global && b.active-- === 1 && b.event.trigger("ajaxStop"), s.abort(), !1;
            d.global && b.triggerGlobal(d, "ajaxSend", [s, d]);
            var u = s.onreadystatechange = function(a) {
                if (!s || s.readyState === 0 || a === "abort") r || b.handleComplete(d, s, f, g), r = !0, s && (s.onreadystatechange = b.noop);
                else if (!r && s && (s.readyState === 4 || a === "timeout")) {
                    r = !0, s.onreadystatechange = b.noop, f = a === "timeout" ? "timeout" : b.httpSuccess(s) ? d.ifModified && b.httpNotModified(s, d.url) ? "notmodified" : "success" : "error";
                    var c;
                    if (f === "success") try {
                        g = b.httpData(s, d.dataType, d)
                    } catch (h) {
                        f = "parsererror", c = h
                    }
                    f === "success" || f === "notmodified" ? e || b.handleSuccess(d, s, f, g) : b.handleError(d, s, f, c), e || b.handleComplete(d, s, f, g), a === "timeout" && s.abort(), d.async && (s = null)
                }
            };
            try {
                var v = s.abort;
                s.abort = function() {
                    s && Function.prototype.call.call(v, s), u("abort")
                }
            } catch (w) {}
            d.async && d.timeout > 0 && setTimeout(function() {
                s && !r && u("timeout")
            }, d.timeout);
            try {
                s.send(i || d.data == null ? null : d.data)
            } catch (x) {
                b.handleError(d, s, null, x), b.handleComplete(d, s, f, g)
            }
            return d.async || u(), s
        },
        param: function(a, c) {
            var d = [],
                e = function(a, c) {
                    c = b.isFunction(c) ? c() : c, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
                };
            c === undefined && (c = b.ajaxSettings.traditional);
            if (b.isArray(a) || a.jquery) b.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var f in a) bB(f, a[f], c, e);
            return d.join("&").replace(by, "+")
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        handleError: function(a, c, d, e) {
            a.error && a.error.call(a.context, c, d, e), a.global && b.triggerGlobal(a, "ajaxError", [c, a, e])
        },
        handleSuccess: function(a, c, d, e) {
            a.success && a.success.call(a.context, e, d, c), a.global && b.triggerGlobal(a, "ajaxSuccess", [c, a])
        },
        handleComplete: function(a, c, d) {
            a.complete && a.complete.call(a.context, c, d), a.global && b.triggerGlobal(a, "ajaxComplete", [c, a]), a.global && b.active-- === 1 && b.event.trigger("ajaxStop")
        },
        triggerGlobal: function(a, c, d) {
            (a.context && a.context.url == null ? b(a.context) : b.event).trigger(c, d)
        },
        httpSuccess: function(a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223
            } catch (b) {}
            return !1
        },
        httpNotModified: function(a, c) {
            var d = a.getResponseHeader("Last-Modified"),
                e = a.getResponseHeader("Etag");
            return d && (b.lastModified[c] = d), e && (b.etag[c] = e), a.status === 304
        },
        httpData: function(a, c, d) {
            var e = a.getResponseHeader("content-type") || "",
                f = c === "xml" || !c && e.indexOf("xml") >= 0,
                g = f ? a.responseXML : a.responseText;
            return f && g.documentElement.nodeName === "parsererror" && b.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), typeof g == "string" && (c === "json" || !c && e.indexOf("json") >= 0 ? g = b.parseJSON(g) : (c === "script" || !c && e.indexOf("javascript") >= 0) && b.globalEval(g)), g
        }
    }), window.ActiveXObject && (b.ajaxSettings.xhr = function() {
        if (window.location.protocol !== "file:") try {
            return new window.XMLHttpRequest
        } catch (a) {}
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }), b.support.ajax = !!b.ajaxSettings.xhr();
    var bC = {},
        bD = /^(?:toggle|show|hide)$/,
        bE = /^([+\-]=)?([\d+.\-]+)(.*)$/,
        bF, bG = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    b.fn.extend({
        show: function(a, c, d) {
            var e, f;
            if (a || a === 0) return this.animate(bH("show", 3), a, c, d);
            for (var g = 0, h = this.length; g < h; g++) e = this[g], f = e.style.display, !b.data(e, "olddisplay") && f === "none" && (f = e.style.display = ""), f === "" && b.css(e, "display") === "none" && b.data(e, "olddisplay", bI(e.nodeName));
            for (g = 0; g < h; g++) {
                e = this[g], f = e.style.display;
                if (f === "" || f === "none") e.style.display = b.data(e, "olddisplay") || ""
            }
            return this
        },
        hide: function(a, c, d) {
            if (a || a === 0) return this.animate(bH("hide", 3), a, c, d);
            for (var e = 0, f = this.length; e < f; e++) {
                var g = b.css(this[e], "display");
                g !== "none" && b.data(this[e], "olddisplay", g)
            }
            for (e = 0; e < f; e++) this[e].style.display = "none";
            return this
        },
        _toggle: b.fn.toggle,
        toggle: function(a, c, d) {
            var e = typeof a == "boolean";
            return b.isFunction(a) && b.isFunction(c) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function() {
                var c = e ? a : b(this).is(":hidden");
                b(this)[c ? "show" : "hide"]()
            }) : this.animate(bH("toggle", 3), a, c, d), this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, c, d, e) {
            var f = b.speed(c, d, e);
            return b.isEmptyObject(a) ? this.each(f.complete) : this[f.queue === !1 ? "each" : "queue"](function() {
                var c = b.extend({}, f),
                    d, e = this.nodeType === 1,
                    g = e && b(this).is(":hidden"),
                    h = this;
                for (d in a) {
                    var i = b.camelCase(d);
                    d !== i && (a[i] = a[d], delete a[d], d = i);
                    if (a[d] === "hide" && g || a[d] === "show" && !g) return c.complete.call(this);
                    if (e && (d === "height" || d === "width")) {
                        c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none")
                            if (!b.support.inlineBlockNeedsLayout) this.style.display = "inline-block";
                            else {
                                var j = bI(this.nodeName);
                                j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
                            }
                    }
                    b.isArray(a[d]) && ((c.specialEasing = c.specialEasing || {})[d] = a[d][1], a[d] = a[d][0])
                }
                return c.overflow != null && (this.style.overflow = "hidden"), c.curAnim = b.extend({}, a), b.each(a, function(d, e) {
                    var f = new b.fx(h, c, d);
                    if (bD.test(e)) f[e === "toggle" ? g ? "show" : "hide" : e](a);
                    else {
                        var i = bE.exec(e),
                            j = f.cur() || 0;
                        if (i) {
                            var k = parseFloat(i[2]),
                                l = i[3] || "px";
                            l !== "px" && (b.style(h, d, (k || 1) + l), j = (k || 1) / f.cur() * j, b.style(h, d, j + l)), i[1] && (k = (i[1] === "-=" ? -1 : 1) * k + j), f.custom(j, k, l)
                        } else f.custom(j, e, "")
                    }
                }), !0
            })
        },
        stop: function(a, c) {
            var d = b.timers;
            return a && this.queue([]), this.each(function() {
                for (var a = d.length - 1; a >= 0; a--) d[a].elem === this && (c && d[a](!0), d.splice(a, 1))
            }), c || this.dequeue(), this
        }
    }), b.each({
        slideDown: bH("show", 1),
        slideUp: bH("hide", 1),
        slideToggle: bH("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, c) {
        b.fn[a] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    }), b.extend({
        speed: function(a, c, d) {
            var e = a && typeof a == "object" ? b.extend({}, a) : {
                complete: d || !d && c || b.isFunction(a) && a,
                duration: a,
                easing: d && c || c && !b.isFunction(c) && c
            };
            return e.duration = b.fx.off ? 0 : typeof e.duration == "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default, e.old = e.complete, e.complete = function() {
                e.queue !== !1 && b(this).dequeue(), b.isFunction(e.old) && e.old.call(this)
            }, e
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig || (b.orig = {})
        }
    }), b.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (b.fx.step[this.prop] || b.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                var a = parseFloat(b.css(this.elem, this.prop));
                return a && a > -1e4 ? a : 0
            }
            return this.elem[this.prop]
        },
        custom: function(a, c, d) {
            function g(a) {
                return e.step(a)
            }
            var e = this,
                f = b.fx;
            this.startTime = b.now(), this.start = a, this.end = c, this.unit = d || this.unit || "px", this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && b.timers.push(g) && !bF && (bF = setInterval(f.tick, f.interval))
        },
        show: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), b(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var c = b.now(),
                d = !0;
            if (a || c >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                for (var e in this.options.curAnim) this.options.curAnim[e] !== !0 && (d = !1);
                if (d) {
                    if (this.options.overflow != null && !b.support.shrinkWrapBlocks) {
                        var f = this.elem,
                            g = this.options;
                        b.each(["", "X", "Y"], function(a, b) {
                            f.style["overflow" + b] = g.overflow[a]
                        })
                    }
                    this.options.hide && b(this.elem).hide();
                    if (this.options.hide || this.options.show)
                        for (var h in this.options.curAnim) b.style(this.elem, h, this.options.orig[h]);
                    this.options.complete.call(this.elem)
                }
                return !1
            }
            var i = c - this.startTime;
            this.state = i / this.options.duration;
            var j = this.options.specialEasing && this.options.specialEasing[this.prop],
                k = this.options.easing || (b.easing.swing ? "swing" : "linear");
            return this.pos = b.easing[j || k](this.state, i, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
        }
    }, b.extend(b.fx, {
        tick: function() {
            var a = b.timers;
            for (var c = 0; c < a.length; c++) a[c]() || a.splice(c--, 1);
            a.length || b.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(bF), bF = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                b.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), b.expr && b.expr.filters && (b.expr.filters.animated = function(a) {
        return b.grep(b.timers, function(b) {
            return a === b.elem
        }).length
    });
    var bJ = /^t(?:able|d|h)$/i,
        bK = /^(?:body|html)$/i;
    "getBoundingClientRect" in a.documentElement ? b.fn.offset = function(a) {
        var c = this[0],
            d;
        if (a) return this.each(function(c) {
            b.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return b.offset.bodyOffset(c);
        try {
            d = c.getBoundingClientRect()
        } catch (e) {}
        var f = c.ownerDocument,
            g = f.documentElement;
        if (!d || !b.contains(g, c)) return d || {
            top: 0,
            left: 0
        };
        var h = f.body,
            i = bL(f),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || b.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || b.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = d.top + l - j,
            o = d.left + m - k;
        return {
            top: n,
            left: o
        }
    } : b.fn.offset = function(a) {
        var c = this[0];
        if (a) return this.each(function(c) {
            b.offset.setOffset(this, a, c)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return b.offset.bodyOffset(c);
        b.offset.initialize();
        var d, e = c.offsetParent,
            f = c,
            g = c.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(c, null) : c.currentStyle,
            l = c.offsetTop,
            m = c.offsetLeft;
        while ((c = c.parentNode) && c !== i && c !== h) {
            if (b.offset.supportsFixedPosition && k.position === "fixed") break;
            d = j ? j.getComputedStyle(c, null) : c.currentStyle, l -= c.scrollTop, m -= c.scrollLeft, c === e && (l += c.offsetTop, m += c.offsetLeft, b.offset.doesNotAddBorder && (!b.offset.doesAddBorderForTableAndCells || !bJ.test(c.nodeName)) && (l += parseFloat(d.borderTopWidth) || 0, m += parseFloat(d.borderLeftWidth) || 0), f = e, e = c.offsetParent), b.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (l += parseFloat(d.borderTopWidth) || 0, m += parseFloat(d.borderLeftWidth) || 0), k = d
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        return b.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)), {
            top: l,
            left: m
        }
    }, b.offset = {
        initialize: function() {
            var c = a.body,
                d = a.createElement("div"),
                e, f, g, h, i = parseFloat(b.css(c, "marginTop")) || 0,
                j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.extend(d.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), d.innerHTML = j, c.insertBefore(d, c.firstChild), e = d.firstChild, f = e.firstChild, h = e.nextSibling.firstChild.firstChild, this.doesNotAddBorder = f.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, f.style.position = "fixed", f.style.top = "20px", this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = c.offsetTop !== i, c.removeChild(d), c = d = e = f = g = h = null, b.offset.initialize = b.noop
        },
        bodyOffset: function(a) {
            var c = a.offsetTop,
                d = a.offsetLeft;
            return b.offset.initialize(), b.offset.doesNotIncludeMarginInBodyOffset && (c += parseFloat(b.css(a, "marginTop")) || 0, d += parseFloat(b.css(a, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(a, c, d) {
            var e = b.css(a, "position");
            e === "static" && (a.style.position = "relative");
            var f = b(a),
                g = f.offset(),
                h = b.css(a, "top"),
                i = b.css(a, "left"),
                j = e === "absolute" && b.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j && (l = f.position()), m = j ? l.top : parseInt(h, 10) || 0, n = j ? l.left : parseInt(i, 10) || 0, b.isFunction(c) && (c = c.call(a, d, g)), c.top != null && (k.top = c.top - g.top + m), c.left != null && (k.left = c.left - g.left + n), "using" in c ? c.using.call(a, k) : f.css(k)
        }
    }, b.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                c = this.offsetParent(),
                d = this.offset(),
                e = bK.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
            return d.top -= parseFloat(b.css(a, "marginTop")) || 0, d.left -= parseFloat(b.css(a, "marginLeft")) || 0, e.top += parseFloat(b.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(b.css(c[0], "borderLeftWidth")) || 0, {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var c = this.offsetParent || a.body;
                while (c && !bK.test(c.nodeName) && b.css(c, "position") === "static") c = c.offsetParent;
                return c
            })
        }
    }), b.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        b.fn[d] = function(c) {
            var e = this[0],
                f;
            return e ? c !== undefined ? this.each(function() {
                f = bL(this), f ? f.scrollTo(a ? b(f).scrollLeft() : c, a ? c : b(f).scrollTop()) : this[d] = c
            }) : (f = bL(e), f ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d]) : null
        }
    }), b.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        b.fn["inner" + c] = function() {
            return this[0] ? parseFloat(b.css(this[0], d, "padding")) : null
        }, b.fn["outer" + c] = function(a) {
            return this[0] ? parseFloat(b.css(this[0], d, a ? "margin" : "border")) : null
        }, b.fn[d] = function(a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (b.isFunction(a)) return this.each(function(c) {
                var e = b(this);
                e[d](a.call(this, c, e[d]()))
            });
            if (b.isWindow(e)) return e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + c] || e.document.body["client" + c];
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === undefined) {
                var f = b.css(e, d),
                    g = parseFloat(f);
                return b.isNaN(g) ? f : g
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), window.jQuery = b, window.$ = $;
    var bM = !1;
    return $(window).load(function() {
        bM = !0
    }), $.fn.windowLoaded = function(a) {
        bM ? a.call(this) : this.load(a)
    }, b.fn.doOnce = function(a, b) {
        var c = this;
        return c.length && (b ? G.req(b, function() {
            a.apply(c, arguments)
        }) : a.apply(c)), this
    }, b
}), G.def("GUtils", ["jQuery"], function(a) {
    "use strict";
    var b = document,
        c = Array.prototype,
        d = Object.prototype,
        e = String.prototype,
        f = Array.isArray,
        g = c.filter,
        h = c.every,
        i = c.some,
        j = c.map,
        k = d.toString,
        l = /^[^<]*(<[\w\W]+>)[^>]*$/,
        m = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object"
        };
    return G.format = function(a, b, c) {
        if (!b) return a;
        var d;
        if (typeof b != "object") {
            var e = c ? b : "{v}";
            return d = c || b, a.replace(new RegExp(e, "g"), "" + d)
        }
        var f = b;
        return a.replace(c || /\{([^{}]+)\}/g, function(a, b) {
            return d = f[b], d !== undefined ? "" + d : ""
        })
    }, G.ellipsis = function(a, b) {
        return a.length > b ? a.slice(0, b) + "..." : a
    }, G.type = function(a) {
        return a == null ? String(a) : m[k.call(a)] || "object"
    }, G.ua = function() {
        var b = parseInt(a.browser.version, 10),
            c = a.browser.msie && b < 9,
            d = c && b === 6,
            e = c && b === 8,
            f = c && b === 7,
            g = a.browser.msie && b === 9,
            h = navigator.userAgent;
        return {
            isIE: c,
            isIE6: d,
            isIE8: e,
            isIE7: f,
            isIE9: g,
            isOpera: a.browser.opera,
            isIpad: h.match(/iPad/i) !== null,
            isIphone: h.match(/iPhone/i) !== null
        }
    }(), G.isFun = function(a) {
        return G.type(a) === "function"
    }, G.isArray = f || function(a) {
        return G.type(a) === "array"
    }, G.isNumber = function(a) {
        return G.type(a) === "number"
    }, G.isHtml = function(a) {
        return l.test(a)
    }, G.each = function(a, b, e) {
        var f;
        if (a == null) return;
        if (c.forEach && a.forEach === c.forEach) a.forEach(b, e);
        else if (G.isNumber(a.length))
            for (var g = 0, h = a.length; g < h; g++) g in a && b.call(e, a[g], g, a);
        else
            for (var i in a) d.hasOwnProperty.call(a, i) && b.call(e, a[i], i, a)
    }, G.filter = function(a, b, c) {
        var d = [];
        if (a == null) return;
        return g && a.filter === g ? a.filter(b, c) : (G.each(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }), d)
    }, G.every = function(a, b, c) {
        var d = !0;
        if (a == null) return d;
        if (h && a.every === h) return a.every(b, c);
        var e = 0,
            f = a.length;
        for (; e < f; e++)
            if (!b.call(c, a[e], e, a)) return !1;
        return d
    }, G.some = function(a, b, c) {
        var d = !1;
        if (a == null) return d;
        if (i && a.some === i) return a.some(b, c);
        var e = 0,
            f = a.length;
        for (; e < f; e++)
            if (b.call(c, a[e], e, a)) return !0;
        return d
    }, G.map = function(a, b, c) {
        var d = [];
        if (a == null) return;
        return j && a.map === j ? a.map(b, c) : (G.each(a, function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d)
    }, G.unique = function(a) {
        if (a == null) return;
        a.sort();
        for (var b = 1; b < a.length; b++) a[b - 1] === a[b] && a.splice(b--, 1);
        return a
    }, e.trim || (e.trim = function() {
        var a = /^\s+/,
            b = /\s+$/;
        return function() {
            return this.replace(a, "").replace(b, "")
        }
    }()), Object.create || (Object.create = function(a) {
        function b() {}
        if (arguments.length > 1) throw new Error("Object.create implementation only accepts the first parameter.");
        return b.prototype = a, new b
    }), c.indexOf || (c.indexOf = function(a, b) {
        if (this === undefined || this === null) throw new TypeError;
        var c = Object(this),
            d = c.length >>> 0;
        if (d === 0) return -1;
        var e = 0;
        arguments.length > 0 && (e = Number(arguments[1]), isNaN(e) ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -Infinity && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
        if (e >= d) return -1;
        var f = e >= 0 ? e : Math.max(d - Math.abs(e), 0);
        for (; f < d; f++)
            if (f in c && c[f] === a) return f;
        return -1
    }), G
}), G.def("share", function() {
    function h(a, b) {
        e === 2 ? b() : e === 1 ? f.push(b) : (f = f || [], f.push(b), e = 1, window.bShareOpt = {
            style: -1,
            pop: -1,
            uuid: a,
            lang: "zh",
            pophcol: 2,
            mdiv: -1
        }, G.loadScript(d, function() {
            e = 2, bShare.init(), window.BS_PURL_MAP = {
//                sinaminiblog: "http://api.bshare.cn/share/sinaminiblog?url=${URL}&title=${TITLE}&summary=${CONTENT}&pic=${IMG}",
//                renren: "http://api.bshare.cn/share/renren?url=${URL}&title=${TITLE}&summary=${CONTENT}&pic=${IMG}",
//                douban: "http://api.bshare.cn/share/douban?url=${URL}&title=${TITLE}&summary=${CONTENT}&pic=${IMG}",
//                qqmb: "http://api.bshare.cn/share/qqmb?url=${URL}&title=${TITLE}&summary=${CONTENT}&pic=${IMG}",
//                qzone: "http://api.bshare.cn/share/qzone?url=${URL}&title=${TITLE}&summary=${CONTENT}&pic=${IMG}"
            };
            for (var a = 0, b = f.length; a < b; a++) f[a] && f[a]()
        }))
    }
    "use strict";
    var a = '分享到: <a data-type="" class="gui-share-xl" href="#" title="分享到新浪微博">新浪微博</a> <a data-type="" class="gui-share-rr" href="#" title="分享到人人">人人</a> <a data-type="" class="gui-share-db" href="#" title="分享到豆瓣">豆瓣</a> <a data-type="" class="gui-share-qq" href="#" title="分享到QQ空间">QQ空间</a> <a data-type="" class="gui-share-tqq" href="#" title="分享到腾讯微博">腾讯微博</a>',
        b = '分享到：<a data-type="" class="gicon-share-db" href="#" title="分享到豆瓣">豆瓣</a> <a data-type="" class="gicon-share-sina" href="#" title="分享到新浪微博">新浪微博</a> <a data-type="" class="gicon-share-qzone" href="#" title="分享到QQ空间">QQ空间</a> <a data-type="" class="gicon-share-weixin" href="#" title="分享到微信">微信</a> <a data-type="" class="gicon-share-qqmb" href="#" title="分享到腾讯微博">腾讯微博</a><div class="counter"><b><s></s></b><span class="BSHARE_COUNT share_counter">0</span></div>',
        c = "9dd5aa8d-bbe1-4a9e-ac82-6e6002ca17fa",
        d = "",
        e = 0,
        f, g;
    return function(c, d, e, f, i) {
        h(e || "9dd5aa8d-bbe1-4a9e-ac82-6e6002ca17fa", function() {
            g = $(c);
            var e = "";
            if (i) switch (i) {
                case "contentShare":
                    e = b
            } else e = f || a;
            g.html(e), g.delegate("a", "click", function(a) {
                a.preventDefault();
                var b = $("#share .BSHARE_COUNT");
                if (b.length) {
                    var c = b.html();
                    setTimeout(function() {
                        b.html(+c + 1)
                    }, 10)
                }
                var e = $(this),
                    f = e.data("type"),
                    g = G.isFun(d) ? d(f) : d,
                    h = g;
                if (h === !1) return;
                G.isFun(h.pic) && h.pic(function(a) {
                    h.pic = a
                }), bShare ? (bShare.entries = [], bShare.addEntry(g), bShare.share(a, f)) : G.log("bshare not loaded")
            })
        })
    }
}), G.def("jquery/easing", function() {
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0) return c;
            if ((b /= e) == 1) return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0) return c;
            if ((b /= e) == 1) return c + d;
            g || (g = e * .3);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (b == 0) return c;
            if ((b /= e / 2) == 2) return c + d;
            g || (g = e * .3 * 1.5);
            if (h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return f == undefined && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return b < e / 2 ? jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c : jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
        }
    })
}), G.def("random", function() {
    "use strict";
    var a, b, c, d;
    return a = function(a, e, f) {
        var g, h = !1;
        return G.isArray(a) || (h = a.jquery) ? (e && G.isFun(e) ? g = d(a, e) : g = c(a, parseInt(e, 10) || a.length), h ? $(g) : g) : b(a, parseInt(e, 10), f)
    }, b = function(a, b, c) {
        return c ? Math.random() * (b - a) + a : Math.floor(Math.random() * (b - a) + a)
    }, c = function(a, c) {
        if (!a.length || !c) return;
        return a[b(0, c)]
    }, d = function(a, c) {
        if (!a || !a.length) return;
        var d = 0,
            e = 0,
            f = a.length,
            g, h = 0,
            i;
        for (; e < f; e++) {
            i = c(a[e]);
            if (i <= 0) continue;
            d += i
        }
        g = b(1, d + 1);
        for (e = 0; e < f; e++) {
            i = c(a[e]);
            if (i <= 0) continue;
            h += i;
            if (h >= g) return a[e]
        }
    }, a
}), G.def("scrollTo", ["jquery/easing"], function(a) {
    function c(a) {
        var b = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft,
            c = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
            d = c + (window.innerHeight || document.documentElement.clientHeight),
            e = b + (window.innerWidth || document.documentElement.clientWidth),
            f = a.scrollLeft,
            g = a.scrollTop,
            h = f + (a.width || 0),
            i = g + (a.height || 0),
            j = !1,
            k = !1;
        if (f != null && f < b || h > e) j = !0;
        if (g != null && g < c || i > d) k = !0;
        return j && k ? 3 : k ? 2 : j ? 1 : 0
    }
    "use strict";
    var b = $("html,body");
    return function(a, d, e, f) {
        function m() {
            b.animate(i, k || 1e3, "easeInOutCirc", d ? function a() {
                a.exed && d(), a.exed = !0
            } : null)
        }
        var g = typeof a == "number",
            h = g ? {
                top: a,
                left: a
            } : a.offset ? a.offset() : a,
            i = {},
            j, k, l;
        typeof e == "number" ? (k = e, l = typeof f == "string" ? f : "top") : typeof e == "string" ? (k = 1e3, l = e) : (k = 1e3, l = g ? "top" : "all");
        switch (l) {
            case "all":
                i.scrollTop = h.top, i.scrollLeft = h.left;
                break;
            case "top":
                i.scrollTop = h.top;
                break;
            case "left":
                i.scrollLeft = h.left;
                break;
            default:
                return
        }
        a.jquery && (i.width = a.width(), i.height = a.height()), j = c(i), a.jquery && (delete i.width, delete i.height);
        switch (j) {
            case 0:
                return d && d(), !1;
            case 1:
                return delete i.scrollTop, m(), !0;
            case 2:
                return delete i.scrollLeft, m(), !0;
            case 3:
                return m(), !0;
            default:
        }
    }
}), G.def("toolTip", ["scrollTo"], function(a) {
    "use strict";
    var b = '<div class="{klass}" style="position:absolute;z-index:{zIndex};">                    {msg}                    <b class="{klassArrow}" style="{pointBStyle}"><s class="{klassArrow}" style="{pointSStyle}"></s></b>                </div>',
        c = {
            up: "left",
            down: "left",
            right: "top",
            left: "top"
        },
        d = {
            up: "top:-20px;border-bottom-style:solid;",
            down: "bottom:-20px;border-top-style:solid;",
            right: "right:-20px;border-left-style:solid;",
            left: "left:-20px;border-right-style:solid;"
        },
        e = {
            up: "top:-8px;left:-9px;border-bottom-style:solid;",
            down: "top:-10px;left:-9px;border-top-style:solid;",
            right: "top:-9px;left:-10px;border-left-style:solid;",
            left: "top:-9px;left:-8px;border-right-style:solid;"
        },
        f = function(f, g, h) {
            function r() {
                q.css({
                    top: j[0],
                    left: j[1],
                    width: n
                }), $("b", q).css(c[l], m), o.append(q)
            }

            function s() {
                q.remove(), h && h()
            }
            var i = g.msg,
                j = g.position,
                k = $(g.coordinates),
                l = g.direction || "up",
                m = g.offset || 0,
                n = g.width,
                o = $(f),
                p = o.offset(),
                q = $(G.format(b, {
                    msg: i,
                    direction: l,
                    zIndex: g.zIndex || 999,
                    klass: g.klass || "tooltip",
                    klassArrow: (g.klass || "tooltip") + "-" + l,
                    pointSStyle: "position:absolute;border-width:9px;border-color:transparent;border-style:dashed;width:0;height:0;font-size:0;" + e[l],
                    pointBStyle: "position:absolute;border-width:10px;border-color:transparent;border-style:dashed;width:0;height:0;font-size:0;" + d[l]
                }));
            return o.css("position", "relative"), k.length && (k = k.position(), j[0] += k.top, j[1] += k.left), r(), g.noscroll || a({
                top: j[0] + p.top + (l === "up" ? -10 : 0),
                left: j[1] + p.left + (l === "left" ? -10 : 0)
            }), {
                remove: s,
                $toolTip: q
            }
        };
    return f
}), G.def("jquery/waypoints", function() {
    var a = jQuery,
        b = "waypoint",
        c = "waypoints";
    "$:nomunge";
    var d = a(window),
        e = "waypoint.reached",
        f = function(a, c) {
            a.element.trigger(e, c), a.options.triggerOnce && a.element[b]("destroy")
        },
        g = function(a, b) {
            var c = b.waypoints.length - 1;
            while (c >= 0 && b.waypoints[c].element[0] !== a[0]) c -= 1;
            return c
        },
        h = [],
        i = function(b) {
            a.extend(this, {
                element: a(b),
                oldScroll: 0,
                waypoints: [],
                didScroll: !1,
                didResize: !1,
                doScroll: a.proxy(function() {
                    var b = this.element.scrollTop(),
                        d = b > this.oldScroll,
                        e = this,
                        g = a.grep(this.waypoints, function(a, c) {
                            return d ? a.offset > e.oldScroll && a.offset <= b : a.offset <= e.oldScroll && a.offset > b
                        }),
                        h = g.length;
                    (!this.oldScroll || !b) && a[c]("refresh"), this.oldScroll = b;
                    if (!h) return;
                    d || g.reverse(), a.each(g, function(a, b) {
                        (b.options.continuous || a === h - 1) && f(b, [d ? "down" : "up"])
                    })
                }, this)
            }), a(b).scroll(a.proxy(function() {
                this.didScroll || (this.didScroll = !0, window.setTimeout(a.proxy(function() {
                    this.doScroll(), this.didScroll = !1
                }, this), a[c].settings.scrollThrottle))
            }, this)).resize(a.proxy(function() {
                this.didResize || (this.didResize = !0, window.setTimeout(a.proxy(function() {
                    a[c]("refresh"), this.didResize = !1
                }, this), a[c].settings.resizeThrottle))
            }, this)), d.load(a.proxy(function() {
                this.doScroll()
            }, this))
        },
        j = function(b) {
            var c = null;
            return a.each(h, function(a, d) {
                if (d.element[0] === b) return c = d, !1
            }), c
        },
        k = {
            init: function(d, f) {
                return this.each(function() {
                    var k = a.fn[b].defaults.context,
                        l, m = a(this);
                    f && f.context && (k = f.context), a.isWindow(k) || (k = m.closest(k)[0]), l = j(k), l || (l = new i(k), h.push(l));
                    var n = g(m, l),
                        o = n < 0 ? a.fn[b].defaults : l.waypoints[n].options,
                        p = a.extend({}, o, f);
                    p.offset = p.offset === "bottom-in-view" ? function() {
                        var b = a.isWindow(k) ? a[c]("viewportHeight") : a(k).height();
                        return b - a(this).outerHeight()
                    } : p.offset, n < 0 ? l.waypoints.push({
                        element: m,
                        offset: null,
                        options: p
                    }) : l.waypoints[n].options = p, d && m.bind(e, d), f && f.handler && m.bind(e, f.handler)
                }), a[c]("refresh"), this
            },
            remove: function() {
                return this.each(function(b, c) {
                    var d = a(c);
                    a.each(h, function(a, b) {
                        var c = g(d, b);
                        c >= 0 && b.waypoints.splice(c, 1)
                    })
                })
            },
            destroy: function() {
                return this.unbind(e)[b]("remove")
            }
        },
        l = {
            refresh: function() {
                a.each(h, function(b, d) {
                    var e = a.isWindow(d.element[0]),
                        g = e ? 0 : d.element.offset().top,
                        h = e ? a[c]("viewportHeight") : d.element.height(),
                        i = e ? 0 : d.element.scrollTop();
                    a.each(d.waypoints, function(a, b) {
                        if (!b) return;
                        var c = b.options.offset,
                            e = b.offset;
                        if (typeof b.options.offset == "function") c = b.options.offset.apply(b.element);
                        else if (typeof b.options.offset == "string") {
                            var j = parseFloat(b.options.offset);
                            c = b.options.offset.indexOf("%") ? Math.ceil(h * (j / 100)) : j
                        }
                        b.offset = b.element.offset().top - g + i - c;
                        if (b.options.onlyOnScroll) return;
                        e !== null && d.oldScroll > e && d.oldScroll <= b.offset ? f(b, ["up"]) : e !== null && d.oldScroll < e && d.oldScroll >= b.offset ? f(b, ["down"]) : !e && i > b.offset && f(b, ["down"])
                    }), d.waypoints.sort(function(a, b) {
                        return a.offset - b.offset
                    })
                })
            },
            viewportHeight: function() {
                return window.innerHeight ? window.innerHeight : d.height()
            },
            aggregate: function() {
                var b = a();
                return a.each(h, function(c, d) {
                    a.each(d.waypoints, function(a, c) {
                        b = b.add(c.element)
                    })
                }), b
            }
        };
    a.fn[b] = function(c) {
        if (k[c]) return k[c].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof c == "function" || !c) return k.init.apply(this, arguments);
        if (typeof c == "object") return k.init.apply(this, [null, c]);
        a.error("Method " + c + " does not exist on jQuery " + b)
    }, a.fn[b].defaults = {
        continuous: !0,
        offset: 0,
        triggerOnce: !1,
        context: window
    }, a[c] = function(a) {
        return l[a] ? l[a].apply(this) : l.aggregate()
    }, a[c].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    }, d.load(function() {
        a[c]("refresh")
    })
}), G.req(["toolTip", "share", "jquery/easing", "jquery/waypoints", "random"], function(a, b, c, d, e) {
    "use strict";
    var f = !1,
        g = !1,
        h = !1,
        i = $("#doorTip"),
        j = function() {
            g ? $.browser.msie && $.browser.version <= 8 ? (g = !1, i.css("top", -i.height())) : i.fadeOut(1e3, function() {
                g = !1
            }) : h = !0
        },
        k = null;
    $(".list li").hover(function() {
        var b = $(this),
            c = b.css({
                overflow: "visible",
                "z-index": 1
            }),
            d = b.children().data("desc");
        b.parents(".category").css("z-index", 1), k = a(c, {
            msg: '<p class="tooltip-desc">' + d + "</p>",
            position: [33, 0],
            direction: "up",
            offset: 10,
            width: 160
        }, function() {
            return !1
        })
    }, function() {
        k.remove(), $(this).css("z-index", 0).parents(".category").css("z-index", 0)
    }), $("#addFavorite").hover(function() {
        if ($(this).children().length > 1) return;
        var b = "这是一个非常无聊的功能，请谨慎使用";
        k = a($(this), {
            msg: '<p class="tooltip-favorate-desc">' + b + "</p>",
            position: [118, 173],
            direction: "up",
            offset: 10,
            width: 160
        }, function() {
            return !1
        })
    }, function() {
        k.remove(), $(this).children().length > 1 && setTimeout(function() {
            $(".tooltip:first").remove()
        }, 5e3)
    }), $(function() {
        function r() {
            s !== 0 ? (t.text(s), s -= 1) : window.location.href = "http://gate.guokr.com"
        }

        function v() {
            if (y <= 10) {
                y += 1;
                var a = $(".item_template").clone(!0);
                a.removeClass("item_template"), a.addClass("item"), a.find("input, select, textarea").each(function() {
                    $(this).attr("name", $(this).attr("name") + "_" + y)
                }), $("#add").before(a)
            }
            y >= 10 ? x() : y == 1 ? $(".item-del").hide() : y > 1 && $(".item-del").show()
        }

        function w() {
            $("#add").removeClass("hide")
        }

        function x() {
            $("#add").addClass("hide")
        }
        b("#share", {
            title: "果壳任意门",
            summary: "推荐@果壳任意门 http://gate.guokr.com/ ，是真的有任意门可以跳进去的兴趣导航站。无论你是学霸、极客、宅男、乐活族、文艺范、小清新、背包客还是运动爱好者，都能找到喜欢的去处。",
            url: location.href
        },
        "9d09b145-a50a-4d8d-b963-0d938a77d7ad",
        '<a data-type="" class="top-share-xl" href="#" title="分享到新浪微博">新浪微博</a> <a data-type="" class="top-share-rr" href="#" title="分享到人人">人人</a> <a data-type="" class="top-share-db" href="#" title="分享到豆瓣">豆瓣</a> <a data-type="" class="top-share-qq" href="#" title="分享到QQ空间">QQ空间</a> <a data-type="" class="top-share-tqq" href="#" title="分享到腾讯微博">腾讯微博</a>');
        var c = $("#doorsKey"),
            d = $("#recommendBoard"),
            k = $("#bottom"),
            l = $("#guokrLogo"),
            m = $("#hao123Logo"),
            n = !1,
            o = !1,
            p = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@\?\^=%&:\/~\+#]*[\w\-@?\^=%&\/~\+#])?/,
            q = {
                closeBoard: function(a) {
                    a.parent().parent().next().fadeOut("slow"), a.data("operation", "openBoard").text("展开").addClass("open"), $.waypoints("refresh")
                },
                openBoard: function(a) {
                    a.parent().parent().next().fadeIn("slow"), a.data("operation", "closeBoard").text("收起").removeClass("open"), $.waypoints("refresh")
                },
                openDoor: function(a) {
                    a.text("-").addClass("close").data("operation", "closeDoor").next().show(), setTimeout(j, 500)
                },
                closeDoor: function(a) {
                    a.text("+").removeClass("close").data("operation", "openDoor").next().hide()
                },
                gotoDoor: function(a) {
                    var b = $(a.attr("href")).next().find("a"),
                        d = e(b),
                        f = d.attr("href");
                    _gaq.push(["_trackEvent", "AnywhereDoor", "OpenAnyDoor", d.text()]),
                    $.browser.msie ? (n = !0, d[0].click()) : q.closeDoor(c)
                },
                showMore: function(b) {
                    q.closeMore();
                    if (b.siblings(".more").length > 0) b.siblings(".more").removeClass("hide"), b.parent().css("z-index", 3);
                    else {
                        var c = b.siblings("ul").clone(),
                            d, e;
                        c.children("li").removeClass("hide"), d = c.html(), e = '<div class="more"><p class="more-title">' + b.text() + '：<a href="javascript:void(0);" data-operation="closeMore" class="gui-block-close">X</a></p><ul class="sites">' + d + "</ul></div>", b.parent().append(e).css("z-index", 3);
                        var f = null;
                        $(".more li").hover(function() {
                            var b = $(this),
                                c = b.css({
                                    overflow: "visible",
                                    "z-index": 1
                                }),
                                d = b.children().data("desc");
                            f = a(c, {
                                msg: '<p class="tooltip-desc">' + d + "</p>",
                                position: [33, 0],
                                direction: "up",
                                offset: 10,
                                width: 160
                            }, function() {
                                return !1
                            })
                        }, function() {
                            f.remove(), $(this).css("z-index", 0)
                        })
                    }
                },
                closeMore: function(a) {
                    $(".more").addClass("hide").parent().css("z-index", 0)
                },
                addFavorite: function(b) {
                    b.hasClass("rotate") ? b.removeClass("rotate") : b.addClass("rotate");
                    var c = navigator.userAgent.toLowerCase().indexOf("mac") != -1 ? "Command/Cmd" : "CTRL",
                        d = document.location.href + "random/",
                        e = "果壳任意门";
                    if (document.all) window.external.addFavorite(d, e);
                    else if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(e, d, "");
                    else if (window.opera) b.attr("href", d), b.attr("title", e), b.attr("rel", "sidebar"), b.click();
                    else {
                        var f = "您可以使用" + c + ' + D 并点击"<span class="high_light">修改</span>"按钮，将网址改为 <span>http://gate.guokr.com/random/</span>添加到收藏夹 ';
                        parent = b.parent(), b.siblings().length < 2 && a(parent, {
                            msg: '<p class="tooltip-favorate-desc">' + f + "</p>",
                            position: [118, 173],
                            direction: "up",
                            offset: 10,
                            width: 160
                        }, function() {
                            return !1
                        })
                    }
                }
            };
        $("body").delegate("a[data-operation]", "click", function(a) {
            a.preventDefault();
            var b = $(this),
                c = b.data("operation");
            q[c].call(null, b)
        }).click(function(a) {
            var b = $(a.target),
                e;
            b.is("a[data-operation]") || q.closeDoor(c);
            if (b.is("a") && b.attr("href").match(p)) {
                if (n) {
                    n = !1;
                    return
                }
                e = $.contains(d[0], b[0]) ? "OpenRecommendDoor" : "OpenDoor", _gaq.push(["_trackEvent", "AnywhereDoor", e, b.text()])
            }
            b.is(".more p") && q.closeMore()
        }), $(".wrap").delegate("h3", "click", function() {
            var a = $(this);
            q.showMore.call(null, a)
        }), !g && !f && setTimeout(function() {
            f = !0, i.show().animate({
                top: 0
            }, 1e3, "easeOutBounce", function() {
                f = !1, g = !0, h && (j(), h = !1)
            })
        }, 2e3), k.waypoint(function() {
            o || (o = !0, setTimeout(function() {
                l.animate({
                    bottom: 45
                }, 1e3, "easeOutBounce")
            }, 1e3))
        }, {
            offset: "100%"
        });
        if (g_page_name === "anywhereCountDownPage") var s = 5,
            t = $("#second"),
            u = setInterval(r, 1e3);
        $(".item-del").click(function() {
            y == 10 && w(), y > 1 && ($(this).parent().remove(), y -= 1, y == 1 && $(".item-del").hide())
        });
        var y = $("form").find('div[id!="add"]').length;
        g_page_name === "anywhereSubmitPage" && ($("#add").click(v), $('select[name="interest_id"]').change(function() {
            var a = $(this).find(":selected").val(),
                b = $(this).parent().find('select[name^="taxonomy_id"]'),
                c = selectDict[a],
                d = "";
            for (var e = 0; e < c.length; ++e) d += '<option value="' + c[e].id + '">' + c[e].name + "</option>";
            b.empty(), b.html(d)
        }), $(".item_template input").focus(function() {
            $(this).next().addClass("hide")
        }), $(".item_template textarea").focus(function() {
            $(this).next().addClass("hide")
        }), y == 0 && v(), $("#submit_button").click(function(a) {
            a.preventDefault();
            var b = !0,
                c = $(".item input"),
                d = $(".item textarea");
            c.each(function() {
                if ($(this).val() === "") $(this).next().text("请填写").removeClass("hide"), b = !1;
                else if ($(this).hasClass("link")) {
                    var a = new RegExp(/^(https?:\/\/)?[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+[-a-zA-Z0-9@:%_\+.~#?&/=]*$/);
                    a.test($(this).val()) ? $(this).next().addClass("hide") : ($(this).next().text("请输入正确的链接").removeClass("hide"), b = !1)
                } else $(this).next().addClass("hide")
            }), d.each(function() {
                $(this).val().length > 50 ? ($(this).next().text("请不要超过50字符").removeClass("hide"), b = !1) : $(this).val() === "" ? ($(this).next().text("请填写").removeClass("hide"), b = !1) : $(this).next().addClass("hide")
            }), b && $(".submit-form").submit()
        }))
    })
})