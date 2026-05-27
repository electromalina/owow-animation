module.exports = [
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationCard",
    ()=>AnimationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnimationCard({ animation }) {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[4.96px] border border-white/10",
        onClick: ()=>router.push(`/library/${animation.slug}`),
        onMouseEnter: ()=>videoRef.current?.play(),
        onMouseLeave: ()=>{
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#141414]"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            animation.videoSrc ?? animation.previewSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: animation.videoSrc ?? animation.previewSrc,
                className: "absolute inset-0 h-full w-full object-cover",
                muted: true,
                loop: true,
                playsInline: true,
                preload: "auto"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-normal tracking-tight text-white",
                        children: animation.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: (animation.tags ?? []).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-[3.38px] bg-[#222222] px-3 py-1 text-xs text-[#D0D2CC]",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilterCategories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILTER_CATEGORY_OPTIONS",
    ()=>FILTER_CATEGORY_OPTIONS,
    "getCategoryFacetId",
    ()=>getCategoryFacetId,
    "matchesAnimationCategory",
    ()=>matchesAnimationCategory
]);
const FILTER_CATEGORY_OPTIONS = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "cursor",
        label: "Cursor"
    },
    {
        id: "hover",
        label: "Hover"
    },
    {
        id: "loading",
        label: "Loading"
    },
    {
        id: "scroll",
        label: "Scroll"
    },
    {
        id: "transition",
        label: "Transition"
    },
    {
        id: "text",
        label: "Text"
    },
    {
        id: "button",
        label: "Button"
    },
    {
        id: "background",
        label: "Background"
    }
];
function normalizeCategory(value) {
    return value.trim().toLowerCase();
}
function getCategoryFacetId(category) {
    const normalized = normalizeCategory(category);
    const match = FILTER_CATEGORY_OPTIONS.find((option)=>option.id !== "all" && normalizeCategory(option.label) === normalized);
    return match?.id ?? null;
}
function matchesAnimationCategory(category, facet) {
    return getCategoryFacetId(category) === facet;
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilters.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LIBRARY_FILTERS",
    ()=>DEFAULT_LIBRARY_FILTERS,
    "LIBRARY_OPTIONS",
    ()=>LIBRARY_OPTIONS,
    "PLATFORM_OPTIONS",
    ()=>PLATFORM_OPTIONS,
    "applyLibraryFilters",
    ()=>applyLibraryFilters,
    "buildActiveChips",
    ()=>buildActiveChips,
    "buildFacetCounts",
    ()=>buildFacetCounts,
    "getLibraryFacet",
    ()=>getLibraryFacet,
    "getPlatformFacet",
    ()=>getPlatformFacet,
    "isDefaultFilters",
    ()=>isDefaultFilters,
    "matchesCategoryFacet",
    ()=>matchesCategoryFacet,
    "matchesLibraryFacet",
    ()=>matchesLibraryFacet,
    "matchesPlatformFacet",
    ()=>matchesPlatformFacet,
    "resetFilterKey",
    ()=>resetFilterKey,
    "sortAnimations",
    ()=>sortAnimations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilterCategories.ts [app-ssr] (ecmascript)");
;
const DEFAULT_LIBRARY_FILTERS = {
    platform: "all",
    library: "all",
    category: "all",
    sort: "newest"
};
const PLATFORM_OPTIONS = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "desktop",
        label: "Desktop"
    },
    {
        id: "mobile",
        label: "Mobile"
    },
    {
        id: "both",
        label: "Both"
    }
];
const LIBRARY_OPTIONS = [
    {
        id: "all",
        label: "All Libraries"
    },
    {
        id: "gsap",
        label: "GSAP"
    },
    {
        id: "reanimated",
        label: "React Reanimate"
    }
];
;
function getPlatformFacet(meta) {
    const { platforms } = meta;
    if (platforms.includes("web") && platforms.includes("mobile")) return "both";
    if (platforms.includes("mobile")) return "mobile";
    return "desktop";
}
function getLibraryFacet(meta) {
    if (meta.engine === "gsap") return "gsap";
    if (meta.engine === "reanimated") return "reanimated";
    return null;
}
function matchesPlatformFacet(meta, facet) {
    if (facet === "all") return true;
    return getPlatformFacet(meta) === facet;
}
function matchesLibraryFacet(meta, facet) {
    if (facet === "all") return true;
    return meta.engine === facet;
}
function matchesCategoryFacet(meta, facet) {
    if (facet === "all") return true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesAnimationCategory"])(meta.category, facet);
}
function applyLibraryFilters(items, state) {
    return items.filter((item)=>matchesPlatformFacet(item, state.platform) && matchesLibraryFacet(item, state.library) && matchesCategoryFacet(item, state.category));
}
function sortAnimations(items, sort) {
    if (sort !== "newest") return items;
    return [
        ...items
    ].sort((a, b)=>{
        const orderA = a.sortOrder ?? 0;
        const orderB = b.sortOrder ?? 0;
        if (orderB !== orderA) return orderB - orderA;
        return a.title.localeCompare(b.title);
    });
}
function buildFacetCounts(catalog) {
    const platform = {
        all: catalog.length,
        desktop: 0,
        mobile: 0,
        both: 0
    };
    const library = {
        all: catalog.length,
        gsap: 0,
        reanimated: 0
    };
    const category = {
        all: catalog.length,
        cursor: 0,
        hover: 0,
        loading: 0,
        scroll: 0,
        transition: 0,
        text: 0,
        button: 0,
        background: 0
    };
    for (const item of catalog){
        platform[getPlatformFacet(item)] += 1;
        const libFacet = getLibraryFacet(item);
        if (libFacet) library[libFacet] += 1;
        const catFacet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryFacetId"])(item.category);
        if (catFacet) category[catFacet] += 1;
    }
    return {
        platform,
        library,
        category
    };
}
function platformChipLabel(facet) {
    if (facet === "all") return "All Platforms";
    return PLATFORM_OPTIONS.find((o)=>o.id === facet)?.label ?? facet;
}
function libraryChipLabel(facet) {
    if (facet === "all") return "All Libraries";
    return LIBRARY_OPTIONS.find((o)=>o.id === facet)?.label ?? facet;
}
function categoryChipLabel(facet) {
    if (facet === "all") return "All Categories";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FILTER_CATEGORY_OPTIONS"].find((o)=>o.id === facet)?.label ?? facet;
}
function buildActiveChips(state) {
    return [
        {
            id: "platform",
            label: platformChipLabel(state.platform),
            removable: state.platform !== "all"
        },
        {
            id: "library",
            label: libraryChipLabel(state.library),
            removable: state.library !== "all"
        },
        {
            id: "category",
            label: categoryChipLabel(state.category),
            removable: state.category !== "all"
        },
        {
            id: "sort",
            label: "Newest",
            removable: false
        }
    ];
}
function isDefaultFilters(state) {
    return state.platform === DEFAULT_LIBRARY_FILTERS.platform && state.library === DEFAULT_LIBRARY_FILTERS.library && state.category === DEFAULT_LIBRARY_FILTERS.category && state.sort === DEFAULT_LIBRARY_FILTERS.sort;
}
function resetFilterKey(state, key) {
    return {
        ...state,
        [key]: DEFAULT_LIBRARY_FILTERS[key]
    };
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveFilterChips",
    ()=>ActiveFilterChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilters.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function ActiveFilterChips({ filters, onChange }) {
    const chips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildActiveChips"])(filters);
    const showClearAll = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isDefaultFilters"])(filters);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "library-chips",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "library-chips__label",
                children: "Filters:"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "library-chips__list",
                children: chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "library-chips__chip",
                        children: [
                            chip.label,
                            chip.removable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "library-chips__remove",
                                "aria-label": `Remove ${chip.label} filter`,
                                onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resetFilterKey"])(filters, chip.id)),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, chip.id, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            showClearAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "library-chips__clear",
                onClick: ()=>onChange(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_LIBRARY_FILTERS"]),
                children: "Clear all"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LibraryFilterSidebar",
    ()=>LibraryFilterSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilters.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilterCategories.ts [app-ssr] (ecmascript)");
"use client";
;
;
function FilterSection({ heading, options, selected, counts, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "library-sidebar__section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "library-sidebar__heading",
                children: heading
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            options.map((option)=>{
                const isSelected = selected === option.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `library-sidebar__option${isSelected ? " library-sidebar__option--selected" : ""}`,
                    onClick: ()=>onSelect(option.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "library-sidebar__option-label",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "library-sidebar__dot",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                option.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "library-sidebar__count",
                            children: counts[option.id]
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, option.id, true, {
                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function LibraryFilterSidebar({ filters, counts, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "library-sidebar",
        "aria-label": "Filter animations",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                heading: "Platform",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PLATFORM_OPTIONS"],
                selected: filters.platform,
                counts: counts.platform,
                onSelect: (platform)=>onChange({
                        ...filters,
                        platform
                    })
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                heading: "Library",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LIBRARY_OPTIONS"],
                selected: filters.library,
                counts: counts.library,
                onSelect: (library)=>onChange({
                        ...filters,
                        library
                    })
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                heading: "Category",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilterCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FILTER_CATEGORY_OPTIONS"],
                selected: filters.category,
                counts: counts.category,
                onSelect: (category)=>onChange({
                        ...filters,
                        category
                    })
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "library-sidebar__reset",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "library-sidebar__reset-btn",
                    onClick: ()=>onChange(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_LIBRARY_FILTERS"]),
                    children: "Reset all filters"
                }, void 0, false, {
                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LibraryPageClient",
    ()=>LibraryPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$animations$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/animations/registry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$AnimationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/AnimationCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$ActiveFilterChips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/ActiveFilterChips.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$LibraryFilterSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryFilterSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/libraryFilters.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
function LibraryPageClient() {
    const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$animations$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllAnimations"])(), []);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_LIBRARY_FILTERS"]);
    const facetCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildFacetCounts"])(catalog), [
        catalog
    ]);
    const filteredAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyLibraryFilters"])(catalog, filters);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$libraryFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sortAnimations"])(filtered, filters.sort);
    }, [
        catalog,
        filters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "library-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$LibraryFilterSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LibraryFilterSidebar"], {
                filters: filters,
                counts: facetCounts,
                onChange: setFilters
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "library-page__main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$ActiveFilterChips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActiveFilterChips"], {
                        filters: filters,
                        onChange: setFilters
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "library-page__count",
                        children: [
                            filteredAnimations.length,
                            " ",
                            filteredAnimations.length === 1 ? "animation" : "animations"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    filteredAnimations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "library-page__empty",
                        children: "No animations match the current filters."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "library-page__grid",
                        "aria-label": "Animation library",
                        children: filteredAnimations.map((animation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$library$2f$AnimationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationCard"], {
                                animation: animation
                            }, animation.slug, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/library/LibraryPageClient.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_SeM%204%20evidences_Budget%20snapshot%20prototype_owow-animation_src_0uo9n44._.js.map