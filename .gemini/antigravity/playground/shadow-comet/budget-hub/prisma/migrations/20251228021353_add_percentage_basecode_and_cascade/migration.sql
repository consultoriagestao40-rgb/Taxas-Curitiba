-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "City_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CostCenterGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "CostCenterGroup_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CostCenterSegment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "CostCenterSegment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    CONSTRAINT "AccountPlan_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "AccountPlan" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AccountPlan_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AccountPlan" ("code", "createdAt", "description", "formula", "id", "name", "parentId", "tenantId", "type", "updatedAt") SELECT "code", "createdAt", "description", "formula", "id", "name", "parentId", "tenantId", "type", "updatedAt" FROM "AccountPlan";
DROP TABLE "AccountPlan";
ALTER TABLE "new_AccountPlan" RENAME TO "AccountPlan";
CREATE UNIQUE INDEX "AccountPlan_tenantId_code_key" ON "AccountPlan"("tenantId", "code");
CREATE TABLE "new_CostCenter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "tenantId" TEXT NOT NULL,
    "groupingId" TEXT,
    "clientId" TEXT,
    "cityId" TEXT,
    "groupId" TEXT,
    "segmentId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CostCenter_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CostCenter_groupingId_fkey" FOREIGN KEY ("groupingId") REFERENCES "Grouping" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CostCenter_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CostCenter_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CostCenter_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "CostCenterGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CostCenter_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "CostCenterSegment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CostCenter" ("code", "createdAt", "id", "name", "tenantId", "updatedAt") SELECT "code", "createdAt", "id", "name", "tenantId", "updatedAt" FROM "CostCenter";
DROP TABLE "CostCenter";
ALTER TABLE "new_CostCenter" RENAME TO "CostCenter";
CREATE TABLE "new_Grouping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "companyId" TEXT,
    CONSTRAINT "Grouping_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grouping_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Grouping" ("id", "name", "tenantId") SELECT "id", "name", "tenantId" FROM "Grouping";
DROP TABLE "Grouping";
ALTER TABLE "new_Grouping" RENAME TO "Grouping";
CREATE TABLE "new_Segment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "groupingId" TEXT,
    CONSTRAINT "Segment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Segment_groupingId_fkey" FOREIGN KEY ("groupingId") REFERENCES "Grouping" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Segment" ("id", "name", "tenantId") SELECT "id", "name", "tenantId" FROM "Segment";
DROP TABLE "Segment";
ALTER TABLE "new_Segment" RENAME TO "Segment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
