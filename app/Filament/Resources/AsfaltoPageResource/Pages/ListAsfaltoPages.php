<?php

namespace App\Filament\Resources\AsfaltoPageResource\Pages;

use App\Filament\Resources\AsfaltoPageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAsfaltoPages extends ListRecords
{
    protected static string $resource = AsfaltoPageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
