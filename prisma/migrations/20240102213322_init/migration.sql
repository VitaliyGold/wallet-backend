/*
  Warnings:

  - The primary key for the `CategoryExpenseLinks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TagExpenseLinks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[expenses_id,category_id]` on the table `CategoryExpenseLinks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[expenses_id,tag_id]` on the table `TagExpenseLinks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CategoryExpenseLinks" DROP CONSTRAINT "CategoryExpenseLinks_pkey";

-- AlterTable
ALTER TABLE "TagExpenseLinks" DROP CONSTRAINT "TagExpenseLinks_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "CategoryExpenseLinks_expenses_id_category_id_key" ON "CategoryExpenseLinks"("expenses_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "TagExpenseLinks_expenses_id_tag_id_key" ON "TagExpenseLinks"("expenses_id", "tag_id");
