<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::factory()->create([
            'logo' => 'settings/01JMGKHE5HV2EWHWCSFR8AYFHT.png',
            'logo_black' => 'settings/01JMGKHV8CY0BWAXAGWEY937YA.png',
            'favicon' => 'settings/01JMNHA7D9FWGD4TXYH5PQX4C6.png',
            // title form
            'newsletter_title' => 'RECIBE OFERTAS EXCLUSIVAS Y EVENTOS ESPECIALES',
            'newsletter_destination' => 'luisa.jimenez@cajamarcasal.com',

            'whatsapp' => '+503 6835-2879',
            'email' => 'info@cajamarcasal.com',
            'phone' => '+503 2223-2333',
            'instagram' => 'https://www.instagram.com/cajamarcasv/',
            'facebook' => 'https://www.facebook.com/CajamarcaSV ',
            'linkedin' => 'https://www.linkedin.com/company/cajamarca-centro-de-eventos-y-convenciones/',
            'pinterest' => 'https://www.pinterest.com/cajamarcasv/',
            'about_us' => 'Cajamarca es un Centro de Eventos Sociales y Corporativos en una histórica finca de café, ubicado en el volcán de San Salvador. Combinamos el encanto colonial con toques modernos, rodeados de naturaleza, para crear experiencias inolvidables en bodas, seminarios y todo tipo de celebraciones.',
        ]);
    }
}
