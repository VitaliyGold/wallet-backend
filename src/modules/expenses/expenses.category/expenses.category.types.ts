import type { FastifyRequest } from "fastify";

interface CategoryForExpense {
    category_id: string;
    expenses_id: string;
}

type AddCategoryForExpenseRequest = FastifyRequest<{ Params: { expenses_id: CategoryForExpense['expenses_id'] }, Querystring: { category_id: CategoryForExpense['category_id'] } }>;

type RemoveCategoryForExpenseRequest = FastifyRequest<{ Params: { expenses_id: CategoryForExpense['expenses_id'] }, Querystring: { category_id: CategoryForExpense['category_id'] } }>;

export {
    AddCategoryForExpenseRequest,
    RemoveCategoryForExpenseRequest,
}