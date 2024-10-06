import { FastifyReply } from "fastify";

import type { GetGroupExpensesQuery } from "./expenses.group.types";
import { ExpensesGroupRepository } from './expenses.group.repository'

class Service {
    async getExpenseWithGroup(params: Required<GetGroupExpensesQuery>, reply: FastifyReply) {
        const expenseWithGroup = await ExpensesGroupRepository.getCategoryWithGroup(params);
        reply.send(expenseWithGroup);
    }
};

const ExpensesGroupService = new Service();

export {
    ExpensesGroupService,
}