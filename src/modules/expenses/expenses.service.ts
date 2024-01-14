import { FastifyReply } from "fastify";
import { randomUUID } from "node:crypto";

import { GetExpensesQuery, CreateExpenseDto, Expense, ChangeExpenseDto } from "./expenses.types";
import { ExpenseRepository } from './expenses.repository';
import { createResponsePagination } from "./expenses.mappers";

class Service {
    async getExpenses(params: Required<GetExpensesQuery>, reply: FastifyReply) {
        const expenses = await ExpenseRepository.getExpenses(params);
        reply.send(createResponsePagination(expenses[0], expenses[1]));
    }

    async deleteExpense(tagId: string, reply: FastifyReply) {
        const removedExpense = await ExpenseRepository.deleteExpense(tagId);
        reply.send(removedExpense);
    }

    async patchExpense(tag: ChangeExpenseDto, reply: FastifyReply) {
        const patchedExpenses = await ExpenseRepository.changeExpense(tag);
        reply.send(patchedExpenses);
    }

    async addExpenses(data: CreateExpenseDto[], reply: FastifyReply) {
        const expensesWithIds = data.map<Expense>(expense => ({ ...expense, expenses_id: randomUUID() }))

        const createdExpenses = await ExpenseRepository.createExpenses(expensesWithIds);
        reply.status(201).send(createdExpenses);
    }

}

const ExpenseService = new Service();

export {
    ExpenseService,
}