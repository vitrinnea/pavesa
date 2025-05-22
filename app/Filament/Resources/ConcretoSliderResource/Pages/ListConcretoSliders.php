<?php

namespace App\Filament\Resources\ConcretoSliderResource\Pages;

use App\Filament\Resources\ConcretoSliderResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListConcretoSliders extends ListRecords
{
    protected static string $resource = ConcretoSliderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}