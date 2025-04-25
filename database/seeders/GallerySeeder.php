<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gallery::factory()->create([
            //section 1
            'title' => 'GALERÍA',
            'slug' => 'galeria',
            'description' => 'Conoce nuestros versátiles salones y encantadores jardines y organiza tu evento soñado en Cajamarca',
            'image' => 'gallery/01JME8EC8BYC4GCM6X41C45GWK.jpg',
            // Section 2
            'title_instalaction' => 'INSTALACIONES',
            //instalations
            'image_instalation_01' => ['gallery/01JME8KBG1TFY89E7GVQ4FA5QE.jpg'],
            'title_instalation_01' => 'JARDIN  DEL PINAR',
            'image_instalation_02' => ['gallery/01JME8KBG4DKVQB1N4D35TD30E.png'],
            'title_instalation_02' => 'JARDIN  DE LA VILLA',
            'image_instalation_03' => ['gallery/01JME8M09EV689S9YAZFBFM9Y6.jpg'],
            'title_instalation_03' => 'JARDINES CAJAMARCA',
            'image_instalation_04' => ['gallery/01JME8MZ1WTWV2DCB9NRZVAEQR.jpg'],
            'title_instalation_04' => 'CASA DE LA VILLA',
            'image_instalation_05' =>['gallery/01JME8NQSNPNJM9MYMX1KFZSP3.jpg'],
            'title_instalation_05' => 'CAPILLA NUESTRA SEÑORA DEL CARMEN',
            //Section 3
            'title_salon' => 'SALONES',
            //Salons
            'image_salon_01' => ['gallery/01JME8RXH6GB3HA5RP451FK73G.jpg'],
            'title_salon_01' => 'SALÓN CAJAMARCA',
            'image_salon_02' => ['gallery/01JME8RXH9YRQEY25FR6SAS9YF.jpg'],
            'title_salon_02' => 'SALÓN LOS CIPRESES',
            'image_salon_03' => ['gallery/01JME8RXHDZQGY28TV3Y64SSD3.png'],
            'title_salon_03' => 'SALÓN LOS AGAPANTOS',
            'image_salon_04' => ['gallery/01JME8VB8WF7HKEDGQM2W57NGB.jpg'],
            'title_salon_04' => 'SALÓN LOS LIRIOS',
            'image_salon_05' => ['gallery/01JME8VB90AT2RSDY3R821W5V2.png'],
            'title_salon_05' => 'SALÓN LAS CAMELIAS',
            'image_salon_06' => ['gallery/01JME8VB95522TZVG32F5Y2J9K.jpg'],
            'title_salon_06' => 'LAS TUMBERGIAS',
            // SEO
            'title_seo' => 'Galería',
            'description_seo' => 'Conoce nuestros versátiles salones y encantadores jardines y organiza tu evento soñado en Cajamarca',
            'keywords_seo' => 'galeria, cajamarca, salones, instalaciones',
            'image_seo' => 'events/seo/01JME8XVR4BEJTA8D6DBA5ZDNY.jpg',
        ]);
    }
}
