<?php

namespace App\Filament\Resources\PageConcretoResource\Pages;

use App\Filament\Resources\PageConcretoResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPageConcretos extends ListRecords
{
    protected static string $resource = PageConcretoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
