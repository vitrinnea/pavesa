<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ExperienceGastronomic>
 */
class ExperienceGastronomicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'banner' => '',
            'title' => '',
            'slug' => '',
            'image_gastronomy' => '',
            'title_gastronomy' => '',
            'description_gastronomy' => '',
            'image_gastronomy_02' => '',
            'title_gastronomy_02' => '',
            'description_gastronomy_02' => '',
            'image_gastronomy_03' => '',
            'title_gastronomy_03' => '',
            'description_gastronomy_03' => '',
            'image_gastronomy_04' => '',
            'title_gastronomy_04' => '',
            'description_gastronomy_04' => '',
            'title_form' => '',
            'quoter_destination' => '',
            'gallery' => '',
            'title_seo' => '',
            'description_seo' => '',
            'keywords_seo' => '',
            'image_seo' => '',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
