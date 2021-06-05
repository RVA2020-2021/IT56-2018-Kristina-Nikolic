--FAKULTET

INSERT INTO "fakultet"("id", "naziv", "sediste") 
VALUES (nextval('fakultet_seq'), 'Fakultet tehnickih nauka', 'Novi Sad');

INSERT INTO "fakultet"("id", "naziv", "sediste")
VALUES (nextval('fakultet_seq'), 'Medicinski fakultet', 'Novi Sad');

INSERT INTO "fakultet"("id", "naziv", "sediste")
VALUES (nextval('fakultet_seq'), 'Ekonomski fakultet', 'Kragujevac');

INSERT INTO "fakultet"("id", "naziv", "sediste") 
VALUES (nextval('fakultet_seq'), 'Poljoprivredni fakultet', 'Novi Sad');

INSERT INTO "fakultet"("id", "naziv", "sediste") 
VALUES (nextval('fakultet_seq'), 'Pravni fakultet', 'Beograd');

INSERT INTO "fakultet"("id", "naziv", "sediste") 
VALUES (nextval('fakultet_seq'), 'Filozofski fakultet', 'Nis');

INSERT INTO "fakultet"("id", "naziv", "sediste") 
VALUES (nextval('fakultet_seq'), 'Prirodno matematicki fakultet', 'Novi Sad');

--test red
INSERT INTO "fakultet"("id", "naziv", "sediste")
VALUES (-100, 'TestNaz', 'TestSed');

--STATUS

INSERT INTO "status"("id", "naziv", "oznaka")
VALUES (nextval('status_seq'), 'Budzetski student', 'BuS');

INSERT INTO "status"("id", "naziv", "oznaka")
VALUES (nextval('status_seq'), 'Samofinansirajuci student', 'SfS');

--test red
INSERT INTO "status"("id", "naziv", "oznaka")
VALUES (-100, 'TestNaz', 'TestOzn');

-- DEPARTMAN 

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za industrijsko inzenjerstvo i menadzment', 'IIS', 1);
INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za racunarstvo i automatiku', 'RA', 1);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za anatomiju', 'AN', 2);
INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za stomatologiju sa maksilofacijalnom hirurgijom', 'SSMH', 2);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za opstu ekonomiju i privredni razvoj', 'OEPR', 3);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za stocarstvo', 'ST', 4);
INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za ratarstvo i povrtarstvo', 'RPP', 4);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za ustavno pravo', 'UP', 5);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za srpsku knjizevnost', 'SK', 6);

INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (nextval('departman_seq'), 'Departman za biologiju i ekologiju', 'BIE', 7);

--test red
INSERT INTO "departman"("id", "naziv", "oznaka", "fakultet")
VALUES (-100, 'TestNaz', 'TestOzn', 1);


--STUDENT

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Pera', 'Peric', 'IT101/2019', 1, 1);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Iva', 'Ivic', 'IT108/2021', 2, 1);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Mila', 'Milic', 'RA28/2021', 2, 2);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Nada', 'Nadic', 'AN10/2020', 1, 3);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Mina', 'Minic', 'SSMH5/2017', 1, 4);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Lana', 'Minic', 'OERP2/2018', 2, 5);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Milos', 'Milic', 'ST1/2016', 2, 6);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Marko', 'Markovic', 'RPP208/2020', 1, 7);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Ana', 'Anicic', 'UP8/2018', 1, 8);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Ana', 'Momcilovic', 'SK9/2019', 2, 9);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (nextval('student_seq'), 'Srna', 'Srnic', 'BIE8/2021', 1, 10);

--test red
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
VALUES (-100, 'TesIme', 'TestPrezime', 'TestIndeks', 1, 1);
