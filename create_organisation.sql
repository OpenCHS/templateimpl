select create_db_user('myorganisation', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
values ('My Organisation', 'myorganisation', '7f84e96f-2517-4b00-9098-a86ad696bef3', null);