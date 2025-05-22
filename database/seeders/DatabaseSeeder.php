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
            'email' => 'admin@pavesa.com',
            'password' => bcrypt('admin201920')
        ]);


        $this->call([
            SettingSeeder::class,
            HomePagesSeeder::class,
            SliderSeeder::class,
            SliderConcretoSeeder::class,
            ConcretoPageSeeder::class,
            SliderAsfaltoSeeder::class,
            AsfaltoPageSeeder::class,
            SliderTerraceriaSeeder::class,
        ]);

    }
}
