<?php
// app/Filament/Pages/SiteSettings.php
namespace App\Filament\Pages;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Pages\Page;
use App\Models\Setting;
use Filament\Notifications\Notification;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Facades\Storage;

class SiteSettings extends Page implements Forms\Contracts\HasForms
{
    use Forms\Concerns\InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationLabel = 'Configuración';
    protected static ?string $title = 'Configuración del sitio';
    protected static ?string $slug = 'settings';
    protected static ?string $navigationGroup = 'Sistema';
    protected static string $view = 'filament.pages.settings';

    // Define todas las propiedades que representan campos del formulario
    public $site_name;
    public $site_description;
    public $site_logo;
    public $primary_color;
    public $secondary_color;
    public $contact_email;
    public $contact_phone;
    public $contact_address;
    public $facebook_url;
    public $instagram_url;
    public $twitter_url;
    public $linkedin_url;
    public $youtube_url;
    public $form_email;
    public $form_success_message;

    public function mount(): void
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();

        // Asignar cada valor a su propiedad correspondiente
        foreach ($settings as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }

        $this->form->fill($settings);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Configuración')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('General')
                            ->schema([
                                Forms\Components\TextInput::make('site_name')
                                    ->label('Nombre del sitio')
                                    ->required(),
                                Forms\Components\Textarea::make('site_description')
                                    ->label('Descripción del sitio')
                                    ->rows(3),
                                FileUpload::make('site_logo')
                                    ->label('Logo del sitio')
                                    ->image()
                                    ->directory('settings')
                                    ->visibility('public'),
                                Forms\Components\ColorPicker::make('primary_color')
                                    ->label('Color primario'),
                                Forms\Components\ColorPicker::make('secondary_color')
                                    ->label('Color secundario'),
                            ]),
                        Forms\Components\Tabs\Tab::make('Contacto')
                            ->schema([
                                Forms\Components\TextInput::make('contact_email')
                                    ->label('Email de contacto')
                                    ->email(),
                                Forms\Components\TextInput::make('contact_phone')
                                    ->label('Teléfono'),
                                Forms\Components\TextInput::make('contact_address')
                                    ->label('Dirección')
                                    ->columnSpan(2),
                            ]),
                        Forms\Components\Tabs\Tab::make('Redes Sociales')
                            ->schema([
                                Forms\Components\TextInput::make('facebook_url')
                                    ->label('Facebook URL')
                                    ->url(),
                                Forms\Components\TextInput::make('instagram_url')
                                    ->label('Instagram URL')
                                    ->url(),
                                Forms\Components\TextInput::make('twitter_url')
                                    ->label('Twitter URL')
                                    ->url(),
                                Forms\Components\TextInput::make('linkedin_url')
                                    ->label('LinkedIn URL')
                                    ->url(),
                                Forms\Components\TextInput::make('youtube_url')
                                    ->label('YouTube URL')
                                    ->url(),
                            ]),
                        Forms\Components\Tabs\Tab::make('Formulario')
                            ->schema([
                                Forms\Components\TextInput::make('form_email')
                                    ->label('Email para recibir formularios')
                                    ->email(),
                                Forms\Components\Textarea::make('form_success_message')
                                    ->label('Mensaje de éxito')
                                    ->placeholder('Su formulario ha sido enviado correctamente')
                                    ->rows(2),
                            ]),
                    ])
                    ->columnSpan(2),
            ]);
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            // Manejar archivos especialmente
            if ($key === 'site_logo' && !empty($value)) {
                // Si es un nuevo archivo (array), obtener la ruta
                if (is_array($value)) {
                    $value = $value[0] ?? '';
                }
            }

            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value, 'group' => $this->determineGroup($key)]
            );
        }

        Notification::make()
            ->title('Configuración guardada')
            ->success()
            ->send();
    }

    private function determineGroup(string $key): string
    {
        if (str_starts_with($key, 'site_')) {
            return 'general';
        }

        if (str_starts_with($key, 'contact_')) {
            return 'contact';
        }

        if (str_contains($key, '_url')) {
            return 'social';
        }

        if (str_starts_with($key, 'form_')) {
            return 'form';
        }

        return 'general';
    }
}
