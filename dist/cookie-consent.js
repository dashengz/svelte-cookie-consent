var yn = Object.defineProperty;
var lr = (e) => {
  throw TypeError(e);
};
var xn = (e, t, r) => t in e ? yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var K = (e, t, r) => xn(e, typeof t != "symbol" ? t + "" : t, r), or = (e, t, r) => t.has(e) || lr("Cannot " + r);
var Q = (e, t, r) => (or(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => t.has(e) ? lr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), St = (e, t, r, n) => (or(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const An = "5";
var mr;
typeof window < "u" && ((mr = window.__svelte ?? (window.__svelte = {})).v ?? (mr.v = /* @__PURE__ */ new Set())).add(An);
const kn = 1, En = 2, Cn = 16, $n = 1, Ln = 4, zn = 8, Tn = 16, jn = 1, Sn = 2, qt = "[", Ht = "[!", Vt = "]", Be = {}, ee = Symbol(), Rn = "http://www.w3.org/1999/xhtml", sr = !1;
var Yt = Array.isArray, On = Array.prototype.indexOf, Gt = Array.from, _t = Object.keys, pt = Object.defineProperty, De = Object.getOwnPropertyDescriptor, Nn = Object.getOwnPropertyDescriptors, In = Object.prototype, Bn = Array.prototype, wr = Object.getPrototypeOf, ar = Object.isExtensible;
const yr = () => {
};
function xr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Dn(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ve = 2, Ar = 4, Et = 8, Jt = 16, ze = 32, Ue = 64, Kt = 128, oe = 256, bt = 512, de = 1024, Le = 2048, qe = 4096, $e = 8192, Wt = 16384, kr = 32768, Ct = 65536, cr = 1 << 17, Mn = 1 << 18, Er = 1 << 19, It = 1 << 20, et = Symbol("$state"), Cr = Symbol("legacy props"), Pn = Symbol(""), $r = new class extends Error {
  constructor() {
    super(...arguments);
    K(this, "name", "StaleReactionError");
    K(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Lr = 3, Ge = 8;
function zr(e) {
  return e === this.v;
}
function Fn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Tr(e) {
  return !Fn(e, this.v);
}
function Un(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Hn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Xn = !1;
function Zn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let se = null;
function ur(e) {
  se = e;
}
function We(e, t = !1, r) {
  var n = se = {
    p: se,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Hr(() => {
    n.d = !0;
  });
}
function Xe(e) {
  const t = se;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = j, n = $;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var l = o[i];
          Ne(l.effect), xe(l.reaction), Zt(l.fn);
        }
      } finally {
        Ne(r), xe(n);
      }
    }
    se = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function jr() {
  return !0;
}
function Ye(e) {
  if (typeof e != "object" || e === null || et in e)
    return e;
  const t = wr(e);
  if (t !== In && t !== Bn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Yt(e), i = /* @__PURE__ */ M(0), l = $, o = (s) => {
    var a = $;
    xe(l);
    var c = s();
    return xe(a), c;
  };
  return n && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Jn();
        var f = r.get(a);
        return f === void 0 ? f = o(() => {
          var u = /* @__PURE__ */ M(c.value);
          return r.set(a, u), u;
        }) : C(f, c.value, !0), !0;
      },
      deleteProperty(s, a) {
        var c = r.get(a);
        if (c === void 0) {
          if (a in s) {
            const v = o(() => /* @__PURE__ */ M(ee));
            r.set(a, v), Rt(i);
          }
        } else {
          if (n && typeof a == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), u = Number(a);
            Number.isInteger(u) && u < f.v && C(f, u);
          }
          C(c, ee), Rt(i);
        }
        return !0;
      },
      get(s, a, c) {
        var h;
        if (a === et)
          return e;
        var f = r.get(a), u = a in s;
        if (f === void 0 && (!u || (h = De(s, a)) != null && h.writable) && (f = o(() => {
          var p = Ye(u ? s[a] : ee), x = /* @__PURE__ */ M(p);
          return x;
        }), r.set(a, f)), f !== void 0) {
          var v = k(f);
          return v === ee ? void 0 : v;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var f = r.get(a);
          f && (c.value = k(f));
        } else if (c === void 0) {
          var u = r.get(a), v = u == null ? void 0 : u.v;
          if (u !== void 0 && v !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(s, a) {
        var v;
        if (a === et)
          return !0;
        var c = r.get(a), f = c !== void 0 && c.v !== ee || Reflect.has(s, a);
        if (c !== void 0 || j !== null && (!f || (v = De(s, a)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var h = f ? Ye(s[a]) : ee, p = /* @__PURE__ */ M(h);
            return p;
          }), r.set(a, c));
          var u = k(c);
          if (u === ee)
            return !1;
        }
        return f;
      },
      set(s, a, c, f) {
        var E;
        var u = r.get(a), v = a in s;
        if (n && a === "length")
          for (var h = c; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var p = r.get(h + "");
            p !== void 0 ? C(p, ee) : h in s && (p = o(() => /* @__PURE__ */ M(ee)), r.set(h + "", p));
          }
        if (u === void 0)
          (!v || (E = De(s, a)) != null && E.writable) && (u = o(() => /* @__PURE__ */ M(void 0)), C(u, Ye(c)), r.set(a, u));
        else {
          v = u.v !== ee;
          var x = o(() => Ye(c));
          C(u, x);
        }
        var b = Reflect.getOwnPropertyDescriptor(s, a);
        if (b != null && b.set && b.set.call(f, c), !v) {
          if (n && typeof a == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(a);
            Number.isInteger(A) && A >= d.v && C(d, A + 1);
          }
          Rt(i);
        }
        return !0;
      },
      ownKeys(s) {
        k(i);
        var a = Reflect.ownKeys(s).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== ee;
        });
        for (var [c, f] of r)
          f.v !== ee && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Kn();
      }
    }
  );
}
function Rt(e, t = 1) {
  C(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  var t = ve | Le, r = $ !== null && ($.f & ve) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return j === null || r !== null && (r.f & oe) !== 0 ? t |= oe : j.f |= Er, {
    ctx: se,
    deps: null,
    effects: null,
    equals: zr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  const t = /* @__PURE__ */ $t(e);
  return en(t), t;
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  const t = /* @__PURE__ */ $t(e);
  return t.equals = Tr, t;
}
function Rr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ye(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ei(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ve) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Or(e) {
  var t, r = j;
  Ne(ei(e));
  try {
    Rr(e), t = ln(e);
  } finally {
    Ne(r);
  }
  return t;
}
function Nr(e) {
  var t = Or(e);
  if (e.equals(t) || (e.v = t, e.wv = rn()), !Ze) {
    var r = (Re || (e.f & oe) !== 0) && e.deps !== null ? qe : de;
    Ae(e, r);
  }
}
const rt = /* @__PURE__ */ new Map();
function mt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: zr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const r = mt(e);
  return en(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t = !1, r = !0) {
  const n = mt(e);
  return t || (n.equals = Tr), n;
}
function C(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!me || ($.f & cr) !== 0) && jr() && ($.f & (ve | Jt | cr)) !== 0 && !(F != null && F[1].includes(e) && F[0] === $) && Wn();
  let n = r ? Ye(t) : t;
  return Br(e, n);
}
function Br(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Ze ? rt.set(e, t) : rt.set(e, r), e.v = t, (e.f & ve) !== 0 && ((e.f & Le) !== 0 && Or(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & oe) === 0 ? de : qe)), e.wv = rn(), Dr(e, Le), j !== null && (j.f & de) !== 0 && (j.f & (ze | Ue)) === 0 && (ue === null ? ui([e]) : ue.push(e));
  }
  return t;
}
function Dr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var l = r[i], o = l.f;
      (o & Le) === 0 && (Ae(l, t), (o & (de | oe)) !== 0 && ((o & ve) !== 0 ? Dr(
        /** @type {Derived} */
        l,
        qe
      ) : nr(
        /** @type {Effect} */
        l
      )));
    }
}
function ct(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function Ce(e) {
  T = e;
}
let S;
function pe(e) {
  if (e === null)
    throw ct(), Be;
  return S = e;
}
function Je() {
  return pe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(S)
  );
}
function L(e) {
  if (T) {
    if (/* @__PURE__ */ Te(S) !== null)
      throw ct(), Be;
    S = e;
  }
}
function Bt() {
  for (var e = 0, t = S; ; ) {
    if (t.nodeType === Ge) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Vt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === qt || r === Ht) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = n;
  }
}
function Mr(e) {
  if (!e || e.nodeType !== Ge)
    throw ct(), Be;
  return (
    /** @type {Comment} */
    e.data
  );
}
var wt, Pr, Fr, Ur;
function Dt() {
  if (wt === void 0) {
    wt = window, Pr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Fr = De(t, "firstChild").get, Ur = De(t, "nextSibling").get, ar(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ar(r) && (r.__t = void 0);
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Fr.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return Ur.call(e);
}
function z(e, t) {
  if (!T)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(S)
  );
  if (r === null)
    r = S.appendChild(nt());
  else if (t && r.nodeType !== Lr) {
    var n = nt();
    return r == null || r.before(n), pe(n), n;
  }
  return pe(r), r;
}
function Mt(e, t) {
  if (!T) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ we(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Te(r) : r;
  }
  return S;
}
function q(e, t = 1, r = !1) {
  let n = T ? S : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(n);
  if (!T)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Lr) {
    var l = nt();
    return n === null ? i == null || i.after(l) : n.before(l), pe(l), l;
  }
  return pe(n), /** @type {TemplateNode} */
  n;
}
function qr(e) {
  e.textContent = "";
}
function ti(e) {
  j === null && $ === null && Hn(), $ !== null && ($.f & oe) !== 0 && j === null && qn(), Ze && Un();
}
function ri(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function He(e, t, r, n = !0) {
  var i = j, l = {
    ctx: se,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Le,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      rr(l), l.f |= kr;
    } catch (a) {
      throw ye(l), a;
    }
  else t !== null && nr(l);
  var o = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (Er | Kt)) === 0;
  if (!o && n && (i !== null && ri(l, i), $ !== null && ($.f & ve) !== 0)) {
    var s = (
      /** @type {Derived} */
      $
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Hr(e) {
  const t = He(Et, null, !1);
  return Ae(t, de), t.teardown = e, t;
}
function Xt(e) {
  ti();
  var t = j !== null && (j.f & ze) !== 0 && se !== null && !se.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      se
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: j,
      reaction: $
    });
  } else {
    var n = Zt(e);
    return n;
  }
}
function ni(e) {
  const t = He(Ue, e, !0);
  return () => {
    ye(t);
  };
}
function ii(e) {
  const t = He(Ue, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? yt(t, () => {
      ye(t), n(void 0);
    }) : (ye(t), n(void 0));
  });
}
function Zt(e) {
  return He(Ar, e, !1);
}
function Qt(e) {
  return He(Et, e, !0);
}
function X(e, t = [], r = $t) {
  const n = t.map(r);
  return Lt(() => e(...n.map(k)));
}
function Lt(e, t = 0) {
  var r = He(Et | Jt | t, e, !0);
  return r;
}
function Ke(e, t = !0) {
  return He(Et | ze, e, !0, t);
}
function Vr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ze, n = $;
    fr(!0), xe(null);
    try {
      t.call(null);
    } finally {
      fr(r), xe(n);
    }
  }
}
function Yr(e, t = !1) {
  var i;
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    (i = r.ac) == null || i.abort($r);
    var n = r.next;
    (r.f & Ue) !== 0 ? r.parent = null : ye(r, t), r = n;
  }
}
function li(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ze) === 0 && ye(t), t = r;
  }
}
function ye(e, t = !0) {
  var r = !1;
  (t || (e.f & Mn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Gr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Yr(e, t && !r), kt(e, 0), Ae(e, Wt);
  var n = e.transitions;
  if (n !== null)
    for (const l of n)
      l.stop();
  Vr(e);
  var i = e.parent;
  i !== null && i.first !== null && Jr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Gr(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(e)
    );
    e.remove(), e = r;
  }
}
function Jr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function yt(e, t) {
  var r = [];
  er(e, r, !0), Kr(r, () => {
    ye(e), t && t();
  });
}
function Kr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function er(e, t, r) {
  if ((e.f & $e) === 0) {
    if (e.f ^= $e, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, l = (n.f & Ct) !== 0 || (n.f & ze) !== 0;
      er(n, t, l ? r : !1), n = i;
    }
  }
}
function xt(e) {
  Wr(e, !0);
}
function Wr(e, t) {
  if ((e.f & $e) !== 0) {
    e.f ^= $e;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ct) !== 0 || (r.f & ze) !== 0;
      Wr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const oi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let it = [], lt = [];
function Xr() {
  var e = it;
  it = [], xr(e);
}
function Zr() {
  var e = lt;
  lt = [], xr(e);
}
function tr(e) {
  it.length === 0 && queueMicrotask(Xr), it.push(e);
}
function si(e) {
  lt.length === 0 && oi(Zr), lt.push(e);
}
function ai() {
  it.length > 0 && Xr(), lt.length > 0 && Zr();
}
function ci(e) {
  var t = (
    /** @type {Effect} */
    j
  );
  if ((t.f & kr) === 0) {
    if ((t.f & Kt) === 0)
      throw e;
    t.fn(e);
  } else
    Qr(e, t);
}
function Qr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Kt) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let ot = !1, st = null, Me = !1, Ze = !1;
function fr(e) {
  Ze = e;
}
let tt = [];
let $ = null, me = !1;
function xe(e) {
  $ = e;
}
let j = null;
function Ne(e) {
  j = e;
}
let F = null;
function en(e) {
  $ !== null && $.f & It && (F === null ? F = [$, [e]] : F[1].push(e));
}
let W = null, ie = 0, ue = null;
function ui(e) {
  ue = e;
}
let tn = 1, At = 0, Re = !1;
function rn() {
  return ++tn;
}
function zt(e) {
  var u;
  var t = e.f;
  if ((t & Le) !== 0)
    return !0;
  if ((t & qe) !== 0) {
    var r = e.deps, n = (t & oe) !== 0;
    if (r !== null) {
      var i, l, o = (t & bt) !== 0, s = n && j !== null && !Re, a = r.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (i = 0; i < a; i++)
          l = r[i], (o || !((u = l == null ? void 0 : l.reactions) != null && u.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        o && (c.f ^= bt), s && f !== null && (f.f & oe) === 0 && (c.f ^= oe);
      }
      for (i = 0; i < a; i++)
        if (l = r[i], zt(
          /** @type {Derived} */
          l
        ) && Nr(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!n || j !== null && !Re) && Ae(e, de);
  }
  return !1;
}
function nn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      F != null && F[1].includes(e) && F[0] === $ || ((l.f & ve) !== 0 ? nn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ae(l, Le) : (l.f & de) !== 0 && Ae(l, qe), nr(
        /** @type {Effect} */
        l
      )));
    }
}
function ln(e) {
  var h;
  var t = W, r = ie, n = ue, i = $, l = Re, o = F, s = se, a = me, c = e.f;
  W = /** @type {null | Value[]} */
  null, ie = 0, ue = null, Re = (c & oe) !== 0 && (me || !Me || $ === null), $ = (c & (ze | Ue)) === 0 ? e : null, F = null, ur(e.ctx), me = !1, At++, e.f |= It, e.ac !== null && (e.ac.abort($r), e.ac = null);
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), u = e.deps;
    if (W !== null) {
      var v;
      if (kt(e, ie), u !== null && ie > 0)
        for (u.length = ie + W.length, v = 0; v < W.length; v++)
          u[ie + v] = W[v];
      else
        e.deps = u = W;
      if (!Re || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & ve) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = ie; v < u.length; v++)
          ((h = u[v]).reactions ?? (h.reactions = [])).push(e);
    } else u !== null && ie < u.length && (kt(e, ie), u.length = ie);
    if (jr() && ue !== null && !me && u !== null && (e.f & (ve | qe | Le)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ue.length; v++)
        nn(
          ue[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (At++, ue !== null && (n === null ? n = ue : n.push(.../** @type {Source[]} */
    ue))), f;
  } catch (p) {
    ci(p);
  } finally {
    W = t, ie = r, ue = n, $ = i, Re = l, F = o, ur(s), me = a, e.f ^= It;
  }
}
function fi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = On.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !W.includes(t)) && (Ae(t, qe), (t.f & (oe | bt)) === 0 && (t.f ^= bt), Rr(
    /** @type {Derived} **/
    t
  ), kt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function kt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      fi(e, r[n]);
}
function rr(e) {
  var t = e.f;
  if ((t & Wt) === 0) {
    Ae(e, de);
    var r = j, n = Me;
    j = e, Me = !0;
    try {
      (t & Jt) !== 0 ? li(e) : Yr(e), Vr(e);
      var i = ln(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = tn;
      var l;
      sr && Xn && (e.f & Le) !== 0 && e.deps;
    } finally {
      Me = n, j = r;
    }
  }
}
function vi() {
  try {
    Vn();
  } catch (e) {
    if (st !== null)
      Qr(e, st);
    else
      throw e;
  }
}
function on() {
  var e = Me;
  try {
    var t = 0;
    for (Me = !0; tt.length > 0; ) {
      t++ > 1e3 && vi();
      var r = tt, n = r.length;
      tt = [];
      for (var i = 0; i < n; i++) {
        var l = hi(r[i]);
        di(l);
      }
      rt.clear();
    }
  } finally {
    ot = !1, Me = e, st = null;
  }
}
function di(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (Wt | $e)) === 0 && zt(n) && (rr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Jr(n) : n.fn = null));
    }
}
function nr(e) {
  ot || (ot = !0, queueMicrotask(on));
  for (var t = st = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Ue | ze)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  tt.push(t);
}
function hi(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, i = (n & (ze | Ue)) !== 0, l = i && (n & de) !== 0;
    if (!l && (n & $e) === 0) {
      (n & Ar) !== 0 ? t.push(r) : i ? r.f ^= de : zt(r) && rr(r);
      var o = r.first;
      if (o !== null) {
        r = o;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function m(e) {
  for (var t; ; ) {
    if (ai(), tt.length === 0)
      return ot = !1, st = null, /** @type {T} */
      t;
    ot = !0, on();
  }
}
function k(e) {
  var t = e.f, r = (t & ve) !== 0;
  if ($ !== null && !me) {
    if (!(F != null && F[1].includes(e)) || F[0] !== $) {
      var n = $.deps;
      e.rv < At && (e.rv = At, W === null && n !== null && n[ie] === e ? ie++ : W === null ? W = [e] : (!Re || !W.includes(e)) && W.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), l = i.parent;
    l !== null && (l.f & oe) === 0 && (i.f ^= oe);
  }
  return r && (i = /** @type {Derived} */
  e, zt(i) && Nr(i)), Ze && rt.has(e) ? rt.get(e) : e.v;
}
function Tt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const gi = -7169;
function Ae(e, t) {
  e.f = e.f & gi | t;
}
let vr = !1;
function sn() {
  vr || (vr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function an(e) {
  var t = $, r = j;
  xe(null), Ne(null);
  try {
    return e();
  } finally {
    xe(t), Ne(r);
  }
}
function _i(e, t, r, n = r) {
  e.addEventListener(t, () => an(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), sn();
}
const cn = /* @__PURE__ */ new Set(), Pt = /* @__PURE__ */ new Set();
function pi(e, t, r, n = {}) {
  function i(l) {
    if (n.capture || Qe.call(t, l), !l.cancelBubble)
      return an(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Ot(e, t, r, n, i) {
  var l = { capture: n, passive: i }, o = pi(e, t, r, l);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Hr(() => {
    t.removeEventListener(e, o, l);
  });
}
function un(e) {
  for (var t = 0; t < e.length; t++)
    cn.add(e[t]);
  for (var r of Pt)
    r(e);
}
function Qe(e) {
  var A;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, s = e.__root;
  if (s) {
    var a = i.indexOf(s);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    a <= c && (o = a);
  }
  if (l = /** @type {Element} */
  i[o] || e.target, l !== t) {
    pt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var f = $, u = j;
    xe(null), Ne(null);
    try {
      for (var v, h = []; l !== null; ) {
        var p = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var x = l["__" + n];
          if (x != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Yt(x)) {
              var [b, ...d] = x;
              b.apply(l, [e, ...d]);
            } else
              x.call(l, e);
        } catch (E) {
          v ? h.push(E) : v = E;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        l = p;
      }
      if (v) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, xe(f), Ne(u);
    }
  }
}
function fn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Oe(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  var r = (t & jn) !== 0, n = (t & Sn) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    if (T)
      return Oe(S, null), S;
    i === void 0 && (i = fn(l ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ we(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Pr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Oe(s, a);
    } else
      Oe(o, o);
    return o;
  };
}
function dr() {
  if (T)
    return Oe(S, null), S;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nt();
  return e.append(t, r), Oe(t, r), e;
}
function P(e, t) {
  if (T) {
    j.nodes_end = S, Je();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const bi = ["touchstart", "touchmove"];
function mi(e) {
  return bi.includes(e);
}
function ge(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function vn(e, t) {
  return dn(e, t);
}
function wi(e, t) {
  Dt(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, i = S;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(r)
    ); l && (l.nodeType !== Ge || /** @type {Comment} */
    l.data !== qt); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(l);
    if (!l)
      throw Be;
    Ce(!0), pe(
      /** @type {Comment} */
      l
    ), Je();
    const o = dn(e, { ...t, anchor: l });
    if (S === null || S.nodeType !== Ge || /** @type {Comment} */
    S.data !== Vt)
      throw ct(), Be;
    return Ce(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Be)
      return t.recover === !1 && Yn(), Dt(), qr(r), Ce(!1), vn(e, t);
    throw o;
  } finally {
    Ce(n), pe(i);
  }
}
const Ve = /* @__PURE__ */ new Map();
function dn(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: o = !0 }) {
  Dt();
  var s = /* @__PURE__ */ new Set(), a = (u) => {
    for (var v = 0; v < u.length; v++) {
      var h = u[v];
      if (!s.has(h)) {
        s.add(h);
        var p = mi(h);
        t.addEventListener(h, Qe, { passive: p });
        var x = Ve.get(h);
        x === void 0 ? (document.addEventListener(h, Qe, { passive: p }), Ve.set(h, 1)) : Ve.set(h, x + 1);
      }
    }
  };
  a(Gt(cn)), Pt.add(a);
  var c = void 0, f = ii(() => {
    var u = r ?? t.appendChild(nt());
    return Ke(() => {
      if (l) {
        We({});
        var v = (
          /** @type {ComponentContext} */
          se
        );
        v.c = l;
      }
      i && (n.$$events = i), T && Oe(
        /** @type {TemplateNode} */
        u,
        null
      ), c = e(u, n) || {}, T && (j.nodes_end = S), l && Xe();
    }), () => {
      var p;
      for (var v of s) {
        t.removeEventListener(v, Qe);
        var h = (
          /** @type {number} */
          Ve.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, Qe), Ve.delete(v)) : Ve.set(v, h);
      }
      Pt.delete(a), u !== r && ((p = u.parentNode) == null || p.removeChild(u));
    };
  });
  return Ft.set(c, f), c;
}
let Ft = /* @__PURE__ */ new WeakMap();
function yi(e, t) {
  const r = Ft.get(e);
  return r ? (Ft.delete(e), r(t)) : Promise.resolve();
}
function xi(e, t, ...r) {
  var n = e, i = yr, l;
  Lt(() => {
    i !== (i = t()) && (l && (ye(l), l = null), l = Ke(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, Ct), T && (n = S);
}
function hn(e) {
  se === null && Zn(), Xt(() => {
    const t = Tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function le(e, t, [r, n] = [0, 0]) {
  T && r === 0 && Je();
  var i = e, l = null, o = null, s = ee, a = r > 0 ? Ct : 0, c = !1;
  const f = (v, h = !0) => {
    c = !0, u(h, v);
  }, u = (v, h) => {
    if (s === (s = v)) return;
    let p = !1;
    if (T && n !== -1) {
      if (r === 0) {
        const b = Mr(i);
        b === qt ? n = 0 : b === Ht ? n = 1 / 0 : (n = parseInt(b.substring(1)), n !== n && (n = s ? 1 / 0 : -1));
      }
      const x = n > r;
      !!s === x && (i = Bt(), pe(i), Ce(!1), p = !0, n = -1);
    }
    s ? (l ? xt(l) : h && (l = Ke(() => h(i))), o && yt(o, () => {
      o = null;
    })) : (o ? xt(o) : h && (o = Ke(() => h(i, [r + 1, n]))), l && yt(l, () => {
      l = null;
    })), p && Ce(!0);
  };
  Lt(() => {
    c = !1, t(f), c || u(null, null);
  }, a), T && (i = S);
}
function Ai(e, t, r, n) {
  for (var i = [], l = t.length, o = 0; o < l; o++)
    er(t[o].e, i, !0);
  var s = l > 0 && i.length === 0 && r !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    qr(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), Se(e, t[0].prev, t[l - 1].next);
  }
  Kr(i, () => {
    for (var c = 0; c < l; c++) {
      var f = t[c];
      s || (n.delete(f.k), Se(e, f.prev, f.next)), ye(f.e, !s);
    }
  });
}
function ki(e, t, r, n, i, l = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  T && Je();
  var a = null, c = !1, f = /* @__PURE__ */ Sr(() => {
    var u = r();
    return Yt(u) ? u : u == null ? [] : Gt(u);
  });
  Lt(() => {
    var u = k(f), v = u.length;
    if (c && v === 0)
      return;
    c = v === 0;
    let h = !1;
    if (T) {
      var p = Mr(o) === Ht;
      p !== (v === 0) && (o = Bt(), pe(o), Ce(!1), h = !0);
    }
    if (T) {
      for (var x = null, b, d = 0; d < v; d++) {
        if (S.nodeType === Ge && /** @type {Comment} */
        S.data === Vt) {
          o = /** @type {Comment} */
          S, h = !0, Ce(!1);
          break;
        }
        var A = u[d], E = n(A, d);
        b = gn(
          S,
          s,
          x,
          null,
          A,
          E,
          d,
          i,
          t,
          r
        ), s.items.set(E, b), x = b;
      }
      v > 0 && pe(Bt());
    }
    T || Ei(u, s, o, i, t, n, r), l !== null && (v === 0 ? a ? xt(a) : a = Ke(() => l(o)) : a !== null && yt(a, () => {
      a = null;
    })), h && Ce(!0), k(f);
  }), T && (o = S);
}
function Ei(e, t, r, n, i, l, o) {
  var s = e.length, a = t.items, c = t.first, f = c, u, v = null, h = [], p = [], x, b, d, A;
  for (A = 0; A < s; A += 1) {
    if (x = e[A], b = l(x, A), d = a.get(b), d === void 0) {
      var E = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      v = gn(
        E,
        t,
        v,
        v === null ? t.first : v.next,
        x,
        b,
        A,
        n,
        i,
        o
      ), a.set(b, v), h = [], p = [], f = v.next;
      continue;
    }
    if (Ci(d, x, A), (d.e.f & $e) !== 0 && xt(d.e), d !== f) {
      if (u !== void 0 && u.has(d)) {
        if (h.length < p.length) {
          var B = p[0], R;
          v = B.prev;
          var H = h[0], he = h[h.length - 1];
          for (R = 0; R < h.length; R += 1)
            hr(h[R], B, r);
          for (R = 0; R < p.length; R += 1)
            u.delete(p[R]);
          Se(t, H.prev, he.next), Se(t, v, H), Se(t, he, B), f = B, v = he, A -= 1, h = [], p = [];
        } else
          u.delete(d), hr(d, f, r), Se(t, d.prev, d.next), Se(t, d, v === null ? t.first : v.next), Se(t, v, d), v = d;
        continue;
      }
      for (h = [], p = []; f !== null && f.k !== b; )
        (f.e.f & $e) === 0 && (u ?? (u = /* @__PURE__ */ new Set())).add(f), p.push(f), f = f.next;
      if (f === null)
        continue;
      d = f;
    }
    h.push(d), v = d, f = d.next;
  }
  if (f !== null || u !== void 0) {
    for (var V = u === void 0 ? [] : Gt(u); f !== null; )
      (f.e.f & $e) === 0 && V.push(f), f = f.next;
    var te = V.length;
    if (te > 0) {
      var re = null;
      Ai(t, V, re, a);
    }
  }
  j.first = t.first && t.first.e, j.last = v && v.e;
}
function Ci(e, t, r, n) {
  Br(e.v, t), e.i = r;
}
function gn(e, t, r, n, i, l, o, s, a, c) {
  var f = (a & kn) !== 0, u = (a & Cn) === 0, v = f ? u ? /* @__PURE__ */ Ir(i, !1, !1) : mt(i) : i, h = (a & En) === 0 ? o : mt(o), p = {
    i: h,
    v,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return p.e = Ke(() => s(e, v, h, c), T), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? t.first = p : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
  } finally {
  }
}
function hr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(l)
    );
    i.before(l), l = o;
  }
}
function Se(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Pe(e, t, r = !1, n = !1, i = !1) {
  var l = e, o = "";
  X(() => {
    var s = (
      /** @type {Effect} */
      j
    );
    if (o === (o = t() ?? "")) {
      T && Je();
      return;
    }
    if (s.nodes_start !== null && (Gr(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "") {
      if (T) {
        S.data;
        for (var a = Je(), c = a; a !== null && (a.nodeType !== Ge || /** @type {Comment} */
        a.data !== ""); )
          c = a, a = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(a);
        if (a === null)
          throw ct(), Be;
        Oe(S, c), l = pe(a);
        return;
      }
      var f = o + "";
      r ? f = `<svg>${f}</svg>` : n && (f = `<math>${f}</math>`);
      var u = fn(f);
      if ((r || n) && (u = /** @type {Element} */
      /* @__PURE__ */ we(u)), Oe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), r || n)
        for (; /* @__PURE__ */ we(u); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ we(u)
          );
      else
        l.before(u);
    }
  });
}
function ut(e, t) {
  tr(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const gr = [...` 	
\r\f \v\uFEFF`];
function $i(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var l = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var s = o + l;
          (o === 0 || gr.includes(n[o - 1])) && (s === n.length || gr.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Li(e, t) {
  return e == null ? null : String(e);
}
function _n(e, t, r, n, i, l) {
  var o = e.__className;
  if (T || o !== r || o === void 0) {
    var s = $i(r, n, l);
    (!T || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && i !== l)
    for (var a in l) {
      var c = !!l[a];
      (i == null || c !== !!i[a]) && e.classList.toggle(a, c);
    }
  return l;
}
function _e(e, t, r, n) {
  var i = e.__style;
  if (T || i !== t) {
    var l = Li(t);
    (!T || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return n;
}
const zi = Symbol("is custom element"), Ti = Symbol("is html");
function ji(e) {
  if (T) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          at(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          at(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, si(r), sn();
  }
}
function at(e, t, r, n) {
  var i = Si(e);
  T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Pn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ri(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Si(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [zi]: e.nodeName.includes("-"),
      [Ti]: e.namespaceURI === Rn
    })
  );
}
var _r = /* @__PURE__ */ new Map();
function Ri(e) {
  var t = _r.get(e.nodeName);
  if (t) return t;
  _r.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = Nn(n);
    for (var l in r)
      r[l].set && t.push(l);
    n = wr(n);
  }
  return t;
}
function Oi(e, t, r = t) {
  _i(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (T && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Tt(t) == null) && r(e.checked), Qt(() => {
    var n = t();
    e.checked = !!n;
  });
}
function pr(e, t) {
  return e === t || (e == null ? void 0 : e[et]) === t;
}
function Fe(e = {}, t, r, n) {
  return Zt(() => {
    var i, l;
    return Qt(() => {
      i = l, l = [], Tt(() => {
        e !== r(...l) && (t(e, ...l), i && pr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        l && pr(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let vt = !1;
function Ni(e) {
  var t = vt;
  try {
    return vt = !1, [e(), vt];
  } finally {
    vt = t;
  }
}
function Ii(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, r, n) {
  var b;
  var i = (r & zn) !== 0, l = (r & Tn) !== 0, o = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, o = l ? Tt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o), c;
  if (i) {
    var f = et in e || Cr in e;
    c = ((b = De(e, t)) == null ? void 0 : b.set) ?? (f && t in e ? (d) => e[t] = d : void 0);
  }
  var u, v = !1;
  i ? [u, v] = Ni(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t], u === void 0 && n !== void 0 && (u = a(), c && (Gn(), c(u)));
  var h;
  if (h = () => {
    var d = (
      /** @type {V} */
      e[t]
    );
    return d === void 0 ? a() : (s = !0, d);
  }, (r & Ln) === 0)
    return h;
  if (c) {
    var p = e.$$legacy;
    return function(d, A) {
      return arguments.length > 0 ? ((!A || p || v) && c(A ? h() : d), d) : h();
    };
  }
  var x = ((r & $n) !== 0 ? $t : Sr)(h);
  return i && k(x), function(d, A) {
    if (arguments.length > 0) {
      const E = A ? k(x) : i ? Ye(d) : d;
      return C(x, E), o !== void 0 && (o = E), d;
    }
    return Ii(x) ? x.v : k(x);
  };
}
function Bi(e) {
  return new Di(e);
}
var Ee, fe;
class Di {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    jt(this, Ee);
    /** @type {Record<string, any>} */
    jt(this, fe);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (o, s) => {
      var a = /* @__PURE__ */ Ir(s, !1, !1);
      return r.set(o, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return k(r.get(s) ?? n(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === Cr ? !0 : (k(r.get(s) ?? n(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, a) {
          return C(r.get(s) ?? n(s, a), a), Reflect.set(o, s, a);
        }
      }
    );
    St(this, fe, (t.hydrate ? wi : vn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && m(), St(this, Ee, i.$$events);
    for (const o of Object.keys(Q(this, fe)))
      o === "$set" || o === "$destroy" || o === "$on" || pt(this, o, {
        get() {
          return Q(this, fe)[o];
        },
        /** @param {any} value */
        set(s) {
          Q(this, fe)[o] = s;
        },
        enumerable: !0
      });
    Q(this, fe).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, Q(this, fe).$destroy = () => {
      yi(Q(this, fe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Q(this, fe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Q(this, Ee)[t] = Q(this, Ee)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return Q(this, Ee)[t].push(n), () => {
      Q(this, Ee)[t] = Q(this, Ee)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    Q(this, fe).$destroy();
  }
}
Ee = new WeakMap(), fe = new WeakMap();
let pn;
typeof HTMLElement == "function" && (pn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    K(this, "$$ctor");
    /** Slots */
    K(this, "$$s");
    /** @type {any} The Svelte component instance */
    K(this, "$$c");
    /** Whether or not the custom element is connected */
    K(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    K(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    K(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    K(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    K(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    K(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    K(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (l) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), P(l, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Mi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = gt(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Bi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ni(() => {
        Qt(() => {
          var i;
          this.$$r = !0;
          for (const l of _t(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const o = gt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const o = this.$$c.$on(i, l);
          this.$$l_u.set(l, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = gt(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return _t(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function gt(e, t, r, n) {
  var l;
  const i = (l = r[e]) == null ? void 0 : l.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Mi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ft(e, t, r, n, i, l) {
  let o = class extends pn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return _t(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return _t(t).forEach((s) => {
    pt(o.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(a) {
        var u;
        a = gt(s, a, t), this.$$d[s] = a;
        var c = this.$$c;
        if (c) {
          var f = (u = De(c, s)) == null ? void 0 : u.get;
          f ? c[s] = a : c.$set({ [s]: a });
        }
      }
    });
  }), n.forEach((s) => {
    pt(o.prototype, s, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[s];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
/*! js-cookie v3.0.5 | MIT */
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var Pi = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Ut(e, t) {
  function r(i, l, o) {
    if (!(typeof document > "u")) {
      o = dt({}, t, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var a in o)
        o[a] && (s += "; " + a, o[a] !== !0 && (s += "=" + o[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(l, i) + s;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var l = document.cookie ? document.cookie.split("; ") : [], o = {}, s = 0; s < l.length; s++) {
        var a = l[s].split("="), c = a.slice(1).join("=");
        try {
          var f = decodeURIComponent(a[0]);
          if (o[f] = e.read(c, f), i === f)
            break;
        } catch {
        }
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, l) {
        r(
          i,
          "",
          dt({}, l, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Ut(this.converter, dt({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Ut(dt({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var ht = Ut(Pi, { path: "/" });
const U = [];
for (let e = 0; e < 256; ++e)
  U.push((e + 256).toString(16).slice(1));
function Fi(e, t = 0) {
  return (U[e[t + 0]] + U[e[t + 1]] + U[e[t + 2]] + U[e[t + 3]] + "-" + U[e[t + 4]] + U[e[t + 5]] + "-" + U[e[t + 6]] + U[e[t + 7]] + "-" + U[e[t + 8]] + U[e[t + 9]] + "-" + U[e[t + 10]] + U[e[t + 11]] + U[e[t + 12]] + U[e[t + 13]] + U[e[t + 14]] + U[e[t + 15]]).toLowerCase();
}
let Nt;
const Ui = new Uint8Array(16);
function qi() {
  if (!Nt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Nt = crypto.getRandomValues.bind(crypto);
  }
  return Nt(Ui);
}
const Hi = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), br = { randomUUID: Hi };
function Vi(e, t, r) {
  var i;
  if (br.randomUUID && !e)
    return br.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? qi();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Fi(n);
}
class Yi {
  constructor(t, r, n) {
    K(this, "cookie");
    K(this, "choices");
    K(this, "fingerprinting");
    this.cookie = t, this.choices = r, this.fingerprinting = n;
  }
  save() {
    const t = Object.fromEntries(Object.entries(this.choices).map(([i, l]) => [i, !!l.value]));
    if (this.fingerprinting && (t.tracking || t.analytics)) {
      const i = JSON.parse(ht.get(this.cookie.name) ?? "{}").fingerprint ?? (this.fingerprinting === !0 ? Vi() : this.fingerprinting.uuid);
      if (this.fingerprinting !== !0 && "cookie" in this.fingerprinting) {
        const { name: l, ...o } = this.fingerprinting.cookie;
        ht.set(l, i, o);
      } else
        t.fingerprint = i;
    }
    const { name: r, ...n } = this.cookie;
    ht.set(r, JSON.stringify(t), n);
  }
  acceptAll() {
    Object.values(this.choices).forEach((t) => {
      t.value = !0;
    }), this.save();
  }
  rejectAll() {
    Object.values(this.choices).forEach((t) => {
      t.value = !!t.mandatory;
    }), this.save();
  }
  getSaved() {
    const t = ht.get(this.cookie.name);
    return t ? JSON.parse(t) : void 0;
  }
  loadSelections(t) {
    Object.entries(t).forEach(([r, n]) => {
      var i, l;
      if (r !== "fingerprint") {
        const o = this.choices[r];
        o.value = n, n ? (i = o == null ? void 0 : o.onAccepted) == null || i.call(o) : (l = o == null ? void 0 : o.onRejected) == null || l.call(o);
      }
    });
  }
}
const Gi = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--fxemoji'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20fill='%23D19B61'%20d='M30.588%20157.435C45.694%2092.479%20111.838%2011.252%20210.984%208.688s188.907%2023.082%20247.894%20100.02s58.986%20220.881%2025.646%20265.6s-41.869%20142.173-192.764%20131.914C140.866%20495.964%2087.009%20464.001%2038.281%20394.068s-28.245-148.266-7.693-236.633z'%3e%3c/path%3e%3cpath%20fill='%234F3D30'%20d='M161.834%20173.737c0%2010.843-18.425%2019.634-41.154%2019.634s-41.154-8.79-41.154-19.634c0-26.124%2043.257-30.846%2043.791-41.152c.1-1.933%202.78-3.171%205.053-2.251c11.912%204.825%2033.464%2017.179%2033.464%2043.403zm161.668%20236.249c-2.039-.662-4.442.228-4.532%201.618c-.479%207.408-39.281%2010.802-39.281%2029.579c0%207.794%2016.528%2014.112%2036.915%2014.112s36.915-6.318%2036.915-14.112c.001-18.849-19.332-27.729-30.017-31.197zm87.547-118.379c-2.039-.968-4.442.333-4.532%202.366c-.479%2010.834-39.281%2015.797-39.281%2043.258c0%2011.398%2016.528%2020.638%2036.915%2020.638s36.915-9.24%2036.915-20.638c0-27.566-19.333-40.552-30.017-45.624z'%3e%3c/path%3e%3cpath%20fill='%23332A23'%20d='M264.821%20274.863c0%2010.345-16.528%2018.731-36.915%2018.731s-36.915-8.386-36.915-18.731c0-24.923%2038.802-29.428%2039.281-39.261c.09-1.845%202.494-3.026%204.532-2.147c10.684%204.603%2030.017%2016.389%2030.017%2041.408zm6.898-210.826c-2.039-.662-4.442.228-4.532%201.618c-.479%207.408-39.281%2010.802-39.281%2029.579c0%207.794%2016.528%2014.112%2036.915%2014.112s36.915-6.318%2036.915-14.112c0-18.849-19.333-27.729-30.017-31.197zm121.102%2054.782c-1.858-.913-4.049.315-4.131%202.233c-.437%2010.227-35.806%2014.912-35.806%2040.833c0%2010.759%2015.065%2019.482%2033.65%2019.482c18.584%200%2033.65-8.722%2033.65-19.482c-.002-26.021-17.624-38.279-27.363-43.066zm-235.287%20237.23c-2.272-1.117-4.951.385-5.052%202.731c-.534%2012.504-43.782%2018.233-43.782%2049.929c0%2013.156%2018.421%2023.821%2041.145%2023.821c22.724%200%2041.145-10.665%2041.145-23.821c0-31.818-21.548-46.806-33.456-52.66z'%3e%3c/path%3e%3c/svg%3e";
var Ji = /* @__PURE__ */ Z('<button><img alt="Edit Cookies" width="50px" height="50px" class="svelte-1dtbu2x"/></button>');
const Ki = {
  hash: "svelte-1dtbu2x",
  code: ".edit.svelte-1dtbu2x {position:fixed;z-index:9999;cursor:pointer;bottom:10px;background-color:inherit;border:none;}.edit.right.svelte-1dtbu2x {right:1vw;margin-left:1vw;}.edit.left.svelte-1dtbu2x {left:1vw;margin-right:1vw;}.edit.svelte-1dtbu2x img:where(.svelte-1dtbu2x) {width:50px;}"
};
function bn(e, t) {
  We(t, !0), ut(e, Ki);
  const r = w(t, "onclick", 7), n = w(t, "position", 7);
  var i = Ji();
  let l;
  i.__click = function(...s) {
    var a;
    (a = r()) == null || a.apply(this, s);
  };
  var o = z(i);
  return L(i), X(
    (s) => {
      l = _n(i, 1, "edit svelte-1dtbu2x", null, l, s), at(o, "src", Gi);
    },
    [
      () => ({ right: n() === "right", left: n() === "left" })
    ]
  ), P(e, i), Xe({
    get onclick() {
      return r();
    },
    set onclick(s) {
      r(s), m();
    },
    get position() {
      return n();
    },
    set position(s) {
      n(s), m();
    }
  });
}
un(["click"]);
ft(bn, { onclick: {}, position: {} }, [], [], !0);
var Wi = /* @__PURE__ */ Z('<div class="choice svelte-81tpmv"><input type="checkbox" class="svelte-81tpmv"/> <label class="svelte-81tpmv"><strong class="svelte-81tpmv"> </strong> - <!></label></div>'), Xi = /* @__PURE__ */ Z('<button type="button" class="reject svelte-81tpmv"> </button>'), Zi = /* @__PURE__ */ Z('<button type="button" class="accept svelte-81tpmv"> </button>'), Qi = /* @__PURE__ */ Z("<!> <!>", 1), el = /* @__PURE__ */ Z('<div class="customize svelte-81tpmv" role="dialog" aria-modal="true" aria-labelledby="cookie-box-title" aria-describedby="cookie-box-description"><div class="svelte-81tpmv"><h3 id="cookie-box-title" class="svelte-81tpmv"><!></h3> <button type="button" class="close svelte-81tpmv" aria-label="Close cookie preferences">&#x2715;</button> <p id="cookie-box-description" class="svelte-81tpmv"><!></p></div> <form class="svelte-81tpmv"><h4 class="svelte-81tpmv"> </h4> <!> <div class="button-group svelte-81tpmv"><!> <button type="submit" class="confirm svelte-81tpmv"> </button></div></form></div>');
const tl = {
  hash: "svelte-81tpmv",
  code: '.customize.svelte-81tpmv {z-index:9999;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:min(1000px, 80vw);background-color:var(--bg-color);color:var(--fg-color);padding:30px;pointer-events:auto;backdrop-filter:"blur(5px)";border-radius:10px;box-shadow:0 8px 24px rgba(0, 0, 0, 0.15);}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) {box-sizing:border-box;margin:0;padding:0;position:relative;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) h3:where(.svelte-81tpmv) {font-size:18px;font-weight:bold;margin-bottom:10px;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {position:absolute;right:10px;top:-10px;font-size:large;font-weight:bolder;cursor:pointer;background-color:inherit;color:inherit;border:none;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) p:where(.svelte-81tpmv) {font-size:14px;line-height:1.5;margin-bottom:16px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) h4:where(.svelte-81tpmv) {font-size:16px;margin:16px 0 10px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) {display:flex;align-items:flex-start;gap:0.5rem;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) input[type=checkbox]:where(.svelte-81tpmv) {transform:scale(1.1);}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) label:where(.svelte-81tpmv) {display:inline-block;font-size:14px;margin-bottom:10px;line-height:1.4;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) label:where(.svelte-81tpmv) strong:where(.svelte-81tpmv) {font-weight:600;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {cursor:pointer;font-weight:600;padding:10px;border:2px solid white;transition:all 0.7s;border-radius:5px;font-size:medium;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) button:where(.svelte-81tpmv):hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) {display:flex;gap:10px;margin-top:16px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {flex:1;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) button.confirm:where(.svelte-81tpmv) {flex:2;}'
};
function mn(e, t) {
  We(t, !0), ut(e, tl);
  const r = w(t, "heading", 7), n = w(t, "description", 7), i = w(t, "customize", 7), l = w(t, "choices", 7), o = w(t, "acceptAllLabel", 7), s = w(t, "rejectAllLabel", 7), a = w(t, "close", 7), c = w(t, "save", 7), f = w(t, "acceptAll", 7), u = w(t, "rejectAll", 7);
  let v = /* @__PURE__ */ M(void 0);
  const h = (g) => g.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  let p = /* @__PURE__ */ M((g) => {
  });
  const x = (g) => {
    g.key === "Escape" && a()();
  };
  hn(() => {
    setTimeout(
      () => {
        C(p, (g) => {
          var y;
          (y = k(v)) != null && y.contains(g.target) || a()();
        });
      },
      100
    );
  });
  const b = () => {
    a()();
  };
  Xt(() => {
    var y;
    const g = Array.from(((y = k(v)) == null ? void 0 : y.querySelectorAll("a")) || []);
    return g.forEach((_) => {
      _.addEventListener("click", b);
    }), () => {
      g.forEach((_) => {
        _.removeEventListener("click", b);
      });
    };
  });
  var d = el();
  Ot("keydown", wt, x), Ot("click", wt, function(...g) {
    var y;
    (y = k(p)) == null || y.apply(this, g);
  });
  var A = z(d), E = z(A), B = z(E);
  Pe(B, r), L(E);
  var R = q(E, 2);
  R.__click = function(...g) {
    var y;
    (y = a()) == null || y.apply(this, g);
  };
  var H = q(R, 2), he = z(H);
  Pe(he, n), L(H), L(A);
  var V = q(A, 2), te = z(V), re = z(te, !0);
  L(te);
  var be = q(te, 2);
  ki(be, 17, () => Object.entries(l()), ([g, y]) => g, (g, y) => {
    var _ = /* @__PURE__ */ Qn(() => Dn(k(y), 2));
    let O = () => k(_)[1];
    var ae = Wi(), Y = z(ae);
    ji(Y);
    var G = q(Y, 2), I = z(G), ne = z(I, !0);
    L(I);
    var ce = q(I, 2);
    Pe(ce, () => O().description), L(G), L(ae), X(
      (J, wn) => {
        at(Y, "id", J), Y.disabled = O().mandatory, at(G, "for", wn), ge(ne, O().label);
      },
      [
        () => h(O().label),
        () => h(O().label)
      ]
    ), Oi(Y, () => O().value, (J) => O().value = J), P(g, ae);
  });
  var je = q(be, 2), ke = z(je);
  {
    var Ie = (g) => {
      var y = Qi(), _ = Mt(y);
      {
        var O = (G) => {
          var I = Xi();
          I.__click = function(...ce) {
            var J;
            (J = u()) == null || J.apply(this, ce);
          };
          var ne = z(I, !0);
          L(I), X(() => ge(ne, typeof s() == "string" ? s() : s().text)), P(G, I);
        };
        le(_, (G) => {
          s() && G(O);
        });
      }
      var ae = q(_, 2);
      {
        var Y = (G) => {
          var I = Zi();
          I.__click = function(...ce) {
            var J;
            (J = f()) == null || J.apply(this, ce);
          };
          var ne = z(I, !0);
          L(I), X(() => ge(ne, typeof o() == "string" ? o() : o().text)), P(G, I);
        };
        le(ae, (G) => {
          o() && G(Y);
        });
      }
      P(g, y);
    };
    le(ke, (g) => {
      i().showAcceptRejectAllButtons && g(Ie);
    });
  }
  var D = q(ke, 2), N = z(D, !0);
  return L(D), L(je), L(V), L(d), Fe(d, (g) => C(v, g), () => k(v)), X(() => {
    ge(re, i().chooseLabel), ge(N, i().confirmLabel);
  }), Ot("submit", V, function(...g) {
    var y;
    (y = c()) == null || y.apply(this, g);
  }), P(e, d), Xe({
    get heading() {
      return r();
    },
    set heading(g) {
      r(g), m();
    },
    get description() {
      return n();
    },
    set description(g) {
      n(g), m();
    },
    get customize() {
      return i();
    },
    set customize(g) {
      i(g), m();
    },
    get choices() {
      return l();
    },
    set choices(g) {
      l(g), m();
    },
    get acceptAllLabel() {
      return o();
    },
    set acceptAllLabel(g) {
      o(g), m();
    },
    get rejectAllLabel() {
      return s();
    },
    set rejectAllLabel(g) {
      s(g), m();
    },
    get close() {
      return a();
    },
    set close(g) {
      a(g), m();
    },
    get save() {
      return c();
    },
    set save(g) {
      c(g), m();
    },
    get acceptAll() {
      return f();
    },
    set acceptAll(g) {
      f(g), m();
    },
    get rejectAll() {
      return u();
    },
    set rejectAll(g) {
      u(g), m();
    }
  });
}
un(["click"]);
ft(
  mn,
  {
    heading: {},
    description: {},
    customize: {},
    choices: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    close: {},
    save: {},
    acceptAll: {},
    rejectAll: {}
  },
  [],
  [],
  !0
);
var rl = /* @__PURE__ */ Z('<div role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description"><!></div>');
const nl = {
  hash: "svelte-yse54d",
  code: '.blury-background-for-cookie-consent {pointer-events:none;overflow:hidden;position:relative;}.blury-background-for-cookie-consent::after {content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;backdrop-filter:blur(2px);filter:blur(2px);z-index:0;pointer-events:none;}'
};
function ir(e, t) {
  We(t, !0), ut(e, nl);
  const r = w(t, "cookie", 7), n = w(t, "heading", 7), i = w(t, "description", 7), l = w(t, "customize", 7), o = w(t, "choices", 15), s = w(t, "editable", 7), a = w(t, "fingerprinting", 7, !0), c = w(t, "bgColor", 7), f = w(t, "fgColor", 7), u = w(t, "position", 7, "right"), v = w(t, "acceptAllLabel", 7), h = w(t, "rejectAllLabel", 7), p = w(t, "customizeBtn", 7), x = w(t, "rejectAllBtn", 7), b = w(t, "acceptAllBtn", 7), d = w(t, "children", 7);
  let A = /* @__PURE__ */ M(!1), E = /* @__PURE__ */ M(!1), B = /* @__PURE__ */ M("box");
  const R = new Yi(r(), o(), a()), H = () => {
    R.save(), C(B, "close");
  }, he = () => {
    R.acceptAll(), C(A, !1), C(B, "close");
  }, V = () => {
    R.rejectAll(), C(A, !1), C(B, "close");
  }, te = () => {
    C(E, !0), document.documentElement.classList.add("blury-background-for-cookie-consent");
  }, re = () => {
    document.documentElement.classList.remove("blury-background-for-cookie-consent"), C(E, !1), C(A, k(B) === "box");
  }, be = (_) => {
    _.preventDefault(), H(), re(), C(A, !1);
  }, je = (_) => {
    _.preventDefault(), R.acceptAll(), re(), C(A, !1);
  }, ke = (_) => {
    _.preventDefault(), R.rejectAll(), re(), C(A, !1);
  }, Ie = () => {
    C(A, !0), te();
  };
  hn(() => {
    let _ = R.getSaved();
    if (!_) return void C(A, !0);
    R.loadSelections(_), C(B, "close");
  }), Xt(() => {
    var Y, G, I;
    const _ = te, O = V, ae = he;
    return (Y = p()) == null || Y.addEventListener("click", _), (G = x()) == null || G.addEventListener("click", O), (I = b()) == null || I.addEventListener("click", ae), () => {
      var ne, ce, J;
      (ne = p()) == null || ne.removeEventListener("click", _), (ce = x()) == null || ce.removeEventListener("click", O), (J = b()) == null || J.removeEventListener("click", ae);
    };
  });
  var D = dr(), N = Mt(D);
  {
    var g = (_) => {
      var O = rl(), ae = z(O);
      {
        var Y = (I) => {
          var ne = dr(), ce = Mt(ne);
          xi(ce, () => d() ?? yr), P(I, ne);
        }, G = (I, ne) => {
          {
            var ce = (J) => {
              mn(J, {
                get heading() {
                  return n();
                },
                get description() {
                  return i();
                },
                get customize() {
                  return l();
                },
                get choices() {
                  return o();
                },
                get acceptAllLabel() {
                  return v();
                },
                get rejectAllLabel() {
                  return h();
                },
                close: re,
                save: be,
                acceptAll: je,
                rejectAll: ke
              });
            };
            le(
              I,
              (J) => {
                l() && J(ce);
              },
              ne
            );
          }
        };
        le(ae, (I) => {
          k(E) ? I(G, !1) : I(Y);
        });
      }
      L(O), X(() => _e(O, `--bg-color: ${c() ?? ""}; --fg-color: ${f() ?? ""}`)), P(_, O);
    }, y = (_, O) => {
      {
        var ae = (Y) => {
          bn(Y, {
            onclick: Ie,
            get position() {
              return u();
            }
          });
        };
        le(
          _,
          (Y) => {
            s() && Y(ae);
          },
          O
        );
      }
    };
    le(N, (_) => {
      k(A) ? _(g) : _(y, !1);
    });
  }
  return P(e, D), Xe({
    get cookie() {
      return r();
    },
    set cookie(_) {
      r(_), m();
    },
    get heading() {
      return n();
    },
    set heading(_) {
      n(_), m();
    },
    get description() {
      return i();
    },
    set description(_) {
      i(_), m();
    },
    get customize() {
      return l();
    },
    set customize(_) {
      l(_), m();
    },
    get choices() {
      return o();
    },
    set choices(_) {
      o(_), m();
    },
    get editable() {
      return s();
    },
    set editable(_) {
      s(_), m();
    },
    get fingerprinting() {
      return a();
    },
    set fingerprinting(_ = !0) {
      a(_), m();
    },
    get bgColor() {
      return c();
    },
    set bgColor(_) {
      c(_), m();
    },
    get fgColor() {
      return f();
    },
    set fgColor(_) {
      f(_), m();
    },
    get position() {
      return u();
    },
    set position(_ = "right") {
      u(_), m();
    },
    get acceptAllLabel() {
      return v();
    },
    set acceptAllLabel(_) {
      v(_), m();
    },
    get rejectAllLabel() {
      return h();
    },
    set rejectAllLabel(_) {
      h(_), m();
    },
    get customizeBtn() {
      return p();
    },
    set customizeBtn(_) {
      p(_), m();
    },
    get rejectAllBtn() {
      return x();
    },
    set rejectAllBtn(_) {
      x(_), m();
    },
    get acceptAllBtn() {
      return b();
    },
    set acceptAllBtn(_) {
      b(_), m();
    },
    get children() {
      return d();
    },
    set children(_) {
      d(_), m();
    }
  });
}
ft(
  ir,
  {
    cookie: {},
    heading: {},
    description: {},
    customize: {},
    choices: {},
    editable: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {},
    position: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customizeBtn: {},
    rejectAllBtn: {},
    acceptAllBtn: {},
    children: {}
  },
  [],
  [],
  !0
);
var il = /* @__PURE__ */ Z('<button type="button" id="customize" class="svelte-3al1ct"> </button>'), ll = /* @__PURE__ */ Z('<button type="button" id="reject" class="svelte-3al1ct"> </button>'), ol = /* @__PURE__ */ Z('<button type="button" id="accept" class="svelte-3al1ct"> </button>'), sl = /* @__PURE__ */ Z('<div><div><h3 id="cookie-consent-title" class="svelte-3al1ct"><!></h3> <p id="cookie-consent-description"><!></p></div> <div class="actions svelte-3al1ct"><!> <!> <!></div></div>');
const al = {
  hash: "svelte-3al1ct",
  code: `.box.svelte-3al1ct {z-index:9999;position:fixed;bottom:1vw;display:flex;flex-direction:column;gap:20px;max-width:500px;background-color:var(--bg-color);color:var(--fg-color);padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.7);}.box.right.svelte-3al1ct {right:1vw;margin-left:1vw;}.box.left.svelte-3al1ct {left:1vw;margin-right:1vw;}.box.svelte-3al1ct h3:where(.svelte-3al1ct) {font-size:larger;font-weight:500;margin-top:0;}.box.svelte-3al1ct .actions:where(.svelte-3al1ct) {display:flex;justify-content:flex-end;gap:15px;}
@media (max-width: 600px) {.box.svelte-3al1ct .actions:where(.svelte-3al1ct) {flex-direction:column;align-items:center;}.box.svelte-3al1ct .actions:where(.svelte-3al1ct) button:where(.svelte-3al1ct) {width:100%;}
}button.svelte-3al1ct {cursor:pointer;padding:10px;border:2px solid var(--fg-color);color:var(--bg-color);transition:all 0.7s;border-radius:5px;font-size:medium;width:33.3333333333%;}button#customize.svelte-3al1ct {background-color:inherit;color:inherit;border:none;font-size:1.1em;}button.svelte-3al1ct:hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}`
};
function cl(e, t) {
  We(t, !0), ut(e, al);
  let r = /* @__PURE__ */ M(void 0), n = /* @__PURE__ */ M(void 0), i = /* @__PURE__ */ M(void 0);
  const l = w(t, "cookie", 7), o = w(t, "heading", 7), s = w(t, "description", 7), a = w(t, "acceptAllLabel", 7), c = w(t, "rejectAllLabel", 7), f = w(t, "customize", 7), u = w(t, "choices", 15), v = w(t, "editable", 7, !0), h = w(t, "fingerprinting", 7, !1), p = w(t, "bgColor", 7, "#000000"), x = w(t, "fgColor", 7, "#ffffff"), b = w(t, "position", 7, "right");
  return ir(e, {
    get cookie() {
      return l();
    },
    get heading() {
      return o();
    },
    get description() {
      return s();
    },
    get acceptAllLabel() {
      return a();
    },
    get rejectAllLabel() {
      return c();
    },
    get customize() {
      return f();
    },
    get choices() {
      return u();
    },
    get editable() {
      return v();
    },
    get fingerprinting() {
      return h();
    },
    get bgColor() {
      return p();
    },
    get fgColor() {
      return x();
    },
    get position() {
      return b();
    },
    get customizeBtn() {
      return k(r);
    },
    get rejectAllBtn() {
      return k(n);
    },
    get acceptAllBtn() {
      return k(i);
    },
    children: (d, A) => {
      var E = sl();
      let B;
      var R = z(E), H = z(R), he = z(H);
      Pe(he, () => typeof o() == "string" ? o() : o().text), L(H);
      var V = q(H, 2), te = z(V);
      Pe(te, () => typeof s() == "string" ? s() : s().text), L(V), L(R);
      var re = q(R, 2), be = z(re);
      {
        var je = (g) => {
          var y = il(), _ = z(y, !0);
          L(y), Fe(y, (O) => C(r, O), () => k(r)), X(() => {
            _e(y, f().style), ge(_, f().label);
          }), P(g, y);
        };
        le(be, (g) => {
          f() && g(je);
        });
      }
      var ke = q(be, 2);
      {
        var Ie = (g) => {
          var y = ll(), _ = z(y, !0);
          L(y), Fe(y, (O) => C(n, O), () => k(n)), X(() => {
            _e(y, typeof c() == "object" ? c().style : void 0), ge(_, typeof c() == "string" ? c() : c().text);
          }), P(g, y);
        };
        le(ke, (g) => {
          c() && g(Ie);
        });
      }
      var D = q(ke, 2);
      {
        var N = (g) => {
          var y = ol(), _ = z(y, !0);
          L(y), Fe(y, (O) => C(i, O), () => k(i)), X(() => {
            _e(y, typeof a() == "object" ? a().style : void 0), ge(_, typeof a() == "string" ? a() : a().text);
          }), P(g, y);
        };
        le(D, (g) => {
          a() && g(N);
        });
      }
      L(re), L(E), X(
        (g) => {
          B = _n(E, 1, "box svelte-3al1ct", null, B, g), _e(H, typeof o() == "object" ? o().style : void 0), _e(V, typeof s() == "object" ? s().style : void 0);
        },
        [
          () => ({ right: b() === "right", left: b() === "left" })
        ]
      ), P(d, E);
    },
    $$slots: { default: !0 }
  }), Xe({
    get cookie() {
      return l();
    },
    set cookie(d) {
      l(d), m();
    },
    get heading() {
      return o();
    },
    set heading(d) {
      o(d), m();
    },
    get description() {
      return s();
    },
    set description(d) {
      s(d), m();
    },
    get acceptAllLabel() {
      return a();
    },
    set acceptAllLabel(d) {
      a(d), m();
    },
    get rejectAllLabel() {
      return c();
    },
    set rejectAllLabel(d) {
      c(d), m();
    },
    get customize() {
      return f();
    },
    set customize(d) {
      f(d), m();
    },
    get choices() {
      return u();
    },
    set choices(d) {
      u(d), m();
    },
    get editable() {
      return v();
    },
    set editable(d = !0) {
      v(d), m();
    },
    get fingerprinting() {
      return h();
    },
    set fingerprinting(d = !1) {
      h(d), m();
    },
    get bgColor() {
      return p();
    },
    set bgColor(d = "#000000") {
      p(d), m();
    },
    get fgColor() {
      return x();
    },
    set fgColor(d = "#ffffff") {
      x(d), m();
    },
    get position() {
      return b();
    },
    set position(d = "right") {
      b(d), m();
    }
  });
}
customElements.define("cookie-box", ft(
  cl,
  {
    cookie: {},
    heading: {},
    description: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customize: {},
    choices: {},
    editable: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {},
    position: {}
  },
  [],
  [],
  !0
));
var ul = /* @__PURE__ */ Z('<button type="button" id="customize" class="svelte-7s1wlw"> </button>'), fl = /* @__PURE__ */ Z('<button type="button" id="reject" class="svelte-7s1wlw"> </button>'), vl = /* @__PURE__ */ Z('<button type="button" id="accept" class="svelte-7s1wlw"> </button>'), dl = /* @__PURE__ */ Z('<div class="banner svelte-7s1wlw"><div><h3 id="cookie-consent-title" class="svelte-7s1wlw"><!></h3> <p id="cookie-consent-description" class="svelte-7s1wlw"><!></p></div> <div class="actions svelte-7s1wlw"><!> <!> <!></div></div>');
const hl = {
  hash: "svelte-7s1wlw",
  code: `.banner.svelte-7s1wlw {z-index:9999;position:fixed;bottom:1vw;left:1vw;right:1vw;box-shadow:0 0 10px rgba(0, 0, 0, 0.8);display:flex;flex-direction:row;width:95vw;background-color:var(--bg-color);color:var(--fg-color);padding:12px 16px;margin:auto;}
@media (max-width: 600px) {.banner.svelte-7s1wlw {flex-direction:column;align-items:center;}
}.banner.svelte-7s1wlw h3:where(.svelte-7s1wlw) {font-size:1em;font-weight:400;margin-top:0;margin-bottom:5px;}.banner.svelte-7s1wlw p:where(.svelte-7s1wlw) {margin:0;font-size:0.9em;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) {width:33.3333333333%;display:flex;justify-content:flex-end;align-items:center;gap:15px;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw) {cursor:pointer;padding:5px;border:2px solid var(--fg-color);color:var(--bg-color);transition:all 0.7s;font-size:0.9em;width:33.3333333333%;height:50%;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button#customize:where(.svelte-7s1wlw) {background-color:inherit;color:inherit;border:none;font-size:1em;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw):hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}
@media (max-width: 600px) {.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) {flex-direction:column;align-items:center;width:100%;margin-top:15px;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw) {width:100%;}
}`
};
function gl(e, t) {
  We(t, !0), ut(e, hl);
  let r = /* @__PURE__ */ M(void 0), n = /* @__PURE__ */ M(void 0), i = /* @__PURE__ */ M(void 0);
  const l = w(t, "cookie", 7), o = w(t, "heading", 7), s = w(t, "description", 7), a = w(t, "acceptAllLabel", 7), c = w(t, "rejectAllLabel", 7), f = w(t, "customize", 7), u = w(t, "choices", 15), v = w(t, "editable", 7, !0), h = w(t, "fingerprinting", 7, !1), p = w(t, "bgColor", 7, "#000000"), x = w(t, "fgColor", 7, "#ffffff");
  return ir(e, {
    get cookie() {
      return l();
    },
    get heading() {
      return o();
    },
    get description() {
      return s();
    },
    get acceptAllLabel() {
      return a();
    },
    get rejectAllLabel() {
      return c();
    },
    get customize() {
      return f();
    },
    get choices() {
      return u();
    },
    get editable() {
      return v();
    },
    get fingerprinting() {
      return h();
    },
    get bgColor() {
      return p();
    },
    get fgColor() {
      return x();
    },
    get customizeBtn() {
      return k(r);
    },
    get rejectAllBtn() {
      return k(n);
    },
    get acceptAllBtn() {
      return k(i);
    },
    children: (b, d) => {
      var A = dl(), E = z(A), B = z(E), R = z(B);
      Pe(R, () => typeof o() == "string" ? o() : o().text), L(B);
      var H = q(B, 2), he = z(H);
      Pe(he, () => typeof s() == "string" ? s() : s().text), L(H), L(E);
      var V = q(E, 2), te = z(V);
      {
        var re = (D) => {
          var N = ul(), g = z(N, !0);
          L(N), Fe(N, (y) => C(r, y), () => k(r)), X(() => {
            _e(N, f().style), ge(g, f().label);
          }), P(D, N);
        };
        le(te, (D) => {
          f() && D(re);
        });
      }
      var be = q(te, 2);
      {
        var je = (D) => {
          var N = fl(), g = z(N, !0);
          L(N), Fe(N, (y) => C(n, y), () => k(n)), X(() => {
            _e(N, typeof c() == "object" ? c().style : void 0), ge(g, typeof c() == "string" ? c() : c().text);
          }), P(D, N);
        };
        le(be, (D) => {
          c() && D(je);
        });
      }
      var ke = q(be, 2);
      {
        var Ie = (D) => {
          var N = vl(), g = z(N, !0);
          L(N), Fe(N, (y) => C(i, y), () => k(i)), X(() => {
            _e(N, typeof a() == "object" ? a().style : void 0), ge(g, typeof a() == "string" ? a() : a().text);
          }), P(D, N);
        };
        le(ke, (D) => {
          a() && D(Ie);
        });
      }
      L(V), L(A), X(() => {
        _e(B, typeof o() == "object" ? o().style : void 0), _e(H, typeof s() == "object" ? s().style : void 0);
      }), P(b, A);
    },
    $$slots: { default: !0 }
  }), Xe({
    get cookie() {
      return l();
    },
    set cookie(b) {
      l(b), m();
    },
    get heading() {
      return o();
    },
    set heading(b) {
      o(b), m();
    },
    get description() {
      return s();
    },
    set description(b) {
      s(b), m();
    },
    get acceptAllLabel() {
      return a();
    },
    set acceptAllLabel(b) {
      a(b), m();
    },
    get rejectAllLabel() {
      return c();
    },
    set rejectAllLabel(b) {
      c(b), m();
    },
    get customize() {
      return f();
    },
    set customize(b) {
      f(b), m();
    },
    get choices() {
      return u();
    },
    set choices(b) {
      u(b), m();
    },
    get editable() {
      return v();
    },
    set editable(b = !0) {
      v(b), m();
    },
    get fingerprinting() {
      return h();
    },
    set fingerprinting(b = !1) {
      h(b), m();
    },
    get bgColor() {
      return p();
    },
    set bgColor(b = "#000000") {
      p(b), m();
    },
    get fgColor() {
      return x();
    },
    set fgColor(b = "#ffffff") {
      x(b), m();
    }
  });
}
customElements.define("cookie-banner", ft(
  gl,
  {
    cookie: {},
    heading: {},
    description: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customize: {},
    choices: {},
    editable: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {}
  },
  [],
  [],
  !0
));
export {
  gl as CookieBanner,
  cl as CookieBox
};
