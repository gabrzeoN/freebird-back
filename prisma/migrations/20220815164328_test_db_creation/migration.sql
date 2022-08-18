/*
  Warnings:

  - You are about to drop the `rents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_locationId_fkey";

-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_renterId_fkey";

-- DropTable
DROP TABLE "rents";
