import { Model, DataTypes } from "sequelize";
//
import { sequelize, mdlObjFasc, makeUniqueKey } from "./mdl_obj_fascilator";
//
//
class user_detail_mdl extends Model {}
// Prepare Object for most used model-objects
// 3rd parameter 0 means to say leave as default
const int_11_DEFAULT_NULL = mdlObjFasc(1, true, 0, null);
const int_11_NOT_NULL = mdlObjFasc(1, false);
const varchar_255_DEFAULT_NULL = mdlObjFasc(2, true, 0, null);
const varchar_255_NOT_NULL_DEFAULT_none = mdlObjFasc(2, false, 0, false);
const datetime_DEFAULT_NULL = mdlObjFasc(3, true, 0, null);
const date_DEFAULT_NULL = mdlObjFasc(4, true, 0, null);
const tinyint_4_DEFAULT_NULL = mdlObjFasc(1, true, 0, null);
const double_DEFAULT_NULL = mdlObjFasc(6, true, 0, null);
//
//
//
user_detail_mdl.init(
	{
		user_id: {
			...int_11_NOT_NULL,
			primaryKey: true, // set as primary key
			autoIncrement: true, // set auto-increment
		},
		user_hash: makeUniqueKey({ ...varchar_255_DEFAULT_NULL }),
		is_admin: { ...int_11_DEFAULT_NULL },
		parent_user_id: { ...int_11_NOT_NULL },
		user_inst_id: makeUniqueKey(int_11_DEFAULT_NULL),
		user_school_id: { ...int_11_DEFAULT_NULL },
		user_college_id: { ...int_11_DEFAULT_NULL },
		dealer_id: { ...int_11_DEFAULT_NULL },
		public_secure_code: makeUniqueKey({ ...varchar_255_DEFAULT_NULL }),
		user_count: { ...int_11_DEFAULT_NULL },
		test_control_status: {
			type: DataTypes.ENUM("yes", "no"),
			allowNull: true,
			defaultValue: null,
		},
		package_description: DataTypes.TEXT,
		last_active: { ...datetime_DEFAULT_NULL },
		app_rating_count: mdlObjFasc(1, false, 0, 0),
		user_email: makeUniqueKey({ ...varchar_255_DEFAULT_NULL }),
		user_email_status: mdlObjFasc(5, false, 0, 0),
		user_password: { ...varchar_255_DEFAULT_NULL },
		user_fb_email: { ...varchar_255_DEFAULT_NULL },
		user_fb_id: { ...varchar_255_DEFAULT_NULL },
		user_gplus_email: { ...varchar_255_DEFAULT_NULL },
		user_gplus_id: { ...varchar_255_DEFAULT_NULL },
		user_first_name: { ...varchar_255_DEFAULT_NULL },
		user_last_name: { ...varchar_255_DEFAULT_NULL },
		// ' CHARSET utf8 COLLATE utf8_general_ci'
		//     user_first_name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
		//     user_last_name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
		user_type: { ...varchar_255_DEFAULT_NULL },
		country_code: mdlObjFasc(2, true, 100, null),
		user_contact_no: mdlObjFasc(2, true, 15, null),
		user_country_id: { ...int_11_DEFAULT_NULL },
		user_state_id: { ...int_11_DEFAULT_NULL },
		user_city_id: { ...int_11_DEFAULT_NULL },
		user_city_name: { ...varchar_255_DEFAULT_NULL },
		user_state_name: { ...varchar_255_DEFAULT_NULL },
		user_country_name: { ...varchar_255_DEFAULT_NULL },
		user_city_other: { ...varchar_255_DEFAULT_NULL },
		user_address: DataTypes.TEXT,
		zip_code: { ...int_11_NOT_NULL },
		user_credit: { ...int_11_DEFAULT_NULL },
		user_gender: mdlObjFasc(2, true, 25, null),
		user_dob: { ...date_DEFAULT_NULL },
		user_status: { ...tinyint_4_DEFAULT_NULL },
		user_photo: { ...varchar_255_DEFAULT_NULL },
		user_image_update: { ...datetime_DEFAULT_NULL },
		user_image_url: { ...varchar_255_DEFAULT_NULL },
		user_created: { ...datetime_DEFAULT_NULL },
		user_updated: { ...datetime_DEFAULT_NULL },
		user_package_expire: { ...date_DEFAULT_NULL },
		user_qual_g_id: mdlObjFasc(1, true, 0, 0),
		user_qual_pg_id: { ...int_11_DEFAULT_NULL },
		user_qual: { ...varchar_255_DEFAULT_NULL },
		prev_exam_percentage: mdlObjFasc(2, true, 100, null),
		user_location: { ...varchar_255_DEFAULT_NULL },
		user_about: DataTypes.TEXT,
		org_name: { ...varchar_255_DEFAULT_NULL },
		job_title: { ...varchar_255_DEFAULT_NULL },
		subject: { ...varchar_255_DEFAULT_NULL },
		user_qual_year: { ...varchar_255_DEFAULT_NULL },
		group_no: mdlObjFasc(2, true, 25, null),
		stream: { ...varchar_255_DEFAULT_NULL },
		user_college_name: { ...varchar_255_DEFAULT_NULL },
		user_school_name: { ...varchar_255_DEFAULT_NULL },
		year_of_passing: { ...varchar_255_DEFAULT_NULL },
		gre_test_enable: { ...tinyint_4_DEFAULT_NULL },
		select_gre_test: { ...varchar_255_DEFAULT_NULL },
		delete_flag: mdlObjFasc(1, true, 0, null),
		collaboration_status: {
			type: DataTypes.ENUM("active", "inactive", "ignore"),
			allowNull: false,
			defaultValue: "inactive",
		},
		import_type: mdlObjFasc(2, true, 100, null),
		source: { ...varchar_255_DEFAULT_NULL },
		register_gcm_id: DataTypes.TEXT,
		enable_app_test: { ...tinyint_4_DEFAULT_NULL },
		enable_app_test_pin: { ...varchar_255_DEFAULT_NULL },
		enable_learno_exam_ids: { ...varchar_255_NOT_NULL_DEFAULT_none },
		settle_amount: { ...int_11_DEFAULT_NULL },
		paid_amount: { ...double_DEFAULT_NULL },
		ebook_paid_amount: { ...double_DEFAULT_NULL },
		purchase_product_date: { ...datetime_DEFAULT_NULL },
		mob_paid_amount: { ...double_DEFAULT_NULL },
		fee_amount: { ...double_DEFAULT_NULL },
		flag_web_access: mdlObjFasc(1, false, 0, 0),
		flag_purchase_ebook: { ...varchar_255_DEFAULT_NULL },
		purchase_ebook_date: { ...datetime_DEFAULT_NULL },
		flag_purchase_video: { ...varchar_255_DEFAULT_NULL },
		purchase_video_date: { ...datetime_DEFAULT_NULL },
		app_version: { ...varchar_255_DEFAULT_NULL },
		app_id: makeUniqueKey({ ...varchar_255_DEFAULT_NULL }),
		access_allow: {
			type: DataTypes.ENUM("Yes", "No"),
			allowNull: true,
			defaultValue: null,
			comment: "No - MOBILE ACCESS NOT ALLOW, Yes - MOBILE ACCESS ALLOW",
		},
		enable_inst_tab: { ...varchar_255_DEFAULT_NULL },
		enable_video_category: { ...varchar_255_NOT_NULL_DEFAULT_none },
		enable_notes_category: { ...varchar_255_NOT_NULL_DEFAULT_none },
		deleted_inst_id: { ...int_11_DEFAULT_NULL },
		deleted_email: { ...varchar_255_DEFAULT_NULL },
		assign_ebook_ids: { ...varchar_255_NOT_NULL_DEFAULT_none },
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "Comes from group management tbl",
		},
		enable_short_test: { ...varchar_255_NOT_NULL_DEFAULT_none },
	},
	{
		sequelize,
		modelName: "user_detail",
		charset: "latin1",
		collate: "latin1_swedish_ci",
		// don't add the timestamp attributes (updatedAt, createdAt)
		timestamps: false,
		// If don't want createdAt
		createdAt: false,
		// If don't want updatedAt
		updatedAt: false,
		// your other configuration here
	}
);
module.exports = user_detail_mdl;
