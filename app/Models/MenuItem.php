<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'target',
        'url',
        'parent_id',
        'order',
    ];

    // Relación padre
    public function parent()
    {
        return $this->belongsTo(MenuItem::class, 'parent_id');
    }

    // Relación hijos
    public function children()
    {
        return $this->hasMany(MenuItem::class, 'parent_id');
    }
}