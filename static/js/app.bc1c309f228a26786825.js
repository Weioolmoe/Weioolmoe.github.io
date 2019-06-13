webpackJsonp([1], {
    0: function (t, e) {
    }, FBSW: function (t, e) {
    }, MBWx: function (t, e) {
    }, NHnr: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n("7+uW"), l = n("gAzQ"), r = n("BHdf"), a = n("V8mf"), i = n.n(a), c = (n("FBSW"), n("MBWx"), {
            name: "code-diff",
            props: {
                oldString: {type: String, default: ""},
                newString: {type: String, default: ""},
                context: {type: Number, default: 5},
                outputFormat: {type: String, default: "line-by-line"}
            },
            directives: {
                highlight: function (t) {
                    t.querySelectorAll("code").forEach(function (t) {
                        i.a.highlightBlock(t)
                    })
                }
            },
            computed: {
                html: function () {
                    return this.createdHtml(this.oldString, this.newString, this.context, this.outputFormat)
                }
            },
            methods: {
                createdHtml: function (t, e, n, o) {
                    var a = ["", t, e, "", "", {context: n}], i = l.createPatch.apply(void 0, a),
                        c = r.Diff2Html.getJsonFromDiff(i, {
                            inputFormat: "diff",
                            outputFormat: o,
                            showFiles: !1,
                            matching: "lines"
                        });
                    return function (t) {
                        return t.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><code>$1</code></span>')
                    }(r.Diff2Html.getPrettyHtml(c, {
                        inputFormat: "json",
                        outputFormat: o,
                        showFiles: !1,
                        matching: "lines"
                    }))
                }
            }
        }), s = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {attrs: {id: "app"}}, [e("div", {
                    directives: [{
                        name: "highlight",
                        rawName: "v-highlight"
                    }], domProps: {innerHTML: this._s(this.html)}
                })])
            }, staticRenderFns: []
        };
        var u = n("VU/8")(c, s, !1, function (t) {
            n("P505")
        }, null, null).exports;
        u.install = function (t) {
            t.component(u.name, u)
        };
        var d = {
            name: "App", components: {codeDiff: u}, data: function () {
                return {oldStr: "", newStr: "", fotmat: !1, context: 10}
            }, computed: {
                outputFormat: function () {
                    return this.fotmat ? "line-by-line" : "side-by-side"
                }
            }, watch: {
                oldStr: function (t) {
                    localStorage.setItem("oldStr", t)
                }, newStr: function (t) {
                    localStorage.setItem("newStr", t)
                }
            }, created: function () {
                this.oldStr = localStorage.getItem("oldStr") || "", this.newStr = localStorage.getItem("newStr") || ""
            }, methods: {
                handleClearLocalStorage: function () {
                    this.newStr = "", this.oldStr = "", localStorage.setItem("newStr", ""), localStorage.setItem("oldStr", "")
                }, loadTextFromFile: function (t) {
                    var e = this, n = t.target.files[0], o = new FileReader;
                    o.onload = function (t) {
                        e.oldStr = t.target.result
                    }, o.readAsText(n, "utf-8")
                }, loadNewTextFromFile: function (t) {
                    var e = this, n = t.target.files[0], o = new FileReader;
                    o.onload = function (t) {
                        e.newStr = t.target.result
                    }, o.readAsText(n, "utf-8")
                }
            }
        }, f = {
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [n("el-form", [n("el-row", {attrs: {gutter: 10}}, [n("el-col", {attrs: {span: 12}}, [n("el-form-item", {attrs: {label: "旧数据："}}, [n("input", {
                    attrs: {type: "file"},
                    on: {change: t.loadTextFromFile}
                })])], 1), t._v(" "), n("el-col", {attrs: {span: 12}}, [n("el-form-item", {attrs: {label: "新数据："}}, [n("input", {
                    attrs: {type: "file"},
                    on: {change: t.loadNewTextFromFile}
                })])], 1), t._v(" "), n("el-col", {attrs: {span: 8}}, [n("el-form-item", {attrs: {label: "展示效果："}}, [n("el-switch", {
                    attrs: {
                        "active-text": "line-by-line",
                        "inactive-text": "side-by-side"
                    }, model: {
                        value: t.fotmat, callback: function (e) {
                            t.fotmat = e
                        }, expression: "fotmat"
                    }
                })], 1)], 1), t._v(" "), n("el-col", {attrs: {span: 8}}, [n("el-form-item", {attrs: {label: "差异化范围："}}, [n("el-input-number", {
                    attrs: {placeholder: ""},
                    model: {
                        value: t.context, callback: function (e) {
                            t.context = e
                        }, expression: "context"
                    }
                })], 1)], 1), t._v(" "), n("el-col", {attrs: {span: 8}}, [n("el-form-item", {attrs: {label: "清除缓存："}}, [n("el-button", {
                    attrs: {type: "text"},
                    on: {click: t.handleClearLocalStorage}
                }, [t._v("清除")])], 1)], 1)], 1)], 1), t._v(" "), n("code-diff", {
                    attrs: {
                        "old-string": t.oldStr,
                        "new-string": t.newStr,
                        context: t.context,
                        "output-format": t.outputFormat
                    }
                })], 1)
            }, staticRenderFns: []
        }, m = n("VU/8")(d, f, !1, null, null, null).exports, p = n("zL8q"), h = n.n(p);
        n("tvR6");
        o.default.config.productionTip = !1, o.default.use(h.a), new o.default({
            el: "#app",
            components: {App: m},
            template: "<App/>"
        })
    }, P505: function (t, e) {
    }, tvR6: function (t, e) {
    }
}, ["NHnr"]);