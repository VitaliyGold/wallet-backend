import { FastifyPluginAsync, FastifyReply } from "fastify";

import { ExpensesController, ExpensesCategoriesController, ExpensesTagsController} from "../../modules/expenses";
import type { GetExpensesRequest, CreateExpensesRequest, DeleteExpenseRequest, PatchExpenseRequest, AddCategoryForExpenseRequest, RemoveCategoryForExpenseRequest, AddTagForExpenseRequest, RemoveTagForExpenseRequest } from '../../modules/expenses';

const ExpensesRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', {}, (req: GetExpensesRequest, reply: FastifyReply) => {
    return ExpensesController.getExpenses(req, reply);
  });

  fastify.post('/', {}, (req: CreateExpensesRequest, reply: FastifyReply) => {
    return ExpensesController.createExpenses(req, reply);
  });

  fastify.delete('/', {}, (req: DeleteExpenseRequest, reply: FastifyReply) => {
    return ExpensesController.deleteExpense(req, reply);
  });

  fastify.patch('/', {}, (req: PatchExpenseRequest, reply: FastifyReply) => {
    return ExpensesController.patchExpense(req, reply);
  });


  // добавление категорий к тратам
  fastify.post('/:expenses_id/category', {}, (req: AddCategoryForExpenseRequest, reply: FastifyReply) => {
    return ExpensesCategoriesController.addCategoryForExpense(req, reply);
  });

  fastify.delete('/:expenses_id/category', {}, (req: RemoveCategoryForExpenseRequest, reply: FastifyReply) => {
    return ExpensesCategoriesController.removeCategoryFromExpense(req, reply);
  })


  // добавление тегов к тратам
  fastify.post('/:expenses_id/tag', {}, (req: AddTagForExpenseRequest, reply: FastifyReply) => {
    return ExpensesTagsController.addTagForExpense(req, reply);
  });

  fastify.delete('/:expenses_id/tag', {}, (req: RemoveTagForExpenseRequest, reply: FastifyReply) => {
    return ExpensesTagsController.removeTagFromExpense(req, reply);
  })
}

export default ExpensesRoute;