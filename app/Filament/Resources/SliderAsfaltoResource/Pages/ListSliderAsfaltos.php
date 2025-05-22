<?php

namespace App\Filament\Resources\SliderAsfaltoResource\Pages;

use App\Filament\Resources\SliderAsfaltoResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSliderAsfaltos extends ListRecords
{
    protected static string $resource = SliderAsfaltoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}