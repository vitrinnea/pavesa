<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sliders')->insert([
            [
                'title' => 'Mezcla Azfaltica',
                'subtitle' => 'Mezcla <br/>Azfaltica',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Construyendo el </h2> <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">futuro</h3>',
                'button_text' => 'CONOCE MAS',
                'button_url' => 'https://pavesa.test',
                'is_active' => 1,
                'order' => 2,
                'created_at' => '2025-04-22 04:58:39',
                'updated_at' => '2025-05-21 03:13:25',
            ],
            [
                'title' => 'Construyendo el futuro',
                'subtitle' => 'Concreto',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Construyendo el </h2> <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">futuro</h3>',
                'button_text' => 'Conoce mas',
                'button_url' => 'https://pavesa.test/#',
                'is_active' => 1,
                'order' => 1,
                'created_at' => '2025-04-22 14:06:48',
                'updated_at' => '2025-05-21 03:07:23',
            ],
            [
                'title' => 'Terracería',
                'subtitle' => 'Terracería',
                'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">Expertos en</h2> <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">Terracería</h3>',
                'button_text' => 'Contactenos',
                'button_url' => 'https://pavesa.test',
                'is_active' => 1,
                'order' => 3,
                'created_at' => '2025-04-22 14:07:25',
                'updated_at' => '2025-05-21 03:17:42',
            ],
        ]);
    }
}
