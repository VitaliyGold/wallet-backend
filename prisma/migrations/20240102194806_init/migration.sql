/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CategoryData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TagData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CategoryData_name_key" ON "CategoryData"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TagData_name_key" ON "TagData"("name");
