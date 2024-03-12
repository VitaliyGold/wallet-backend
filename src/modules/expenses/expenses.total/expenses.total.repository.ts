import { InstancePrisma } from "../../../utils/prismaClient";
import type { GetTotalExpensesQuery } from './expenses.total.types';
import { getExpensesFiltersBuilder } from "../expenses.queryBuilder";

class Repository {
    getExpensesTotal(params: Required<GetTotalExpensesQuery>) {
        return InstancePrisma.expensesData.aggregate({
            where: {
                name: {
                    contains: params.name,
                    mode: 'insensitive',
                },
                date: {
                    lte: params.endDate,
                    gte: params.startDate,
                },
                ...getExpensesFiltersBuilder(params.categories, params.tags),
            },
            _sum: {
                amount: true,
            }
        })
    }
}

const ExpensesTotalRepository = new Repository();

export {
    ExpensesTotalRepository
}