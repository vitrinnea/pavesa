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
            'image_seo' => 'home/seo/01JV8Y1WP23MFEYDMRC4JMTWZ9.png',

            // Services
            'service_description_01' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_01' => 'home/service/01JV8WM69KTSP4FZ0163XXV7P2.png',
            'service_description_02' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_02' => 'home/service/01JV8WS4WZC89KX435QHDGSW8T.png',
            'service_description_03' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_03' => 'home/service/01JV8WS4X3VA3VC6ZQ132FZX2C.png',
            'service_description_04' => 'Suministro y bombeo de concreto premezclado en El Salvador',
            'service_image_04' => 'home/service/01JV8WS4X6RNMPWSRJ0RM8J7JV.png',
            'service_description_general' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'service_link_general' => '#',

            // Quote
            'quote_image' => 'home/quote/01JV8WWMTCNVTZRD5SJ2Q2MYQV.png',
            'quote_title' => 'Cotiza tu proyecto ahora',
            'quote_description' => 'Puedes cotizar tu proyecto de forma rápida y segura.',
            'quote_sender_email' => 'cotizaciones@pavesa.com',

            // Solutions
            'solution_title_general' => 'Nuestras Soluciones',
            'solution_image_01' => 'home/solution/01JV8XCFXVM6SSSPD74972TESV.png',
            'solution_description_01' => 'ASFALTO',
            'solution_link_01' => '#',
            'solution_image_02' => 'home/solution/01JV8XCFXZD2TG14GN69VB1M8V.png',
            'solution_description_02' => 'CONCRETO',
            'solution_link_02' => '#',
            'solution_image_03' => 'home/solution/01JV8XCFY228FTAPSXWYQC7HHP.png',
            'solution_description_03' => 'TERRACERIA',
            'solution_link_03' => '#',
            'solution_image_04' => 'home/solution/01JV8XCFY5R2DNPY2W1S120CH2.png',
            'solution_description_04' => 'OBRA GRIS',
            'solution_link_04' => '#',

            // Projects
            'project_title_general' => 'Proyectos',

            // Customers
            'customer_title_general' => 'Nuestros clientes',
            'customer_images_gallery' => json_encode([
                "home/customer/01JV8XK2947AGXB87YVHZ38CHE.png",
                "home/customer/01JV8XK2996JSJX86W7JMA5AZR.png",
                "home/customer/01JV8XK29BVQ9C8AZ78WXAQGM7.png",
                "home/customer/01JV8XK29E5FABJ75TQ8EZB9W0.png"
            ]),

            // Certifications
            'certification_title_general' => 'Cumplimos certificaciones internacionales',
            'certification_description_general' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'certification_link_general' => '#',
            'certification_image_general' => 'home/certification/01JV8XZHSZ3VXDPPX91KXCBVXS.png',
            'certification_image_01' => 'home/certification/01JV8XZHT34KYR08VMGB3EKMTY.jpg',
            'certification_title_01' => 'Diseño personalizado',
            'certification_description_01' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'certification_image_02' => 'home/certification/01JV8XZHT6XE9VZP9P0WBBP1SG.jpg',
            'certification_title_02' => 'Soluciones para todas las necesidades',
            'certification_description_02' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            'created_at' => '2025-05-14 02:30:19',
            'updated_at' => '2025-05-15 02:58:22',
        ]);
    }
}
