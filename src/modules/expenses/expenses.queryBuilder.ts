import type { ExpensesDirection } from "./expenses.types";

// подумать где лучше хранить подобные функции

const getExpensesFiltersBuilder = (categories: string[], tags: string[]) => {
    const filters = {};

    if (categories.length) {
        filters['category'] = {
            some: {
                category_id: {
                    in: categories,
                },
            }
        }
    }
    if (tags.length) {
        filters['tags'] = {
            some: {
                tag_id: {
                    in: tags,
                },
            }
        }
    }

    
 
    return filters;
};


const getAmountFilterBilder = (direction: ExpensesDirection) => {
    switch(direction) {
        case 'expenses':
            return {
                amount: {
                    lt: 0,
                }
            }
        case 'incomes': {
            return {
                amount: {
                    gt: 0,
                }
            }
        }
        default:
            return {};
    }
}

export {
    getExpensesFiltersBuilder,
    getAmountFilterBilder,
}