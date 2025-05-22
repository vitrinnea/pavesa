<?php

namespace Database\Factories;

use App\Models\AsfaltoPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class AsfaltoPageFactory extends Factory
{
    protected $model = AsfaltoPage::class;

    public function definition()
    {
        return [
            // SEO
            'title_seo' => $this->faker->sentence(5),
            'description_seo' => $this->faker->paragraph(2),
            'image_seo' => $this->faker->imageUrl(1200, 630),
            
            // Sección 1
            'section_image_01' => $this->faker->imageUrl(800, 600),
            'section_title_01' => $this->faker->sentence(4),
            
            // Solución Sección 2
            'section_title_02' => $this->faker->sentence(4),
            'solucion_image_01' => $this->faker->imageUrl(400, 400),
            'solucion_title_01' => $this->faker->sentence(3),
            'solucion_description_01' => $this->faker->paragraph(2),
            'solucion_image_02' => $this->faker->imageUrl(400, 400),
            'solucion_title_02' => $this->faker->sentence(3),
            'solucion_description_02' => $this->faker->paragraph(2),
            'solucion_image_03' => $this->faker->imageUrl(400, 400),
            'solucion_title_03' => $this->faker->sentence(3),
            'solucion_description_03' => $this->faker->paragraph(2),
            'solucion_image_04' => $this->faker->imageUrl(400, 400),
            'solucion_title_04' => $this->faker->sentence(3),
            'solucion_description_04' => $this->faker->paragraph(2),
            
            // Sección 3
            'section_title_03' => $this->faker->sentence(4),
            'capacidad_image_01' => $this->faker->imageUrl(400, 400),
            'capacidad_title_01' => $this->faker->sentence(3),
            'capacidad_description_01' => $this->faker->paragraph(2),
            'capacidad_image_02' => $this->faker->imageUrl(400, 400),
            'capacidad_title_02' => $this->faker->sentence(3),
            'capacidad_description_02' => $this->faker->paragraph(2),
            'capacidad_image_03' => $this->faker->imageUrl(400, 400),
            'capacidad_title_03' => $this->faker->sentence(3),
            'capacidad_description_03' => $this->faker->paragraph(2),
            'section_image_03' => $this->faker->imageUrl(800, 600),
        ];
    }
}