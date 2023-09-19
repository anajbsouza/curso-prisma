CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"createdAt" DATE DEFAULT CURRENT_DATE,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
)