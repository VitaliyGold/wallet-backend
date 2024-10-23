import { InstancePrisma } from "../../utils/prismaClient";

import { Expense, GetPaginationExpensesQuery } from "./expenses.types";
import { getExpensesFiltersBuilder, getAmountFilterBilder } from "./expenses.queryBuilder";

class Repository {
    createExpenses(data: Expense[]) {
        return InstancePrisma.$transaction(data.map(expense => InstancePrisma.expensesData.create({
            data: {
                amount: expense.amount,
                name: expense.name,
                date: expense.date,
                expenses_id: expense.expenses_id,
                category_id: expense.category_id,
                tag_id: expense.tag_id,
            }
        }))
        )
    }

    getExpenses(params: Required<GetPaginationExpensesQuery>) {
        return InstancePrisma.$transaction([
            InstancePrisma.expensesData.findMany({
                where: {
                    name: {
                        contains: params.name,
                        mode: 'insensitive',
                    },
                    date: {
                        lte: params.endDate,
                        gte: params.startDate,
                    },
                    ...getExpensesFiltersBuilder(params.category_ids, params.tags),
                    ...getAmountFilterBilder(params.direction)
                    
                },
                
                select: {
                    expenses_id: true,
                    amount: true,
                    date: true,
                    name: true,
                    category_id: true,
                    tag_id: true,
                },
                orderBy: {
                    date: 'desc'
                },
                take: params.limit,
                skip: params.offset,
            }),
            InstancePrisma.expensesData.count({
                where: {
                    name: {
                        contains: params.name,
                        mode: 'insensitive',
                    },
                    date: {
                        lte: params.endDate,
                        gte: params.startDate,
                    },
                    ...getExpensesFiltersBuilder(params.category_ids, params.tags),
                    ...getAmountFilterBilder(params.direction)
                },
            })
        ])
        
    }

    deleteExpense(expenses_id: string) {
        return InstancePrisma.expensesData.delete({
            where: {
                expenses_id,
            }
        })
    }

    changeExpense(data: Expense) {
        return InstancePrisma.expensesData.update({
            where: {
                expenses_id: data.expenses_id,
            },
            data: {
                amount: data.amount,
                date: data.date,
                name: data.name,
                category_id: data.category_id,
                tag_id: data.tag_id,
            }
        })
    }
}

const ExpenseRepository = new Repository();

export {
    ExpenseRepository,
}