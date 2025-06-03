<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuItemsTable extends Migration
{
    public function up()
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('target')->default('_self'); // Ejemplo: _self, _blank
            $table->string('url');
            $table->foreignId('parent_id')->nullable()->constrained('menu_items')->onDelete('cascade');
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('menu_items');
    }
}