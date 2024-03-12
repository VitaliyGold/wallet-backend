import { GetCategoriesQuery } from './categories.types';

const createPagination = (query: GetCategoriesQuery): Required<GetCategoriesQuery> => {
    return {
        name: query.name ?? '',
    }
}

export {
    createPagination,
}