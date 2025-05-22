<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('concreto_pages', function (Blueprint $table) {
            $table->id();

            // SEO
            $table->string('title_seo')->nullable();
            $table->text('description_seo')->nullable();
            $table->string('image_seo')->nullable();

            // Secciones
            $table->string('section_title_01')->nullable();
            $table->text('section_description_01')->nullable();
            $table->string('section_image_01')->nullable();
            $table->string('section_title_02')->nullable();

            // Soluciones
            $table->string('solution_image_01')->nullable();
            $table->string('solution_title_01')->nullable();
            $table->text('solution_description_01')->nullable();
            $table->string('solution_image_02')->nullable();
            $table->string('solution_title_02')->nullable();
            $table->text('solution_description_02')->nullable();
            $table->string('solution_image_03')->nullable();
            $table->string('solution_title_03')->nullable();
            $table->text('solution_description_03')->nullable();
            $table->string('solution_image_04')->nullable();
            $table->string('solution_title_04')->nullable();
            $table->text('solution_description_04')->nullable();

            // Más secciones
            $table->string('section_title_03')->nullable();
            $table->string('section_image_03')->nullable();
            $table->string('section_title_04')->nullable();
            $table->string('section_subtitle_04')->nullable();
            $table->text('section_description_04')->nullable();
            $table->string('section_image_04')->nullable();
            $table->string('section_title_05')->nullable();
            $table->string('section_subtitle_05')->nullable();
            $table->text('section_description_05')->nullable();
            $table->string('section_image_05')->nullable();
            $table->string('section_title_06')->nullable();

            // Ventajas
            $table->string('advantage_01')->nullable();
            $table->string('advantage_02')->nullable();
            $table->string('advantage_03')->nullable();
            $table->string('advantage_04')->nullable();
            $table->string('advantage_05')->nullable();

            // Imágenes adicionales
            $table->string('section_image_06')->nullable();
            $table->string('section_image_07')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('concreto_pages');
    }
};
