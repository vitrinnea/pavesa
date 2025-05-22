<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SliderTerraceriaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'subtitle' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph,
            'button_text' => $this->faker->word,
            'button_url' => $this->faker->url,
            'order' => $this->faker->numberBetween(1, 10),
            'is_active' => $this->faker->boolean(90),
        ];
    }
}