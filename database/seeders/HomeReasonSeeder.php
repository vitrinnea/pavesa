<?php

namespace Database\Seeders;

use App\Models\HomeReason;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeReasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeReason::factory()->create([
            'title'  => 'CAPILLAS PARA CEREMONIAS',
            'images' => "home-reasons/01JMP0FS9XHREG7Z4A78DF324J.jpg",
        ]);
        HomeReason::factory()->create([
            'title'  => '+25 MANZANAS DE NATURALEZA',
            'images' => "home-reasons/01JMP0F71TVRFEQTC7TYF79HKF.jpg",
        ]);
        HomeReason::factory()->create([
            'title'  => '7 VILLAS BOUTIQUES DISPONIBLES',
            'images' => "home-reasons/01JMP0EPNMRHAAP5X8BBBB6BQV.jpg",
        ]);
        HomeReason::factory()->create([
            'title'  => 'EL MEJOR CLIMA DE SAN SALVADOR',
            'images' => "home-reasons/01JMP0E2E0HE6750R0MVTNTSYM.jpg",
        ]);

    }
}
