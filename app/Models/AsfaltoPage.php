<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsfaltoPage extends Model
{
    use HasFactory;
    
    protected $fillable = [
        // SEO
        'title_seo',
        'description_seo',
        'image_seo',
        
        // Sección 1
        'section_image_01',
        'section_title_01',
        
        // Solución Sección 2
        'section_title_02',
        'solucion_image_01',
        'solucion_title_01',
        'solucion_description_01',
        'solucion_image_02',
        'solucion_title_02',
        'solucion_description_02',
        'solucion_image_03',
        'solucion_title_03',
        'solucion_description_03',
        'solucion_image_04',
        'solucion_title_04',
        'solucion_description_04',
        
        // Sección 3
        'section_title_03',
        'capacidad_image_01',
        'capacidad_title_01',
        'capacidad_description_01',
        'capacidad_image_02',
        'capacidad_title_02',
        'capacidad_description_02',
        'capacidad_image_03',
        'capacidad_title_03',
        'capacidad_description_03',
        'section_image_03',
    ];
}