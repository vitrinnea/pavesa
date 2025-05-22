<?php

namespace App\Filament\Resources\SliderTerraceriaResource\Pages;

use App\Filament\Resources\SliderTerraceriaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSliderTerraceria extends EditRecord
{
    protected static string $resource = SliderTerraceriaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
