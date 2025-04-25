<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
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
            'banner'=>'',
            'title'=>'',
            'slug'=>'',
            // contacts
            'title_contacts'=>'',
            'image_contacts'=>'',
            'email'=>'',
            'phone'=>'',
            'whatsapp'=>'',
            'pinterest'=>'',
            'facebook'=>'',
            'instagram'=>'',
            'linkedin'=>'',
            // maps
            'image_maps'=>'',
            'link_maps'=>'',
            // title form
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
