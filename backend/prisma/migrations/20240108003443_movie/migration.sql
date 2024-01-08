/*
  Warnings:

  - Added the required column `synopsis` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "synopsis" TEXT NOT NULL;
