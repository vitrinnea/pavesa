<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //section 1
            'title' => '',
            'slug' => '',
            'description' => '',
            'image' => '',
            // Section 2
            'title_instalaction' => '',
            //instalations
            'image_instalation_01' => '',
            'title_instalation_01' => '',
            'image_instalation_02' => '',
            'title_instalation_02' => '',
            'image_instalation_03' => '',
            'title_instalation_03' => '',
            'image_instalation_04' => '',
            'title_instalation_04' => '',
            'image_instalation_05' => '',
            'title_instalation_05' => '',
            //Section 3
            'title_salon' => '',
            //Salons
            'image_salon_01' => '',
            'title_salon_01' => '',
            'image_salon_02' => '',
            'title_salon_02' => '',
            'image_salon_03' => '',
            'title_salon_03' => '',
            'image_salon_04' => '',
            'title_salon_04' => '',
            'image_salon_05' => '',
            'title_salon_05' => '',
            'image_salon_06' => '',
            'title_salon_06' => '',
            // SEO
            'title_seo' => '',
            'description_seo' => '',
            'keywords_seo' => '',
            'image_seo' => '',
        ];
    }
}
