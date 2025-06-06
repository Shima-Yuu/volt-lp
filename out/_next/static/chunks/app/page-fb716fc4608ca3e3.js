(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1969: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 1281));
    },
    1281: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ek;
          },
        });
      var a = s(7437),
        l = s(2265),
        r = s(9303),
        i = s(8278),
        n = s(7062);
      s(3034), s(4885), s(7322);
      var o = s(8441),
        d = s(5750),
        c = s(2882),
        x = s(8956),
        m = s(9036),
        u = s(4411),
        f = s(4482),
        h = s(4597),
        p = s(1827),
        b = s(2835),
        j = s(2741),
        g = s(7256),
        N = s(6061),
        v = s(7042),
        y = s(4769);
      function w() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, y.m6)((0, v.W)(t));
      }
      let k = (0, N.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        C = l.forwardRef((e, t) => {
          let { className: s, variant: l, size: r, asChild: i = !1, ...n } = e,
            o = i ? g.g7 : "button";
          return (0, a.jsx)(o, {
            className: w(k({ variant: l, size: r, className: s })),
            ref: t,
            ...n,
          });
        });
      C.displayName = "Button";
      let E = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: w(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            s
          ),
          ...l,
        });
      });
      E.displayName = "Card";
      let R = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: w("flex flex-col space-y-1.5 p-6", s),
          ...l,
        });
      });
      R.displayName = "CardHeader";
      let Z = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("h3", {
          ref: t,
          className: w("text-2xl font-semibold leading-none tracking-tight", s),
          ...l,
        });
      });
      Z.displayName = "CardTitle";
      let _ = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("p", {
          ref: t,
          className: w("text-sm text-muted-foreground", s),
          ...l,
        });
      });
      _.displayName = "CardDescription";
      let z = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("div", { ref: t, className: w("p-6 pt-0", s), ...l });
      });
      z.displayName = "CardContent";
      let I = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: w("flex items-center p-6 pt-0", s),
          ...l,
        });
      });
      I.displayName = "CardFooter";
      var S = s(9089),
        V = s(3523);
      let F = S.fC,
        q = l.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, a.jsx)(S.ck, {
            ref: t,
            className: w("border-b", s),
            ...l,
          });
        });
      q.displayName = "AccordionItem";
      let W = l.forwardRef((e, t) => {
        let { className: s, children: l, ...r } = e;
        return (0, a.jsx)(S.h4, {
          className: "flex",
          children: (0, a.jsxs)(S.xz, {
            ref: t,
            className: w(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              s
            ),
            ...r,
            children: [
              l,
              (0, a.jsx)(V.Z, {
                className: "h-4 w-4 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      W.displayName = S.xz.displayName;
      let O = l.forwardRef((e, t) => {
        let { className: s, children: l, ...r } = e;
        return (0, a.jsx)(S.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...r,
          children: (0, a.jsx)("div", {
            className: w("pb-4 pt-0", s),
            children: l,
          }),
        });
      });
      O.displayName = S.VY.displayName;
      var P = s(1045),
        D = s(2549);
      let M = P.fC;
      P.xz;
      let Y = P.h_;
      P.x8;
      let A = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)(P.aV, {
          ref: t,
          className: w(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            s
          ),
          ...l,
        });
      });
      A.displayName = P.aV.displayName;
      let L = l.forwardRef((e, t) => {
        let { className: s, children: l, ...r } = e;
        return (0, a.jsxs)(Y, {
          children: [
            (0, a.jsx)(A, {}),
            (0, a.jsxs)(P.VY, {
              ref: t,
              className: w(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s
              ),
              ...r,
              children: [
                l,
                (0, a.jsxs)(P.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, a.jsx)(D.Z, { className: "h-4 w-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      L.displayName = P.VY.displayName;
      let B = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: w("flex flex-col space-y-1.5 text-center sm:text-left", t),
          ...s,
        });
      };
      B.displayName = "DialogHeader";
      let T = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)(P.Dx, {
          ref: t,
          className: w("text-lg font-semibold leading-none tracking-tight", s),
          ...l,
        });
      });
      T.displayName = P.Dx.displayName;
      let H = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)(P.dk, {
          ref: t,
          className: w("text-sm text-muted-foreground", s),
          ...l,
        });
      });
      H.displayName = P.dk.displayName;
      var U = s(8110),
        X = s(1865),
        G = s(4578),
        Q = s(6743);
      let $ = (0, N.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        J = l.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, a.jsx)(Q.f, { ref: t, className: w($(), s), ...l });
        });
      J.displayName = Q.f.displayName;
      let K = X.RV,
        ee = l.createContext({}),
        et = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(ee.Provider, {
            value: { name: t.name },
            children: (0, a.jsx)(X.Qr, { ...t }),
          });
        },
        es = () => {
          let e = l.useContext(ee),
            t = l.useContext(ea),
            { getFieldState: s, formState: a } = (0, X.Gc)(),
            r = s(e.name, a);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: i } = t;
          return {
            id: i,
            name: e.name,
            formItemId: "".concat(i, "-form-item"),
            formDescriptionId: "".concat(i, "-form-item-description"),
            formMessageId: "".concat(i, "-form-item-message"),
            ...r,
          };
        },
        ea = l.createContext({}),
        el = l.forwardRef((e, t) => {
          let { className: s, ...r } = e,
            i = l.useId();
          return (0, a.jsx)(ea.Provider, {
            value: { id: i },
            children: (0, a.jsx)("div", {
              ref: t,
              className: w("space-y-2", s),
              ...r,
            }),
          });
        });
      el.displayName = "FormItem";
      let er = l.forwardRef((e, t) => {
        let { className: s, ...l } = e,
          { error: r, formItemId: i } = es();
        return (0, a.jsx)(J, {
          ref: t,
          className: w(r && "text-destructive", s),
          htmlFor: i,
          ...l,
        });
      });
      er.displayName = "FormLabel";
      let ei = l.forwardRef((e, t) => {
        let { ...s } = e,
          {
            error: l,
            formItemId: r,
            formDescriptionId: i,
            formMessageId: n,
          } = es();
        return (0, a.jsx)(g.g7, {
          ref: t,
          id: r,
          "aria-describedby": l ? "".concat(i, " ").concat(n) : "".concat(i),
          "aria-invalid": !!l,
          ...s,
        });
      });
      ei.displayName = "FormControl";
      let en = l.forwardRef((e, t) => {
        let { className: s, ...l } = e,
          { formDescriptionId: r } = es();
        return (0, a.jsx)("p", {
          ref: t,
          id: r,
          className: w("text-sm text-muted-foreground", s),
          ...l,
        });
      });
      en.displayName = "FormDescription";
      let eo = l.forwardRef((e, t) => {
        let { className: s, children: l, ...r } = e,
          { error: i, formMessageId: n } = es(),
          o = i ? String(null == i ? void 0 : i.message) : l;
        return o
          ? (0, a.jsx)("p", {
              ref: t,
              id: n,
              className: w("text-sm font-medium text-destructive", s),
              ...r,
              children: o,
            })
          : null;
      });
      eo.displayName = "FormMessage";
      let ed = l.forwardRef((e, t) => {
        let { className: s, type: l, ...r } = e;
        return (0, a.jsx)("input", {
          type: l,
          className: w(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...r,
        });
      });
      ed.displayName = "Input";
      let ec = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)("textarea", {
          className: w(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...l,
        });
      });
      ec.displayName = "Textarea";
      var ex = s(8835),
        em = s(2442);
      let eu = l.forwardRef((e, t) => {
        let { className: s, ...l } = e;
        return (0, a.jsx)(ex.fC, {
          ref: t,
          className: w(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            s
          ),
          ...l,
          children: (0, a.jsx)(ex.z$, {
            className: w("flex items-center justify-center text-current"),
            children: (0, a.jsx)(em.Z, { className: "h-4 w-4" }),
          }),
        });
      });
      eu.displayName = ex.fC.displayName;
      let ef = G.Ry({
        name: G.Z_().min(2, { message: "名前は2文字以上で入力してください。" }),
        email: G.Z_().email({
          message: "有効なメールアドレスを入力してください。",
        }),
        phone: G.Z_().min(10, {
          message: "有効な電話番号を入力してください。",
        }),
        company: G.Z_().min(2, {
          message: "会社名は2文字以上で入力してください。",
        }),
        message: G.Z_().min(10, {
          message: "お問い合わせ内容は10文字以上で入力してください。",
        }),
        privacy: G.O7().refine((e) => !0 === e, {
          message: "プライバシーポリシーに同意する必要があります。",
        }),
      });
      function eh() {
        let e = (0, X.cI)({
          resolver: (0, U.F)(ef),
          defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            privacy: !1,
          },
        });
        return (0, a.jsx)(K, {
          ...e,
          children: (0, a.jsxs)("form", {
            onSubmit: e.handleSubmit(function (e) {
              console.log(e);
            }),
            className: "space-y-8",
            children: [
              (0, a.jsxs)("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                  (0, a.jsx)(et, {
                    control: e.control,
                    name: "name",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsxs)(el, {
                        children: [
                          (0, a.jsx)(er, { children: "お名前" }),
                          (0, a.jsx)(ei, {
                            children: (0, a.jsx)(ed, {
                              placeholder: "山田 太郎",
                              ...t,
                            }),
                          }),
                          (0, a.jsx)(eo, {}),
                        ],
                      });
                    },
                  }),
                  (0, a.jsx)(et, {
                    control: e.control,
                    name: "email",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsxs)(el, {
                        children: [
                          (0, a.jsx)(er, { children: "メールアドレス" }),
                          (0, a.jsx)(ei, {
                            children: (0, a.jsx)(ed, {
                              placeholder: "example@example.com",
                              ...t,
                            }),
                          }),
                          (0, a.jsx)(eo, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                  (0, a.jsx)(et, {
                    control: e.control,
                    name: "phone",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsxs)(el, {
                        children: [
                          (0, a.jsx)(er, { children: "電話番号" }),
                          (0, a.jsx)(ei, {
                            children: (0, a.jsx)(ed, {
                              placeholder: "090-1234-5678",
                              ...t,
                            }),
                          }),
                          (0, a.jsx)(eo, {}),
                        ],
                      });
                    },
                  }),
                  (0, a.jsx)(et, {
                    control: e.control,
                    name: "company",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsxs)(el, {
                        children: [
                          (0, a.jsx)(er, { children: "会社名" }),
                          (0, a.jsx)(ei, {
                            children: (0, a.jsx)(ed, {
                              placeholder: "株式会社サンプル",
                              ...t,
                            }),
                          }),
                          (0, a.jsx)(eo, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, a.jsx)(et, {
                control: e.control,
                name: "message",
                render: (e) => {
                  let { field: t } = e;
                  return (0, a.jsxs)(el, {
                    children: [
                      (0, a.jsx)(er, { children: "お問い合わせ内容" }),
                      (0, a.jsx)(ei, {
                        children: (0, a.jsx)(ec, {
                          placeholder: "お問い合わせ内容を入力してください",
                          className: "min-h-[120px]",
                          ...t,
                        }),
                      }),
                      (0, a.jsx)(eo, {}),
                    ],
                  });
                },
              }),
              (0, a.jsx)(et, {
                control: e.control,
                name: "privacy",
                render: (e) => {
                  let { field: t } = e;
                  return (0, a.jsxs)(el, {
                    className: "flex flex-row items-start space-x-3 space-y-0",
                    children: [
                      (0, a.jsx)(ei, {
                        children: (0, a.jsx)(eu, {
                          checked: t.value,
                          onCheckedChange: t.onChange,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-1 leading-none",
                        children: (0, a.jsx)(er, {
                          children: "プライバシーポリシーに同意する",
                        }),
                      }),
                      (0, a.jsx)(eo, {}),
                    ],
                  });
                },
              }),
              (0, a.jsx)(C, {
                type: "submit",
                className: "w-full bg-blue-600 hover:bg-blue-700",
                children: "お問い合わせを送信する",
              }),
            ],
          }),
        });
      }
      var ep = s(8004),
        eb = s(1393);
      function ej() {
        let [e, t] = (0, l.useState)(!1),
          [s, i] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          let e = () => {
            i(window.scrollY > 10);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let n = (e) => {
            t(!1);
            let s = document.getElementById(e);
            s && s.scrollIntoView({ behavior: "smooth", block: "start" });
          },
          o = [
            { title: "選ばれる理由", href: "about" },
            { title: "サービス", href: "services" },
            { title: "実績", href: "works" },
            { title: "FAQ", href: "faq" },
            { title: "お問い合わせ", href: "contact" },
          ];
        return (0, a.jsxs)(r.E.header, {
          className: "fixed w-full z-50 transition-all duration-500",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: [
            (0, a.jsx)("div", {
              className: "w-full transition-all duration-300 ".concat(
                s ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
              ),
              children: (0, a.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center justify-between h-16",
                  children: [
                    (0, a.jsx)("a", {
                      href: "#",
                      className:
                        "text-xl font-bold transition-colors duration-300 ".concat(
                          s ? "text-blue-900" : "text-white"
                        ),
                      children: "株式会社xxxx",
                    }),
                    (0, a.jsxs)("nav", {
                      className: "hidden md:flex items-center space-x-8",
                      children: [
                        o.map((e) =>
                          (0, a.jsx)(
                            "button",
                            {
                              onClick: () => n(e.href),
                              className:
                                "transition-colors duration-300 ".concat(
                                  s
                                    ? "text-gray-600 hover:text-blue-600"
                                    : "text-white/80 hover:text-white"
                                ),
                              children: e.title,
                            },
                            e.title
                          )
                        ),
                        (0, a.jsx)(C, {
                          onClick: () => n("contact"),
                          className: s
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-white text-blue-900 hover:bg-blue-50",
                          children: "お問い合わせ",
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "md:hidden p-2 transition-colors duration-300 ".concat(
                          s ? "text-blue-900" : "text-white"
                        ),
                      onClick: () => t(!e),
                      children: e ? (0, a.jsx)(D.Z, {}) : (0, a.jsx)(ep.Z, {}),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)(eb.M, {
              children:
                e &&
                (0, a.jsx)(r.E.div, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.2 },
                  className: "fixed inset-0 bg-white z-40 md:hidden",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col h-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-4 border-b",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-xl font-bold text-blue-900",
                            children: "Company",
                          }),
                          (0, a.jsx)("button", {
                            onClick: () => t(!1),
                            className: "p-2 text-gray-600",
                            children: (0, a.jsx)(D.Z, {}),
                          }),
                        ],
                      }),
                      (0, a.jsx)("nav", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: o.map((e) =>
                          (0, a.jsx)(
                            "button",
                            {
                              onClick: () => n(e.href),
                              className:
                                "block w-full text-left py-4 text-lg font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100",
                              children: e.title,
                            },
                            e.title
                          )
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "p-4 border-t",
                        children: (0, a.jsx)(C, {
                          onClick: () => n("contact"),
                          className: "w-full bg-blue-600 hover:bg-blue-700",
                          children: "お問い合わせ",
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      var eg = s(555),
        eN = s(4623);
      function ev() {
        let e = (0, l.useCallback)(async (e) => {
          await (0, eg.R)(e);
        }, []);
        return (0, a.jsx)(eN.Z, {
          className: "absolute inset-0",
          init: e,
          options: {
            particles: {
              number: { value: 120, density: { enable: !0, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: 0.6,
                random: !0,
                anim: { enable: !0, speed: 1, opacity_min: 0.1, sync: !1 },
              },
              size: {
                value: 3,
                random: !0,
                anim: { enable: !0, speed: 2, size_min: 0.1, sync: !1 },
              },
              line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 3,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !0, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: !0, mode: "grab" }, resize: !0 },
              modes: { grab: { distance: 140, line_linked: { opacity: 1 } } },
            },
            retina_detect: !0,
            fullScreen: { enable: !1 },
          },
        });
      }
      function ey(e) {
        let { icon: t, title: s, description: l, features: i, index: n } = e;
        return (0, a.jsx)(r.E.div, {
          initial: { opacity: 0, x: n % 2 == 0 ? -50 : 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 * n },
          viewport: { once: !0 },
          whileHover: { scale: 1.02 },
          className: "w-full",
          children: (0, a.jsxs)(E, {
            className:
              "h-full overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl",
            children: [
              (0, a.jsxs)(R, {
                className: "relative pb-0",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16",
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110",
                        children: (0, a.jsx)("div", {
                          className: "p-3 bg-blue-100 rounded-xl",
                          children: t,
                        }),
                      }),
                      (0, a.jsx)(Z, {
                        className: "text-xl text-blue-900 text-center",
                        children: s,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(z, {
                className: "relative",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -ml-12 -mb-12",
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-gray-600 mb-6",
                        children: l,
                      }),
                      (0, a.jsx)("ul", {
                        className: "space-y-3",
                        children: i.map((e, t) =>
                          (0, a.jsxs)(
                            "li",
                            {
                              className:
                                "flex items-center text-gray-600 bg-blue-50 p-2 rounded-lg",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "w-2 h-2 bg-blue-500 rounded-full mr-2",
                                }),
                                e,
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let ew = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };
      function ek() {
        let [e, t] = (0, l.useState)(null),
          s = [
            {
              icon: (0, a.jsx)(o.Z, { className: "w-8 h-8 text-blue-600" }),
              title: "金融系システム開発",
              description:
                "大手金融機関のオンラインバンキングシステムを最新技術でリニューアル",
              result: "利用者満足度98%達成",
              challenge:
                "レガシーシステムの刷新と、セキュリティ強化が課題でした。",
              solution:
                "最新のセキュリティ基準に準拠したシステムを構築し、UXを大幅に改善しました。",
              impact:
                "システム移行後、ユーザーからの高評価を獲得し、オンラインバンキングの利用率が40%向上しました。",
            },
            {
              icon: (0, a.jsx)(d.Z, { className: "w-8 h-8 text-blue-600" }),
              title: "人材マッチングアプリ",
              description:
                "AIを活用した革新的な人材マッチングプラットフォームを開発",
              result: "マッチング率200%向上",
              challenge: "従来の手動マッチングでは効率が悪く、精度も低かった。",
              solution:
                "機械学習アルゴリズムを活用し、スキルと企業ニーズのマッチング精度を向上。",
              impact:
                "採用までの期間を平均45%短縮し、企業と求職者双方の満足度が大幅に向上。",
            },
            {
              icon: (0, a.jsx)(c.Z, { className: "w-8 h-8 text-blue-600" }),
              title: "コミュニケーションツール",
              description:
                "社内コミュニケーションを活性化するチャットツールを開発",
              result: "業務効率30%改善",
              challenge: "部門間のコミュニケーション不足による業務の非効率化。",
              solution:
                "リアルタイムコミュニケーションと業務管理機能を統合したプラットフォームを開発。",
              impact:
                "会議時間の削減と情報共有の効率化により、生産性が大幅に向上。",
            },
            {
              icon: (0, a.jsx)(x.Z, { className: "w-8 h-8 text-blue-600" }),
              title: "ECサイトリニューアル",
              description: "大手小売業のECサイトをフルリニューアル",
              result: "売上150%増加",
              challenge: "モバイル対応の遅れとUI/UXの改善が急務だった。",
              solution:
                "最新のデザインシステムを導入し、完全レスポンシブ対応のECサイトを構築。",
              impact: "モバイルからの購入が70%増加し、カート放棄率が40%減少。",
            },
          ];
        return (0, a.jsxs)("main", {
          className:
            "min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden",
          children: [
            (0, a.jsx)(ej, {}),
            (0, a.jsxs)("section", {
              className:
                "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden",
              children: [
                (0, a.jsx)(ev, {}),
                (0, a.jsx)("div", {
                  className: "absolute inset-0 bg-blue-900/30",
                }),
                (0, a.jsxs)(r.E.div, {
                  className:
                    "container mx-auto text-center text-white z-10 px-4",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  children: [
                    (0, a.jsxs)(r.E.h1, {
                      className: "text-4xl md:text-7xl font-bold mb-6",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2, duration: 0.8 },
                      children: [
                        "デジタルの力で",
                        (0, a.jsx)("br", {}),
                        "ビジネスの未来を創造する",
                      ],
                    }),
                    (0, a.jsxs)(r.E.p, {
                      className: "text-lg md:text-2xl mb-8 text-blue-100",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4, duration: 0.8 },
                      children: [
                        "最新技術と創造力で、お客様のビジネスを次のステージへ。",
                        (0, a.jsx)("br", {}),
                        "私たちは、デジタルトランスフォーメーションの実現をサポートします。",
                      ],
                    }),
                    (0, a.jsx)(r.E.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6, duration: 0.8 },
                      children: (0, a.jsx)(C, {
                        size: "lg",
                        variant: "secondary",
                        className: "text-blue-800",
                        onClick: () => {
                          var e;
                          null === (e = document.getElementById("contact")) ||
                            void 0 === e ||
                            e.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        },
                        children: "お問い合わせはこちら",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("section", {
              className: "py-20 bg-white",
              id: "about",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, a.jsx)(r.E.h2, {
                    className:
                      "text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900",
                    ...ew,
                    children: "選ばれる3つの理由",
                  }),
                  (0, a.jsx)("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [
                      {
                        icon: (0, a.jsx)(m.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "確かな実績と信頼",
                        description:
                          "創業以来15年以上の実績と、500社以上のお客様からの信頼。大手企業から官公庁まで、多様な開発実績があります。",
                        points: [
                          "業界トップクラスの技術力",
                          "豊富な開発実績",
                          "高いクライアント満足度",
                        ],
                      },
                      {
                        icon: (0, a.jsx)(u.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "スピーディな開発",
                        description:
                          "アジャイル開発手法により、企画から実装まで最短2週間でリリース。迅速なフィードバックと柔軟な対応を実現します。",
                        points: [
                          "最短2週間でのリリース",
                          "柔軟な要件対応",
                          "継続的な改善提案",
                        ],
                      },
                      {
                        icon: (0, a.jsx)(f.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "最新技術の活用",
                        description:
                          "React、Next.js等の最新技術を駆使し、高性能で拡張性の高いシステムを開発。常に最新のトレンドを取り入れています。",
                        points: [
                          "モダンな技術スタック",
                          "高いパフォーマンス",
                          "セキュアな実装",
                        ],
                      },
                    ].map((e, t) =>
                      (0, a.jsx)(
                        r.E.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { duration: 0.5, delay: 0.2 * t },
                          viewport: { once: !0 },
                          children: (0, a.jsx)(E, {
                            className:
                              "h-full hover:shadow-lg transition-shadow duration-300",
                            children: (0, a.jsxs)(z, {
                              className: "pt-6",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex justify-center mb-4",
                                  children: e.icon,
                                }),
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-blue-900 text-center mb-4",
                                  children: e.title,
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-gray-600 mb-4",
                                  children: e.description,
                                }),
                                (0, a.jsx)("ul", {
                                  className: "space-y-2",
                                  children: e.points.map((e, t) =>
                                    (0, a.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "flex items-center text-gray-600",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className:
                                              "w-2 h-2 bg-blue-500 rounded-full mr-2",
                                          }),
                                          e,
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "py-20 bg-blue-50",
              id: "services",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, a.jsx)(r.E.h2, {
                    className:
                      "text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900",
                    ...ew,
                    children: "サービス内容",
                  }),
                  (0, a.jsx)("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [
                      {
                        icon: (0, a.jsx)(x.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "Webサイト制作",
                        description:
                          "ビジネスの成長を加速させる、魅力的なWebサイトを制作します。",
                        features: [
                          "コーポレートサイト",
                          "ランディングページ",
                          "採用サイト",
                          "レスポンシブデザイン",
                        ],
                      },
                      {
                        icon: (0, a.jsx)(h.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "Webアプリケーション開発",
                        description:
                          "ビジネスの課題を解決する、カスタムWebアプリケーションを開発します。",
                        features: [
                          "業務システム開発",
                          "ECサイト構築",
                          "CMS開発",
                          "API開発",
                        ],
                      },
                      {
                        icon: (0, a.jsx)(p.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "SEO・MEO対策",
                        description:
                          "検索エンジン対策で、ビジネスの視認性を向上させます。",
                        features: [
                          "SEO内部対策",
                          "コンテンツマーケティング",
                          "Googleマイビジネス最適化",
                          "アクセス解析",
                        ],
                      },
                      {
                        icon: (0, a.jsx)(b.Z, {
                          className: "w-12 h-12 text-blue-600",
                        }),
                        title: "集客支援・業務効率化",
                        description:
                          "デジタルマーケティングと業務効率化で、ビジネスを成長させます。",
                        features: [
                          "マーケティング戦略立案",
                          "広告運用支援",
                          "業務プロセス改善",
                          "システム導入支援",
                        ],
                      },
                    ].map((e, t) => (0, a.jsx)(ey, { ...e, index: t }, t)),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "py-20 bg-white",
              id: "works",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, a.jsx)(r.E.h2, {
                    className:
                      "text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900",
                    ...ew,
                    children: "実績・事例",
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative px-4 md:px-12",
                    children: [
                      (0, a.jsx)(i.tq, {
                        modules: [n.W_, n.tl, n.pt],
                        spaceBetween: 30,
                        slidesPerView: 1,
                        navigation: {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        },
                        pagination: { clickable: !0, el: ".swiper-pagination" },
                        autoplay: { delay: 5e3 },
                        loop: !0,
                        breakpoints: {
                          640: { slidesPerView: 2 },
                          1024: { slidesPerView: 3 },
                        },
                        className: "!pb-5 md:!h-[380px]",
                        children: s.map((e, s) =>
                          (0, a.jsx)(
                            i.o5,
                            {
                              className: "h-full",
                              children: (0, a.jsx)(E, {
                                className:
                                  "h-full cursor-pointer hover:shadow-lg transition-all duration-300 md:flex md:flex-col",
                                onClick: () => t(e),
                                children: (0, a.jsxs)(z, {
                                  className: "pt-6 h-full md:flex md:flex-col",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "mb-4",
                                      children: e.icon,
                                    }),
                                    (0, a.jsx)("h3", {
                                      className: "text-xl font-bold mb-2",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "text-gray-600 mb-4",
                                      children: e.description,
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "bg-blue-50 p-3 rounded-lg mt-auto",
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "text-blue-700 font-semibold",
                                        children: e.result,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            },
                            s
                          )
                        ),
                      }),
                      (0, a.jsx)("div", { className: "swiper-pagination" }),
                      (0, a.jsx)("button", {
                        className:
                          "swiper-button-prev !w-8 !h-8 !text-blue-600 !-left-2 after:!text-lg",
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "swiper-button-next !w-8 !h-8 !text-blue-600 !-right-2 after:!text-lg",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(M, {
              open: !!e,
              onOpenChange: () => t(null),
              children: (0, a.jsx)(L, {
                className: "sm:max-w-[500px]",
                children: (0, a.jsxs)(B, {
                  children: [
                    (0, a.jsxs)(T, {
                      className: "flex items-center gap-2",
                      children: [
                        null == e ? void 0 : e.icon,
                        (0, a.jsx)("span", {
                          children: null == e ? void 0 : e.title,
                        }),
                      ],
                    }),
                    (0, a.jsx)(H, {
                      children: (0, a.jsxs)("div", {
                        className: "mt-4",
                        children: [
                          (0, a.jsx)("div", {
                            className: "bg-blue-50 p-3 rounded-lg mb-4",
                            children: (0, a.jsx)("p", {
                              className: "text-blue-700 font-semibold",
                              children: null == e ? void 0 : e.result,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "font-semibold text-blue-900",
                                    children: "課題",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-600",
                                    children: null == e ? void 0 : e.challenge,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "font-semibold text-blue-900",
                                    children: "解決策",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-600",
                                    children: null == e ? void 0 : e.solution,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", {
                                    className: "font-semibold text-blue-900",
                                    children: "成果",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-gray-600",
                                    children: null == e ? void 0 : e.impact,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)("section", {
              className: "py-20 bg-blue-50",
              id: "faq",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, a.jsx)(r.E.h2, {
                    className:
                      "text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900",
                    ...ew,
                    children: "よくある質問",
                  }),
                  (0, a.jsx)("div", {
                    className: "max-w-3xl mx-auto",
                    children: (0, a.jsx)(F, {
                      type: "multiple",
                      className: "space-y-4",
                      children: [
                        {
                          question: "開発期間はどのくらいかかりますか？",
                          answer:
                            "プロジェクトの規模や要件によって異なりますが、一般的なWebサイトであれば2-3ヶ月、大規模なシステム開発の場合は6ヶ月以上かかることがあります。まずはご相談ください。",
                        },
                        {
                          question: "開発費用の目安を教えてください",
                          answer:
                            "プロジェクトの内容によって大きく異なります。小規模なWebサイトで50万円から、大規模なシステム開発では数百万円以上になることもあります。まずはご予算をお聞かせください。",
                        },
                        {
                          question:
                            "開発後のサポート体制はどうなっていますか？",
                          answer:
                            "保守・運用サポートプランをご用意しています。システムの監視、バグ修正、機能追加など、お客様のニーズに応じた継続的なサポートを提供します。",
                        },
                        {
                          question:
                            "どのような技術スタックを使用していますか？",
                          answer:
                            "React、Next.js、TypeScriptなどのモダンな技術を中心に、プロジェクトに最適な技術を選定します。常に最新の技術動向をキャッチアップしています。",
                        },
                        {
                          question: "セキュリティ対策は万全ですか？",
                          answer:
                            "SSL/TLS暗号化、脆弱性診断、定期的なセキュリティアップデートなど、包括的なセキュリティ対策を実施しています。また、ISMS認証も取得済みです。",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          q,
                          {
                            value: "item-".concat(t),
                            className:
                              "bg-white rounded-lg shadow-sm border border-gray-200",
                            children: [
                              (0, a.jsx)(W, {
                                className:
                                  "px-6 py-4 text-lg font-medium hover:text-blue-600 [&[data-state=open]]:text-blue-600 text-left",
                                children: e.question,
                              }),
                              (0, a.jsx)(O, {
                                className: "px-6 pb-4 text-gray-600",
                                children: e.answer,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "py-20 bg-white",
              id: "contact",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, a.jsx)(r.E.h2, {
                    className:
                      "text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900",
                    ...ew,
                    children: "お問い合わせ",
                  }),
                  (0, a.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-center mb-12",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-2 text-xl font-semibold text-blue-900 mb-4",
                            children: [
                              (0, a.jsx)(j.Z, { className: "w-6 h-6" }),
                              (0, a.jsx)("span", { children: "0120-123-456" }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className: "text-gray-600",
                            children: "受付時間: 平日 9:00〜18:00",
                          }),
                        ],
                      }),
                      (0, a.jsx)(eh, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [950, 971, 864, 744], function () {
      return e((e.s = 1969));
    }),
      (_N_E = e.O());
  },
]);
