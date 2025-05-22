<?php

namespace Database\Seeders;

use App\Models\SliderConcreto;
use Illuminate\Database\Seeder;

class SliderConcretoSeeder extends Seeder
{
    public function run()
    {
        // Primero, creamos algunos registros con datos específicos
        $sliders = [
            [
                'title' => 'Concreto Premezclado',
                'subtitle' => 'Soluciones en Concreto',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Soluciones en</h2>
                                 <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">Concreto</h3>',
                'button_text' => 'Conoce más',
                'button_url' => '/servicios/concreto',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Calidad Garantizada',
                'subtitle' => 'Concreto de Alta Resistencia',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Calidad</h2>
                                 <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">Garantizada</h3>',
                'button_text' => 'Contáctanos',
                'button_url' => '/contacto',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Proyectos a Gran Escala',
                'subtitle' => 'Infraestructura y Construcción',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Proyectos</h2>
                                 <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">a Gran Escala</h3>',
                'button_text' => 'Ver proyectos',
                'button_url' => '/proyectos',
                'order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($sliders as $slider) {
            SliderConcreto::create($slider);
        }

        // Opcionalmente, podemos crear algunos registros adicionales con el factory
        // SliderConcreto::factory()->count(2)->create();
    }
}