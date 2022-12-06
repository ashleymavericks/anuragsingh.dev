/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-09-05; 44e6; v10) */

!(function (f, t, e, n, h) {
	try {
		var i = undefined,
			d = !0,
			m = !1,
			r = 'true',
			a = 'https:',
			g = 'pageview',
			s = 'event',
			o = 'error',
			c = f.console,
			u = 'doNotTrack',
			v = f.navigator,
			l = f.location,
			y = l.host,
			_ = f.document,
			p = v.userAgent,
			w = 'Not sending request ',
			b = w + 'when ',
			E = m,
			O = encodeURIComponent,
			x = decodeURIComponent,
			S = JSON.stringify,
			q = f.addEventListener,
			A = 'https://queue.' + e,
			M = _.documentElement || {},
			$ = 'language',
			D = 'Height',
			j = 'scroll',
			k = v.userAgentData,
			C = j + D,
			R = 'offset' + D,
			H = 'client' + D,
			P = 'pagehide',
			T = 'platform',
			U = 'platformVersion',
			I = 'https://docs.simpleanalytics.com',
			V = /(bot|spider|crawl)/i.test(p) && !/(cubot)/i.test(p),
			B = f.screen,
			N = _.currentScript || _.querySelector('script[src*="' + e + '"]');
		h = function () {
			var t = [].slice.call(arguments);
			t.unshift('Simple Analytics: '),
				Function.prototype.bind.call(c.warn, c).apply(c, t);
		};
		var z = function (t, e) {
				h('Error in your ' + t + ' function:', e);
			},
			F = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			},
			W = function (t) {
				return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			},
			G = function (t, e) {
				return t && t.getAttribute('data-' + e);
			},
			J = function (t) {
				return Array.isArray(t)
					? t
					: 'string' == typeof t && t.length
					? t.split(/, ?/)
					: [];
			},
			L = function (t) {
				return t && t.constructor === Object;
			},
			Y = function () {
				for (var t = {}, e = arguments, n = 0; n < e.length; n++) {
					var r = e[n];
					if (L(r)) for (var a in r) F(r, a) && (t[a] = r[a]);
				}
				return t;
			},
			Z = J((t = Y(t, f.sa_settings)).ignoreMetrics || G(N, 'ignore-metrics')),
			K = function (e) {
				return (
					0 ===
					Z.filter(function (t) {
						return new RegExp('^' + e).test(t);
					}).length
				);
			},
			Q = Date.now,
			X = function () {
				var e = f.crypto || f.msCrypto,
					t = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
					n = /[018]/g;
				try {
					return t.replace(n, function (t) {
						return (
							t ^
							(e.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))
						).toString(16);
					});
				} catch (r) {
					return t.replace(n, function (t) {
						var e = (16 * Math.random()) | 0;
						return (t < 2 ? e : (3 & e) | 8).toString(16);
					});
				}
			},
			tt = function (t) {
				return 'function' == typeof t;
			},
			et = 'namespace',
			nt = t[et] || G(N, et) || 'sa',
			rt = f[nt + '_metadata'],
			at = function (t, e) {
				L(rt) && (t = Y(t, rt));
				var n = f[Ot];
				if (!tt(n)) return t;
				try {
					return Y(t, n.call(f, Y(t, e)));
				} catch (r) {
					z('metadata', r);
				}
			},
			it = t.strictUtm || G(N, 'strict-utm') == r,
			ot = function (a) {
				return (
					l.search
						.slice(1)
						.split('&')
						.filter(function (t) {
							var e = a || !K('ut'),
								n = wt.map(W).join('|'),
								r = e
									? '^(' + n + ')='
									: '^((utm_)' +
									  (it ? '' : '?') +
									  '(source|medium|content|term|campaign)' +
									  (it ? '' : '|ref') +
									  '|' +
									  n +
									  ')=';
							return e && !wt.length ? m : new RegExp(r).test(t);
						})
						.join('&') || i
				);
			},
			ct = nt + '_loaded';
		if (f[ct] == d) return h(w + 'twice');
		(f.sa_event_loaded = d), (f[ct] = d);
		var st = function (e, t, n) {
				(e = n ? e : Y(qt, $t, e)), v.brave && !n && (e.brave = d);
				var r = new Image();
				t && ((r.onerror = t), (r.onload = t)),
					(r.src =
						A +
						'/simple.gif?' +
						Object.keys(e)
							.filter(function (t) {
								return e[t] != i;
							})
							.map(function (t) {
								return O(t) + '=' + O(e[t]);
							})
							.join('&') +
						'&time=' +
						Date.now());
			},
			ut = t.hostname || G(N, 'hostname'),
			lt = ut || y,
			pt = { version: 'cdn_latest_10', hostname: lt };
		(n = function (t) {
			(t = t.stack ? t + ' ' + t.stack : t),
				h(t),
				st(Y(pt, { type: o, error: t, path: l.pathname }), i, d);
		}),
			q(
				o,
				function (t) {
					t.filename && -1 < t.filename.indexOf(e) && n(t.message);
				},
				m
			);
		var ft,
			ht = Q(),
			dt = 0,
			mt = t.mode || G(N, 'mode'),
			gt =
				!!(Yt = t.collectDnt) === Yt
					? t.collectDnt
					: G(N, 'ignore-dnt') == r ||
					  G(N, 'skip-dnt') == r ||
					  G(N, 'collect-dnt') == r,
			vt = !('false' == G(N, 'auto-collect') || t.autoCollect === m),
			yt = t.saGlobal || G(N, 'sa-global') || nt + '_' + s,
			_t = J(t.ignorePages || G(N, 'ignore-pages')),
			wt = J(t.allowParams || G(N, 'allow-params')),
			bt = J(t.nonUniqueHostnames || G(N, 'non-unique-hostnames')),
			Et = t.pathOverwriter || G(N, 'path-overwriter'),
			Ot = t.metadataCollector || G(N, 'metadata-collector');
		try {
			ft = K('c') ? Intl.DateTimeFormat().resolvedOptions().timeZone : i;
		} catch (Zt) {
			h(Zt);
		}
		var xt =
				v.webdriver ||
				f.__nightmare ||
				f.callPhantom ||
				f._phantom ||
				f.phantom ||
				f.__polypane ||
				f._bot ||
				V,
			St = K('t') || K('scro');
		xt && (pt.bot = d);
		var qt = Y(pt, {
			ua: K('us') ? p : i,
			https: l.protocol == a,
			timezone: ft,
			page_id: St ? X() : i,
			session_id: K('se') ? X() : i,
		});
		if (
			((qt.sri = m),
			k && ((qt.mobile = k.mobile), (qt.brands = S(k.brands))),
			_.doctype || h('Add DOCTYPE html for accurate dimensions'),
			lt !== y && (qt.hostname_original = y),
			!gt && u in v && '1' == v[u])
		)
			return h(b + u + ' is enabled. See ' + I + '/dnt');
		(-1 != y.indexOf('.') && !/^[0-9.:]+$/.test(y)) ||
			ut ||
			h('Set hostname on ' + y + '. See ' + I + '/overwrite-domain-name');
		var At,
			Mt,
			$t = {},
			Dt =
				(_.referrer || '')
					.replace(y, lt)
					.replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/, '$4')
					.replace(/^([^/]+)$/, '$1') || i,
			jt = 0,
			kt = function (t, e) {
				var n;
				St &&
					((n = Y(pt, { type: 'append', original_id: e ? t : qt.page_id })),
					K('t') && (n.duration = Math.round((Q() - ht - jt) / 1e3)),
					(jt = 0),
					(ht = Q()),
					K('scro') && (n.scrolled = Math.max(0, dt, Rt())),
					e || !v.sendBeacon ? st(n, i, d) : v.sendBeacon(A + '/append', S(n)));
			};
		q(
			'visibilitychange',
			function () {
				_.hidden ? ('on' + P in f || kt(), (Mt = Q())) : (jt += Q() - Mt);
			},
			m
		),
			q(P, kt, m);
		var Ct = _.body || {},
			Rt = function () {
				try {
					var t = M[H] || 0,
						e = Math.max(
							Ct[C] || 0,
							Ct[R] || 0,
							M[H] || 0,
							M[C] || 0,
							M[R] || 0
						);
					return Math.min(
						100,
						5 * Math.round((100 * ((M.scrollTop || 0) + t)) / e / 5)
					);
				} catch (Zt) {
					return h(Zt), 0;
				}
			};
		q('load', function () {
			(dt = Rt()),
				q(
					j,
					function () {
						dt < Rt() && (dt = Rt());
					},
					m
				);
		});
		var Ht = function (t) {
				var e = '';
				try {
					e = t || x(l.pathname);
				} catch (Zt) {
					h(Zt);
				}
				var n = f[Et];
				if (tt(n))
					try {
						e = n.call(f, { path: e }) || e;
					} catch (Zt) {
						z('path', Zt);
					}
				if (
					!(function (t) {
						for (var e in _t) {
							var n = _t[e];
							if (n) {
								var r = '/' == n[0] ? n : '/' + n;
								if (
									r === t ||
									new RegExp(
										'^' + W(r).replace(/\\\*/gi, '(.*)') + '$',
										'i'
									).test(t)
								)
									return d;
							}
						}
						return m;
					})(e)
				)
					return 'hash' == mt && l.hash && (e += l.hash.split('?')[0]), e;
				h(b + 'ignoring ' + e);
			},
			Pt = function (t, e, n) {
				var r = Ht(e);
				if (r && At != r) {
					(At = r),
						($t.path = r),
						K('v') &&
							(($t.viewport_width =
								Math.max(M.clientWidth || 0, f.innerWidth || 0) || null),
							($t.viewport_height =
								Math.max(M[H] || 0, f.innerHeight || 0) || null)),
						K('l') && v[$] && ($t[$] = v[$]),
						B &&
							K('sc') &&
							(($t.screen_width = B.width), ($t.screen_height = B.height));
					var a,
						i = f.performance,
						o = 'navigation';
					try {
						a = i.getEntriesByType(o)[0].type;
					} catch (Zt) {
						h(Zt);
					}
					var c = a
							? -1 < ['reload', 'back_forward'].indexOf(a)
							: i && i[o] && -1 < [1, 2].indexOf(i[o].type),
						s = _.referrer.split('/')[2],
						u = Dt ? -1 < bt.indexOf(s) || s == y : m;
					($t.unique = t || c ? m : !u),
						(n = at(n, { type: g, path: $t.path }));
					var l = function () {
						(E = d),
							(function (t, e, n, r) {
								t && kt('' + qt.page_id, d), St && (qt.page_id = X());
								var a = lt + Ht();
								st({
									id: qt.page_id,
									type: g,
									referrer: !e || n ? Dt : null,
									query: ot(e),
									metadata: S(r),
								}),
									(Dt = a);
							})(t, t || c || !K('r'), u, n);
					};
					if (E) l();
					else
						try {
							k && tt(k.getHighEntropyValues)
								? k
										.getHighEntropyValues([T, U])
										.then(function (t) {
											(qt.os_name = t[T]), (qt.os_version = t[U]), l();
										})
										['catch'](l)
								: l();
						} catch (p) {
							l();
						}
				}
			},
			Tt = f.history,
			Ut = Tt ? Tt.pushState : i,
			It = f.dispatchEvent,
			Vt = 'pushState';
		vt &&
			Ut &&
			Event &&
			It &&
			((Tt.pushState =
				((Lt = Tt[(Jt = Vt)]),
				function () {
					var t,
						e = arguments,
						n = Lt.apply(this, e);
					return (
						tt(Event)
							? (t = new Event(Jt))
							: (t = _.createEvent('Event')).initEvent(Jt, d, d),
						(t.arguments = e),
						It(t),
						n
					);
				})),
			q(
				Vt,
				function () {
					Pt(1);
				},
				m
			),
			q(
				'popstate',
				function () {
					Pt(1);
				},
				m
			)),
			vt &&
				'hash' == mt &&
				'onhashchange' in f &&
				q(
					'hashchange',
					function () {
						Pt(1);
					},
					m
				),
			vt
				? Pt()
				: (f.sa_pageview = function (t, e) {
						Pt(0, t, e);
				  });
		var Bt = ['string', 'number'],
			Nt = function (t, e, n) {
				!n && tt(e) && (n = e);
				var r = tt(t),
					a = tt(n) ? n : function () {},
					i = typeof t;
				if (Bt.indexOf(i) < 0 && !r) return z(yt, s + " can't be " + i), a();
				try {
					if (r) {
						var o = t();
						if (Bt.indexOf(typeof o) < 0)
							return z(yt, t + ' returns no string: ' + o), a();
						t = o;
					}
				} catch (Zt) {
					return z(yt, Zt), a();
				}
				t = ('' + t).replace(/[^a-z0-9]+/gi, '_').replace(/(^_|_$)/g, '');
				var c = { type: s, event: t };
				(e = at(e, c)), t && st(Y(c, { query: ot(), metadata: S(e) }), a);
			},
			zt = function (t, e, n) {
				Nt(t, e, n);
			};
		f[yt] || (f[yt] = zt);
		var Ft = f[yt],
			Wt = Ft && Ft.q ? Ft.q : [];
		for (var Gt in ((f[yt] = zt), Wt))
			F(Wt, Gt) &&
				(Array.isArray(Wt[Gt]) ? Nt.apply(null, Wt[Gt]) : Nt(Wt[Gt]));
	} catch (Kt) {
		n(Kt);
	}
	var Jt, Lt, Yt;
})(window, {}, 'simpleanalyticscdn.com');
//# sourceMappingURL=latest.js.map
