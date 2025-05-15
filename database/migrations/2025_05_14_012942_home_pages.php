<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('home_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title_seo')->nullable();
            $table->text('description_seo')->nullable();
            $table->string('image_seo')->nullable();

            // Services
            $table->text('service_description_01')->nullable();
            $table->string('service_image_01')->nullable();
            $table->text('service_description_02')->nullable();
            $table->string('service_image_02')->nullable();
            $table->text('service_description_03')->nullable();
            $table->string('service_image_03')->nullable();
            $table->text('service_description_04')->nullable();
            $table->string('service_image_04')->nullable();
            $table->text('service_description_general')->nullable();
            $table->string('service_link_general')->nullable();

            // Quote
            $table->string('quote_image')->nullable();
            $table->string('quote_title')->nullable();
            $table->text('quote_description')->nullable();
            $table->string('quote_sender_email')->nullable();

            // Solutions
            $table->string('solution_title_general')->nullable();
            $table->string('solution_image_01')->nullable();
            $table->text('solution_description_01')->nullable();
            $table->string('solution_link_01')->nullable();
            $table->string('solution_image_02')->nullable();
            $table->text('solution_description_02')->nullable();
            $table->string('solution_link_02')->nullable();
            $table->string('solution_image_03')->nullable();
            $table->text('solution_description_03')->nullable();
            $table->string('solution_link_03')->nullable();
            $table->string('solution_image_04')->nullable();
            $table->text('solution_description_04')->nullable();
            $table->string('solution_link_04')->nullable();

            // Projects
            $table->string('project_title_general')->nullable();

            // Customers
            $table->string('customer_title_general')->nullable();
            $table->json('customer_images_gallery')->nullable();

            // Certifications
            $table->string('certification_title_general')->nullable();
            $table->text('certification_description_general')->nullable();
            $table->string('certification_link_general')->nullable();
            $table->string('certification_image_general')->nullable();
            $table->string('certification_image_01')->nullable();
            $table->string('certification_title_01')->nullable();
            $table->text('certification_description_01')->nullable();
            $table->string('certification_image_02')->nullable();
            $table->string('certification_title_02')->nullable();
            $table->text('certification_description_02')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_pages');
    }
};
