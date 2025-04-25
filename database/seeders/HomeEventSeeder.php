<?php

namespace Database\Seeders;

use App\Models\HomeEvent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeEvent::factory()->create([
            'title'  => 'BODAS',
            'image' => 'home_events/01JMNQ7MD1V02J5TXFKT7KBW4A.jpg',
            'link' => '/evento/bodas'
        ]);
        HomeEvent::factory()->create([
            'title'  => 'EVENTOS SOCIALES',
            'image' => 'home_events/01JMNQ9V4SXPFZAB4Y46MM93GT.jpg',
            'link' => '/evento/eventos-sociales'
        ]);
        HomeEvent::factory()->create([
            'title'  => 'EVENTOS CORPORATIVOS',
            'image' => 'home_events/01JMNQBQ1NNTB6S3F1WPGQBQ85.jpg',
            'link' => '/evento/eventos-corporativos'
        ]);
    }
}
