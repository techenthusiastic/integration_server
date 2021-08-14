import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
//
const createErr = require("http-errors");
//
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "";
//
function jwt_Token_Verifier(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers["authorization"];
	const recToken = authHeader && authHeader.split(" ")[1];
	if (!recToken)
		return next(createErr.BadRequest("Authorization Token not Set"));
	//
	jwt.verify(recToken, JWT_ACCESS_SECRET, function (err, decoded) {
		if (err) return next(createErr.Forbidden(err.message));
		// if (err) return next(createErr.Forbidden("Access Token Expired"));
		// if jwt id mismatch, err == invalid jwt id
		// delete decoded.iat;
		// delete decoded.exp;
		res.locals.user = decoded;
		next();
	});
}
export default jwt_Token_Verifier;
