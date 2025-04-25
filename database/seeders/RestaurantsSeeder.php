<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Restaurant::factory()->create([
           // banner
        'banner'=>['experience-gastronomic/banner/01JM6HZTJ09F92BZ0KNNETWE12.jpg'],
        'title'=>'RESTAURANTE BISTRÓ <span class="text-2xl lg:text-4xl">Sabores para tus sentidos en un entorno único</span>',
        'slug'=>'restaurante',
        // restaurant
        'image_restaurant'=>'restaurant/01JMBQGKBK7BRNSJ6C19V1FAGY.jpg',
        'title_restaurant'=>'El secreto mejor guardado',
        'description_restaurant'=>'Emerge majestuoso en el corazón del Volcán de San Salvador Cajamarca Bistró. A 1400mts sobre el nivel del mar, sus alrededores adornados con árboles centenarios y pintorescos cafetales, crean un escenario de ensueño que invita a sumergirse en una experiencia culinaria única. ',
        // menu
        'title_menu'=>'Especialidades de la casa',
        'image_menu_01'=>'restaurant/01JM6M1Y8SBJG6X8A5KH46304K.jpg',
        'title_menu_01'=>'Desayuno Lo Nuestro',
        'description_menu_01'=>'Disfruta tu mañana con huevos estrellados, frijolesvolteados, plátanos maduros, queso fresco, crema y tomatada de la casa.',
        // menu 02
        'image_menu_02'=>'restaurant/01JM6M1Y8W37J1BX8RNKXAH9TA.jpg',
        'title_menu_02'=>'Lomito Cajamarca',
        'description_menu_02'=>'Disfruta nuestro reconocido corte alto de lomo de aguja de 8 onzas calidad Gold de gran suavidad.',
        // menu 03
        'image_menu_03'=>'restaurant/01JM6M1Y8ZF024P1GG5FNHMPVW.jpg',
        'title_menu_03'=>'Gran Parrllada Cajamarca',
        'description_menu_03'=>'Gran combinación de cortes de carne premium, lomo de aguja y puyazo, jugosa pechuga de pollo a la parrilla y  camarones jumbo al ajillo.Acompañada de vegetales a la parrilla y salsas de la casa. Una excelente opción para compartir.',
        // title promotion
        'title_promotion'=>'Promociones',
        'image_promotion_01'=>'restaurant/01JM6M5RBH58JMJBEAVV3Y60YT.jpg',
        'image_promotion_02'=>'restaurant/01JM6M5RBNZJ5972XWKWRTYTSH.jpg',
        // section
        'image_section'=>'restaurant/01JM6M6X49AKCKZWE5XKB6J1R5.jpg',
        'title_section'=>'Suscríbete y recibe actualizaciones de nuestro menú y promociones',
        // title form
        'title_form'=>'¡Cotiza o reserva tu evento ahora!',
        'quoter_destination'=>'luisa.jimenez@cajamarcasal.com',
        // Gallery
        'gallery'=>["experience-gastronomic\/gallery\/01JM6HZTJ5XDKBZ7SQG7R5F7K2.jpg","experience-gastronomic\/gallery\/01JM6HZTJ94BR7PEXQQW34M0HG.jpg","experience-gastronomic\/gallery\/01JM6HZTJEMNWXPH2E7KXFEE58.jpg","experience-gastronomic\/gallery\/01JM6HZTJK7X9TDG4G656GNHFC.jpg","experience-gastronomic\/gallery\/01JM6HZTJTCASVQCES9GZ4384X.jpg","experience-gastronomic\/gallery\/01JM6HZTK0F5WZ6S2N6TDMTZ35.jpg","experience-gastronomic\/gallery\/01JM6HZTK3BQ14FKA08VWPY0SR.jpg","experience-gastronomic\/gallery\/01JM6HZTKC2G9C7SCH5F22EYD5.jpg","experience-gastronomic\/gallery\/01JM6HZTKGQ8EY599CTQ6GGJRB.jpg","experience-gastronomic\/gallery\/01JM6HZTKMPA0E18T3FAHSXP4H.jpg","experience-gastronomic\/gallery\/01JM6HZTKQA2HDWN104KH0MDHA.jpg","experience-gastronomic\/gallery\/01JM6HZTKWFFWJVAVFAX62NQ9S.jpg","experience-gastronomic\/gallery\/01JM6HZTM11QBY5D4K8738MFXA.jpg","experience-gastronomic\/gallery\/01JM6HZTM694NHK275AMFNHBMJ.jpg","experience-gastronomic\/gallery\/01JM6HZTMBFWNJKR3PY4139BCT.jpg","experience-gastronomic\/gallery\/01JM6HZTMHXT19QHMM9BDYDSJW.jpg","experience-gastronomic\/gallery\/01JM6HZTMMYEB25NRENS05JWGE.jpg","experience-gastronomic\/gallery\/01JM6HZTMVPBSDTGE9153MPT8T.jpg","experience-gastronomic\/gallery\/01JM6HZTMYZQVGNXQS7ZGFNMH6.jpg","experience-gastronomic\/gallery\/01JM6HZTND6XBAR42M81SWMJN0.jpg","experience-gastronomic\/gallery\/01JM6HZTNGGS39FFB731NY9SK6.jpg","experience-gastronomic\/gallery\/01JM6HZTNKM50RDR925ZC7656H.jpg","experience-gastronomic\/gallery\/01JM6HZTNQC21ME007S80N9WBM.jpg","experience-gastronomic\/gallery\/01JM6HZTNVD5EVYZS913NB9J7C.jpg","experience-gastronomic\/gallery\/01JM6HZTNYKA5XCN6VZ7DKPMBE.jpg","experience-gastronomic\/gallery\/01JM6HZTP2TNKZXKBXXGMPHNN0.jpg","experience-gastronomic\/gallery\/01JM6HZTP68BGTHF54S5VRVN2X.jpg"],
        // SEO
        'title_seo'=>'RESTAURANTE BISTRÓ',
        'description_seo'=>'Sabores para tus sentidos en un entorno único',
        'keywords_seo'=>'comida, restaurante',
        'image_seo'=>'events/seo/01JM6HZTPB1S06J2VNX7PH7NAJ.jpg'
        ]);
    }
}
