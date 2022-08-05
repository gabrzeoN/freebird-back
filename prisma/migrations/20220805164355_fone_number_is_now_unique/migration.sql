/*
  Warnings:

  - A unique constraint covering the columns `[foneNumber]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_foneNumber_key" ON "users"("foneNumber");
