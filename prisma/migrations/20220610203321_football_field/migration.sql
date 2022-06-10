-- CreateTable
CREATE TABLE "FootballField" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,

    CONSTRAINT "FootballField_pkey" PRIMARY KEY ("id")
);
