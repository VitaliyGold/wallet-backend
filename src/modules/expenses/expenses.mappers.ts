import { GetExpensesQuery } from './expenses.types';

const createParamsPagination = (query: GetExpensesQuery): Required<GetExpensesQuery> => {

    const getArrayFromQuery = (items: string | string[]) => {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }
    return {
        name: query.name ? String(query.name) : '',
        limit: Number(query.limit) ?? 50,
        offset: Number(query.offset) ?? 0,
        categories: query.categories ? getArrayFromQuery(query.categories) : [],
        tags: Array.isArray(query.tags) ? query.categories : [],
        startDate: query.startDate ?? new Date(0).toISOString(),
        endDate: query.endDate ?? new Date().toISOString(),
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
    createResponsePagination,
}