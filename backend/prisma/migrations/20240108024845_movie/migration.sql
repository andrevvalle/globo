/*
  Warnings:

  - Added the required column `authorId` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "authorId" TEXT NOT NULL;
