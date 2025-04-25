<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeSetting>
 */
class HomeSettingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title_reason'=>'',
            'bg_reason'=>'',
            'title_galery'=>'',
            'title_form'=>'',
            'quoter_destination'=>'',
            // SEO
            'title_seo'=>'',
            'description_seo'=>'',
            'keywords_seo'=>'',
            'image_seo'=>'',
        ];
    }
}
