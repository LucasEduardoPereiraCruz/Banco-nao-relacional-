//1 
mongoexport --db detran --collection proprietario --out proprietarios.json

// 2 
mongoexport --db detran --collection proprietario --type=csv --fields nome,cpf,endereco --out proprietarios.csv

// 3 
mongoimport --db hospital --collection paciente --file proprietarios.json

// 4
mongoimport --db petshop --collection cliente --type=csv --headerline --file proprietarios.csv

// 5 
mongoexport --db detran --collection multa --query '{"local":"Jaú"}' --out multas_jau.json

// 6 
mongoexport --db detran --collection infracao --sort '{ "valor": -1 }' --limit 5 --out top5_infracoes.json

// 7 
mongoexport --db detran --collection agente --jsonArray --out agentes.json

// 8 
mongoexport --host mongo.detran.sp.gov.br --port 27017 --username admin --password 1234 --db detran --collection agente --out agentes_remoto.json