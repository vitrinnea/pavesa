<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ConcretoSliderResource\Pages;
use App\Models\SliderConcreto;
use Filament\Forms;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class ConcretoSliderResource extends Resource
{
    protected static ?string $model = SliderConcreto::class;
    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Sliders';
    protected static ?string $navigationLabel = 'Slider Concreto';
    protected static ?string $pluralModelLabel = 'Sliders de Concreto';
    protected static ?string $modelLabel = 'Slider de Concreto';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Título')
                    ->maxLength(255)
                    ->required(),
                Forms\Components\TextInput::make('subtitle')
                    ->label('Subtítulo (aparece en la parte miniatura)')
                    ->maxLength(255),
                MarkdownEditor::make('description')
                    ->label('Descripción')
                    ->required(),
                Forms\Components\TextInput::make('button_text')
                    ->label('Texto del botón')
                    ->maxLength(50),
                Forms\Components\TextInput::make('button_url')
                    ->label('Enlace del botón')
                    ->url()
                    ->maxLength(255),
                SpatieMediaLibraryFileUpload::make('image')
                    ->label('Imagen')
                    ->collection('slider_concreto')
                    ->required(),
                Forms\Components\TextInput::make('order')
                    ->label('Orden')
                    ->integer()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->label('Activo')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Título')
                    ->searchable(),
                Tables\Columns\TextColumn::make('order')
                    ->label('Orden')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Activo')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Creado')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Activo')
                    ->placeholder('Todos')
                    ->trueLabel('Solo activos')
                    ->falseLabel('Solo inactivos'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('order');
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
            'index' => Pages\ListConcretoSliders::route('/'),
            'create' => Pages\CreateConcretoSlider::route('/create'),
            'edit' => Pages\EditConcretoSlider::route('/{record}/edit'),
        ];
    }
}