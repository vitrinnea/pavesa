<?php
// app/Http/Controllers/Api/ProjectController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('is_active', true)
            ->latest()
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
                    'is_featured' => $project->is_featured,
                ];
            });

        return response()->json($projects);
    }

    public function show($slug)
    {
        $project = Project::where('slug', $slug)->where('is_active', true)->firstOrFail();
        $featuredImage = $project->getFirstMediaUrl('featured');
        $gallery = $project->getMedia('gallery')->map(function ($media) {
            return $media->getUrl();
        });

        return response()->json([
            'id' => $project->id,
            'title' => $project->title,
            'subtitle' => $project->subtitle,
            'description' => $project->description,
            'location' => $project->location,
            'slug' => $project->slug,
            'featured_image' => $featuredImage,
            'gallery' => $gallery,
            'is_featured' => $project->is_featured,
        ]);
    }
}
