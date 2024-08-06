/*
  Warnings:

  - You are about to drop the `_CourseToTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `tags` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_CourseToTag" DROP CONSTRAINT "_CourseToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToTag" DROP CONSTRAINT "_CourseToTag_B_fkey";

-- DropTable
DROP TABLE "_CourseToTag";

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");
