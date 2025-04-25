<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::factory()->create([
         // banner
         'banner'=>["contact\/01JMRJA9609AY8TESYXR9ZSKC3.jpg"],
         'title'=>'CONTÁCTANOS',
         'slug'=>'contacto',
         // contacts
         'title_contacts'=>'CONTACTOS',
         'image_contacts'=>'contact/01JMRHXY2NW4B84A12BJB6PZRP.jpg',
         'email'=>'info@cajamarcasal.com',
         'phone'=>'+503 2223 - 2333',
         'whatsapp'=>'+503 6835 - 2879',
         'pinterest'=>'https://www.pinterest.com/cajamarcasv/',
         'facebook'=>'https://www.facebook.com/CajamarcaSV ',
         'instagram'=>'https://www.instagram.com/cajamarcasv/',
         'linkedin'=>'https://www.linkedin.com/company/cajamarca-centro-de-eventos-y-convenciones/',
         // maps
         'image_maps'=>'contact/01JMRHXY2SFTB06KS2NC0K1B2D.png',
         'link_maps'=>'https://www.google.com/maps/place/Cajamarca+El+Salvador/@13.7523698,-89.2667931,17z/data=!3m1!4b1!4m6!3m5!1s0x8f632515404aa2df:0xcd17b309784c0deb!8m2!3d13.7523698!4d-89.2667931!16s%2Fg%2F1pp2x82n0?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
         // title form
         'title_form'=>'Comunícate con nosotros',
         'quoter_destination'=>'luisa.jimenez@cajamarcasal.com',
         // SEO
         'title_seo'=>'Conactanos',
         'description_seo'=>'En Cajamarca, cada boda se transforma en una celebración inolvidable, donde la naturaleza y el amor se entrelazan para crear momentos eternos. ',
         'keywords_seo'=>'Boda, evento, casamientos, evento social',
         'image_seo'=>'contact/01JMRJ2WGM34WJMVTCW0E84SKJ.jpg'
        ]);
    }
}
