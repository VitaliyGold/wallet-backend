import { FastifyPluginAsync } from "fastify";

const FileRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', {}, (req, reply) => reply.status(200).send('pong'));
}

export default FileRoute;