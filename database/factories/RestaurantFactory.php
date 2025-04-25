<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class RestaurantFactory extends Factory
{
    protected $model = Restaurant::class;

    public function definition()
    {
        return [
            'banner' => '',
            'title' => '',
            'slug' => '',
            'image_restaurant' => '',
            'title_restaurant' => '',
            'description_restaurant' => '',
            'title_menu' => '',
            'image_menu_01' => '',
            'title_menu_01' => '',
            'description_menu_01' => '',
            'image_menu_02' => '',
            'title_menu_02' => '',
            'description_menu_02' => '',
            'image_menu_03' => '',
            'title_menu_03' => '',
            'description_menu_03' => '',
            'title_promotion' => '',
            'image_promotion_01' => '',
            'image_promotion_02' => '',
            'image_section' => '',
            'title_section' => '',
            'title_form' => '',
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
