<?php
// app/Http/Controllers/Api/NewsController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::where('is_active', true)
            ->latest('published_at')
            ->paginate(9);

        $mappedNews = $news->map(function ($newsItem) {
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
            'news' => $mappedNews,
            'pagination' => [
                'total' => $news->total(),
                'per_page' => $news->perPage(),
                'current_page' => $news->currentPage(),
                'last_page' => $news->lastPage(),
            ],
        ]);
    }

    public function show($slug)
    {
        $newsItem = News::where('slug', $slug)->where('is_active', true)->firstOrFail();
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
