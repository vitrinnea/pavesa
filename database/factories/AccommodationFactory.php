<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Accommodation>
 */
class AccommodationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // banner
            'banner' => '',
            'title' => '',
            'slug' => '',
            //accommodations
            'image_accommodation' => '',
            'title_accommodation' => '',
            'description_accommodation' => '',
            //Spaces
            'title_spaces' => '',
            'image_space_01' => '',
            'title_space_01' => '',
            'description_space_01' => '',
            'image_space_02' => '',
            'title_space_02' => '',
            'description_space_02' => '',
            'image_space_03' => '',
            'title_space_03' => '',
            'description_space_03' => '',
            //Section
            'image_section' => '',
            'title_section' => '',
            'description_section' => '',
            // title form
            'title_form' => '',
            'quoter_destination' => '',
            // SEO
            'title_seo' => '',
            'description_seo' => '',
            'keywords_seo' => '',
            'image_seo' => '',
        ];
    }
}
