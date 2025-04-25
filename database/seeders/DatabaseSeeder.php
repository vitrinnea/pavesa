<?php

namespace Database\Seeders;

use App\Models\HomeSlider;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@cajamarca.com',
            'password' => bcrypt('admin201920')
        ]);

        HomeSlider::factory()->create(
            [
                'title' => 'Donde los sueños encuentran su escenario perfecto',
                'image' => 'slider/01JKK965F7ATNR06A8NSCCH158.jpg',
                'image_mobile' => 'slider/mobile/01JKK965FA56C2DB494KKDM6DX.jpg',
                'url' => '/',
                'is_active' => 1
            ]
        );
        HomeSlider::factory()->create(
            [
                'title' => 'Donde los sueños encuentran su escenario perfecto',
                'image' => 'slider/01JKKA9H2B595WX1R5WSC832DX.jpg',
                'image_mobile' => 'slider/01JKKA9H2B595WX1R5WSC832DX.jpg',
                'url' => '/',
                'is_active' => 1
            ]
        );

        $this->call([
            EventsSeeder::class,
            ExperienceGastronomicSeeder::class,
            CoffeTourSeeder::class,
            RestaurantsSeeder::class,
            AccommodationSeeder::class,
            GallerySeeder::class,
            SettingSeeder::class,
            HomeGallerySeeder::class,
            HomeEventSeeder::class,
            HomeReasonSeeder::class,
            HomeTestimonialSeeder::class,
            HomeSettingSeeder::class,
            ContactSeeder::class,
        ]);

    }
}
