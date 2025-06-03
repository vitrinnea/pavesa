<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MenuItemResource\Pages;
use App\Models\MenuItem;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class MenuItemResource extends Resource
{
    protected static ?string $model = MenuItem::class;

    protected static ?string $navigationIcon = '';

    protected static ?string $navigationGroup = 'Sistema';

    protected static ?string $navigationLabel = 'Menú';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Título')
                    ->required()
                    ->maxLength(255),
                TextInput::make('url')
                    ->label('URL')
                    ->required()
                    ->maxLength(255),
                Select::make('target')
                    ->label('Target')
                    ->options([
                        '_self' => 'Misma pestaña',
                        '_blank' => 'Nueva pestaña',
                    ])
                    ->default('_self')
                    ->required(),
                Select::make('parent_id')
                    ->label('Elemento Padre')
                    ->options(MenuItem::query()->pluck('title', 'id'))
                    ->nullable()
                    ->searchable(),
                TextInput::make('order')
                    ->label('Orden')
                    ->default(0)
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->label('Título')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('url')->label('URL')->limit(50),
                Tables\Columns\TextColumn::make('target')->label('Target'),
                Tables\Columns\TextColumn::make('parent.title')->label('Elemento Padre')->sortable(),
                Tables\Columns\TextColumn::make('order')->label('Orden')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMenuItems::route('/'),
            'create' => Pages\CreateMenuItem::route('/create'),
            'edit' => Pages\EditMenuItem::route('/{record}/edit'),
        ];
    }
}