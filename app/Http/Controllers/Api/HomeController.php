<?php
// app/Http/Controllers/Api/HomeController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AsfaltoPage;
use App\Models\ConcretoPage;
use App\Models\HomePage;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\News;
use App\Models\Setting;
use App\Models\SliderAsfalto;
use App\Models\SliderConcreto;
use App\Models\SliderTerraceria;

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
                    'button_url' => $slider->button_url,
                    'image' => $image,
                    'order' => $slider->order,
                ];
            });
        // Fetch the latest 3 news items
        $homePage = HomePage::first();

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
            'homePage' => $homePage,
            'news' => $news,
        ]);
    }

    public function concreto()
    {
        $sliders = SliderConcreto::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($slider) {
                $image = $slider->getFirstMediaUrl('slider_concreto');
                return [
                    'id' => $slider->id,
                    'title' => $slider->title,
                    'subtitle' => $slider->subtitle,
                    'description' => $slider->description,
                    'button_text' => $slider->button_text,
                    'button_url' => $slider->button_url,
                    'image' => $image,
                    'order' => $slider->order,
                ];
            });
        $concretPage = ConcretoPage::first();
        return response()->json([
            'sliders' => $sliders,
            'concretPage' => $concretPage,
        ]);
    }

    public function asfalto()
    {
        $sliders = SliderAsfalto::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($slider) {
                $image = $slider->getFirstMediaUrl('slider_asfalto');
                return [
                    'id' => $slider->id,
                    'title' => $slider->title,
                    'subtitle' => $slider->subtitle,
                    'description' => $slider->description,
                    'button_text' => $slider->button_text,
                    'button_url' => $slider->button_url,
                    'image' => $image,
                    'order' => $slider->order,
                ];
            });
        $asfaltoPage = AsfaltoPage::first();
        return response()->json([
            'sliders' => $sliders,
            'asfaltoPage' => $asfaltoPage,
        ]);
    }

    public function terraceria()
    {
        $sliders = SliderTerraceria::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($slider) {
                $image = $slider->getFirstMediaUrl('slider_terraceria');
                return [
                    'id' => $slider->id,
                    'title' => $slider->title,
                    'subtitle' => $slider->subtitle,
                    'description' => $slider->description,
                    'button_text' => $slider->button_text,
                    'button_url' => $slider->button_url,
                    'image' => $image,
                    'order' => $slider->order,
                ];
            });
        // $asfaltoPage = AsfaltoPage::first();
        return response()->json([
            'sliders' => $sliders,
            // 'asfaltoPage' => $asfaltoPage,
        ]);
    }

    public function settings()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return response()->json($settings);
    }
}

