<?php
// app/Http/Controllers/Api/HomeController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Service;
use App\Models\Project;
use App\Models\News;
use App\Models\Client;
use App\Models\Certification;
use App\Models\Setting;

class HomeController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($slider) {
                $image = $slider->getFirstMediaUrl('slider');
                return [
                    'id' => $slider->id,
                    'title' => $slider->title,
                    'subtitle' => $slider->subtitle,
                    'description' => $slider->description,
                    'button_text' => $slider->button_text,
                    'button_link' => $slider->button_link,
                    'image' => $image,
                    'order' => $slider->order,
                ];
            });

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

        $projects = Project::where('is_active', true)
            ->where('is_featured', true)
            ->latest()
            ->take(6)
            ->get()
            ->map(function ($project) {
                $image = $project->getFirstMediaUrl('featured');
                return [
                    'id' => $project->id,
                    'title' => $project->title,
                    'subtitle' => $project->subtitle,
                    'description' => $project->description,
                    'location' => $project->location,
                    'slug' => $project->slug,
                    'image' => $image,
                ];
            });

        $clients = Client::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($client) {
                $logo = $client->getFirstMediaUrl('logo');
                return [
                    'id' => $client->id,
                    'name' => $client->name,
                    'description' => $client->description,
                    'website' => $client->website,
                    'logo' => $logo,
                    'order' => $client->order,
                ];
            });

        $certifications = Certification::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($certification) {
                $image = $certification->getFirstMediaUrl('image');
                return [
                    'id' => $certification->id,
                    'title' => $certification->title,
                    'description' => $certification->description,
                    'image' => $image,
                    'order' => $certification->order,
                ];
            });

        $news = News::where('is_active', true)
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(function ($newsItem) {
                $image = $newsItem->getFirstMediaUrl('featured');
                return [
                    'id' => $newsItem->id,
                    'title' => $newsItem->title,
                    'slug' => $newsItem->slug,
                    'excerpt' => $newsItem->excerpt,
                    'published_at' => $newsItem->published_at->format('d/m/Y'),
                    'image' => $image,
                ];
            });

        return response()->json([
            'sliders' => $sliders,
            'services' => $services,
            'projects' => $projects,
            'clients' => $clients,
            'certifications' => $certifications,
            'news' => $news,
        ]);
    }

    public function settings()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return response()->json($settings);
    }
}

