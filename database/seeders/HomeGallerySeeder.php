<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomeGallery;

class HomeGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeGallery::factory()->create([
            'title'  => 'JARDINES',
            'images' => ["home-gallery\/01JMJ9G97RM1DENK4CE0C3GC3J.jpg"],
        ]);
        HomeGallery::factory()->create([
            'title'  => 'SALONES',
            'images' => ["home-gallery\/01JMJ9HNW6CH0NPK6DABNT3MGV.jpg"],
        ]);
        HomeGallery::factory()->create([
            'title'  => 'BOSQUES',
            'images' => ["home-gallery\/01JMJ9JGMK41W4BVCBK4G5MGSA.jpg"],
        ]);
        HomeGallery::factory()->create([
            'title'  => 'RUTA DE CAFÉ',
            'images' => ["home-gallery\/01JMJ9MQCGXMZDF932ZVX87D49.jpg"],
        ]);
        HomeGallery::factory()->create([
            'title'  => 'RESTAURANTE',
            'images' => ["home-gallery\/01JMJ9P2S012614YZQVEKNJ4R2.jpg"],
        ]);
        HomeGallery::factory()->create([
            'title'  => 'CAPILLA',
            'images' => ["home-gallery\/01JMJ9Q15VQ5KBYTQ57F2BASNH.jpg"],
        ]);
    }
}
