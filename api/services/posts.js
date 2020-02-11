const MongoLib = require('../lib/mongo');

class PostsService {
	constructor() {
		this.collection = 'posts';
		this.mongoDB = new MongoLib();
	}
	async getPosts() {
		const posts = await this.mongoDB.getAll(this.collection);
		return posts || [];
	}

	async getPostsFiltered({ filter }) {
		const query =  filter && { filter: { $in: filter }};
		const posts = await this.mongoDB.get(this.collection, query);
		return posts || [];
	}

	async createPost({ post }) {
		const createPostId = await this.mongoDB.create(this.collection, post);
		return createPostId || [];
	}

	async updatePost({ postId, post }) {
		const updatePostId = await this.mongoDB.update(this.collection, postId, post);
		return updatePostId || [];
	}

	async deletePost({ postId }) {
		const deletePostId = await this.mongoDB.delete(this.collection, postId);
		return deletePostId || [];
	}

	// async patchPost() {
	// 	const patchPostId = await Promise.resolve(postsMock[0].id);
	// 	return patchPostId || [];
	// }
}

module.exports = PostsService;