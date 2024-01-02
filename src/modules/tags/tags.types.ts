import type { FastifyRequest } from "fastify";

interface GetTagsQuery {
    name?: string;
}

interface Tag {
    tag_id: string,
    name: string,
}

type CreateTagDto = Omit<Tag, 'tag_id'>;

type GetTagsRequest = FastifyRequest<{ Querystring: GetTagsQuery }>;

type CreateTagRequest = FastifyRequest<{ Body: { data: CreateTagDto } }>;

type DeleteTagRequest = FastifyRequest<{ Querystring: Pick<Tag, 'tag_id'> }>;

type PatchTagRequest = FastifyRequest<{ Body: { data: Tag } }>

export type {
    CreateTagDto,
    GetTagsQuery,
    Tag,
    GetTagsRequest,
    CreateTagRequest,
    DeleteTagRequest,
    PatchTagRequest
}