// 1) Backup completo do banco Detran
mongodump --db Detran --out ./backup_detran



// 2) Backup da coleção proprietarios
mongodump --db Detran --collection proprietarios --out ./backup_proprietarios



// 3) Restaurar backup completo do banco Detran
mongorestore ./backup_detran ou mongorestore --db Detran ./backup_detran/Detran



// 4) Exportar multas de 2025
// Aqui é mongoexport, não mongodump, porque há filtro.
mongoexport --db Detran --collection multas --query '{"ano":2025}' --out ./backup_multas2025/multas.json



//5) Restaurar multas removendo os dados atuais
//O parâmetro importante é --drop.
mongorestore --db Detran --collection multas --drop ./backup_multas2025



// 6) Backup do banco Hospital em arquivo archive
mongodump --db Hospital --archive=hospital.archive



// 7) Restaurar usando hospital.archive
mongorestore --archive=hospital.archive



// 8) Backup completo do Petshop com archive + gzip
mongodump --db Petshop --archive=petshop.gz --gzip



// 9) Restaurar apenas a coleção animal
mongorestore --db Petshop --collection animal ./backup_petshop/Petshop/animal.bson 
// SE PEDIR SÓ O CONCEITO 
mongorestore --db Petshop --collection animal ./backup_petshop



// 10) Backup diário usando a data atual

//Linux/macOS:

mongodump --db Detran --out ./backup_$(date +%F)

//ou

mongodump --db Detran --out ./backup_$(date +%Y-%m-%d)

//Produz:

backup_2026-06-03
backup_2026-06-04
backup_2026-06-05