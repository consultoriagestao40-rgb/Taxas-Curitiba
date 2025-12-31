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
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00590131659e74dc1313ce0773600fd0b58250e315":"getCostCenterSegments","005a1066758d3f0415d4e6575ecd8bc0b5db477edd":"getCompanies","006dea148ab43fe54fa3a47916aeedc8728314ae4d":"getCostCenterGroups","006ea6cbf352d5fbe6577703e39ccc3bf211950784":"getGroupings","00ac69de5365442831a3b9cf998d06ef5c862b3769":"getClients","00d5852f2c5f2475d9edd693d6542a8f8c064c4a94":"getCities","00fae2da03dfea74ffd784a22fcfbe8159b9dd54a1":"getCostCenters","400a56d8676f21ae208690dd70f1147ff4e85ff93b":"createCostCenterSegment","401cd0967f8e4d5ca2146ba9c4fc08c0d9751e56f7":"createCompany","402d50cef987d1c931bc4da3bfb660067ecf4a9548":"deleteCostCenterSegment","4051ddf5cf9d92ec058728ef9a0dacfad8ae498bdd":"createGrouping","406157da5a8cbd9cb82a4ca903093ecd4986d8484a":"deleteClient","40679089fa75d989f88de5eea933d01f1fe9481ae5":"createCostCenter","4080b8a13143125b78be10f873fb112332cb9c09b9":"deleteGrouping","408b9612e6360df6d8eb131e56867be8ecefa20ce5":"deleteCity","40907749eda9975f9c52caadd9c952ebcb9217ea3d":"createCostCenterGroup","40a1bfe1decf11919aa9c5c8252d013665483ff433":"updateTenantDreTitle","40a551cffc0abfce53a7ebb0420e29c249d6b3151f":"createClient","40b28a2989aab59b0edb9d0708af1564622df4b8fd":"createCity","40b405f40ec93476d525fc1a233227512d7c6b14a0":"deleteCostCenterGroup","40c45b615cca269b07c7258a3bb470d3aaa9ccb07a":"deleteCompany","40fc5b4fd12a428012c237e07f8e34595780e45ef0":"deleteCostCenter"},"",""] */ __turbopack_context__.s([
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
    "createGrouping",
    ()=>createGrouping,
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
    "deleteGrouping",
    ()=>deleteGrouping,
    "getCities",
    ()=>getCities,
    "getClients",
    ()=>getClients,
    "getCompanies",
    ()=>getCompanies,
    "getCostCenterGroups",
    ()=>getCostCenterGroups,
    "getCostCenterSegments",
    ()=>getCostCenterSegments,
    "getCostCenters",
    ()=>getCostCenters,
    "getGroupings",
    ()=>getGroupings,
    "updateTenantDreTitle",
    ()=>updateTenantDreTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/iron-session/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getSession() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn || !session.tenantId) {
        throw new Error('Unauthorized');
    }
    return session;
}
async function checkAdmin(session) {
    if (session.role !== 'ADMIN') {
        throw new Error('Forbidden: Only Admins can manage settings');
    }
}
async function getCompanies() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createCompany(data) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.create({
        data: {
            name: data.name,
            code: data.code,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteCompany(id) {
    const session = await getSession();
    await checkAdmin(session);
    // Check for dependencies
    const hasEntries = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            companyId: id
        }
    });
    if (hasEntries > 0) throw new Error('Cannot delete: Company has budget entries');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].company.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getCostCenters() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createCostCenter(data) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.create({
        data: {
            name: data.name,
            code: data.code,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteCostCenter(id) {
    const session = await getSession();
    await checkAdmin(session);
    const hasEntries = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            costCenterId: id
        }
    });
    if (hasEntries > 0) throw new Error('Cannot delete: Cost Center has budget entries');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getClients() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createClient(name) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.create({
        data: {
            name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteClient(id) {
    const session = await getSession();
    await checkAdmin(session);
    // Check for dependencies
    const hasCostCenters = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            clientId: id
        }
    });
    if (hasCostCenters > 0) throw new Error('Cannot delete: Client is linked to Cost Centers');
    const hasEntries = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.count({
        where: {
            clientId: id
        }
    });
    if (hasEntries > 0) throw new Error('Cannot delete: Client has budget entries');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].client.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getGroupings() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createGrouping(name) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.create({
        data: {
            name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteGrouping(id) {
    const session = await getSession();
    await checkAdmin(session);
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            groupingId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: Department is used in Cost Centers');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].grouping.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getCities() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createCity(name) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.create({
        data: {
            name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteCity(id) {
    const session = await getSession();
    await checkAdmin(session);
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            cityId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: City is used in Cost Centers');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].city.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getCostCenterGroups() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createCostCenterGroup(name) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.create({
        data: {
            name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteCostCenterGroup(id) {
    const session = await getSession();
    await checkAdmin(session);
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            groupId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: Group is used in Cost Centers');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterGroup.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function getCostCenterSegments() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            name: 'asc'
        }
    });
}
async function createCostCenterSegment(name) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.create({
        data: {
            name,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function deleteCostCenterSegment(id) {
    const session = await getSession();
    await checkAdmin(session);
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenter.count({
        where: {
            segmentId: id
        }
    });
    if (count > 0) throw new Error('Cannot delete: Segment is used in Cost Centers');
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].costCenterSegment.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/settings');
}
async function updateTenantDreTitle(title) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].tenant.update({
        where: {
            id: session.tenantId
        },
        data: {
            dreTitle: title
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCompanies,
    createCompany,
    deleteCompany,
    getCostCenters,
    createCostCenter,
    deleteCostCenter,
    getClients,
    createClient,
    deleteClient,
    getGroupings,
    createGrouping,
    deleteGrouping,
    getCities,
    createCity,
    deleteCity,
    getCostCenterGroups,
    createCostCenterGroup,
    deleteCostCenterGroup,
    getCostCenterSegments,
    createCostCenterSegment,
    deleteCostCenterSegment,
    updateTenantDreTitle
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompanies, "005a1066758d3f0415d4e6575ecd8bc0b5db477edd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompany, "401cd0967f8e4d5ca2146ba9c4fc08c0d9751e56f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCompany, "40c45b615cca269b07c7258a3bb470d3aaa9ccb07a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCostCenters, "00fae2da03dfea74ffd784a22fcfbe8159b9dd54a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenter, "40679089fa75d989f88de5eea933d01f1fe9481ae5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenter, "40fc5b4fd12a428012c237e07f8e34595780e45ef0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getClients, "00ac69de5365442831a3b9cf998d06ef5c862b3769", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClient, "40a551cffc0abfce53a7ebb0420e29c249d6b3151f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteClient, "406157da5a8cbd9cb82a4ca903093ecd4986d8484a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGroupings, "006ea6cbf352d5fbe6577703e39ccc3bf211950784", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGrouping, "4051ddf5cf9d92ec058728ef9a0dacfad8ae498bdd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteGrouping, "4080b8a13143125b78be10f873fb112332cb9c09b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCities, "00d5852f2c5f2475d9edd693d6542a8f8c064c4a94", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCity, "40b28a2989aab59b0edb9d0708af1564622df4b8fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCity, "408b9612e6360df6d8eb131e56867be8ecefa20ce5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCostCenterGroups, "006dea148ab43fe54fa3a47916aeedc8728314ae4d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenterGroup, "40907749eda9975f9c52caadd9c952ebcb9217ea3d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenterGroup, "40b405f40ec93476d525fc1a233227512d7c6b14a0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCostCenterSegments, "00590131659e74dc1313ce0773600fd0b58250e315", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCostCenterSegment, "400a56d8676f21ae208690dd70f1147ff4e85ff93b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCostCenterSegment, "402d50cef987d1c931bc4da3bfb660067ecf4a9548", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTenantDreTitle, "40a1bfe1decf11919aa9c5c8252d013665483ff433", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/auth-checks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyPermission",
    ()=>verifyPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
;
async function verifyPermission(userId, context, action) {
    const perms = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].userPermission.findMany({
        where: {
            userId
        }
    });
    if (perms.length === 0) return false;
    // 1. Company Level Check
    if (context.companyId) {
        const companyPerm = perms.find((p)=>p.companyId === context.companyId);
        if (!companyPerm) return false;
        if (!companyPerm[action]) return false;
    }
    // 2. Cost Center Level Check
    if (context.costCenterId) {
        const hasCCRestrictions = perms.some((p)=>p.costCenterId !== null);
        if (hasCCRestrictions) {
            const ccPerm = perms.find((p)=>p.costCenterId === context.costCenterId);
            // If restricted to specific CCs, and this one is not in list -> Deny
            if (!ccPerm) return false;
            // If found, check action flag
            if (!ccPerm[action]) return false;
        } else {
        // No CC restrictions, so if Company check passed, we are good.
        // (Implied access to all CCs in the permitted company)
        }
    }
    return true;
}
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7e01bcad98ba33d51c0d9792357959a35159857cad":"batchUpdateBudgetEntries","7f209cdeca4997b80facfb59bad953034312b1b39e":"updateBudgetEntry"},"",""] */ __turbopack_context__.s([
    "batchUpdateBudgetEntries",
    ()=>batchUpdateBudgetEntries,
    "updateBudgetEntry",
    ()=>updateBudgetEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/iron-session/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$auth$2d$checks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/auth-checks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function updateBudgetEntry(tenantId, accountId, month, year, amount, budgetVersionId, dimensions) {
    // 1. Auth Check
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn || session.tenantId !== tenantId) {
        throw new Error('Unauthorized');
    }
    // 2. Permission Check
    if (session.role !== 'ADMIN') {
        const hasPermission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$auth$2d$checks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(session.userId, dimensions, 'canEdit');
        if (!hasPermission) {
            throw new Error('Forbidden: You do not have permission to edit entries in this scope');
        }
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.findFirst({
        where: {
            tenantId,
            accountId,
            month,
            year,
            budgetVersionId,
            companyId: dimensions.companyId
        }
    });
    if (existing) {
        if (amount === 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.delete({
                where: {
                    id: existing.id
                }
            });
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.update({
                where: {
                    id: existing.id
                },
                data: {
                    amount
                }
            });
        }
    } else {
        if (amount !== 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.create({
                data: {
                    tenantId,
                    accountId,
                    month,
                    year,
                    amount,
                    budgetVersionId,
                    companyId: dimensions.companyId,
                    costCenterId: dimensions.costCenterId,
                    clientId: dimensions.clientId
                }
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function batchUpdateBudgetEntries(tenantId, accountId, year, entries, budgetVersionId, dimensions) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn || session.tenantId !== tenantId) throw new Error('Unauthorized');
    if (session.role !== 'ADMIN') {
        const hasPermission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$auth$2d$checks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPermission"])(session.userId, dimensions, 'canEdit');
        if (!hasPermission) {
            throw new Error('Forbidden: You do not have permission to edit entries in this scope');
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].$transaction(async (tx)=>{
        for (const entry of entries){
            const existing = await tx.budgetEntry.findFirst({
                where: {
                    tenantId,
                    accountId,
                    month: entry.month,
                    year,
                    budgetVersionId,
                    companyId: dimensions.companyId,
                    costCenterId: dimensions.costCenterId,
                    clientId: dimensions.clientId
                }
            });
            if (existing) {
                if (entry.amount === 0) {
                    await tx.budgetEntry.delete({
                        where: {
                            id: existing.id
                        }
                    });
                } else {
                    await tx.budgetEntry.update({
                        where: {
                            id: existing.id
                        },
                        data: {
                            amount: entry.amount
                        }
                    });
                }
            } else if (entry.amount !== 0) {
                await tx.budgetEntry.create({
                    data: {
                        tenantId,
                        accountId,
                        month: entry.month,
                        year,
                        amount: entry.amount,
                        budgetVersionId,
                        companyId: dimensions.companyId,
                        costCenterId: dimensions.costCenterId,
                        clientId: dimensions.clientId
                    }
                });
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateBudgetEntry,
    batchUpdateBudgetEntries
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBudgetEntry, "7f209cdeca4997b80facfb59bad953034312b1b39e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(batchUpdateBudgetEntries, "7e01bcad98ba33d51c0d9792357959a35159857cad", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401e494663d20a4db83d8b2b2ff7dd18c5dd5ede6c":"createAccount","40bbb9be4ba7c2ee19f37c0e46b1596ccc41f69df3":"deleteAccount","604aca97aa29ea3a6130f2230f924071bb84949a70":"updateAccount"},"",""] */ __turbopack_context__.s([
    "createAccount",
    ()=>createAccount,
    "deleteAccount",
    ()=>deleteAccount,
    "updateAccount",
    ()=>updateAccount
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
async function createAccount(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn) {
        throw new Error('Unauthorized: Please login');
    }
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            id: session.userId
        }
    });
    if (!user || user.role !== 'ADMIN') {
        throw new Error('Unauthorized: Admin access required');
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].accountPlan.create({
        data: {
            tenantId: data.tenantId,
            name: data.name,
            code: data.code,
            type: data.type,
            parentId: data.parentId,
            formula: data.formula,
            percentage: data.percentage,
            baseCode: data.baseCode
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function deleteAccount(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn) {
        throw new Error('Unauthorized: Please login');
    }
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            id: session.userId
        }
    });
    console.log(`[AccountAction] Attempting to delete account ${id}`);
    if (!user || user.role !== 'ADMIN') {
        throw new Error('Unauthorized: Admin access required');
    }
    try {
        // First delete budget entries associated
        console.log(`[AccountAction] Deleting budget entries for account ${id}`);
        const deletedEntries = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.deleteMany({
            where: {
                accountId: id
            }
        });
        console.log(`[AccountAction] Deleted ${deletedEntries.count} budget entries`);
        // Then delete the account
        console.log(`[AccountAction] Deleting account ${id}`);
        await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].accountPlan.delete({
            where: {
                id
            }
        });
        console.log(`[AccountAction] Account ${id} deleted successfully`);
    } catch (error) {
        console.error(`[AccountAction] Error deleting account ${id}:`, error);
        throw new Error(`Failed to delete account: ${error.message}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function updateAccount(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn) {
        throw new Error('Unauthorized: Please login');
    }
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].user.findUnique({
        where: {
            id: session.userId
        }
    });
    if (!user || user.role !== 'ADMIN') {
        throw new Error('Unauthorized: Admin access required');
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].accountPlan.update({
        where: {
            id
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createAccount,
    deleteAccount,
    updateAccount
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAccount, "401e494663d20a4db83d8b2b2ff7dd18c5dd5ede6c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAccount, "40bbb9be4ba7c2ee19f37c0e46b1596ccc41f69df3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAccount, "604aca97aa29ea3a6130f2230f924071bb84949a70", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00285bab80253aa7b2296a42d248c927eeda38713e":"getVersions","40226c8fb0ff379b9c43fa7c4bf59cf9418058af9d":"createVersion","40ba77f326b348f1166ec09eaf8b526d435161ecfd":"deleteVersion","601df5cef71e3149a3fbdf9f5cb999afe15255793b":"clearYearData","604cf4ad5549f2b75584891ede92089d35d70429f0":"updateYearRange","609134891a6b263f2b2023adeb903d86b2cc0e1858":"updateVersion"},"",""] */ __turbopack_context__.s([
    "clearYearData",
    ()=>clearYearData,
    "createVersion",
    ()=>createVersion,
    "deleteVersion",
    ()=>deleteVersion,
    "getVersions",
    ()=>getVersions,
    "updateVersion",
    ()=>updateVersion,
    "updateYearRange",
    ()=>updateYearRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/iron-session/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getSession() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$iron$2d$session$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIronSession"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sessionOptions"]);
    if (!session.isLoggedIn || !session.tenantId) {
        throw new Error('Unauthorized');
    }
    return session;
}
async function checkAdmin(session) {
    if (session.role !== 'ADMIN') {
        throw new Error('Forbidden: Only Admins can manage versions');
    }
}
async function getVersions() {
    const session = await getSession();
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetVersion.findMany({
        where: {
            tenantId: session.tenantId
        },
        orderBy: {
            createdAt: 'asc'
        }
    });
}
async function createVersion(data) {
    const session = await getSession();
    await checkAdmin(session);
    // 1. Create Version
    const newVersion = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetVersion.create({
        data: {
            name: data.name,
            color: data.color || '#94a3b8',
            tenantId: session.tenantId
        }
    });
    // 2. Duplicate Data if requested
    if (data.copyFromId) {
        const sourceEntries = await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.findMany({
            where: {
                tenantId: session.tenantId,
                budgetVersionId: data.copyFromId
            }
        });
        if (sourceEntries.length > 0) {
            const newEntries = sourceEntries.map((entry)=>({
                    month: entry.month,
                    year: entry.year,
                    amount: entry.amount,
                    tenantId: session.tenantId,
                    budgetVersionId: newVersion.id,
                    accountId: entry.accountId,
                    companyId: entry.companyId,
                    costCenterId: entry.costCenterId,
                    groupingId: entry.groupingId,
                    clientId: entry.clientId,
                    segmentId: entry.segmentId,
                    city: entry.city,
                    state: entry.state
                }));
            // Batch insert
            await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.createMany({
                data: newEntries
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
    return newVersion;
}
async function updateVersion(id, data) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetVersion.update({
        where: {
            id,
            tenantId: session.tenantId
        },
        data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function deleteVersion(id) {
    const session = await getSession();
    await checkAdmin(session);
    // Budget Entries will be deleted cascade? No, we didn't set onDelete: Cascade in database.
    // So we must delete entries manually first.
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.deleteMany({
        where: {
            budgetVersionId: id,
            tenantId: session.tenantId
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetVersion.delete({
        where: {
            id,
            tenantId: session.tenantId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function updateYearRange(minYear, maxYear) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].tenant.update({
        where: {
            id: session.tenantId
        },
        data: {
            minYear,
            maxYear
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
async function clearYearData(year, versionId) {
    const session = await getSession();
    await checkAdmin(session);
    await __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prisma"].budgetEntry.deleteMany({
        where: {
            tenantId: session.tenantId,
            year: year,
            budgetVersionId: versionId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/dre');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getVersions,
    createVersion,
    updateVersion,
    deleteVersion,
    updateYearRange,
    clearYearData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getVersions, "00285bab80253aa7b2296a42d248c927eeda38713e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createVersion, "40226c8fb0ff379b9c43fa7c4bf59cf9418058af9d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateVersion, "609134891a6b263f2b2023adeb903d86b2cc0e1858", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteVersion, "40ba77f326b348f1166ec09eaf8b526d435161ecfd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateYearRange, "604cf4ad5549f2b75584891ede92089d35d70429f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(clearYearData, "601df5cef71e3149a3fbdf9f5cb999afe15255793b", null);
}),
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/dre/page/actions.js { ACTIONS_MODULE0 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$budget$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)");
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
"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/dre/page/actions.js { ACTIONS_MODULE0 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b0718b2eb0a2ad60ca3fe619c2114c6b2e3b08ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "401e494663d20a4db83d8b2b2ff7dd18c5dd5ede6c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAccount"],
    "40226c8fb0ff379b9c43fa7c4bf59cf9418058af9d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createVersion"],
    "40a1bfe1decf11919aa9c5c8252d013665483ff433",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTenantDreTitle"],
    "40ba77f326b348f1166ec09eaf8b526d435161ecfd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteVersion"],
    "40bbb9be4ba7c2ee19f37c0e46b1596ccc41f69df3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAccount"],
    "601df5cef71e3149a3fbdf9f5cb999afe15255793b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearYearData"],
    "604aca97aa29ea3a6130f2230f924071bb84949a70",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAccount"],
    "604cf4ad5549f2b75584891ede92089d35d70429f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateYearRange"],
    "609134891a6b263f2b2023adeb903d86b2cc0e1858",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateVersion"],
    "7e01bcad98ba33d51c0d9792357959a35159857cad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$budget$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["batchUpdateBudgetEntries"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$dre$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$budget$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/.next-internal/server/app/dashboard/dre/page/actions.js { ACTIONS_MODULE0 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$budget$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/budget.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$account$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/account.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$playground$2f$shadow$2d$comet$2f$budget$2d$hub$2f$src$2f$app$2f$actions$2f$versions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/playground/shadow-comet/budget-hub/src/app/actions/versions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_gemini_antigravity_playground_shadow-comet_budget-hub_daf5125a._.js.map