<?php

namespace Database\Seeders;

use App\Models\ExperienceGastronomic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienceGastronomicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ExperienceGastronomic::factory()->create([
            'banner' => ['experience-gastronomic/banner/01JM6BZ75N992KWCV0R0W3TP83.jpg'],
            'title' => 'Experiencia <GASTRONÓMICA <span>¡Vive una experiencia culinaria única en un entorno espectacular!</span>',
            'title' => 'Experiencia <span>GASTRONÓMICA</span> <span  class="text-2xl lg:text-4xl">¡Vive una experiencia culinaria única en un entorno espectacular!</span>',
            'slug' => 'experiencia-gastronomica',
            // gastronomía
            'image_gastronomy' => 'experience-gastronomic/description/01JM6C0F78FF4RHA7AA80DHX98.jpg',
            'title_gastronomy' => 'Descubre la Experiencia Gastronómica de Cajamarca',
            'description_gastronomy' => 'En Cajamarca, cada comida es una celebración de los sabores auténticos de El Salvador. Nuestra propuesta gastronómica es una invitación a un viaje culinario único, donde los ingredientes frescos, locales y de alta calidad son los protagonistas.',
            // gastronomía 02
            'image_gastronomy_02' => 'experience-gastronomic/description/01JM6C1ESPZQP5AP4JX3JK5VDZ.png',
            'title_gastronomy_02' => 'Visítanos y déjate sorprender',
            'description_gastronomy_02' => 'En Cajamarca encontrarás una experiencia gastronómica que superará todas tus expectativas',
            // gastronomy 03
            'image_gastronomy_03' => 'experience-gastronomic/description/01JM6C4C2BPG6X098MM7QVY10C.jpg',
            'title_gastronomy_03' => 'Sabores Locales con un Toque Innovador',
            'description_gastronomy_03' => 'Nos enorgullece ofrecer una fusión de lo tradicional con lo moderno. Desde los clásicos platillos salvadoreños hasta innovadoras creaciones que deleitan el paladar, cada plato es una obra de arte que refleja nuestra pasión por la cocina. Disfruta de nuestros sabores autóctonos preparados con técnicas contemporáneas que elevan cada bocado a una experiencia inolvidable.',
            // gastronomy 04
            'image_gastronomy_04' => 'experience-gastronomic/description/01JM6C4F5JA4EH5T1Q3AWB119A.jpg',
            'title_gastronomy_04' => 'Ingredientes Frescos y de Calidad',
            'description_gastronomy_04' => 'Nuestra prioridad es la calidad de cada ingrediente. Por ello, trabajamos en estrecha colaboración con agricultores y proveedores locales, seleccionando cuidadosamente los productos más frescos y sostenibles. El resultado es una carta que cambia según la temporada, garantizando que cada plato esté lleno de los mejores y más frescos sabores de la región.',
            // title form
            'title_form' => '¡Cotiza tu evento ahora!',
            'quoter_destination' => 'luisa.jimenez@cajamarcasal.com',
            // Gallery
            'gallery' => ["experience-gastronomic\/gallery\/01JM6C7G0675T0XRW8QRR5N9P9.jpg","experience-gastronomic\/gallery\/01JM6C7G0A6AVKDK1CP1AC8DW0.jpg","experience-gastronomic\/gallery\/01JM6C7G0E07EBDRW9QZ2XCTZB.jpg","experience-gastronomic\/gallery\/01JM6C7G0KK47ZZ4DDKT9Q20FK.jpg","experience-gastronomic\/gallery\/01JM6C7G0RPAMD8R7AZWR6YQTM.jpg"],
            // SEO
            'title_seo' => 'Experiencia GASTRONÓMICA',
            'description_seo' => '¡Vive una experiencia culinaria única en un entorno espectacular!',
            'keywords_seo' => 'gastronomia, cajamarca',
            'image_seo'=> 'events/seo/01JM6CEBFJJXQGQ7E7FQQHM9Y0.jpg'
        ]);
    }
}
