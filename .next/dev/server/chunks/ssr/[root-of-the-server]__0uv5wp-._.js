module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/data/animations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animations",
    ()=>animations,
    "getAnimationBySlug",
    ()=>getAnimationBySlug
]);
const animations = [
    {
        slug: "animation-1",
        title: "Animation 1",
        category: "GSAP",
        summary: "Placeholder detail page for a GSAP-driven animation entry."
    },
    {
        slug: "animation-2",
        title: "Animation 2",
        category: "React Native",
        summary: "Placeholder detail page for a React Native animation entry."
    },
    {
        slug: "animation-3",
        title: "Animation 3",
        category: "GSAP",
        summary: "Placeholder detail page for another timeline-based animation."
    },
    {
        slug: "animation-4",
        title: "Animation 4",
        category: "React Native",
        summary: "Placeholder detail page for a mobile interaction concept."
    },
    {
        slug: "animation-5",
        title: "Animation 5",
        category: "GSAP",
        summary: "Placeholder detail page for a motion study in the library."
    },
    {
        slug: "animation-6",
        title: "Animation 6",
        category: "React Native",
        summary: "Placeholder detail page for a native animation experiment."
    }
];
function getAnimationBySlug(slug) {
    return animations.find((animation)=>animation.slug === slug);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$data$2f$animations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/data/animations.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$data$2f$animations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["animations"].map((animation)=>({
            slug: animation.slug
        }));
}
async function AnimationDetailPage({ params }) {
    const { slug } = await params;
    const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$data$2f$animations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnimationBySlug"])(slug);
    if (!animation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-8 md:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/library",
                className: "inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "text-base leading-none",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Back to library"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 lg:grid-cols-[1.4fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex min-h-[340px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[#1a1a1a] text-zinc-500",
                        children: "Preview placeholder"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "flex flex-col justify-between gap-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-300",
                                        children: animation.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-medium tracking-tight text-white",
                                                children: animation.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base leading-7 text-zinc-300",
                                                children: animation.summary
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-sm leading-6 text-zinc-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Slug: ",
                                        animation.slug
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/app/library/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0uv5wp-._.js.map