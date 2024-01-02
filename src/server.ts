import * as dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import app from './app';

const server = Fastify({ 
	logger: false,
});

const port = Number(process.env.PORT) || 5001;

server
	.register(app)
	.then(() => {
		return server.ready();
	})
	.then(() => server.listen({ port: port }, (err) => {
		console.log(`Server started on ${port}`);
		if (err) throw err;
	}));