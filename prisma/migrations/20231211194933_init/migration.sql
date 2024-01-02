-- CreateTable
CREATE TABLE "ExpensesData" (
    "expenses_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "ExpensesData_pkey" PRIMARY KEY ("expenses_id")
);

-- CreateTable
CREATE TABLE "TagData" (
    "tag_id" TEXT NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "TagData_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "CategoryData" (
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "CategoryData_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExpensesData_expenses_id_key" ON "ExpensesData"("expenses_id");

-- CreateIndex
CREATE UNIQUE INDEX "TagData_tag_id_key" ON "TagData"("tag_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryData_category_id_key" ON "CategoryData"("category_id");
