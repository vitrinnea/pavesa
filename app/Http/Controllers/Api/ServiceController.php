<?php
// app/Http/Controllers/Api/
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($service) {
                $image = $service->getFirstMediaUrl('service');
                return [
                    'id' => $service->id,
                    'title' => $service->title,
                    'description' => $service->description,
                    'icon' => $service->icon,
                    'image' => $image,
                    'order' => $service->order,
                ];
            });

        return response()->json($services);
    }

    public function show($id)
    {
        $service = Service::findOrFail($id);
        $image = $service->getFirstMediaUrl('service');

        return response()->json([
            'id' => $service->id,
            'title' => $service->title,
            'description' => $service->description,
            'icon' => $service->icon,
            'image' => $image,
            'order' => $service->order,
        ]);
    }
}

