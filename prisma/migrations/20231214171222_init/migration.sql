/*
  Warnings:

  - You are about to drop the column `category_name` on the `CategoryData` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `ExpensesData` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `ExpensesData` table. All the data in the column will be lost.
  - You are about to drop the column `tag_name` on the `TagData` table. All the data in the column will be lost.
  - Added the required column `name` to the `CategoryData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TagData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryData" DROP COLUMN "category_name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExpensesData" DROP COLUMN "category",
DROP COLUMN "tags";

-- AlterTable
ALTER TABLE "TagData" DROP COLUMN "tag_name",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TagExpenseLinks" (
    "expenses_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "TagExpenseLinks_pkey" PRIMARY KEY ("expenses_id")
);

-- CreateTable
CREATE TABLE "CategoryExpenseLinks" (
    "expenses_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "CategoryExpenseLinks_pkey" PRIMARY KEY ("expenses_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TagExpenseLinks_expenses_id_key" ON "TagExpenseLinks"("expenses_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryExpenseLinks_expenses_id_key" ON "CategoryExpenseLinks"("expenses_id");

-- AddForeignKey
ALTER TABLE "TagExpenseLinks" ADD CONSTRAINT "TagExpenseLinks_expenses_id_fkey" FOREIGN KEY ("expenses_id") REFERENCES "ExpensesData"("expenses_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagExpenseLinks" ADD CONSTRAINT "TagExpenseLinks_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "TagData"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryExpenseLinks" ADD CONSTRAINT "CategoryExpenseLinks_expenses_id_fkey" FOREIGN KEY ("expenses_id") REFERENCES "ExpensesData"("expenses_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryExpenseLinks" ADD CONSTRAINT "CategoryExpenseLinks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CategoryData"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
