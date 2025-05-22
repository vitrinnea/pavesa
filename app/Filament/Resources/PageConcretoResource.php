<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageConcretoResource\Pages;
use App\Filament\Resources\PageConcretoResource\RelationManagers;
use App\Models\ConcretoPage;
use Dom\Text;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PageConcretoResource extends Resource
{
    protected static ?string $model = ConcretoPage::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    
    protected static ?string $navigationLabel = 'Página de Concreto';
    
    protected static ?string $navigationGroup = 'Gestión de Páginas';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Tabs::make('Tabs')
                    ->tabs([
                        // Pestaña SEO
                        Tabs\Tab::make('SEO')
                            ->schema([
                                Grid::make(2)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la seccion SEO')->columnSpanFull(),
                                    TextInput::make('title_seo')
                                        ->label('Título SEO')
                                        ->required()
                                        ->maxLength(255),
                                    Textarea::make('description_seo')
                                        ->label('Descripción SEO')
                                        ->required()
                                        ->maxLength(255),
                                    FileUpload::make('image_seo')
                                        ->directory('seo')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('1200:630')
                                        ->imageResizeTargetWidth(1200)
                                        ->imageResizeTargetHeight(630)
                                        ->label('Imagen SEO 1200x630 pixeles')
                                        ->columnSpanFull(),
                                ]),
                            ]),
                        
                        // Pestaña Sección 1
                        Tabs\Tab::make('Sección 1')
                            ->schema([
                                Grid::make(3)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la primera seccion')->columnSpanFull(),
                                    MarkdownEditor::make('section_title_01')
                                        ->label('Titulo de la sección 01')
                                        ->required(),
                                    MarkdownEditor::make('section_description_01')
                                        ->label('Descripción de la sección 01')
                                        ->required(),
                                    FileUpload::make('section_image_01')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('500:650')
                                        ->imageResizeTargetWidth(500)
                                        ->imageResizeTargetHeight(650)
                                        ->label('Imagen de la sección 01 500x650 pixeles'),
                                ]),
                            ]),
                        
                        // Pestaña Sección 2 - Soluciones
                        Tabs\Tab::make('Sección 2 - Soluciones')
                            ->schema([
                                Grid::make(4)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la segunda seccion')->columnSpanFull(),
                                    TextInput::make('section_title_02')
                                        ->label('Titulo de la sección 02')
                                        ->required()
                                        ->maxLength(255)
                                        ->columnSpanFull(),
                                    Group::make()->schema([
                                        FileUpload::make('solution_image_01')
                                            ->directory('concreto/solutions')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen Solucion 01 160x160 pixeles'),
                                        TextInput::make('solution_title_01')
                                            ->label('Titulo de solucion 01')
                                            ->required()
                                            ->maxLength(255),
                                        MarkdownEditor::make('solution_description_01')
                                            ->label('Descripción de solución 01')
                                            ->required(),
                                    ]),
                                    Group::make()->schema([
                                        FileUpload::make('solution_image_02')
                                            ->directory('concreto/solutions')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen Solucion 02 160x160 pixeles'),
                                        TextInput::make('solution_title_02')
                                            ->label('Titulo de solucion 02')
                                            ->required()
                                            ->maxLength(255),
                                        MarkdownEditor::make('solution_description_02')
                                            ->label('Descripción de solución 02')
                                            ->required(),
                                    ]),
                                    Group::make()->schema([
                                        FileUpload::make('solution_image_03')
                                            ->directory('concreto/solutions')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen Solucion 03 160x160 pixeles'),
                                        TextInput::make('solution_title_03')
                                            ->label('Titulo de solucion 03')
                                            ->required()
                                            ->maxLength(255),
                                        MarkdownEditor::make('solution_description_03')
                                            ->label('Descripción de solución 03')
                                            ->required(),
                                    ]),
                                    Group::make()->schema([
                                        FileUpload::make('solution_image_04')
                                            ->directory('concreto/solutions')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('160:160')
                                            ->imageResizeTargetWidth(160)
                                            ->imageResizeTargetHeight(160)
                                            ->label('Imagen Solucion 04 160x160 pixeles'),
                                        TextInput::make('solution_title_04')
                                            ->label('Titulo de solucion 04')
                                            ->required()
                                            ->maxLength(255),
                                        MarkdownEditor::make('solution_description_04')
                                            ->label('Descripción de solución 04')
                                            ->required(),
                                    ]),
                                ]),
                            ]),
                        
                        // Pestaña Sección 3
                        Tabs\Tab::make('Sección 3')
                            ->schema([
                                Grid::make(2)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la tercera sección')->columnSpanFull(),
                                    Textarea::make('section_title_03')
                                        ->label('Titulo de la sección 03')
                                        ->required(),
                                    FileUpload::make('section_image_03')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('975:655')
                                        ->imageResizeTargetWidth(975)
                                        ->imageResizeTargetHeight(655)
                                        ->label('Imagen de la sección 03 975x655 pixeles'),
                                ]),
                            ]),
                        
                        // Pestaña Sección 4
                        Tabs\Tab::make('Sección 4')
                            ->schema([
                                Grid::make(4)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la cuarta sección')->columnSpanFull(),
                                    FileUpload::make('section_image_04')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('875:975')
                                        ->imageResizeTargetWidth(875)
                                        ->imageResizeTargetHeight(975)
                                        ->label('Imagen de la sección 04 875x975 pixeles'),
                                    TextArea::make('section_title_04')
                                        ->label('Titulo de la sección 04')
                                        ->required(),
                                    MarkdownEditor::make('section_subtitle_04')
                                        ->label('Subtitulo de la sección 04')
                                        ->required(),
                                    MarkdownEditor::make('section_description_04')
                                        ->label('Descripción de la sección 04')
                                        ->required(),
                                ]),
                            ]),
                        
                        // Pestaña Sección 5
                        Tabs\Tab::make('Sección 5')
                            ->schema([
                                Grid::make(2)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la quinta sección')->columnSpanFull(),
                                    Textarea::make('section_title_05')
                                        ->label('Titulo de la sección 05')
                                        ->required(),
                                    FileUpload::make('section_image_05')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('1370:355')
                                        ->imageResizeTargetWidth(1370)
                                        ->imageResizeTargetHeight(355)
                                        ->label('Imagen de la sección 05 1370x355 pixeles'),
                                ]),
                                Grid::make(2)->schema([
                                    Textarea::make('section_subtitle_05')
                                        ->label('Subtitulo de la sección 05')
                                        ->required(),
                                    MarkdownEditor::make('section_description_05')
                                        ->label('Descripción de la sección 05')
                                        ->required(),
                                ]),
                            ]),
                        
                        // Pestaña Sección 6 - Ventajas
                        Tabs\Tab::make('Sección 6 - Ventajas')
                            ->schema([
                                Grid::make()->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la sexta sección')->columnSpanFull(),
                                    TextInput::make('section_title_06')
                                        ->label('Titulo de la sección 06')
                                        ->required()
                                        ->columnSpanFull(),
                                ]),
                                Grid::make(5)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la seccion ventajas')->columnSpanFull(),
                                    TextArea::make('advantage_01')
                                        ->label('Ventaja 01')
                                        ->required(),
                                    TextArea::make('advantage_02')
                                        ->label('Ventaja 02')
                                        ->required(),
                                    TextArea::make('advantage_03')
                                        ->label('Ventaja 03')
                                        ->required(),
                                    TextArea::make('advantage_04')
                                        ->label('Ventaja 04')
                                        ->required(),
                                    TextArea::make('advantage_05')
                                        ->label('Ventaja 05')
                                        ->required(),
                                ]),
                                Grid::make(2)->schema([
                                    Placeholder::make('📝 Llena todos los datos correspondientes a la seccion imagenes adicionales')->columnSpanFull(),
                                    FileUpload::make('section_image_06')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('640:490')
                                        ->imageResizeTargetWidth(640)
                                        ->imageResizeTargetHeight(490)
                                        ->label('Imagen de la sección 06 640x490 pixeles'),
                                    FileUpload::make('section_image_07')
                                        ->directory('concreto')
                                        ->image()
                                        ->imageEditor(true)
                                        ->imageCropAspectRatio('760:730')
                                        ->imageResizeTargetWidth(760)
                                        ->imageResizeTargetHeight(730)
                                        ->label('Imagen de la sección 07 760x730 pixeles'),
                                ]),
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
            'index' => Pages\ListPageConcretos::route('/'),
            'create' => Pages\CreatePageConcreto::route('/create'),
            'edit' => Pages\EditPageConcreto::route('/{record}/edit'),
        ];
    }
}