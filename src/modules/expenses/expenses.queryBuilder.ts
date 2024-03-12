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

export {
    getExpensesFiltersBuilder,
}