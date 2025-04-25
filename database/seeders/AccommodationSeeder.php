<?php

namespace Database\Seeders;

use App\Models\Accommodation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccommodationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Accommodation::factory()->create([
            'banner' => ['restaurant/banner/01JMBNZBRYK6VY7T92NCP8V2VY.jpg'],
            'title' => 'HOSPEDAJE <span class="text-2xl lg:text-4xl">Cajamarca Villas, un refugio exclusivo en la naturaleza del Volcán.</span>',
            'slug' => 'hospedaje',
            'image_accommodation' => 'accommodation/01JMBP0M552W1QFQRAQ2PN942P.png',
            'title_accommodation' => 'Lujo entre cafetales',
            'description_accommodation' => 'Vive momentos mágicos en nuestras Villas, rodeadas de naturaleza exuberante y el clima perfecto del volcán.',
            'title_spaces' => 'Tu Refugio De Confort Y Elegancia',
            'image_space_01' => 'accommodation/01JMBP7N7S0MB7X9GZMSB0XZ8C.jpg',
            'title_space_01' => '',
            'description_space_01' => 'Descanso pleno en una habitación de ensueño.',
            'image_space_02' => 'accommodation/01JMBP7N7XWFGP8R2B9FQCEGN5.jpg',
            'title_space_02' => '',
            'description_space_02' => 'Elegancia y comodidad en cada detalle.',
            'image_space_03' => 'accommodation/01JMBP90WDXDWWRM5PGEQQ435V.jpg',
            'title_space_03' => '',
            'description_space_03' => 'Espacios acogedores para compartir y relajarte.',
            'image_section' => 'accommodation/01JMBPA6E45F2WYH7MKYYYJYGZ.jpg',
            'title_section' => 'Descanso en Villas Boutique',
            'description_section' => 'Sumérgete en la tranquilidad de nuestras exclusivas Villas Boutique, diseñadas para brindarte el máximo confort en medio de la naturaleza del Volcán de San Salvador. Rodeadas por exuberantes cafetales y paisajes que inspiran calma, nuestras villas son el refugio perfecto para quienes buscan relajarse y reconectar. Cada espacio combina lujo discreto, detalles acogedores y un entorno único que te invita a disfrutar del descanso como nunca antes.',

            'title_form' => '¡Cotiza o reserva tu evento ahora!',
            'quoter_destination' => 'luisa.jimenez@cajamarcasal.com',

            'title_seo' => 'HOSPEDAJE, Cajamarca Villas',
            'description_seo' => 'Vive momentos mágicos en nuestras Villas, rodeadas de naturaleza exuberante y el clima perfecto del volcán.',
            'keywords_seo' => 'Hospedaje, Volcan, cajamarca',
            'image_seo' => 'accommodation/seo/01JMBPDF1SNAGFCN2T2NWZ5QFQ.jpg'
        ]);
    }
}
