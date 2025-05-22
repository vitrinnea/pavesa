<?php

namespace App\Filament\Resources\SliderAsfaltoResource\Pages;

use App\Filament\Resources\SliderAsfaltoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSliderAsfalto extends EditRecord
{
    protected static string $resource = SliderAsfaltoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
