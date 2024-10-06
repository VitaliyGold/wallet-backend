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
                category: {
                    createMany: {
                        data: expense.categories.map(category => ({
                            category_id: category,
                        }))
                    }
                },
                tags: {
                    createMany: {
                        data: expense.tags.map(tag => ({
                            tag_id: tag,
                        }))
                    }
                }
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
                    ...getExpensesFiltersBuilder(params.categories, params.tags),
                    ...getAmountFilterBilder(params.direction),
                    
                },
                
                select: {
                    expenses_id: true,
                    amount: true,
                    date: true,
                    name: true,
                    category: {
                        select: {
                            category_id: true,
                        }
                    },
                    tags: {
                        select: {
                            tag_id: true
                        }
                    }
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
                    ...getExpensesFiltersBuilder(params.categories, params.tags),
                    ...getAmountFilterBilder(params.direction),
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
                category: {
                    deleteMany: {},
                    createMany: {
                        data: data.categories.map(category => ({
                            category_id: category,
                        }))
                    }
                },
                tags: {
                    createMany: {
                        data: data.tags.map(tag => ({
                            tag_id: tag,
                        }))
                    }
                }
            }
        })
    }
}

const ExpenseRepository = new Repository();

export {
    ExpenseRepository,
}