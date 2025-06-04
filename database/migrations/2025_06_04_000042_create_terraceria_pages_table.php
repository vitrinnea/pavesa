<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('terraceria_pages', function (Blueprint $table) {
            $table->id();

            // SEO
            $table->string('title_seo')->nullable();
            $table->text('description_seo')->nullable();
            $table->string('image_seo')->nullable();

            // Sección 1
            $table->string('section_image_01')->nullable();
            $table->string('section_title_01')->nullable();
            $table->text('section_description')->nullable();

            // Solución Sección 2
            $table->string('section_title_02')->nullable();
            $table->string('solucion_image_01')->nullable();
            $table->string('solucion_title_01')->nullable();
            $table->string('solucion_image_02')->nullable();
            $table->string('solucion_title_02')->nullable();
            $table->string('solucion_image_03')->nullable();
            $table->string('solucion_title_03')->nullable();
            $table->string('solucion_image_04')->nullable();
            $table->string('solucion_title_04')->nullable();

            // Sección 3
            $table->string('section_title_03')->nullable();
            $table->string('section_image_03')->nullable();
            $table->string('alcance_image_01')->nullable();
            $table->string('alcance_title_01')->nullable();
            $table->string('alcance_image_02')->nullable();
            $table->string('alcance_title_02')->nullable();
            $table->string('alcance_image_03')->nullable();
            $table->string('alcance_title_03')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('terraceria_pages');
    }
};