import { GetTagsQuery } from './tags.types';

const createPagination = (query: GetTagsQuery): Required<GetTagsQuery> => {
    return {
        name: String(query.name) ?? '',
    }
}

export {
    createPagination,
}