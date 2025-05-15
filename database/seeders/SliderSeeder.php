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
                'title' => 'prueba',
                'subtitle' => 'prueb 2',
                'description' => 'desciption',
                'button_text' => 'enviar',
                'button_url' => 'https://pavesa.test',
                'is_active' => 0,
                'order' => 1,
                'created_at' => '2025-04-22 04:58:39',
                'updated_at' => '2025-04-22 04:58:39',
            ],
            [
                'title' => 'Terraceria',
                'subtitle' => 'ninguno',
                'description' => null,
                'button_text' => 'conactanos',
                'button_url' => 'https://pavesa.test',
                'is_active' => 1,
                'order' => 1,
                'created_at' => '2025-04-22 14:06:48',
                'updated_at' => '2025-04-22 14:06:48',
            ],
            [
                'title' => 'Concreto',
                'subtitle' => 'test',
                'description' => null,
                'button_text' => 'conactanos',
                'button_url' => 'https://pavesa.test',
                'is_active' => 0,
                'order' => 1,
                'created_at' => '2025-04-22 14:07:25',
                'updated_at' => '2025-04-22 14:07:25',
            ],
        ]);
    }
}
