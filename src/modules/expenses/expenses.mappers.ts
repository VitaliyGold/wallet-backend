import { GetExpensesQuery, GetPaginationExpensesQuery } from './expenses.types';

const getArrayFromQuery = (items: string | string[]) => {
    if (Array.isArray(items)) {
        return items;
    }
    return [items];
}

const createGetExpenseParams = (query: GetExpensesQuery): Required<GetExpensesQuery> => {
    return {
        name: query.name ? String(query.name) : '',
        categories: query.categories ? getArrayFromQuery(query.categories) : [],
        tags: Array.isArray(query.tags) ? query.categories : [],
        startDate: query.startDate ?? new Date(0).toISOString(),
        endDate: query.endDate ?? new Date().toISOString(),
        direction: query.direction ?? 'all',
    }
}

const createParamsPagination = (query: GetPaginationExpensesQuery): Required<GetPaginationExpensesQuery> => {
    
    return {
        ...createGetExpenseParams(query),
        limit: query.limit !== undefined ? Number(query.limit) : 50,
        offset: query.offset !== undefined ? Number(query.offset) : 0,
    }
}

const createResponsePagination = <T>(data: T, total: number) => {
    return {
        data,
        total,
    }
}

export {
    createParamsPagination,
    createGetExpenseParams,
    createResponsePagination,
}