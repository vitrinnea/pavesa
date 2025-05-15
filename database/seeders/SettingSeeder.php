<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // General
            ['key' => 'site_name', 'value' => 'Pavesa', 'group' => 'general'],
            ['key' => 'site_description', 'value' => 'Empresa líder en construcción y desarrollo de proyectos, especializada en concreto, asfalto, terracería y obra gris.', 'group' => 'general'],
            ['key' => 'site_logo', 'value' => 'settings/01JSE3VNJWMRBCEXYHW1CP8AVS.png', 'group' => 'general'],
            ['key' => 'site_logo_dark', 'value' => 'images/logo-dark.png', 'group' => 'general'],
            ['key' => 'favicon', 'value' => 'images/favicon.ico', 'group' => 'general'],

            // SEO
            ['key' => 'title_seo', 'value' => 'Pavisa - Construcción y desarrollo de proyectos', 'group' => 'seo'],
            ['key' => 'description_seo', 'value' => 'Empresa líder en construcción y desarrollo de proyectos, especializada en concreto, asfalto, terracería y obra gris.', 'group' => 'seo'],
            ['key' => 'keywords_seo', 'value' => 'pavisa, construcción, concreto, asfalto, terracería, obra gris, proyectos', 'group' => 'seo'],
            ['key' => 'image_seo', 'value' => 'images/og-image.jpg', 'group' => 'seo'],

            // Contact
            ['key' => 'contact_email', 'value' => 'info@pavesa.com', 'group' => 'contact'],
            ['key' => 'contact_phone', 'value' => '+503 2222-3333', 'group' => 'contact'],
            ['key' => 'contact_address', 'value' => 'Av. Principal #123, San Salvador, El Salvador', 'group' => 'contact'],
            ['key' => 'contact_whatsapp', 'value' => '+50377778888', 'group' => 'contact'],

            // Social
            ['key' => 'facebook_url', 'value' => 'https://facebook.com/pavisa', 'group' => 'social'],
            ['key' => 'instagram_url', 'value' => 'https://instagram.com/pavisa', 'group' => 'social'],
            ['key' => 'twitter_url', 'value' => 'https://twitter.com/pavisa', 'group' => 'social'],
            ['key' => 'linkedin_url', 'value' => 'https://linkedin.com/company/pavisa', 'group' => 'social'],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
}
