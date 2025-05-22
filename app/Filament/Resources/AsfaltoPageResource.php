<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AsfaltoPageResource\Pages;
use App\Models\AsfaltoPage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AsfaltoPageResource extends Resource
{
    protected static ?string $model = AsfaltoPage::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    
    protected static ?string $navigationLabel = 'Página de Asfalto';
    
    protected static ?string $navigationGroup = 'Gestión de Páginas';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Tabs')
                    ->tabs([
                        // Pestaña SEO
                        Forms\Components\Tabs\Tab::make('SEO')
                            ->schema([
                                Forms\Components\TextInput::make('title_seo')
                                    ->label('Título SEO')
                                    ->required()
                                    ->maxLength(100),
                                Forms\Components\Textarea::make('description_seo')
                                    ->label('Descripción SEO')
                                    ->rows(3)
                                    ->maxLength(255),
                                Forms\Components\FileUpload::make('image_seo')
                                    ->label('Imagen SEO')
                                    ->image()
                                    ->directory('asfalto/seo')
                                    ->visibility('public')
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('16:9')
                                    ->imageResizeTargetWidth('1200')
                                    ->imageResizeTargetHeight('630'),
                            ]),
                        
                        // Pestaña Sección 1
                        Forms\Components\Tabs\Tab::make('Sección 1')
                            ->schema([
                                Forms\Components\MarkdownEditor::make('section_title_01')
                                    ->label('Título de la Sección')
                                    ->required(),
                                Forms\Components\FileUpload::make('section_image_01')
                                    ->directory('asfalto/section1')
                                    ->image()
                                    ->imageEditor(true)
                                    ->imageCropAspectRatio('575:565')
                                    ->imageResizeTargetWidth(575)
                                    ->imageResizeTargetHeight(565)
                                    ->label('Imagen de la Sección (575px x 565px)'),
                            ]),
                        
                        // Pestaña Sección 2 - Soluciones
                        Forms\Components\Tabs\Tab::make('Sección 2 - Soluciones')
                            ->schema([
                                Forms\Components\TextInput::make('section_title_02')
                                    ->label('Título de la Sección')
                                    ->required()
                                    ->maxLength(100),
                                
                                Forms\Components\Section::make('Solución 1')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_01')
                                            ->directory('asfalto/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen de la Sección (160px x 160px)'),
                                        Forms\Components\TextInput::make('solucion_title_01')
                                            ->label('Título')
                                            ->maxLength(100),
                                        Forms\Components\MarkdownEditor::make('solucion_description_01')
                                            ->label('Descripción')
                                            ->required(),
                                    ])->columns(3),
                                
                                Forms\Components\Section::make('Solución 2')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_02')
                                            ->directory('asfalto/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen de la Sección (160px x 160px)'),
                                        Forms\Components\TextInput::make('solucion_title_02')
                                            ->label('Título')
                                            ->maxLength(100),
                                        Forms\Components\MarkdownEditor::make('solucion_description_02')
                                            ->label('Descripción')
                                            ->required(),
                                    ])->columns(3),
                                
                                Forms\Components\Section::make('Solución 3')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_03')
                                            ->directory('asfalto/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen de la Sección (160px x 160px)'),
                                        Forms\Components\TextInput::make('solucion_title_03')
                                            ->label('Título')
                                            ->maxLength(100),
                                        Forms\Components\MarkdownEditor::make('solucion_description_03')
                                            ->label('Descripción')
                                            ->required(),
                                    ])->columns(3),
                                
                                Forms\Components\Section::make('Solución 4')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_04')
                                            ->directory('asfalto/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen de la Sección (160px x 160px)'),
                                        Forms\Components\TextInput::make('solucion_title_04')
                                            ->label('Título')
                                            ->maxLength(100),
                                        Forms\Components\MarkdownEditor::make('solucion_description_04')
                                            ->label('Descripción')
                                            ->required(),
                                    ])->columns(3),
                            ]),
                        
                        // Pestaña Sección 3 - Capacidades
                        Forms\Components\Tabs\Tab::make('Sección 3 - Capacidades')
                            ->schema([
                                Forms\Components\TextInput::make('section_title_03')
                                    ->label('Título de la Sección')
                                    ->required()
                                    ->maxLength(100),
                                
                                Forms\Components\Section::make('Capacidad 1')
                                    ->schema([
                                        Forms\Components\FileUpload::make('capacidad_image_01')
                                            ->directory('asfalto/capacidades')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen capacidad 1 (160px x 160px)'),
                                        Forms\Components\MarkdownEditor::make('capacidad_title_01')
                                            ->label('Título')
                                            ->required(),
                                        Forms\Components\Textarea::make('capacidad_description_01')
                                            ->label('Descripción')
                                            ->rows(3),
                                    ])->columns(3),
                                
                                Forms\Components\Section::make('Capacidad 2')
                                    ->schema([
                                        Forms\Components\FileUpload::make('capacidad_image_02')
                                            ->directory('asfalto/capacidades')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen capacidad 1 (160px x 160px)'),
                                        Forms\Components\MarkdownEditor::make('capacidad_title_02')
                                            ->label('Título')
                                            ->required(),
                                        Forms\Components\Textarea::make('capacidad_description_02')
                                            ->label('Descripción')
                                            ->rows(3),
                                    ])->columns(3),
                                
                                Forms\Components\Section::make('Capacidad 3')
                                    ->schema([
                                        Forms\Components\FileUpload::make('capacidad_image_03')
                                            ->directory('asfalto/capacidades')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen capacidad 1 (160px x 160px)'),
                                        Forms\Components\MarkdownEditor::make('capacidad_title_03')
                                            ->label('Título')
                                            ->required(),
                                        Forms\Components\Textarea::make('capacidad_description_03')
                                            ->label('Descripción')
                                            ->rows(3),
                                    ])->columns(3),
                                Forms\Components\FileUpload::make('section_image_03')
                                        ->directory('asfalto/section3')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('760:615')
                                        ->imageResizeTargetWidth(760)
                                        ->imageResizeTargetHeight(615)
                                        ->label('Imagen capacidad 1 (760px x 615px)'),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title_seo')
                    ->label('Título de página')
                    ->searchable(),
                TextColumn::make('description_seo')
                    ->label('Descripción de página')
                    ->sortable(),
                ImageColumn::make('image_seo')
                    ->label('Imagen SEO'),
                TextColumn::make('created_at')
                    ->label('Fecha de creación')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label('Última Actualización')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListAsfaltoPages::route('/'),
            'create' => Pages\CreateAsfaltoPage::route('/create'),
            'edit' => Pages\EditAsfaltoPage::route('/{record}/edit'),
        ];
    }
}