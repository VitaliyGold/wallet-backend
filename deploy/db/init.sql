-- CreateTable
CREATE TABLE "ExpensesData" (
    "expenses_id" TEXT NOT NULL,
    "amount" FLOAT NOT NULL,
    "category" TEXT[],
    "tags" TEXT[],
    "date" DATE NOT NULL,

    CONSTRAINT "ExpensesData_pkey" PRIMARY KEY ("expenses_id")
);

CREATE TABLE "TagData" (
    "tag_id" TEXT NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "TagData_pkey" PRIMARY KEY ("tag_id")
);

CREATE TABLE "CategoryData" (
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "CategoryData_pkey" PRIMARY KEY ("category_id")
);