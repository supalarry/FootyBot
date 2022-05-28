/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_code` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "first_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "language_code" VARCHAR(10) NOT NULL,
ADD COLUMN     "telegram_id" INTEGER NOT NULL,
ADD COLUMN     "username" VARCHAR(255) NOT NULL;
