<?php

namespace Database\Seeders;

use App\Models\AsfaltoPage;
use Illuminate\Database\Seeder;

class AsfaltoPageSeeder extends Seeder
{
    public function run()
    {
        // Crear un registro de ejemplo
        AsfaltoPage::factory()->create();
        
        // O puedes crear datos específicos
        /*
        AsfaltoPage::create([
            'title_seo' => 'Soluciones en Asfalto | Pavesa',
            'description_seo' => 'Ofrecemos las mejores soluciones en asfalto para todo tipo de proyectos.',
            // ... otros campos
        ]);
        */
    }
}