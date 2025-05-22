<?php

namespace Database\Factories;

use App\Models\SliderConcreto;
use Illuminate\Database\Eloquent\Factories\Factory;

class SliderConcretoFactory extends Factory
{
    protected $model = SliderConcreto::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'subtitle' => $this->faker->sentence(4),
            'description' => '<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-milligrambold uppercase">' . $this->faker->sentence(2) . '</h2>
                             <h3 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-integralcfheavy uppercase">' . $this->faker->word() . '</h3>',
            'button_text' => $this->faker->words(2, true),
            'button_url' => $this->faker->url(),
            'order' => $this->faker->numberBetween(1, 10),
            'is_active' => $this->faker->boolean(80), // 80% de probabilidad de ser true
        ];
    }
}