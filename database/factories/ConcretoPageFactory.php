<?php

namespace Database\Factories;

use App\Models\ConcretoPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConcretoPageFactory extends Factory
{
    protected $model = ConcretoPage::class;

    public function definition()
    {
        return [
            // SEO
            'title_seo' => $this->faker->sentence(5),
            'description_seo' => $this->faker->paragraph(2),
            'image_seo' => $this->faker->imageUrl(1200, 630),
            
            // Secciones
            'section_title_01' => $this->faker->sentence(4),
            'section_description_01' => $this->faker->paragraph(3),
            'section_image_01' => $this->faker->imageUrl(500, 650),
            'section_title_02' => $this->faker->sentence(4),
            
            // Soluciones
            'solution_image_01' => $this->faker->imageUrl(400, 400),
            'solution_title_01' => $this->faker->sentence(3),
            'solution_description_01' => $this->faker->paragraph(2),
            'solution_image_02' => $this->faker->imageUrl(400, 400),
            'solution_title_02' => $this->faker->sentence(3),
            'solution_description_02' => $this->faker->paragraph(2),
            'solution_image_03' => $this->faker->imageUrl(400, 400),
            'solution_title_03' => $this->faker->sentence(3),
            'solution_description_03' => $this->faker->paragraph(2),
            'solution_image_04' => $this->faker->imageUrl(400, 400),
            'solution_title_04' => $this->faker->sentence(3),
            'solution_description_04' => $this->faker->paragraph(2),
            
            // Más secciones
            'section_title_03' => $this->faker->sentence(4),
            'section_image_03' => $this->faker->imageUrl(975, 655),
            'section_title_04' => $this->faker->sentence(4),
            'section_subtitle_04' => $this->faker->sentence(5),
            'section_description_04' => $this->faker->paragraph(3),
            'section_image_04' => $this->faker->imageUrl(875, 975),
            'section_title_05' => $this->faker->sentence(4),
            'section_subtitle_05' => $this->faker->sentence(5),
            'section_description_05' => $this->faker->paragraph(3),
            'section_image_05' => $this->faker->imageUrl(1370, 355),
            'section_title_06' => $this->faker->sentence(4),
            
            // Ventajas
            'advantage_01' => $this->faker->sentence(6),
            'advantage_02' => $this->faker->sentence(6),
            'advantage_03' => $this->faker->sentence(6),
            'advantage_04' => $this->faker->sentence(6),
            'advantage_05' => $this->faker->sentence(6),
            
            // Imágenes adicionales
            'section_image_06' => $this->faker->imageUrl(640, 490),
            'section_image_07' => $this->faker->imageUrl(760, 730),
        ];
    }
}