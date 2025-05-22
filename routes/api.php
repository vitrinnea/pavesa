<?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Datos para la página principal
Route::get('/home-data', [HomeController::class, 'index']);

// Datos para la página concreto
Route::get('/concreto', [HomeController::class, 'concreto']);

// Datos para la página de asfalto
Route::get('/asfalto', [HomeController::class, 'asfalto']);

// Datos para la página de Terraceria
Route::get('/terraceria', [HomeController::class, 'terraceria']);

// Configuraciones globales
Route::get('/settings', [HomeController::class, 'settings']);

// Servicios
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

// Proyectos
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);

// Noticias
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{slug}', [NewsController::class, 'show']);

// Formularios
Route::post('/contact', [ContactController::class, 'contact']);
Route::post('/quote', [ContactController::class, 'quote']);
Route::post('/newsletter', [ContactController::class, 'newsletter']);
