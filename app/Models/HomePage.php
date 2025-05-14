<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomePage extends Model
{
    protected $table = 'home_page';
    protected $fillable = [
        'title_seo',
        'description_seo',
        'image_seo',
        //service
        'service_description_01',
        'service_image_01',
        'service_description_02',
        'service_image_02',
        'service_description_03',
        'service_image_03',
        'service_description_04',
        'service_image_04',

        'service_description_general',
        'service_link_general',

        //Quote
        'quote_image',
        'quote_title',
        'quote_description',
        'quote_sender_email',

        //solution
        'solution_title_general',
        'solution_image_01',
        'solution_description_01',
        'solution_link_01',
        'solution_image_02',
        'solution_description_02',
        'solution_link_02',
        'solution_image_03',
        'solution_description_03',
        'solution_link_03',
        'solution_image_04',
        'solution_description_04',
        'solution_link_04',

        //project
        'project_title_general',

        //customer
        'customer_title_general',
        'customer_images_gallery',

    ];

    public $timestamps = true;
    protected $dates = [
        'created_at',
        'updated_at',
    ];
    protected $casts = [
        'customer_images_gallery' => 'array',
    ];

    // Define any relationships or additional methods here
}
