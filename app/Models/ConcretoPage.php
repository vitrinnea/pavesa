<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConcretoPage extends Model
{
    use HasFactory;
    
    protected $fillable = [
        // SEO
        'title_seo',
        'description_seo',
        'image_seo',
        
        // Secciones
        'section_title_01',
        'section_description_01',
        'section_image_01',
        'section_title_02',
        
        // Soluciones
        'solution_image_01',
        'solution_title_01',
        'solution_description_01',
        'solution_image_02',
        'solution_title_02',
        'solution_description_02',
        'solution_image_03',
        'solution_title_03',
        'solution_description_03',
        'solution_image_04',
        'solution_title_04',
        'solution_description_04',
        
        // Más secciones
        'section_title_03',
        'section_image_03',
        'section_title_04',
        'section_subtitle_04',
        'section_description_04',
        'section_image_04',
        'section_title_05',
        'section_subtitle_05',
        'section_description_05',
        'section_image_05',
        'section_title_06',
        
        // Ventajas
        'advantage_01',
        'advantage_02',
        'advantage_03',
        'advantage_04',
        'advantage_05',
        
        // Imágenes adicionales
        'section_image_06',
        'section_image_07',
    ];
}