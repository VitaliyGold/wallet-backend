import type { FastifyRequest } from "fastify";

interface GetCategoriesQuery {
    name?: string;
}

interface Category {
    category_id: string,
    name: string,
    color: string,
}

type CreateCategoryDto = Omit<Category, 'category_id'>;

type GetCategoriesRequest = FastifyRequest<{ Querystring: GetCategoriesQuery }>;

type CreateCategoryRequest = FastifyRequest<{ Body: { data: CreateCategoryDto } }>;

type DeleteCategoryRequest = FastifyRequest<{ Querystring: Pick<Category, 'category_id'> }>;

type PatchCategoryRequest = FastifyRequest<{ Body: { data: Category } }>

export type {
    GetCategoriesQuery,
    Category,
    CreateCategoryDto,
    GetCategoriesRequest,
    CreateCategoryRequest,
    DeleteCategoryRequest,
    PatchCategoryRequest
}