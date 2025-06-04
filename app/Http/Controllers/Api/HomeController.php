<?php
// app/Http/Controllers/Api/HomeController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AsfaltoPage;
use App\Models\BlogPost;
use App\Models\ConcretoPage;
use App\Models\HomePage;
use App\Models\MenuItem;
use Illuminate\Support\Carbon;
use App\Models\Slider;
use App\Models\Setting;
use App\Models\SliderAsfalto;
use App\Models\SliderConcreto;
use App\Models\SliderTerraceria;
use App\Models\TerraceriaPage;

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
        $homePage = HomePage::first();
        $news = BlogPost::where('published_at', '<=', Carbon::now())
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(function ($newsItem) {
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
        $terraceriaPage = TerraceriaPage::first();
        return response()->json([
            'sliders' => $sliders,
            'terraceriaPage' => $terraceriaPage,
        ]);
    }

    public function settings()
    {
        $menu = MenuItem::whereNull('parent_id')
            ->orderBy('order')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'url' => $item->url,
                    'target' => $item->target,
                    'children' => $item->children->map(function ($child) {
                        return [
                            'id' => $child->id,
                            'title' => $child->title,
                            'url' => $child->url,
                            'target' => $child->target,
                        ];
                    }),
                ];
            });
        $settings = Setting::all()->pluck('value', 'key');
        return response()->json([
            'menus' => $menu,
            'settings' => $settings,
        ]);
    }
}

