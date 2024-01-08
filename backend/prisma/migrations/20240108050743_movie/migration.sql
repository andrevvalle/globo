/*
  Warnings:

  - You are about to drop the `Actor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActorToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DirectorToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenreToMovie` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[genre]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `director` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ActorToMovie" DROP CONSTRAINT "_ActorToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActorToMovie" DROP CONSTRAINT "_ActorToMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_DirectorToMovie" DROP CONSTRAINT "_DirectorToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_DirectorToMovie" DROP CONSTRAINT "_DirectorToMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToMovie" DROP CONSTRAINT "_GenreToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToMovie" DROP CONSTRAINT "_GenreToMovie_B_fkey";

-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "actors" TEXT[],
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL;

-- DropTable
DROP TABLE "Actor";

-- DropTable
DROP TABLE "Director";

-- DropTable
DROP TABLE "Genre";

-- DropTable
DROP TABLE "_ActorToMovie";

-- DropTable
DROP TABLE "_DirectorToMovie";

-- DropTable
DROP TABLE "_GenreToMovie";

-- CreateIndex
CREATE UNIQUE INDEX "movies_genre_key" ON "movies"("genre");
