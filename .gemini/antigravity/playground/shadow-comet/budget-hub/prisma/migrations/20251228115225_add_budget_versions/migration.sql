-- CreateTable
CREATE TABLE "BudgetVersion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT DEFAULT '#3b82f6',
    "tenantId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BudgetVersion_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BudgetEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" REAL NOT NULL DEFAULT 0,
    "tenantId" TEXT NOT NULL,
    "budgetVersionId" TEXT,
    "accountId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "costCenterId" TEXT,
    "groupingId" TEXT,
    "clientId" TEXT,
    "segmentId" TEXT,
    "city" TEXT,
    "state" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BudgetEntry_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_budgetVersionId_fkey" FOREIGN KEY ("budgetVersionId") REFERENCES "BudgetVersion" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "AccountPlan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_costCenterId_fkey" FOREIGN KEY ("costCenterId") REFERENCES "CostCenter" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_groupingId_fkey" FOREIGN KEY ("groupingId") REFERENCES "Grouping" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BudgetEntry_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "Segment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BudgetEntry" ("accountId", "amount", "city", "clientId", "companyId", "costCenterId", "createdAt", "groupingId", "id", "month", "segmentId", "state", "tenantId", "updatedAt", "year") SELECT "accountId", "amount", "city", "clientId", "companyId", "costCenterId", "createdAt", "groupingId", "id", "month", "segmentId", "state", "tenantId", "updatedAt", "year" FROM "BudgetEntry";
DROP TABLE "BudgetEntry";
ALTER TABLE "new_BudgetEntry" RENAME TO "BudgetEntry";
CREATE INDEX "BudgetEntry_tenantId_year_month_idx" ON "BudgetEntry"("tenantId", "year", "month");
CREATE TABLE "new_Tenant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dreTitle" TEXT DEFAULT 'Demonstrativo de Resultados (DRE)',
    "minYear" INTEGER NOT NULL DEFAULT 2024,
    "maxYear" INTEGER NOT NULL DEFAULT 2027
);
INSERT INTO "new_Tenant" ("createdAt", "dreTitle", "id", "name", "updatedAt") SELECT "createdAt", "dreTitle", "id", "name", "updatedAt" FROM "Tenant";
DROP TABLE "Tenant";
ALTER TABLE "new_Tenant" RENAME TO "Tenant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "BudgetVersion_tenantId_name_key" ON "BudgetVersion"("tenantId", "name");
