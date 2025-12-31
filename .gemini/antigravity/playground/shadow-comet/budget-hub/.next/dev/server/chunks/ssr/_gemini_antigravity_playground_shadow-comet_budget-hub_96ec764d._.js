module.exports = [
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b0718b2eb0a2ad60ca3fe619c2114c6b2e3b08ee":"logout","00deba530e90b23a562cf09fe798ab6f678793682b":"forceLogin","40c4d52e2042f7615953e2020d3d839b6b05e24475":"login","40dcdf57ac53024af9223c1ffec9f7cc501ae81445":"registerTenant","40fec7d74ecba199b1a8b61d809e9bf03875a302d8":"changePassword"},"",""] */ __turbopack_context__.s([
    "changePassword",
    ()=>changePassword,
    "forceLogin",
    ()=>forceLogin,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "registerTenant",
    ()=>registerTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/iron-session/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password')// In real app, hash check
    ;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            email
        }
    });
    // MVP: Simple password check (plaintext matches for seed admin) or dummy logic
    // For security, assuming we use hashed password eventually. 
    // For now, if user exists and password matches what we seeded 'password123'
    // Or just check user existence for simple MVP demo if password seeded is plain.
    if (!user || user.password !== password) {
        return {
            error: 'Invalid credentials'
        };
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    session.isLoggedIn = true;
    session.userId = user.id;
    session.email = user.email;
    session.name = user.name;
    session.tenantId = user.tenantId;
    session.role = user.role;
    session.mustChangePassword = user.mustChangePassword;
    await session.save();
    if (user.mustChangePassword) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/change-password');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function logout() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    session.destroy();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function changePassword(newPassword) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
    }
    // TODO: Hash password
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.update({
        where: {
            id: session.userId
        },
        data: {
            password: newPassword,
            mustChangePassword: false
        }
    });
    session.mustChangePassword = false;
    await session.save();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function forceLogin() {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            email: 'admin@demo.com'
        }
    });
    if (!user) {
        throw new Error('Admin user not found');
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    session.isLoggedIn = true;
    session.userId = user.id;
    session.email = user.email;
    session.name = user.name;
    session.tenantId = user.tenantId;
    session.role = user.role;
    session.mustChangePassword = user.mustChangePassword; // Usually false for admin
    await session.save();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard/dre');
}
async function registerTenant(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const companyName = formData.get('companyName');
    if (!name || !email || !password || !companyName) {
        return {
            error: 'Preencha todos os campos.'
        };
    }
    // Check existing email
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            email
        }
    });
    if (existing) {
        return {
            error: 'E-mail já cadastrado.'
        };
    }
    try {
        // Create Tenant
        const tenant = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].tenant.create({
            data: {
                name: companyName,
                dreTitle: `DRE - ${companyName}`,
                minYear: 2024,
                maxYear: 2026
            }
        });
        // Create Admin User
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.create({
            data: {
                name,
                email,
                password,
                role: 'ADMIN',
                tenantId: tenant.id
            }
        });
        // Create Default Version
        await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetVersion.create({
            data: {
                name: 'Orçamento 2024 (Inicial)',
                tenantId: tenant.id
            }
        });
        // Login
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
        session.isLoggedIn = true;
        session.userId = user.id;
        session.email = user.email;
        session.name = user.name;
        session.tenantId = user.tenantId;
        session.role = user.role;
        session.mustChangePassword = false;
        await session.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard/dre');
    } catch (e) {
        if (e instanceof Error && e.message === 'NEXT_REDIRECT') throw e;
        console.error(e);
        return {
            error: 'Erro ao criar conta. Tente novamente.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout,
    changePassword,
    forceLogin,
    registerTenant
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40c4d52e2042f7615953e2020d3d839b6b05e24475", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00b0718b2eb0a2ad60ca3fe619c2114c6b2e3b08ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changePassword, "40fec7d74ecba199b1a8b61d809e9bf03875a302d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(forceLogin, "00deba530e90b23a562cf09fe798ab6f678793682b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerTenant, "40dcdf57ac53024af9223c1ffec9f7cc501ae81445", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400e242551724102579d96c97569c8218421a4138d":"createCostCenterGroup","4025b5b9d00f844c434bdba07983a7d7d0ce0ffeba":"deleteClient","40327258fa66bb87df40de6549b6eb160e06b79fc5":"deleteCostCenter","403931a1932867a5e222560d59852f4bbccbd4ec27":"createCompany","403adac1c5267cb2de3a770cf00979c12215af31f9":"deleteCity","40537bbb8e35cc0e5a015d2d57f47c7660f0dbdab5":"deleteExpenseCenter","405fe09abd42de53dc9573aac88ef90af49e297f53":"deleteCompany","40964397eac34decbbfbbf61943757105bf49afbea":"createDepartment","40acb10fa4d821930fd55f03ca3389fde621217605":"createCity","40cfab9e691c473f57d776d28f10fadd32cf67458b":"deleteCostCenterGroup","40d27c0c41f4e6b42e783f71f8b2848f6ffea8e421":"createCostCenter","40d5e0da4af8aee6225031fa2a52cb26fa5fec12a6":"createExpenseCenter","40d9c05fb18c2dcbbec29e168cd8945502e212b6ff":"deleteCostCenterSegment","40dce3a3ed4be2c0fdbbeeccdc7ca027c7fe356c34":"createCostCenterSegment","40fd38f729f20fea5b9d52f5e22fe8295ef1d2828f":"deleteDepartment","40fe23235daa569ad33db0ffc91825a6ea4c67461a":"createClient","60087d1296e681fab9d5a08d9408bff0a858ffc65c":"updateCity","600a68d80110f6f84b44d704f9c396e1f1d6e0cbe7":"updateDepartment","600b8b69d412308924e0cd5b2f89ac7bd4e81f91d0":"updateCostCenterGroup","603ed6c401384bd2c2559bbf8e7a2b46efe697926b":"updateClient","6052249be54e36cf0d74f4d2ef3d94620e987bf951":"updateCostCenterSegment","607cbc31323012f6cd7d8e66586f0c0ac53b51c914":"updateCostCenter","60ddeb177cbf2362b860235eb22b8ab4ef9843651e":"updateCompany","60e5b9b8139c4c2546aed1beeaec16bae42d011130":"updateExpenseCenter"},"",""] */ __turbopack_context__.s([
    "createCity",
    ()=>createCity,
    "createClient",
    ()=>createClient,
    "createCompany",
    ()=>createCompany,
    "createCostCenter",
    ()=>createCostCenter,
    "createCostCenterGroup",
    ()=>createCostCenterGroup,
    "createCostCenterSegment",
    ()=>createCostCenterSegment,
    "createDepartment",
    ()=>createDepartment,
    "createExpenseCenter",
    ()=>createExpenseCenter,
    "deleteCity",
    ()=>deleteCity,
    "deleteClient",
    ()=>deleteClient,
    "deleteCompany",
    ()=>deleteCompany,
    "deleteCostCenter",
    ()=>deleteCostCenter,
    "deleteCostCenterGroup",
    ()=>deleteCostCenterGroup,
    "deleteCostCenterSegment",
    ()=>deleteCostCenterSegment,
    "deleteDepartment",
    ()=>deleteDepartment,
    "deleteExpenseCenter",
    ()=>deleteExpenseCenter,
    "updateCity",
    ()=>updateCity,
    "updateClient",
    ()=>updateClient,
    "updateCompany",
    ()=>updateCompany,
    "updateCostCenter",
    ()=>updateCostCenter,
    "updateCostCenterGroup",
    ()=>updateCostCenterGroup,
    "updateCostCenterSegment",
    ()=>updateCostCenterSegment,
    "updateDepartment",
    ()=>updateDepartment,
    "updateExpenseCenter",
    ()=>updateExpenseCenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/iron-session/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// --- Helpers ---
async function checkAuth() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn) throw new Error('Unauthorized: Please login');
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            id: session.userId
        }
    });
    if (!user) throw new Error('Unauthorized: User not found');
    // For now, allow all logged in users to edit registrations? Or restrict to ADMIN?
    // Let's restrict to ADMIN for safety as per original plan
    if (user.role !== 'ADMIN') throw new Error('Unauthorized: Admin access required');
    return {
        session,
        user
    };
}
async function createCompany(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.create({
        data: {
            name: data.name,
            code: data.code,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateCompany(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteCompany(id) {
    await checkAuth();
    // Check dependencies: Budget Entries OR Departments
    const entriesCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            companyId: id
        }
    });
    const deptsCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.count({
        where: {
            companyId: id
        }
    });
    if (entriesCount > 0) throw new Error('Cannot delete: Company has associated budget entries.');
    if (deptsCount > 0) throw new Error('Cannot delete: Company has associated Departments.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createDepartment(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.create({
        data: {
            name: data.name,
            tenantId: session.tenantId,
            companyId: data.companyId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateDepartment(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.update({
        where: {
            id
        },
        data: {
            name: data.name,
            companyId: data.companyId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteDepartment(id) {
    await checkAuth();
    const entriesCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            groupingId: id
        }
    });
    const ccCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            groupingId: id
        }
    });
    const segCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].segment.count({
        where: {
            groupingId: id
        }
    });
    if (entriesCount > 0) throw new Error('Cannot delete: Department has budget entries.');
    if (ccCount > 0) throw new Error('Cannot delete: Department has Cost Centers.');
    if (segCount > 0) throw new Error('Cannot delete: Department has Expense Centers.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createCostCenter(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.create({
        data: {
            name: data.name,
            code: data.code,
            tenantId: session.tenantId,
            groupingId: data.groupingId,
            clientId: data.clientId,
            cityId: data.cityId,
            groupId: data.groupId,
            segmentId: data.segmentId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateCostCenter(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteCostCenter(id) {
    await checkAuth();
    const entriesCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            costCenterId: id
        }
    });
    if (entriesCount > 0) throw new Error('Cannot delete: Cost Center has budget entries.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createClient(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.create({
        data: {
            name: data.name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateClient(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteClient(id) {
    await checkAuth();
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            clientId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: Client has budget entries.');
    const ccCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            clientId: id
        }
    });
    if (ccCount > 0) throw new Error('Cannot delete: Client has associated Cost Centers.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createCity(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.create({
        data: {
            name: data.name,
            state: data.state,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateCity(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteCity(id) {
    await checkAuth();
    const ccCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            cityId: id
        }
    });
    if (ccCount > 0) throw new Error('Cannot delete: City has associated Cost Centers.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createCostCenterGroup(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.create({
        data: {
            name: data.name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateCostCenterGroup(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteCostCenterGroup(id) {
    await checkAuth();
    const ccCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            groupId: id
        }
    });
    if (ccCount > 0) throw new Error('Cannot delete: Group has associated Cost Centers.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createCostCenterSegment(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.create({
        data: {
            name: data.name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateCostCenterSegment(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteCostCenterSegment(id) {
    await checkAuth();
    const ccCount = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            segmentId: id
        }
    });
    if (ccCount > 0) throw new Error('Cannot delete: Segment has associated Cost Centers.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function createExpenseCenter(data) {
    const { session } = await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].segment.create({
        data: {
            name: data.name,
            tenantId: session.tenantId,
            groupingId: data.groupingId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function updateExpenseCenter(id, data) {
    await checkAuth();
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].segment.update({
        where: {
            id
        },
        data: {
            name: data.name,
            groupingId: data.groupingId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
async function deleteExpenseCenter(id) {
    await checkAuth();
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            segmentId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: Expense Center has budget entries.');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].segment.delete({
        where: {
            id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/registrations');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCompany,
    updateCompany,
    deleteCompany,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    createCostCenter,
    updateCostCenter,
    deleteCostCenter,
    createClient,
    updateClient,
    deleteClient,
    createCity,
    updateCity,
    deleteCity,
    createCostCenterGroup,
    updateCostCenterGroup,
    deleteCostCenterGroup,
    createCostCenterSegment,
    updateCostCenterSegment,
    deleteCostCenterSegment,
    createExpenseCenter,
    updateExpenseCenter,
    deleteExpenseCenter
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompany, "403931a1932867a5e222560d59852f4bbccbd4ec27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCompany, "60ddeb177cbf2362b860235eb22b8ab4ef9843651e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCompany, "405fe09abd42de53dc9573aac88ef90af49e297f53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDepartment, "40964397eac34decbbfbbf61943757105bf49afbea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDepartment, "600a68d80110f6f84b44d704f9c396e1f1d6e0cbe7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "40fd38f729f20fea5b9d52f5e22fe8295ef1d2828f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenter, "40d27c0c41f4e6b42e783f71f8b2848f6ffea8e421", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCostCenter, "607cbc31323012f6cd7d8e66586f0c0ac53b51c914", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenter, "40327258fa66bb87df40de6549b6eb160e06b79fc5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClient, "40fe23235daa569ad33db0ffc91825a6ea4c67461a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateClient, "603ed6c401384bd2c2559bbf8e7a2b46efe697926b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteClient, "4025b5b9d00f844c434bdba07983a7d7d0ce0ffeba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCity, "40acb10fa4d821930fd55f03ca3389fde621217605", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCity, "60087d1296e681fab9d5a08d9408bff0a858ffc65c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCity, "403adac1c5267cb2de3a770cf00979c12215af31f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenterGroup, "400e242551724102579d96c97569c8218421a4138d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCostCenterGroup, "600b8b69d412308924e0cd5b2f89ac7bd4e81f91d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenterGroup, "40cfab9e691c473f57d776d28f10fadd32cf67458b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenterSegment, "40dce3a3ed4be2c0fdbbeeccdc7ca027c7fe356c34", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCostCenterSegment, "6052249be54e36cf0d74f4d2ef3d94620e987bf951", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenterSegment, "40d9c05fb18c2dcbbec29e168cd8945502e212b6ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpenseCenter, "40d5e0da4af8aee6225031fa2a52cb26fa5fec12a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateExpenseCenter, "60e5b9b8139c4c2546aed1beeaec16bae42d011130", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExpenseCenter, "40537bbb8e35cc0e5a015d2d57f47c7660f0dbdab5", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/registrations/page/actions.js { ACTIONS_MODULE0 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/registrations/page/actions.js { ACTIONS_MODULE0 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b0718b2eb0a2ad60ca3fe619c2114c6b2e3b08ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "400e242551724102579d96c97569c8218421a4138d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCostCenterGroup"],
    "4025b5b9d00f844c434bdba07983a7d7d0ce0ffeba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteClient"],
    "40327258fa66bb87df40de6549b6eb160e06b79fc5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCostCenter"],
    "403931a1932867a5e222560d59852f4bbccbd4ec27",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompany"],
    "403adac1c5267cb2de3a770cf00979c12215af31f9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCity"],
    "40537bbb8e35cc0e5a015d2d57f47c7660f0dbdab5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExpenseCenter"],
    "405fe09abd42de53dc9573aac88ef90af49e297f53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCompany"],
    "40964397eac34decbbfbbf61943757105bf49afbea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDepartment"],
    "40acb10fa4d821930fd55f03ca3389fde621217605",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCity"],
    "40cfab9e691c473f57d776d28f10fadd32cf67458b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCostCenterGroup"],
    "40d27c0c41f4e6b42e783f71f8b2848f6ffea8e421",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCostCenter"],
    "40d5e0da4af8aee6225031fa2a52cb26fa5fec12a6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExpenseCenter"],
    "40d9c05fb18c2dcbbec29e168cd8945502e212b6ff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCostCenterSegment"],
    "40dce3a3ed4be2c0fdbbeeccdc7ca027c7fe356c34",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCostCenterSegment"],
    "40fd38f729f20fea5b9d52f5e22fe8295ef1d2828f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartment"],
    "40fe23235daa569ad33db0ffc91825a6ea4c67461a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"],
    "60087d1296e681fab9d5a08d9408bff0a858ffc65c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCity"],
    "600a68d80110f6f84b44d704f9c396e1f1d6e0cbe7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDepartment"],
    "600b8b69d412308924e0cd5b2f89ac7bd4e81f91d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCostCenterGroup"],
    "603ed6c401384bd2c2559bbf8e7a2b46efe697926b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateClient"],
    "6052249be54e36cf0d74f4d2ef3d94620e987bf951",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCostCenterSegment"],
    "607cbc31323012f6cd7d8e66586f0c0ac53b51c914",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCostCenter"],
    "60ddeb177cbf2362b860235eb22b8ab4ef9843651e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCompany"],
    "60e5b9b8139c4c2546aed1beeaec16bae42d011130",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateExpenseCenter"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$registrations$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/registrations/page/actions.js { ACTIONS_MODULE0 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$registrations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/registrations.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_gemini_antigravity_playground_shadow-comet_budget-hub_96ec764d._.js.map