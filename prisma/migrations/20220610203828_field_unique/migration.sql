/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `FootballField` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link]` on the table `FootballField` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FootballField_name_key" ON "FootballField"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FootballField_link_key" ON "FootballField"("link");
