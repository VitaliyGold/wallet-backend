import { InstancePrisma } from "../../utils/prismaClient";

import { CreateCategoryDto, Category } from "./categories.types";

class Repository {
    createCategory(data: CreateCategoryDto) {
        return InstancePrisma.categoryData.create({
            data,
        });
    }

    getCategories(name: string) {
        return InstancePrisma.categoryData.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        })
    }

    deleteCategory(category_id: string) {
        return InstancePrisma.categoryData.delete({
            where: {
                category_id,
            }
        })
    }

    changeCategory(data: Category) {
        return InstancePrisma.categoryData.update({
            where: {
                category_id: data.category_id,
            },
            data,
        })
    }
}

const CategoriesRepository = new Repository();

export {
    CategoriesRepository,
}