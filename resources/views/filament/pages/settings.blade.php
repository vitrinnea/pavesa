<x-filament-panels::page>
    <form wire:submit="save">
        {{ $this->form }}

        <x-filament::button type="submit" class="mt-4">
            Guardar configuración
        </x-filament::button>
    </form>
</x-filament-panels::page>
