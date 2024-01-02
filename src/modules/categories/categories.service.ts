import { FastifyReply } from "fastify";

import { GetCategoriesQuery, Category, CreateCategoryDto } from "./categories.types";
import { CategoriesRepository } from './categories.repository';

class Service {
    async getCategories(params: Required<GetCategoriesQuery>, reply: FastifyReply) {
        const category = await CategoriesRepository.getCategories(params.name);
        reply.send(category);
    }

    async deleteCategory(categoryId: string, reply: FastifyReply) {
        const removed = await CategoriesRepository.deleteCategory(categoryId);
        reply.send(removed);
    }

    async patchCategory(tag: Category, reply: FastifyReply) {
        const patchedCategory = await CategoriesRepository.changeCategory(tag);
        reply.send(patchedCategory);
    }

    async addCategory(params: CreateCategoryDto, reply: FastifyReply) {
        const createdCategory = await CategoriesRepository.createCategory(params);
        reply.status(201).send(createdCategory);
    }

}

const CategoriesService = new Service();

export {
    CategoriesService,
}