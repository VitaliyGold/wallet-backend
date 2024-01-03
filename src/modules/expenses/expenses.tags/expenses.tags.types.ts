import type { FastifyRequest } from "fastify";

interface TagForExpense {
    tag_id: string;
    expenses_id: string;
}

type AddTagForExpenseRequest = FastifyRequest<{ Params: { expenses_id: TagForExpense['expenses_id'] }, Querystring: { tag_id: TagForExpense['tag_id'] } }>;

type RemoveTagForExpenseRequest = FastifyRequest<{ Params: { expenses_id: TagForExpense['expenses_id'] }, Querystring: { tag_id: TagForExpense['tag_id'] } }>;

export {
    AddTagForExpenseRequest,
    RemoveTagForExpenseRequest,
}