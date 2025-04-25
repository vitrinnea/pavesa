<?php

namespace Database\Seeders;

use App\Models\HomeSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeSetting::factory()->create([
            'title_reason'=>'¿Porqué elegir Cajamarca?',
            'bg_reason'=>'events/seo/01JMR64A67ZDY6JW9F5E4MJH9N.jpg',
            'title_galery'=>'Galería',
            // title form
            'title_form' => '¡Cotiza tu evento ahora!',
            'quoter_destination' => 'luisa.jimenez@cajamarcasal.com',
            // SEO
            'title_seo' => 'Cajamarca',
            'description_seo' => 'En Cajamarca, cada celebración se transforma en una celebración inolvidable, donde la naturaleza crear momentos eternos. ',
            'keywords_seo' => 'gastronomia, cajamarca, eventos, sociales, bodas',
            'image_seo' => 'events/seo/01JMR64A6X2AZVQ3N4PECR4DEM.jpg'
        ]);
    }
}
