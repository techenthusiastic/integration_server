import { Sequelize, DataTypes } from "sequelize";
//
const sequelize = new Sequelize("qjzcohmy_ekart", "root", "", {
	host: "localhost",
	dialect: "mysql",
	define: {
		freezeTableName: true,
	},
	logging: false,
});
(async () => {
	try {
		await sequelize.authenticate();
		console.log("Database Connection - Success.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();
(async () => {
	try {
		await sequelize.sync();
	} catch (error) {
		console.log(error.message);
	}
})();
//
// Function to fascilate user_model_object_creation
type mdlObjType = { type: any; allowNull: boolean; defaultValue: any };
const mdlObjFasc = (
	type: number,
	alwNull: boolean,
	dataLen: number = 0,
	defValue: any = false
) => {
	const obj = {} as mdlObjType;
	// Asssign type property
	// First process for all to be used NUMBER data types then STRING -> DATE -> Boolean (TinyINT(1))
	// 1-INTEGER 2-STRING 3-Date 4-Boolean 5-Double
	obj.type =
		type === 1
			? DataTypes.INTEGER
			: type === 2
			? dataLen
				? DataTypes.STRING(dataLen)
				: DataTypes.STRING
			: type == 3
			? DataTypes.DATE
			: type == 4
			? DataTypes.DATEONLY
			: type == 5
			? DataTypes.BOOLEAN
			: type == 6
			? DataTypes.DOUBLE
			: type == 7
			? DataTypes.TEXT
			: type == 8
			? dataLen
				? DataTypes.CHAR(dataLen)
				: DataTypes.CHAR
			: false;
	// Assign allow_Null property
	obj.allowNull = alwNull ? true : false; // however it follows true to be default
	// Assign default Value
	if (defValue) obj.defaultValue = defValue;
	return obj;
};
type uniqueKeyObj = mdlObjType & { unique: boolean };
const makeUniqueKey = (obj: object) => {
	// Since object was passed as reference clone into a new object so that default properties remain
	const objClone = { ...obj } as uniqueKeyObj;
	objClone.unique = true;
	return objClone;
};
export { sequelize, mdlObjFasc, makeUniqueKey };
