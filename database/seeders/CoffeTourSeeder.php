<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\CoffeTour;

class CoffeTourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CoffeTour::factory()->create([
            'slug' => 'coffee-tour',
            'banner' => ['coffee-tour/banner/01JKSNSRY1AX3DXYHWSBCGXYNS.jpg'],
            'title' => 'COFFEE TOUR<span  class="text-2xl lg:text-4xl">El arte del café en el Corazón de El Salvador </span>',
            'tour_gallery' => ["coffee-tour/gallery/01JKSNSRY59HNNGBG3VB0N0A18.jpg","coffee-tour/gallery/01JKSNSRY8AM30J5QTXJDZ4FRH.jpg","coffee-tour/gallery/01JKSNSRYDJCKNP7DZGDEYKN3F.jpg","coffee-tour/gallery/01JKSNSRYM5NYY73NWPT2VRVQV.jpg","coffee-tour/gallery/01JKSNSRYVWZBJ6W1S55DEQJQS.jpg","coffee-tour/gallery/01JKSNSRZ0MN9XKKNZSP5S85F9.jpg","coffee-tour/gallery/01JKSNSRZ68KBWWA1W4T6SNGVJ.jpg","coffee-tour/gallery/01JKSNSRZE00PNCYP9KXH73PQK.jpg","coffee-tour/gallery/01JKSNSRZMP06FEXHYBN5Z2GDF.jpg","coffee-tour/gallery/01JKSNSRZS0H7ZC6XKMVRPM3F9.jpg","coffee-tour/gallery/01JKSNSRZYTY3WXNEA77BSQW51.jpg","coffee-tour/gallery/01JKSNSS03HS0KYFN5WZAX91Y6.jpg","coffee-tour/gallery/01JKSNSS057M5F3RTTZFC47FV7.jpg","coffee-tour/gallery/01JKSNSS0AWMNKGEXX7PQTPGK1.jpg","coffee-tour/gallery/01JKSNSS0E9FN4TQF41GB2C6J3.jpg"],

            'title_form' => '¡Agenda tu coffee tour ahora!',
            'quoter_destination' => 'luisa.jimenez@cajamarcasal.com',

            'title_services' => 'Vive la experiencia Coffee tour',
            'title_service_01' => 'Tour y experiencia',
            'content_service_01' => 'Explora la riqueza cafetera de El Salvador con un tour exclusivo en nuestra finca ubicada en la cima del majestuoso Volcán de San Salvador.',
            'title_service_02' => 'Procesos de café',
            'content_service_02' => 'El tour te llevará a través de los campos donde el café es cultivado con esmero, y te enseñaremos cada etapa del proceso, desde la siembra hasta la taza.',
            'title_service_03' => 'Historia y Cultura del Café',
            'content_service_03' => 'Durante el tour, aprenderás sobre la historia del café en nuestro país y su influencia en la economía y cultura salvadoreña.',
            'title_service_04' => 'Sostenenibilidad ',
            'content_service_04' => 'En nuestra finca, estamos comprometidos con la sostenibilidad y el cuidado del medio ambiente.',
            'title_service_05' => 'Turismo en el Volcán de San Salvador ',
            'content_service_05' => 'Además de vivir una experiencia única en nuestra finca cafetalera, podrás vivir el mejor clima dentro de Cajamarca.',
            'title_service_06' => 'Agenda abierta',
            'content_service_06' => 'Esta oportunidad de vivir un tour turístico único en El Salvador, combinando naturaleza, cultura y una taza del mejor café.',
            'title_seo' => 'Coffe Tour',
            'description_seo' => 'El arte del café en el Corazón de El Salvador',
            'keywords_seo' => 'coffe cafe',
            'image_seo'=> 'events/seo/01JKSNSS0J51FQZH3VAWD7AW2H.jpg'

        ]);
    }
}
