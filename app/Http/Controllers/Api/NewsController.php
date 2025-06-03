<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Support\Carbon;

class NewsController extends Controller
{
    public function index()
    {
        $blogs = BlogPost::where('published_at', '<=', Carbon::now())
            ->latest('published_at')
            ->paginate(40);

        $mappedNews = $blogs->map(function ($newsItem) {
            $image = $newsItem->getFirstMediaUrl('blog_image');
            return [
                'id' => $newsItem->id,
                'title' => $newsItem->title,
                'slug' => $newsItem->slug,
                'excerpt' => $newsItem->excerpt,
                'dia' => $newsItem->published_at->format('d'),
                'mes' => $newsItem->published_at->format('M'),
                'image' => $image,
            ];
        });

        return response()->json([
            'blogs' => $mappedNews,
            'pagination' => [
                'total' => $blogs->total(),
                'per_page' => $blogs->perPage(),
                'current_page' => $blogs->currentPage(),
                'last_page' => $blogs->lastPage(),
            ],
        ]);
    }

    public function show($slug)
    {
        $newsItem = BlogPost::where('slug', $slug)->where('is_active', true)->firstOrFail();
        $image = $newsItem->getFirstMediaUrl('featured');

        return response()->json([
            'id' => $newsItem->id,
            'title' => $newsItem->title,
            'slug' => $newsItem->slug,
            'content' => $newsItem->content,
            'excerpt' => $newsItem->excerpt,
            'published_at' => $newsItem->published_at->format('d/m/Y'),
            'image' => $image,
        ]);
    }
}
