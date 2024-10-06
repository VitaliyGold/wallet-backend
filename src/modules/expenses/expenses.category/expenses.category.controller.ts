import { FastifyReply } from "fastify";

import type { RemoveCategoryForExpenseRequest, AddCategoryForExpenseRequest } from "./expenses.category.types";
import { ExpensesCategoriesService } from "./expenses.category.service"; 


class Controller {
    addCategoryForExpense(req: AddCategoryForExpenseRequest, reply: FastifyReply) {
        return ExpensesCategoriesService.addCategoryToExpense(req.params.expenses_id, req.query.category_id, reply);
    }

    removeCategoryFromExpense(req: RemoveCategoryForExpenseRequest, reply: FastifyReply) {
        
        return ExpensesCategoriesService.removeCategoryFromExpense(req.params.expenses_id, reply);
    }
};

const ExpensesCategoriesController = new Controller();

export {
    ExpensesCategoriesController,
}