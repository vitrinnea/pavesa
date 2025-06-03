<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Qouter extends Model
{
    protected $table = 'qouteres';
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'location',
        'description',
        'message',
        'created_at',
        'updated_at',
    ];
}
