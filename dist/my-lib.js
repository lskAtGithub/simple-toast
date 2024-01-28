function r(l, o, e, s) {
  if (e === "a" && !s)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof o == "function" ? l !== o || !s : !o.has(l))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? s : e === "a" ? s.call(l) : s ? s.value : o.get(l);
}
function d(l, o, e, s, n) {
  if (s === "m")
    throw new TypeError("Private method is not writable");
  if (s === "a" && !n)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof o == "function" ? l !== o || !n : !o.has(l))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? n.call(l, e) : n ? n.value = e : o.set(l, e), e;
}
var c, i, h, g, p, w, u;
function m(l, o) {
  switch (l) {
    case "info":
      return `<svg t="1706352827061" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5252" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m36.571429 341.333333h-73.142858v292.571428h73.142858V438.857143z m0-121.904762h-73.142858v73.142857h73.142858v-73.142857z" p-id="5253" fill="currentColor"></path></svg>`;
    case "success":
      return `<svg t="1706352864705" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6223" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="6224" fill="currentColor"></path></svg>`;
    case "warning":
      return `<svg t="1706352900701" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7203" width="${o}" height="${o}"><path d="M901 757.3L582.5 184.5c-15.4-27.7-43-41.5-70.5-41.5-27.6 0-55.2 13.8-70.5 41.5L123 757.3c-29.9 53.8 9 119.9 70.5 119.9h636.9c61.6 0.1 100.5-66.1 70.6-119.9zM479 370.6c0-18.2 14.8-33 33-33s33 14.8 33 33v220.8c0 18.2-14.8 33-33 33s-33-14.8-33-33V370.6zM512 766c-23.5 0-42.5-19-42.5-42.5s19-42.5 42.5-42.5 42.5 19 42.5 42.5-19 42.5-42.5 42.5z" fill="currentColor" p-id="7204"></path></svg>`;
    case "error":
      return `<svg t="1706347999579" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4224" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m129.29219 233.447619l-129.267809 129.29219-129.316571-129.29219-51.736381 51.736381 129.316571 129.267809-129.316571 129.316571 51.736381 51.736381L512 563.687619l129.29219 129.316571 51.736381-51.73638L563.687619 512l129.316571-129.29219-51.73638-51.736381z" p-id="4225" fill="currentColor"></path></svg>`;
  }
}
class v {
  constructor(o = {}) {
    c.add(this), i.set(this, {
      duration: 3e3,
      typeColor: {
        infoColor: "#fff",
        successColor: "#fff",
        warningColor: "#fff",
        errorColor: "#fff",
        infoBgColor: "#409eff",
        successBgColor: "#67c23a",
        warningBgColor: "#e6a23c",
        errorBgColor: "#f56c6c"
      }
    }), h.set(this, []), g.set(this, 20), o.duration && (r(this, i, "f").duration = o.duration), o.typeColor && (o.typeColor.errorBgColor && (r(this, i, "f").typeColor.errorBgColor = o.typeColor.errorBgColor), o.typeColor.warningBgColor && (r(this, i, "f").typeColor.warningBgColor = o.typeColor.warningBgColor), o.typeColor.successBgColor && (r(this, i, "f").typeColor.successBgColor = o.typeColor.successBgColor), o.typeColor.infoBgColor && (r(this, i, "f").typeColor.infoBgColor = o.typeColor.infoBgColor), o.typeColor.errorColor && (r(this, i, "f").typeColor.errorColor = o.typeColor.errorColor), o.typeColor.warningColor && (r(this, i, "f").typeColor.warningColor = o.typeColor.warningColor), o.typeColor.successColor && (r(this, i, "f").typeColor.successColor = o.typeColor.successColor), o.typeColor.infoColor && (r(this, i, "f").typeColor.infoColor = o.typeColor.infoColor));
  }
  info(o, e = {}) {
    r(this, c, "m", p).call(this, o, "info", e);
  }
  success(o, e = {}) {
    r(this, c, "m", p).call(this, o, "success", e);
  }
  error(o, e = {}) {
    r(this, c, "m", p).call(this, o, "error", e);
  }
  warn(o, e = {}) {
    r(this, c, "m", p).call(this, o, "warning", e);
  }
}
i = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), p = function(o, e, s = {}) {
  let n = s.duration || r(this, i, "f").duration, t = s.color || r(this, i, "f").typeColor[`${e}Color`], f = s.bgColor || r(this, i, "f").typeColor[`${e}BgColor`], a = r(this, c, "m", w).call(this, e, o, t, f);
  r(this, h, "f").push(a), r(this, c, "m", u).call(this, a, n);
}, w = function(o, e, s, n) {
  const t = document.createElement("div"), f = `--${r(this, h, "f").length}-${(/* @__PURE__ */ new Date()).getTime()}`;
  t.id = f, t.style.position = "fixed", t.style.zIndex = "2147483647", t.style.top = `${r(this, g, "f")}px`, t.style.left = "50%", t.style.padding = "12px 18px", t.style.borderRadius = "3px", t.style.fontSize = "14px", t.style.color = s, t.style.backgroundColor = n, t.classList.add("fade-in"), t.style.transition = "all 0.3s", t.style.opacity = "1", t.style.display = "flex", t.style.alignItems = "flex-start", t.style.gap = "6px", t.innerHTML = m(o, 20);
  const a = document.createTextNode(e);
  return t.appendChild(a), document.body.appendChild(t), f;
}, u = function(o, e) {
  const s = document.getElementById(o), n = s.offsetHeight + 20;
  d(this, g, r(this, g, "f") + n, "f");
  const t = this;
  setTimeout(() => {
    s.addEventListener("animationend", function() {
      var f;
      this.remove(), d(t, h, r(t, h, "f").filter((a) => a !== o), "f"), r(t, h, "f").forEach((a) => {
        const C = document.getElementById(a), y = Number(C.style.top.replace(/[^0-9]/g, "")) - n;
        C.style.top = `${y}px`;
      }), d(f = t, g, r(f, g, "f") - n, "f");
    }), s.classList.remove("fade-in"), s.classList.add("fade-out");
  }, e);
};
function x() {
  console.warn(`[simple toast][WARNING][${(/* @__PURE__ */ new Date()).toLocaleTimeString()}]

您正在尝试多次实例化SpMessage，我们会返回最初的实例，这可能会导致达不到您的使用预期

`);
}
function _(l) {
  let o = null;
  return new Proxy(l, {
    construct(e, s) {
      return o === null ? o = new e(...s) : x(), o;
    }
  });
}
const B = _(v);
export {
  B as SpMessage
};