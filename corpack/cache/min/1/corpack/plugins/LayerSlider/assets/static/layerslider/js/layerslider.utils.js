var _initLayerSlider = function (i, t, e) {
  var r = jQuery;
  r(document).ready(function () {
    void 0 === r.fn.layerSlider
      ? window._layerSlider &&
        window._layerSlider.showNotice &&
        window._layerSlider.showNotice(i, "jquery")
      : (e &&
          r.each(e, function (t, e) {
            r(i).on(t, e);
          }),
        r(i).layerSlider(t));
  });
};
if ("object" == typeof LS_Meta && LS_Meta.fixGSAP) {
  var LS_oldGS = window.GreenSockGlobals,
    LS_oldGSQueue = window._gsQueue,
    LS_oldGSDefine = window._gsDefine;
  (window._gsDefine = null), delete window._gsDefine;
  var LS_GSAP = (window.GreenSockGlobals = {});
}
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  function l(e) {
    var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ((Math.round(t / e) * e * i) | 0) / i;
    };
  }
  function h(t, e) {
    for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
  }
  var t, e, P, T, w, b, g, i, m, r;
  function y(t, e, i, r) {
    i === r && (i = r - (r - e) / 1e6),
      t === e && (e = t + (i - t) / 1e6),
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = r),
      (this.da = r - t),
      (this.ca = i - t),
      (this.ba = e - t);
  }
  function S(t, e, i, r) {
    var n = { a: t },
      s = {},
      a = {},
      o = { c: r },
      l = (t + e) / 2,
      h = (e + i) / 2,
      u = (i + r) / 2,
      _ = (l + h) / 2,
      f = (h + u) / 2,
      c = (f - _) / 8;
    return (
      (n.b = l + (t - l) / 4),
      (s.b = _ + c),
      (n.c = s.a = (n.b + s.b) / 2),
      (s.c = a.a = (_ + f) / 2),
      (a.b = f - c),
      (o.b = u + (r - u) / 4),
      (a.c = o.a = (a.b + o.b) / 2),
      [n, s, a, o]
    );
  }
  function v(t, e, i, r, n) {
    var s,
      a,
      o,
      l,
      h,
      u,
      _,
      f,
      c,
      p,
      d,
      m,
      g,
      y = t.length - 1,
      v = 0,
      x = t[0].a;
    for (s = 0; s < y; s++)
      (a = (h = t[v]).a),
        (o = h.d),
        (l = t[v + 1].d),
        (f = n
          ? ((d = T[s]),
            (g = (((m = w[s]) + d) * e * 0.25) / (r ? 0.5 : b[s] || 0.5)),
            o -
              ((u = o - (o - a) * (r ? 0.5 * e : 0 !== d ? g / d : 0)) +
                ((((_ = o + (l - o) * (r ? 0.5 * e : 0 !== m ? g / m : 0)) -
                  u) *
                  ((3 * d) / (d + m) + 0.5)) /
                  4 || 0)))
          : o -
            ((u = o - (o - a) * e * 0.5) + (_ = o + (l - o) * e * 0.5)) / 2),
        (u += f),
        (_ += f),
        (h.c = c = u),
        (h.b = 0 !== s ? x : (x = h.a + 0.6 * (h.c - h.a))),
        (h.da = o - a),
        (h.ca = c - a),
        (h.ba = x - a),
        i
          ? ((p = S(a, x, c, o)),
            t.splice(v, 1, p[0], p[1], p[2], p[3]),
            (v += 4))
          : v++,
        (x = _);
    ((h = t[v]).b = x),
      (h.c = x + 0.4 * (h.d - x)),
      (h.da = h.d - h.a),
      (h.ca = h.c - h.a),
      (h.ba = x - h.a),
      i && ((p = S(h.a, x, h.c, h.d)), t.splice(v, 1, p[0], p[1], p[2], p[3]));
  }
  function x(t, e, i, r) {
    var n,
      s,
      a,
      o,
      l,
      h,
      u = [];
    if (r)
      for (s = (t = [r].concat(t)).length; -1 < --s; )
        "string" == typeof (h = t[s][e]) &&
          "=" === h.charAt(1) &&
          (t[s][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
    if ((n = t.length - 2) < 0)
      return (u[0] = new y(t[0][e], 0, 0, t[0][e])), u;
    for (s = 0; s < n; s++)
      (a = t[s][e]),
        (o = t[s + 1][e]),
        (u[s] = new y(a, 0, 0, o)),
        i &&
          ((l = t[s + 2][e]),
          (T[s] = (T[s] || 0) + (o - a) * (o - a)),
          (w[s] = (w[s] || 0) + (l - o) * (l - o)));
    return (u[s] = new y(t[s][e], 0, 0, t[s + 1][e])), u;
  }
  function c(t, e, i, r, n, s) {
    var a,
      o,
      l,
      h,
      u,
      _,
      f,
      c,
      p = {},
      d = [],
      m = s || t[0];
    for (o in ((n =
      "string" == typeof n
        ? "," + n + ","
        : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
    null == e && (e = 1),
    t[0]))
      d.push(o);
    if (1 < t.length) {
      for (c = t[t.length - 1], f = !0, a = d.length; -1 < --a; )
        if (((o = d[a]), 0.05 < Math.abs(m[o] - c[o]))) {
          f = !1;
          break;
        }
      f &&
        ((t = t.concat()),
        s && t.unshift(s),
        t.push(t[1]),
        (s = t[t.length - 3]));
    }
    for (T.length = w.length = b.length = 0, a = d.length; -1 < --a; )
      (o = d[a]),
        (g[o] = -1 !== n.indexOf("," + o + ",")),
        (p[o] = x(t, o, g[o], s));
    for (a = T.length; -1 < --a; )
      (T[a] = Math.sqrt(T[a])), (w[a] = Math.sqrt(w[a]));
    if (!r) {
      for (a = d.length; -1 < --a; )
        if (g[o])
          for (_ = (l = p[d[a]]).length - 1, h = 0; h < _; h++)
            (u = l[h + 1].da / w[h] + l[h].da / T[h] || 0),
              (b[h] = (b[h] || 0) + u * u);
      for (a = b.length; -1 < --a; ) b[a] = Math.sqrt(b[a]);
    }
    for (a = d.length, h = i ? 4 : 1; -1 < --a; )
      (l = p[(o = d[a])]),
        v(l, e, i, r, g[o]),
        f && (l.splice(0, h), l.splice(l.length - h, h));
    return p;
  }
  function p(t, e, i) {
    for (
      var r, n, s, a, o, l, h, u, _, f, c, p = 1 / i, d = t.length;
      -1 < --d;

    )
      for (
        s = (f = t[d]).a,
          a = f.d - s,
          o = f.c - s,
          l = f.b - s,
          r = n = 0,
          u = 1;
        u <= i;
        u++
      )
        (r =
          n -
          (n = ((h = p * u) * h * a + 3 * (_ = 1 - h) * (h * o + _ * l)) * h)),
          (e[(c = d * i + u - 1)] = (e[c] || 0) + r * r);
  }
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (r, u, v) {
      function d(t) {
        var e,
          i = [],
          r = t.length;
        for (e = 0; e !== r; i.push(t[e++]));
        return i;
      }
      function m(t, e, i) {
        var r,
          n,
          s = t.cycle;
        for (r in s)
          (n = s[r]),
            (t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length]);
        delete t.cycle;
      }
      function g(t) {
        if ("function" == typeof t) return t;
        var p = "object" == typeof t ? t : { each: t },
          d = p.ease,
          m = p.from || 0,
          g = p.base || 0,
          y = {},
          v = isNaN(m),
          x = p.axis,
          T = { center: 0.5, end: 1 }[m] || 0;
        return function (t, e, i) {
          var r,
            n,
            s,
            a,
            o,
            l,
            h,
            u,
            _,
            f = (i || p).length,
            c = y[f];
          if (!c) {
            if (!(_ = "auto" === p.grid ? 0 : (p.grid || [1 / 0])[0])) {
              for (
                h = -1 / 0;
                h < (h = i[_++].getBoundingClientRect().left) && _ < f;

              );
              _--;
            }
            for (
              c = y[f] = [],
                r = v ? Math.min(_, f) * T - 0.5 : m % _,
                n = v ? (f * T) / _ - 0.5 : (m / _) | 0,
                u = 1 / (h = 0),
                l = 0;
              l < f;
              l++
            )
              (s = (l % _) - r),
                (a = n - ((l / _) | 0)),
                (c[l] = o =
                  x ? Math.abs("y" === x ? a : s) : Math.sqrt(s * s + a * a)),
                h < o && (h = o),
                o < u && (u = o);
            (c.max = h - u),
              (c.min = u),
              (c.v = f =
                p.amount ||
                p.each *
                  (f < _
                    ? f - 1
                    : x
                    ? "y" === x
                      ? f / _
                      : _
                    : Math.max(_, f / _)) ||
                0),
              (c.b = f < 0 ? g - f : g);
          }
          return (
            (f = (c[t] - c.min) / c.max), c.b + (d ? d.getRatio(f) : f) * c.v
          );
        };
      }
      var y = function (t, e, i) {
          v.call(this, t, e, i),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = y.prototype.render);
        },
        x = 1e-8,
        T = v._internals,
        w = T.isSelector,
        b = T.isArray,
        t = (y.prototype = v.to({}, 0.1, {})),
        P = [];
      (y.version = "2.1.3"),
        (t.constructor = y),
        (t.kill()._gc = !1),
        (y.killTweensOf = y.killDelayedCallsTo = v.killTweensOf),
        (y.getTweensOf = v.getTweensOf),
        (y.lagSmoothing = v.lagSmoothing),
        (y.ticker = v.ticker),
        (y.render = v.render),
        (y.distribute = g),
        (t.invalidate = function () {
          return (
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            v.prototype.invalidate.call(this)
          );
        }),
        (t.updateTo = function (t, e) {
          var i,
            r = this,
            n = r.ratio,
            s = r.vars.immediateRender || t.immediateRender;
          for (i in (e &&
            r._startTime < r._timeline._time &&
            ((r._startTime = r._timeline._time),
            r._uncache(!1),
            r._gc
              ? r._enabled(!0, !1)
              : r._timeline.insert(r, r._startTime - r._delay)),
          t))
            r.vars[i] = t[i];
          if (r._initted || s)
            if (e) (r._initted = !1), s && r.render(0, !0, !0);
            else if (
              (r._gc && r._enabled(!0, !1),
              r._notifyPluginsOfEnabled &&
                r._firstPT &&
                v._onPluginEvent("_onDisable", r),
              0.998 < r._time / r._duration)
            ) {
              var a = r._totalTime;
              r.render(0, !0, !1), (r._initted = !1), r.render(a, !0, !1);
            } else if (((r._initted = !1), r._init(), 0 < r._time || s))
              for (var o, l = 1 / (1 - n), h = r._firstPT; h; )
                (o = h.s + h.c), (h.c *= l), (h.s = o - h.c), (h = h._next);
          return r;
        }),
        (t.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var r,
            n,
            s,
            a,
            o,
            l,
            h,
            u,
            _,
            f = this,
            c = f._dirty ? f.totalDuration() : f._totalDuration,
            p = f._time,
            d = f._totalTime,
            m = f._cycle,
            g = f._duration,
            y = f._rawPrevTime;
          if (
            (c - x <= t && 0 <= t
              ? ((f._totalTime = c),
                (f._cycle = f._repeat),
                f._yoyo && 0 != (1 & f._cycle)
                  ? ((f._time = 0),
                    (f.ratio = f._ease._calcEnd ? f._ease.getRatio(0) : 0))
                  : ((f._time = g),
                    (f.ratio = f._ease._calcEnd ? f._ease.getRatio(1) : 1)),
                f._reversed ||
                  ((r = !0),
                  (n = "onComplete"),
                  (i = i || f._timeline.autoRemoveChildren)),
                0 !== g ||
                  (!f._initted && f.vars.lazy && !i) ||
                  (f._startTime === f._timeline._duration && (t = 0),
                  (y < 0 ||
                    (t <= 0 && -x <= t) ||
                    (y === x && "isPause" !== f.data)) &&
                    y !== t &&
                    ((i = !0), x < y && (n = "onReverseComplete")),
                  (f._rawPrevTime = u = !e || t || y === t ? t : x)))
              : t < x
              ? ((f._totalTime = f._time = f._cycle = 0),
                (f.ratio = f._ease._calcEnd ? f._ease.getRatio(0) : 0),
                (0 !== d || (0 === g && 0 < y)) &&
                  ((n = "onReverseComplete"), (r = f._reversed)),
                -x < t
                  ? (t = 0)
                  : t < 0 &&
                    ((f._active = !1),
                    0 !== g ||
                      (!f._initted && f.vars.lazy && !i) ||
                      (0 <= y && (i = !0),
                      (f._rawPrevTime = u = !e || t || y === t ? t : x))),
                f._initted || (i = !0))
              : ((f._totalTime = f._time = t),
                0 !== f._repeat &&
                  ((a = g + f._repeatDelay),
                  (f._cycle = (f._totalTime / a) >> 0),
                  0 !== f._cycle &&
                    f._cycle === f._totalTime / a &&
                    d <= t &&
                    f._cycle--,
                  (f._time = f._totalTime - f._cycle * a),
                  f._yoyo &&
                    0 != (1 & f._cycle) &&
                    ((f._time = g - f._time),
                    (_ = f._yoyoEase || f.vars.yoyoEase) &&
                      (f._yoyoEase ||
                        (!0 !== _ || f._initted
                          ? (f._yoyoEase = _ =
                              !0 === _
                                ? f._ease
                                : _ instanceof Ease
                                ? _
                                : Ease.map[_])
                          : ((_ = f.vars.ease),
                            (f._yoyoEase = _ =
                              _
                                ? _ instanceof Ease
                                  ? _
                                  : "function" == typeof _
                                  ? new Ease(_, f.vars.easeParams)
                                  : Ease.map[_] || v.defaultEase
                                : v.defaultEase))),
                      (f.ratio = _ ? 1 - _.getRatio((g - f._time) / g) : 0))),
                  f._time > g ? (f._time = g) : f._time < 0 && (f._time = 0)),
                f._easeType && !_
                  ? ((o = f._time / g),
                    (1 === (l = f._easeType) || (3 === l && 0.5 <= o)) &&
                      (o = 1 - o),
                    3 === l && (o *= 2),
                    1 === (h = f._easePower)
                      ? (o *= o)
                      : 2 === h
                      ? (o *= o * o)
                      : 3 === h
                      ? (o *= o * o * o)
                      : 4 === h && (o *= o * o * o * o),
                    (f.ratio =
                      1 === l
                        ? 1 - o
                        : 2 === l
                        ? o
                        : f._time / g < 0.5
                        ? o / 2
                        : 1 - o / 2))
                  : _ || (f.ratio = f._ease.getRatio(f._time / g))),
            p !== f._time || i || m !== f._cycle)
          ) {
            if (!f._initted) {
              if ((f._init(), !f._initted || f._gc)) return;
              if (
                !i &&
                f._firstPT &&
                ((!1 !== f.vars.lazy && f._duration) ||
                  (f.vars.lazy && !f._duration))
              )
                return (
                  (f._time = p),
                  (f._totalTime = d),
                  (f._rawPrevTime = y),
                  (f._cycle = m),
                  T.lazyTweens.push(f),
                  void (f._lazy = [t, e])
                );
              !f._time || r || _
                ? r &&
                  this._ease._calcEnd &&
                  !_ &&
                  (f.ratio = f._ease.getRatio(0 === f._time ? 0 : 1))
                : (f.ratio = f._ease.getRatio(f._time / g));
            }
            for (
              !1 !== f._lazy && (f._lazy = !1),
                f._active ||
                  (!f._paused && f._time !== p && 0 <= t && (f._active = !0)),
                0 === d &&
                  (2 === f._initted && 0 < t && f._init(),
                  f._startAt &&
                    (0 <= t
                      ? f._startAt.render(t, !0, i)
                      : (n = n || "_dummyGS")),
                  !f.vars.onStart ||
                    (0 === f._totalTime && 0 !== g) ||
                    e ||
                    f._callback("onStart")),
                s = f._firstPT;
              s;

            )
              s.f
                ? s.t[s.p](s.c * f.ratio + s.s)
                : (s.t[s.p] = s.c * f.ratio + s.s),
                (s = s._next);
            f._onUpdate &&
              (t < 0 &&
                f._startAt &&
                f._startTime &&
                f._startAt.render(t, !0, i),
              e || (f._totalTime === d && !n) || f._callback("onUpdate")),
              f._cycle !== m &&
                (e || f._gc || (f.vars.onRepeat && f._callback("onRepeat"))),
              !n ||
                (f._gc && !i) ||
                (t < 0 &&
                  f._startAt &&
                  !f._onUpdate &&
                  f._startTime &&
                  f._startAt.render(t, !0, i),
                r &&
                  (f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                  (f._active = !1)),
                !e && f.vars[n] && f._callback(n),
                0 === g &&
                  f._rawPrevTime === x &&
                  u !== x &&
                  (f._rawPrevTime = 0));
          } else
            d !== f._totalTime && f._onUpdate && (e || f._callback("onUpdate"));
        }),
        (y.to = function (t, e, i) {
          return new y(t, e, i);
        }),
        (y.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new y(t, e, i)
          );
        }),
        (y.fromTo = function (t, e, i, r) {
          return (
            (r.startAt = i),
            (r.immediateRender =
              0 != r.immediateRender && 0 != i.immediateRender),
            new y(t, e, r)
          );
        }),
        (y.staggerTo = y.allTo =
          function (t, e, i, r, n, s, a) {
            var o,
              l,
              h,
              u,
              _ = [],
              f = g(i.stagger || r),
              c = i.cycle,
              p = (i.startAt || P).cycle;
            for (
              b(t) ||
                ("string" == typeof t && (t = v.selector(t) || t),
                w(t) && (t = d(t))),
                o = (t = t || []).length - 1,
                h = 0;
              h <= o;
              h++
            ) {
              for (u in ((l = {}), i)) l[u] = i[u];
              if (
                (c &&
                  (m(l, t, h),
                  null != l.duration && ((e = l.duration), delete l.duration)),
                p)
              ) {
                for (u in ((p = l.startAt = {}), i.startAt))
                  p[u] = i.startAt[u];
                m(l.startAt, t, h);
              }
              (l.delay = f(h, t[h], t) + (l.delay || 0)),
                h === o &&
                  n &&
                  (l.onComplete = function () {
                    i.onComplete &&
                      i.onComplete.apply(i.onCompleteScope || this, arguments),
                      n.apply(a || i.callbackScope || this, s || P);
                  }),
                (_[h] = new y(t[h], e, l));
            }
            return _;
          }),
        (y.staggerFrom = y.allFrom =
          function (t, e, i, r, n, s, a) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              y.staggerTo(t, e, i, r, n, s, a)
            );
          }),
        (y.staggerFromTo = y.allFromTo =
          function (t, e, i, r, n, s, a, o) {
            return (
              (r.startAt = i),
              (r.immediateRender =
                0 != r.immediateRender && 0 != i.immediateRender),
              y.staggerTo(t, e, r, n, s, a, o)
            );
          }),
        (y.delayedCall = function (t, e, i, r, n) {
          return new y(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: r,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: n,
            overwrite: 0,
          });
        }),
        (y.set = function (t, e) {
          return new y(t, 0, e);
        }),
        (y.isTweening = function (t) {
          return 0 < v.getTweensOf(t, !0).length;
        });
      var s = function (t, e) {
          for (var i = [], r = 0, n = t._first; n; )
            n instanceof v
              ? (i[r++] = n)
              : (e && (i[r++] = n), (r = (i = i.concat(s(n, e))).length)),
              (n = n._next);
          return i;
        },
        _ = (y.getAllTweens = function (t) {
          return s(r._rootTimeline, t).concat(s(r._rootFramesTimeline, t));
        });
      (y.killAll = function (t, e, i, r) {
        null == e && (e = !0), null == i && (i = !0);
        var n,
          s,
          a,
          o = _(0 != r),
          l = o.length,
          h = e && i && r;
        for (a = 0; a < l; a++)
          (s = o[a]),
            (h ||
              s instanceof u ||
              ((n = s.target === s.vars.onComplete) && i) ||
              (e && !n)) &&
              (t
                ? s.totalTime(s._reversed ? 0 : s.totalDuration())
                : s._enabled(!1, !1));
      }),
        (y.killChildTweensOf = function (t, e) {
          if (null != t) {
            var i,
              r,
              n,
              s,
              a,
              o = T.tweenLookup;
            if (
              ("string" == typeof t && (t = v.selector(t) || t),
              w(t) && (t = d(t)),
              b(t))
            )
              for (s = t.length; -1 < --s; ) y.killChildTweensOf(t[s], e);
            else {
              for (n in ((i = []), o))
                for (r = o[n].target.parentNode; r; )
                  r === t && (i = i.concat(o[n].tweens)), (r = r.parentNode);
              for (a = i.length, s = 0; s < a; s++)
                e && i[s].totalTime(i[s].totalDuration()),
                  i[s]._enabled(!1, !1);
            }
          }
        });
      function n(t, e, i, r) {
        (e = !1 !== e), (i = !1 !== i);
        for (
          var n, s, a = _((r = !1 !== r)), o = e && i && r, l = a.length;
          -1 < --l;

        )
          (s = a[l]),
            (o ||
              s instanceof u ||
              ((n = s.target === s.vars.onComplete) && i) ||
              (e && !n)) &&
              s.paused(t);
      }
      return (
        (y.pauseAll = function (t, e, i) {
          n(!0, t, e, i);
        }),
        (y.resumeAll = function (t, e, i) {
          n(!1, t, e, i);
        }),
        (y.globalTimeScale = function (t) {
          var e = r._rootTimeline,
            i = v.ticker.time;
          return arguments.length
            ? ((t = t || x),
              (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
              (e = r._rootFramesTimeline),
              (i = v.ticker.frame),
              (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
              (e._timeScale = r._rootTimeline._timeScale = t),
              t)
            : e._timeScale;
        }),
        (t.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                e
              )
            : this.duration()
            ? this._time / this._duration
            : this.ratio;
        }),
        (t.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this._totalTime / this.totalDuration();
        }),
        (t.time = function (t, e) {
          if (!arguments.length) return this._time;
          this._dirty && this.totalDuration();
          var i = this._duration,
            r = this._cycle,
            n = r * (i + this._repeatDelay);
          return (
            i < t && (t = i),
            this.totalTime(
              this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t,
              e
            )
          );
        }),
        (t.duration = function (t) {
          return arguments.length
            ? r.prototype.duration.call(this, t)
            : this._duration;
        }),
        (t.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (t.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (t.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (t.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        y
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (_, f, p) {
        function d(t) {
          f.call(this, t);
          var e,
            i,
            r = this,
            n = r.vars;
          for (i in ((r._labels = {}),
          (r.autoRemoveChildren = !!n.autoRemoveChildren),
          (r.smoothChildTiming = !!n.smoothChildTiming),
          (r._sortChildren = !0),
          (r._onUpdate = n.onUpdate),
          n))
            (e = n[i]),
              c(e) &&
                -1 !== e.join("").indexOf("{self}") &&
                (n[i] = r._swapSelfInParams(e));
          c(n.tweens) && r.add(n.tweens, 0, n.align, n.stagger);
        }
        function m(t) {
          var e,
            i = {};
          for (e in t) i[e] = t[e];
          return i;
        }
        function g(t, e, i) {
          var r,
            n,
            s = t.cycle;
          for (r in s)
            (n = s[r]),
              (t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length]);
          delete t.cycle;
        }
        function h(t, e, i, r) {
          var n = "immediateRender";
          return n in e || (e[n] = !((i && !1 === i[n]) || r)), e;
        }
        function y(t) {
          if ("function" == typeof t) return t;
          var p = "object" == typeof t ? t : { each: t },
            d = p.ease,
            m = p.from || 0,
            g = p.base || 0,
            y = {},
            v = isNaN(m),
            x = p.axis,
            T = { center: 0.5, end: 1 }[m] || 0;
          return function (t, e, i) {
            var r,
              n,
              s,
              a,
              o,
              l,
              h,
              u,
              _,
              f = (i || p).length,
              c = y[f];
            if (!c) {
              if (!(_ = "auto" === p.grid ? 0 : (p.grid || [1 / 0])[0])) {
                for (
                  h = -1 / 0;
                  h < (h = i[_++].getBoundingClientRect().left) && _ < f;

                );
                _--;
              }
              for (
                c = y[f] = [],
                  r = v ? Math.min(_, f) * T - 0.5 : m % _,
                  n = v ? (f * T) / _ - 0.5 : (m / _) | 0,
                  u = 1 / (h = 0),
                  l = 0;
                l < f;
                l++
              )
                (s = (l % _) - r),
                  (a = n - ((l / _) | 0)),
                  (c[l] = o =
                    x ? Math.abs("y" === x ? a : s) : Math.sqrt(s * s + a * a)),
                  h < o && (h = o),
                  o < u && (u = o);
              (c.max = h - u),
                (c.min = u),
                (c.v = f =
                  p.amount ||
                  p.each *
                    (f < _
                      ? f - 1
                      : x
                      ? "y" === x
                        ? f / _
                        : _
                      : Math.max(_, f / _)) ||
                  0),
                (c.b = f < 0 ? g - f : g);
            }
            return (
              (f = (c[t] - c.min) / c.max), c.b + (d ? d.getRatio(f) : f) * c.v
            );
          };
        }
        var v = 1e-8,
          t = p._internals,
          e = (d._internals = {}),
          x = t.isSelector,
          c = t.isArray,
          T = t.lazyTweens,
          w = t.lazyRender,
          a = _gsScope._gsDefine.globals,
          s = (e.pauseCallback = function () {}),
          i = (d.prototype = new f());
        return (
          (d.version = "2.1.3"),
          (d.distribute = y),
          (i.constructor = d),
          (i.kill()._gc = i._forcingPlayhead = i._hasPause = !1),
          (i.to = function (t, e, i, r) {
            var n = (i.repeat && a.TweenMax) || p;
            return e ? this.add(new n(t, e, i), r) : this.set(t, i, r);
          }),
          (i.from = function (t, e, i, r) {
            return this.add(
              ((i.repeat && a.TweenMax) || p).from(t, e, h(0, i)),
              r
            );
          }),
          (i.fromTo = function (t, e, i, r, n) {
            var s = (r.repeat && a.TweenMax) || p;
            return (
              (r = h(0, r, i)),
              e ? this.add(s.fromTo(t, e, i, r), n) : this.set(t, r, n)
            );
          }),
          (i.staggerTo = function (t, e, i, r, n, s, a, o) {
            var l,
              h,
              u = new d({
                onComplete: s,
                onCompleteParams: a,
                callbackScope: o,
                smoothChildTiming: this.smoothChildTiming,
              }),
              _ = y(i.stagger || r),
              f = i.startAt,
              c = i.cycle;
            for (
              "string" == typeof t && (t = p.selector(t) || t),
                x((t = t || [])) &&
                  (t = (function (t) {
                    var e,
                      i = [],
                      r = t.length;
                    for (e = 0; e !== r; i.push(t[e++]));
                    return i;
                  })(t)),
                h = 0;
              h < t.length;
              h++
            )
              (l = m(i)),
                f && ((l.startAt = m(f)), f.cycle && g(l.startAt, t, h)),
                c &&
                  (g(l, t, h),
                  null != l.duration && ((e = l.duration), delete l.duration)),
                u.to(t[h], e, l, _(h, t[h], t));
            return this.add(u, n);
          }),
          (i.staggerFrom = function (t, e, i, r, n, s, a, o) {
            return (
              (i.runBackwards = !0),
              this.staggerTo(t, e, h(0, i), r, n, s, a, o)
            );
          }),
          (i.staggerFromTo = function (t, e, i, r, n, s, a, o, l) {
            return (
              (r.startAt = i), this.staggerTo(t, e, h(0, r, i), n, s, a, o, l)
            );
          }),
          (i.call = function (t, e, i, r) {
            return this.add(p.delayedCall(0, t, e, i), r);
          }),
          (i.set = function (t, e, i) {
            return this.add(new p(t, 0, h(0, e, null, !0)), i);
          }),
          (d.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming &&
              (t.smoothChildTiming = !0);
            var i,
              r,
              n,
              s,
              a = new d(t),
              o = a._timeline;
            for (
              null == e && (e = !0),
                o._remove(a, !0),
                a._startTime = 0,
                a._rawPrevTime = a._time = a._totalTime = o._time,
                n = o._first;
              n;

            )
              (s = n._next),
                (e && n instanceof p && n.target === n.vars.onComplete) ||
                  ((r = n._startTime - n._delay) < 0 && (i = 1), a.add(n, r)),
                (n = s);
            return o.add(a, 0), i && a.totalDuration(), a;
          }),
          (i.add = function (t, e, i, r) {
            var n,
              s,
              a,
              o,
              l,
              h,
              u = this;
            if (
              ("number" != typeof e && (e = u._parseTimeOrLabel(e, 0, !0, t)),
              !(t instanceof _))
            ) {
              if (t instanceof Array || (t && t.push && c(t))) {
                for (
                  i = i || "normal", r = r || 0, n = e, s = t.length, a = 0;
                  a < s;
                  a++
                )
                  c((o = t[a])) && (o = new d({ tweens: o })),
                    u.add(o, n),
                    "string" != typeof o &&
                      "function" != typeof o &&
                      ("sequence" === i
                        ? (n = o._startTime + o.totalDuration() / o._timeScale)
                        : "start" === i && (o._startTime -= o.delay())),
                    (n += r);
                return u._uncache(!0);
              }
              if ("string" == typeof t) return u.addLabel(t, e);
              if ("function" != typeof t)
                throw (
                  "Cannot add " +
                  t +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              t = p.delayedCall(0, t);
            }
            if (
              (f.prototype.add.call(u, t, e),
              (t._time || (!t._duration && t._initted)) &&
                ((n = (u.rawTime() - t._startTime) * t._timeScale),
                (!t._duration ||
                  1e-5 <
                    Math.abs(Math.max(0, Math.min(t.totalDuration(), n))) -
                      t._totalTime) &&
                  t.render(n, !1, !1)),
              (u._gc || u._time === u._duration) &&
                !u._paused &&
                u._duration < u.duration())
            )
              for (h = (l = u).rawTime() > t._startTime; l._timeline; )
                h && l._timeline.smoothChildTiming
                  ? l.totalTime(l._totalTime, !0)
                  : l._gc && l._enabled(!0, !1),
                  (l = l._timeline);
            return u;
          }),
          (i.remove = function (t) {
            if (t instanceof _) {
              this._remove(t, !1);
              var e = (t._timeline = t.vars.useFrames
                ? _._rootFramesTimeline
                : _._rootTimeline);
              return (
                (t._startTime =
                  (t._paused ? t._pauseTime : e._time) -
                  (t._reversed
                    ? t.totalDuration() - t._totalTime
                    : t._totalTime) /
                    t._timeScale),
                this
              );
            }
            if (t instanceof Array || (t && t.push && c(t))) {
              for (var i = t.length; -1 < --i; ) this.remove(t[i]);
              return this;
            }
            return "string" == typeof t
              ? this.removeLabel(t)
              : this.kill(null, t);
          }),
          (i._remove = function (t, e) {
            return (
              f.prototype._remove.call(this, t, e),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (i.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (i.insert = i.insertMultiple =
            function (t, e, i, r) {
              return this.add(t, e || 0, i, r);
            }),
          (i.appendMultiple = function (t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
          }),
          (i.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (i.addPause = function (t, e, i, r) {
            var n = p.delayedCall(0, s, i, r || this);
            return (
              (n.vars.onComplete = n.vars.onReverseComplete = e),
              (n.data = "isPause"),
              (this._hasPause = !0),
              this.add(n, t)
            );
          }),
          (i.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (i.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (i._parseTimeOrLabel = function (t, e, i, r) {
            var n, s;
            if (r instanceof _ && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && c(r))))
              for (s = r.length; -1 < --s; )
                r[s] instanceof _ &&
                  r[s].timeline === this &&
                  this.remove(r[s]);
            if (
              ((n =
                "number" != typeof t || e
                  ? 99999999999 < this.duration()
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof e)
            )
              return this._parseTimeOrLabel(
                e,
                i && "number" == typeof t && null == this._labels[e]
                  ? t - n
                  : 0,
                i
              );
            if (
              ((e = e || 0),
              "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
            )
              null == t && (t = n);
            else {
              if (-1 === (s = t.indexOf("=")))
                return null == this._labels[t]
                  ? i
                    ? (this._labels[t] = n + e)
                    : e
                  : this._labels[t] + e;
              (e =
                parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1))),
                (t =
                  1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : n);
            }
            return Number(t) + e;
          }),
          (i.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (i.stop = function () {
            return this.paused(!0);
          }),
          (i.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (i.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (i.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r,
              n,
              s,
              a,
              o,
              l,
              h,
              u,
              _ = this,
              f = _._time,
              c = _._dirty ? _.totalDuration() : _._totalDuration,
              p = _._startTime,
              d = _._timeScale,
              m = _._paused;
            if (
              (f !== _._time && (t += _._time - f),
              _._hasPause && !_._forcingPlayhead && !e)
            ) {
              if (f < t)
                for (r = _._first; r && r._startTime <= t && !l; )
                  r._duration ||
                    "isPause" !== r.data ||
                    r.ratio ||
                    (0 === r._startTime && 0 === _._rawPrevTime) ||
                    (l = r),
                    (r = r._next);
              else
                for (r = _._last; r && r._startTime >= t && !l; )
                  r._duration ||
                    ("isPause" === r.data && 0 < r._rawPrevTime && (l = r)),
                    (r = r._prev);
              l &&
                ((_._time = _._totalTime = t = l._startTime),
                (u =
                  _._startTime +
                  (_._reversed ? _._duration - t : t) / _._timeScale));
            }
            if (c - v <= t && 0 <= t)
              (_._totalTime = _._time = c),
                _._reversed ||
                  _._hasPausedChild() ||
                  ((n = !0),
                  (a = "onComplete"),
                  (o = !!_._timeline.autoRemoveChildren),
                  0 === _._duration &&
                    ((t <= 0 && -v <= t) ||
                      _._rawPrevTime < 0 ||
                      _._rawPrevTime === v) &&
                    _._rawPrevTime !== t &&
                    _._first &&
                    ((o = !0),
                    _._rawPrevTime > v && (a = "onReverseComplete"))),
                (_._rawPrevTime =
                  _._duration || !e || t || _._rawPrevTime === t ? t : v),
                (t = c + 1e-4);
            else if (t < v)
              if (
                ((_._totalTime = _._time = 0),
                -v < t && (t = 0),
                (0 !== f ||
                  (0 === _._duration &&
                    _._rawPrevTime !== v &&
                    (0 < _._rawPrevTime || (t < 0 && 0 <= _._rawPrevTime)))) &&
                  ((a = "onReverseComplete"), (n = _._reversed)),
                t < 0)
              )
                (_._active = !1),
                  _._timeline.autoRemoveChildren && _._reversed
                    ? ((o = n = !0), (a = "onReverseComplete"))
                    : 0 <= _._rawPrevTime && _._first && (o = !0),
                  (_._rawPrevTime = t);
              else {
                if (
                  ((_._rawPrevTime =
                    _._duration || !e || t || _._rawPrevTime === t ? t : v),
                  0 === t && n)
                )
                  for (r = _._first; r && 0 === r._startTime; )
                    r._duration || (n = !1), (r = r._next);
                (t = 0), _._initted || (o = !0);
              }
            else _._totalTime = _._time = _._rawPrevTime = t;
            if ((_._time !== f && _._first) || i || o || l) {
              if (
                (_._initted || (_._initted = !0),
                _._active ||
                  (!_._paused && _._time !== f && 0 < t && (_._active = !0)),
                0 === f &&
                  _.vars.onStart &&
                  ((0 === _._time && _._duration) ||
                    e ||
                    _._callback("onStart")),
                f <= (h = _._time))
              )
                for (
                  r = _._first;
                  r && ((s = r._next), h === _._time && (!_._paused || m));

                )
                  (r._active || (r._startTime <= h && !r._paused && !r._gc)) &&
                    (l === r && (_.pause(), (_._pauseTime = u)),
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i)),
                    (r = s);
              else
                for (
                  r = _._last;
                  r && ((s = r._prev), h === _._time && (!_._paused || m));

                ) {
                  if (
                    r._active ||
                    (r._startTime <= f && !r._paused && !r._gc)
                  ) {
                    if (l === r) {
                      for (l = r._prev; l && l.endTime() > _._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (t - l._startTime) * l._timeScale
                            : (t - l._startTime) * l._timeScale,
                          e,
                          i
                        ),
                          (l = l._prev);
                      (l = null), _.pause(), (_._pauseTime = u);
                    }
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i);
                  }
                  r = s;
                }
              _._onUpdate && (e || (T.length && w(), _._callback("onUpdate"))),
                a &&
                  (_._gc ||
                    (p !== _._startTime && d === _._timeScale) ||
                    !(0 === _._time || c >= _.totalDuration()) ||
                    (n &&
                      (T.length && w(),
                      _._timeline.autoRemoveChildren && _._enabled(!1, !1),
                      (_._active = !1)),
                    !e && _.vars[a] && _._callback(a)));
            }
          }),
          (i._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof d && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (i.getChildren = function (t, e, i, r) {
            r = r || -9999999999;
            for (var n = [], s = this._first, a = 0; s; )
              s._startTime < r ||
                (s instanceof p
                  ? !1 !== e && (n[a++] = s)
                  : (!1 !== i && (n[a++] = s),
                    !1 !== t &&
                      (a = (n = n.concat(s.getChildren(!0, e, i))).length))),
                (s = s._next);
            return n;
          }),
          (i.getTweensOf = function (t, e) {
            var i,
              r,
              n = this._gc,
              s = [],
              a = 0;
            for (
              n && this._enabled(!0, !0), r = (i = p.getTweensOf(t)).length;
              -1 < --r;

            )
              (i[r].timeline === this || (e && this._contains(i[r]))) &&
                (s[a++] = i[r]);
            return n && this._enabled(!1, !0), s;
          }),
          (i.recent = function () {
            return this._recent;
          }),
          (i._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (i.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var r, n = this._first, s = this._labels; n; )
              n._startTime >= i && (n._startTime += t), (n = n._next);
            if (e) for (r in s) s[r] >= i && (s[r] += t);
            return this._uncache(!0);
          }),
          (i._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                r = i.length,
                n = !1;
              -1 < --r;

            )
              i[r]._kill(t, e) && (n = !0);
            return n;
          }),
          (i.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (i.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return _.prototype.invalidate.call(this);
          }),
          (i._enabled = function (t, e) {
            if (t === this._gc)
              for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
            return f.prototype._enabled.call(this, t, e);
          }),
          (i.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var r = _.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), r;
          }),
          (i.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (i.totalDuration = function (t) {
            if (arguments.length)
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            if (this._dirty) {
              for (
                var e, i, r = 0, n = this, s = n._last, a = 999999999999;
                s;

              )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  s._startTime > a &&
                  n._sortChildren &&
                  !s._paused &&
                  !n._calculatingDuration
                    ? ((n._calculatingDuration = 1),
                      n.add(s, s._startTime - s._delay),
                      (n._calculatingDuration = 0))
                    : (a = s._startTime),
                  s._startTime < 0 &&
                    !s._paused &&
                    ((r -= s._startTime),
                    n._timeline.smoothChildTiming &&
                      ((n._startTime += s._startTime / n._timeScale),
                      (n._time -= s._startTime),
                      (n._totalTime -= s._startTime),
                      (n._rawPrevTime -= s._startTime)),
                    n.shiftChildren(-s._startTime, !1, -9999999999),
                    (a = 0)),
                  r < (i = s._startTime + s._totalDuration / s._timeScale) &&
                    (r = i),
                  (s = e);
              (n._duration = n._totalDuration = r), (n._dirty = !1);
            }
            return this._totalDuration;
          }),
          (i.paused = function (t) {
            if (!1 === t && this._paused)
              for (var e = this._first; e; )
                e._startTime === this._time &&
                  "isPause" === e.data &&
                  (e._rawPrevTime = 0),
                  (e = e._next);
            return _.prototype.paused.apply(this, arguments);
          }),
          (i.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline;
            return t === _._rootFramesTimeline;
          }),
          (i.rawTime = function (t) {
            return t &&
              (this._paused ||
                (this._repeat && 0 < this.time() && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (e, o, t) {
        function i(t) {
          e.call(this, t),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._cycle = 0),
            (this._yoyo = !!this.vars.yoyo),
            (this._dirty = !0);
        }
        var C = 1e-8,
          r = o._internals,
          R = r.lazyTweens,
          A = r.lazyRender,
          l = _gsScope._gsDefine.globals,
          h = new t(null, null, 1, 0),
          n = (i.prototype = new e());
        return (
          (n.constructor = i),
          (n.kill()._gc = !1),
          (i.version = "2.1.3"),
          (n.invalidate = function () {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              e.prototype.invalidate.call(this)
            );
          }),
          (n.addCallback = function (t, e, i, r) {
            return this.add(o.delayedCall(0, t, i, r), e);
          }),
          (n.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    r = i.length,
                    n = this._parseTimeOrLabel(e);
                  -1 < --r;

                )
                  i[r]._startTime === n && i[r]._enabled(!1, !1);
            return this;
          }),
          (n.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t);
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var i,
              r,
              n,
              s = {
                ease: h,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              a = (e.repeat && l.TweenMax) || o;
            for (r in e) s[r] = e[r];
            return (
              (s.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(s.time) - this._time) / this._timeScale ||
                0.001),
              (n = new a(this, i, s)),
              (s.onStart = function () {
                n.target.paused(!0),
                  n.vars.time === n.target.time() ||
                    i !== n.duration() ||
                    n.isFromTo ||
                    n
                      .duration(
                        Math.abs(n.vars.time - n.target.time()) /
                          n.target._timeScale
                      )
                      .render(n.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || n,
                      e.onStartParams || []
                    );
              }),
              n
            );
          }),
          (n.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var r = this.tweenTo(e, i);
            return (
              (r.isFromTo = 1),
              r.duration(Math.abs(r.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (n.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r,
              n,
              s,
              a,
              o,
              l,
              h,
              u,
              _,
              f = this,
              c = f._time,
              p = f._dirty ? f.totalDuration() : f._totalDuration,
              d = f._duration,
              m = f._totalTime,
              g = f._startTime,
              y = f._timeScale,
              v = f._rawPrevTime,
              x = f._paused,
              T = f._cycle;
            if ((c !== f._time && (t += f._time - c), p - C <= t && 0 <= t))
              f._locked || ((f._totalTime = p), (f._cycle = f._repeat)),
                f._reversed ||
                  f._hasPausedChild() ||
                  ((n = !0),
                  (a = "onComplete"),
                  (o = !!f._timeline.autoRemoveChildren),
                  0 === f._duration &&
                    ((t <= 0 && -C <= t) || v < 0 || v === C) &&
                    v !== t &&
                    f._first &&
                    ((o = !0), C < v && (a = "onReverseComplete"))),
                (f._rawPrevTime =
                  f._duration || !e || t || f._rawPrevTime === t ? t : C),
                f._yoyo && 1 & f._cycle
                  ? (f._time = t = 0)
                  : (t = (f._time = d) + 1e-4);
            else if (t < C)
              if (
                (f._locked || (f._totalTime = f._cycle = 0),
                (f._time = 0),
                -C < t && (t = 0),
                (0 !== c ||
                  (0 === d &&
                    v !== C &&
                    (0 < v || (t < 0 && 0 <= v)) &&
                    !f._locked)) &&
                  ((a = "onReverseComplete"), (n = f._reversed)),
                t < 0)
              )
                (f._active = !1),
                  f._timeline.autoRemoveChildren && f._reversed
                    ? ((o = n = !0), (a = "onReverseComplete"))
                    : 0 <= v && f._first && (o = !0),
                  (f._rawPrevTime = t);
              else {
                if (
                  ((f._rawPrevTime =
                    d || !e || t || f._rawPrevTime === t ? t : C),
                  0 === t && n)
                )
                  for (r = f._first; r && 0 === r._startTime; )
                    r._duration || (n = !1), (r = r._next);
                (t = 0), f._initted || (o = !0);
              }
            else
              0 === d && v < 0 && (o = !0),
                (f._time = f._rawPrevTime = t),
                f._locked ||
                  ((f._totalTime = t),
                  0 !== f._repeat &&
                    ((l = d + f._repeatDelay),
                    (f._cycle = (f._totalTime / l) >> 0),
                    f._cycle &&
                      f._cycle === f._totalTime / l &&
                      m <= t &&
                      f._cycle--,
                    (f._time = f._totalTime - f._cycle * l),
                    f._yoyo && 1 & f._cycle && (f._time = d - f._time),
                    f._time > d
                      ? (t = (f._time = d) + 1e-4)
                      : f._time < 0
                      ? (f._time = t = 0)
                      : (t = f._time)));
            if (f._hasPause && !f._forcingPlayhead && !e) {
              if (c < (t = f._time) || (f._repeat && T !== f._cycle))
                for (r = f._first; r && r._startTime <= t && !h; )
                  r._duration ||
                    "isPause" !== r.data ||
                    r.ratio ||
                    (0 === r._startTime && 0 === f._rawPrevTime) ||
                    (h = r),
                    (r = r._next);
              else
                for (r = f._last; r && r._startTime >= t && !h; )
                  r._duration ||
                    ("isPause" === r.data && 0 < r._rawPrevTime && (h = r)),
                    (r = r._prev);
              h &&
                ((_ =
                  f._startTime +
                  (f._reversed ? f._duration - h._startTime : h._startTime) /
                    f._timeScale),
                h._startTime < d &&
                  ((f._time = f._rawPrevTime = t = h._startTime),
                  (f._totalTime =
                    t + f._cycle * (f._totalDuration + f._repeatDelay))));
            }
            if (f._cycle !== T && !f._locked) {
              var w = f._yoyo && 0 != (1 & T),
                b = w === (f._yoyo && 0 != (1 & f._cycle)),
                P = f._totalTime,
                S = f._cycle,
                O = f._rawPrevTime,
                k = f._time;
              if (
                ((f._totalTime = T * d),
                f._cycle < T ? (w = !w) : (f._totalTime += d),
                (f._time = c),
                (f._rawPrevTime = 0 === d ? v - 1e-4 : v),
                (f._cycle = T),
                (f._locked = !0),
                (c = w ? 0 : d),
                f.render(c, e, 0 === d),
                e ||
                  f._gc ||
                  (f.vars.onRepeat &&
                    ((f._cycle = S),
                    (f._locked = !1),
                    f._callback("onRepeat"))),
                c !== f._time)
              )
                return;
              if (
                (b &&
                  ((f._cycle = T),
                  (f._locked = !0),
                  (c = w ? d + 1e-4 : -1e-4),
                  f.render(c, !0, !1)),
                (f._locked = !1),
                f._paused && !x)
              )
                return;
              (f._time = k),
                (f._totalTime = P),
                (f._cycle = S),
                (f._rawPrevTime = O);
            }
            if ((f._time !== c && f._first) || i || o || h) {
              if (
                (f._initted || (f._initted = !0),
                f._active ||
                  (!f._paused &&
                    f._totalTime !== m &&
                    0 < t &&
                    (f._active = !0)),
                0 === m &&
                  f.vars.onStart &&
                  ((0 === f._totalTime && f._totalDuration) ||
                    e ||
                    f._callback("onStart")),
                c <= (u = f._time))
              )
                for (
                  r = f._first;
                  r && ((s = r._next), u === f._time && (!f._paused || x));

                )
                  (r._active ||
                    (r._startTime <= f._time && !r._paused && !r._gc)) &&
                    (h === r && (f.pause(), (f._pauseTime = _)),
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i)),
                    (r = s);
              else
                for (
                  r = f._last;
                  r && ((s = r._prev), u === f._time && (!f._paused || x));

                ) {
                  if (
                    r._active ||
                    (r._startTime <= c && !r._paused && !r._gc)
                  ) {
                    if (h === r) {
                      for (h = r._prev; h && h.endTime() > f._time; )
                        h.render(
                          h._reversed
                            ? h.totalDuration() -
                                (t - h._startTime) * h._timeScale
                            : (t - h._startTime) * h._timeScale,
                          e,
                          i
                        ),
                          (h = h._prev);
                      (h = null), f.pause(), (f._pauseTime = _);
                    }
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i);
                  }
                  r = s;
                }
              f._onUpdate && (e || (R.length && A(), f._callback("onUpdate"))),
                a &&
                  (f._locked ||
                    f._gc ||
                    (g !== f._startTime && y === f._timeScale) ||
                    !(0 === f._time || p >= f.totalDuration()) ||
                    (n &&
                      (R.length && A(),
                      f._timeline.autoRemoveChildren && f._enabled(!1, !1),
                      (f._active = !1)),
                    !e && f.vars[a] && f._callback(a)));
            } else
              m !== f._totalTime &&
                f._onUpdate &&
                (e || f._callback("onUpdate"));
          }),
          (n.getActive = function (t, e, i) {
            var r,
              n,
              s = [],
              a = this.getChildren(t || null == t, e || null == t, !!i),
              o = 0,
              l = a.length;
            for (r = 0; r < l; r++) (n = a[r]).isActive() && (s[o++] = n);
            return s;
          }),
          (n.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              r = i.length;
            for (e = 0; e < r; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (n.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (n.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (n.invalidate = function () {
            return (this._locked = !1), e.prototype.invalidate.call(this);
          }),
          (n.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (n.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (n.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (e.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (n.time = function (t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
              r = this._cycle,
              n = r * (i + this._repeatDelay);
            return (
              i < t && (t = i),
              this.totalTime(
                this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t,
                e
              )
            );
          }),
          (n.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (n.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (n.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + C);
          }),
          i
        );
      },
      !0
    ),
    (P = 180 / Math.PI),
    (T = []),
    (w = []),
    (b = []),
    (g = {}),
    (i = _gsScope._gsDefine.globals),
    (m = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.9",
      API: 2,
      global: !0,
      init: function (t, e, i) {
        (this._target = t),
          e instanceof Array && (e = { values: e }),
          (this._func = {}),
          (this._mod = {}),
          (this._props = []),
          (this._timeRes =
            null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
        var r,
          n,
          s,
          a,
          o,
          l = e.values || [],
          h = {},
          u = l[0],
          _ = e.autoRotate || i.vars.orientToBezier;
        for (r in ((this._autoRotate = _
          ? _ instanceof Array
            ? _
            : [["x", "y", "rotation", !0 === _ ? 0 : Number(_) || 0]]
          : null),
        u))
          this._props.push(r);
        for (s = this._props.length; -1 < --s; )
          (r = this._props[s]),
            this._overwriteProps.push(r),
            (n = this._func[r] = "function" == typeof t[r]),
            (h[r] = n
              ? t[
                  r.indexOf("set") ||
                  "function" != typeof t["get" + r.substr(3)]
                    ? r
                    : "get" + r.substr(3)
                ]()
              : parseFloat(t[r])),
            o || (h[r] !== l[0][r] && (o = h));
        if (
          ((this._beziers =
            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
              ? c(
                  l,
                  isNaN(e.curviness) ? 1 : e.curviness,
                  !1,
                  "thruBasic" === e.type,
                  e.correlate,
                  o
                )
              : (function (t, e, i) {
                  var r,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    _,
                    f,
                    c,
                    p = {},
                    d = "cubic" === (e = e || "soft") ? 3 : 2,
                    m = "soft" === e,
                    g = [];
                  if (
                    (m && i && (t = [i].concat(t)),
                    null == t || t.length < 1 + d)
                  )
                    throw "invalid Bezier data";
                  for (_ in t[0]) g.push(_);
                  for (l = g.length; -1 < --l; ) {
                    for (
                      p[(_ = g[l])] = o = [], f = 0, u = t.length, h = 0;
                      h < u;
                      h++
                    )
                      (r =
                        null == i
                          ? t[h][_]
                          : "string" == typeof (c = t[h][_]) &&
                            "=" === c.charAt(1)
                          ? i[_] + Number(c.charAt(0) + c.substr(2))
                          : Number(c)),
                        m &&
                          1 < h &&
                          h < u - 1 &&
                          (o[f++] = (r + o[f - 2]) / 2),
                        (o[f++] = r);
                    for (u = f - d + 1, h = f = 0; h < u; h += d)
                      (r = o[h]),
                        (n = o[h + 1]),
                        (s = o[h + 2]),
                        (a = 2 == d ? 0 : o[h + 3]),
                        (o[f++] = c =
                          3 == d
                            ? new y(r, n, s, a)
                            : new y(r, (2 * n + r) / 3, (2 * n + s) / 3, s));
                    o.length = f;
                  }
                  return p;
                })(l, e.type, h)),
          (this._segCount = this._beziers[r].length),
          this._timeRes)
        ) {
          var f = (function (t, e) {
            var i,
              r,
              n,
              s,
              a = [],
              o = [],
              l = 0,
              h = 0,
              u = (e = e >> 0 || 6) - 1,
              _ = [],
              f = [];
            for (i in t) p(t[i], a, e);
            for (n = a.length, r = 0; r < n; r++)
              (l += Math.sqrt(a[r])),
                (f[(s = r % e)] = l),
                s === u &&
                  ((h += l),
                  (_[(s = (r / e) >> 0)] = f),
                  (o[s] = h),
                  (l = 0),
                  (f = []));
            return { length: h, lengths: o, segments: _ };
          })(this._beziers, this._timeRes);
          (this._length = f.length),
            (this._lengths = f.lengths),
            (this._segments = f.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length);
        }
        if ((_ = this._autoRotate))
          for (
            this._initialRotations = [],
              _[0] instanceof Array || (this._autoRotate = _ = [_]),
              s = _.length;
            -1 < --s;

          ) {
            for (a = 0; a < 3; a++)
              (r = _[s][a]),
                (this._func[r] =
                  "function" == typeof t[r] &&
                  t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]);
            (r = _[s][2]),
              (this._initialRotations[s] =
                (this._func[r]
                  ? this._func[r].call(this._target)
                  : this._target[r]) || 0),
              this._overwriteProps.push(r);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (t) {
        var e,
          i,
          r,
          n,
          s,
          a,
          o,
          l,
          h,
          u,
          _,
          f = this._segCount,
          c = this._func,
          p = this._target,
          d = t !== this._startRatio;
        if (this._timeRes) {
          if (
            ((h = this._lengths),
            (u = this._curSeg),
            (_ = t * this._length),
            (r = this._li),
            _ > this._l2 && r < f - 1)
          ) {
            for (l = f - 1; r < l && (this._l2 = h[++r]) <= _; );
            (this._l1 = h[r - 1]),
              (this._li = r),
              (this._curSeg = u = this._segments[r]),
              (this._s2 = u[(this._s1 = this._si = 0)]);
          } else if (_ < this._l1 && 0 < r) {
            for (; 0 < r && (this._l1 = h[--r]) >= _; );
            0 === r && _ < this._l1 ? (this._l1 = 0) : r++,
              (this._l2 = h[r]),
              (this._li = r),
              (this._curSeg = u = this._segments[r]),
              (this._s1 = u[(this._si = u.length - 1) - 1] || 0),
              (this._s2 = u[this._si]);
          }
          if (
            ((e = r),
            (_ -= this._l1),
            (r = this._si),
            _ > this._s2 && r < u.length - 1)
          ) {
            for (l = u.length - 1; r < l && (this._s2 = u[++r]) <= _; );
            (this._s1 = u[r - 1]), (this._si = r);
          } else if (_ < this._s1 && 0 < r) {
            for (; 0 < r && (this._s1 = u[--r]) >= _; );
            0 === r && _ < this._s1 ? (this._s1 = 0) : r++,
              (this._s2 = u[r]),
              (this._si = r);
          }
          a =
            1 === t
              ? 1
              : (r + (_ - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else
          a =
            (t - (e = t < 0 ? 0 : 1 <= t ? f - 1 : (f * t) >> 0) * (1 / f)) * f;
        for (i = 1 - a, r = this._props.length; -1 < --r; )
          (n = this._props[r]),
            (o =
              (a * a * (s = this._beziers[n][e]).da +
                3 * i * (a * s.ca + i * s.ba)) *
                a +
              s.a),
            this._mod[n] && (o = this._mod[n](o, p)),
            c[n] ? p[n](o) : (p[n] = o);
        if (this._autoRotate) {
          var m,
            g,
            y,
            v,
            x,
            T,
            w,
            b = this._autoRotate;
          for (r = b.length; -1 < --r; )
            (n = b[r][2]),
              (T = b[r][3] || 0),
              (w = !0 === b[r][4] ? 1 : P),
              (s = this._beziers[b[r][0]]),
              (m = this._beziers[b[r][1]]),
              s &&
                m &&
                ((s = s[e]),
                (m = m[e]),
                (g = s.a + (s.b - s.a) * a),
                (g += ((v = s.b + (s.c - s.b) * a) - g) * a),
                (v += (s.c + (s.d - s.c) * a - v) * a),
                (y = m.a + (m.b - m.a) * a),
                (y += ((x = m.b + (m.c - m.b) * a) - y) * a),
                (x += (m.c + (m.d - m.c) * a - x) * a),
                (o = d
                  ? Math.atan2(x - y, v - g) * w + T
                  : this._initialRotations[r]),
                this._mod[n] && (o = this._mod[n](o, p)),
                c[n] ? p[n](o) : (p[n] = o));
        }
      },
    })),
    (r = m.prototype),
    (m.bezierThrough = c),
    (m.cubicToQuadratic = S),
    (m._autoCSS = !0),
    (m.quadraticToCubic = function (t, e, i) {
      return new y(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }),
    (m._cssRegister = function () {
      var t = i.CSSPlugin;
      if (t) {
        var e = t._internals,
          c = e._parseToProxy,
          p = e._setPluginRatio,
          d = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser: function (t, e, i, r, n, s) {
            e instanceof Array && (e = { values: e }), (s = new m());
            var a,
              o,
              l,
              h = e.values,
              u = h.length - 1,
              _ = [],
              f = {};
            if (u < 0) return n;
            for (a = 0; a <= u; a++)
              (l = c(t, h[a], r, n, s, u !== a)), (_[a] = l.end);
            for (o in e) f[o] = e[o];
            return (
              (f.values = _),
              ((n = new d(t, "bezier", 0, 0, l.pt, 2)).data = l),
              (n.plugin = s),
              (n.setRatio = p),
              0 === f.autoRotate && (f.autoRotate = !0),
              !f.autoRotate ||
                f.autoRotate instanceof Array ||
                ((a = !0 === f.autoRotate ? 0 : Number(f.autoRotate)),
                (f.autoRotate =
                  null != l.end.left
                    ? [["left", "top", "rotation", a, !1]]
                    : null != l.end.x && [["x", "y", "rotation", a, !1]])),
              f.autoRotate &&
                (r._transform || r._enableTransforms(!1),
                (l.autoRotate = r._target._gsTransform),
                (l.proxy.rotation = l.autoRotate.rotation || 0),
                r._overwriteProps.push("rotation")),
              s._onInitTween(l.proxy, f, r._tween),
              n
            );
          },
        });
      }
    }),
    (r._mod = function (t) {
      for (var e, i = this._overwriteProps, r = i.length; -1 < --r; )
        (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e);
    }),
    (r._kill = function (t) {
      var e,
        i,
        r = this._props;
      for (e in this._beziers)
        if (e in t)
          for (
            delete this._beziers[e], delete this._func[e], i = r.length;
            -1 < --i;

          )
            r[i] === e && r.splice(i, 1);
      if ((r = this._autoRotate))
        for (i = r.length; -1 < --i; ) t[r[i][2]] && r.splice(i, 1);
      return this._super._kill.call(this, t);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (s, X) {
        var p,
          P,
          S,
          d,
          B = function () {
            s.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = B.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          m = {},
          t = (B.prototype = new s("css"));
        ((t.constructor = B).version = "2.1.3"),
          (B.API = 2),
          (B.defaultTransformPerspective = 0),
          (B.defaultSkewType = "compensated"),
          (B.defaultSmoothOrigin = !0),
          (t = "px"),
          (B.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: "",
          });
        function a(t, e) {
          return e.toUpperCase();
        }
        function o(t, e) {
          var i = it.createElementNS
            ? it.createElementNS(
                e ||
                  "h" +
                    "t" +
                    "t" +
                    "p" +
                    ":" +
                    "/" +
                    "/" +
                    "www.w3.org/1999/xhtml",
                t
              )
            : it.createElement(t);
          return i.style ? i : it.createElement(t);
        }
        function l(t) {
          return j.test(
            "string" == typeof t
              ? t
              : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        }
        function g(t) {
          _gsScope.console && console.log(t);
        }
        function O(t, e) {
          var i,
            r,
            n = (e = e || rt).style;
          if (void 0 !== n[t]) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1),
              i = ["O", "Moz", "ms", "Ms", "Webkit"],
              r = 5;
            -1 < --r && void 0 === n[i[r] + t];

          );
          return 0 <= r
            ? ((lt = "-" + (ht = 3 === r ? "ms" : i[r]).toLowerCase() + "-"),
              ht + t)
            : null;
        }
        function y(t) {
          return ut.getComputedStyle(t);
        }
        function v(t, e) {
          var i,
            r,
            n,
            s = {};
          if ((e = e || y(t)))
            if ((i = e.length))
              for (; -1 < --i; )
                (-1 !== (n = e[i]).indexOf("-transform") && Xt !== n) ||
                  (s[n.replace(V, a)] = e.getPropertyValue(n));
            else
              for (i in e)
                (-1 !== i.indexOf("Transform") && jt !== i) || (s[i] = e[i]);
          else if ((e = t.currentStyle || t.style))
            for (i in e)
              "string" == typeof i &&
                void 0 === s[i] &&
                (s[i.replace(V, a)] = e[i]);
          return (
            ot || (s.opacity = l(t)),
            (r = $t(t, e, !1)),
            (s.rotation = r.rotation),
            (s.skewX = r.skewX),
            (s.scaleX = r.scaleX),
            (s.scaleY = r.scaleY),
            (s.x = r.x),
            (s.y = r.y),
            Yt &&
              ((s.z = r.z),
              (s.rotationX = r.rotationX),
              (s.rotationY = r.rotationY),
              (s.scaleZ = r.scaleZ)),
            s.filters && delete s.filters,
            s
          );
        }
        function x(t, e, i, r, n) {
          var s,
            a,
            o,
            l = {},
            h = t.style;
          for (a in i)
            "cssText" !== a &&
              "length" !== a &&
              isNaN(a) &&
              (e[a] !== (s = i[a]) || (n && n[a])) &&
              -1 === a.indexOf("Origin") &&
              ("number" == typeof s || "string" == typeof s) &&
              ((l[a] =
                "auto" !== s || ("left" !== a && "top" !== a)
                  ? ("" !== s && "auto" !== s && "none" !== s) ||
                    "string" != typeof e[a] ||
                    "" === e[a].replace(u, "")
                    ? s
                    : 0
                  : ct(t, a)),
              void 0 !== h[a] && (o = new bt(h, a, h[a], o)));
          if (r) for (a in r) "className" !== a && (l[a] = r[a]);
          return { difs: l, firstMPT: o };
        }
        function T(t, e, i) {
          if ("svg" === (t.nodeName + "").toLowerCase())
            return (i || y(t))[e] || 0;
          if (t.getCTM && Qt(t)) return t.getBBox()[e] || 0;
          var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
            n = pt[e],
            s = n.length;
          for (i = i || y(t); -1 < --s; )
            (r -= parseFloat(_t(t, "padding" + n[s], i, !0)) || 0),
              (r -= parseFloat(_t(t, "border" + n[s] + "Width", i, !0)) || 0);
          return r;
        }
        function k(t, e) {
          return (
            "function" == typeof t && (t = t(L, F)),
            "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
              : parseFloat(t) - parseFloat(e) || 0
          );
        }
        function C(t, e) {
          "function" == typeof t && (t = t(L, F));
          var i = "string" == typeof t && "=" === t.charAt(1);
          return (
            "string" == typeof t &&
              "v" === t.charAt(t.length - 2) &&
              (t =
                (i ? t.substr(0, 2) : 0) +
                window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] *
                  (parseFloat(i ? t.substr(2) : t) / 100)),
            null == t
              ? e
              : i
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
              : parseFloat(t) || 0
          );
        }
        function R(t, e, i, r) {
          var n, s, a, o, l;
          return (
            "function" == typeof t && (t = t(L, F)),
            (o =
              null == t
                ? e
                : "number" == typeof t
                ? t
                : ((n = 360),
                  (s = t.split("_")),
                  (a =
                    ((l = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(s[0].substr(2))
                      : parseFloat(s[0])) *
                      (-1 === t.indexOf("rad") ? 1 : J) -
                    (l ? 0 : e)),
                  s.length &&
                    (r && (r[i] = e + a),
                    -1 !== t.indexOf("short") &&
                      (a %= n) !== a % 180 &&
                      (a = a < 0 ? a + n : a - n),
                    -1 !== t.indexOf("_cw") && a < 0
                      ? (a = ((a + 3599999999640) % n) - ((a / n) | 0) * n)
                      : -1 !== t.indexOf("ccw") &&
                        0 < a &&
                        (a = ((a - 3599999999640) % n) - ((a / n) | 0) * n)),
                  e + a)) < 1e-6 &&
              -1e-6 < o &&
              (o = 0),
            o
          );
        }
        function c(t, e, i) {
          return (
            (255 *
              (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        }
        function r(t, e) {
          var i,
            r,
            n,
            s = t.match(vt) || [],
            a = 0,
            o = "";
          if (!s.length) return t;
          for (i = 0; i < s.length; i++)
            (r = s[i]),
              (a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length),
              3 === (r = yt(r, e)).length && r.push(1),
              (o +=
                n +
                (e
                  ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3]
                  : "rgba(" + r.join(",")) +
                ")");
          return o + t.substr(a);
        }
        var A,
          w,
          b,
          Y,
          M,
          D,
          F,
          L,
          e,
          i,
          z = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          E = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          I = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          n = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
          u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          N = /(?:\d|\-|\+|=|#|\.)*/g,
          j = /opacity *= *([^)]*)/i,
          G = /opacity:([^;]*)/i,
          _ = /alpha\(opacity *=.+?\)/i,
          U = /^(rgb|hsl)/,
          f = /([A-Z])/g,
          V = /-([a-z])/gi,
          q = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          W = /(?:Left|Right|Width)/i,
          Q = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          Z = /,(?=[^\)]*(?:\(|$))/gi,
          $ = /[\s,\(]/i,
          K = Math.PI / 180,
          J = 180 / Math.PI,
          tt = {},
          et = { style: {} },
          it = _gsScope.document || {
            createElement: function () {
              return et;
            },
          },
          rt = o("div"),
          nt = o("img"),
          st = (B._internals = { _specialProps: m }),
          at = (_gsScope.navigator || {}).userAgent || "",
          ot =
            ((e = at.indexOf("Android")),
            (i = o("a")),
            (b =
              -1 !== at.indexOf("Safari") &&
              -1 === at.indexOf("Chrome") &&
              (-1 === e || 3 < parseFloat(at.substr(e + 8, 2)))),
            (M = b && parseFloat(at.substr(at.indexOf("Version/") + 8, 2)) < 6),
            (Y = -1 !== at.indexOf("Firefox")),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(at) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(at)) &&
              (D = parseFloat(RegExp.$1)),
            !!i &&
              ((i.style.cssText = "top:1px;opacity:.55;"),
              /^0.55/.test(i.style.opacity))),
          lt = "",
          ht = "",
          ut =
            "undefined" != typeof window
              ? window
              : it.defaultView || { getComputedStyle: function () {} },
          _t = (B.getStyle = function (t, e, i, r, n) {
            var s;
            return ot || "opacity" !== e
              ? (!r && t.style[e]
                  ? (s = t.style[e])
                  : (i = i || y(t))
                  ? (s =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(f, "-$1").toLowerCase()))
                  : t.currentStyle && (s = t.currentStyle[e]),
                null == n ||
                (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                  ? s
                  : n)
              : l(t);
          }),
          ft = (st.convertToPixels = function (t, e, i, r, n) {
            if ("px" === r || (!r && "lineHeight" !== e)) return i;
            if ("auto" === r || !i) return 0;
            var s,
              a,
              o,
              l = W.test(e),
              h = t,
              u = rt.style,
              _ = i < 0,
              f = 1 === i;
            if ((_ && (i = -i), f && (i *= 100), "lineHeight" !== e || r))
              if ("%" === r && -1 !== e.indexOf("border"))
                s = (i / 100) * (l ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((u.cssText =
                    "border:0 solid red;position:" +
                    _t(t, "position") +
                    ";line-height:0;"),
                  "%" !== r &&
                    h.appendChild &&
                    "v" !== r.charAt(0) &&
                    "rem" !== r)
                )
                  u[l ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                else {
                  if (
                    ((h = t.parentNode || it.body),
                    -1 !== _t(h, "display").indexOf("flex") &&
                      (u.position = "absolute"),
                    (a = h._gsCache),
                    (o = X.ticker.frame),
                    a && l && a.time === o)
                  )
                    return (a.width * i) / 100;
                  u[l ? "width" : "height"] = i + r;
                }
                h.appendChild(rt),
                  (s = parseFloat(rt[l ? "offsetWidth" : "offsetHeight"])),
                  h.removeChild(rt),
                  l &&
                    "%" === r &&
                    !1 !== B.cacheWidths &&
                    (((a = h._gsCache = h._gsCache || {}).time = o),
                    (a.width = (s / i) * 100)),
                  0 !== s || n || (s = ft(t, e, i, r, !0));
              }
            else
              (a = y(t).lineHeight),
                (t.style.lineHeight = i),
                (s = parseFloat(y(t).lineHeight)),
                (t.style.lineHeight = a);
            return f && (s /= 100), _ ? -s : s;
          }),
          ct = (st.calculateOffset = function (t, e, i) {
            if ("absolute" !== _t(t, "position", i)) return 0;
            var r = "left" === e ? "Left" : "Top",
              n = _t(t, "margin" + r, i);
            return (
              t["offset" + r] - (ft(t, e, parseFloat(n), n.replace(N, "")) || 0)
            );
          }),
          pt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          dt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          mt = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              r = t.split(" "),
              n =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : r[0],
              s =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : r[1];
            if (3 < r.length && !e) {
              for (
                r = t.split(", ").join(",").split(","), t = [], i = 0;
                i < r.length;
                i++
              )
                t.push(mt(r[i]));
              return t.join(",");
            }
            return (
              null == s
                ? (s = "center" === n ? "50%" : "0")
                : "center" === s && (s = "50%"),
              ("center" === n ||
                (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) &&
                (n = "50%"),
              (t = n + " " + s + (2 < r.length ? " " + r[2] : "")),
              e &&
                ((e.oxp = -1 !== n.indexOf("%")),
                (e.oyp = -1 !== s.indexOf("%")),
                (e.oxr = "=" === n.charAt(1)),
                (e.oyr = "=" === s.charAt(1)),
                (e.ox = parseFloat(n.replace(u, ""))),
                (e.oy = parseFloat(s.replace(u, ""))),
                (e.v = t)),
              e || t
            );
          },
          gt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          yt = (B.parseColor = function (t, e) {
            var i, r, n, s, a, o, l, h, u, _, f;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  gt[t])
                )
                  i = gt[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (r = t.charAt(1)) +
                      r +
                      (n = t.charAt(2)) +
                      n +
                      (s = t.charAt(3)) +
                      s),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = f = t.match(z)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(E);
                  } else
                    (a = (Number(i[0]) % 360) / 360),
                      (o = Number(i[1]) / 100),
                      (r =
                        2 * (l = Number(i[2]) / 100) -
                        (n = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                      3 < i.length && (i[3] = Number(i[3])),
                      (i[0] = c(a + 1 / 3, r, n)),
                      (i[1] = c(a, r, n)),
                      (i[2] = c(a - 1 / 3, r, n));
                else i = t.match(z) || gt.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  3 < i.length && (i[3] = Number(i[3]));
              }
            else i = gt.black;
            return (
              e &&
                !f &&
                ((r = i[0] / 255),
                (n = i[1] / 255),
                (s = i[2] / 255),
                (l = ((h = Math.max(r, n, s)) + (u = Math.min(r, n, s))) / 2),
                h === u
                  ? (a = o = 0)
                  : ((_ = h - u),
                    (o = 0.5 < l ? _ / (2 - h - u) : _ / (h + u)),
                    (a =
                      h === r
                        ? (n - s) / _ + (n < s ? 6 : 0)
                        : h === n
                        ? (s - r) / _ + 2
                        : (r - n) / _ + 4),
                    (a *= 60)),
                (i[0] = (a + 0.5) | 0),
                (i[1] = (100 * o + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          vt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in gt) vt += "|" + t + "\\b";
        (vt = new RegExp(vt + ")", "gi")),
          (B.colorStringFilter = function (t) {
            var e,
              i = t[0] + " " + t[1];
            vt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = r(t[0], e)),
              (t[1] = r(t[1], e))),
              (vt.lastIndex = 0);
          }),
          X.defaultStringFilter ||
            (X.defaultStringFilter = B.colorStringFilter);
        function xt(t, e, s, a) {
          if (null == t)
            return function (t) {
              return t;
            };
          var o,
            l = e ? (t.match(vt) || [""])[0] : "",
            h = t.split(l).join("").match(I) || [],
            u = t.substr(0, t.indexOf(h[0])),
            _ = ")" === t.charAt(t.length - 1) ? ")" : "",
            f = -1 !== t.indexOf(" ") ? " " : ",",
            c = h.length,
            p = 0 < c ? h[0].replace(z, "") : "";
          return c
            ? (o = e
                ? function (t) {
                    var e, i, r, n;
                    if ("number" == typeof t) t += p;
                    else if (a && Z.test(t)) {
                      for (
                        n = t.replace(Z, "|").split("|"), r = 0;
                        r < n.length;
                        r++
                      )
                        n[r] = o(n[r]);
                      return n.join(",");
                    }
                    if (
                      ((e = (t.match(vt) || [l])[0]),
                      (r = (i = t.split(e).join("").match(I) || []).length),
                      c > r--)
                    )
                      for (; ++r < c; ) i[r] = s ? i[((r - 1) / 2) | 0] : h[r];
                    return (
                      u +
                      i.join(f) +
                      f +
                      e +
                      _ +
                      (-1 !== t.indexOf("inset") ? " inset" : "")
                    );
                  }
                : function (t) {
                    var e, i, r;
                    if ("number" == typeof t) t += p;
                    else if (a && Z.test(t)) {
                      for (
                        i = t.replace(Z, "|").split("|"), r = 0;
                        r < i.length;
                        r++
                      )
                        i[r] = o(i[r]);
                      return i.join(",");
                    }
                    if (
                      ((r = (e = t.match("," == f ? I : n) || []).length),
                      c > r--)
                    )
                      for (; ++r < c; ) e[r] = s ? e[((r - 1) / 2) | 0] : h[r];
                    return (
                      ((u && "none" !== t && t.substr(0, t.indexOf(e[0]))) ||
                        u) +
                      e.join(f) +
                      _
                    );
                  })
            : function (t) {
                return t;
              };
        }
        function Tt(h) {
          return (
            (h = h.split(",")),
            function (t, e, i, r, n, s, a) {
              var o,
                l = (e + "").split(" ");
              for (a = {}, o = 0; o < 4; o++)
                a[h[o]] = l[o] = l[o] || l[((o - 1) / 2) >> 0];
              return r.parse(t, a, n, s);
            }
          );
        }
        function wt(t, e, i, r, n, s) {
          var a = new Pt(t, e, i, r - i, n, -1, s);
          return (a.b = i), (a.e = a.xs0 = r), a;
        }
        var bt =
            ((st._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT;
                l;

              )
                (e = o[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (a.autoRotate &&
                  (a.autoRotate.rotation = a.mod
                    ? a.mod.call(this._tween, o.rotation, this.t, this._tween)
                    : o.rotation),
                1 === t || 0 === t)
              )
                for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++)
                        n += i["xn" + r] + i["xs" + (r + 1)];
                      i[s] = n;
                    }
                  } else i[s] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, r, n) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = n),
                r && ((r._prev = this)._next = r);
            }),
          Pt =
            ((st._parseToProxy = function (t, e, i, r, n, s) {
              var a,
                o,
                l,
                h,
                u,
                _ = r,
                f = {},
                c = {},
                p = i._transform,
                d = tt;
              for (
                i._transform = null,
                  tt = e,
                  r = u = i.parse(t, e, r, n),
                  tt = d,
                  s &&
                    ((i._transform = p),
                    _ && ((_._prev = null), _._prev && (_._prev._next = null)));
                r && r !== _;

              ) {
                if (
                  r.type <= 1 &&
                  ((c[(o = r.p)] = r.s + r.c),
                  (f[o] = r.s),
                  s || ((h = new bt(r, "s", o, h, r.r)), (r.c = 0)),
                  1 === r.type)
                )
                  for (a = r.l; 0 < --a; )
                    (l = "xn" + a),
                      (c[(o = r.p + "_" + l)] = r.data[l]),
                      (f[o] = r[l]),
                      s || (h = new bt(r, l, o, h, r.rxp[l]));
                r = r._next;
              }
              return { proxy: f, end: c, firstMPT: h, pt: u };
            }),
            (st.CSSPropTween = function (t, e, i, r, n, s, a, o, l, h, u) {
              (this.t = t),
                (this.p = e),
                (this.s = i),
                (this.c = r),
                (this.n = a || e),
                t instanceof Pt || d.push(this.n),
                (this.r = o ? ("function" == typeof o ? o : Math.round) : o),
                (this.type = s || 0),
                l && ((this.pr = l), (p = !0)),
                (this.b = void 0 === h ? i : h),
                (this.e = void 0 === u ? i + r : u),
                n && ((this._next = n)._prev = this);
            })),
          St = (B.parseComplex = function (t, e, i, r, n, s, a, o, l, h) {
            (i = i || s || ""),
              "function" == typeof r && (r = r(L, F)),
              (a = new Pt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r)),
              (r += ""),
              n &&
                vt.test(r + i) &&
                ((r = [i, r]), B.colorStringFilter(r), (i = r[0]), (r = r[1]));
            var u,
              _,
              f,
              c,
              p,
              d,
              m,
              g,
              y,
              v,
              x,
              T,
              w,
              b = i.split(", ").join(",").split(" "),
              P = r.split(", ").join(",").split(" "),
              S = b.length,
              O = !1 !== A;
            for (
              (-1 === r.indexOf(",") && -1 === i.indexOf(",")) ||
                ((P =
                  -1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl")
                    ? ((b = b.join(" ").replace(Z, ", ").split(" ")),
                      P.join(" ").replace(Z, ", ").split(" "))
                    : ((b = b.join(" ").split(",").join(", ").split(" ")),
                      P.join(" ").split(",").join(", ").split(" "))),
                (S = b.length)),
                S !== P.length && (S = (b = (s || "").split(" ")).length),
                a.plugin = l,
                a.setRatio = h,
                u = vt.lastIndex = 0;
              u < S;
              u++
            )
              if (((c = b[u]), (p = P[u] + ""), (g = parseFloat(c)) || 0 === g))
                a.appendXtra(
                  "",
                  g,
                  k(p, g),
                  p.replace(E, ""),
                  O && -1 !== p.indexOf("px") && Math.round,
                  !0
                );
              else if (n && vt.test(c))
                (T = ")" + ((T = p.indexOf(")") + 1) ? p.substr(T) : "")),
                  (w = -1 !== p.indexOf("hsl") && ot),
                  (v = p),
                  (c = yt(c, w)),
                  (p = yt(p, w)),
                  (y = 6 < c.length + p.length) && !ot && 0 === p[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(P[u]).join("transparent")))
                    : (ot || (y = !1),
                      w
                        ? a
                            .appendXtra(
                              v.substr(0, v.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              c[0],
                              k(p[0], c[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", c[1], k(p[1], c[1]), "%,", !1)
                            .appendXtra(
                              "",
                              c[2],
                              k(p[2], c[2]),
                              y ? "%," : "%" + T,
                              !1
                            )
                        : a
                            .appendXtra(
                              v.substr(0, v.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              c[0],
                              p[0] - c[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", c[1], p[1] - c[1], ",", Math.round)
                            .appendXtra(
                              "",
                              c[2],
                              p[2] - c[2],
                              y ? "," : T,
                              Math.round
                            ),
                      y &&
                        ((c = c.length < 4 ? 1 : c[3]),
                        a.appendXtra(
                          "",
                          c,
                          (p.length < 4 ? 1 : p[3]) - c,
                          T,
                          !1
                        ))),
                  (vt.lastIndex = 0);
              else if ((d = c.match(z))) {
                if (!(m = p.match(E)) || m.length !== d.length) return a;
                for (_ = f = 0; _ < d.length; _++)
                  (x = d[_]),
                    (v = c.indexOf(x, f)),
                    a.appendXtra(
                      c.substr(f, v - f),
                      Number(x),
                      k(m[_], x),
                      "",
                      O && "px" === c.substr(v + x.length, 2) && Math.round,
                      0 === _
                    ),
                    (f = v + x.length);
                a["xs" + a.l] += c.substr(f);
              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + p : p;
            if (-1 !== r.indexOf("=") && a.data) {
              for (T = a.xs0 + a.data.s, u = 1; u < a.l; u++)
                T += a["xs" + u] + a.data["xn" + u];
              a.e = T + a["xs" + u];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          Ot = 9;
        for ((t = Pt.prototype).l = t.pr = 0; 0 < --Ot; )
          (t["xn" + Ot] = 0), (t["xs" + Ot] = "");
        (t.xs0 = ""),
          (t._next =
            t._prev =
            t.xfirst =
            t.data =
            t.plugin =
            t.setRatio =
            t.rxp =
              null),
          (t.appendXtra = function (t, e, i, r, n, s) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = r || ""),
                  0 < o
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = n),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new Pt(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          n,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)))
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = n)))
                : (a["xs" + o] += e + (r || "")),
              a
            );
          });
        function kt(t, e) {
          (e = e || {}),
            (this.p = (e.prefix && O(t)) || t),
            (m[t] = m[this.p] = this),
            (this.format =
              e.formatter ||
              xt(e.defaultValue, e.color, e.collapsible, e.multi)),
            e.parser && (this.parse = e.parser),
            (this.clrs = e.color),
            (this.multi = e.multi),
            (this.keyword = e.keyword),
            (this.dflt = e.defaultValue),
            (this.allowFunc = e.allowFunc),
            (this.pr = e.priority || 0);
        }
        var Ct = (st._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var r,
              n = t.split(","),
              s = e.defaultValue;
            for (i = i || [s], r = 0; r < n.length; r++)
              (e.prefix = 0 === r && e.prefix),
                (e.defaultValue = i[r] || s),
                new kt(n[r], e);
          }),
          Rt = (st._registerPluginProp = function (t) {
            if (!m[t]) {
              var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Ct(t, {
                parser: function (t, e, i, r, n, s, a) {
                  var o = h.com.greensock.plugins[l];
                  return o
                    ? (o._cssRegister(), m[i].parse(t, e, i, r, n, s, a))
                    : (g("Error: " + l + " js file not loaded."), n);
                },
              });
            }
          });
        ((t = kt.prototype).parseComplex = function (t, e, i, r, n, s) {
          var a,
            o,
            l,
            h,
            u,
            _,
            f = this.keyword;
          if (
            (this.multi &&
              (Z.test(i) || Z.test(e)
                ? ((o = e.replace(Z, "|").split("|")),
                  (l = i.replace(Z, "|").split("|")))
                : f && ((o = [e]), (l = [i]))),
            l)
          ) {
            for (
              h = l.length > o.length ? l.length : o.length, a = 0;
              a < h;
              a++
            )
              (e = o[a] = o[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                f &&
                  (u = e.indexOf(f)) !== (_ = i.indexOf(f)) &&
                  (-1 === _
                    ? (o[a] = o[a].split(f).join(""))
                    : -1 === u && (o[a] += " " + f));
            (e = o.join(", ")), (i = l.join(", "));
          }
          return St(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s);
        }),
          (t.parse = function (t, e, i, r, n, s, a) {
            return this.parseComplex(
              t.style,
              this.format(_t(t, this.p, S, !1, this.dflt)),
              this.format(e),
              n,
              s
            );
          }),
          (B.registerSpecialProp = function (t, l, h) {
            Ct(t, {
              parser: function (t, e, i, r, n, s, a) {
                var o = new Pt(t, i, 0, 0, n, 2, i, !1, h);
                return (o.plugin = s), (o.setRatio = l(t, e, r._tween, i)), o;
              },
              priority: h,
            });
          }),
          (B.useSVGTransformAttr = !0);
        function At(t, e, i) {
          var r,
            n = it.createElementNS(
              "h" + "t" + "t" + "p" + ":" + "/" + "/" + "www.w3.org/2000/svg",
              t
            ),
            s = /([a-z])([A-Z])/g;
          for (r in i)
            n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
          return e.appendChild(n), n;
        }
        function Mt(t, e, i, r, n, s) {
          var a,
            o,
            l,
            h,
            u,
            _,
            f,
            c,
            p,
            d,
            m,
            g,
            y,
            v,
            x = t._gsTransform,
            T = Zt(t, !0);
          x && ((y = x.xOrigin), (v = x.yOrigin)),
            (!r || (a = r.split(" ")).length < 2) &&
              (0 === (f = t.getBBox()).x &&
                0 === f.y &&
                f.width + f.height === 0 &&
                (f = {
                  x:
                    parseFloat(
                      t.hasAttribute("x")
                        ? t.getAttribute("x")
                        : t.hasAttribute("cx")
                        ? t.getAttribute("cx")
                        : 0
                    ) || 0,
                  y:
                    parseFloat(
                      t.hasAttribute("y")
                        ? t.getAttribute("y")
                        : t.hasAttribute("cy")
                        ? t.getAttribute("cy")
                        : 0
                    ) || 0,
                  width: 0,
                  height: 0,
                }),
              (a = [
                (-1 !== (e = mt(e).split(" "))[0].indexOf("%")
                  ? (parseFloat(e[0]) / 100) * f.width
                  : parseFloat(e[0])) + f.x,
                (-1 !== e[1].indexOf("%")
                  ? (parseFloat(e[1]) / 100) * f.height
                  : parseFloat(e[1])) + f.y,
              ])),
            (i.xOrigin = h = parseFloat(a[0])),
            (i.yOrigin = u = parseFloat(a[1])),
            r &&
              T !== Ht &&
              ((_ = T[0]),
              (f = T[1]),
              (c = T[2]),
              (p = T[3]),
              (d = T[4]),
              (m = T[5]),
              (g = _ * p - f * c) &&
                ((o = h * (p / g) + u * (-c / g) + (c * m - p * d) / g),
                (l = h * (-f / g) + u * (_ / g) - (_ * m - f * d) / g),
                (h = i.xOrigin = a[0] = o),
                (u = i.yOrigin = a[1] = l))),
            x &&
              (s && ((i.xOffset = x.xOffset), (i.yOffset = x.yOffset), (x = i)),
              n || (!1 !== n && !1 !== B.defaultSmoothOrigin)
                ? ((o = h - y),
                  (l = u - v),
                  (x.xOffset += o * T[0] + l * T[2] - o),
                  (x.yOffset += o * T[1] + l * T[3] - l))
                : (x.xOffset = x.yOffset = 0)),
            s || t.setAttribute("data-svg-origin", a.join(" "));
        }
        function Dt(t) {
          var e,
            i,
            r = this.data,
            n = -r.rotation * K,
            s = n + r.skewX * K,
            a = 1e5,
            o = ((Math.cos(n) * r.scaleX * a) | 0) / a,
            l = ((Math.sin(n) * r.scaleX * a) | 0) / a,
            h = ((Math.sin(s) * -r.scaleY * a) | 0) / a,
            u = ((Math.cos(s) * r.scaleY * a) | 0) / a,
            _ = this.t.style,
            f = this.t.currentStyle;
          if (f) {
            (i = l), (l = -h), (h = -i), (e = f.filter), (_.filter = "");
            var c,
              p,
              d = this.t.offsetWidth,
              m = this.t.offsetHeight,
              g = "absolute" !== f.position,
              y =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                o +
                ", M12=" +
                l +
                ", M21=" +
                h +
                ", M22=" +
                u,
              v = r.x + (d * r.xPercent) / 100,
              x = r.y + (m * r.yPercent) / 100;
            if (
              (null != r.ox &&
                ((v +=
                  (c = (r.oxp ? d * r.ox * 0.01 : r.ox) - d / 2) -
                  (c * o + (p = (r.oyp ? m * r.oy * 0.01 : r.oy) - m / 2) * l)),
                (x += p - (c * h + p * u))),
              g
                ? (y +=
                    ", Dx=" +
                    ((c = d / 2) - (c * o + (p = m / 2) * l) + v) +
                    ", Dy=" +
                    (p - (c * h + p * u) + x) +
                    ")")
                : (y += ", sizingMethod='auto expand')"),
              -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                ? (_.filter = e.replace(H, y))
                : (_.filter = y + " " + e),
              (0 !== t && 1 !== t) ||
                1 != o ||
                0 !== l ||
                0 !== h ||
                1 != u ||
                (g && -1 === y.indexOf("Dx=0, Dy=0")) ||
                (j.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                (-1 === e.indexOf(e.indexOf("Alpha")) &&
                  _.removeAttribute("filter")),
              !g)
            ) {
              var T,
                w,
                b,
                P = D < 8 ? 1 : -1;
              for (
                c = r.ieOffsetX || 0,
                  p = r.ieOffsetY || 0,
                  r.ieOffsetX = Math.round(
                    (d - ((o < 0 ? -o : o) * d + (l < 0 ? -l : l) * m)) / 2 + v
                  ),
                  r.ieOffsetY = Math.round(
                    (m - ((u < 0 ? -u : u) * m + (h < 0 ? -h : h) * d)) / 2 + x
                  ),
                  Ot = 0;
                Ot < 4;
                Ot++
              )
                (b =
                  (i =
                    -1 !== (T = f[(w = dt[Ot])]).indexOf("px")
                      ? parseFloat(T)
                      : ft(this.t, w, parseFloat(T), T.replace(N, "")) || 0) !==
                  r[w]
                    ? Ot < 2
                      ? -r.ieOffsetX
                      : -r.ieOffsetY
                    : Ot < 2
                    ? c - r.ieOffsetX
                    : p - r.ieOffsetY),
                  (_[w] =
                    (r[w] = Math.round(
                      i - b * (0 === Ot || 2 === Ot ? 1 : P)
                    )) + "px");
            }
          }
        }
        var Ft,
          Lt,
          zt,
          Et,
          It,
          Nt =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          jt = O("transform"),
          Xt = lt + "transform",
          Bt = O("transformOrigin"),
          Yt = null !== O("perspective"),
          Gt = (st.Transform = function () {
            (this.perspective = parseFloat(B.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === B.defaultForce3D || !Yt) &&
                (B.defaultForce3D || "auto"));
          }),
          Ut = _gsScope.SVGElement,
          Vt = it.documentElement || {},
          qt =
            ((It = D || (/Android/i.test(at) && !_gsScope.chrome)),
            it.createElementNS &&
              Vt.appendChild &&
              !It &&
              ((Lt = At("svg", Vt)),
              (Et = (zt = At("rect", Lt, {
                width: 100,
                height: 50,
                x: 100,
              })).getBoundingClientRect().width),
              (zt.style[Bt] = "50% 50%"),
              (zt.style[jt] = "scaleX(0.5)"),
              (It = Et === zt.getBoundingClientRect().width && !(Y && Yt)),
              Vt.removeChild(Lt)),
            It),
          Wt = function (t) {
            var e,
              i = o(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "h" +
                    "t" +
                    "t" +
                    "p" +
                    ":" +
                    "/" +
                    "/" +
                    "www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              n = this.nextSibling,
              s = this.style.cssText;
            if (
              (Vt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Wt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              n ? r.insertBefore(this, n) : r.appendChild(this),
              Vt.removeChild(i),
              (this.style.cssText = s),
              e
            );
          },
          Qt = function (t) {
            return !(
              !Ut ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (e) {
                try {
                  return e.getBBox();
                } catch (t) {
                  return Wt.call(e, !0);
                }
              })(t)
            );
          },
          Ht = [1, 0, 0, 1, 0, 0],
          Zt = function (t, e) {
            var i,
              r,
              n,
              s,
              a,
              o,
              l,
              h = t._gsTransform || new Gt(),
              u = t.style;
            if (
              (jt
                ? (r = _t(t, Xt, null, !0))
                : t.currentStyle &&
                  (r =
                    (r = t.currentStyle.filter.match(Q)) && 4 === r.length
                      ? [
                          r[0].substr(4),
                          Number(r[2].substr(4)),
                          Number(r[1].substr(4)),
                          r[3].substr(4),
                          h.x || 0,
                          h.y || 0,
                        ].join(",")
                      : ""),
              (i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
              jt &&
                i &&
                !t.offsetParent &&
                t !== Vt &&
                ((s = u.display),
                (u.display = "block"),
                ((l = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (o = t.nextSibling), Vt.appendChild(t)),
                (i =
                  !(r = _t(t, Xt, null, !0)) ||
                  "none" === r ||
                  "matrix(1, 0, 0, 1, 0, 0)" === r),
                s ? (u.display = s) : ee(u, "display"),
                a &&
                  (o
                    ? l.insertBefore(t, o)
                    : l
                    ? l.appendChild(t)
                    : Vt.removeChild(t))),
              (h.svg || (t.getCTM && Qt(t))) &&
                (i &&
                  -1 !== (u[jt] + "").indexOf("matrix") &&
                  ((r = u[jt]), (i = 0)),
                (n = t.getAttribute("transform")),
                i &&
                  n &&
                  ((r =
                    "matrix(" +
                    (n = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    n.b +
                    "," +
                    n.c +
                    "," +
                    n.d +
                    "," +
                    n.e +
                    "," +
                    n.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Ht;
            for (n = (r || "").match(z) || [], Ot = n.length; -1 < --Ot; )
              (s = Number(n[Ot])),
                (n[Ot] = (a = s - (s |= 0))
                  ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s
                  : s);
            return e && 6 < n.length
              ? [n[0], n[1], n[4], n[5], n[12], n[13]]
              : n;
          },
          $t = (st.getTransform = function (t, e, i, r) {
            if (t._gsTransform && i && !r) return t._gsTransform;
            var n,
              s,
              a,
              o,
              l,
              h,
              u = (i && t._gsTransform) || new Gt(),
              _ = u.scaleX < 0,
              f =
                (Yt &&
                  (parseFloat(_t(t, Bt, e, !1, "0 0 0").split(" ")[2]) ||
                    u.zOrigin)) ||
                0,
              c = parseFloat(B.defaultTransformPerspective) || 0;
            if (
              ((u.svg = !(!t.getCTM || !Qt(t))),
              u.svg &&
                (Mt(
                  t,
                  _t(t, Bt, e, !1, "50% 50%") + "",
                  u,
                  t.getAttribute("data-svg-origin")
                ),
                (Ft = B.useSVGTransformAttr || qt)),
              (n = Zt(t)) !== Ht)
            ) {
              if (16 === n.length) {
                var p,
                  d,
                  m,
                  g,
                  y,
                  v = n[0],
                  x = n[1],
                  T = n[2],
                  w = n[3],
                  b = n[4],
                  P = n[5],
                  S = n[6],
                  O = n[7],
                  k = n[8],
                  C = n[9],
                  R = n[10],
                  A = n[12],
                  M = n[13],
                  D = n[14],
                  F = n[11],
                  L = Math.atan2(S, R);
                u.zOrigin &&
                  ((A = k * (D = -u.zOrigin) - n[12]),
                  (M = C * D - n[13]),
                  (D = R * D + u.zOrigin - n[14])),
                  (u.rotationX = L * J),
                  L &&
                    ((p = b * (g = Math.cos(-L)) + k * (y = Math.sin(-L))),
                    (d = P * g + C * y),
                    (m = S * g + R * y),
                    (k = b * -y + k * g),
                    (C = P * -y + C * g),
                    (R = S * -y + R * g),
                    (F = O * -y + F * g),
                    (b = p),
                    (P = d),
                    (S = m)),
                  (L = Math.atan2(-T, R)),
                  (u.rotationY = L * J),
                  L &&
                    ((d = x * (g = Math.cos(-L)) - C * (y = Math.sin(-L))),
                    (m = T * g - R * y),
                    (C = x * y + C * g),
                    (R = T * y + R * g),
                    (F = w * y + F * g),
                    (v = p = v * g - k * y),
                    (x = d),
                    (T = m)),
                  (L = Math.atan2(x, v)),
                  (u.rotation = L * J),
                  L &&
                    ((p = v * (g = Math.cos(L)) + x * (y = Math.sin(L))),
                    (d = b * g + P * y),
                    (m = k * g + C * y),
                    (x = x * g - v * y),
                    (P = P * g - b * y),
                    (C = C * g - k * y),
                    (v = p),
                    (b = d),
                    (k = m)),
                  u.rotationX &&
                    359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) &&
                    ((u.rotationX = u.rotation = 0),
                    (u.rotationY = 180 - u.rotationY)),
                  (L = Math.atan2(b, P)),
                  (u.scaleX =
                    ((1e5 * Math.sqrt(v * v + x * x + T * T) + 0.5) | 0) / 1e5),
                  (u.scaleY =
                    ((1e5 * Math.sqrt(P * P + S * S) + 0.5) | 0) / 1e5),
                  (u.scaleZ =
                    ((1e5 * Math.sqrt(k * k + C * C + R * R) + 0.5) | 0) / 1e5),
                  (v /= u.scaleX),
                  (b /= u.scaleY),
                  (x /= u.scaleX),
                  (P /= u.scaleY),
                  2e-5 < Math.abs(L)
                    ? ((u.skewX = L * J),
                      (b = 0),
                      "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(L)))
                    : (u.skewX = 0),
                  (u.perspective = F ? 1 / (F < 0 ? -F : F) : 0),
                  (u.x = A),
                  (u.y = M),
                  (u.z = D),
                  u.svg &&
                    ((u.x -= u.xOrigin - (u.xOrigin * v - u.yOrigin * b)),
                    (u.y -= u.yOrigin - (u.yOrigin * x - u.xOrigin * P)));
              } else if (
                !Yt ||
                r ||
                !n.length ||
                u.x !== n[4] ||
                u.y !== n[5] ||
                (!u.rotationX && !u.rotationY)
              ) {
                var z = 6 <= n.length,
                  E = z ? n[0] : 1,
                  I = n[1] || 0,
                  N = n[2] || 0,
                  j = z ? n[3] : 1;
                (u.x = n[4] || 0),
                  (u.y = n[5] || 0),
                  (a = Math.sqrt(E * E + I * I)),
                  (o = Math.sqrt(j * j + N * N)),
                  (l = E || I ? Math.atan2(I, E) * J : u.rotation || 0),
                  (h = N || j ? Math.atan2(N, j) * J + l : u.skewX || 0),
                  (u.scaleX = a),
                  (u.scaleY = o),
                  (u.rotation = l),
                  (u.skewX = h),
                  Yt &&
                    ((u.rotationX = u.rotationY = u.z = 0),
                    (u.perspective = c),
                    (u.scaleZ = 1)),
                  u.svg &&
                    ((u.x -= u.xOrigin - (u.xOrigin * E + u.yOrigin * N)),
                    (u.y -= u.yOrigin - (u.xOrigin * I + u.yOrigin * j)));
              }
              for (s in (90 < Math.abs(u.skewX) &&
                Math.abs(u.skewX) < 270 &&
                (_
                  ? ((u.scaleX *= -1),
                    (u.skewX += u.rotation <= 0 ? 180 : -180),
                    (u.rotation += u.rotation <= 0 ? 180 : -180))
                  : ((u.scaleY *= -1), (u.skewX += u.skewX <= 0 ? 180 : -180))),
              (u.zOrigin = f),
              u))
                u[s] < 2e-5 && -2e-5 < u[s] && (u[s] = 0);
            }
            return (
              i &&
                (t._gsTransform = u).svg &&
                (Ft && t.style[jt]
                  ? X.delayedCall(0.001, function () {
                      ee(t.style, jt);
                    })
                  : !Ft &&
                    t.getAttribute("transform") &&
                    X.delayedCall(0.001, function () {
                      t.removeAttribute("transform");
                    })),
              u
            );
          }),
          Kt =
            (st.set3DTransformRatio =
            st.setTransformRatio =
              function (t) {
                var e,
                  i,
                  r,
                  n,
                  s,
                  a,
                  o,
                  l,
                  h,
                  u,
                  _,
                  f,
                  c,
                  p,
                  d,
                  m,
                  g,
                  y,
                  v,
                  x,
                  T,
                  w,
                  b,
                  P = this.data,
                  S = this.t.style,
                  O = P.rotation,
                  k = P.rotationX,
                  C = P.rotationY,
                  R = P.scaleX,
                  A = P.scaleY,
                  M = P.scaleZ,
                  D = P.x,
                  F = P.y,
                  L = P.z,
                  z = P.svg,
                  E = P.perspective,
                  I = P.force3D,
                  N = P.skewY,
                  j = P.skewX;
                if (
                  (N && ((j += N), (O += N)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== I ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      I) ||
                    L ||
                    E ||
                    C ||
                    k ||
                    1 !== M
                  ) ||
                    (Ft && z) ||
                    !Yt)
                )
                  O || j || z
                    ? ((O *= K),
                      (w = j * K),
                      (b = 1e5),
                      (i = Math.cos(O) * R),
                      (s = Math.sin(O) * R),
                      (r = Math.sin(O - w) * -A),
                      (a = Math.cos(O - w) * A),
                      w &&
                        "simple" === P.skewType &&
                        ((e = Math.tan(w - N * K)),
                        (r *= e = Math.sqrt(1 + e * e)),
                        (a *= e),
                        N &&
                          ((e = Math.tan(N * K)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (s *= e))),
                      z &&
                        ((D +=
                          P.xOrigin -
                          (P.xOrigin * i + P.yOrigin * r) +
                          P.xOffset),
                        (F +=
                          P.yOrigin -
                          (P.xOrigin * s + P.yOrigin * a) +
                          P.yOffset),
                        Ft &&
                          (P.xPercent || P.yPercent) &&
                          ((d = this.t.getBBox()),
                          (D += 0.01 * P.xPercent * d.width),
                          (F += 0.01 * P.yPercent * d.height)),
                        D < (d = 1e-6) && -d < D && (D = 0),
                        F < d && -d < F && (F = 0)),
                      (v =
                        ((i * b) | 0) / b +
                        "," +
                        ((s * b) | 0) / b +
                        "," +
                        ((r * b) | 0) / b +
                        "," +
                        ((a * b) | 0) / b +
                        "," +
                        D +
                        "," +
                        F +
                        ")"),
                      z && Ft
                        ? this.t.setAttribute("transform", "matrix(" + v)
                        : (S[jt] =
                            (P.xPercent || P.yPercent
                              ? "translate(" +
                                P.xPercent +
                                "%," +
                                P.yPercent +
                                "%) matrix("
                              : "matrix(") + v))
                    : (S[jt] =
                        (P.xPercent || P.yPercent
                          ? "translate(" +
                            P.xPercent +
                            "%," +
                            P.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        R +
                        ",0,0," +
                        A +
                        "," +
                        D +
                        "," +
                        F +
                        ")");
                else {
                  if (
                    (Y &&
                      (R < (d = 1e-4) && -d < R && (R = M = 2e-5),
                      A < d && -d < A && (A = M = 2e-5),
                      !E || P.z || P.rotationX || P.rotationY || (E = 0)),
                    O || j)
                  )
                    (O *= K),
                      (m = i = Math.cos(O)),
                      (g = s = Math.sin(O)),
                      j &&
                        ((O -= j * K),
                        (m = Math.cos(O)),
                        (g = Math.sin(O)),
                        "simple" === P.skewType &&
                          ((e = Math.tan((j - N) * K)),
                          (m *= e = Math.sqrt(1 + e * e)),
                          (g *= e),
                          P.skewY &&
                            ((e = Math.tan(N * K)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (s *= e)))),
                      (r = -g),
                      (a = m);
                  else {
                    if (!(C || k || 1 !== M || E || z))
                      return void (S[jt] =
                        (P.xPercent || P.yPercent
                          ? "translate(" +
                            P.xPercent +
                            "%," +
                            P.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        D +
                        "px," +
                        F +
                        "px," +
                        L +
                        "px)" +
                        (1 !== R || 1 !== A
                          ? " scale(" + R + "," + A + ")"
                          : ""));
                    (i = a = 1), (r = s = 0);
                  }
                  (u = 1),
                    (n = o = l = h = _ = f = 0),
                    (c = E ? -1 / E : 0),
                    (p = P.zOrigin),
                    (d = 1e-6),
                    (x = ","),
                    (T = "0"),
                    (O = C * K) &&
                      ((m = Math.cos(O)),
                      (_ = c * (l = -(g = Math.sin(O)))),
                      (n = i * g),
                      (o = s * g),
                      (c *= u = m),
                      (i *= m),
                      (s *= m)),
                    (O = k * K) &&
                      ((e = r * (m = Math.cos(O)) + n * (g = Math.sin(O))),
                      (y = a * m + o * g),
                      (h = u * g),
                      (f = c * g),
                      (n = r * -g + n * m),
                      (o = a * -g + o * m),
                      (u *= m),
                      (c *= m),
                      (r = e),
                      (a = y)),
                    1 !== M && ((n *= M), (o *= M), (u *= M), (c *= M)),
                    1 !== A && ((r *= A), (a *= A), (h *= A), (f *= A)),
                    1 !== R && ((i *= R), (s *= R), (l *= R), (_ *= R)),
                    (p || z) &&
                      (p && ((D += n * -p), (F += o * -p), (L += u * -p + p)),
                      z &&
                        ((D +=
                          P.xOrigin -
                          (P.xOrigin * i + P.yOrigin * r) +
                          P.xOffset),
                        (F +=
                          P.yOrigin -
                          (P.xOrigin * s + P.yOrigin * a) +
                          P.yOffset)),
                      D < d && -d < D && (D = T),
                      F < d && -d < F && (F = T),
                      L < d && -d < L && (L = 0)),
                    (v =
                      P.xPercent || P.yPercent
                        ? "translate(" +
                          P.xPercent +
                          "%," +
                          P.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (v +=
                      (i < d && -d < i ? T : i) +
                      x +
                      (s < d && -d < s ? T : s) +
                      x +
                      (l < d && -d < l ? T : l)),
                    (v +=
                      x +
                      (_ < d && -d < _ ? T : _) +
                      x +
                      (r < d && -d < r ? T : r) +
                      x +
                      (a < d && -d < a ? T : a)),
                    k || C || 1 !== M
                      ? ((v +=
                          x +
                          (h < d && -d < h ? T : h) +
                          x +
                          (f < d && -d < f ? T : f) +
                          x +
                          (n < d && -d < n ? T : n)),
                        (v +=
                          x +
                          (o < d && -d < o ? T : o) +
                          x +
                          (u < d && -d < u ? T : u) +
                          x +
                          (c < d && -d < c ? T : c) +
                          x))
                      : (v += ",0,0,0,0,1,0,"),
                    (v += D + x + F + x + L + x + (E ? 1 + -L / E : 1) + ")"),
                    (S[jt] = v);
                }
              });
        ((t = Gt.prototype).x =
          t.y =
          t.z =
          t.skewX =
          t.skewY =
          t.rotation =
          t.rotationX =
          t.rotationY =
          t.zOrigin =
          t.xPercent =
          t.yPercent =
          t.xOffset =
          t.yOffset =
            0),
          (t.scaleX = t.scaleY = t.scaleZ = 1),
          Ct(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, i, r, n, s, a) {
                if (r._lastParsedTransform === a) return n;
                var o =
                  (r._lastParsedTransform = a).scale &&
                  "function" == typeof a.scale
                    ? a.scale
                    : 0;
                o && (a.scale = o(L, t));
                var l,
                  h,
                  u,
                  _,
                  f,
                  c,
                  p,
                  d,
                  m,
                  g = t._gsTransform,
                  y = t.style,
                  v = Nt.length,
                  x = a,
                  T = {},
                  w = "transformOrigin",
                  b = $t(t, S, !0, x.parseTransform),
                  P =
                    x.transform &&
                    ("function" == typeof x.transform
                      ? x.transform(L, F)
                      : x.transform);
                if (
                  ((b.skewType = x.skewType || b.skewType || B.defaultSkewType),
                  (r._transform = b),
                  "rotationZ" in x && (x.rotation = x.rotationZ),
                  P && "string" == typeof P && jt)
                )
                  ((h = rt.style)[jt] = P),
                    (h.display = "block"),
                    (h.position = "absolute"),
                    -1 !== P.indexOf("%") &&
                      ((h.width = _t(t, "width")),
                      (h.height = _t(t, "height"))),
                    it.body.appendChild(rt),
                    (l = $t(rt, null, !1)),
                    "simple" === b.skewType &&
                      (l.scaleY *= Math.cos(l.skewX * K)),
                    b.svg &&
                      ((c = b.xOrigin),
                      (p = b.yOrigin),
                      (l.x -= b.xOffset),
                      (l.y -= b.yOffset),
                      (x.transformOrigin || x.svgOrigin) &&
                        ((P = {}),
                        Mt(
                          t,
                          mt(x.transformOrigin),
                          P,
                          x.svgOrigin,
                          x.smoothOrigin,
                          !0
                        ),
                        (c = P.xOrigin),
                        (p = P.yOrigin),
                        (l.x -= P.xOffset - b.xOffset),
                        (l.y -= P.yOffset - b.yOffset)),
                      (c || p) &&
                        ((d = Zt(rt, !0)),
                        (l.x -= c - (c * d[0] + p * d[2])),
                        (l.y -= p - (c * d[1] + p * d[3])))),
                    it.body.removeChild(rt),
                    l.perspective || (l.perspective = b.perspective),
                    null != x.xPercent &&
                      (l.xPercent = C(x.xPercent, b.xPercent)),
                    null != x.yPercent &&
                      (l.yPercent = C(x.yPercent, b.yPercent));
                else if ("object" == typeof x) {
                  if (
                    ((l = {
                      scaleX: C(
                        null != x.scaleX ? x.scaleX : x.scale,
                        b.scaleX
                      ),
                      scaleY: C(
                        null != x.scaleY ? x.scaleY : x.scale,
                        b.scaleY
                      ),
                      scaleZ: C(x.scaleZ, b.scaleZ),
                      x: C(x.x, b.x),
                      y: C(x.y, b.y),
                      z: C(x.z, b.z),
                      xPercent: C(x.xPercent, b.xPercent),
                      yPercent: C(x.yPercent, b.yPercent),
                      perspective: C(x.transformPerspective, b.perspective),
                    }),
                    null != (f = x.directionalRotation))
                  )
                    if ("object" == typeof f) for (h in f) x[h] = f[h];
                    else x.rotation = f;
                  "string" == typeof x.x &&
                    -1 !== x.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = C(x.x, b.xPercent))),
                    "string" == typeof x.y &&
                      -1 !== x.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = C(x.y, b.yPercent))),
                    (l.rotation = R(
                      "rotation" in x
                        ? x.rotation
                        : "shortRotation" in x
                        ? x.shortRotation + "_short"
                        : b.rotation,
                      b.rotation,
                      "rotation",
                      T
                    )),
                    Yt &&
                      ((l.rotationX = R(
                        "rotationX" in x
                          ? x.rotationX
                          : "shortRotationX" in x
                          ? x.shortRotationX + "_short"
                          : b.rotationX || 0,
                        b.rotationX,
                        "rotationX",
                        T
                      )),
                      (l.rotationY = R(
                        "rotationY" in x
                          ? x.rotationY
                          : "shortRotationY" in x
                          ? x.shortRotationY + "_short"
                          : b.rotationY || 0,
                        b.rotationY,
                        "rotationY",
                        T
                      ))),
                    (l.skewX = R(x.skewX, b.skewX)),
                    (l.skewY = R(x.skewY, b.skewY));
                }
                for (
                  Yt &&
                    null != x.force3D &&
                    ((b.force3D = x.force3D), (_ = !0)),
                    (u =
                      b.force3D ||
                      b.z ||
                      b.rotationX ||
                      b.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective) ||
                      null == x.scale ||
                      (l.scaleZ = 1);
                  -1 < --v;

                )
                  (1e-6 < (P = l[(m = Nt[v])] - b[m]) ||
                    P < -1e-6 ||
                    null != x[m] ||
                    null != tt[m]) &&
                    ((_ = !0),
                    (n = new Pt(b, m, b[m], P, n)),
                    m in T && (n.e = T[m]),
                    (n.xs0 = 0),
                    (n.plugin = s),
                    r._overwriteProps.push(n.n));
                return (
                  (P =
                    "function" == typeof x.transformOrigin
                      ? x.transformOrigin(L, F)
                      : x.transformOrigin),
                  b.svg &&
                    (P || x.svgOrigin) &&
                    ((c = b.xOffset),
                    (p = b.yOffset),
                    Mt(t, mt(P), l, x.svgOrigin, x.smoothOrigin),
                    (n = wt(
                      b,
                      "xOrigin",
                      (g ? b : l).xOrigin,
                      l.xOrigin,
                      n,
                      w
                    )),
                    (n = wt(
                      b,
                      "yOrigin",
                      (g ? b : l).yOrigin,
                      l.yOrigin,
                      n,
                      w
                    )),
                    (c === b.xOffset && p === b.yOffset) ||
                      ((n = wt(
                        b,
                        "xOffset",
                        g ? c : b.xOffset,
                        b.xOffset,
                        n,
                        w
                      )),
                      (n = wt(
                        b,
                        "yOffset",
                        g ? p : b.yOffset,
                        b.yOffset,
                        n,
                        w
                      ))),
                    (P = "0px 0px")),
                  (P || (Yt && u && b.zOrigin)) &&
                    (jt
                      ? ((_ = !0),
                        (m = Bt),
                        P ||
                          (P =
                            (P = (_t(t, m, S, !1, "50% 50%") + "").split(
                              " "
                            ))[0] +
                            " " +
                            P[1] +
                            " " +
                            b.zOrigin +
                            "px"),
                        (P += ""),
                        ((n = new Pt(y, m, 0, 0, n, -1, w)).b = y[m]),
                        (n.plugin = s),
                        Yt
                          ? ((h = b.zOrigin),
                            (P = P.split(" ")),
                            (b.zOrigin =
                              (2 < P.length ? parseFloat(P[2]) : h) || 0),
                            (n.xs0 = n.e =
                              P[0] + " " + (P[1] || "50%") + " 0px"),
                            ((n = new Pt(b, "zOrigin", 0, 0, n, -1, n.n)).b =
                              h),
                            (n.xs0 = n.e = b.zOrigin))
                          : (n.xs0 = n.e = P))
                      : mt(P + "", b)),
                  _ &&
                    (r._transformType =
                      (b.svg && Ft) || (!u && 3 !== this._transformType)
                        ? 2
                        : 3),
                  o && (a.scale = o),
                  n
                );
              },
              allowFunc: !0,
              prefix: !0,
            }
          ),
          Ct("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          Ct("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: xt("inset(0% 0% 0% 0%)", !1, !0),
          }),
          Ct("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, r, n, s) {
              e = this.format(e);
              var a,
                o,
                l,
                h,
                u,
                _,
                f,
                c,
                p,
                d,
                m,
                g,
                y,
                v,
                x,
                T,
                w = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                b = t.style;
              for (
                p = parseFloat(t.offsetWidth),
                  d = parseFloat(t.offsetHeight),
                  a = e.split(" "),
                  o = 0;
                o < w.length;
                o++
              )
                this.p.indexOf("border") && (w[o] = O(w[o])),
                  -1 !== (u = h = _t(t, w[o], S, !1, "0px")).indexOf(" ") &&
                    ((u = (h = u.split(" "))[0]), (h = h[1])),
                  (_ = l = a[o]),
                  (f = parseFloat(u)),
                  (g = u.substr((f + "").length)),
                  "" ===
                    (m = (y = "=" === _.charAt(1))
                      ? ((c = parseInt(_.charAt(0) + "1", 10)),
                        (_ = _.substr(2)),
                        (c *= parseFloat(_)),
                        _.substr((c + "").length - (c < 0 ? 1 : 0)) || "")
                      : ((c = parseFloat(_)), _.substr((c + "").length))) &&
                    (m = P[i] || g),
                  m !== g &&
                    ((v = ft(t, "borderLeft", f, g)),
                    (x = ft(t, "borderTop", f, g)),
                    (h =
                      "%" === m
                        ? ((u = (v / p) * 100 + "%"), (x / d) * 100 + "%")
                        : "em" === m
                        ? ((u = v / (T = ft(t, "borderLeft", 1, "em")) + "em"),
                          x / T + "em")
                        : ((u = v + "px"), x + "px")),
                    y &&
                      ((_ = parseFloat(u) + c + m),
                      (l = parseFloat(h) + c + m))),
                  (n = St(b, w[o], u + " " + h, _ + " " + l, !1, "0px", n));
              return n;
            },
            prefix: !0,
            formatter: xt("0px 0px 0px 0px", !1, !0),
          }),
          Ct(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, i, r, n, s) {
                return St(
                  t.style,
                  i,
                  this.format(_t(t, i, S, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  n
                );
              },
              prefix: !0,
              formatter: xt("0px 0px", !1, !0),
            }
          ),
          Ct("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, r, n, s) {
              var a,
                o,
                l,
                h,
                u,
                _,
                f = "background-position",
                c = S || y(t),
                p = this.format(
                  (c
                    ? D
                      ? c.getPropertyValue(f + "-x") +
                        " " +
                        c.getPropertyValue(f + "-y")
                      : c.getPropertyValue(f)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                d = this.format(e);
              if (
                (-1 !== p.indexOf("%")) != (-1 !== d.indexOf("%")) &&
                d.split(",").length < 2 &&
                (_ = _t(t, "backgroundImage").replace(q, "")) &&
                "none" !== _
              ) {
                for (
                  a = p.split(" "),
                    o = d.split(" "),
                    nt.setAttribute("src", _),
                    l = 2;
                  -1 < --l;

                )
                  (h = -1 !== (p = a[l]).indexOf("%")) !=
                    (-1 !== o[l].indexOf("%")) &&
                    ((u =
                      0 === l
                        ? t.offsetWidth - nt.width
                        : t.offsetHeight - nt.height),
                    (a[l] = h
                      ? (parseFloat(p) / 100) * u + "px"
                      : (parseFloat(p) / u) * 100 + "%"));
                p = a.join(" ");
              }
              return this.parseComplex(t.style, p, d, n, s);
            },
            formatter: mt,
          }),
          Ct("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : mt(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          Ct("perspective", { defaultValue: "0px", prefix: !0 }),
          Ct("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Ct("transformStyle", { prefix: !0 }),
          Ct("backfaceVisibility", { prefix: !0 }),
          Ct("userSelect", { prefix: !0 }),
          Ct("margin", {
            parser: Tt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          Ct("padding", {
            parser: Tt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          Ct("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, r, n, s) {
              var a, o, l;
              return (
                (e =
                  D < 9
                    ? ((o = t.currentStyle),
                      (l = D < 8 ? " " : ","),
                      (a =
                        "rect(" +
                        o.clipTop +
                        l +
                        o.clipRight +
                        l +
                        o.clipBottom +
                        l +
                        o.clipLeft +
                        ")"),
                      this.format(e).split(",").join(l))
                    : ((a = this.format(_t(t, this.p, S, !1, this.dflt))),
                      this.format(e))),
                this.parseComplex(t.style, a, e, n, s)
              );
            },
          }),
          Ct("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          Ct("autoRound,strictUnits", {
            parser: function (t, e, i, r, n) {
              return n;
            },
          }),
          Ct("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, r, n, s) {
              var a = _t(t, "borderTopWidth", S, !1, "0px"),
                o = this.format(e).split(" "),
                l = o[0].replace(N, "");
              return (
                "px" !== l &&
                  (a = parseFloat(a) / ft(t, "borderTopWidth", 1, l) + l),
                this.parseComplex(
                  t.style,
                  this.format(
                    a +
                      " " +
                      _t(t, "borderTopStyle", S, !1, "solid") +
                      " " +
                      _t(t, "borderTopColor", S, !1, "#000")
                  ),
                  o.join(" "),
                  n,
                  s
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(vt) || ["#000"])[0]
              );
            },
          }),
          Ct("borderWidth", {
            parser: Tt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          Ct("float,cssFloat,styleFloat", {
            parser: function (t, e, i, r, n, s) {
              var a = t.style,
                o = "cssFloat" in a ? "cssFloat" : "styleFloat";
              return new Pt(a, o, 0, 0, n, -1, i, !1, 0, a[o], e);
            },
          });
        function Jt(t) {
          var e,
            i = this.t,
            r = i.filter || _t(this.data, "filter") || "",
            n = (this.s + this.c * t) | 0;
          100 == n &&
            (e =
              -1 === r.indexOf("atrix(") &&
              -1 === r.indexOf("radient(") &&
              -1 === r.indexOf("oader(")
                ? (i.removeAttribute("filter"), !_t(this.data, "filter"))
                : ((i.filter = r.replace(_, "")), !0)),
            e ||
              (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"),
              -1 === r.indexOf("pacity")
                ? (0 == n && this.xn1) ||
                  (i.filter = r + " alpha(opacity=" + n + ")")
                : (i.filter = r.replace(j, "opacity=" + n)));
        }
        Ct("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, r, n, s) {
            var a = parseFloat(_t(t, "opacity", S, !1, "1")),
              o = t.style,
              l = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              l &&
                1 === a &&
                "hidden" === _t(t, "visibility", S) &&
                0 !== e &&
                (a = 0),
              ot
                ? (n = new Pt(o, "opacity", a, e - a, n))
                : (((n = new Pt(o, "opacity", 100 * a, 100 * (e - a), n)).xn1 =
                    l ? 1 : 0),
                  (o.zoom = 1),
                  (n.type = 2),
                  (n.b = "alpha(opacity=" + n.s + ")"),
                  (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                  (n.data = t),
                  (n.plugin = s),
                  (n.setRatio = Jt)),
              l &&
                (((n = new Pt(
                  o,
                  "visibility",
                  0,
                  0,
                  n,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                r._overwriteProps.push(n.n),
                r._overwriteProps.push(i)),
              n
            );
          },
        });
        function te(t) {
          if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e; )
              e.v ? (i[e.p] = e.v) : ee(i, e.p), (e = e._next);
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        }
        var ee = function (t, e) {
          e &&
            (t.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                t.removeProperty(e.replace(f, "-$1").toLowerCase()))
              : t.removeAttribute(e));
        };
        Ct("className", {
          parser: function (t, e, i, r, n, s, a) {
            var o,
              l,
              h,
              u,
              _,
              f = t.getAttribute("class") || "",
              c = t.style.cssText;
            if (
              (((n = r._classNamePT = new Pt(t, i, 0, 0, n, 2)).setRatio = te),
              (n.pr = -11),
              (p = !0),
              (n.b = f),
              (l = v(t, S)),
              (h = t._gsClassPT))
            ) {
              for (u = {}, _ = h.data; _; ) (u[_.p] = 1), (_ = _._next);
              h.setRatio(1);
            }
            return (
              ((t._gsClassPT = n).e =
                "=" !== e.charAt(1)
                  ? e
                  : f.replace(
                      new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", n.e),
              (o = x(t, l, v(t), a, u)),
              t.setAttribute("class", f),
              (n.data = o.firstMPT),
              t.style.cssText !== c && (t.style.cssText = c),
              (n.xfirst = r.parse(t, o.difs, n, s))
            );
          },
        });
        function ie(t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              r,
              n,
              s,
              a = this.t.style,
              o = m.transform.parse;
            if ("all" === this.e) n = !(a.cssText = "");
            else
              for (
                r = (e = this.e.split(" ").join("").split(",")).length;
                -1 < --r;

              )
                (i = e[r]),
                  m[i] &&
                    (m[i].parse === o
                      ? (n = !0)
                      : (i = "transformOrigin" === i ? Bt : m[i].p)),
                  ee(a, i);
            n &&
              (ee(a, jt),
              (s = this.t._gsTransform) &&
                (s.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        }
        for (
          Ct("clearProps", {
            parser: function (t, e, i, r, n) {
              return (
                ((n = new Pt(t, i, 0, 0, n, 2)).setRatio = ie),
                (n.e = e),
                (n.pr = -10),
                (n.data = r._tween),
                (p = !0),
                n
              );
            },
          }),
            t = "bezier,throwProps,physicsProps,physics2D".split(","),
            Ot = t.length;
          Ot--;

        )
          Rt(t[Ot]);
        ((t = B.prototype)._firstPT =
          t._lastParsedTransform =
          t._transform =
            null),
          (t._onInitTween = function (t, e, i, r) {
            if (!t.nodeType) return !1;
            (this._target = F = t),
              (this._tween = i),
              (this._vars = e),
              (L = r),
              (A = e.autoRound),
              (p = !1),
              (P = e.suffixMap || B.suffixMap),
              (S = y(t)),
              (d = this._overwriteProps);
            var n,
              s,
              a,
              o,
              l,
              h,
              u,
              _,
              f,
              c = t.style;
            if (
              (w &&
                "" === c.zIndex &&
                (("auto" !== (n = _t(t, "zIndex", S)) && "" !== n) ||
                  this._addLazySet(c, "zIndex", 0)),
              "string" == typeof e &&
                ((o = c.cssText),
                (n = v(t, S)),
                (c.cssText = o + ";" + e),
                (n = x(t, n, v(t)).difs),
                !ot && G.test(e) && (n.opacity = parseFloat(RegExp.$1)),
                (e = n),
                (c.cssText = o)),
              e.className
                ? (this._firstPT = s =
                    m.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    ))
                : (this._firstPT = s = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                f = 3 === this._transformType,
                  jt
                    ? b &&
                      ((w = !0),
                      "" === c.zIndex &&
                        (("auto" !== (u = _t(t, "zIndex", S)) && "" !== u) ||
                          this._addLazySet(c, "zIndex", 0)),
                      M &&
                        this._addLazySet(
                          c,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (f ? "visible" : "hidden")
                        ))
                    : (c.zoom = 1),
                  a = s;
                a && a._next;

              )
                a = a._next;
              (_ = new Pt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(_, null, a),
                (_.setRatio = jt ? Kt : Dt),
                (_.data = this._transform || $t(t, S, !0)),
                (_.tween = i),
                (_.pr = -1),
                d.pop();
            }
            if (p) {
              for (; s; ) {
                for (h = s._next, a = o; a && a.pr > s.pr; ) a = a._next;
                (s._prev = a ? a._prev : l) ? (s._prev._next = s) : (o = s),
                  (s._next = a) ? (a._prev = s) : (l = s),
                  (s = h);
              }
              this._firstPT = o;
            }
            return !0;
          }),
          (t.parse = function (t, e, i, r) {
            var n,
              s,
              a,
              o,
              l,
              h,
              u,
              _,
              f,
              c,
              p = t.style;
            for (n in e) {
              if (
                ((h = e[n]),
                (s = m[n]),
                "function" != typeof h || (s && s.allowFunc) || (h = h(L, F)),
                s)
              )
                i = s.parse(t, h, n, this, i, r, e);
              else {
                if ("--" === n.substr(0, 2)) {
                  this._tween._propLookup[n] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    y(t).getPropertyValue(n) + "",
                    h + "",
                    n,
                    !1,
                    n
                  );
                  continue;
                }
                (l = _t(t, n, S) + ""),
                  (f = "string" == typeof h),
                  "color" === n ||
                  "fill" === n ||
                  "stroke" === n ||
                  -1 !== n.indexOf("Color") ||
                  (f && U.test(h))
                    ? (f ||
                        (h =
                          (3 < (h = yt(h)).length ? "rgba(" : "rgb(") +
                          h.join(",") +
                          ")"),
                      (i = St(p, n, l, h, !0, "transparent", i, 0, r)))
                    : f && $.test(h)
                    ? (i = St(p, n, l, h, !0, null, i, 0, r))
                    : ((u =
                        (a = parseFloat(l)) || 0 === a
                          ? l.substr((a + "").length)
                          : ""),
                      ("" !== l && "auto" !== l) ||
                        (u =
                          "width" === n || "height" === n
                            ? ((a = T(t, n, S)), "px")
                            : "left" === n || "top" === n
                            ? ((a = ct(t, n, S)), "px")
                            : ((a = "opacity" !== n ? 0 : 1), "")),
                      "" ===
                        (_ = (c = f && "=" === h.charAt(1))
                          ? ((o = parseInt(h.charAt(0) + "1", 10)),
                            (h = h.substr(2)),
                            (o *= parseFloat(h)),
                            h.replace(N, ""))
                          : ((o = parseFloat(h)), f ? h.replace(N, "") : "")) &&
                        (_ = n in P ? P[n] : u),
                      (h = o || 0 === o ? (c ? o + a : o) + _ : e[n]),
                      u === _ ||
                        ("" === _ && "lineHeight" !== n) ||
                        (!o && 0 !== o) ||
                        !a ||
                        ((a = ft(t, n, a, u)),
                        "%" === _
                          ? ((a /= ft(t, n, 100, "%") / 100),
                            !0 !== e.strictUnits && (l = a + "%"))
                          : "em" === _ ||
                            "rem" === _ ||
                            "vw" === _ ||
                            "vh" === _
                          ? (a /= ft(t, n, 1, _))
                          : "px" !== _ && ((o = ft(t, n, o, _)), (_ = "px")),
                        c && (o || 0 === o) && (h = o + a + _)),
                      c && (o += a),
                      (!a && 0 !== a) || (!o && 0 !== o)
                        ? void 0 !== p[n] &&
                          (h || (h + "" != "NaN" && null != h))
                          ? ((i = new Pt(
                              p,
                              n,
                              o || a || 0,
                              0,
                              i,
                              -1,
                              n,
                              !1,
                              0,
                              l,
                              h
                            )).xs0 =
                              "none" !== h ||
                              ("display" !== n && -1 === n.indexOf("Style"))
                                ? h
                                : l)
                          : g("invalid " + n + " tween value: " + e[n])
                        : ((i = new Pt(
                            p,
                            n,
                            a,
                            o - a,
                            i,
                            0,
                            n,
                            !1 !== A && ("px" === _ || "zIndex" === n),
                            0,
                            l,
                            h
                          )).xs0 = _));
              }
              r && i && !i.plugin && (i.plugin = r);
            }
            return i;
          }),
          (t.setRatio = function (t) {
            var e,
              i,
              r,
              n = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; n; ) {
                  if (
                    ((e = n.c * t + n.s),
                    n.r ? (e = n.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                    n.type)
                  )
                    if (1 === n.type)
                      if (2 === (r = n.l))
                        n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                      else if (3 === r)
                        n.t[n.p] =
                          n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                      else if (4 === r)
                        n.t[n.p] =
                          n.xs0 +
                          e +
                          n.xs1 +
                          n.xn1 +
                          n.xs2 +
                          n.xn2 +
                          n.xs3 +
                          n.xn3 +
                          n.xs4;
                      else if (5 === r)
                        n.t[n.p] =
                          n.xs0 +
                          e +
                          n.xs1 +
                          n.xn1 +
                          n.xs2 +
                          n.xn2 +
                          n.xs3 +
                          n.xn3 +
                          n.xs4 +
                          n.xn4 +
                          n.xs5;
                      else {
                        for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++)
                          i += n["xn" + r] + n["xs" + (r + 1)];
                        n.t[n.p] = i;
                      }
                    else
                      -1 === n.type
                        ? (n.t[n.p] = n.xs0)
                        : n.setRatio && n.setRatio(t);
                  else n.t[n.p] = e + n.xs0;
                  n = n._next;
                }
              else
                for (; n; )
                  2 !== n.type ? (n.t[n.p] = n.b) : n.setRatio(t),
                    (n = n._next);
            else
              for (; n; ) {
                if (2 !== n.type)
                  if (n.r && -1 !== n.type)
                    if (((e = n.r(n.s + n.c)), n.type)) {
                      if (1 === n.type) {
                        for (
                          r = n.l, i = n.xs0 + e + n.xs1, r = 1;
                          r < n.l;
                          r++
                        )
                          i += n["xn" + r] + n["xs" + (r + 1)];
                        n.t[n.p] = i;
                      }
                    } else n.t[n.p] = e + n.xs0;
                  else n.t[n.p] = n.e;
                else n.setRatio(t);
                n = n._next;
              }
          }),
          (t._enableTransforms = function (t) {
            (this._transform = this._transform || $t(this._target, S, !0)),
              (this._transformType =
                (this._transform.svg && Ft) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        function re(t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        }
        (t._addLazySet = function (t, e, i) {
          var r = (this._firstPT = new Pt(t, e, 0, 0, this._firstPT, 2));
          (r.e = i), (r.setRatio = re), (r.data = this);
        }),
          (t._linkCSSP = function (t, e, i, r) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (r = !0)),
                i
                  ? (i._next = t)
                  : r || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (t._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (t._kill = function (t) {
            var e,
              i,
              r,
              n = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((n = {}), t)) n[i] = t[i];
              (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((r = e.xfirst) && r._prev
                  ? this._linkCSSP(r._prev, e._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, r._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return s.prototype._kill.call(this, n);
          });
        var ne = function (t, e, i) {
          var r, n, s, a;
          if (t.slice) for (n = t.length; -1 < --n; ) ne(t[n], e, i);
          else
            for (n = (r = t.childNodes).length; -1 < --n; )
              (a = (s = r[n]).type),
                s.style && (e.push(v(s)), i && i.push(s)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !s.childNodes.length ||
                  ne(s, e, i);
        };
        return (
          (B.cascadeTo = function (t, e, i) {
            var r,
              n,
              s,
              a,
              o = X.to(t, e, i),
              l = [o],
              h = [],
              u = [],
              _ = [],
              f = X._internals.reservedProps;
            for (
              t = o._targets || o.target,
                ne(t, h, _),
                o.render(e, !0, !0),
                ne(t, u),
                o.render(0, !0, !0),
                o._enabled(!0),
                r = _.length;
              -1 < --r;

            )
              if ((n = x(_[r], h[r], u[r])).firstMPT) {
                for (s in ((n = n.difs), i)) f[s] && (n[s] = i[s]);
                for (s in ((a = {}), n)) a[s] = h[r][s];
                l.push(X.fromTo(_[r], e, a, n));
              }
            return l;
          }),
          s.activate([B]),
          B
        );
      },
      !0
    ),
    (t = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function (t, e, i) {
        return (this._tween = i), !0;
      },
    })),
    ((e = t.prototype)._onInitAllProps = function () {
      var t,
        e,
        i,
        r,
        n = this._tween,
        s = n.vars.roundProps,
        a = {},
        o = n._propLookup.roundProps;
      if ("object" != typeof s || s.push)
        for (
          "string" == typeof s && (s = s.split(",")), i = s.length;
          -1 < --i;

        )
          a[s[i]] = Math.round;
      else for (r in s) a[r] = l(s[r]);
      for (r in a)
        for (t = n._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(a)
              : t.n === r &&
                (2 === t.f && t.t
                  ? h(t.t._firstPT, a[r])
                  : (this._add(t.t, r, t.s, t.c, a[r]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : n._firstPT === t && (n._firstPT = e),
                    (t._next = t._prev = null),
                    (n._propLookup[r] = o))),
            (t = e);
      return !1;
    }),
    (e._add = function (t, e, i, r, n) {
      this._addTween(t, e, i, i + r, e, n || Math.round),
        this._overwriteProps.push(e);
    }),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function (t, e, i, r) {
        var n, s;
        if ("function" != typeof t.setAttribute) return !1;
        for (n in e)
          "function" == typeof (s = e[n]) && (s = s(r, t)),
            this._addTween(
              t,
              "setAttribute",
              t.getAttribute(n) + "",
              s + "",
              n,
              !1,
              n
            ),
            this._overwriteProps.push(n);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, r) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var n,
          s,
          a,
          o,
          l,
          h,
          u = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (n in e)
          "useRadians" !== n &&
            ("function" == typeof (o = e[n]) && (o = o(r, t)),
            (s = (h = (o + "").split("_"))[0]),
            (a = parseFloat(
              "function" != typeof t[n]
                ? t[n]
                : t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]()
            )),
            (l =
              (o = this.finals[n] =
                "string" == typeof s && "=" === s.charAt(1)
                  ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                  : Number(s) || 0) - a),
            h.length &&
              (-1 !== (s = h.join("_")).indexOf("short") &&
                (l %= u) !== l % (u / 2) &&
                (l = l < 0 ? l + u : l - u),
              -1 !== s.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * u) % u) - ((l / u) | 0) * u)
                : -1 !== s.indexOf("ccw") &&
                  0 < l &&
                  (l = ((l - 9999999999 * u) % u) - ((l / u) | 0) * u)),
            (1e-6 < l || l < -1e-6) &&
              (this._addTween(t, n, a, a + l, n),
              this._overwriteProps.push(n)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (m) {
        function t(t, e) {
          var i = _("easing." + t, function () {}, !0),
            r = (i.prototype = new m());
          return (r.constructor = i), (r.getRatio = e), i;
        }
        function e(t, e, i, r, n) {
          var s = _(
            "easing." + t,
            { easeOut: new e(), easeIn: new i(), easeInOut: new r() },
            !0
          );
          return f(s, t), s;
        }
        function g(t, e, i) {
          (this.t = t),
            (this.v = e),
            i &&
              ((((this.next = i).prev = this).c = i.v - e),
              (this.gap = i.t - t));
        }
        function i(t, e) {
          var i = _(
              "easing." + t,
              function (t) {
                (this._p1 = t || 0 === t ? t : 1.70158),
                  (this._p2 = 1.525 * this._p1);
              },
              !0
            ),
            r = (i.prototype = new m());
          return (
            (r.constructor = i),
            (r.getRatio = e),
            (r.config = function (t) {
              return new i(t);
            }),
            i
          );
        }
        var r,
          n,
          s,
          a,
          o = _gsScope.GreenSockGlobals || _gsScope,
          l = o.com.greensock,
          h = 2 * Math.PI,
          u = Math.PI / 2,
          _ = l._class,
          f = m.register || function () {},
          c = e(
            "Back",
            i("BackOut", function (t) {
              return --t * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            i("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            i("BackInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          p = _(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : 1 < t && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          d = (p.prototype = new m());
        return (
          (d.constructor = p),
          (d.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 === t
                  ? 0
                  : 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (p.ease = new p(0.7, 0.7)),
          (d.config = p.config =
            function (t, e, i) {
              return new p(t, e, i);
            }),
          ((d = (r = _(
            "easing.SteppedEase",
            function (t, e) {
              (t = t || 1),
                (this._p1 = 1 / t),
                (this._p2 = t + (e ? 0 : 1)),
                (this._p3 = e ? 1 : 0);
            },
            !0
          )).prototype =
            new m()).constructor = r),
          (d.getRatio = function (t) {
            return (
              t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
              (((this._p2 * t) | 0) + this._p3) * this._p1
            );
          }),
          (d.config = r.config =
            function (t, e) {
              return new r(t, e);
            }),
          ((d = (n = _(
            "easing.ExpoScaleEase",
            function (t, e, i) {
              (this._p1 = Math.log(e / t)),
                (this._p2 = e - t),
                (this._p3 = t),
                (this._ease = i);
            },
            !0
          )).prototype =
            new m()).constructor = n),
          (d.getRatio = function (t) {
            return (
              this._ease && (t = this._ease.getRatio(t)),
              (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            );
          }),
          (d.config = n.config =
            function (t, e, i) {
              return new n(t, e, i);
            }),
          ((d = (s = _(
            "easing.RoughEase",
            function (t) {
              for (
                var e,
                  i,
                  r,
                  n,
                  s,
                  a,
                  o = (t = t || {}).taper || "none",
                  l = [],
                  h = 0,
                  u = 0 | (t.points || 20),
                  _ = u,
                  f = !1 !== t.randomize,
                  c = !0 === t.clamp,
                  p = t.template instanceof m ? t.template : null,
                  d = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                -1 < --_;

              )
                (e = f ? Math.random() : (1 / u) * _),
                  (i = p ? p.getRatio(e) : e),
                  (r =
                    "none" === o
                      ? d
                      : "out" === o
                      ? (n = 1 - e) * n * d
                      : "in" === o
                      ? e * e * d
                      : (n = e < 0.5 ? 2 * e : 2 * (1 - e)) * n * 0.5 * d),
                  f
                    ? (i += Math.random() * r - 0.5 * r)
                    : _ % 2
                    ? (i += 0.5 * r)
                    : (i -= 0.5 * r),
                  c && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                  (l[h++] = { x: e, y: i });
              for (
                l.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  a = new g(1, 1, null),
                  _ = u;
                -1 < --_;

              )
                (s = l[_]), (a = new g(s.x, s.y, a));
              this._prev = new g(0, 0, 0 !== a.t ? a : a.next);
            },
            !0
          )).prototype =
            new m()).constructor = s),
          (d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
          }),
          (d.config = function (t) {
            return new s(t);
          }),
          (s.ease = new s()),
          e(
            "Bounce",
            t("BounceOut", function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            t("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : t < 2 / 2.75
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            t("BounceInOut", function (t) {
              var e = t < 0.5;
              return (
                (t =
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          e(
            "Circ",
            t("CircOut", function (t) {
              return Math.sqrt(1 - --t * t);
            }),
            t("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            t("CircInOut", function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          e(
            "Elastic",
            (a = function (t, e, i) {
              var r = _(
                  "easing." + t,
                  function (t, e) {
                    (this._p1 = 1 <= t ? t : 1),
                      (this._p2 = (e || i) / (t < 1 ? t : 1)),
                      (this._p3 =
                        (this._p2 / h) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = h / this._p2);
                  },
                  !0
                ),
                n = (r.prototype = new m());
              return (
                (n.constructor = r),
                (n.getRatio = e),
                (n.config = function (t, e) {
                  return new r(t, e);
                }),
                r
              );
            })(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            a(
              "ElasticIn",
              function (t) {
                return (
                  -this._p1 *
                  Math.pow(2, 10 * --t) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            a(
              "ElasticInOut",
              function (t) {
                return (t *= 2) < 1
                  ? this._p1 *
                      Math.pow(2, 10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      -0.5
                  : this._p1 *
                      Math.pow(2, -10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          e(
            "Expo",
            t("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            t("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            t("ExpoInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          e(
            "Sine",
            t("SineOut", function (t) {
              return Math.sin(t * u);
            }),
            t("SineIn", function (t) {
              return 1 - Math.cos(t * u);
            }),
            t("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          _(
            "easing.EaseLookup",
            {
              find: function (t) {
                return m.map[t];
              },
            },
            !0
          ),
          f(o.SlowMo, "SlowMo", "ease,"),
          f(s, "RoughEase", "ease,"),
          f(r, "SteppedEase", "ease,"),
          c
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (f, c) {
    "use strict";
    var p = {},
      r = f.document,
      d = (f.GreenSockGlobals = f.GreenSockGlobals || f),
      t = d[c];
    if (t)
      return (
        "undefined" != typeof module && module.exports && (module.exports = t)
      );
    function m(t) {
      var e,
        i = t.split("."),
        r = d;
      for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
      return r;
    }
    function l(t) {
      var e,
        i = [],
        r = t.length;
      for (e = 0; e !== r; i.push(t[e++]));
      return i;
    }
    function g() {}
    var e,
      i,
      n,
      y,
      v,
      s,
      a,
      _ = m("com.greensock"),
      x = 1e-8,
      T =
        ((s = Object.prototype.toString),
        (a = s.call([])),
        function (t) {
          return (
            null != t &&
            (t instanceof Array ||
              ("object" == typeof t && !!t.push && s.call(t) === a))
          );
        }),
      w = {},
      b = function (o, l, h, u) {
        (this.sc = w[o] ? w[o].sc : []),
          ((w[o] = this).gsClass = null),
          (this.func = h);
        var _ = [];
        (this.check = function (t) {
          for (var e, i, r, n, s = l.length, a = s; -1 < --s; )
            (e = w[l[s]] || new b(l[s], [])).gsClass
              ? ((_[s] = e.gsClass), a--)
              : t && e.sc.push(this);
          if (0 === a && h) {
            if (
              ((r = (i = ("com.greensock." + o).split(".")).pop()),
              (n = m(i.join("."))[r] = this.gsClass = h.apply(h, _)),
              u)
            )
              if (
                ((d[r] = p[r] = n),
                "undefined" != typeof module && module.exports)
              )
                if (o === c)
                  for (s in ((module.exports = p[c] = n), p)) n[s] = p[s];
                else p[c] && (p[c][r] = n);
              else
                "function" == typeof define &&
                  define.amd &&
                  define(
                    (f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") +
                      o.split(".").pop(),
                    [],
                    function () {
                      return n;
                    }
                  );
            for (s = 0; s < this.sc.length; s++) this.sc[s].check();
          }
        }),
          this.check(!0);
      },
      o = (f._gsDefine = function (t, e, i, r) {
        return new b(t, e, i, r);
      }),
      P = (_._class = function (t, e, i) {
        return (
          (e = e || function () {}),
          o(
            t,
            [],
            function () {
              return e;
            },
            i
          ),
          e
        );
      });
    o.globals = d;
    var h = [0, 0, 1, 1],
      S = P(
        "easing.Ease",
        function (t, e, i, r) {
          (this._func = t),
            (this._type = i || 0),
            (this._power = r || 0),
            (this._params = e ? h.concat(e) : h);
        },
        !0
      ),
      O = (S.map = {}),
      u = (S.register = function (t, e, i, r) {
        for (
          var n,
            s,
            a,
            o,
            l = e.split(","),
            h = l.length,
            u = (i || "easeIn,easeOut,easeInOut").split(",");
          -1 < --h;

        )
          for (
            s = l[h],
              n = r ? P("easing." + s, null, !0) : _.easing[s] || {},
              a = u.length;
            -1 < --a;

          )
            (o = u[a]),
              (O[s + "." + o] =
                O[o + s] =
                n[o] =
                  t.getRatio ? t : t[o] || new t());
      });
    for (
      (n = S.prototype)._calcEnd = !1,
        n.getRatio = function (t) {
          if (this._func)
            return (this._params[0] = t), this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            r = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
          return (
            1 === i
              ? (r *= r)
              : 2 === i
              ? (r *= r * r)
              : 3 === i
              ? (r *= r * r * r)
              : 4 === i && (r *= r * r * r * r),
            1 === e ? 1 - r : 2 === e ? r : t < 0.5 ? r / 2 : 1 - r / 2
          );
        },
        i = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
      -1 < --i;

    )
      (n = e[i] + ",Power" + i),
        u(new S(null, null, 1, i), n, "easeOut", !0),
        u(new S(null, null, 2, i), n, "easeIn" + (0 === i ? ",easeNone" : "")),
        u(new S(null, null, 3, i), n, "easeInOut");
    (O.linear = _.easing.Linear.easeIn), (O.swing = _.easing.Quad.easeInOut);
    var k = P("events.EventDispatcher", function (t) {
      (this._listeners = {}), (this._eventTarget = t || this);
    });
    ((n = k.prototype).addEventListener = function (t, e, i, r, n) {
      n = n || 0;
      var s,
        a,
        o = this._listeners[t],
        l = 0;
      for (
        this !== y || v || y.wake(),
          null == o && (this._listeners[t] = o = []),
          a = o.length;
        -1 < --a;

      )
        (s = o[a]).c === e && s.s === i
          ? o.splice(a, 1)
          : 0 === l && s.pr < n && (l = a + 1);
      o.splice(l, 0, { c: e, s: i, up: r, pr: n });
    }),
      (n.removeEventListener = function (t, e) {
        var i,
          r = this._listeners[t];
        if (r)
          for (i = r.length; -1 < --i; )
            if (r[i].c === e) return void r.splice(i, 1);
      }),
      (n.dispatchEvent = function (t) {
        var e,
          i,
          r,
          n = this._listeners[t];
        if (n)
          for (
            1 < (e = n.length) && (n = n.slice(0)), i = this._eventTarget;
            -1 < --e;

          )
            (r = n[e]) &&
              (r.up
                ? r.c.call(r.s || i, { type: t, target: i })
                : r.c.call(r.s || i));
      });
    var C = f.requestAnimationFrame,
      R = f.cancelAnimationFrame,
      A =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      M = A();
    for (i = (e = ["ms", "moz", "webkit", "o"]).length; -1 < --i && !C; )
      (C = f[e[i] + "RequestAnimationFrame"]),
        (R =
          f[e[i] + "CancelAnimationFrame"] ||
          f[e[i] + "CancelRequestAnimationFrame"]);
    P("Ticker", function (t, e) {
      var n,
        s,
        a,
        o,
        l,
        h = this,
        u = A(),
        i = !(!1 === e || !C) && "auto",
        _ = 500,
        f = 33,
        c = function (t) {
          var e,
            i,
            r = A() - M;
          _ < r && (u += r - f),
            (M += r),
            (h.time = (M - u) / 1e3),
            (e = h.time - l),
            (!n || 0 < e || !0 === t) &&
              (h.frame++, (l += e + (o <= e ? 0.004 : o - e)), (i = !0)),
            !0 !== t && (a = s(c)),
            i && h.dispatchEvent("tick");
        };
      k.call(h),
        (h.time = h.frame = 0),
        (h.tick = function () {
          c(!0);
        }),
        (h.lagSmoothing = function (t, e) {
          return arguments.length
            ? ((_ = t || 1e8), void (f = Math.min(e, _, 0)))
            : _ < 1e8;
        }),
        (h.sleep = function () {
          null != a &&
            ((i && R ? R : clearTimeout)(a),
            (s = g),
            (a = null),
            h === y && (v = !1));
        }),
        (h.wake = function (t) {
          null !== a
            ? h.sleep()
            : t
            ? (u += -M + (M = A()))
            : 10 < h.frame && (M = A() - _ + 5),
            (s =
              0 === n
                ? g
                : i && C
                ? C
                : function (t) {
                    return setTimeout(t, (1e3 * (l - h.time) + 1) | 0);
                  }),
            h === y && (v = !0),
            c(2);
        }),
        (h.fps = function (t) {
          return arguments.length
            ? ((o = 1 / ((n = t) || 60)), (l = this.time + o), void h.wake())
            : n;
        }),
        (h.useRAF = function (t) {
          return arguments.length ? (h.sleep(), (i = t), void h.fps(n)) : i;
        }),
        h.fps(t),
        setTimeout(function () {
          "auto" === i &&
            h.frame < 5 &&
            "hidden" !== (r || {}).visibilityState &&
            h.useRAF(!1);
        }, 1500);
    }),
      ((n = _.Ticker.prototype = new _.events.EventDispatcher()).constructor =
        _.Ticker);
    var D = P("core.Animation", function (t, e) {
      if (
        ((this.vars = e = e || {}),
        (this._duration = this._totalDuration = t || 0),
        (this._delay = Number(e.delay) || 0),
        (this._timeScale = 1),
        (this._active = !!e.immediateRender),
        (this.data = e.data),
        (this._reversed = !!e.reversed),
        K)
      ) {
        v || y.wake();
        var i = this.vars.useFrames ? $ : K;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    (y = D.ticker = new _.Ticker()),
      ((n = D.prototype)._dirty = n._gc = n._initted = n._paused = !1),
      (n._totalTime = n._time = 0),
      (n._rawPrevTime = -1),
      (n._next = n._last = n._onUpdate = n._timeline = n.timeline = null),
      (n._paused = !1);
    var F = function () {
      v &&
        2e3 < A() - M &&
        ("hidden" !== (r || {}).visibilityState || !y.lagSmoothing()) &&
        y.wake();
      var t = setTimeout(F, 2e3);
      t.unref && t.unref();
    };
    F(),
      (n.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (n.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (n.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1);
      }),
      (n.seek = function (t, e) {
        return this.totalTime(Number(t), !1 !== e);
      }),
      (n.restart = function (t, e) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(t ? -this._delay : 0, !1 !== e, !0);
      }),
      (n.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.render = function (t, e, i) {}),
      (n.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (!this._gc && this.timeline) || this._enabled(!0),
          this
        );
      }),
      (n.isActive = function () {
        var t,
          e = this._timeline,
          i = this._startTime;
        return (
          !e ||
          (!this._gc &&
            !this._paused &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < i + this.totalDuration() / this._timeScale - x)
        );
      }),
      (n._enabled = function (t, e) {
        return (
          v || y.wake(),
          (this._gc = !t),
          (this._active = this.isActive()),
          !0 !== e &&
            (t && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !t && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (n._kill = function (t, e) {
        return this._enabled(!1, !1);
      }),
      (n.kill = function (t, e) {
        return this._kill(t, e), this;
      }),
      (n._uncache = function (t) {
        for (var e = t ? this : this.timeline; e; )
          (e._dirty = !0), (e = e.timeline);
        return this;
      }),
      (n._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); -1 < --e; )
          "{self}" === t[e] && (i[e] = this);
        return i;
      }),
      (n._callback = function (t) {
        var e = this.vars,
          i = e[t],
          r = e[t + "Params"],
          n = e[t + "Scope"] || e.callbackScope || this;
        switch (r ? r.length : 0) {
          case 0:
            i.call(n);
            break;
          case 1:
            i.call(n, r[0]);
            break;
          case 2:
            i.call(n, r[0], r[1]);
            break;
          default:
            i.apply(n, r);
        }
      }),
      (n.eventCallback = function (t, e, i, r) {
        if ("on" === (t || "").substr(0, 2)) {
          var n = this.vars;
          if (1 === arguments.length) return n[t];
          null == e
            ? delete n[t]
            : ((n[t] = e),
              (n[t + "Params"] =
                T(i) && -1 !== i.join("").indexOf("{self}")
                  ? this._swapSelfInParams(i)
                  : i),
              (n[t + "Scope"] = r)),
            "onUpdate" === t && (this._onUpdate = e);
        }
        return this;
      }),
      (n.delay = function (t) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (n.duration = function (t) {
        return arguments.length
          ? ((this._duration = this._totalDuration = t),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              0 < this._time &&
              this._time < this._duration &&
              0 !== t &&
              this.totalTime(this._totalTime * (t / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (n.totalDuration = function (t) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(t) : this._totalDuration
        );
      }),
      (n.time = function (t, e) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e))
          : this._time;
      }),
      (n.totalTime = function (t, e, i) {
        if ((v || y.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (t < 0 && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var r = this._totalDuration,
              n = this._timeline;
            if (
              (r < t && !i && (t = r),
              (this._startTime =
                (this._paused ? this._pauseTime : n._time) -
                (this._reversed ? r - t : t) / this._timeScale),
              n._dirty || this._uncache(!1),
              n._timeline)
            )
              for (; n._timeline; )
                n._timeline._time !==
                  (n._startTime + n._totalTime) / n._timeScale &&
                  n.totalTime(n._totalTime, !0),
                  (n = n._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime === t && 0 !== this._duration) ||
              (B.length && tt(), this.render(t, e, !1), B.length && tt());
        }
        return this;
      }),
      (n.progress = n.totalProgress =
        function (t, e) {
          var i = this.duration();
          return arguments.length
            ? this.totalTime(i * t, e)
            : i
            ? this._time / i
            : this.ratio;
        }),
      (n.startTime = function (t) {
        return arguments.length
          ? (t !== this._startTime &&
              ((this._startTime = t),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, t - this._delay)),
            this)
          : this._startTime;
      }),
      (n.endTime = function (t) {
        return (
          this._startTime +
          (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (n.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        var e, i;
        for (
          t = t || x,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((i =
                (e = this._pauseTime) || 0 === e
                  ? e
                  : this._timeline.totalTime()),
              (this._startTime =
                i - ((i - this._startTime) * this._timeScale) / t)),
            this._timeScale = t,
            i = this.timeline;
          i && i.timeline;

        )
          (i._dirty = !0), i.totalDuration(), (i = i.timeline);
        return this;
      }),
      (n.reversed = function (t) {
        return arguments.length
          ? (t != this._reversed &&
              ((this._reversed = t),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (n.paused = function (t) {
        if (!arguments.length) return this._paused;
        var e,
          i,
          r = this._timeline;
        return (
          t != this._paused &&
            r &&
            (v || t || y.wake(),
            (i = (e = r.rawTime()) - this._pauseTime),
            !t &&
              r.smoothChildTiming &&
              ((this._startTime += i), this._uncache(!1)),
            (this._pauseTime = t ? e : null),
            (this._paused = t),
            (this._active = this.isActive()),
            !t &&
              0 != i &&
              this._initted &&
              this.duration() &&
              ((e = r.smoothChildTiming
                ? this._totalTime
                : (e - this._startTime) / this._timeScale),
              this.render(e, e === this._totalTime, !0))),
          this._gc && !t && this._enabled(!0, !1),
          this
        );
      });
    var L = P("core.SimpleTimeline", function (t) {
      D.call(this, 0, t),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    ((n = L.prototype = new D()).constructor = L),
      (n.kill()._gc = !1),
      (n._first = n._last = n._recent = null),
      (n._sortChildren = !1),
      (n.add = n.insert =
        function (t, e, i, r) {
          var n, s;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused &&
              this !== t._timeline &&
              (t._pauseTime =
                this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (n = this._last),
            this._sortChildren)
          )
            for (s = t._startTime; n && n._startTime > s; ) n = n._prev;
          return (
            n
              ? ((t._next = n._next), (n._next = t))
              : ((t._next = this._first), (this._first = t)),
            t._next ? (t._next._prev = t) : (this._last = t),
            (t._prev = n),
            (this._recent = t),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (n._remove = function (t, e) {
        return (
          t.timeline === this &&
            (e || t._enabled(!1, !0),
            t._prev
              ? (t._prev._next = t._next)
              : this._first === t && (this._first = t._next),
            t._next
              ? (t._next._prev = t._prev)
              : this._last === t && (this._last = t._prev),
            (t._next = t._prev = t.timeline = null),
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (n.render = function (t, e, i) {
        var r,
          n = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; n; )
          (r = n._next),
            (n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
              (n._reversed
                ? n.render(
                    (n._dirty ? n.totalDuration() : n._totalDuration) -
                      (t - n._startTime) * n._timeScale,
                    e,
                    i
                  )
                : n.render((t - n._startTime) * n._timeScale, e, i)),
            (n = r);
      }),
      (n.rawTime = function () {
        return v || y.wake(), this._totalTime;
      });
    function z(t) {
      return (
        t &&
        t.length &&
        t !== f &&
        t[0] &&
        (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType))
      );
    }
    var E = P(
      "TweenLite",
      function (t, e, i) {
        if ((D.call(this, e, i), (this.render = E.prototype.render), null == t))
          throw "Cannot tween a null target.";
        this.target = t = "string" != typeof t ? t : E.selector(t) || t;
        var r,
          n,
          s,
          a =
            t.jquery ||
            (t.length &&
              t !== f &&
              t[0] &&
              (t[0] === f || (t[0].nodeType && t[0].style && !t.nodeType))),
          o = this.vars.overwrite;
        if (
          ((this._overwrite = o =
            null == o
              ? Z[E.defaultOverwrite]
              : "number" == typeof o
              ? o >> 0
              : Z[o]),
          (a || t instanceof Array || (t.push && T(t))) &&
            "number" != typeof t[0])
        )
          for (
            this._targets = s = l(t),
              this._propLookup = [],
              this._siblings = [],
              r = 0;
            r < s.length;
            r++
          )
            (n = s[r])
              ? "string" != typeof n
                ? n.length &&
                  n !== f &&
                  n[0] &&
                  (n[0] === f || (n[0].nodeType && n[0].style && !n.nodeType))
                  ? (s.splice(r--, 1), (this._targets = s = s.concat(l(n))))
                  : ((this._siblings[r] = it(n, this, !1)),
                    1 === o &&
                      1 < this._siblings[r].length &&
                      rt(n, this, null, 1, this._siblings[r]))
                : "string" == typeof (n = s[r--] = E.selector(n)) &&
                  s.splice(r + 1, 1)
              : s.splice(r--, 1);
        else
          (this._propLookup = {}),
            (this._siblings = it(t, this, !1)),
            1 === o &&
              1 < this._siblings.length &&
              rt(t, this, null, 1, this._siblings);
        (this.vars.immediateRender ||
          (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) &&
          ((this._time = -x), this.render(Math.min(0, -this._delay)));
      },
      !0
    );
    ((n = E.prototype = new D()).constructor = E),
      (n.kill()._gc = !1),
      (n.ratio = 0),
      (n._firstPT = n._targets = n._overwrittenProps = n._startAt = null),
      (n._notifyPluginsOfEnabled = n._lazy = !1),
      (E.version = "2.1.3"),
      (E.defaultEase = n._ease = new S(null, null, 1, 1)),
      (E.defaultOverwrite = "auto"),
      (E.ticker = y),
      (E.autoSleep = 120),
      (E.lagSmoothing = function (t, e) {
        y.lagSmoothing(t, e);
      }),
      (E.selector =
        f.$ ||
        f.jQuery ||
        function (t) {
          var e = f.$ || f.jQuery;
          return e
            ? (E.selector = e)(t)
            : (r = r || f.document)
            ? r.querySelectorAll
              ? r.querySelectorAll(t)
              : r.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            : t;
        });
    function I(t) {
      for (var e, i = this._firstPT; i; )
        (e = i.blob
          ? 1 === t && null != this.end
            ? this.end
            : t
            ? this.join("")
            : this.start
          : i.c * t + i.s),
          i.m
            ? (e = i.m.call(this._tween, e, this._target || i.t, this._tween))
            : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
          i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
          (i = i._next);
    }
    function N(t) {
      return ((1e3 * t) | 0) / 1e3 + "";
    }
    function j(t, e, i, r) {
      var n,
        s,
        a,
        o,
        l,
        h,
        u,
        _ = [],
        f = 0,
        c = "",
        p = 0;
      for (
        _.start = t,
          _.end = e,
          t = _[0] = t + "",
          e = _[1] = e + "",
          i && (i(_), (t = _[0]), (e = _[1])),
          _.length = 0,
          n = t.match(G) || [],
          s = e.match(G) || [],
          r && ((r._next = null), (r.blob = 1), (_._firstPT = _._applyPT = r)),
          l = s.length,
          o = 0;
        o < l;
        o++
      )
        (u = s[o]),
          (c += (h = e.substr(f, e.indexOf(u, f) - f)) || !o ? h : ","),
          (f += h.length),
          p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
          u === n[o] || n.length <= o
            ? (c += u)
            : (c && (_.push(c), (c = "")),
              (a = parseFloat(n[o])),
              _.push(a),
              (_._firstPT = {
                _next: _._firstPT,
                t: _,
                p: _.length - 1,
                s: a,
                c:
                  ("=" === u.charAt(1)
                    ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2))
                    : parseFloat(u) - a) || 0,
                f: 0,
                m: p && p < 4 ? Math.round : N,
              })),
          (f += u.length);
      return (
        (c += e.substr(f)) && _.push(c),
        (_.setRatio = I),
        U.test(e) && (_.end = null),
        _
      );
    }
    function X(t, e, i, r, n, s, a, o, l) {
      "function" == typeof r && (r = r(l || 0, t));
      var h = typeof t[e],
        u =
          "function" != h
            ? ""
            : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)]
            ? e
            : "get" + e.substr(3),
        _ = "get" !== i ? i : u ? (a ? t[u](a) : t[u]()) : t[e],
        f = "string" == typeof r && "=" === r.charAt(1),
        c = {
          t: t,
          p: e,
          s: _,
          f: "function" == h,
          pg: 0,
          n: n || e,
          m: s ? ("function" == typeof s ? s : Math.round) : 0,
          pr: 0,
          c: f
            ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2))
            : parseFloat(r) - _ || 0,
        };
      return (
        ("number" == typeof _ && ("number" == typeof r || f)) ||
          (a ||
          isNaN(_) ||
          (!f && isNaN(r)) ||
          "boolean" == typeof _ ||
          "boolean" == typeof r
            ? ((c.fp = a),
              (c = {
                t: j(
                  _,
                  f
                    ? parseFloat(c.s) +
                        c.c +
                        (c.s + "").replace(/[0-9\-\.]/g, "")
                    : r,
                  o || E.defaultStringFilter,
                  c
                ),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: n || e,
                pr: 0,
                m: 0,
              }))
            : ((c.s = parseFloat(_)), f || (c.c = parseFloat(r) - c.s || 0))),
        c.c
          ? ((c._next = this._firstPT) && (c._next._prev = c),
            (this._firstPT = c))
          : void 0
      );
    }
    var B = [],
      Y = {},
      G = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      U = /[\+-]=-?[\.\d]/,
      V = (E._internals = {
        isArray: T,
        isSelector: z,
        lazyTweens: B,
        blobDif: j,
      }),
      q = (E._plugins = {}),
      W = (V.tweenLookup = {}),
      Q = 0,
      H = (V.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1,
      }),
      Z = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      $ = (D._rootFramesTimeline = new L()),
      K = (D._rootTimeline = new L()),
      J = 30,
      tt = (V.lazyRender = function () {
        var t,
          e,
          i = B.length;
        for (Y = {}, t = 0; t < i; t++)
          (e = B[t]) &&
            !1 !== e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
        B.length = 0;
      });
    (K._startTime = y.time),
      ($._startTime = y.frame),
      (K._active = $._active = !0),
      setTimeout(tt, 1),
      (D._updateRoot = E.render =
        function () {
          var t, e, i;
          if (
            (B.length && tt(),
            K.render((y.time - K._startTime) * K._timeScale, !1, !1),
            $.render((y.frame - $._startTime) * $._timeScale, !1, !1),
            B.length && tt(),
            y.frame >= J)
          ) {
            for (i in ((J = y.frame + (parseInt(E.autoSleep, 10) || 120)), W)) {
              for (t = (e = W[i].tweens).length; -1 < --t; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete W[i];
            }
            if (
              (!(i = K._first) || i._paused) &&
              E.autoSleep &&
              !$._first &&
              1 === y._listeners.tick.length
            ) {
              for (; i && i._paused; ) i = i._next;
              i || y.sleep();
            }
          }
        }),
      y.addEventListener("tick", D._updateRoot);
    function et(t, e, i, r) {
      var n,
        s,
        a = t.vars.onOverwrite;
      return (
        a && (n = a(t, e, i, r)),
        (a = E.onOverwrite) && (s = a(t, e, i, r)),
        !1 !== n && !1 !== s
      );
    }
    var it = function (t, e, i) {
        var r,
          n,
          s = t._gsTweenID;
        if (
          (W[s || (t._gsTweenID = s = "t" + Q++)] ||
            (W[s] = { target: t, tweens: [] }),
          e && (((r = W[s].tweens)[(n = r.length)] = e), i))
        )
          for (; -1 < --n; ) r[n] === e && r.splice(n, 1);
        return W[s].tweens;
      },
      rt = function (t, e, i, r, n) {
        var s, a, o, l;
        if (1 === r || 4 <= r) {
          for (l = n.length, s = 0; s < l; s++)
            if ((o = n[s]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
            else if (5 === r) break;
          return a;
        }
        var h,
          u = e._startTime + x,
          _ = [],
          f = 0,
          c = 0 === e._duration;
        for (s = n.length; -1 < --s; )
          (o = n[s]) === e ||
            o._gc ||
            o._paused ||
            (o._timeline !== e._timeline
              ? ((h = h || nt(e, 0, c)), 0 === nt(o, h, c) && (_[f++] = o))
              : o._startTime <= u &&
                o._startTime + o.totalDuration() / o._timeScale > u &&
                (((c || !o._initted) && u - o._startTime <= 2e-8) ||
                  (_[f++] = o)));
        for (s = f; -1 < --s; )
          if (
            ((l = (o = _[s])._firstPT),
            2 === r && o._kill(i, t, e) && (a = !0),
            2 !== r || (!o._firstPT && o._initted && l))
          ) {
            if (2 !== r && !et(o, e)) continue;
            o._enabled(!1, !1) && (a = !0);
          }
        return a;
      },
      nt = function (t, e, i) {
        for (
          var r = t._timeline, n = r._timeScale, s = t._startTime;
          r._timeline;

        ) {
          if (((s += r._startTime), (n *= r._timeScale), r._paused))
            return -100;
          r = r._timeline;
        }
        return e < (s /= n)
          ? s - e
          : (i && s === e) || (!t._initted && s - e < 2e-8)
          ? x
          : (s += t.totalDuration() / t._timeScale / n) > e + x
          ? 0
          : s - e - x;
      };
    (n._init = function () {
      var t,
        e,
        i,
        r,
        n,
        s,
        a = this.vars,
        o = this._overwrittenProps,
        l = this._duration,
        h = !!a.immediateRender,
        u = a.ease,
        _ = this._startAt;
      if (a.startAt) {
        for (r in (_ && (_.render(-1, !0), _.kill()), (n = {}), a.startAt))
          n[r] = a.startAt[r];
        if (
          ((n.data = "isStart"),
          (n.overwrite = !1),
          (n.immediateRender = !0),
          (n.lazy = h && !1 !== a.lazy),
          (n.startAt = n.delay = null),
          (n.onUpdate = a.onUpdate),
          (n.onUpdateParams = a.onUpdateParams),
          (n.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
          (this._startAt = E.to(this.target || {}, 0, n)),
          h)
        )
          if (0 < this._time) this._startAt = null;
          else if (0 !== l) return;
      } else if (a.runBackwards && 0 !== l)
        if (_) _.render(-1, !0), _.kill(), (this._startAt = null);
        else {
          for (r in (0 !== this._time && (h = !1), (i = {}), a))
            (H[r] && "autoCSS" !== r) || (i[r] = a[r]);
          if (
            ((i.overwrite = 0),
            (i.data = "isFromStart"),
            (i.lazy = h && !1 !== a.lazy),
            (i.immediateRender = h),
            (this._startAt = E.to(this.target, 0, i)),
            h)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = u =
          u
            ? u instanceof S
              ? u
              : "function" == typeof u
              ? new S(u, a.easeParams)
              : O[u] || E.defaultEase
            : E.defaultEase),
        a.easeParams instanceof Array &&
          u.config &&
          (this._ease = u.config.apply(u, a.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (s = this._targets.length, t = 0; t < s; t++)
          this._initProps(
            this._targets[t],
            (this._propLookup[t] = {}),
            this._siblings[t],
            o ? o[t] : null,
            t
          ) && (e = !0);
      else
        e = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          o,
          0
        );
      if (
        (e && E._onPluginEvent("_onInitAllProps", this),
        o &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        a.runBackwards)
      )
        for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
      (this._onUpdate = a.onUpdate), (this._initted = !0);
    }),
      (n._initProps = function (t, e, i, r, n) {
        var s, a, o, l, h, u;
        if (null == t) return !1;
        for (s in (Y[t._gsTweenID] && tt(),
        this.vars.css ||
          (t.style &&
            t !== f &&
            t.nodeType &&
            q.css &&
            !1 !== this.vars.autoCSS &&
            (function (t, e) {
              var i,
                r = {};
              for (i in t)
                H[i] ||
                  (i in e &&
                    "transform" !== i &&
                    "x" !== i &&
                    "y" !== i &&
                    "width" !== i &&
                    "height" !== i &&
                    "className" !== i &&
                    "border" !== i) ||
                  !(!q[i] || (q[i] && q[i]._autoCSS)) ||
                  ((r[i] = t[i]), delete t[i]);
              t.css = r;
            })(this.vars, t)),
        this.vars))
          if (((u = this.vars[s]), H[s]))
            u &&
              (u instanceof Array || (u.push && T(u))) &&
              -1 !== u.join("").indexOf("{self}") &&
              (this.vars[s] = u = this._swapSelfInParams(u, this));
          else if (
            q[s] &&
            (l = new q[s]())._onInitTween(t, this.vars[s], this, n)
          ) {
            for (
              this._firstPT = h =
                {
                  _next: this._firstPT,
                  t: l,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: s,
                  pg: 1,
                  pr: l._priority,
                  m: 0,
                },
                a = l._overwriteProps.length;
              -1 < --a;

            )
              e[l._overwriteProps[a]] = this._firstPT;
            (l._priority || l._onInitAllProps) && (o = !0),
              (l._onDisable || l._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              h._next && (h._next._prev = h);
          } else
            e[s] = X.call(
              this,
              t,
              s,
              "get",
              u,
              s,
              0,
              null,
              this.vars.stringFilter,
              n
            );
        return r && this._kill(r, t)
          ? this._initProps(t, e, i, r, n)
          : 1 < this._overwrite &&
            this._firstPT &&
            1 < i.length &&
            rt(t, this, e, this._overwrite, i)
          ? (this._kill(e, t), this._initProps(t, e, i, r, n))
          : (this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (Y[t._gsTweenID] = !0),
            o);
      }),
      (n.render = function (t, e, i) {
        var r,
          n,
          s,
          a,
          o = this,
          l = o._time,
          h = o._duration,
          u = o._rawPrevTime;
        if (h - x <= t && 0 <= t)
          (o._totalTime = o._time = h),
            (o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1),
            o._reversed ||
              ((r = !0),
              (n = "onComplete"),
              (i = i || o._timeline.autoRemoveChildren)),
            0 !== h ||
              (!o._initted && o.vars.lazy && !i) ||
              (o._startTime === o._timeline._duration && (t = 0),
              (u < 0 ||
                (t <= 0 && -x <= t) ||
                (u === x && "isPause" !== o.data)) &&
                u !== t &&
                ((i = !0), x < u && (n = "onReverseComplete")),
              (o._rawPrevTime = a = !e || t || u === t ? t : x));
        else if (t < x)
          (o._totalTime = o._time = 0),
            (o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0),
            (0 !== l || (0 === h && 0 < u)) &&
              ((n = "onReverseComplete"), (r = o._reversed)),
            -x < t
              ? (t = 0)
              : t < 0 &&
                ((o._active = !1),
                0 !== h ||
                  (!o._initted && o.vars.lazy && !i) ||
                  (0 <= u && (u !== x || "isPause" !== o.data) && (i = !0),
                  (o._rawPrevTime = a = !e || t || u === t ? t : x))),
            (!o._initted || (o._startAt && o._startAt.progress())) && (i = !0);
        else if (((o._totalTime = o._time = t), o._easeType)) {
          var _ = t / h,
            f = o._easeType,
            c = o._easePower;
          (1 === f || (3 === f && 0.5 <= _)) && (_ = 1 - _),
            3 === f && (_ *= 2),
            1 === c
              ? (_ *= _)
              : 2 === c
              ? (_ *= _ * _)
              : 3 === c
              ? (_ *= _ * _ * _)
              : 4 === c && (_ *= _ * _ * _ * _),
            (o.ratio =
              1 === f ? 1 - _ : 2 === f ? _ : t / h < 0.5 ? _ / 2 : 1 - _ / 2);
        } else o.ratio = o._ease.getRatio(t / h);
        if (o._time !== l || i) {
          if (!o._initted) {
            if ((o._init(), !o._initted || o._gc)) return;
            if (
              !i &&
              o._firstPT &&
              ((!1 !== o.vars.lazy && o._duration) ||
                (o.vars.lazy && !o._duration))
            )
              return (
                (o._time = o._totalTime = l),
                (o._rawPrevTime = u),
                B.push(o),
                void (o._lazy = [t, e])
              );
            o._time && !r
              ? (o.ratio = o._ease.getRatio(o._time / h))
              : r &&
                o._ease._calcEnd &&
                (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1));
          }
          for (
            !1 !== o._lazy && (o._lazy = !1),
              o._active ||
                (!o._paused && o._time !== l && 0 <= t && (o._active = !0)),
              0 === l &&
                (o._startAt &&
                  (0 <= t
                    ? o._startAt.render(t, !0, i)
                    : (n = n || "_dummyGS")),
                !o.vars.onStart ||
                  (0 === o._time && 0 !== h) ||
                  e ||
                  o._callback("onStart")),
              s = o._firstPT;
            s;

          )
            s.f
              ? s.t[s.p](s.c * o.ratio + s.s)
              : (s.t[s.p] = s.c * o.ratio + s.s),
              (s = s._next);
          o._onUpdate &&
            (t < 0 && o._startAt && -1e-4 !== t && o._startAt.render(t, !0, i),
            e || ((o._time !== l || r || i) && o._callback("onUpdate"))),
            !n ||
              (o._gc && !i) ||
              (t < 0 &&
                o._startAt &&
                !o._onUpdate &&
                -1e-4 !== t &&
                o._startAt.render(t, !0, i),
              r &&
                (o._timeline.autoRemoveChildren && o._enabled(!1, !1),
                (o._active = !1)),
              !e && o.vars[n] && o._callback(n),
              0 === h &&
                o._rawPrevTime === x &&
                a !== x &&
                (o._rawPrevTime = 0));
        }
      }),
      (n._kill = function (t, e, i) {
        if (
          ("all" === t && (t = null),
          null == t && (null == e || e === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        e =
          "string" != typeof e
            ? e || this._targets || this.target
            : E.selector(e) || e;
        var r,
          n,
          s,
          a,
          o,
          l,
          h,
          u,
          _,
          f =
            i &&
            this._time &&
            i._startTime === this._startTime &&
            this._timeline === i._timeline,
          c = this._firstPT;
        if ((T(e) || z(e)) && "number" != typeof e[0])
          for (r = e.length; -1 < --r; ) this._kill(t, e[r], i) && (l = !0);
        else {
          if (this._targets) {
            for (r = this._targets.length; -1 < --r; )
              if (e === this._targets[r]) {
                (o = this._propLookup[r] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (n = this._overwrittenProps[r] =
                    t ? this._overwrittenProps[r] || {} : "all");
                break;
              }
          } else {
            if (e !== this.target) return !1;
            (o = this._propLookup),
              (n = this._overwrittenProps =
                t ? this._overwrittenProps || {} : "all");
          }
          if (o) {
            if (
              ((h = t || o),
              (u =
                t !== n &&
                "all" !== n &&
                t !== o &&
                ("object" != typeof t || !t._tempKill)),
              i && (E.onOverwrite || this.vars.onOverwrite))
            ) {
              for (s in h) o[s] && (_ = _ || []).push(s);
              if ((_ || !t) && !et(this, i, e, _)) return !1;
            }
            for (s in h)
              (a = o[s]) &&
                (f && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                a.pg && a.t._kill(h) && (l = !0),
                (a.pg && 0 !== a.t._overwriteProps.length) ||
                  (a._prev
                    ? (a._prev._next = a._next)
                    : a === this._firstPT && (this._firstPT = a._next),
                  a._next && (a._next._prev = a._prev),
                  (a._next = a._prev = null)),
                delete o[s]),
                u && (n[s] = 1);
            !this._firstPT && this._initted && c && this._enabled(!1, !1);
          }
        }
        return l;
      }),
      (n.invalidate = function () {
        this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this);
        var t = this._time;
        return (
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          D.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -x), this.render(t, !1, !1 !== this.vars.lazy)),
          this
        );
      }),
      (n._enabled = function (t, e) {
        if ((v || y.wake(), t && this._gc)) {
          var i,
            r = this._targets;
          if (r)
            for (i = r.length; -1 < --i; )
              this._siblings[i] = it(r[i], this, !0);
          else this._siblings = it(this.target, this, !0);
        }
        return (
          D.prototype._enabled.call(this, t, e),
          !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
            E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        );
      }),
      (E.to = function (t, e, i) {
        return new E(t, e, i);
      }),
      (E.from = function (t, e, i) {
        return (
          (i.runBackwards = !0),
          (i.immediateRender = 0 != i.immediateRender),
          new E(t, e, i)
        );
      }),
      (E.fromTo = function (t, e, i, r) {
        return (
          (r.startAt = i),
          (r.immediateRender =
            0 != r.immediateRender && 0 != i.immediateRender),
          new E(t, e, r)
        );
      }),
      (E.delayedCall = function (t, e, i, r, n) {
        return new E(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          callbackScope: r,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: n,
          overwrite: 0,
        });
      }),
      (E.set = function (t, e) {
        return new E(t, 0, e);
      }),
      (E.getTweensOf = function (t, e) {
        if (null == t) return [];
        var i, r, n, s;
        if (
          ((t = "string" != typeof t ? t : E.selector(t) || t),
          (T(t) || z(t)) && "number" != typeof t[0])
        ) {
          for (i = t.length, r = []; -1 < --i; )
            r = r.concat(E.getTweensOf(t[i], e));
          for (i = r.length; -1 < --i; )
            for (s = r[i], n = i; -1 < --n; ) s === r[n] && r.splice(i, 1);
        } else if (t._gsTweenID)
          for (i = (r = it(t).concat()).length; -1 < --i; )
            (r[i]._gc || (e && !r[i].isActive())) && r.splice(i, 1);
        return r || [];
      }),
      (E.killTweensOf = E.killDelayedCallsTo =
        function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var r = E.getTweensOf(t, e), n = r.length; -1 < --n; )
            r[n]._kill(i, t);
        });
    var st = P(
      "plugins.TweenPlugin",
      function (t, e) {
        (this._overwriteProps = (t || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = e || 0),
          (this._super = st.prototype);
      },
      !0
    );
    if (
      ((n = st.prototype),
      (st.version = "1.19.0"),
      (st.API = 2),
      (n._firstPT = null),
      (n._addTween = X),
      (n.setRatio = I),
      (n._kill = function (t) {
        var e,
          i = this._overwriteProps,
          r = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; -1 < --e; ) null != t[i[e]] && i.splice(e, 1);
        for (; r; )
          null != t[r.n] &&
            (r._next && (r._next._prev = r._prev),
            r._prev
              ? ((r._prev._next = r._next), (r._prev = null))
              : this._firstPT === r && (this._firstPT = r._next)),
            (r = r._next);
        return !1;
      }),
      (n._mod = n._roundProps =
        function (t) {
          for (var e, i = this._firstPT; i; )
            (e =
              t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              "function" == typeof e &&
              (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
              (i = i._next);
        }),
      (E._onPluginEvent = function (t, e) {
        var i,
          r,
          n,
          s,
          a,
          o = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; o; ) {
            for (a = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
            (o._prev = r ? r._prev : s) ? (o._prev._next = o) : (n = o),
              (o._next = r) ? (r._prev = o) : (s = o),
              (o = a);
          }
          o = e._firstPT = n;
        }
        for (; o; )
          o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            (o = o._next);
        return i;
      }),
      (st.activate = function (t) {
        for (var e = t.length; -1 < --e; )
          t[e].API === st.API && (q[new t[e]()._propName] = t[e]);
        return !0;
      }),
      (o.plugin = function (t) {
        if (!(t && t.propName && t.init && t.API))
          throw "illegal plugin definition.";
        var e,
          i = t.propName,
          r = t.priority || 0,
          n = t.overwriteProps,
          s = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          a = P(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
              st.call(this, i, r), (this._overwriteProps = n || []);
            },
            !0 === t.global
          ),
          o = (a.prototype = new st(i));
        for (e in (((o.constructor = a).API = t.API), s))
          "function" == typeof t[e] && (o[s[e]] = t[e]);
        return (a.version = t.version), st.activate([a]), a;
      }),
      (e = f._gsQueue))
    ) {
      for (i = 0; i < e.length; i++) e[i]();
      for (n in w)
        w[n].func || f.console.log("GSAP encountered missing dependency: " + n);
    }
    v = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  ),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "undefined" != typeof exports
      ? (module.exports = t())
      : t();
  })(function () {
    (void 0 !== LS_GSAP ? LS_GSAP : window).SplitType = (function (C, l, s) {
      function h(t) {
        return null !== t && "object" == typeof t;
      }
      function u(t) {
        return h(t) && "number" == typeof t.length && 0 < t.length;
      }
      function _(t) {
        return h(t) && /^(1|3|11)$/.test(t.nodeType);
      }
      function R(t, e, i) {
        for (
          var r = Object(t),
            n = u(r)
              ? r
              : h((o = r)) &&
                "[object Object]" === Object.prototype.toString.call(o)
              ? c(r)
              : [r],
            s = parseInt(n.length) || 0,
            a = 0;
          a < s;
          a++
        )
          e.call(i, n[a], a, r);
        var o;
      }
      function i(i, r) {
        return (
          (i = Object(i)),
          (r = Object(r)),
          Object.getOwnPropertyNames(i).reduce(function (t, e) {
            return n(t, e, p(r, e) || p(i, e));
          }, {})
        );
      }
      function A(t, e, i) {
        var r,
          n = {};
        return (
          h(t) && ((r = t[a] || (t[a] = ++f)), (n = o[r] || (o[r] = {}))),
          i === s ? (e === s ? n : n[e]) : e !== s ? (n[e] = i) : void 0
        );
      }
      function M(t, i) {
        var r = l.createElement(t);
        return (
          i === s ||
            R(i, function (t) {
              var e = i[t];
              if (null !== e)
                switch (t) {
                  case "textContent":
                    r.textContent = e;
                    break;
                  case "innerHTML":
                    r.innerHTML = e;
                    break;
                  case "children":
                    R(e, function (t) {
                      _(t) && r.appendChild(t);
                    });
                    break;
                  default:
                    r.setAttribute(t, e);
                }
            }),
          r
        );
      }
      function r(t, e) {
        return this instanceof r
          ? ((this.isSplit = !1),
            (this.settings = i(d, e)),
            (this.elements = (function (t) {
              var e,
                i,
                r,
                n,
                s,
                a,
                o = [];
              if (
                ("string" == typeof t &&
                  (t =
                    "#" === (e = t.trim())[0] && !/[^\w]/.test((i = e.slice(1)))
                      ? l.getElementById(i)
                      : l.querySelectorAll(e)),
                e || _(t))
              )
                return _(t) ? [t] : F.call(t);
              if (u(t))
                for (s = 0, r = t.length; s < r; s++)
                  if (u(t[s]))
                    for (a = 0, n = t[s].length; a < n; a++)
                      _(t[s][a]) && o.push(t[s][a]);
                  else _(t[s]) && o.push(t[s]);
              return o;
            })(t)),
            void (
              this.elements.length &&
              ((this.originals = this.elements.map(function (t) {
                return (A(t).html = A(t).html || t.innerHTML);
              })),
              this.split())
            ))
          : new r(t, e);
      }
      if (l.addEventListener && Function.prototype.bind) {
        var a = "splitType" + +new Date(),
          o = {},
          f = 0,
          D = Array.prototype.push,
          F = Array.prototype.slice,
          c = Object.keys,
          n = (Object.prototype.hasOwnProperty, Object.defineProperty),
          p = (Object.defineProperties, Object.getOwnPropertyDescriptor),
          L = l.createDocumentFragment.bind(l),
          z = l.createTextNode.bind(l),
          d = {
            splitClass: "",
            lineClass: "line",
            wordClass: "word",
            charClass: "char",
            split: "lines, words, chars",
            position: "relative",
            absolute: !1,
            tagName: "div",
            DEBUG: !1,
          };
        return (
          n(r, "defaults", {
            get: function () {
              return d;
            },
            set: function (t) {
              d = i(d, t);
            },
          }),
          (r.prototype.split = function (t) {
            this.revert(),
              (this.lines = []),
              (this.words = []),
              (this.chars = []),
              t !== s && (this.settings = i(this.settings, t)),
              R(
                this.elements,
                function (t) {
                  (function (t) {
                    var e,
                      i,
                      r,
                      n,
                      s = this.settings,
                      a = s.tagName,
                      o = "B" + +new Date() + "R",
                      l = s.split,
                      h = -1 !== l.indexOf("lines"),
                      u = -1 !== l.indexOf("words"),
                      _ = -1 !== l.indexOf("chars"),
                      f = "absolute" === s.position || !0 === s.absolute,
                      c = M("div"),
                      p = [],
                      d = [];
                    if (
                      ((r = h ? M("div") : L()),
                      (c.innerHTML = t.innerHTML.replace(
                        /<br\s*\/?>/g,
                        " " + o + " "
                      )),
                      (n = c.textContent
                        .replace(/\s+/g, " ")
                        .trim()
                        .split(" ")
                        .map(function (t) {
                          if (t === o) return r.appendChild(M("br")), null;
                          if (_) {
                            var e = t.split("").map(function (t) {
                              return M(a, {
                                class: s.charClass + " " + s.splitClass,
                                style: "display: inline-block;",
                                textContent: t,
                              });
                            });
                            D.apply(d, e);
                          }
                          return (
                            u || h
                              ? ((i = M(a, {
                                  class: s.wordClass + " " + s.splitClass,
                                  style:
                                    "display: inline-block; position:" +
                                    (u ? "relative" : "static;"),
                                  children: _ ? e : null,
                                  textContent: _ ? null : t,
                                })),
                                r.appendChild(i))
                              : R(e, function (t) {
                                  r.appendChild(t);
                                }),
                            r.appendChild(z(" ")),
                            i
                          );
                        }, this)
                        .filter(function (t) {
                          return t;
                        })),
                      (t.innerHTML = ""),
                      t.appendChild(r),
                      D.apply(this.words, n),
                      D.apply(this.chars, d),
                      f || h)
                    ) {
                      var m,
                        g,
                        y,
                        v,
                        x,
                        T,
                        w,
                        b,
                        P,
                        S,
                        O,
                        k = [];
                      (w = A(t).nodes = t.getElementsByTagName(a)),
                        (b = t.parentElement),
                        (P = t.nextElementSibling),
                        (S = C.getComputedStyle(t)),
                        (O = S.textAlign),
                        f &&
                          ((v = {
                            left: r.offsetLeft,
                            top: r.offsetTop,
                            width: r.offsetWidth,
                          }),
                          (T = t.offsetWidth),
                          (x = t.offsetHeight),
                          (A(t).cssWidth = t.style.width),
                          (A(t).cssHeight = t.style.height)),
                        R(w, function (t) {
                          if (t !== r) {
                            var e,
                              i = t.parentElement === r;
                            h &&
                              i &&
                              ((e = A(t).top = t.offsetTop) !== g &&
                                ((g = e), k.push((m = []))),
                              m.push(t)),
                              f &&
                                ((A(t).top = e || t.offsetTop),
                                (A(t).left = t.offsetLeft),
                                (A(t).width = t.offsetWidth),
                                (A(t).height = y = y || t.offsetHeight));
                          }
                        }),
                        b.removeChild(t),
                        h &&
                          ((r = L()),
                          (p = k.map(function (t) {
                            return (
                              r.appendChild(
                                (e = M(a, {
                                  class: s.lineClass + " " + s.splitClass,
                                  style:
                                    "display: block; text-align:" +
                                    O +
                                    "; width: 100%;",
                                }))
                              ),
                              f &&
                                ((A(e).type = "line"),
                                (A(e).top = A(t[0]).top),
                                (A(e).height = y)),
                              R(t, function (t) {
                                u
                                  ? e.appendChild(t)
                                  : _
                                  ? F.call(t.children).forEach(function (t) {
                                      e.appendChild(t);
                                    })
                                  : e.appendChild(z(t.textContent)),
                                  e.appendChild(z(" "));
                              }),
                              e
                            );
                          })),
                          t.replaceChild(r, t.firstChild),
                          D.apply(this.lines, p)),
                        f &&
                          ((t.style.width = t.style.width || T + "px"),
                          (t.style.height = x + "px"),
                          R(w, function (t) {
                            var e = "line" === A(t).type,
                              i = !e && "line" === A(t.parentElement).type;
                            (t.style.top = i ? 0 : A(t).top + "px"),
                              (t.style.left = e
                                ? v.left + "px"
                                : (i ? A(t).left - v.left : A(t).left) + "px"),
                              (t.style.height = A(t).height + "px"),
                              (t.style.width = e
                                ? v.width + "px"
                                : A(t).width + "px"),
                              (t.style.position = "absolute");
                          })),
                        P ? b.insertBefore(t, P) : b.appendChild(t);
                    }
                  }.call(this, t),
                    (A(t).isSplit = !0));
                },
                this
              ),
              (this.isSplit = !0),
              R(this.elements, function (t) {
                for (var e = A(t).nodes || [], i = 0, r = e.length; i < r; i++)
                  (s = (n = e[i]) && n[a]) && (delete n[s], delete o[s]);
                var n, s;
              });
          }),
          (r.prototype.revert = function () {
            this.isSplit && (this.lines = this.words = this.chars = null),
              R(
                this.elements,
                function (t) {
                  A(t).isSplit &&
                    A(t).html &&
                    ((t.innerHTML = A(t).html),
                    (t.style.height = A(t).cssHeight || ""),
                    (t.style.width = A(t).cssWidth || ""),
                    (this.isSplit = !1));
                },
                this
              );
          }),
          r
        );
      }
    })(window, document);
  }),
  "object" == typeof LS_Meta &&
    LS_Meta.fixGSAP &&
    ((window.GreenSockGlobals = null),
    (window._gsQueue = null),
    (window._gsDefine = null),
    delete window.GreenSockGlobals,
    delete window._gsQueue,
    delete window._gsDefine,
    (window.GreenSockGlobals = LS_oldGS),
    (window._gsQueue = LS_oldGSQueue),
    (window._gsDefine = LS_oldGSDefine)),
  (window._layerSlider = {
    globals: { youTubeIsReady: !1, vimeoIsReady: !1 },
    GSAP: void 0 !== LS_GSAP && LS_GSAP,
    pluginsLoaded: [],
    pluginsNotLoaded: [],
    pluginsBeingLoaded: [],
    plugins: {},
    slidersList: {},
    currentScript: document.currentScript,
    lsScript: jQuery('script[src*="layerslider.kreaturamedia.jquery.js"]')[0],
    scriptPath: "",
    pluginsPath: !1,
    showNotice: function (t, e, i, r) {
      var n,
        s,
        a,
        o = jQuery(t),
        l = "ls-issue-" + e;
      switch (e) {
        case "jquery":
          (a = "Multiple jQuery issue"),
            (s =
              'It looks like that another plugin or your theme loads an extra copy of the jQuery library causing problems for LayerSlider to show your sliders. Please navigate from your WordPress admin sidebar to LayerSlider -> Options -> Advanced and enable the "Include scripts in the footer" option.');
          break;
        case "oldjquery":
          (a = "Old jQuery issue"),
            (s =
              "It looks like you are using an old version (" +
              i +
              ") of the jQuery library. LayerSlider requires at least version " +
              r +
              " or newer. Please update jQuery to 1.10.x or higher. Important: Please do not use the jQuery Updater plugin on WordPress as it can cause issues in certain cases.");
      }
      o.each(function () {
        (n = jQuery(this)).hasClass(l) ||
          (n.addClass(l),
          jQuery(
            '<div class="ls-slider-notification"><i class="ls-slider-notification-logo">!</i><strong>LayerSlider: ' +
              a +
              "</strong><span>" +
              s +
              "</span></div>"
          ).insertBefore(n));
      });
    },
    removeSlider: function (t) {
      (this.slidersList[t] = null), delete this.slidersList[t];
    },
    checkVersions: function (t, e) {
      for (var i = t.split("."), r = e.split("."), n = 0; n < i.length; ++n) {
        if (r.length == n) return !1;
        if (parseInt(i[n]) != parseInt(r[n]))
          return !(parseInt(i[n]) > parseInt(r[n]));
      }
      return i.length, r.length, !0;
    },
  }),
  (Number.prototype.indexOf = function (t) {
    return ("" + this).indexOf(t);
  });
