const express = require('express');
const PostsService = require('../services/posts');
const {
  postIdSchema,
  createPostSchema,
  updatePostSchema
} = require('../utils/schemas/posts');

const validationHandler = require('../utils/middleware/validationHandler');
// const { postsMock } = require('../utils/mocks/posts.js');

function postsApi(app) {
  const router = express.Router();
  app.use('/api/posts', router);

  const postsServices = new PostsService();

  router.get('/', async function(req, res, next) {
    try {
      const posts = await postsServices.getPosts();
      // throw new Error('Error getting movies');
      res.status(200).json({
        data: posts,
        message: 'posts listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:filter', async function(req, res, next) {
    const { filter } = req.params;
    // query
    try {
      const posts = await postsServices.getPostsFiltered({ filter });
      res.status(200).json({
        data: posts,
        message: 'posts filtered'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createPostSchema), async function(
    req,
    res,
    next
  ) {
    const { body: post } = req;
    try {
      const createPostId = await postsServices.createPost({ post });
      res.status(201).json({
        data: createPostId,
        message: 'post created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:postId',
    validationHandler({ postId: postIdSchema }, 'params'),
    validationHandler(updatePostSchema),
    async function(req, res, next) {
      const { postId } = req.params;
      const { body: post } = req;
      try {
        const updatedPostId = await postsServices.updatePost({
          postId,
          post
        });

        res.status(200).json({
          data: updatedPostId,
          message: 'post updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:postId',
    validationHandler({ postId: postIdSchema }, 'params'),
    async function(req, res, next) {
      const { postId } = req.params;
      try {
        const deletedPostId = await postsServices.deletePost({ postId });

        res.status(200).json({
          data: deletedPostId,
          message: 'post deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch('/:postId', async function(req, res, next) {
    const { postId } = req.params;
    const { body: post } = req;
    try {
      const patchPostId = await postsServices.patchPost({
        postId,
        post
      });

      res.status(200).json({
        data: patchPostId,
        message: 'post patched'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = postsApi;
