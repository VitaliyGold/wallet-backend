/*
  Warnings:

  - You are about to drop the `CategoryExpenseLinks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagExpenseLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryExpenseLinks" DROP CONSTRAINT "CategoryExpenseLinks_category_id_fkey";

-- DropForeignKey
ALTER TABLE "CategoryExpenseLinks" DROP CONSTRAINT "CategoryExpenseLinks_expenses_id_fkey";

-- DropForeignKey
ALTER TABLE "TagExpenseLinks" DROP CONSTRAINT "TagExpenseLinks_expenses_id_fkey";

-- DropForeignKey
ALTER TABLE "TagExpenseLinks" DROP CONSTRAINT "TagExpenseLinks_tag_id_fkey";

-- AlterTable
ALTER TABLE "ExpensesData" ADD COLUMN     "category_id" TEXT,
ADD COLUMN     "tag_id" TEXT;

-- DropTable
DROP TABLE "CategoryExpenseLinks";

-- DropTable
DROP TABLE "TagExpenseLinks";

-- AddForeignKey
ALTER TABLE "ExpensesData" ADD CONSTRAINT "ExpensesData_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "TagData"("tag_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpensesData" ADD CONSTRAINT "ExpensesData_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CategoryData"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;
