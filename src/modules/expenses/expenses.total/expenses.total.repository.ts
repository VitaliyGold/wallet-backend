import { InstancePrisma } from "../../../utils/prismaClient";
import { GetExpensesQuery } from "../expenses.types";
import { getExpensesFiltersBuilder, getAmountFilterBilder } from "../expenses.queryBuilder";

class Repository {
    getExpensesTotal(params: Required<GetExpensesQuery>) {
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
                ...getAmountFilterBilder(params.direction),
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