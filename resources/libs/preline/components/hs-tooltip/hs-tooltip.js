/*! For license information please see hs-tooltip.js.LICENSE.txt */
!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module) module.exports = t()
	else if ('function' == typeof define && define.amd) define([], t)
	else {
		var n = t()
		for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o]
	}
})(self, function () {
	return (() => {
		'use strict'
		var e = {
				765: (e, t, n) => {
					function o(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n]
							;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					n.d(t, { Z: () => r })
					var r = (function () {
						function e(t, n) {
							!(function (e, t) {
								if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
							})(this, e),
								(this.$collection = []),
								(this.selector = t),
								(this.config = n),
								(this.events = {})
						}
						var t, n
						return (
							(t = e),
							(n = [
								{
									key: '_fireEvent',
									value: function (e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
										this.events.hasOwnProperty(e) && this.events[e](t)
									},
								},
								{
									key: '_dispatch',
									value: function (e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
											o = new CustomEvent(e, { detail: { payload: n }, bubbles: !0, cancelable: !0, composed: !1 })
										t.dispatchEvent(o)
									},
								},
								{
									key: 'on',
									value: function (e, t) {
										this.events[e] = t
									},
								},
								{
									key: 'afterTransition',
									value: function (e, t) {
										'all 0s ease 0s' !== window.getComputedStyle(e, null).getPropertyValue('transition')
											? e.addEventListener(
													'transitionend',
													function n() {
														t(), e.removeEventListener('transitionend', n, !0)
													},
													!0
											  )
											: t()
									},
								},
								{
									key: 'getClassProperty',
									value: function (e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
											o = (window.getComputedStyle(e).getPropertyValue(t) || n).replace(' ', '')
										return o
									},
								},
							]),
							n && o(t.prototype, n),
							Object.defineProperty(t, 'prototype', { writable: !1 }),
							e
						)
					})()
				},
				714: (e, t, n) => {
					function o(e) {
						if (null == e) return window
						if ('[object Window]' !== e.toString()) {
							var t = e.ownerDocument
							return (t && t.defaultView) || window
						}
						return e
					}
					function r(e) {
						return e instanceof o(e).Element || e instanceof Element
					}
					function i(e) {
						return e instanceof o(e).HTMLElement || e instanceof HTMLElement
					}
					function a(e) {
						return 'undefined' != typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
					}
					n.d(t, { fi: () => fe })
					var s = Math.max,
						f = Math.min,
						c = Math.round
					function u(e, t) {
						void 0 === t && (t = !1)
						var n = e.getBoundingClientRect(),
							o = 1,
							r = 1
						if (i(e) && t) {
							var a = e.offsetHeight,
								s = e.offsetWidth
							s > 0 && (o = c(n.width) / s || 1), a > 0 && (r = c(n.height) / a || 1)
						}
						return {
							width: n.width / o,
							height: n.height / r,
							top: n.top / r,
							right: n.right / o,
							bottom: n.bottom / r,
							left: n.left / o,
							x: n.left / o,
							y: n.top / r,
						}
					}
					function l(e) {
						var t = o(e)
						return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
					}
					function p(e) {
						return e ? (e.nodeName || '').toLowerCase() : null
					}
					function d(e) {
						return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement
					}
					function h(e) {
						return u(d(e)).left + l(e).scrollLeft
					}
					function v(e) {
						return o(e).getComputedStyle(e)
					}
					function m(e) {
						var t = v(e),
							n = t.overflow,
							o = t.overflowX,
							r = t.overflowY
						return /auto|scroll|overlay|hidden/.test(n + r + o)
					}
					function y(e, t, n) {
						void 0 === n && (n = !1)
						var r,
							a,
							s = i(t),
							f =
								i(t) &&
								(function (e) {
									var t = e.getBoundingClientRect(),
										n = c(t.width) / e.offsetWidth || 1,
										o = c(t.height) / e.offsetHeight || 1
									return 1 !== n || 1 !== o
								})(t),
							v = d(t),
							y = u(e, f),
							g = { scrollLeft: 0, scrollTop: 0 },
							b = { x: 0, y: 0 }
						return (
							(s || (!s && !n)) &&
								(('body' !== p(t) || m(v)) &&
									(g = (r = t) !== o(r) && i(r) ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop } : l(r)),
								i(t) ? (((b = u(t, !0)).x += t.clientLeft), (b.y += t.clientTop)) : v && (b.x = h(v))),
							{ x: y.left + g.scrollLeft - b.x, y: y.top + g.scrollTop - b.y, width: y.width, height: y.height }
						)
					}
					function g(e) {
						var t = u(e),
							n = e.offsetWidth,
							o = e.offsetHeight
						return (
							Math.abs(t.width - n) <= 1 && (n = t.width),
							Math.abs(t.height - o) <= 1 && (o = t.height),
							{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
						)
					}
					function b(e) {
						return 'html' === p(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || d(e)
					}
					function w(e) {
						return ['html', 'body', '#document'].indexOf(p(e)) >= 0 ? e.ownerDocument.body : i(e) && m(e) ? e : w(b(e))
					}
					function x(e, t) {
						var n
						void 0 === t && (t = [])
						var r = w(e),
							i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
							a = o(r),
							s = i ? [a].concat(a.visualViewport || [], m(r) ? r : []) : r,
							f = t.concat(s)
						return i ? f : f.concat(x(b(s)))
					}
					function O(e) {
						return ['table', 'td', 'th'].indexOf(p(e)) >= 0
					}
					function E(e) {
						return i(e) && 'fixed' !== v(e).position ? e.offsetParent : null
					}
					function j(e) {
						for (var t = o(e), n = E(e); n && O(n) && 'static' === v(n).position; ) n = E(n)
						return n && ('html' === p(n) || ('body' === p(n) && 'static' === v(n).position))
							? t
							: n ||
									(function (e) {
										var t = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
										if (-1 !== navigator.userAgent.indexOf('Trident') && i(e) && 'fixed' === v(e).position) return null
										for (var n = b(e); i(n) && ['html', 'body'].indexOf(p(n)) < 0; ) {
											var o = v(n)
											if (
												'none' !== o.transform ||
												'none' !== o.perspective ||
												'paint' === o.contain ||
												-1 !== ['transform', 'perspective'].indexOf(o.willChange) ||
												(t && 'filter' === o.willChange) ||
												(t && o.filter && 'none' !== o.filter)
											)
												return n
											n = n.parentNode
										}
										return null
									})(e) ||
									t
					}
					var P = 'top',
						L = 'bottom',
						k = 'right',
						S = 'left',
						D = 'auto',
						A = [P, L, k, S],
						C = 'start',
						T = 'end',
						_ = 'viewport',
						M = 'popper',
						R = A.reduce(function (e, t) {
							return e.concat([t + '-' + C, t + '-' + T])
						}, []),
						B = [].concat(A, [D]).reduce(function (e, t) {
							return e.concat([t, t + '-' + C, t + '-' + T])
						}, []),
						W = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite']
					function q(e) {
						var t = new Map(),
							n = new Set(),
							o = []
						function r(e) {
							n.add(e.name),
								[].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
									if (!n.has(e)) {
										var o = t.get(e)
										o && r(o)
									}
								}),
								o.push(e)
						}
						return (
							e.forEach(function (e) {
								t.set(e.name, e)
							}),
							e.forEach(function (e) {
								n.has(e.name) || r(e)
							}),
							o
						)
					}
					var H = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
					function V() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
						return !t.some(function (e) {
							return !(e && 'function' == typeof e.getBoundingClientRect)
						})
					}
					function N(e) {
						void 0 === e && (e = {})
						var t = e,
							n = t.defaultModifiers,
							o = void 0 === n ? [] : n,
							i = t.defaultOptions,
							a = void 0 === i ? H : i
						return function (e, t, n) {
							void 0 === n && (n = a)
							var i,
								s,
								f = {
									placement: 'bottom',
									orderedModifiers: [],
									options: Object.assign({}, H, a),
									modifiersData: {},
									elements: { reference: e, popper: t },
									attributes: {},
									styles: {},
								},
								c = [],
								u = !1,
								l = {
									state: f,
									setOptions: function (n) {
										var i = 'function' == typeof n ? n(f.options) : n
										p(),
											(f.options = Object.assign({}, a, f.options, i)),
											(f.scrollParents = { reference: r(e) ? x(e) : e.contextElement ? x(e.contextElement) : [], popper: x(t) })
										var s,
											u,
											d = (function (e) {
												var t = q(e)
												return W.reduce(function (e, n) {
													return e.concat(
														t.filter(function (e) {
															return e.phase === n
														})
													)
												}, [])
											})(
												((s = [].concat(o, f.options.modifiers)),
												(u = s.reduce(function (e, t) {
													var n = e[t.name]
													return (
														(e[t.name] = n
															? Object.assign({}, n, t, {
																	options: Object.assign({}, n.options, t.options),
																	data: Object.assign({}, n.data, t.data),
															  })
															: t),
														e
													)
												}, {})),
												Object.keys(u).map(function (e) {
													return u[e]
												}))
											)
										return (
											(f.orderedModifiers = d.filter(function (e) {
												return e.enabled
											})),
											f.orderedModifiers.forEach(function (e) {
												var t = e.name,
													n = e.options,
													o = void 0 === n ? {} : n,
													r = e.effect
												if ('function' == typeof r) {
													var i = r({ state: f, name: t, instance: l, options: o })
													c.push(i || function () {})
												}
											}),
											l.update()
										)
									},
									forceUpdate: function () {
										if (!u) {
											var e = f.elements,
												t = e.reference,
												n = e.popper
											if (V(t, n)) {
												;(f.rects = { reference: y(t, j(n), 'fixed' === f.options.strategy), popper: g(n) }),
													(f.reset = !1),
													(f.placement = f.options.placement),
													f.orderedModifiers.forEach(function (e) {
														return (f.modifiersData[e.name] = Object.assign({}, e.data))
													})
												for (var o = 0; o < f.orderedModifiers.length; o++)
													if (!0 !== f.reset) {
														var r = f.orderedModifiers[o],
															i = r.fn,
															a = r.options,
															s = void 0 === a ? {} : a,
															c = r.name
														'function' == typeof i && (f = i({ state: f, options: s, name: c, instance: l }) || f)
													} else (f.reset = !1), (o = -1)
											}
										}
									},
									update:
										((i = function () {
											return new Promise(function (e) {
												l.forceUpdate(), e(f)
											})
										}),
										function () {
											return (
												s ||
													(s = new Promise(function (e) {
														Promise.resolve().then(function () {
															;(s = void 0), e(i())
														})
													})),
												s
											)
										}),
									destroy: function () {
										p(), (u = !0)
									},
								}
							if (!V(e, t)) return l
							function p() {
								c.forEach(function (e) {
									return e()
								}),
									(c = [])
							}
							return (
								l.setOptions(n).then(function (e) {
									!u && n.onFirstUpdate && n.onFirstUpdate(e)
								}),
								l
							)
						}
					}
					var I = { passive: !0 }
					function F(e) {
						return e.split('-')[0]
					}
					function U(e) {
						return e.split('-')[1]
					}
					function z(e) {
						return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
					}
					function X(e) {
						var t,
							n = e.reference,
							o = e.element,
							r = e.placement,
							i = r ? F(r) : null,
							a = r ? U(r) : null,
							s = n.x + n.width / 2 - o.width / 2,
							f = n.y + n.height / 2 - o.height / 2
						switch (i) {
							case P:
								t = { x: s, y: n.y - o.height }
								break
							case L:
								t = { x: s, y: n.y + n.height }
								break
							case k:
								t = { x: n.x + n.width, y: f }
								break
							case S:
								t = { x: n.x - o.width, y: f }
								break
							default:
								t = { x: n.x, y: n.y }
						}
						var c = i ? z(i) : null
						if (null != c) {
							var u = 'y' === c ? 'height' : 'width'
							switch (a) {
								case C:
									t[c] = t[c] - (n[u] / 2 - o[u] / 2)
									break
								case T:
									t[c] = t[c] + (n[u] / 2 - o[u] / 2)
							}
						}
						return t
					}
					var Y = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
					function Z(e) {
						var t,
							n = e.popper,
							r = e.popperRect,
							i = e.placement,
							a = e.variation,
							s = e.offsets,
							f = e.position,
							u = e.gpuAcceleration,
							l = e.adaptive,
							p = e.roundOffsets,
							h = e.isFixed,
							m = s.x,
							y = void 0 === m ? 0 : m,
							g = s.y,
							b = void 0 === g ? 0 : g,
							w = 'function' == typeof p ? p({ x: y, y: b }) : { x: y, y: b }
						;(y = w.x), (b = w.y)
						var x = s.hasOwnProperty('x'),
							O = s.hasOwnProperty('y'),
							E = S,
							D = P,
							A = window
						if (l) {
							var C = j(n),
								_ = 'clientHeight',
								M = 'clientWidth'
							C === o(n) && 'static' !== v((C = d(n))).position && 'absolute' === f && ((_ = 'scrollHeight'), (M = 'scrollWidth')),
								(C = C),
								(i === P || ((i === S || i === k) && a === T)) &&
									((D = L), (b -= (h && A.visualViewport ? A.visualViewport.height : C[_]) - r.height), (b *= u ? 1 : -1)),
								(i !== S && ((i !== P && i !== L) || a !== T)) ||
									((E = k), (y -= (h && A.visualViewport ? A.visualViewport.width : C[M]) - r.width), (y *= u ? 1 : -1))
						}
						var R,
							B = Object.assign({ position: f }, l && Y),
							W =
								!0 === p
									? (function (e) {
											var t = e.x,
												n = e.y,
												o = window.devicePixelRatio || 1
											return { x: c(t * o) / o || 0, y: c(n * o) / o || 0 }
									  })({ x: y, y: b })
									: { x: y, y: b }
						return (
							(y = W.x),
							(b = W.y),
							u
								? Object.assign(
										{},
										B,
										(((R = {})[D] = O ? '0' : ''),
										(R[E] = x ? '0' : ''),
										(R.transform =
											(A.devicePixelRatio || 1) <= 1
												? 'translate(' + y + 'px, ' + b + 'px)'
												: 'translate3d(' + y + 'px, ' + b + 'px, 0)'),
										R)
								  )
								: Object.assign({}, B, (((t = {})[D] = O ? b + 'px' : ''), (t[E] = x ? y + 'px' : ''), (t.transform = ''), t))
						)
					}
					var $ = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
					function G(e) {
						return e.replace(/left|right|bottom|top/g, function (e) {
							return $[e]
						})
					}
					var J = { start: 'end', end: 'start' }
					function K(e) {
						return e.replace(/start|end/g, function (e) {
							return J[e]
						})
					}
					function Q(e, t) {
						var n = t.getRootNode && t.getRootNode()
						if (e.contains(t)) return !0
						if (n && a(n)) {
							var o = t
							do {
								if (o && e.isSameNode(o)) return !0
								o = o.parentNode || o.host
							} while (o)
						}
						return !1
					}
					function ee(e) {
						return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
					}
					function te(e, t) {
						return t === _
							? ee(
									(function (e) {
										var t = o(e),
											n = d(e),
											r = t.visualViewport,
											i = n.clientWidth,
											a = n.clientHeight,
											s = 0,
											f = 0
										return (
											r &&
												((i = r.width),
												(a = r.height),
												/^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((s = r.offsetLeft), (f = r.offsetTop))),
											{ width: i, height: a, x: s + h(e), y: f }
										)
									})(e)
							  )
							: r(t)
							? (function (e) {
									var t = u(e)
									return (
										(t.top = t.top + e.clientTop),
										(t.left = t.left + e.clientLeft),
										(t.bottom = t.top + e.clientHeight),
										(t.right = t.left + e.clientWidth),
										(t.width = e.clientWidth),
										(t.height = e.clientHeight),
										(t.x = t.left),
										(t.y = t.top),
										t
									)
							  })(t)
							: ee(
									(function (e) {
										var t,
											n = d(e),
											o = l(e),
											r = null == (t = e.ownerDocument) ? void 0 : t.body,
											i = s(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
											a = s(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
											f = -o.scrollLeft + h(e),
											c = -o.scrollTop
										return (
											'rtl' === v(r || n).direction && (f += s(n.clientWidth, r ? r.clientWidth : 0) - i),
											{ width: i, height: a, x: f, y: c }
										)
									})(d(e))
							  )
					}
					function ne(e) {
						return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
					}
					function oe(e, t) {
						return t.reduce(function (t, n) {
							return (t[n] = e), t
						}, {})
					}
					function re(e, t) {
						void 0 === t && (t = {})
						var n = t,
							o = n.placement,
							a = void 0 === o ? e.placement : o,
							c = n.boundary,
							l = void 0 === c ? 'clippingParents' : c,
							h = n.rootBoundary,
							m = void 0 === h ? _ : h,
							y = n.elementContext,
							g = void 0 === y ? M : y,
							w = n.altBoundary,
							O = void 0 !== w && w,
							E = n.padding,
							S = void 0 === E ? 0 : E,
							D = ne('number' != typeof S ? S : oe(S, A)),
							C = g === M ? 'reference' : M,
							T = e.rects.popper,
							R = e.elements[O ? C : g],
							B = (function (e, t, n) {
								var o =
										'clippingParents' === t
											? (function (e) {
													var t = x(b(e)),
														n = ['absolute', 'fixed'].indexOf(v(e).position) >= 0 && i(e) ? j(e) : e
													return r(n)
														? t.filter(function (e) {
																return r(e) && Q(e, n) && 'body' !== p(e)
														  })
														: []
											  })(e)
											: [].concat(t),
									a = [].concat(o, [n]),
									c = a[0],
									u = a.reduce(function (t, n) {
										var o = te(e, n)
										return (
											(t.top = s(o.top, t.top)),
											(t.right = f(o.right, t.right)),
											(t.bottom = f(o.bottom, t.bottom)),
											(t.left = s(o.left, t.left)),
											t
										)
									}, te(e, c))
								return (u.width = u.right - u.left), (u.height = u.bottom - u.top), (u.x = u.left), (u.y = u.top), u
							})(r(R) ? R : R.contextElement || d(e.elements.popper), l, m),
							W = u(e.elements.reference),
							q = X({ reference: W, element: T, strategy: 'absolute', placement: a }),
							H = ee(Object.assign({}, T, q)),
							V = g === M ? H : W,
							N = {
								top: B.top - V.top + D.top,
								bottom: V.bottom - B.bottom + D.bottom,
								left: B.left - V.left + D.left,
								right: V.right - B.right + D.right,
							},
							I = e.modifiersData.offset
						if (g === M && I) {
							var F = I[a]
							Object.keys(N).forEach(function (e) {
								var t = [k, L].indexOf(e) >= 0 ? 1 : -1,
									n = [P, L].indexOf(e) >= 0 ? 'y' : 'x'
								N[e] += F[n] * t
							})
						}
						return N
					}
					function ie(e, t, n) {
						return s(e, f(t, n))
					}
					function ae(e, t, n) {
						return (
							void 0 === n && (n = { x: 0, y: 0 }),
							{ top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x }
						)
					}
					function se(e) {
						return [P, k, L, S].some(function (t) {
							return e[t] >= 0
						})
					}
					var fe = N({
						defaultModifiers: [
							{
								name: 'eventListeners',
								enabled: !0,
								phase: 'write',
								fn: function () {},
								effect: function (e) {
									var t = e.state,
										n = e.instance,
										r = e.options,
										i = r.scroll,
										a = void 0 === i || i,
										s = r.resize,
										f = void 0 === s || s,
										c = o(t.elements.popper),
										u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
									return (
										a &&
											u.forEach(function (e) {
												e.addEventListener('scroll', n.update, I)
											}),
										f && c.addEventListener('resize', n.update, I),
										function () {
											a &&
												u.forEach(function (e) {
													e.removeEventListener('scroll', n.update, I)
												}),
												f && c.removeEventListener('resize', n.update, I)
										}
									)
								},
								data: {},
							},
							{
								name: 'popperOffsets',
								enabled: !0,
								phase: 'read',
								fn: function (e) {
									var t = e.state,
										n = e.name
									t.modifiersData[n] = X({
										reference: t.rects.reference,
										element: t.rects.popper,
										strategy: 'absolute',
										placement: t.placement,
									})
								},
								data: {},
							},
							{
								name: 'computeStyles',
								enabled: !0,
								phase: 'beforeWrite',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										o = n.gpuAcceleration,
										r = void 0 === o || o,
										i = n.adaptive,
										a = void 0 === i || i,
										s = n.roundOffsets,
										f = void 0 === s || s,
										c = {
											placement: F(t.placement),
											variation: U(t.placement),
											popper: t.elements.popper,
											popperRect: t.rects.popper,
											gpuAcceleration: r,
											isFixed: 'fixed' === t.options.strategy,
										}
									null != t.modifiersData.popperOffsets &&
										(t.styles.popper = Object.assign(
											{},
											t.styles.popper,
											Z(
												Object.assign({}, c, {
													offsets: t.modifiersData.popperOffsets,
													position: t.options.strategy,
													adaptive: a,
													roundOffsets: f,
												})
											)
										)),
										null != t.modifiersData.arrow &&
											(t.styles.arrow = Object.assign(
												{},
												t.styles.arrow,
												Z(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: f }))
											)),
										(t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }))
								},
								data: {},
							},
							{
								name: 'applyStyles',
								enabled: !0,
								phase: 'write',
								fn: function (e) {
									var t = e.state
									Object.keys(t.elements).forEach(function (e) {
										var n = t.styles[e] || {},
											o = t.attributes[e] || {},
											r = t.elements[e]
										i(r) &&
											p(r) &&
											(Object.assign(r.style, n),
											Object.keys(o).forEach(function (e) {
												var t = o[e]
												!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? '' : t)
											}))
									})
								},
								effect: function (e) {
									var t = e.state,
										n = {
											popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
											arrow: { position: 'absolute' },
											reference: {},
										}
									return (
										Object.assign(t.elements.popper.style, n.popper),
										(t.styles = n),
										t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
										function () {
											Object.keys(t.elements).forEach(function (e) {
												var o = t.elements[e],
													r = t.attributes[e] || {},
													a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
														return (e[t] = ''), e
													}, {})
												i(o) &&
													p(o) &&
													(Object.assign(o.style, a),
													Object.keys(r).forEach(function (e) {
														o.removeAttribute(e)
													}))
											})
										}
									)
								},
								requires: ['computeStyles'],
							},
							{
								name: 'offset',
								enabled: !0,
								phase: 'main',
								requires: ['popperOffsets'],
								fn: function (e) {
									var t = e.state,
										n = e.options,
										o = e.name,
										r = n.offset,
										i = void 0 === r ? [0, 0] : r,
										a = B.reduce(function (e, n) {
											return (
												(e[n] = (function (e, t, n) {
													var o = F(e),
														r = [S, P].indexOf(o) >= 0 ? -1 : 1,
														i = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
														a = i[0],
														s = i[1]
													return (a = a || 0), (s = (s || 0) * r), [S, k].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s }
												})(n, t.rects, i)),
												e
											)
										}, {}),
										s = a[t.placement],
										f = s.x,
										c = s.y
									null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += f), (t.modifiersData.popperOffsets.y += c)),
										(t.modifiersData[o] = a)
								},
							},
							{
								name: 'flip',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										o = e.name
									if (!t.modifiersData[o]._skip) {
										for (
											var r = n.mainAxis,
												i = void 0 === r || r,
												a = n.altAxis,
												s = void 0 === a || a,
												f = n.fallbackPlacements,
												c = n.padding,
												u = n.boundary,
												l = n.rootBoundary,
												p = n.altBoundary,
												d = n.flipVariations,
												h = void 0 === d || d,
												v = n.allowedAutoPlacements,
												m = t.options.placement,
												y = F(m),
												g =
													f ||
													(y !== m && h
														? (function (e) {
																if (F(e) === D) return []
																var t = G(e)
																return [K(e), t, K(t)]
														  })(m)
														: [G(m)]),
												b = [m].concat(g).reduce(function (e, n) {
													return e.concat(
														F(n) === D
															? (function (e, t) {
																	void 0 === t && (t = {})
																	var n = t,
																		o = n.placement,
																		r = n.boundary,
																		i = n.rootBoundary,
																		a = n.padding,
																		s = n.flipVariations,
																		f = n.allowedAutoPlacements,
																		c = void 0 === f ? B : f,
																		u = U(o),
																		l = u
																			? s
																				? R
																				: R.filter(function (e) {
																						return U(e) === u
																				  })
																			: A,
																		p = l.filter(function (e) {
																			return c.indexOf(e) >= 0
																		})
																	0 === p.length && (p = l)
																	var d = p.reduce(function (t, n) {
																		return (
																			(t[n] = re(e, { placement: n, boundary: r, rootBoundary: i, padding: a })[F(n)]), t
																		)
																	}, {})
																	return Object.keys(d).sort(function (e, t) {
																		return d[e] - d[t]
																	})
															  })(t, {
																	placement: n,
																	boundary: u,
																	rootBoundary: l,
																	padding: c,
																	flipVariations: h,
																	allowedAutoPlacements: v,
															  })
															: n
													)
												}, []),
												w = t.rects.reference,
												x = t.rects.popper,
												O = new Map(),
												E = !0,
												j = b[0],
												T = 0;
											T < b.length;
											T++
										) {
											var _ = b[T],
												M = F(_),
												W = U(_) === C,
												q = [P, L].indexOf(M) >= 0,
												H = q ? 'width' : 'height',
												V = re(t, { placement: _, boundary: u, rootBoundary: l, altBoundary: p, padding: c }),
												N = q ? (W ? k : S) : W ? L : P
											w[H] > x[H] && (N = G(N))
											var I = G(N),
												z = []
											if (
												(i && z.push(V[M] <= 0),
												s && z.push(V[N] <= 0, V[I] <= 0),
												z.every(function (e) {
													return e
												}))
											) {
												;(j = _), (E = !1)
												break
											}
											O.set(_, z)
										}
										if (E)
											for (
												var X = function (e) {
														var t = b.find(function (t) {
															var n = O.get(t)
															if (n)
																return n.slice(0, e).every(function (e) {
																	return e
																})
														})
														if (t) return (j = t), 'break'
													},
													Y = h ? 3 : 1;
												Y > 0 && 'break' !== X(Y);
												Y--
											);
										t.placement !== j && ((t.modifiersData[o]._skip = !0), (t.placement = j), (t.reset = !0))
									}
								},
								requiresIfExists: ['offset'],
								data: { _skip: !1 },
							},
							{
								name: 'preventOverflow',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										o = e.name,
										r = n.mainAxis,
										i = void 0 === r || r,
										a = n.altAxis,
										c = void 0 !== a && a,
										u = n.boundary,
										l = n.rootBoundary,
										p = n.altBoundary,
										d = n.padding,
										h = n.tether,
										v = void 0 === h || h,
										m = n.tetherOffset,
										y = void 0 === m ? 0 : m,
										b = re(t, { boundary: u, rootBoundary: l, padding: d, altBoundary: p }),
										w = F(t.placement),
										x = U(t.placement),
										O = !x,
										E = z(w),
										D = 'x' === E ? 'y' : 'x',
										A = t.modifiersData.popperOffsets,
										T = t.rects.reference,
										_ = t.rects.popper,
										M = 'function' == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
										R = 'number' == typeof M ? { mainAxis: M, altAxis: M } : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
										B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
										W = { x: 0, y: 0 }
									if (A) {
										if (i) {
											var q,
												H = 'y' === E ? P : S,
												V = 'y' === E ? L : k,
												N = 'y' === E ? 'height' : 'width',
												I = A[E],
												X = I + b[H],
												Y = I - b[V],
												Z = v ? -_[N] / 2 : 0,
												$ = x === C ? T[N] : _[N],
												G = x === C ? -_[N] : -T[N],
												J = t.elements.arrow,
												K = v && J ? g(J) : { width: 0, height: 0 },
												Q = t.modifiersData['arrow#persistent']
													? t.modifiersData['arrow#persistent'].padding
													: { top: 0, right: 0, bottom: 0, left: 0 },
												ee = Q[H],
												te = Q[V],
												ne = ie(0, T[N], K[N]),
												oe = O ? T[N] / 2 - Z - ne - ee - R.mainAxis : $ - ne - ee - R.mainAxis,
												ae = O ? -T[N] / 2 + Z + ne + te + R.mainAxis : G + ne + te + R.mainAxis,
												se = t.elements.arrow && j(t.elements.arrow),
												fe = se ? ('y' === E ? se.clientTop || 0 : se.clientLeft || 0) : 0,
												ce = null != (q = null == B ? void 0 : B[E]) ? q : 0,
												ue = I + ae - ce,
												le = ie(v ? f(X, I + oe - ce - fe) : X, I, v ? s(Y, ue) : Y)
											;(A[E] = le), (W[E] = le - I)
										}
										if (c) {
											var pe,
												de = 'x' === E ? P : S,
												he = 'x' === E ? L : k,
												ve = A[D],
												me = 'y' === D ? 'height' : 'width',
												ye = ve + b[de],
												ge = ve - b[he],
												be = -1 !== [P, S].indexOf(w),
												we = null != (pe = null == B ? void 0 : B[D]) ? pe : 0,
												xe = be ? ye : ve - T[me] - _[me] - we + R.altAxis,
												Oe = be ? ve + T[me] + _[me] - we - R.altAxis : ge,
												Ee =
													v && be
														? (function (e, t, n) {
																var o = ie(e, t, n)
																return o > n ? n : o
														  })(xe, ve, Oe)
														: ie(v ? xe : ye, ve, v ? Oe : ge)
											;(A[D] = Ee), (W[D] = Ee - ve)
										}
										t.modifiersData[o] = W
									}
								},
								requiresIfExists: ['offset'],
							},
							{
								name: 'arrow',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t,
										n = e.state,
										o = e.name,
										r = e.options,
										i = n.elements.arrow,
										a = n.modifiersData.popperOffsets,
										s = F(n.placement),
										f = z(s),
										c = [S, k].indexOf(s) >= 0 ? 'height' : 'width'
									if (i && a) {
										var u = (function (e, t) {
												return ne(
													'number' !=
														typeof (e = 'function' == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e)
														? e
														: oe(e, A)
												)
											})(r.padding, n),
											l = g(i),
											p = 'y' === f ? P : S,
											d = 'y' === f ? L : k,
											h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
											v = a[f] - n.rects.reference[f],
											m = j(i),
											y = m ? ('y' === f ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
											b = h / 2 - v / 2,
											w = u[p],
											x = y - l[c] - u[d],
											O = y / 2 - l[c] / 2 + b,
											E = ie(w, O, x),
											D = f
										n.modifiersData[o] = (((t = {})[D] = E), (t.centerOffset = E - O), t)
									}
								},
								effect: function (e) {
									var t = e.state,
										n = e.options.element,
										o = void 0 === n ? '[data-popper-arrow]' : n
									null != o &&
										('string' != typeof o || (o = t.elements.popper.querySelector(o))) &&
										Q(t.elements.popper, o) &&
										(t.elements.arrow = o)
								},
								requires: ['popperOffsets'],
								requiresIfExists: ['preventOverflow'],
							},
							{
								name: 'hide',
								enabled: !0,
								phase: 'main',
								requiresIfExists: ['preventOverflow'],
								fn: function (e) {
									var t = e.state,
										n = e.name,
										o = t.rects.reference,
										r = t.rects.popper,
										i = t.modifiersData.preventOverflow,
										a = re(t, { elementContext: 'reference' }),
										s = re(t, { altBoundary: !0 }),
										f = ae(a, o),
										c = ae(s, r, i),
										u = se(f),
										l = se(c)
									;(t.modifiersData[n] = { referenceClippingOffsets: f, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: l }),
										(t.attributes.popper = Object.assign({}, t.attributes.popper, {
											'data-popper-reference-hidden': u,
											'data-popper-escaped': l,
										}))
								},
							},
						],
					})
				},
			},
			t = {}
		function n(o) {
			var r = t[o]
			if (void 0 !== r) return r.exports
			var i = (t[o] = { exports: {} })
			return e[o](i, i.exports, n), i.exports
		}
		;(n.d = (e, t) => {
			for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] })
		}),
			(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(n.r = (e) => {
				'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 })
			})
		var o = {}
		return (
			(() => {
				n.r(o)
				var e = n(765),
					t = n(714)
				function r(e) {
					return (
						(r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e
								  }
								: function (e) {
										return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
								  }),
						r(e)
					)
				}
				function i(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n]
						;(o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				function a(e, t) {
					return (
						(a =
							Object.setPrototypeOf ||
							function (e, t) {
								return (e.__proto__ = t), e
							}),
						a(e, t)
					)
				}
				function s(e, t) {
					if (t && ('object' === r(t) || 'function' == typeof t)) return t
					if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
					return (function (e) {
						if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						return e
					})(e)
				}
				function f(e) {
					return (
						(f = Object.setPrototypeOf
							? Object.getPrototypeOf
							: function (e) {
									return e.__proto__ || Object.getPrototypeOf(e)
							  }),
						f(e)
					)
				}
				var c = (function (e) {
					!(function (e, t) {
						if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function')
						;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
							Object.defineProperty(e, 'prototype', { writable: !1 }),
							t && a(e, t)
					})(l, e)
					var n,
						o,
						r,
						c,
						u =
							((r = l),
							(c = (function () {
								if ('undefined' == typeof Reflect || !Reflect.construct) return !1
								if (Reflect.construct.sham) return !1
								if ('function' == typeof Proxy) return !0
								try {
									return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
								} catch (e) {
									return !1
								}
							})()),
							function () {
								var e,
									t = f(r)
								if (c) {
									var n = f(this).constructor
									e = Reflect.construct(t, arguments, n)
								} else e = t.apply(this, arguments)
								return s(this, e)
							})
					function l() {
						return (
							(function (e, t) {
								if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
							})(this, l),
							u.call(this, '.hs-tooltip')
						)
					}
					return (
						(n = l),
						(o = [
							{
								key: 'init',
								value: function () {
									var e = this
									document.addEventListener('click', function (t) {
										var n = t.target.closest(e.selector)
										n && 'focus' === e.getClassProperty(n, '--trigger') && e._focus(n),
											n && 'click' === e.getClassProperty(n, '--trigger') && e._click(n)
									}),
										document.addEventListener('mousemove', function (t) {
											var n = t.target.closest(e.selector)
											n && 'focus' !== e.getClassProperty(n, '--trigger') && 'click' !== e.getClassProperty(n, '--trigger') && e._hover(n)
										})
								},
							},
							{
								key: '_hover',
								value: function (e) {
									var n = this
									if (!e.classList.contains('show')) {
										var o = e.querySelector('.hs-tooltip-toggle'),
											r = e.querySelector('.hs-tooltip-content'),
											i = this.getClassProperty(e, '--placement')
										;(0, t.fi)(o, r, {
											placement: i || 'top',
											strategy: 'fixed',
											modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
										}),
											this.show(e),
											e.addEventListener(
												'mouseleave',
												function t(o) {
													;(o.toElement.closest(n.selector) && o.toElement.closest(n.selector) == e) ||
														(n.hide(e), e.removeEventListener('mouseleave', t, !0))
												},
												!0
											)
									}
								},
							},
							{
								key: '_focus',
								value: function (e) {
									var n = this,
										o = e.querySelector('.hs-tooltip-toggle'),
										r = e.querySelector('.hs-tooltip-content'),
										i = this.getClassProperty(e, '--placement'),
										a = this.getClassProperty(e, '--strategy')
									;(0, t.fi)(o, r, {
										placement: i || 'top',
										strategy: a || 'fixed',
										modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
									}),
										this.show(e),
										e.addEventListener(
											'blur',
											function t() {
												n.hide(e), e.removeEventListener('blur', t, !0)
											},
											!0
										)
								},
							},
							{
								key: '_click',
								value: function (e) {
									var n = this
									if (!e.classList.contains('show')) {
										var o = e.querySelector('.hs-tooltip-toggle'),
											r = e.querySelector('.hs-tooltip-content'),
											i = this.getClassProperty(e, '--placement'),
											a = this.getClassProperty(e, '--strategy')
										;(0, t.fi)(o, r, {
											placement: i || 'top',
											strategy: a || 'fixed',
											modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
										}),
											this.show(e)
										var s = function t(o) {
											setTimeout(function () {
												n.hide(e), e.removeEventListener('click', t, !0), e.removeEventListener('blur', t, !0)
											})
										}
										e.addEventListener('blur', s, !0), e.addEventListener('click', s, !0)
									}
								},
							},
							{
								key: 'show',
								value: function (e) {
									var t = this
									e.querySelector('.hs-tooltip-content').classList.remove('hidden'),
										setTimeout(function () {
											e.classList.add('show'), t._fireEvent('show', e), t._dispatch('show.hs.tooltip', e, e)
										})
								},
							},
							{
								key: 'hide',
								value: function (e) {
									var t = e.querySelector('.hs-tooltip-content')
									e.classList.remove('show'),
										this._fireEvent('hide', e),
										this._dispatch('hide.hs.tooltip', e, e),
										this.afterTransition(t, function () {
											e.classList.contains('show') || t.classList.add('hidden')
										})
								},
							},
						]) && i(n.prototype, o),
						Object.defineProperty(n, 'prototype', { writable: !1 }),
						l
					)
				})(e.Z)
				;(window.HSTooltip = new c()), document.addEventListener('load', window.HSTooltip.init())
			})(),
			o
		)
	})()
})
