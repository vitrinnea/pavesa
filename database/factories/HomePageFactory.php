<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomePage>
 */
class HomePageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // SEO
            'title_seo' => $this->faker->sentence(6),
            'description_seo' => $this->faker->paragraph(2),
            'image_seo' => $this->faker->imageUrl(1920, 1080, 'business', true, 'SEO Image'),

            // Services
            'service_description_01' => $this->faker->sentence(10),
            'service_image_01' => $this->faker->imageUrl(640, 480, 'business', true, 'Service 1'),
            'service_description_02' => $this->faker->sentence(10),
            'service_image_02' => $this->faker->imageUrl(640, 480, 'business', true, 'Service 2'),
            'service_description_03' => $this->faker->sentence(10),
            'service_image_03' => $this->faker->imageUrl(640, 480, 'business', true, 'Service 3'),
            'service_description_04' => $this->faker->sentence(10),
            'service_image_04' => $this->faker->imageUrl(640, 480, 'business', true, 'Service 4'),
            'service_description_general' => $this->faker->paragraph(3),
            'service_link_general' => $this->faker->url(),

            // Quote
            'quote_image' => $this->faker->imageUrl(640, 480, 'business', true, 'Quote Image'),
            'quote_title' => $this->faker->sentence(5),
            'quote_description' => $this->faker->paragraph(2),
            'quote_sender_email' => $this->faker->safeEmail(),

            // Solutions
            'solution_title_general' => $this->faker->sentence(4),
            'solution_image_01' => $this->faker->imageUrl(640, 480, 'business', true, 'Solution 1'),
            'solution_description_01' => $this->faker->sentence(8),
            'solution_link_01' => $this->faker->url(),
            'solution_image_02' => $this->faker->imageUrl(640, 480, 'business', true, 'Solution 2'),
            'solution_description_02' => $this->faker->sentence(8),
            'solution_link_02' => $this->faker->url(),
            'solution_image_03' => $this->faker->imageUrl(640, 480, 'business', true, 'Solution 3'),
            'solution_description_03' => $this->faker->sentence(8),
            'solution_link_03' => $this->faker->url(),
            'solution_image_04' => $this->faker->imageUrl(640, 480, 'business', true, 'Solution 4'),
            'solution_description_04' => $this->faker->sentence(8),
            'solution_link_04' => $this->faker->url(),

            // Projects
            'project_title_general' => $this->faker->sentence(4),

            // Customers
            'customer_title_general' => $this->faker->sentence(4),
            'customer_images_gallery' => json_encode([
                $this->faker->imageUrl(640, 480, 'business', true, 'Customer 1'),
                $this->faker->imageUrl(640, 480, 'business', true, 'Customer 2'),
                $this->faker->imageUrl(640, 480, 'business', true, 'Customer 3'),
                $this->faker->imageUrl(640, 480, 'business', true, 'Customer 4'),
            ]),

            // Certifications
            'certification_title_general' => $this->faker->sentence(4),
            'certification_description_general' => $this->faker->paragraph(2),
            'certification_link_general' => $this->faker->url(),
            'certification_image_general' => $this->faker->imageUrl(640, 480, 'business', true, 'Certification General'),
            'certification_image_01' => $this->faker->imageUrl(640, 480, 'business', true, 'Certification 1'),
            'certification_title_01' => $this->faker->sentence(4),
            'certification_description_01' => $this->faker->paragraph(1),
            'certification_image_02' => $this->faker->imageUrl(640, 480, 'business', true, 'Certification 2'),
            'certification_title_02' => $this->faker->sentence(4),
            'certification_description_02' => $this->faker->paragraph(1),
        ];
    }
}
