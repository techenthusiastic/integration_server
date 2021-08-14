import { Request, Response, NextFunction } from "express";
const express = require("express");
require("dotenv").config();
const app = express();
//
const createErr: any = require("http-errors");
//
const cookieParser = require("cookie-parser");
app.use(cookieParser(process.env.COOKIE_SECRET));
//
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
const user_login_route = require("./user_routes/user_routes");
app.use("/user/login", user_login_route);
//
app.get("/", (req: Request, res: Response) => {
	console.log(req.body);
	res.status(200).send("Hello");
});
// Error out if no Router Exists
app.use(async (req: Request, res: Response, next: NextFunction) => {
	next(new createErr.NotFound());
});
// Error Handeler Middleware
interface Error {
	status?: number;
	message: string;
}
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	const statusCode: number = err.status || 500;
	res
		.status(statusCode)
		.send({ error: { status: err.status || 500, message: err.message } });
});
//
const http = require("http");
const httpServer = http.Server(app);
//
const PORT: any = process.env.PORT || 5001;
httpServer.listen(PORT, function (): void {
	console.log(`Server Running on Port ${PORT}`);
});
