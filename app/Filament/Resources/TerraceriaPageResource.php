<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TerraceriaPageResource\Pages;
use App\Models\TerraceriaPage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TerraceriaPageResource extends Resource
{
    protected static ?string $model = TerraceriaPage::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationLabel = 'Página de Terracería';

    protected static ?string $navigationGroup = 'Gestión de Páginas';

    protected static ?int $navigationSort = 4;

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
                                    ->label('Imagen SEO (1200px x 630px)')
                                    ->image()
                                    ->directory('terraceria/seo')
                                    ->visibility('public')
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('16:9')
                                    ->imageResizeTargetWidth('1200')
                                    ->imageResizeTargetHeight('630'),
                            ]),

                        // Pestaña Sección 1
                        Forms\Components\Tabs\Tab::make('Sección 1')
                            ->schema([
                                Forms\Components\FileUpload::make('section_image_01')
                                    ->directory('terraceria/section1')
                                    ->image()
                                    ->imageEditor(true)
                                    ->imageCropAspectRatio('785:850')
                                    ->imageResizeTargetWidth(785)
                                    ->imageResizeTargetHeight(850)
                                    ->label('Imagen de la Sección (785px x 850px)'),
                                Forms\Components\TextInput::make('section_title_01')
                                    ->label('Título de la Sección')
                                    ->required()
                                    ->maxLength(100),
                                Forms\Components\Textarea::make('section_description')
                                    ->label('Descripción de la Sección')
                                    ->required(),
                            ]),

                        // Pestaña Sección 2 - Soluciones
                        Forms\Components\Tabs\Tab::make('Sección 2 - Soluciones')
                            ->schema([
                                Forms\Components\MarkdownEditor::make('section_title_02')
                                    ->label('Título de la Sección')
                                    ->required(),
                                Forms\Components\Section::make('Solución 1')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_01')
                                            ->directory('terraceria/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('330:390')
                                            ->imageResizeTargetWidth(330)
                                            ->imageResizeTargetHeight(390)
                                            ->label('Imagen de la Sección (330px x 390px)'),
                                        Forms\Components\Textarea::make('solucion_title_01')
                                            ->label('Título Solución 1')
                                            ->required(),
                                    ])->columns(3),

                                Forms\Components\Section::make('Solución 2')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_02')
                                            ->directory('terraceria/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('330:390')
                                            ->imageResizeTargetWidth(330)
                                            ->imageResizeTargetHeight(390)
                                            ->label('Imagen de la Sección (330px x 390px)'),
                                        Forms\Components\Textarea::make('solucion_title_02')
                                            ->label('Título Solución 2')
                                            ->required(),
                                    ])->columns(3),

                                Forms\Components\Section::make('Solución 3')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_03')
                                            ->directory('terraceria/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('330:390')
                                            ->imageResizeTargetWidth(330)
                                            ->imageResizeTargetHeight(390)
                                            ->label('Imagen de la Sección (330px x 390px)'),
                                        Forms\Components\Textarea::make('solucion_title_03')
                                            ->label('Título Solución 3')
                                            ->required(),
                                    ])->columns(3),

                                Forms\Components\Section::make('Solución 4')
                                    ->schema([
                                        Forms\Components\FileUpload::make('solucion_image_04')
                                            ->directory('terraceria/soluciones')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('330:390')
                                            ->imageResizeTargetWidth(330)
                                            ->imageResizeTargetHeight(390)
                                            ->label('Imagen de la Sección (330px x 390px)'),
                                        Forms\Components\Textarea::make('solucion_title_04')
                                            ->label('Título Solución 4')
                                            ->required(),
                                    ])->columns(3),
                            ]),

                        // Pestaña Sección 3 - Alcance
                        Forms\Components\Tabs\Tab::make('Sección 3 - Alcance')
                            ->schema([
                                Forms\Components\MarkdownEditor::make('section_title_03')
                                    ->label('Título de la Sección')
                                    ->required(),
                                Forms\Components\FileUpload::make('section_image_03')
                                    ->directory('terraceria/section3')
                                    ->image()
                                    ->imageEditor(true)
                                    ->imageCropAspectRatio('740:470')
                                    ->imageResizeTargetWidth(740)
                                    ->imageResizeTargetHeight(470)
                                    ->label('Imagen de la Sección (740px x 470px)'),
                                Forms\Components\Section::make('Alcance 1')
                                    ->schema([
                                        Forms\Components\FileUpload::make('alcance_image_01')
                                            ->directory('terraceria/alcance')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('200:200')
                                            ->imageResizeTargetWidth(200)
                                            ->imageResizeTargetHeight(200)
                                            ->label('Imagen Alcance 1 (200px x 200px)'),
                                        Forms\Components\TextInput::make('alcance_title_01')
                                            ->label('Título Alcance 1')
                                            ->maxLength(100),
                                    ])->columns(3),

                                Forms\Components\Section::make('Alcance 2')
                                    ->schema([
                                        Forms\Components\FileUpload::make('alcance_image_02')
                                            ->directory('terraceria/alcance')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('200:200')
                                            ->imageResizeTargetWidth(200)
                                            ->imageResizeTargetHeight(200)
                                            ->label('Imagen Alcance 1 (200px x 200px)'),
                                        Forms\Components\TextInput::make('alcance_title_02')
                                            ->label('Título Alcance 2')
                                            ->maxLength(100),
                                    ])->columns(3),

                                Forms\Components\Section::make('Alcance 3')
                                    ->schema([
                                        Forms\Components\FileUpload::make('alcance_image_03')
                                            ->directory('terraceria/alcance')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('200:200')
                                            ->imageResizeTargetWidth(200)
                                            ->imageResizeTargetHeight(200)
                                            ->label('Imagen Alcance 1 (200px x 200px)'),
                                        Forms\Components\TextInput::make('alcance_title_03')
                                            ->label('Título Alcance 3')
                                            ->maxLength(100),
                                    ])->columns(3),
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
                    ->label('Título SEO')
                    ->searchable(),
                TextColumn::make('description_seo')
                    ->label('Descripción SEO')
                    ->limit(50)
                    ->sortable(),
                ImageColumn::make('image_seo')
                    ->label('Imagen SEO'),
                TextColumn::make('created_at')
                    ->label('Fecha de creación')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label('Última actualización')
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
            'index' => Pages\ListTerraceriaPages::route('/'),
            'create' => Pages\CreateTerraceriaPage::route('/create'),
            'edit' => Pages\EditTerraceriaPage::route('/{record}/edit'),
        ];
    }
}