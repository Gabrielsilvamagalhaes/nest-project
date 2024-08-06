-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);
