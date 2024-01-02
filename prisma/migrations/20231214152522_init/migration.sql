/*
  Warnings:

  - Added the required column `name` to the `ExpensesData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpensesData" ADD COLUMN     "name" TEXT NOT NULL;
