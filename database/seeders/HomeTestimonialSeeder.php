<?php

namespace Database\Seeders;

use App\Models\HomeTestimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeTestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeTestimonial::factory()->create([
            'title'  => 'Gilma de Ayala',
            'description' => '“Hermoso, totalmente conectado con la naturaleza...un buen lugar para desconectar de la ciudad...😀”',
            'image' => "home-testimonials/01JMP1CZ4J6Q23FMKBJWS9DD36.jpg",
        ]);
        HomeTestimonial::factory()->create([
            'title'  => 'Walter Rivas',
            'description' => '“Un lugar muy bonito, tranquilo y seguro. Excelente para descansar y disfrutar de la naturaleza. 🤩”',
            'image' => "home-testimonials/01JMP1G9VQADZ1F1TCA3CYWQHF.jpg",
        ]);
    }
}
