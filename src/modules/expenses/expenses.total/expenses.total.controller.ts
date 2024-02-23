import { FastifyReply } from "fastify";

import type { GetTotalExpensesRequest } from "./expenses.total.types";
import { ExpensesTotalService } from "./expenses.total.service";
import { createParamsPagination } from "../expenses.mappers";


class Controller {
    getExpensesTotal(req: GetTotalExpensesRequest, reply: FastifyReply) {
        const paginationParams = createParamsPagination(req.query);

        return ExpensesTotalService.getExpensesTotal(paginationParams, reply);
    }
};

const ExpensesTotalController = new Controller();

export {
    ExpensesTotalController,
}