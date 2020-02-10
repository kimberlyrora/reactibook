const express = require('express');

const { postsMock } = require('../utils/mocks/posts.js');

function postsApi(app) {
	const router = express.Router();
	app.use('/api/posts', router);

	router.get('/', async function(req, res, next) {
		try {
			const posts =  await Promise.resolve(postsMock);
			res.status(200).json({
				data: posts,
				message: 'posts listed'
			});
		} catch(err){
			next(err);
		}
	});

	router.get('/:filter', async function(req, res, next) {
		try {
			const posts =  await Promise.resolve(postsMock[0]);
			res.status(200).json({
				data: posts,
				message: 'posts filtered'
			});
		} catch(err){
			next(err);
		}
	});

	router.post('/', async function(req, res, next) {
		try {
			const createPostId =  await Promise.resolve(postsMock[0].id);
			res.status(201).json({
				data: createPostId,
				message: 'post created'
			});
		} catch(err){
			next(err);
		}
	});

	router.put('/:postId', async function(req, res, next) {
		try {
			const updatedPostId =  await Promise.resolve(postsMock[0].id);
			res.status(200).json({
				data: updatedPostId,
				message: 'post updated'
			});
		} catch(err){
			next(err);
		}
	});

	router.delete('/:postId', async function(req, res, next) {
		try {
			const deletedPostId =  await Promise.resolve(postsMock[0].id);
			res.status(200).json({
				data: deletedPostId,
				message: 'post deleted'
			});
		} catch(err){
			next(err);
		}
	});
}

module.exports = postsApi;
