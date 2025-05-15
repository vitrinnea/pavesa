<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HomePageResource\Pages;
use App\Filament\Resources\HomePageResource\RelationManagers;
use App\Models\HomePage;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HomePageResource extends Resource
{
    protected static ?string $model = HomePage::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        Grid::make(4)
                            ->schema([
                                Placeholder::make('📝 llena los datos de servicios debes llanarlos en orden')->columnSpanFull(),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('service_image_01')
                                            ->directory('home/service')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('515:608')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(515)
                                            ->imageResizeTargetHeight(608)
                                            ->label('Imagen Servicio 515x608px'),
                                        TextInput::make('service_description_01')
                                            ->label('Descripcion Servicio 01')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('service_image_02')
                                            ->directory('home/service')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('515:608')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(515)
                                            ->imageResizeTargetHeight(608)
                                            ->label('Imagen Servicio 515x608px'),
                                        TextInput::make('service_description_02')
                                            ->label('Descripcion Servicio 02')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('service_image_03')
                                            ->directory('home/service')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('515:608')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(515)
                                            ->imageResizeTargetHeight(608)
                                            ->label('Imagen Servicio 515x608px'),
                                        TextInput::make('service_description_03')
                                            ->label('Descripcion Servicio 03')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('service_image_04')
                                            ->directory('home/service')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('515:608')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(515)
                                            ->imageResizeTargetHeight(608)
                                            ->label('Imagen Servicio 515x608px'),
                                        TextInput::make('service_description_04')
                                            ->label('Descripcion Servicio 04')
                                            ->maxLength(255),
                                    ])
                            ]),
                        Grid::make(2)
                            ->schema([
                                Group::make()
                                    ->schema([
                                        TextInput::make('service_description_general')
                                            ->label('Descripcion General Servicio')
                                            ->maxLength(255),
                                        TextInput::make('service_link_general')
                                            ->label('Link General Servicio')
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Group::make()
                            ->schema([
                                Placeholder::make('📝 llena los datos de Cotizador debes llanarlos en orden')->columnSpanFull(),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('quote_image')
                                            ->directory('home/quote')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('450:470')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(450)
                                            ->imageResizeTargetHeight(470)
                                            ->label('Imagen Quote 450x470px'),
                                        TextInput::make('quote_title')
                                            ->label('Titulo Quote')
                                            ->maxLength(255),
                                        TextInput::make('quote_description')
                                            ->label('Descripcion Quote')
                                            ->maxLength(255),
                                        TextInput::make('quote_sender_email')
                                            ->label('Email Quote')
                                            ->maxLength(255),
                                    ])
                            ]),
                        Grid::make(1)
                            ->schema([
                                Placeholder::make('📝 llena los datos de soluciones debes llanarlos en orden')->columnSpanFull(),

                                Group::make()
                                    ->schema([
                                        TextInput::make('solution_title_general')
                                            ->label('Titulo General Solucion')
                                            ->maxLength(255),
                                    ])
                            ]),
                        Grid::make(4)
                            ->schema([
                                Group::make()
                                    ->schema([
                                        FileUpload::make('solution_image_01')
                                            ->directory('home/solution')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('320:440')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(320)
                                            ->imageResizeTargetHeight(440)
                                            ->label('Imagen Solucion 320x440px'),
                                        TextInput::make('solution_description_01')
                                            ->label('Descripcion Solucion 01')
                                            ->maxLength(255),
                                        TextInput::make('solution_link_01')
                                            ->label('Link Solucion 01')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('solution_image_02')
                                            ->directory('home/solution')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('320:440')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(320)
                                            ->imageResizeTargetHeight(440)
                                            ->label('Imagen Solucion 320x440px'),
                                        TextInput::make('solution_description_02')
                                            ->label('Descripcion Solucion 02')
                                            ->maxLength(255),
                                        TextInput::make('solution_link_02')
                                            ->label('Link Solucion 02')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('solution_image_03')
                                            ->directory('home/solution')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('320:440')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(320)
                                            ->imageResizeTargetHeight(440)
                                            ->label('Imagen Solucion 320x440px'),
                                        TextInput::make('solution_description_03')
                                            ->label('Descripcion Solucion 03')
                                            ->maxLength(255),
                                        TextInput::make('solution_link_03')
                                            ->label('Link Solucion 03')
                                            ->maxLength(
                                                255
                                            ),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('solution_image_04')
                                            ->directory('home/solution')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('320:440')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(320)
                                            ->imageResizeTargetHeight(440)
                                            ->label('Imagen Solucion 320x440px'),
                                        TextInput::make('solution_description_04')
                                            ->label('Descripcion Solucion 04')
                                            ->maxLength(255),
                                        TextInput::make('solution_link_04')
                                            ->label('Link Solucion 04')
                                            ->maxLength(255),
                                    ])
                            ]),
                        Grid::make(1)
                            ->schema([

                                Group::make()
                                    ->schema([
                                        Placeholder::make('📝 llena los datos de proyectos debes llanarlos en orden')->columnSpanFull(),
                                        TextInput::make('project_title_general')
                                            ->label('Titulo General Proyectos')
                                            ->maxLength(255),
                                    ])
                            ]),
                        Grid::make(4)
                            ->schema([
                                Placeholder::make('📝 llena los datos de clientes debes llanarlos en orden')->columnSpanFull(),
                                Group::make()
                                    ->schema([
                                        TextInput::make('customer_title_general')
                                            ->label('Titulo General Clientes')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('customer_images_gallery')
                                            ->directory('home/customer')
                                            ->image()
                                            ->multiple()
                                            ->imageEditor(true)
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetHeight(50)
                                            ->label('Imagen Cliente'),
                                    ]),

                            ]),
                        Grid::make(4)
                            ->schema([
                                Placeholder::make('📝 llena los datos de certificaciones debes llanarlos en orden')->columnSpanFull(),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('certification_image_general')
                                            ->directory('home/certification')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('650:400')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(650)
                                            ->imageResizeTargetHeight(400)
                                            ->label('Imagen Certificacion 650x400px'),
                                        TextInput::make('certification_title_general')
                                            ->label('Titulo General Certificacion')
                                            ->maxLength(255),
                                        TextInput::make('certification_description_general')
                                            ->label('Descripcion General Certificacion')
                                            ->maxLength(255),
                                        TextInput::make('certification_link_general')
                                            ->label('Link General Certificacion')
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Grid::make(2)
                            ->schema([

                                Group::make()
                                    ->schema([
                                        FileUpload::make('certification_image_01')
                                            ->directory('home/certification')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('100:100')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(100)
                                            ->imageResizeTargetHeight(100)
                                            ->label('Imagen Certificacion 100x100px'),
                                        TextInput::make('certification_title_01')
                                            ->label('Titulo Certificacion 01')
                                            ->maxLength(255),
                                        TextInput::make('certification_description_01')
                                            ->label('Descripcion Certificacion 01')
                                            ->maxLength(255),
                                    ]),
                                Group::make()
                                    ->schema([
                                        FileUpload::make('certification_image_02')
                                            ->directory('home/certification')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('100:100')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(100)
                                            ->imageResizeTargetHeight(100)
                                            ->label('Imagen Certificacion 100x100px'),
                                        TextInput::make('certification_title_02')
                                            ->label('Titulo Certificacion 02')
                                            ->maxLength(255),
                                        TextInput::make('certification_description_02')
                                            ->label('Descripcion Certificacion 02')
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Grid::make(2)
                            ->schema([
                                Group::make()
                                    ->schema([
                                        TextInput::make('title_seo')
                                            ->label('Titulo SEO')
                                            ->maxLength(255),
                                        TextInput::make('description_seo')
                                            ->label('Descripcion SEO')
                                            ->maxLength(255),
                                        FileUpload::make('image_seo')
                                            ->directory('home/seo')
                                            ->image()
                                            ->imageEditor(true)
                                            ->imageCropAspectRatio('1200:630')
                                            ->imageResizeMode('cover')               // Asegura que la imagen se ajuste completamente
                                            ->imageResizeTargetWidth(1200)
                                            ->imageResizeTargetHeight(630)
                                            ->label('Imagen SEO 1200x630px'),
                                    ]),
                            ])




                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListHomePages::route('/'),
            'create' => Pages\CreateHomePage::route('/create'),
            'edit' => Pages\EditHomePage::route('/{record}/edit'),
        ];
    }
}
