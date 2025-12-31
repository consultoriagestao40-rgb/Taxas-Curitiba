(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Modal(param) {
    var isOpen = param.isOpen, onClose = param.onClose, title = param.title, children = param.children;
    _s();
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": function() {
            if (isOpen) {
                var _ref_current;
                (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.showModal();
            } else {
                var _ref_current1;
                (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.close();
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: ref,
        className: "p-0 rounded-xl shadow-2xl backdrop:bg-black/60 w-[480px] bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] open:animate-fade-in",
        onCancel: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-lg",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-surface-hover)]",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s(Modal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:11b24f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCompany",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401cd0967f8e4d5ca2146ba9c4fc08c0d9751e56f7":"createCompany"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401cd0967f8e4d5ca2146ba9c4fc08c0d9751e56f7", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCompany");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1ZBZ0NzQiwwTEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:cd4cf2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCostCenter",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40679089fa75d989f88de5eea933d01f1fe9481ae5":"createCostCenter"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40679089fa75d989f88de5eea933d01f1fe9481ae5", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCostCenter");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVZBb0VzQiw2TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:81b484 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a551cffc0abfce53a7ebb0420e29c249d6b3151f":"createClient"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a551cffc0abfce53a7ebb0420e29c249d6b3151f", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createClient");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVZBdUdzQix5TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:00ad51 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCompany",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c45b615cca269b07c7258a3bb470d3aaa9ccb07a":"deleteCompany"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c45b615cca269b07c7258a3bb470d3aaa9ccb07a", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCompany");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1ZBOENzQiwwTEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:135f34 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCostCenter",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40fc5b4fd12a428012c237e07f8e34595780e45ef0":"deleteCostCenter"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fc5b4fd12a428012c237e07f8e34595780e45ef0", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCostCenter");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVZBa0ZzQiw2TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:b2fbaa [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteClient",
    ()=>$$RSC_SERVER_ACTION_8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406157da5a8cbd9cb82a4ca903093ecd4986d8484a":"deleteClient"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406157da5a8cbd9cb82a4ca903093ecd4986d8484a", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteClient");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVZBb0hzQix5TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:69d841 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCity",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b28a2989aab59b0edb9d0708af1564622df4b8fd":"createCity"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b28a2989aab59b0edb9d0708af1564622df4b8fd", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCity");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVZBdUtzQix5TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7f0573 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCity",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408b9612e6360df6d8eb131e56867be8ecefa20ce5":"deleteCity"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408b9612e6360df6d8eb131e56867be8ecefa20ce5", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCity");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVZBOEtzQix5TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:852cc5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCostCenterGroup",
    ()=>$$RSC_SERVER_ACTION_16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40907749eda9975f9c52caadd9c952ebcb9217ea3d":"createCostCenterGroup"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40907749eda9975f9c52caadd9c952ebcb9217ea3d", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCostCenterGroup");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFZBaU1zQixvTUFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:f63daa [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCostCenterGroup",
    ()=>$$RSC_SERVER_ACTION_17
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b405f40ec93476d525fc1a233227512d7c6b14a0":"deleteCostCenterGroup"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b405f40ec93476d525fc1a233227512d7c6b14a0", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCostCenterGroup");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFZBd01zQixvTUFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:af19f8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCostCenterSegment",
    ()=>$$RSC_SERVER_ACTION_19
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400a56d8676f21ae208690dd70f1147ff4e85ff93b":"createCostCenterSegment"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400a56d8676f21ae208690dd70f1147ff4e85ff93b", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCostCenterSegment");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFZBMk5zQixzTUFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7a5ecb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCostCenterSegment",
    ()=>$$RSC_SERVER_ACTION_20
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"402d50cef987d1c931bc4da3bfb660067ecf4a9548":"deleteCostCenterSegment"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402d50cef987d1c931bc4da3bfb660067ecf4a9548", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCostCenterSegment");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFZBa09zQixzTUFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:8e7171 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGrouping",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4051ddf5cf9d92ec058728ef9a0dacfad8ae498bdd":"createGrouping"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4051ddf5cf9d92ec058728ef9a0dacfad8ae498bdd", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createGrouping");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVZBNklzQiw2TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:912022 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteGrouping",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4080b8a13143125b78be10f873fb112332cb9c09b9":"deleteGrouping"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4080b8a13143125b78be10f873fb112332cb9c09b9", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteGrouping");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2Ugc2V0dGluZ3MnKVxuICAgIH1cbn1cblxuLy8gLS0tIENvbXBhbnkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbXBhbmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb21wYW55LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnkoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBhd2FpdCBwcmlzbWEuY29tcGFueS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXG4gICAgICAgICAgICB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wYW55KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gQ2hlY2sgZm9yIGRlcGVuZGVuY2llc1xuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb21wYW55SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29tcGFueSBoYXMgYnVkZ2V0IGVudHJpZXMnKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvbXBhbnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlcnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIHJldHVybiBwcmlzbWEuY29zdENlbnRlci5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3N0Q2VudGVyKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29kZTogZGF0YS5jb2RlLFxuICAgICAgICAgICAgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWRcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29zdENlbnRlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjb3N0Q2VudGVySWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzRW50cmllcyA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ29zdCBDZW50ZXIgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2xpZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNsaWVudC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcblxuICAgIC8vIENoZWNrIGZvciBkZXBlbmRlbmNpZXNcbiAgICBjb25zdCBoYXNDb3N0Q2VudGVycyA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgY2xpZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoaGFzQ29zdENlbnRlcnMgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IENsaWVudCBpcyBsaW5rZWQgdG8gQ29zdCBDZW50ZXJzJylcblxuICAgIGNvbnN0IGhhc0VudHJpZXMgPSBhd2FpdCBwcmlzbWEuYnVkZ2V0RW50cnkuY291bnQoeyB3aGVyZTogeyBjbGllbnRJZDogaWQgfSB9KVxuICAgIGlmIChoYXNFbnRyaWVzID4gMCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlOiBDbGllbnQgaGFzIGJ1ZGdldCBlbnRyaWVzJylcblxuICAgIGF3YWl0IHByaXNtYS5jbGllbnQuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBHcm91cGluZyAoRGVwYXJ0bWVudCkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwaW5ncygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5ncm91cGluZy5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cGluZyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5ncm91cGluZy5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cGluZyhpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGF3YWl0IGNoZWNrQWRtaW4oc2Vzc2lvbilcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyLmNvdW50KHsgd2hlcmU6IHsgZ3JvdXBpbmdJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogRGVwYXJ0bWVudCBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmdyb3VwaW5nLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ2l0eSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNpdHkuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2l0eShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS5jaXR5LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNpdHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGNpdHlJZDogaWQgfSB9KVxuICAgIGlmIChjb3VudCA+IDApIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZTogQ2l0eSBpcyB1c2VkIGluIENvc3QgQ2VudGVycycpXG4gICAgYXdhaXQgcHJpc21hLmNpdHkuZGVsZXRlKHsgd2hlcmU6IHsgaWQsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbi8vIC0tLSBDb3N0IENlbnRlciBHcm91cCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlckdyb3VwcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgcmV0dXJuIHByaXNtYS5jb3N0Q2VudGVyR3JvdXAuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29zdENlbnRlckdyb3VwKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJHcm91cC5jcmVhdGUoeyBkYXRhOiB7IG5hbWUsIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkIH0gfSlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3N0Q2VudGVyR3JvdXAoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBwcmlzbWEuY29zdENlbnRlci5jb3VudCh7IHdoZXJlOiB7IGdyb3VwSWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IEdyb3VwIGlzIHVzZWQgaW4gQ29zdCBDZW50ZXJzJylcbiAgICBhd2FpdCBwcmlzbWEuY29zdENlbnRlckdyb3VwLmRlbGV0ZSh7IHdoZXJlOiB7IGlkLCB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9IH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKVxufVxuXG4vLyAtLS0gQ29zdCBDZW50ZXIgU2VnbWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29zdENlbnRlclNlZ21lbnRzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICByZXR1cm4gcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvc3RDZW50ZXJTZWdtZW50KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG4gICAgYXdhaXQgcHJpc21hLmNvc3RDZW50ZXJTZWdtZW50LmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvc3RDZW50ZXJTZWdtZW50KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLmNvc3RDZW50ZXIuY291bnQoeyB3aGVyZTogeyBzZWdtZW50SWQ6IGlkIH0gfSlcbiAgICBpZiAoY291bnQgPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGU6IFNlZ21lbnQgaXMgdXNlZCBpbiBDb3N0IENlbnRlcnMnKVxuICAgIGF3YWl0IHByaXNtYS5jb3N0Q2VudGVyU2VnbWVudC5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cbi8vIC0tLSBUZW5hbnQgU2V0dGluZ3MgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRlbmFudERyZVRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuICAgIGF3YWl0IHByaXNtYS50ZW5hbnQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24udGVuYW50SWQgfSxcbiAgICAgICAgZGF0YTogeyBkcmVUaXRsZTogdGl0bGUgfVxuICAgIH0pXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvZHJlJylcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVZBb0pzQiw2TEFBQSJ9
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:ed9c08 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUser",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405f9754da208757aedf83fd4038af5f53b2aff76a":"createUser"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/users.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405f9754da208757aedf83fd4038af5f53b2aff76a", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createUser");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2UgdXNlcnMnKVxuICAgIH1cbn1cblxuLy8gLS0tIFVzZXIgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCByb2xlOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHJvbGU6IHN0cmluZzsgcGFzc3dvcmQ/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0gfSlcbiAgICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkJylcblxuICAgIC8vIEJhc2ljIHBhc3N3b3JkIGZvciBub3cgKFByb2R1Y3Rpb24gc2hvdWxkIGhhc2ghKVxuICAgIGNvbnN0IGluaXRpYWxQYXNzd29yZCA9IGRhdGEucGFzc3dvcmQgfHwgJ3Bhc3N3b3JkMTIzJ1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFBhc3N3b3JkLCAvLyBUT0RPOiBIYXNoIHRoaXNcbiAgICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkLFxuICAgICAgICAgICAgbXVzdENoYW5nZVBhc3N3b3JkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBpZiAoaWQgPT09IHNlc3Npb24udXNlcklkKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgeW91ciBvd24gYWNjb3VudCcpXG5cbiAgICBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQZXJtaXNzaW9ucyh1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXJQZXJtaXNzaW9uLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0gfSxcbiAgICAgICAgICAgIGNvc3RDZW50ZXI6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBjb2RlOiB0cnVlIH0gfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQZXJtaXNzaW9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8e1xuICAgICAgICB0eXBlOiAnQ09NUEFOWScgfCAnQ09TVF9DRU5URVInLFxuICAgICAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgICAgICBjYW5WaWV3OiBib29sZWFuLFxuICAgICAgICBjYW5FZGl0OiBib29sZWFuLFxuICAgICAgICBjYW5DcmVhdGU6IGJvb2xlYW4sXG4gICAgICAgIGNhbkRlbGV0ZTogYm9vbGVhblxuICAgIH0+XG4pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gVmVyaWZ5IHVzZXIgYmVsb25ncyB0byB0ZW5hbnQ/XG4gICAgY29uc3QgdGFyZ2V0VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlcklkIH0gfSlcbiAgICBpZiAoIXRhcmdldFVzZXIgfHwgdGFyZ2V0VXNlci50ZW5hbnRJZCAhPT0gc2Vzc2lvbi50ZW5hbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kIGluIHRoaXMgdGVuYW50JylcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHBlcm1pc3Npb25zIGxvZ2ljXG4gICAgLy8gV2UgdHJlYXQgdGhlIGluY29taW5nIGxpc3QgYXMgdGhlIFwiQXV0aG9yaXRhdGl2ZSBMaXN0XCIuXG4gICAgLy8gSG93ZXZlciwgdXNlciBtaWdodCBiZSB1cGRhdGluZyBvbmx5IENvbXBhbmllcyBvciBvbmx5IENvc3RDZW50ZXJzP1xuICAgIC8vIFVJIHVzdWFsbHkgc2F2ZXMgdGhlIHdob2xlIHN0YXRlLlxuICAgIC8vIExldCdzIGFzc3VtZSB0aGUgVUkgc2VuZHMgQUxMIHZhbGlkIHBlcm1pc3Npb25zLlxuICAgIC8vIFdBUk5JTkc6IElmIFVJIG9taXRzIHNvbWV0aGluZywgaXQgZ2V0cyBkZWxldGVkLlxuXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gMS4gRGVsZXRlIGFsbCBleGlzdGluZyBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFVzZXJQZXJtaXNzaW9uIGlzIHB1cmVseSBhIG1hcHBpbmcgdGFibGUuXG4gICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQgfSB9KVxuXG4gICAgICAgIC8vIDIuIENyZWF0ZSBuZXcgcGVybWlzc2lvbnNcbiAgICAgICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlJZDogcC50eXBlID09PSAnQ09NUEFOWScgPyBwLmVudGl0eUlkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RDZW50ZXJJZDogcC50eXBlID09PSAnQ09TVF9DRU5URVInID8gcC5lbnRpdHlJZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5WaWV3OiBwLmNhblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5FZGl0OiBwLmNhbkVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5DcmVhdGU6IHAuY2FuQ3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBwLmNhbkRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhVQW1Dc0IsdUxBQUEifQ==
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:1be18b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteUser",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4044c176a5f6bbc82d90285cafe4578d933b173205":"deleteUser"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/users.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4044c176a5f6bbc82d90285cafe4578d933b173205", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteUser");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2UgdXNlcnMnKVxuICAgIH1cbn1cblxuLy8gLS0tIFVzZXIgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCByb2xlOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHJvbGU6IHN0cmluZzsgcGFzc3dvcmQ/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0gfSlcbiAgICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkJylcblxuICAgIC8vIEJhc2ljIHBhc3N3b3JkIGZvciBub3cgKFByb2R1Y3Rpb24gc2hvdWxkIGhhc2ghKVxuICAgIGNvbnN0IGluaXRpYWxQYXNzd29yZCA9IGRhdGEucGFzc3dvcmQgfHwgJ3Bhc3N3b3JkMTIzJ1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFBhc3N3b3JkLCAvLyBUT0RPOiBIYXNoIHRoaXNcbiAgICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkLFxuICAgICAgICAgICAgbXVzdENoYW5nZVBhc3N3b3JkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBpZiAoaWQgPT09IHNlc3Npb24udXNlcklkKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgeW91ciBvd24gYWNjb3VudCcpXG5cbiAgICBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQZXJtaXNzaW9ucyh1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXJQZXJtaXNzaW9uLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0gfSxcbiAgICAgICAgICAgIGNvc3RDZW50ZXI6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBjb2RlOiB0cnVlIH0gfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQZXJtaXNzaW9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8e1xuICAgICAgICB0eXBlOiAnQ09NUEFOWScgfCAnQ09TVF9DRU5URVInLFxuICAgICAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgICAgICBjYW5WaWV3OiBib29sZWFuLFxuICAgICAgICBjYW5FZGl0OiBib29sZWFuLFxuICAgICAgICBjYW5DcmVhdGU6IGJvb2xlYW4sXG4gICAgICAgIGNhbkRlbGV0ZTogYm9vbGVhblxuICAgIH0+XG4pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gVmVyaWZ5IHVzZXIgYmVsb25ncyB0byB0ZW5hbnQ/XG4gICAgY29uc3QgdGFyZ2V0VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlcklkIH0gfSlcbiAgICBpZiAoIXRhcmdldFVzZXIgfHwgdGFyZ2V0VXNlci50ZW5hbnRJZCAhPT0gc2Vzc2lvbi50ZW5hbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kIGluIHRoaXMgdGVuYW50JylcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHBlcm1pc3Npb25zIGxvZ2ljXG4gICAgLy8gV2UgdHJlYXQgdGhlIGluY29taW5nIGxpc3QgYXMgdGhlIFwiQXV0aG9yaXRhdGl2ZSBMaXN0XCIuXG4gICAgLy8gSG93ZXZlciwgdXNlciBtaWdodCBiZSB1cGRhdGluZyBvbmx5IENvbXBhbmllcyBvciBvbmx5IENvc3RDZW50ZXJzP1xuICAgIC8vIFVJIHVzdWFsbHkgc2F2ZXMgdGhlIHdob2xlIHN0YXRlLlxuICAgIC8vIExldCdzIGFzc3VtZSB0aGUgVUkgc2VuZHMgQUxMIHZhbGlkIHBlcm1pc3Npb25zLlxuICAgIC8vIFdBUk5JTkc6IElmIFVJIG9taXRzIHNvbWV0aGluZywgaXQgZ2V0cyBkZWxldGVkLlxuXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gMS4gRGVsZXRlIGFsbCBleGlzdGluZyBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFVzZXJQZXJtaXNzaW9uIGlzIHB1cmVseSBhIG1hcHBpbmcgdGFibGUuXG4gICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQgfSB9KVxuXG4gICAgICAgIC8vIDIuIENyZWF0ZSBuZXcgcGVybWlzc2lvbnNcbiAgICAgICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlJZDogcC50eXBlID09PSAnQ09NUEFOWScgPyBwLmVudGl0eUlkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RDZW50ZXJJZDogcC50eXBlID09PSAnQ09TVF9DRU5URVInID8gcC5lbnRpdHlJZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5WaWV3OiBwLmNhblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5FZGl0OiBwLmNhbkVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5DcmVhdGU6IHAuY2FuQ3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBwLmNhbkRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhVQTJEc0IsdUxBQUEifQ==
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7f267a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserPermissions",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4037d88d96557c5fe0ea66a6936e857768a6a0a6b1":"getUserPermissions"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/users.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4037d88d96557c5fe0ea66a6936e857768a6a0a6b1", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserPermissions");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2UgdXNlcnMnKVxuICAgIH1cbn1cblxuLy8gLS0tIFVzZXIgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCByb2xlOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHJvbGU6IHN0cmluZzsgcGFzc3dvcmQ/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0gfSlcbiAgICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkJylcblxuICAgIC8vIEJhc2ljIHBhc3N3b3JkIGZvciBub3cgKFByb2R1Y3Rpb24gc2hvdWxkIGhhc2ghKVxuICAgIGNvbnN0IGluaXRpYWxQYXNzd29yZCA9IGRhdGEucGFzc3dvcmQgfHwgJ3Bhc3N3b3JkMTIzJ1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFBhc3N3b3JkLCAvLyBUT0RPOiBIYXNoIHRoaXNcbiAgICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkLFxuICAgICAgICAgICAgbXVzdENoYW5nZVBhc3N3b3JkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBpZiAoaWQgPT09IHNlc3Npb24udXNlcklkKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgeW91ciBvd24gYWNjb3VudCcpXG5cbiAgICBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQZXJtaXNzaW9ucyh1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXJQZXJtaXNzaW9uLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0gfSxcbiAgICAgICAgICAgIGNvc3RDZW50ZXI6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBjb2RlOiB0cnVlIH0gfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQZXJtaXNzaW9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8e1xuICAgICAgICB0eXBlOiAnQ09NUEFOWScgfCAnQ09TVF9DRU5URVInLFxuICAgICAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgICAgICBjYW5WaWV3OiBib29sZWFuLFxuICAgICAgICBjYW5FZGl0OiBib29sZWFuLFxuICAgICAgICBjYW5DcmVhdGU6IGJvb2xlYW4sXG4gICAgICAgIGNhbkRlbGV0ZTogYm9vbGVhblxuICAgIH0+XG4pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gVmVyaWZ5IHVzZXIgYmVsb25ncyB0byB0ZW5hbnQ/XG4gICAgY29uc3QgdGFyZ2V0VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlcklkIH0gfSlcbiAgICBpZiAoIXRhcmdldFVzZXIgfHwgdGFyZ2V0VXNlci50ZW5hbnRJZCAhPT0gc2Vzc2lvbi50ZW5hbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kIGluIHRoaXMgdGVuYW50JylcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHBlcm1pc3Npb25zIGxvZ2ljXG4gICAgLy8gV2UgdHJlYXQgdGhlIGluY29taW5nIGxpc3QgYXMgdGhlIFwiQXV0aG9yaXRhdGl2ZSBMaXN0XCIuXG4gICAgLy8gSG93ZXZlciwgdXNlciBtaWdodCBiZSB1cGRhdGluZyBvbmx5IENvbXBhbmllcyBvciBvbmx5IENvc3RDZW50ZXJzP1xuICAgIC8vIFVJIHVzdWFsbHkgc2F2ZXMgdGhlIHdob2xlIHN0YXRlLlxuICAgIC8vIExldCdzIGFzc3VtZSB0aGUgVUkgc2VuZHMgQUxMIHZhbGlkIHBlcm1pc3Npb25zLlxuICAgIC8vIFdBUk5JTkc6IElmIFVJIG9taXRzIHNvbWV0aGluZywgaXQgZ2V0cyBkZWxldGVkLlxuXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gMS4gRGVsZXRlIGFsbCBleGlzdGluZyBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFVzZXJQZXJtaXNzaW9uIGlzIHB1cmVseSBhIG1hcHBpbmcgdGFibGUuXG4gICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQgfSB9KVxuXG4gICAgICAgIC8vIDIuIENyZWF0ZSBuZXcgcGVybWlzc2lvbnNcbiAgICAgICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlJZDogcC50eXBlID09PSAnQ09NUEFOWScgPyBwLmVudGl0eUlkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RDZW50ZXJJZDogcC50eXBlID09PSAnQ09TVF9DRU5URVInID8gcC5lbnRpdHlJZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5WaWV3OiBwLmNhblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5FZGl0OiBwLmNhbkVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5DcmVhdGU6IHAuY2FuQ3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBwLmNhbkRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNWQXFFc0IsK0xBQUEifQ==
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:c35827 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateUserPermissions",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6099116a8d9a98f81a9e9b39949e00d3b664012590":"updateUserPermissions"},".gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/users.ts",""] */ "use turbopack no side effects";
;
;
var $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6099116a8d9a98f81a9e9b39949e00d3b664012590", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserPermissions");
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zLCBTZXNzaW9uRGF0YSB9IGZyb20gJ0AvbGliL3Nlc3Npb24nXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPFNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKVxuICAgIGlmICghc2Vzc2lvbi5pc0xvZ2dlZEluIHx8ICFzZXNzaW9uLnRlbmFudElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkJylcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbihzZXNzaW9uOiBTZXNzaW9uRGF0YSkge1xuICAgIGlmIChzZXNzaW9uLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW46IE9ubHkgQWRtaW5zIGNhbiBtYW5hZ2UgdXNlcnMnKVxuICAgIH1cbn1cblxuLy8gLS0tIFVzZXIgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB0ZW5hbnRJZDogc2Vzc2lvbi50ZW5hbnRJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCByb2xlOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUgfSxcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZGF0YTogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHJvbGU6IHN0cmluZzsgcGFzc3dvcmQ/OiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICAvLyBDaGVjayBpZiBlbWFpbCBleGlzdHNcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IGVtYWlsOiBkYXRhLmVtYWlsIH0gfSlcbiAgICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkJylcblxuICAgIC8vIEJhc2ljIHBhc3N3b3JkIGZvciBub3cgKFByb2R1Y3Rpb24gc2hvdWxkIGhhc2ghKVxuICAgIGNvbnN0IGluaXRpYWxQYXNzd29yZCA9IGRhdGEucGFzc3dvcmQgfHwgJ3Bhc3N3b3JkMTIzJ1xuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogaW5pdGlhbFBhc3N3b3JkLCAvLyBUT0RPOiBIYXNoIHRoaXNcbiAgICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcbiAgICAgICAgICAgIHRlbmFudElkOiBzZXNzaW9uLnRlbmFudElkLFxuICAgICAgICAgICAgbXVzdENoYW5nZVBhc3N3b3JkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICBpZiAoaWQgPT09IHNlc3Npb24udXNlcklkKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgeW91ciBvd24gYWNjb3VudCcpXG5cbiAgICBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoeyB3aGVyZTogeyBpZCwgdGVuYW50SWQ6IHNlc3Npb24udGVuYW50SWQgfSB9KVxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3NldHRpbmdzJylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQZXJtaXNzaW9ucyh1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICBhd2FpdCBjaGVja0FkbWluKHNlc3Npb24pXG5cbiAgICByZXR1cm4gcHJpc21hLnVzZXJQZXJtaXNzaW9uLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0gfSxcbiAgICAgICAgICAgIGNvc3RDZW50ZXI6IHsgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlLCBjb2RlOiB0cnVlIH0gfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQZXJtaXNzaW9ucyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8e1xuICAgICAgICB0eXBlOiAnQ09NUEFOWScgfCAnQ09TVF9DRU5URVInLFxuICAgICAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgICAgICBjYW5WaWV3OiBib29sZWFuLFxuICAgICAgICBjYW5FZGl0OiBib29sZWFuLFxuICAgICAgICBjYW5DcmVhdGU6IGJvb2xlYW4sXG4gICAgICAgIGNhbkRlbGV0ZTogYm9vbGVhblxuICAgIH0+XG4pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgYXdhaXQgY2hlY2tBZG1pbihzZXNzaW9uKVxuXG4gICAgLy8gVmVyaWZ5IHVzZXIgYmVsb25ncyB0byB0ZW5hbnQ/XG4gICAgY29uc3QgdGFyZ2V0VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlcklkIH0gfSlcbiAgICBpZiAoIXRhcmdldFVzZXIgfHwgdGFyZ2V0VXNlci50ZW5hbnRJZCAhPT0gc2Vzc2lvbi50ZW5hbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgbm90IGZvdW5kIGluIHRoaXMgdGVuYW50JylcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHBlcm1pc3Npb25zIGxvZ2ljXG4gICAgLy8gV2UgdHJlYXQgdGhlIGluY29taW5nIGxpc3QgYXMgdGhlIFwiQXV0aG9yaXRhdGl2ZSBMaXN0XCIuXG4gICAgLy8gSG93ZXZlciwgdXNlciBtaWdodCBiZSB1cGRhdGluZyBvbmx5IENvbXBhbmllcyBvciBvbmx5IENvc3RDZW50ZXJzP1xuICAgIC8vIFVJIHVzdWFsbHkgc2F2ZXMgdGhlIHdob2xlIHN0YXRlLlxuICAgIC8vIExldCdzIGFzc3VtZSB0aGUgVUkgc2VuZHMgQUxMIHZhbGlkIHBlcm1pc3Npb25zLlxuICAgIC8vIFdBUk5JTkc6IElmIFVJIG9taXRzIHNvbWV0aGluZywgaXQgZ2V0cyBkZWxldGVkLlxuXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgICAgLy8gMS4gRGVsZXRlIGFsbCBleGlzdGluZyBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgICAgIC8vIFRoaXMgaXMgc2FmZSBiZWNhdXNlIFVzZXJQZXJtaXNzaW9uIGlzIHB1cmVseSBhIG1hcHBpbmcgdGFibGUuXG4gICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB1c2VySWQgfSB9KVxuXG4gICAgICAgIC8vIDIuIENyZWF0ZSBuZXcgcGVybWlzc2lvbnNcbiAgICAgICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LnVzZXJQZXJtaXNzaW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlJZDogcC50eXBlID09PSAnQ09NUEFOWScgPyBwLmVudGl0eUlkIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RDZW50ZXJJZDogcC50eXBlID09PSAnQ09TVF9DRU5URVInID8gcC5lbnRpdHlJZCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5WaWV3OiBwLmNhblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5FZGl0OiBwLmNhbkVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5DcmVhdGU6IHAuY2FuQ3JlYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBwLmNhbkRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9zZXR0aW5ncycpXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlWQWtGc0Isa01BQUEifQ==
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsClient",
    ()=>SettingsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$11b24f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:11b24f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$cd4cf2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:cd4cf2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$81b484__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:81b484 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$00ad51__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:00ad51 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$135f34__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:135f34 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$b2fbaa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:b2fbaa [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$69d841__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:69d841 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7f0573__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7f0573 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$852cc5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:852cc5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$f63daa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:f63daa [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$af19f8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:af19f8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7a5ecb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7a5ecb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$8e7171__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:8e7171 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$912022__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:912022 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$ed9c08__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:ed9c08 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$1be18b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:1be18b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7f267a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:7f267a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$c35827__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/data:c35827 [app-client] (ecmascript) <text/javascript>");
;
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SettingsClient(param) {
    var _this = this;
    var initialCompanies = param.initialCompanies, initialCostCenters = param.initialCostCenters, initialClients = param.initialClients, initialUsers = param.initialUsers, initialCities = param.initialCities, initialGroups = param.initialGroups, initialSegments = param.initialSegments, initialGroupings = param.initialGroupings;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('companies'), 2), activeTab = _useState[0], setActiveTab = _useState[1];
    // Modal State
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isModalOpen = _useState1[0], setIsModalOpen = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        code: '',
        email: '',
        role: 'USER',
        password: ''
    }), 2), formData = _useState2[0], setFormData = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isSubmitting = _useState3[0], setIsSubmitting = _useState3[1];
    // Permission Management State
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), permissionUser = _useState4[0], setPermissionUser = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), permissions = _useState5[0], setPermissions = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isLoadingPerms = _useState6[0], setIsLoadingPerms = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isSavingPerms = _useState7[0], setIsSavingPerms = _useState7[1];
    var handleOpenModal = function() {
        setFormData({
            name: '',
            code: '',
            email: '',
            role: 'USER',
            password: ''
        });
        setIsModalOpen(true);
    };
    var handleSubmit = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var error;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!formData.name && activeTab !== 'users') return [
                            2
                        ];
                        setIsSubmitting(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            18,
                            19,
                            20
                        ]);
                        if (!(activeTab === 'companies')) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$11b24f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCompany"])({
                                name: formData.name,
                                code: formData.code
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 3:
                        if (!(activeTab === 'costCenters')) return [
                            3,
                            5
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$cd4cf2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCostCenter"])({
                                name: formData.name,
                                code: formData.code
                            })
                        ];
                    case 4:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 5:
                        if (!(activeTab === 'clients')) return [
                            3,
                            7
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$81b484__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createClient"])(formData.name)
                        ];
                    case 6:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 7:
                        if (!(activeTab === 'groupings')) return [
                            3,
                            9
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$8e7171__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createGrouping"])(formData.name)
                        ];
                    case 8:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 9:
                        if (!(activeTab === 'cities')) return [
                            3,
                            11
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$69d841__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCity"])(formData.name)
                        ];
                    case 10:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 11:
                        if (!(activeTab === 'groups')) return [
                            3,
                            13
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$852cc5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCostCenterGroup"])(formData.name)
                        ];
                    case 12:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 13:
                        if (!(activeTab === 'segments')) return [
                            3,
                            15
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$af19f8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCostCenterSegment"])(formData.name)
                        ];
                    case 14:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 15:
                        if (!(activeTab === 'users')) return [
                            3,
                            17
                        ];
                        if (!formData.email) throw new Error('Email é obrigatório');
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$ed9c08__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createUser"])({
                                name: formData.name,
                                email: formData.email,
                                role: formData.role,
                                password: formData.password
                            })
                        ];
                    case 16:
                        _state.sent();
                        _state.label = 17;
                    case 17:
                        setIsModalOpen(false);
                        return [
                            3,
                            20
                        ];
                    case 18:
                        error = _state.sent();
                        alert(error.message || 'Erro ao criar item.');
                        return [
                            3,
                            20
                        ];
                    case 19:
                        setIsSubmitting(false);
                        return [
                            7
                        ];
                    case 20:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var handleDelete = function(id, name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var error;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!confirm('Tem certeza que deseja excluir "'.concat(name, '"?'))) return [
                            2
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            18,
                            ,
                            19
                        ]);
                        if (!(activeTab === 'companies')) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$00ad51__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCompany"])(id)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 3:
                        if (!(activeTab === 'costCenters')) return [
                            3,
                            5
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$135f34__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCostCenter"])(id)
                        ];
                    case 4:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 5:
                        if (!(activeTab === 'clients')) return [
                            3,
                            7
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$b2fbaa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteClient"])(id)
                        ];
                    case 6:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 7:
                        if (!(activeTab === 'groupings')) return [
                            3,
                            9
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$912022__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteGrouping"])(id)
                        ];
                    case 8:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 9:
                        if (!(activeTab === 'cities')) return [
                            3,
                            11
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7f0573__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCity"])(id)
                        ];
                    case 10:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 11:
                        if (!(activeTab === 'groups')) return [
                            3,
                            13
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$f63daa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCostCenterGroup"])(id)
                        ];
                    case 12:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 13:
                        if (!(activeTab === 'segments')) return [
                            3,
                            15
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7a5ecb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCostCenterSegment"])(id)
                        ];
                    case 14:
                        _state.sent();
                        return [
                            3,
                            17
                        ];
                    case 15:
                        if (!(activeTab === 'users')) return [
                            3,
                            17
                        ];
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$1be18b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteUser"])(id)
                        ];
                    case 16:
                        _state.sent();
                        _state.label = 17;
                    case 17:
                        return [
                            3,
                            19
                        ];
                    case 18:
                        error = _state.sent();
                        alert(error.message || 'Erro ao excluir.');
                        return [
                            3,
                            19
                        ];
                    case 19:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    // Permission Logic
    var handleManagePermissions = function(user) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var userPerms, mapped, e;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setPermissionUser(user);
                        setIsLoadingPerms(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$7f267a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserPermissions"])(user.id)
                        ];
                    case 2:
                        userPerms = _state.sent();
                        mapped = userPerms.map(function(p) {
                            return {
                                type: p.companyId ? 'COMPANY' : 'COST_CENTER',
                                entityId: p.companyId || p.costCenterId,
                                canView: p.canView,
                                canEdit: p.canEdit,
                                canCreate: p.canCreate,
                                canDelete: p.canDelete
                            };
                        });
                        setPermissions(mapped);
                        return [
                            3,
                            5
                        ];
                    case 3:
                        e = _state.sent();
                        console.error(e);
                        alert('Falha ao carregar permissões');
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setIsLoadingPerms(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var togglePermission = function(type, entityId) {
        var exists = permissions.find(function(p) {
            return p.type === type && p.entityId === entityId;
        });
        if (exists) {
            setPermissions(permissions.filter(function(p) {
                return !(p.type === type && p.entityId === entityId);
            }));
        } else {
            setPermissions((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(permissions).concat([
                {
                    type: type,
                    entityId: entityId,
                    canView: true,
                    canEdit: false,
                    canCreate: false,
                    canDelete: false
                }
            ]));
        }
    };
    var updatePermissionFlag = function(type, entityId, field, value) {
        setPermissions(permissions.map(function(p) {
            if (p.type === type && p.entityId === entityId) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, p), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, field, value));
            }
            return p;
        }));
    };
    var handleSavePermissions = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var e;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!permissionUser) return [
                            2
                        ];
                        setIsSavingPerms(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$data$3a$c35827__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserPermissions"])(permissionUser.id, permissions)
                        ];
                    case 2:
                        _state.sent();
                        alert('Permissões atualizadas com sucesso!');
                        setPermissionUser(null);
                        return [
                            3,
                            5
                        ];
                    case 3:
                        e = _state.sent();
                        alert('Erro: ' + e.message);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setIsSavingPerms(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var getTabLabel = function(tab) {
        switch(tab){
            case 'companies':
                return 'Empresas';
            case 'costCenters':
                return 'Centros de Custo';
            case 'clients':
                return 'Clientes';
            case 'groupings':
                return 'Departamentos';
            case 'cities':
                return 'Cidades';
            case 'groups':
                return 'Agrupamentos';
            case 'segments':
                return 'Seguimentos';
            case 'users':
                return 'Usuários';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold",
                children: "Configurações do Sistema"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-[var(--border-subtle)] overflow-x-auto custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'companies',
                        onClick: function() {
                            return setActiveTab('companies');
                        },
                        label: "Empresas"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'costCenters',
                        onClick: function() {
                            return setActiveTab('costCenters');
                        },
                        label: "CCs"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'groupings',
                        onClick: function() {
                            return setActiveTab('groupings');
                        },
                        label: "Depto"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'clients',
                        onClick: function() {
                            return setActiveTab('clients');
                        },
                        label: "Clientes"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'cities',
                        onClick: function() {
                            return setActiveTab('cities');
                        },
                        label: "Cidades"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'groups',
                        onClick: function() {
                            return setActiveTab('groups');
                        },
                        label: "Agrupadores"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'segments',
                        onClick: function() {
                            return setActiveTab('segments');
                        },
                        label: "Seguimentos"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === 'users',
                        onClick: function() {
                            return setActiveTab('users');
                        },
                        label: "Usuários"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 191,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-[var(--text-secondary)]",
                        children: [
                            "Gerenciar ",
                            getTabLabel(activeTab)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleOpenModal,
                        className: "btn btn-primary",
                        children: [
                            "+ Adicionar ",
                            activeTab === 'users' ? 'Usuário' : 'Novo'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: [
                    activeTab === 'companies' && initialCompanies.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            code: item.code,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'costCenters' && initialCostCenters.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            code: item.code,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'groupings' && initialGroupings.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 213,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'clients' && initialClients.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 216,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'cities' && initialCities.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 219,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'groups' && initialGroups.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 222,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'segments' && initialSegments.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCard, {
                            name: item.name,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 225,
                            columnNumber: 21
                        }, _this);
                    }),
                    activeTab === 'users' && initialUsers.map(function(item) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserCard, {
                            user: item,
                            onDelete: function() {
                                return handleDelete(item.id, item.name);
                            },
                            onManagePermissions: function() {
                                return handleManagePermissions(item);
                            }
                        }, item.id, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 228,
                            columnNumber: 21
                        }, _this);
                    }),
                    (activeTab === 'companies' && initialCompanies.length === 0 || activeTab === 'costCenters' && initialCostCenters.length === 0 || activeTab === 'clients' && initialClients.length === 0 || activeTab === 'groupings' && initialGroupings.length === 0 || activeTab === 'cities' && initialCities.length === 0 || activeTab === 'groups' && initialGroups.length === 0 || activeTab === 'segments' && initialSegments.length === 0 || activeTab === 'users' && initialUsers.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {}, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 244,
                        columnNumber: 78
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isModalOpen,
                onClose: function() {
                    return setIsModalOpen(false);
                },
                title: "Novo ".concat(getTabLabel(activeTab).slice(0, -1)),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        activeTab === 'users' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Nome *"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 257,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.name,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    name: e.target.value
                                                }));
                                            },
                                            className: "input-outline"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 258,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 256,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 266,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: formData.email,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    email: e.target.value
                                                }));
                                            },
                                            className: "input-outline"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 267,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 265,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Senha (Opcional)"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 275,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: formData.password,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    password: e.target.value
                                                }));
                                            },
                                            className: "input-outline",
                                            placeholder: "Padrão: password123"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 276,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 274,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Função"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 285,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.role,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    role: e.target.value
                                                }));
                                            },
                                            className: "input-outline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "USER",
                                                    children: "Usuário Comum"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ADMIN",
                                                    children: "Administrador"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 284,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (activeTab === 'companies' || activeTab === 'costCenters') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Código (Opcional)"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 300,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.code,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    code: e.target.value
                                                }));
                                            },
                                            className: "input-outline",
                                            placeholder: "Ex: 001"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 301,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 299,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Nome *"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 311,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.name,
                                            onChange: function(e) {
                                                return setFormData((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, formData), {
                                                    name: e.target.value
                                                }));
                                            },
                                            className: "input-outline",
                                            placeholder: "Nome Oficial"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 310,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: function() {
                                        return setIsModalOpen(false);
                                    },
                                    className: "btn btn-ghost",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 324,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    className: "btn btn-primary",
                                    children: isSubmitting ? 'Salvando...' : 'Salvar'
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 325,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 323,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                    lineNumber: 253,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this),
            permissionUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!permissionUser,
                onClose: function() {
                    return setPermissionUser(null);
                },
                title: "Permissões: ".concat(permissionUser.name),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 max-h-[70vh] overflow-y-auto pr-2",
                        children: isLoadingPerms ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center text-[var(--text-secondary)]",
                            children: "Carregando permissões..."
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 337,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[var(--text-secondary)]",
                                    children: "Marque as empresas e centros de custo que este usuário pode acessar. Use os ícones para refinar as permissões (Ver, Editar, Criar)."
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 340,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-[var(--text-primary)] mb-2 bg-[var(--bg-main)]/50 p-2 rounded backdrop-blur border border-[var(--border-subtle)] sticky top-0",
                                            children: "Empresas"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 344,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: initialCompanies.map(function(comp) {
                                                var perm = permissions.find(function(p) {
                                                    return p.type === 'COMPANY' && p.entityId === comp.id;
                                                });
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-2 rounded hover:bg-[var(--bg-surface-hover)] border border-transparent hover:border-[var(--border-subtle)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer flex-1 select-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: !!perm,
                                                                    onChange: function() {
                                                                        return togglePermission('COMPANY', comp.id);
                                                                    },
                                                                    className: "checkbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 57
                                                                }, _this),
                                                                comp.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-xs opacity-70",
                                                                    children: comp.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 71
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: comp.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 57
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 53
                                                        }, _this),
                                                        perm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4 text-xs bg-[var(--bg-main)] px-2 py-1 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Visualizar",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canView,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COMPANY', comp.id, 'canView', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Ver"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 61
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Editar",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canEdit,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COMPANY', comp.id, 'canEdit', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 61
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Criar novos registros",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canCreate,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COMPANY', comp.id, 'canCreate', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 372,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Criar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 373,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 61
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 57
                                                        }, _this)
                                                    ]
                                                }, comp.id, true, {
                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 49
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 345,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 343,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-[var(--text-primary)] mb-2 mt-4 bg-[var(--bg-main)]/50 p-2 rounded backdrop-blur border border-[var(--border-subtle)] sticky top-0",
                                            children: "Centros de Custo"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 385,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: initialCostCenters.map(function(cc) {
                                                var perm = permissions.find(function(p) {
                                                    return p.type === 'COST_CENTER' && p.entityId === cc.id;
                                                });
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-2 rounded hover:bg-[var(--bg-surface-hover)] border border-transparent hover:border-[var(--border-subtle)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer flex-1 select-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: !!perm,
                                                                    onChange: function() {
                                                                        return togglePermission('COST_CENTER', cc.id);
                                                                    },
                                                                    className: "checkbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 57
                                                                }, _this),
                                                                cc.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-xs opacity-70",
                                                                    children: cc.code
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 69
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: cc.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 57
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 53
                                                        }, _this),
                                                        perm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4 text-xs bg-[var(--bg-main)] px-2 py-1 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Visualizar",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canView,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COST_CENTER', cc.id, 'canView', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Ver"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 61
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Editar",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canEdit,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COST_CENTER', cc.id, 'canEdit', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 61
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-1 cursor-pointer",
                                                                    title: "Criar",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: perm.canCreate,
                                                                            onChange: function(e) {
                                                                                return updatePermissionFlag('COST_CENTER', cc.id, 'canCreate', e.target.checked);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 65
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Criar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 65
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 61
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 57
                                                        }, _this)
                                                    ]
                                                }, cc.id, true, {
                                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 49
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                            lineNumber: 386,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 384,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 335,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 mt-4 pt-4 border-t border-[var(--border-subtle)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    return setPermissionUser(null);
                                },
                                className: "btn btn-ghost",
                                disabled: isSavingPerms,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                lineNumber: 426,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSavePermissions,
                                className: "btn btn-primary",
                                disabled: isSavingPerms || isLoadingPerms,
                                children: isSavingPerms ? 'Salvando...' : 'Salvar Permissões'
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                lineNumber: 427,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 425,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 334,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
        lineNumber: 179,
        columnNumber: 9
    }, this);
}
_s(SettingsClient, "oKdi2lngSMAxpv+2b8rM34K/ZO0=");
_c = SettingsClient;
function TabButton(param) {
    var active = param.active, onClick = param.onClick, label = param.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ".concat(active ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'),
        children: label
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
        lineNumber: 439,
        columnNumber: 9
    }, this);
}
_c1 = TabButton;
function ItemCard(param) {
    var name = param.name, code = param.code, onDelete = param.onDelete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-panel p-4 flex justify-between items-center group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden",
                children: [
                    code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono text-[var(--text-tertiary)] block mb-1",
                        children: code
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 455,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[var(--text-primary)] truncate block",
                        title: name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 456,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 454,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDelete,
                className: "opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-500/10 rounded transition-all flex-shrink-0 ml-2",
                title: "Excluir",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 458,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
        lineNumber: 453,
        columnNumber: 9
    }, this);
}
_c2 = ItemCard;
function UserCard(param) {
    var user = param.user, onDelete = param.onDelete, onManagePermissions = param.onManagePermissions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-panel p-4 flex justify-between items-center group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[var(--text-primary)] block truncate",
                        title: user.name,
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 473,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[var(--text-secondary)] block truncate",
                        title: user.email,
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 474,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mt-2 inline-block ".concat(user.role === 'ADMIN' ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]' : 'bg-[var(--bg-surface-hover)] text-[var(--text-tertiary)]'),
                        children: user.role
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 475,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 472,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onManagePermissions,
                        className: "opacity-0 group-hover:opacity-100 p-2 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 rounded transition-all flex-shrink-0",
                        title: "Gerenciar Permissões",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "3",
                                    y: "11",
                                    width: "18",
                                    height: "11",
                                    rx: "2",
                                    ry: "2"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 485,
                                    columnNumber: 199
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                                    lineNumber: 485,
                                    columnNumber: 262
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                            lineNumber: 485,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 480,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        className: "opacity-0 group-hover:opacity-100 p-2 text-[var(--danger)] hover:bg-[var(--danger)]/10 rounded transition-all flex-shrink-0",
                        title: "Excluir",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                        lineNumber: 487,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
                lineNumber: 479,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
        lineNumber: 471,
        columnNumber: 9
    }, this);
}
_c3 = UserCard;
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-span-full py-12 text-center text-[var(--text-tertiary)] border border-dashed border-[var(--border-subtle)] rounded-lg",
        children: "Nenhum item cadastrado."
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/dashboard/settings/SettingsClient.tsx",
        lineNumber: 501,
        columnNumber: 9
    }, this);
}
_c4 = EmptyState;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SettingsClient");
__turbopack_context__.k.register(_c1, "TabButton");
__turbopack_context__.k.register(_c2, "ItemCard");
__turbopack_context__.k.register(_c3, "UserCard");
__turbopack_context__.k.register(_c4, "EmptyState");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_gemini_antigravity_playground_shadow-comet_budget-hub_src_app_dd9973b4._.js.map