-- CreateTable
CREATE TABLE "informes" (
    "id" BIGSERIAL NOT NULL,
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "observaciones" TEXT,

    CONSTRAINT "informes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "informesvalidados" (
    "id" BIGSERIAL NOT NULL,
    "id_informe" BIGINT NOT NULL,

    CONSTRAINT "informesvalidados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caja" (
    "id" BIGSERIAL NOT NULL,
    "fecha" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo_transaccion" VARCHAR(20) NOT NULL,
    "categoria" VARCHAR(30) NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "fecha_transaccion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descripcion" VARCHAR(255),
    "id_muestra" BIGINT,

    CONSTRAINT "caja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materiales" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "materiales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "usuario_id" BIGINT NOT NULL,
    "matricula" VARCHAR(30) NOT NULL,
    "especialidad" VARCHAR(30),

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "muestra_material" (
    "id_muestra" BIGINT NOT NULL,
    "id_material" BIGINT NOT NULL,

    CONSTRAINT "muestra_material_pkey" PRIMARY KEY ("id_muestra","id_material")
);

-- CreateTable
CREATE TABLE "muestras" (
    "id" BIGSERIAL NOT NULL,
    "fecha_ingreso" DATE NOT NULL,
    "fecha_entrega" DATE NOT NULL,
    "nro_autorizacion" VARCHAR(50) NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "tipo_cobertura" BOOLEAN NOT NULL DEFAULT true,
    "id_secretario" BIGINT NOT NULL,
    "id_paciente" BIGINT NOT NULL,
    "id_medico" BIGINT NOT NULL,

    CONSTRAINT "muestras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "usuario_id" BIGINT NOT NULL,
    "fecha_nacimiento" DATE,
    "telefono" VARCHAR(20) NOT NULL DEFAULT '',

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "secretarios" (
    "usuario_id" BIGINT NOT NULL,

    CONSTRAINT "secretarios_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "apellido" VARCHAR(30) NOT NULL,
    "documento" VARCHAR(30) NOT NULL,
    "correo" VARCHAR(30) NOT NULL,
    "contrasenia" VARCHAR(100) NOT NULL,
    "tipo_usuario" VARCHAR(30) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_documento_key" ON "usuarios"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- AddForeignKey
ALTER TABLE "informesvalidados" ADD CONSTRAINT "fk_informe_validado" FOREIGN KEY ("id_informe") REFERENCES "informes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "caja" ADD CONSTRAINT "caja_id_muestra_fkey" FOREIGN KEY ("id_muestra") REFERENCES "muestras"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muestra_material" ADD CONSTRAINT "muestra_material_id_material_fkey" FOREIGN KEY ("id_material") REFERENCES "materiales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muestra_material" ADD CONSTRAINT "muestra_material_id_muestra_fkey" FOREIGN KEY ("id_muestra") REFERENCES "muestras"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_id_medico_fkey" FOREIGN KEY ("id_medico") REFERENCES "medicos"("usuario_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "pacientes"("usuario_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_id_secretario_fkey" FOREIGN KEY ("id_secretario") REFERENCES "secretarios"("usuario_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "pacientes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "secretarios" ADD CONSTRAINT "secretarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
