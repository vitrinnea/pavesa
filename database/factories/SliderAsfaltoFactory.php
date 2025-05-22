<?php

namespace Database\Factories;

use App\Models\SliderAsfalto;
use Illuminate\Database\Eloquent\Factories\Factory;

class SliderAsfaltoFactory extends Factory
{
    protected $model = SliderAsfalto::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'subtitle' => $this->faker->sentence(5),
            'description' => $this->faker->paragraph(2),
            'button_text' => $this->faker->randomElement(['Ver más', 'Conocer', 'Explorar', 'Contactar']),
            'button_url' => $this->faker->url(),
            'order' => $this->faker->numberBetween(1, 10),
            'is_active' => $this->faker->boolean(80),
        ];
    }
}