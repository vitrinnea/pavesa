<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TerraceriaPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_seo',
        'description_seo',
        'image_seo',
        'section_image_01',
        'section_title_01',
        'section_description',
        'section_title_02',
        'solucion_image_01',
        'solucion_title_01',
        'solucion_image_02',
        'solucion_title_02',
        'solucion_image_03',
        'solucion_title_03',
        'solucion_image_04',
        'solucion_title_04',
        'section_title_03',
        'section_image_03',
        'alcance_image_01',
        'alcance_title_01',
        'alcance_image_02',
        'alcance_title_02',
        'alcance_image_03',
        'alcance_title_03',
    ];
}