<?php
// routes/web.php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Rutas del panel de administración (Filament)
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Filament se encargará de registrar sus propias rutas
});

// Ruta catch-all para el SPA de React
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
