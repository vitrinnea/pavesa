<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CoffeTour>
 */
class CoffeTourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => '',
            'banner' => '',
            'title' =>'',
            'tour_gallery' => '',
            'title_form' =>'',
            'title_services' => '',
            'title_service_01' => '',
            'content_service_01' => '',
            'title_service_02' => '',
            'content_service_02' => '',
            'title_service_03' => '',
            'content_service_03' => '',
            'title_service_04' => '',
            'content_service_04' => '',
            'title_service_05' => '',
            'content_service_05' => '',
            'title_service_06' => '',
            'content_service_06' => '',
            'title_seo' => '',
            'description_seo' => '',
            'keywords_seo' => '',
            'image_seo'=> '',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
