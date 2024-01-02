import { join } from 'node:path';
import fastifyAutoload from '@fastify/autoload';
import { FastifyPluginAsync } from 'fastify';

const app: FastifyPluginAsync<FastifyPluginAsync> = async (
	fastify,
	opts
): Promise<void> => {
	void fastify.register(fastifyAutoload, {
		dir: join(__dirname, 'plugins'),
		options: opts,
	});
	void fastify.register(fastifyAutoload, {
		dir: join(__dirname, 'routes'),
		options: {
			prefix: '/api'
		},
	});

};


export default app;