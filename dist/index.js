import { getContext as Ct, onDestroy as dn, setContext as Ht, onMount as hn } from "svelte";
const pn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pn);
const yn = 1, gn = 4, bn = 8, wn = 16, mn = 1, En = 2, Sn = 4, Tn = 2, I = Symbol(), me = !1;
var Ee = Array.isArray, kn = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, xn = Object.getOwnPropertyDescriptors, On = Object.prototype, An = Array.prototype, Gt = Object.getPrototypeOf;
function st(t) {
  return typeof t == "function";
}
const P = () => {
};
function Rn(t) {
  return typeof (t == null ? void 0 : t.then) == "function";
}
function Se(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const W = 2, Te = 4, Dt = 8, Mt = 16, B = 32, qt = 64, nt = 128, Nt = 256, C = 512, J = 1024, wt = 2048, ft = 4096, mt = 8192, ke = 16384, ct = 32768, Nn = 1 << 18, xe = 1 << 19, ht = Symbol("$state"), Oe = Symbol("legacy props"), Pn = Symbol("");
function Ae(t) {
  return t === this.v;
}
function Re(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function In(t, e) {
  return t !== e;
}
function Ne(t) {
  return !Re(t, this.v);
}
function Ln(t) {
  throw new Error("effect_in_teardown");
}
function Cn() {
  throw new Error("effect_in_unowned_derived");
}
function Dn(t) {
  throw new Error("effect_orphan");
}
function Mn() {
  throw new Error("effect_update_depth_exceeded");
}
function qn(t) {
  throw new Error("props_invalid_value");
}
function Fn() {
  throw new Error("state_descriptors_fixed");
}
function Un() {
  throw new Error("state_prototype_fixed");
}
function Bn() {
  throw new Error("state_unsafe_local_read");
}
function Hn() {
  throw new Error("state_unsafe_mutation");
}
let Pe = !1;
function q(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ae,
    version: 0
  };
}
function le(t) {
  return /* @__PURE__ */ jn(q(t));
}
// @__NO_SIDE_EFFECTS__
function Ie(t, e = !1) {
  const n = q(t);
  return e || (n.equals = Ne), n;
}
// @__NO_SIDE_EFFECTS__
function jn(t) {
  return S !== null && S.f & W && (K === null ? $n([t]) : K.push(t)), t;
}
function F(t, e) {
  return S !== null && Xn() && S.f & (W | Mt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (K === null || !K.includes(t)) && Hn(), Ot(t, e);
}
function Ot(t, e) {
  return t.equals(e) || (t.v = e, t.version = ze(), Le(t, J), m !== null && m.f & C && !(m.f & B) && (R !== null && R.includes(t) ? (Y(m, J), Bt(m)) : $ === null ? Jn([t]) : $.push(t))), e;
}
function Le(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], u = s.f;
      u & J || (Y(s, e), u & (C | nt) && (u & W ? Le(
        /** @type {Derived} */
        s,
        wt
      ) : Bt(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function At(t) {
  var e = W | J;
  m === null ? e |= nt : m.f |= xe;
  const n = {
    children: null,
    ctx: L,
    deps: null,
    equals: Ae,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: m
  };
  if (S !== null && S.f & W) {
    var r = (
      /** @type {Derived} */
      S
    );
    (r.children ?? (r.children = [])).push(n);
  }
  return n;
}
function Ce(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var n = 0; n < e.length; n += 1) {
      var r = e[n];
      r.f & W ? Jt(
        /** @type {Derived} */
        r
      ) : _t(
        /** @type {Effect} */
        r
      );
    }
  }
}
function De(t) {
  var e, n = m;
  D(t.parent);
  try {
    Ce(t), e = Ge(t);
  } finally {
    D(n);
  }
  return e;
}
function Me(t) {
  var e = De(t), n = (ot || t.f & nt) && t.deps !== null ? wt : C;
  Y(t, n), t.equals(e) || (t.v = e, t.version = ze());
}
function Jt(t) {
  Ce(t), gt(t, 0), Y(t, mt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Kn(t) {
  m === null && S === null && Dn(), S !== null && S.f & nt && Cn(), te && Ln();
}
function Yn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ft(t, e, n, r = !0) {
  var i = (t & qt) !== 0, s = m, u = {
    ctx: L,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | J,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var a = at;
    try {
      fe(!0), Ut(u), u.f |= ke;
    } catch (l) {
      throw _t(u), l;
    } finally {
      fe(a);
    }
  } else e !== null && Bt(u);
  var c = n && u.deps === null && u.first === null && u.nodes_start === null && u.teardown === null && (u.f & xe) === 0;
  if (!c && !i && r && (s !== null && Yn(u, s), S !== null && S.f & W)) {
    var o = (
      /** @type {Derived} */
      S
    );
    (o.children ?? (o.children = [])).push(u);
  }
  return u;
}
function Wn(t) {
  const e = Ft(Dt, null, !1);
  return Y(e, C), e.teardown = t, e;
}
function Vt(t) {
  Kn();
  var e = m !== null && (m.f & B) !== 0 && L !== null && !L.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      L
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: m,
      reaction: S
    });
  } else {
    var r = Xt(t);
    return r;
  }
}
function Xt(t) {
  return Ft(Te, t, !1);
}
function zn(t) {
  return vt(t);
}
function vt(t, e = 0) {
  return Ft(Dt | Mt | e, t, !0);
}
function Z(t, e = !0) {
  return Ft(Dt | B, t, !0, e);
}
function qe(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = te, r = S;
    ce(!0), U(null);
    try {
      e.call(null);
    } finally {
      ce(n), U(r);
    }
  }
}
function Fe(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var n = 0; n < e.length; n += 1)
      Jt(e[n]);
  }
}
function Ue(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    _t(n, e), n = r;
  }
}
function Gn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & B || _t(e), e = n;
  }
}
function _t(t, e = !0) {
  var n = !1;
  if ((e || t.f & Nn) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  Ue(t, e && !n), Fe(t), gt(t, 0), Y(t, mt);
  var u = t.transitions;
  if (u !== null)
    for (const c of u)
      c.stop();
  qe(t);
  var a = t.parent;
  a !== null && a.first !== null && Be(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Be(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function et(t, e) {
  var n = [];
  He(t, n, !0), Vn(n, () => {
    _t(t), e && e();
  });
}
function Vn(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function He(t, e, n) {
  if (!(t.f & ft)) {
    if (t.f ^= ft, t.transitions !== null)
      for (const u of t.transitions)
        (u.is_global || n) && e.push(u);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & ct) !== 0 || (r.f & B) !== 0;
      He(r, e, s ? n : !1), r = i;
    }
  }
}
function pt(t) {
  je(t, !0);
}
function je(t, e) {
  if (t.f & ft) {
    St(t) && Ut(t), t.f ^= ft;
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ct) !== 0 || (n.f & B) !== 0;
      je(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
let Pt = !1, Qt = [];
function Ke() {
  Pt = !1;
  const t = Qt.slice();
  Qt = [], Se(t);
}
function Et(t) {
  Pt || (Pt = !0, queueMicrotask(Ke)), Qt.push(t);
}
function Qn() {
  Pt && Ke();
}
const Ye = 0, Zn = 1;
let Rt = Ye, yt = !1, at = !1, te = !1;
function fe(t) {
  at = t;
}
function ce(t) {
  te = t;
}
let X = [], lt = 0;
let S = null;
function U(t) {
  S = t;
}
let m = null;
function D(t) {
  m = t;
}
let K = null;
function $n(t) {
  K = t;
}
let R = null, M = 0, $ = null;
function Jn(t) {
  $ = t;
}
let We = 0, ot = !1, L = null;
function ve(t) {
  L = t;
}
function ze() {
  return ++We;
}
function Xn() {
  return !Pe;
}
function St(t) {
  var u, a;
  var e = t.f;
  if (e & J)
    return !0;
  if (e & wt) {
    var n = t.deps, r = (e & nt) !== 0;
    if (n !== null) {
      var i;
      if (e & Nt) {
        for (i = 0; i < n.length; i++)
          ((u = n[i]).reactions ?? (u.reactions = [])).push(t);
        t.f ^= Nt;
      }
      for (i = 0; i < n.length; i++) {
        var s = n[i];
        if (St(
          /** @type {Derived} */
          s
        ) && Me(
          /** @type {Derived} */
          s
        ), r && m !== null && !ot && !((a = s == null ? void 0 : s.reactions) != null && a.includes(t)) && (s.reactions ?? (s.reactions = [])).push(t), s.version > t.version)
          return !0;
      }
    }
    r || Y(t, C);
  }
  return !1;
}
function tr(t, e, n) {
  throw t;
}
function Ge(t) {
  var v;
  var e = R, n = M, r = $, i = S, s = ot, u = K, a = L, c = t.f;
  R = /** @type {null | Value[]} */
  null, M = 0, $ = null, S = c & (B | qt) ? null : t, ot = !at && (c & nt) !== 0, K = null, L = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), l = t.deps;
    if (R !== null) {
      var f;
      if (gt(t, M), l !== null && M > 0)
        for (l.length = M + R.length, f = 0; f < R.length; f++)
          l[M + f] = R[f];
      else
        t.deps = l = R;
      if (!ot)
        for (f = M; f < l.length; f++)
          ((v = l[f]).reactions ?? (v.reactions = [])).push(t);
    } else l !== null && M < l.length && (gt(t, M), l.length = M);
    return o;
  } finally {
    R = e, M = n, $ = r, S = i, ot = s, K = u, L = a;
  }
}
function er(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = n.indexOf(t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & W && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (R === null || !R.includes(e)) && (Y(e, wt), e.f & (nt | Nt) || (e.f ^= Nt), gt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function gt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      er(t, n[r]);
}
function Ut(t) {
  var e = t.f;
  if (!(e & mt)) {
    Y(t, C);
    var n = m;
    m = t;
    try {
      e & Mt ? Gn(t) : Ue(t), Fe(t), qe(t);
      var r = Ge(t);
      t.teardown = typeof r == "function" ? r : null, t.version = We;
    } catch (i) {
      tr(
        /** @type {Error} */
        i
      );
    } finally {
      m = n;
    }
  }
}
function Ve() {
  lt > 1e3 && (lt = 0, Mn()), lt++;
}
function Qe(t) {
  var e = t.length;
  if (e !== 0) {
    Ve();
    var n = at;
    at = !0;
    try {
      for (var r = 0; r < e; r++) {
        var i = t[r];
        i.f & C || (i.f ^= C);
        var s = [];
        Ze(i, s), nr(s);
      }
    } finally {
      at = n;
    }
  }
}
function nr(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      !(r.f & (mt | ft)) && St(r) && (Ut(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Be(r) : r.fn = null));
    }
}
function rr() {
  if (yt = !1, lt > 1001)
    return;
  const t = X;
  X = [], Qe(t), yt || (lt = 0);
}
function Bt(t) {
  Rt === Ye && (yt || (yt = !0, queueMicrotask(rr)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (qt | B)) {
      if (!(n & C)) return;
      e.f ^= C;
    }
  }
  X.push(e);
}
function Ze(t, e) {
  var n = t.first, r = [];
  t: for (; n !== null; ) {
    var i = n.f, s = (i & B) !== 0, u = s && (i & C) !== 0;
    if (!u && !(i & ft))
      if (i & Dt) {
        s ? n.f ^= C : St(n) && Ut(n);
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      } else i & Te && r.push(n);
    var c = n.next;
    if (c === null) {
      let f = n.parent;
      for (; f !== null; ) {
        if (t === f)
          break t;
        var o = f.next;
        if (o !== null) {
          n = o;
          continue t;
        }
        f = f.parent;
      }
    }
    n = c;
  }
  for (var l = 0; l < r.length; l++)
    a = r[l], e.push(a), Ze(a, e);
}
function $e(t) {
  var e = Rt, n = X;
  try {
    Ve();
    const i = [];
    Rt = Zn, X = i, yt = !1, Qe(n);
    var r = t == null ? void 0 : t();
    return Qn(), (X.length > 0 || i.length > 0) && $e(), lt = 0, r;
  } finally {
    Rt = e, X = n;
  }
}
function O(t) {
  var a;
  var e = t.f, n = (e & W) !== 0;
  if (n && e & mt) {
    var r = De(
      /** @type {Derived} */
      t
    );
    return Jt(
      /** @type {Derived} */
      t
    ), r;
  }
  if (S !== null) {
    K !== null && K.includes(t) && Bn();
    var i = S.deps;
    R === null && i !== null && i[M] === t ? M++ : R === null ? R = [t] : R.push(t), $ !== null && m !== null && m.f & C && !(m.f & B) && $.includes(t) && (Y(m, J), Bt(m));
  } else if (n && /** @type {Derived} */
  t.deps === null) {
    var s = (
      /** @type {Derived} */
      t
    ), u = s.parent;
    u !== null && !((a = u.deriveds) != null && a.includes(s)) && (u.deriveds ?? (u.deriveds = [])).push(s);
  }
  return n && (s = /** @type {Derived} */
  t, St(s) && Me(s)), t.v;
}
function It(t) {
  const e = S;
  try {
    return S = null, t();
  } finally {
    S = e;
  }
}
const ir = ~(J | wt | C);
function Y(t, e) {
  t.f = t.f & ir | e;
}
function ee(t, e = !1, n) {
  L = {
    p: L,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function ne(t) {
  const e = L;
  if (e !== null) {
    const u = e.e;
    if (u !== null) {
      var n = m, r = S;
      e.e = null;
      try {
        for (var i = 0; i < u.length; i++) {
          var s = u[i];
          D(s.effect), U(s.reaction), Xt(s.fn);
        }
      } finally {
        D(n), U(r);
      }
    }
    L = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function H(t, e = null, n) {
  if (typeof t != "object" || t === null || ht in t)
    return t;
  const r = Gt(t);
  if (r !== On && r !== An)
    return t;
  var i = /* @__PURE__ */ new Map(), s = Ee(t), u = q(0);
  s && i.set("length", q(
    /** @type {any[]} */
    t.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, o, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Fn();
        var f = i.get(o);
        return f === void 0 ? (f = q(l.value), i.set(o, f)) : F(f, H(l.value, a)), !0;
      },
      deleteProperty(c, o) {
        var l = i.get(o);
        if (l === void 0)
          o in c && i.set(o, q(I));
        else {
          if (s && typeof o == "string") {
            var f = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < f.v && F(f, v);
          }
          F(l, I), _e(u);
        }
        return !0;
      },
      get(c, o, l) {
        var g;
        if (o === ht)
          return t;
        var f = i.get(o), v = o in c;
        if (f === void 0 && (!v || (g = ut(c, o)) != null && g.writable) && (f = q(H(v ? c[o] : I, a)), i.set(o, f)), f !== void 0) {
          var p = O(f);
          return p === I ? void 0 : p;
        }
        return Reflect.get(c, o, l);
      },
      getOwnPropertyDescriptor(c, o) {
        var l = Reflect.getOwnPropertyDescriptor(c, o);
        if (l && "value" in l) {
          var f = i.get(o);
          f && (l.value = O(f));
        } else if (l === void 0) {
          var v = i.get(o), p = v == null ? void 0 : v.v;
          if (v !== void 0 && p !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return l;
      },
      has(c, o) {
        var p;
        if (o === ht)
          return !0;
        var l = i.get(o), f = l !== void 0 && l.v !== I || Reflect.has(c, o);
        if (l !== void 0 || m !== null && (!f || (p = ut(c, o)) != null && p.writable)) {
          l === void 0 && (l = q(f ? H(c[o], a) : I), i.set(o, l));
          var v = O(l);
          if (v === I)
            return !1;
        }
        return f;
      },
      set(c, o, l, f) {
        var w;
        var v = i.get(o), p = o in c;
        if (s && o === "length")
          for (var g = l; g < /** @type {Source<number>} */
          v.v; g += 1) {
            var y = i.get(g + "");
            y !== void 0 ? F(y, I) : g in c && (y = q(I), i.set(g + "", y));
          }
        v === void 0 ? (!p || (w = ut(c, o)) != null && w.writable) && (v = q(void 0), F(v, H(l, a)), i.set(o, v)) : (p = v.v !== I, F(v, H(l, a)));
        var h = Reflect.getOwnPropertyDescriptor(c, o);
        if (h != null && h.set && h.set.call(f, l), !p) {
          if (s && typeof o == "string") {
            var _ = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(o);
            Number.isInteger(d) && d >= _.v && F(_, d + 1);
          }
          _e(u);
        }
        return !0;
      },
      ownKeys(c) {
        O(u);
        var o = Reflect.ownKeys(c).filter((v) => {
          var p = i.get(v);
          return p === void 0 || p.v !== I;
        });
        for (var [l, f] of i)
          f.v !== I && !(l in c) && o.push(l);
        return o;
      },
      setPrototypeOf() {
        Un();
      }
    }
  );
}
function _e(t, e = 1) {
  F(t, t.v + e);
}
var sr, or;
function ur(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function re(t) {
  return sr.call(t);
}
// @__NO_SIDE_EFFECTS__
function Je(t) {
  return or.call(t);
}
function Xe(t, e) {
  return /* @__PURE__ */ re(t);
}
function z(t, e) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ re(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Je(n) : n;
  }
}
function ar(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Et(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function lr(t) {
  var e = S, n = m;
  U(null), D(null);
  try {
    return t();
  } finally {
    U(e), D(n);
  }
}
const fr = /* @__PURE__ */ new Set(), cr = /* @__PURE__ */ new Set();
function de(t, e, n, r) {
  function i(s) {
    if (r.capture || _r.call(e, s), !s.cancelBubble)
      return lr(() => n.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Et(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function vr(t) {
  for (var e = 0; e < t.length; e++)
    fr.add(t[e]);
  for (var n of cr)
    n(t);
}
function _r(t) {
  var d;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((d = t.composedPath) == null ? void 0 : d.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  ), u = 0, a = t.__root;
  if (a) {
    var c = i.indexOf(a);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    c <= o && (u = c);
  }
  if (s = /** @type {Element} */
  i[u] || t.target, s !== e) {
    kn(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var l = S, f = m;
    U(null), D(null);
    try {
      for (var v, p = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          if (y !== void 0 && !/** @type {any} */
          s.disabled)
            if (Ee(y)) {
              var [h, ..._] = y;
              h.apply(s, [t, ..._]);
            } else
              y.call(s, t);
        } catch (w) {
          v ? p.push(w) : v = w;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (v) {
        for (let w of p)
          queueMicrotask(() => {
            throw w;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, U(l), D(f);
    }
  }
}
function dr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function tn(t, e) {
  var n = (
    /** @type {Effect} */
    m
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function en(t, e) {
  var n = (e & Tn) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    r === void 0 && (r = dr(i ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ re(r));
    var s = (
      /** @type {TemplateNode} */
      n ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return tn(s, s), s;
  };
}
function G() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ur();
  return t.append(e, n), tn(e, n), t;
}
function j(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function hr(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const pr = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function yr(t) {
  return pr.includes(t);
}
const gr = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
function br(t) {
  return t = t.toLowerCase(), gr[t] ?? t;
}
let wr = !0;
const jt = 0, Tt = 1, Kt = 2;
function mr(t, e, n, r, i) {
  var s = t, u = L, a, c, o, l, f = q(
    /** @type {V} */
    void 0
  ), v = q(void 0), p = !1;
  function g(h, _) {
    p = !0, _ && (D(y), U(y), ve(u));
    try {
      h === jt && n && (c ? pt(c) : c = Z(() => n(s))), h === Tt && r && (o ? pt(o) : o = Z(() => r(s, f))), h === Kt && i && (l ? pt(l) : l = Z(() => i(s, v))), h !== jt && c && et(c, () => c = null), h !== Tt && o && et(o, () => o = null), h !== Kt && l && et(l, () => l = null);
    } finally {
      _ && (ve(null), U(null), D(null), $e());
    }
  }
  var y = vt(() => {
    if (a !== (a = e())) {
      if (Rn(a)) {
        var h = a;
        p = !1, h.then(
          (_) => {
            h === a && (Ot(f, _), g(Tt, !0));
          },
          (_) => {
            if (h === a)
              throw Ot(v, _), g(Kt, !0), v.v;
          }
        ), Et(() => {
          p || g(jt, !0);
        });
      } else
        Ot(f, a), g(Tt, !1);
      return () => a = null;
    }
  });
}
function Zt(t, e, n, r = null, i = !1) {
  var s = t, u = null, a = null, c = null, o = i ? ct : 0;
  vt(() => {
    c !== (c = !!e()) && (c ? (u ? pt(u) : u = Z(() => n(s)), a && et(a, () => {
      a = null;
    })) : (a ? pt(a) : r && (a = Z(() => r(s))), u && et(u, () => {
      u = null;
    })));
  }, o);
}
function Er(t, e, n) {
  var r = t, i = I, s, u = In;
  vt(() => {
    u(i, i = e()) && (s && et(s), s = Z(() => n(r)));
  });
}
function Lt(t, e, ...n) {
  var r = t, i = P, s;
  vt(() => {
    i !== (i = e()) && (s && (_t(s), s = null), s = Z(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, ct);
}
function Sr(t, e, n) {
  var r = t, i, s;
  vt(() => {
    i !== (i = e()) && (s && (et(s), s = null), i && (s = Z(() => n(r, i))));
  }, ct);
}
function Tr(t, e, n, r) {
  var i = t.__attributes ?? (t.__attributes = {});
  i[e] !== (i[e] = n) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Pn] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && nn(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function kr(t, e, n, r, i = !1, s = !1, u = !1) {
  var a = e || {}, c = t.tagName === "OPTION";
  for (var o in e)
    o in n || (n[o] = null);
  var l = nn(t), f = (
    /** @type {Record<string, unknown>} **/
    t.__attributes ?? (t.__attributes = {})
  ), v = [];
  for (const _ in n) {
    let d = n[_];
    if (c && _ === "value" && d == null) {
      t.value = t.__value = "", a[_] = d;
      continue;
    }
    var p = a[_];
    if (d !== p) {
      a[_] = d;
      var g = _[0] + _[1];
      if (g !== "$$") {
        if (g === "on") {
          const w = {}, x = "$$" + _;
          let T = _.slice(2);
          var y = yr(T);
          if (hr(T) && (T = T.slice(0, -7), w.capture = !0), !y && p) {
            if (d != null) continue;
            t.removeEventListener(T, a[x], w), a[x] = null;
          }
          if (d != null)
            if (y)
              t[`__${T}`] = d, vr([T]);
            else {
              let N = function(b) {
                a[_].call(this, b);
              };
              e ? a[x] = de(T, t, N, w) : v.push([
                _,
                d,
                () => a[x] = de(T, t, N, w)
              ]);
            }
        } else if (_ === "style" && d != null)
          t.style.cssText = d + "";
        else if (_ === "autofocus")
          ar(
            /** @type {HTMLElement} */
            t,
            !!d
          );
        else if (_ === "__value" || _ === "value" && d != null)
          t.value = t[_] = t.__value = d;
        else {
          var h = _;
          i || (h = br(h)), d == null && !s ? (f[_] = null, t.removeAttribute(_)) : l.includes(h) && (s || typeof d != "string") ? t[h] = d : typeof d != "function" && Tr(t, h, d);
        }
        _ === "style" && "__styles" in t && (t.__styles = {});
      }
    }
  }
  return e || Et(() => {
    if (t.isConnected)
      for (const [_, d, w] of v)
        a[_] === d && w();
  }), a;
}
var he = /* @__PURE__ */ new Map();
function nn(t) {
  var e = he.get(t.nodeName);
  if (e) return e;
  he.set(t.nodeName, e = []);
  for (var n, r = Gt(t), i = Element.prototype; i !== r; ) {
    n = xn(r);
    for (var s in n)
      n[s].set && e.push(s);
    r = Gt(r);
  }
  return e;
}
const xr = () => performance.now(), Q = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => xr(),
  tasks: /* @__PURE__ */ new Set()
};
function rn(t) {
  Q.tasks.forEach((e) => {
    e.c(t) || (Q.tasks.delete(e), e.f());
  }), Q.tasks.size !== 0 && Q.tick(rn);
}
function Or(t) {
  let e;
  return Q.tasks.size === 0 && Q.tick(rn), {
    promise: new Promise((n) => {
      Q.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      Q.tasks.delete(e);
    }
  };
}
function kt(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ar(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function pe(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, s] = r.split(":");
    if (!i || s === void 0) break;
    const u = Ar(i.trim());
    e[u] = s.trim();
  }
  return e;
}
const Rr = (t) => t;
function ye(t, e, n, r) {
  var i = (t & mn) !== 0, s = (t & En) !== 0, u = i && s, a = (t & Sn) !== 0, c = u ? "both" : i ? "in" : "out", o, l = e.inert, f, v;
  function p() {
    var d = S, w = m;
    U(null), D(null);
    try {
      return o ?? (o = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
      {}, {
        direction: c
      }));
    } finally {
      U(d), D(w);
    }
  }
  var g = {
    is_global: a,
    in() {
      var d;
      if (e.inert = l, !i) {
        v == null || v.abort(), (d = v == null ? void 0 : v.reset) == null || d.call(v);
        return;
      }
      s || f == null || f.abort(), kt(e, "introstart"), f = $t(e, p(), v, 1, () => {
        kt(e, "introend"), f == null || f.abort(), f = o = void 0;
      });
    },
    out(d) {
      if (!s) {
        d == null || d(), o = void 0;
        return;
      }
      e.inert = !0, kt(e, "outrostart"), v = $t(e, p(), f, 0, () => {
        kt(e, "outroend"), d == null || d();
      });
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, y = (
    /** @type {Effect} */
    m
  );
  if ((y.transitions ?? (y.transitions = [])).push(g), i && wr) {
    var h = a;
    if (!h) {
      for (var _ = (
        /** @type {Effect | null} */
        y.parent
      ); _ && _.f & ct; )
        for (; (_ = _.parent) && !(_.f & Mt); )
          ;
      h = !_ || (_.f & ke) !== 0;
    }
    h && Xt(() => {
      It(() => g.in());
    });
  }
}
function $t(t, e, n, r, i) {
  var s = r === 1;
  if (st(e)) {
    var u, a = !1;
    return Et(() => {
      if (!a) {
        var h = e({ direction: s ? "in" : "out" });
        u = $t(t, h, n, r, i);
      }
    }), {
      abort: () => {
        a = !0, u == null || u.abort();
      },
      deactivate: () => u.deactivate(),
      reset: () => u.reset(),
      t: () => u.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: P,
      deactivate: P,
      reset: P,
      t: () => r
    };
  const { delay: c = 0, css: o, tick: l, easing: f = Rr } = e;
  var v = [];
  if (s && n === void 0 && (l && l(0, 1), o)) {
    var p = pe(o(0, 1));
    v.push(p, p);
  }
  var g = () => 1 - r, y = t.animate(v, { duration: c });
  return y.onfinish = () => {
    var h = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var _ = r - h, d = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), w = [];
    if (d > 0) {
      if (o)
        for (var x = Math.ceil(d / 16.666666666666668), T = 0; T <= x; T += 1) {
          var N = h + _ * f(T / x), b = o(N, 1 - N);
          w.push(pe(b));
        }
      g = () => {
        var E = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          y.currentTime
        );
        return h + _ * f(E / d);
      }, l && Or(() => {
        if (y.playState !== "running") return !1;
        var E = g();
        return l(E, 1 - E), !0;
      });
    }
    y = t.animate(w, { duration: d, fill: "forwards" }), y.onfinish = () => {
      g = () => r, l == null || l(r, 1 - r), i();
    };
  }, {
    abort: () => {
      y && (y.cancel(), y.effect = null, y.onfinish = P);
    },
    deactivate: () => {
      i = P;
    },
    reset: () => {
      r === 0 && (l == null || l(1, 0));
    },
    t: () => g()
  };
}
function sn(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), P;
  const r = It(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
let xt = !1;
function tt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ie(void 0),
    unsubscribe: P
  });
  if (r.store !== t)
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = P;
    else {
      var i = !0;
      r.unsubscribe = sn(t, (s) => {
        i ? r.source.v = s : F(r.source, s);
      }), i = !1;
    }
  return O(r.source);
}
function ie() {
  const t = {};
  return Wn(() => {
    for (var e in t)
      t[e].unsubscribe();
  }), t;
}
function Nr(t) {
  var e = xt;
  try {
    return xt = !1, [t(), xt];
  } finally {
    xt = e;
  }
}
const Pr = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function on(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Pr
  );
}
const Ir = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (st(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      st(i) && (i = i());
      const s = ut(i, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (st(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = ut(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === ht || e === Oe) return !1;
    for (let n of t.props)
      if (st(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props) {
      st(n) && (n = n());
      for (const r in n)
        e.includes(r) || e.push(r);
    }
    return e;
  }
};
function Lr(...t) {
  return new Proxy({ props: t }, Ir);
}
function Cr(t) {
  for (var e = m, n = m; e !== null && !(e.f & (B | qt)); )
    e = e.parent;
  try {
    return D(e), t();
  } finally {
    D(n);
  }
}
function V(t, e, n, r) {
  var N;
  var i = (n & yn) !== 0, s = !Pe, u = (n & bn) !== 0, a = (n & wn) !== 0, c = !1, o;
  u ? [o, c] = Nr(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var l = ht in t || Oe in t, f = ((N = ut(t, e)) == null ? void 0 : N.set) ?? (l && u && e in t ? (b) => t[e] = b : void 0), v = (
    /** @type {V} */
    r
  ), p = !0, g = !1, y = () => (g = !0, p && (p = !1, a ? v = It(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  o === void 0 && r !== void 0 && (f && s && qn(), o = y(), f && f(o));
  var h;
  if (h = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? y() : (p = !0, g = !1, b);
  }, !(n & gn))
    return h;
  if (f) {
    var _ = t.$$legacy;
    return function(b, E) {
      return arguments.length > 0 ? ((!E || _ || c) && f(E ? h() : b), b) : h();
    };
  }
  var d = !1, w = !1, x = /* @__PURE__ */ Ie(o), T = Cr(
    () => /* @__PURE__ */ At(() => {
      var b = h(), E = O(x);
      return d ? (d = !1, w = !0, E) : (w = !1, x.v = b);
    })
  );
  return i || (T.equals = Ne), function(b, E) {
    if (arguments.length > 0) {
      const k = E ? O(T) : u ? H(b) : b;
      return T.equals(k) || (d = !0, F(x, k), g && v !== void 0 && (v = k), It(() => O(T))), b;
    }
    return O(T);
  };
}
const it = [];
function Dr(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = P) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Re(t, a) && (t = a, n)) {
      const c = !it.length;
      for (const o of r)
        o[1](), it.push(o, t);
      if (c) {
        for (let o = 0; o < it.length; o += 2)
          it[o][0](it[o + 1]);
        it.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      t
    ));
  }
  function u(a, c = P) {
    const o = [a, c];
    return r.add(o), r.size === 1 && (n = e(i, s) || P), a(
      /** @type {T} */
      t
    ), () => {
      r.delete(o), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: u };
}
function Mr(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Dr(n, (u, a) => {
    let c = !1;
    const o = [];
    let l = 0, f = P;
    const v = () => {
      if (l)
        return;
      f();
      const g = e(r ? o[0] : o, u, a);
      s ? u(g) : f = typeof g == "function" ? g : P;
    }, p = i.map(
      (g, y) => sn(
        g,
        (h) => {
          o[y] = h, l &= ~(1 << y), c && v();
        },
        () => {
          l |= 1 << y;
        }
      )
    );
    return c = !0, v(), function() {
      Se(p), f(), c = !1;
    };
  });
}
const un = /^:(.+)/, ge = 4, qr = 3, Fr = 2, Ur = 1, Br = 1, bt = (t) => t.replace(/(^\/+|\/+$)/g, "").split("/"), Yt = (t) => t.replace(/(^\/+|\/+$)/g, ""), Hr = (t, e) => {
  const n = t.default ? 0 : bt(t.path).reduce((r, i) => (r += ge, i === "" ? r += Br : un.test(i) ? r += Fr : i[0] === "*" ? r -= ge + Ur : r += qr, r), 0);
  return { route: t, score: n, index: e };
}, jr = (t) => t.map(Hr).sort(
  (e, n) => e.score < n.score ? 1 : e.score > n.score ? -1 : e.index - n.index
), be = (t, e) => {
  let n, r;
  const [i] = e.split("?"), s = bt(i), u = s[0] === "", a = jr(t);
  for (let c = 0, o = a.length; c < o; c++) {
    const l = a[c].route;
    let f = !1;
    if (l.default) {
      r = {
        route: l,
        params: {},
        uri: e
      };
      continue;
    }
    const v = bt(l.path), p = {}, g = Math.max(s.length, v.length);
    let y = 0;
    for (; y < g; y++) {
      const h = v[y], _ = s[y];
      if (h && h[0] === "*") {
        const w = h === "*" ? "*" : h.slice(1);
        p[w] = s.slice(y).map(decodeURIComponent).join("/");
        break;
      }
      if (typeof _ > "u") {
        f = !0;
        break;
      }
      const d = un.exec(h);
      if (d && !u) {
        const w = decodeURIComponent(_);
        p[d[1]] = w;
      } else if (h !== _) {
        f = !0;
        break;
      }
    }
    if (!f) {
      n = {
        route: l,
        params: p,
        uri: "/" + s.slice(0, y).join("/")
      };
      break;
    }
  }
  return n || r || null;
}, Wt = (t, e) => t + (e ? `?${e}` : ""), Kr = (t, e) => {
  if (t.startsWith("/")) return t;
  const [n, r] = t.split("?"), [i] = e.split("?"), s = bt(n), u = bt(i);
  if (s[0] === "") return Wt(i, r);
  if (!s[0].startsWith(".")) {
    const o = u.concat(s).join("/");
    return Wt((i === "/" ? "" : "/") + o, r);
  }
  const a = u.concat(s), c = [];
  return a.forEach((o) => {
    o === ".." ? c.pop() : o !== "." && c.push(o);
  }), Wt("/" + c.join("/"), r);
}, we = (t, e) => `${Yt(
  e === "/" ? t : `${Yt(t)}/${Yt(e)}`
)}/`, se = (t) => !t.defaultPrevented && t.button === 0 && !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey), an = (t) => {
  const e = location.host;
  return t.host === e || t.href.indexOf(`https://${e}`) === 0 || t.href.indexOf(`http://${e}`) === 0;
}, ln = () => typeof window < "u" && "document" in window && "location" in window, zt = (t) => ({
  ...t.location,
  state: t.history.state,
  key: t.history.state && t.history.state.key || "initial"
}), Yr = (t) => {
  const e = [];
  let n = zt(t);
  return {
    get location() {
      return n;
    },
    listen(r) {
      e.push(r);
      const i = () => {
        n = zt(t), r({ location: n, action: "POP" });
      };
      return t.addEventListener("popstate", i), () => {
        t.removeEventListener("popstate", i);
        const s = e.indexOf(r);
        e.splice(s, 1);
      };
    },
    navigate(r, i) {
      let {
        state: s = {},
        replace: u = !1,
        preserveScroll: a = !1,
        blurActiveElement: c = !1
      } = i ?? {};
      s = { ...s, key: Date.now() + "" };
      try {
        u ? t.history.replaceState(s, "", r) : t.history.pushState(s, "", r);
      } catch {
        t.location[u ? "replace" : "assign"](r);
      }
      n = zt(t), e.forEach(
        (o) => o({ location: n, action: "PUSH", preserveScroll: a })
      ), c && document.activeElement instanceof HTMLElement && document.activeElement.blur();
    }
  };
}, Wr = (t = "/") => {
  let e = 0;
  const n = [{ pathname: t, search: "" }], r = [];
  return {
    get location() {
      return n[e];
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    history: {
      get entries() {
        return n;
      },
      get index() {
        return e;
      },
      get state() {
        return r[e];
      },
      pushState(i, s, u) {
        const [a, c = ""] = u.split("?");
        e++, n.push({ pathname: a, search: c }), r.push(i);
      },
      replaceState(i, s, u) {
        const [a, c = ""] = u.split("?");
        n[e] = { pathname: a, search: c }, r[e] = i;
      }
    }
  };
}, fn = Yr(
  ln() ? window : Wr()
), { navigate: cn } = fn, oe = {}, vn = {}, _n = {}, zr = () => Ct(oe), Gr = () => Ct(oe), ue = () => Ct(vn), Vr = () => Ct(_n);
var Qr = /* @__PURE__ */ en("<a><!></a>");
function Jr(t, e) {
  ee(e, !0);
  const n = ie(), r = () => tt(f, "$base", n), i = () => tt(l, "$location", n);
  let s = V(e, "to", 3, ""), u = V(e, "replace", 3, !1), a = V(e, "state", 19, () => ({}));
  V(e, "getProps", 3, () => ({}));
  let c = V(e, "preserveScroll", 3, !1), o = /* @__PURE__ */ on(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "click",
    "to",
    "replace",
    "state",
    "getProps",
    "preserveScroll"
  ]);
  const l = Gr(), { base: f } = ue(), { navigate: v } = Vr();
  let p = /* @__PURE__ */ At(() => Kr(s(), r().uri)), g = /* @__PURE__ */ At(() => O(p) === i().pathname), y = /* @__PURE__ */ At(() => O(g) ? "page" : void 0);
  const h = (x) => {
    var T;
    if ((T = e.click) == null || T.call(e, x), se(x)) {
      x.preventDefault();
      const N = i().pathname === O(p) || u();
      v(O(p), {
        state: a(),
        replace: N,
        preserveScroll: c()
      });
    }
  };
  var _ = Qr();
  let d;
  var w = Xe(_);
  Lt(w, () => e.children, () => !!O(y)), zn(() => d = kr(_, d, {
    href: O(p),
    "aria-current": O(y),
    onclick: h,
    ...o
  })), j(t, _), ne();
}
function Xr(t, e) {
  ee(e, !0);
  const n = ie(), r = () => tt(l, "$activeRoute", n);
  let i = V(e, "path", 3, ""), s = /* @__PURE__ */ on(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "path",
    "component",
    "children"
  ]), u = le(H({})), a = le(H({}));
  const { registerRoute: c, unregisterRoute: o, activeRoute: l } = ue(), f = {
    path: i(),
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: i() === ""
  };
  Vt(() => {
    r() && r().route === f && (F(u, H(r().params)), F(a, H(s)), ln() && !r().preserveScroll && (window == null || window.scrollTo(0, 0)));
  }), c(f), dn(() => {
    o(f);
  });
  var v = G(), p = z(v);
  Zt(p, () => r() && r().route === f, (g) => {
    var y = G(), h = z(y);
    Zt(
      h,
      () => e.component,
      (_) => {
        var d = G(), w = z(d);
        mr(w, () => e.component, null, (x, T) => {
          var N = G(), b = z(N);
          Sr(b, () => O(T), (E, k) => {
            k(E, Lr(() => O(u), () => O(a)));
          }), j(x, N);
        }), j(_, d);
      },
      (_) => {
        var d = G(), w = z(d);
        Lt(w, () => e.children ?? P, () => O(u)), j(_, d);
      }
    ), j(g, y);
  }), j(t, v), ne();
}
var Zr = /* @__PURE__ */ en("<div><!></div>");
function ti(t, e) {
  ee(e, !0);
  const n = ie(), r = () => tt(h, "$base", n), i = () => tt(y, "$location", n), s = () => tt(v, "$routes", n), u = () => tt(p, "$activeRoute", n);
  let a = V(e, "basepath", 3, "/"), c = V(e, "history", 3, fn);
  const o = (b, E, k) => {
    const A = e.viewtransition(k);
    return typeof (A == null ? void 0 : A.fn) == "function" ? A.fn(b, A) : A;
  };
  Ht(_n, c());
  const l = zr(), f = ue(), v = dt([]), p = dt(null);
  let g = !1;
  const y = l || dt(e.url ? { pathname: e.url } : c().location), h = f ? f.routerBase : dt({ path: a(), uri: a() }), _ = Mr([h, p], ([b, E]) => {
    if (!E) return b;
    const { path: k } = b, { route: A, uri: rt } = E;
    return { path: A.default ? k : A.path.replace(/\*.*$/, ""), uri: rt };
  }), d = (b) => {
    const { path: E } = r();
    let { path: k } = b;
    if (b._path = k, b.path = we(E, k), typeof window > "u") {
      if (g) return;
      const A = be([b], i().pathname);
      A && (p.set(A), g = !0);
    } else
      v.update((A) => [...A, b]);
  }, w = (b) => {
    v.update((E) => E.filter((k) => k !== b));
  };
  let x = !1;
  Vt(() => {
    const { path: b } = r();
    v.update((E) => E.map((k) => k._path ? Object.assign(k, { path: we(b, k._path) }) : k));
  }), Vt(() => {
    const b = be(s(), i().pathname);
    p.set(b && { ...b, preserveScroll: x });
  }), l || (hn(() => c().listen((E) => {
    x = E.preserveScroll || !1, y.set(E.location);
  })), Ht(oe, y)), Ht(vn, {
    activeRoute: p,
    base: h,
    routerBase: _,
    registerRoute: d,
    unregisterRoute: w
  });
  var T = G(), N = z(T);
  Zt(
    N,
    () => e.viewtransition,
    (b) => {
      var E = G(), k = z(E);
      Er(k, () => i().pathname, (A) => {
        var rt = Zr(), ae = Xe(rt);
        Lt(ae, () => e.children, () => u() && u().uri, i), ye(1, rt, () => o), ye(2, rt, () => o), j(A, rt);
      }), j(b, E);
    },
    (b) => {
      var E = G(), k = z(E);
      Lt(k, () => e.children, () => u() && u().uri, i), j(b, E);
    }
  ), j(t, T), ne();
}
const ei = (t) => {
  const e = (n) => {
    const r = n.currentTarget;
    r instanceof HTMLAnchorElement && (r.target === "" || r.target === "_self") && an(r) && se(n) && (n.preventDefault(), cn(r.pathname + r.search, {
      replace: r.hasAttribute("replace"),
      preserveScroll: r.hasAttribute("preserveScroll")
    }));
  };
  return t.addEventListener("click", e), {
    destroy() {
      t.removeEventListener("click", e);
    }
  };
}, ni = (t) => {
  const e = (r, i) => {
    for (; i && i.tagName !== r && i.parentElement; )
      i = i.parentElement;
    return i;
  }, n = (r) => {
    if (r.target instanceof HTMLElement) {
      const i = e("A", r.target);
      i instanceof HTMLAnchorElement && i && (i.target === "" || i.target === "_self") && an(i) && se(r) && !i.hasAttribute("noroute") && (r.preventDefault(), cn(i.pathname + i.search, {
        replace: i.hasAttribute("replace"),
        preserveScroll: i.hasAttribute("preserveScroll")
      }));
    }
  };
  return t.addEventListener("click", n), {
    destroy() {
      t.removeEventListener("click", n);
    }
  };
};
export {
  Jr as Link,
  Xr as Route,
  ti as Router,
  ei as link,
  ni as links,
  cn as navigate,
  Vr as useHistory,
  Gr as useLocation,
  ue as useRouter
};
