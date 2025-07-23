/*
  Warnings:

  - You are about to drop the column `observaciones` on the `informes` table. All the data in the column will be lost.
  - You are about to drop the `informesvalidados` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_informe]` on the table `muestras` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `descripcion` to the `informes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_informe` to the `informes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_informe` to the `muestras` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "informesvalidados" DROP CONSTRAINT "fk_informe_validado";

-- AlterTable
ALTER TABLE "informes" DROP COLUMN "observaciones",
ADD COLUMN     "descripcion" VARCHAR(255) NOT NULL,
ADD COLUMN     "tipo_informe" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "muestras" ADD COLUMN     "id_informe" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ALTER COLUMN "telefono" DROP DEFAULT,
ALTER COLUMN "telefono" SET DATA TYPE VARCHAR(50);

-- DropTable
DROP TABLE "informesvalidados";

-- CreateIndex
CREATE UNIQUE INDEX "muestras_id_informe_key" ON "muestras"("id_informe");

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_id_informe_fkey" FOREIGN KEY ("id_informe") REFERENCES "informes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
