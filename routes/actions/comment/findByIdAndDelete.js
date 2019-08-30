// 验证模块
const Joi = require('joi');
// 分类模块
const { Comment } = require('../../../model/Comment');
const { Post } = require('../../../model/Post');


module.exports = async (req, res) => {
	// 获取评论id
	const id = req.params['id'];
	// 验证模型
	const schema = Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('评论id不符合格式'))
	// 验证
	const { error } = Joi.validate(id, schema)
	// 数据格式没有通过验证
	if (error) return res.status(400).send({message: error.message});
	// 通过验证
	// 删除分类
	let comment = await Comment.findByIdAndDelete(id);
	// 找到被评论的文章
	let post = await Post.findOne({_id: comment.post});
	// 修改评论数量
	post.meta.comments = post.meta.comments - 1;
	// 保存文章数据
	await post.save();
	// 响应
	res.send(comment);
	
};








