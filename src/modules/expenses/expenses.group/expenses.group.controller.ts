import { FastifyReply } from "fastify";

import type { GetGroupExpensesRequest, GetGroupExpensesQuery } from "./expenses.group.types";
import { ExpensesGroupService } from "./expenses.group.service"; 
import { createGetExpenseParams } from "../expenses.mappers";


class Controller {
    getGroupExpenses(req: GetGroupExpensesRequest, reply: FastifyReply) {

        const params: Required<GetGroupExpensesQuery> = {
            ...createGetExpenseParams(req.query),
            // потом сделать нормально
            groupBy: req.query.groupBy !== 'category' ? 'category' : req.query.groupBy,
        };

        return ExpensesGroupService.getExpenseWithGroup(params, reply);
    }
};

const ExpensesGroupController = new Controller();

export {
    ExpensesGroupController,
}