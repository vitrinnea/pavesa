<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Support\Str;

class Project extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $table = 'projects';

    protected $fillable = [
        'title',
        'description',
        'image',
    ];

}
