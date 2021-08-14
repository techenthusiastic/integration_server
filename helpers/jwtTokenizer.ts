import jwt from "jsonwebtoken";
//
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "";
// Generates JWT Access Token with payload object
function genAccessToken(objData: any) {
	const access_Token = jwt.sign(objData, JWT_ACCESS_SECRET, {
		// expiresIn: "15s",
	});
	return access_Token;
}
function genRefreshToken(objData: any) {
	const refresh_Token = jwt.sign(objData, JWT_REFRESH_SECRET);
	return refresh_Token;
}
export { genAccessToken, genRefreshToken };
