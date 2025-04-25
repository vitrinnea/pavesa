<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'banner_01' => null,
            'title' => null,
            'slug' => null,
            'img_event_type_01' => null,
            'title_event_type_01' => null,
            'img_event_type_02' => null,
            'title_event_type_02' => null,
            'img_event_type_03' => null,
            'title_event_type_03' => null,
            'img_event_type_04' => null,
            'title_event_type_04' => null,
            'img_event_type_05' => null,
            'title_event_type_05' => null,
            'img_event_type_06' => null,
            'title_event_type_06' => null,
            'img_event_type_07' => null,
            'title_event_type_07' => null,
            'img_event_type_08' => null,
            'title_event_type_08' => null,
            'title_service' => null,
            'image_service_01' => null,
            'title_service_01' => null,
            'content_service_01' => null,
            'image_service_02' => null,
            'title_service_02' => null,
            'content_service_02' => null,
            'image_service_03' => null,
            'title_service_03' => null,
            'content_service_03' => null,
            'title_space' => null,
            'image_space_01' => null,
            'title_space_01' => null,
            'content_space_01' => null,
            'image_space_02' => null,
            'title_space_02' => null,
            'content_space_02' => null,
            'image_space_03' => null,
            'title_space_03' => null,
            'content_space_03' => null,
            'image_space_04' => null,
            'title_space_04' => null,
            'content_space_04' => null,
            'image_space_05' => null,
            'title_space_05' => null,
            'content_space_05' => null,
            'image_space_06' => null,
            'title_space_06' => null,
            'content_space_06' => null,
            'image_description_01' => null,
            'title_description' => null,
            'content_description' => null,
            'title_gallery' => null,
            'images_gallery_01' => null,
            'title_form'=>null,
            'quoter_destination'=>null,
            'title_seo' => null,
            'description_seo' => null,
            'keywords_seo' => null,
            'image_seo' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
