<?php

namespace App\Filament\Resources\TerraceriaPageResource\Pages;

use App\Filament\Resources\TerraceriaPageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTerraceriaPages extends ListRecords
{
    protected static string $resource = TerraceriaPageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
