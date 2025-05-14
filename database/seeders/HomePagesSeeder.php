<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomePagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('home_pages')->insert([
            // SEO
            'title_seo' => 'Pavesa - Soluciones en Concreto y Asfalto',
            'description_seo' => 'Pavesa ofrece soluciones de concreto premezclado, asfalto y terracería en El Salvador.',
            'image_seo' => '/images/home/background-linea.png',

            // Services
            'service_description_01' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_01' => '/images/home/camion-cemento-pavesa.png',
            'service_description_02' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_02' => '/images/home/asfalto-pavesa.png',
            'service_description_03' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_03' => '/images/home/concreto-pavesa.png',
            'service_description_04' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_04' => '/images/home/escavadora-pavesa.png',
            'service_description_general' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'service_link_general' => '#',

            // Quote
            'quote_image' => '/images/home/arquitectos-pavesa-1.png',
            'quote_title' => 'Cotiza tu proyecto ahora',
            'quote_description' => 'Puedes cotizar tu proyecto de forma rápida y segura.',
            'quote_sender_email' => 'cotizaciones@pavesa.com',

            // Solutions
            'solution_title_general' => 'Nuestras Soluciones',
            'solution_image_01' => '/images/home/asfalto.png',
            'solution_description_01' => 'ASFALTO',
            'solution_link_01' => '#',
            'solution_image_02' => '/images/home/concreto.png',
            'solution_description_02' => 'CONCRETO',
            'solution_link_02' => '#',
            'solution_image_03' => '/images/home/terraceria.png',
            'solution_description_03' => 'TERRACERIA',
            'solution_link_03' => '#',
            'solution_image_04' => '/images/home/obra-gris.png',
            'solution_description_04' => 'OBRA GRIS',
            'solution_link_04' => '#',

            // Projects
            'project_title_general' => 'Proyectos',

            // Customers
            'customer_title_general' => 'Nuestros clientes',
            'customer_images_gallery' => json_encode([
                '/images/home/caterpillar.png',
                '/images/home/hitachi.png',
                '/images/home/sany.png',
                '/images/home/cnh.png',
            ]),

            // Certifications
            'certification_title_general' => 'Cumplimos certificaciones internacionales',
            'certification_description_general' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'certification_link_general' => '#',
            'certification_image_general' => '/images/home/camion-pavesa-certificaciones.png',
            'certification_image_01' => '/images/home/certificacion1.png',
            'certification_title_01' => 'Diseño personalizado',
            'certification_description_01' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'certification_image_02' => '/images/home/certificacion2.png',
            'certification_title_02' => 'Soluciones para todas las necesidades',
            'certification_description_02' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
