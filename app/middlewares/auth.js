
/*
 *  Generic require login routing middleware
 */

 exports.requiresLogin = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return res.redirect('/admin/login')
	}
	next()
 };

/*
 *  User has authorization
 */

exports.hasAuthorization = function (req, res, next) {
	next()
};

/*
 *  User authorizations routing middleware
 */

 exports.user = {
	hasAuthorization : function (req, res, next) {
		if (req.profile.id != req.user.id) {
			return res.redirect('/admin/users/'+req.profile.id)
		}
		next()
	}
 }


/*
 *  Article authorizations routing middleware
 */

 exports.article = {
	hasAuthorization : function (req, res, next) {
		if (req.article.user.id != req.user.id) {
			return res.redirect('/admin/articles/'+req.article.id)
		}
		next()
	}
 }
