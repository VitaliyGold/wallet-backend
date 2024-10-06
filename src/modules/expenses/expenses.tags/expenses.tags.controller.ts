import { FastifyReply } from "fastify";

import type { RemoveTagForExpenseRequest, AddTagForExpenseRequest } from "./expenses.tags.types";
import { ExpensesTagsService } from "./expenses.tags.service"; 


class Controller {
    addTagForExpense(req: AddTagForExpenseRequest, reply: FastifyReply) {
        return ExpensesTagsService.addTagToExpense(req.params.expenses_id, req.query.tag_id, reply);
    }

    removeTagFromExpense(req: RemoveTagForExpenseRequest, reply: FastifyReply) {
        
        return ExpensesTagsService.removeTagFromExpense(req.params.expenses_id, reply);
    }
};

const ExpensesTagsController = new Controller();

export {
    ExpensesTagsController,
}