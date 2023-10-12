-- CreateTable
CREATE TABLE "scrapped" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image_src" TEXT NOT NULL,

    CONSTRAINT "scrapped_pkey" PRIMARY KEY ("id")
);
