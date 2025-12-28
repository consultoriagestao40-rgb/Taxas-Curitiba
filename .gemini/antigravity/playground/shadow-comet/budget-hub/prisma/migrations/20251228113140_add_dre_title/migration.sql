-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN "dreTitle" TEXT DEFAULT 'Demonstrativo de Resultados (DRE)';

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AccountPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "formula" TEXT,
    "percentage" REAL,
    "baseCode" TEXT,
    "parentId" TEXT,
    "tenantId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AccountPlan_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "AccountPlan" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AccountPlan_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AccountPlan" ("baseCode", "code", "createdAt", "description", "formula", "id", "name", "parentId", "percentage", "tenantId", "type", "updatedAt") SELECT "baseCode", "code", "createdAt", "description", "formula", "id", "name", "parentId", "percentage", "tenantId", "type", "updatedAt" FROM "AccountPlan";
DROP TABLE "AccountPlan";
ALTER TABLE "new_AccountPlan" RENAME TO "AccountPlan";
CREATE UNIQUE INDEX "AccountPlan_tenantId_code_key" ON "AccountPlan"("tenantId", "code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
