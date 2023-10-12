name =

migrate:
	npx prisma migrate dev --name init

setup:
	npx prisma migrate deploy &&\
    npx prisma generate &&\
    npx ts-node ./prisma/seeds/scrap_seed.ts &&\
    npm start