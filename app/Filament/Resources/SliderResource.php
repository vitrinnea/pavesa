<?php
// app/Filament/Resources/SliderResource.php
namespace App\Filament\Resources;

use App\Filament\Resources\SliderResource\Pages;
use App\Models\Slider;
use Filament\Forms;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class SliderResource extends Resource
{
    protected static ?string $model = Slider::class;
    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Sliders';
    protected static ?string $navigationLabel = 'Slider Home';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Título')
                    ->maxLength(255),
                Forms\Components\TextInput::make('subtitle')
                    ->label('Subtítulo (aparece en la parte miniatura)')
                    ->maxLength(255),
                MarkdownEditor::make('description')
                    ->label('Descripción')
                    ->required(),
                Forms\Components\TextInput::make('button_text')
                    ->label('Texto del botón')
                    ->maxLength(50),

                SpatieMediaLibraryFileUpload::make('image')
                    ->label('Imagen')
                    ->collection('slider')
                    ->required(),
                SpatieMediaLibraryFileUpload::make('image_mobile')
                    ->label('Imagen Mobile')
                    ->collection('slider_mobile')
                    ->required(),
                Forms\Components\TextInput::make('order')
                    ->label('Orden')
                    ->integer()
                    ->default(0),
                    Forms\Components\TextInput::make('button_url')
                    ->label('Enlace del botón')
                    ->url()
                    ->maxLength(255),
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
            'index' => Pages\ListSliders::route('/'),
            'create' => Pages\CreateSlider::route('/create'),
            'edit' => Pages\EditSlider::route('/{record}/edit'),
        ];
    }
}
