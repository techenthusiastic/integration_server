import { Model } from "sequelize";
//
import { sequelize, mdlObjFasc } from "./mdl_obj_fascilator";
//
class institute_detail_mdl extends Model {}
// Prepare Object for most used model-objects
// 3rd parameter 0 means to say leave as default
const int_11_DEFAULT_NULL = mdlObjFasc(1, true, 0, null);
const int_11_NOT_NULL = mdlObjFasc(1, false);
const tinyint_4_DEFAULT_NULL = mdlObjFasc(1, true, 0, null); // is actually int_11_default_null - implement a way if you know - bcoz of typescript
const date_DEFAULT_NULL = mdlObjFasc(4, true, 0, null);
//
const int_2_DEFAULT_NULL = mdlObjFasc(1, true, 0, null); // is actually int_11_default_null - implement a way if you know - bcoz of typescript
//
const varchar_60_DEFAULT_NULL = mdlObjFasc(2, true, 60, null);
const varchar_10_DEFAULT_NULL = mdlObjFasc(2, true, 10, null);
const varchar_150_DEFAULT_NULL = mdlObjFasc(2, true, 150, null);
const varchar_5_DEFAULT_NULL = mdlObjFasc(2, true, 5, null);
//
const txt_DEFAULT_NONE = mdlObjFasc(7, false, 0, false);
const char_9_DEFULT_NULL = mdlObjFasc(8, true, 9, null);
//
institute_detail_mdl.init(
	{
		id: {
			...int_11_NOT_NULL,
			primaryKey: true, // set as primary key
			autoIncrement: true, // set auto-increment
		},
		name: { ...varchar_150_DEFAULT_NULL },
		description: { ...txt_DEFAULT_NONE },
		address: { ...txt_DEFAULT_NONE },
		zip_code: mdlObjFasc(2, true, 6, null),
		ph_number: { ...varchar_60_DEFAULT_NULL },
		mob_number: { ...varchar_60_DEFAULT_NULL },
		email: { ...varchar_150_DEFAULT_NULL },
		alt_email: { ...varchar_150_DEFAULT_NULL },
		no_of_branches: { ...int_11_DEFAULT_NULL },
		no_of_students: { ...int_11_DEFAULT_NULL },
		courses_details: { ...varchar_10_DEFAULT_NULL },
		city: { ...varchar_10_DEFAULT_NULL },
		state: { ...varchar_10_DEFAULT_NULL },
		country: { ...varchar_10_DEFAULT_NULL },
		allowed_city: { ...varchar_5_DEFAULT_NULL },
		institute_city_other: { ...varchar_10_DEFAULT_NULL },
		institute_image: { ...varchar_10_DEFAULT_NULL },
		number_of_records: { ...int_11_DEFAULT_NULL },
		institute_url: { ...varchar_10_DEFAULT_NULL },
		website_home_url: { ...varchar_10_DEFAULT_NULL },
		buy_url: { ...varchar_10_DEFAULT_NULL },
		type: { ...varchar_5_DEFAULT_NULL },
		status: { ...int_11_DEFAULT_NULL },
		facility_description: { ...txt_DEFAULT_NONE },
		facility_pdf: { ...varchar_10_DEFAULT_NULL },
		facility_url: { ...varchar_10_DEFAULT_NULL },
		placement_description: { ...txt_DEFAULT_NONE },
		placement_pdf: { ...varchar_10_DEFAULT_NULL },
		placement_url: { ...varchar_10_DEFAULT_NULL },
		activity_description: { ...txt_DEFAULT_NONE },
		activity_pdf: { ...varchar_10_DEFAULT_NULL },
		activity_url: { ...varchar_10_DEFAULT_NULL },
		admission_description: { ...txt_DEFAULT_NONE },
		admission_pdf: { ...varchar_10_DEFAULT_NULL },
		admission_url: { ...varchar_10_DEFAULT_NULL },
		industry_description: { ...txt_DEFAULT_NONE },
		industry_pdf: { ...varchar_10_DEFAULT_NULL },
		industry_url: { ...varchar_10_DEFAULT_NULL },
		faculty_description: { ...txt_DEFAULT_NONE },
		faculty_url: { ...varchar_10_DEFAULT_NULL },
		faculty_pdf: { ...varchar_10_DEFAULT_NULL },
		industry_tieup_description: { ...txt_DEFAULT_NONE },
		industry_tieup_url: { ...varchar_10_DEFAULT_NULL },
		industry_tieup_pdf: { ...varchar_10_DEFAULT_NULL },
		pdf_title1: { ...varchar_10_DEFAULT_NULL },
		pdf1: { ...varchar_10_DEFAULT_NULL },
		pdf_title2: { ...varchar_10_DEFAULT_NULL },
		pdf2: { ...varchar_10_DEFAULT_NULL },
		pdf_title3: { ...varchar_10_DEFAULT_NULL },
		pdf3: { ...varchar_10_DEFAULT_NULL },
		pdf_title4: { ...varchar_10_DEFAULT_NULL },
		pdf4: { ...varchar_10_DEFAULT_NULL },
		pdf_title5: { ...varchar_10_DEFAULT_NULL },
		pdf5: { ...varchar_5_DEFAULT_NULL },
		pdf6: { ...varchar_5_DEFAULT_NULL },
		pdf_title6: { ...varchar_5_DEFAULT_NULL },
		pdf7: { ...varchar_10_DEFAULT_NULL },
		pdf_title7: { ...varchar_10_DEFAULT_NULL },
		pdf8: { ...varchar_10_DEFAULT_NULL },
		pdf_title8: { ...varchar_10_DEFAULT_NULL },
		pdf9: { ...varchar_10_DEFAULT_NULL },
		pdf_title9: { ...varchar_10_DEFAULT_NULL },
		pdf10: { ...varchar_60_DEFAULT_NULL },
		pdf_title10: { ...varchar_60_DEFAULT_NULL },
		disp_profile_flag: mdlObjFasc(8, true, 21, null),
		apply_filter_test: { ...char_9_DEFULT_NULL },
		multi_attempt: { ...char_9_DEFULT_NULL },
		monthly_sms_limit: { ...int_11_DEFAULT_NULL },
		enable_exam_menu: { ...txt_DEFAULT_NONE },
		enable_tab_menu: { ...varchar_150_DEFAULT_NULL },
		app_text: { ...txt_DEFAULT_NONE },
		app_url: { ...varchar_10_DEFAULT_NULL },
		flag_faq: { ...tinyint_4_DEFAULT_NULL },
		flag_article: { ...tinyint_4_DEFAULT_NULL },
		flag_notification: { ...tinyint_4_DEFAULT_NULL },
		flag_foreign_edu: { ...tinyint_4_DEFAULT_NULL },
		flag_knowledge_zone: { ...tinyint_4_DEFAULT_NULL },
		flag_ebook: { ...tinyint_4_DEFAULT_NULL },
		flag_more_exams: { ...tinyint_4_DEFAULT_NULL },
		flag_footer: { ...tinyint_4_DEFAULT_NULL },
		flag_video: { ...tinyint_4_DEFAULT_NULL },
		flag_schol_test: { ...tinyint_4_DEFAULT_NULL },
		flag_ad: { ...tinyint_4_DEFAULT_NULL },
		flag_wiki: { ...tinyint_4_DEFAULT_NULL },
		flag_ask_question: { ...tinyint_4_DEFAULT_NULL },
		flag_career_counselling: { ...tinyint_4_DEFAULT_NULL },
		flag_web_management: { ...tinyint_4_DEFAULT_NULL },
		flag_app_management: { ...tinyint_4_DEFAULT_NULL },
		flag_test_management: { ...tinyint_4_DEFAULT_NULL },
		flag_gmail_login: { ...tinyint_4_DEFAULT_NULL },
		flag_college_name: { ...tinyint_4_DEFAULT_NULL },
		flag_school_name: { ...tinyint_4_DEFAULT_NULL },
		flag_dynamic_blocks: { ...varchar_60_DEFAULT_NULL },
		flag_inst_type: { ...tinyint_4_DEFAULT_NULL },
		flag_web_pkg: { ...tinyint_4_DEFAULT_NULL },
		user_package_count: mdlObjFasc(1, true, 0, null),
		deactivate_test_count: { ...int_11_DEFAULT_NULL },
		amount: { ...int_11_DEFAULT_NULL },
		institute_hash: { ...varchar_60_DEFAULT_NULL },
		inst_subdomain: { ...varchar_60_DEFAULT_NULL },
		date_test_expiry: { ...date_DEFAULT_NULL },
		date_app_expiry: { ...date_DEFAULT_NULL },
		business_type: { ...char_9_DEFULT_NULL },
		inst_redirect_url: { ...varchar_60_DEFAULT_NULL },
		inst_redirect_host: varchar_60_DEFAULT_NULL,
		flag_inst_video: { ...tinyint_4_DEFAULT_NULL },
		flag_lead: { ...tinyint_4_DEFAULT_NULL },
		inst_basic_detail: { ...txt_DEFAULT_NONE },
		institute_courses: { ...varchar_150_DEFAULT_NULL },
		inst_web_profiler: { ...tinyint_4_DEFAULT_NULL },
		flag_pay_online: { ...tinyint_4_DEFAULT_NULL },
		flag_institute_management: { ...tinyint_4_DEFAULT_NULL },
		ols_expired: { ...varchar_10_DEFAULT_NULL },
		app_expired: { ...varchar_10_DEFAULT_NULL },
		web_expired: { ...varchar_10_DEFAULT_NULL },
		ols_expired_date: { ...varchar_10_DEFAULT_NULL },
		app_expired_date: { ...varchar_10_DEFAULT_NULL },
		web_expired_date: { ...varchar_10_DEFAULT_NULL },
		flag_landing_page: { ...tinyint_4_DEFAULT_NULL },
		institute_plan: { ...varchar_5_DEFAULT_NULL },
		add_date: { ...date_DEFAULT_NULL },
		flag_version: { ...varchar_5_DEFAULT_NULL },
		enable_ebook_ids: mdlObjFasc(2, true, 765, null),
		speedlabs_status: { ...int_2_DEFAULT_NULL },
		speedlabs_link: { ...varchar_60_DEFAULT_NULL },
		ekart_status: { ...int_2_DEFAULT_NULL },
		liveclass_status: { ...int_2_DEFAULT_NULL },
	},
	{
		sequelize,
		modelName: "institute_details",
		charset: "utf8",
		collate: "utf8_unicode_ci",
		// don't add the timestamp attributes (updatedAt, createdAt)
		timestamps: false,
		createdAt: false,
		// If don't want updatedAt
		updatedAt: false,
		// your other configuration here
	}
);
module.exports = institute_detail_mdl;
