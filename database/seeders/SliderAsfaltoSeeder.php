<?php

namespace Database\Seeders;

use App\Models\SliderAsfalto;
use Illuminate\Database\Seeder;

class SliderAsfaltoSeeder extends Seeder
{
    public function run()
    {
        $sliders = [
            [
                'title' => 'Soluciones completas de Concreto',
                'subtitle' => 'Soluciones <br/>en Concreto',
                'description' => '<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none font-milligrambold uppercase">Soluciones completas de</h2>
<h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">CONCRETO</h3>',
                'button_text' => null,
                'button_url' => 'https://pavesa.test/concreto',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Calidad Garantizada',
                'subtitle' => 'Concreto de <br/>Alta Resistencia',
                'description' => '<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none font-milligrambold uppercase">Soluciones completas de</h2>
<h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">CONCRETO</h3>',
                'button_text' => null,
                'button_url' => 'https://pavesa.test/#',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Proyectos a Gran Escala',
                'subtitle' => 'Infraestructura <br/>y Construcción',
                'description' => '<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none font-milligrambold uppercase">Soluciones completas de</h2>
<h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">CONCRETO</h3>',
                'button_text' => null,
                'button_url' => 'https://pavesa.test/#',
                'order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($sliders as $slider) {
            SliderAsfalto::create($slider);
        }
    }
}