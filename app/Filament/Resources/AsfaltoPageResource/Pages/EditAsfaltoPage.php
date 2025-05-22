<?php

namespace App\Filament\Resources\AsfaltoPageResource\Pages;

use App\Filament\Resources\AsfaltoPageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAsfaltoPage extends EditRecord
{
    protected static string $resource = AsfaltoPageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
