

const myvar = {
	API_URL: 'http://52.63.73.231:4000',
	admin_pre: '/admin',
	courses_filter: {
		uni: ['UNSW','UTS','USYD'],
		subjects: ['Electrical', 'Accorole_id unting','Business',
			'Mechanical','Civil & Environmental','Sciences',
			'Others'],
		institutions:['厚道','首选','海澳']
	},
	institution_id: sessionStorage.institution_id,
	username: sessionStorage.username,
	roleType:['Admin', 'Manager', 'Staff', 'Sales'],
	permission:{
		userCRUD: sessionStorage.role_id == 1 || sessionStorage.role_id == 2,
		orderCUD: sessionStorage.role_id == 1 || sessionStorage.role_id == 2 || sessionStorage.role_id == 8,
		teacher: sessionStorage.role_id == 1 || sessionStorage.role_id == 2,
		courseCUD: sessionStorage.role_id == 1 || sessionStorage.role_id == 2,
		locationCUD: sessionStorage.role_id == 1 || sessionStorage.role_id == 2,
	}




}
export default myvar;
