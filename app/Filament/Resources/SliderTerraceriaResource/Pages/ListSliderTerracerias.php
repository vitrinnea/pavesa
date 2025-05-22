<?php

namespace App\Filament\Resources\SliderTerraceriaResource\Pages;

use App\Filament\Resources\SliderTerraceriaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSliderTerracerias extends ListRecords
{
    protected static string $resource = SliderTerraceriaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
