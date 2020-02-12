const joi =  require('@hapi/joi');

const postIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const postUserSchema = joi.string().min(5).max(189);
const postPrivacySchema = joi.string().min(5).max(7);
const postDateSchema = joi.date();
const postDescriptionSchema = joi.string().min(1).max(500);

const createPostSchema = {
	user: postUserSchema.required(),
	privacy: postPrivacySchema.required(),
	date: postDateSchema.required(),
	description: postDescriptionSchema.required()
}

const updatePostSchema = {
	id: postIdSchema.required(),
	user: postUserSchema.required(),
	privacy: postPrivacySchema.required(),
	date: postDateSchema.required(),
	description: postDescriptionSchema.required()
}

module.exports = {
	postIdSchema,
	createPostSchema,
	updatePostSchema
}