/*
  Warnings:

  - Added the required column `tipo_patologia` to the `muestras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "muestras" ADD COLUMN     "tipo_patologia" VARCHAR(30) NOT NULL;
