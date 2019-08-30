module.exports = async (req, res) => {
	if (req.session && req.session.userInfo) {
		const s = `var isLogin = true; var userId=\"${req.session.userInfo._id}\"; var userName=\"${req.session.userInfo.nickName}\"; var img = ${JSON.stringify({path: req.session.userInfo.avatar})};`		
		res.send(s)
	}else {
		res.send('var isLogin = false')
	}
};
