<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class SliderAsfalto extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'button_text',
        'button_url',
        'order',
        'is_active',
    ];
    
    protected $casts = [
        'is_active' => 'boolean',
    ];
    
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('slider_asfalto')
            ->singleFile();
    }
}