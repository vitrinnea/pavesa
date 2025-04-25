<?php

namespace App\Http\Controllers;

use App\Models\Accommodation;
use App\Models\CoffeTour;
use App\Models\Contact;
use App\Models\Event;
use App\Models\ExperienceGastronomic;
use App\Models\Gallery;
use App\Models\HomeEvent;
use App\Models\HomeGallery;
use App\Models\HomeReason;
use App\Models\HomeSetting;
use App\Models\HomeSlider;
use App\Models\HomeTestimonial;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class PageController extends Controller
{
    //
    public function index()
    {
        $homeSliders = HomeSlider::where('is_active', 1)->get();
        $homeGalleries = HomeGallery::get();
        $homeEvents = HomeEvent::select('title', 'image', 'link')->orderBy('id', 'desc')->get();
        $homeReasons = HomeReason::select('title', 'images')->get();
        $homeTestimonials = HomeTestimonial::select('title', 'image', 'description')->get();
        $settings = HomeSetting::first();

        return view('index', compact('homeSliders', 'homeGalleries','homeEvents', 'homeReasons','homeTestimonials', 'settings'));
    }

    public function events($id)
    {
        $event = Event::where('slug', $id)->first();
        if (!$event) {
            abort(404);
        }

        return view('events', ['event' => $event]);
    }

    public function coffeTour()
    {
        $coffeTour = CoffeTour::where('slug', 'coffee-tour')->first();
        if (!$coffeTour) {
            abort(404);
        }

        return view('coffee-tour', ['coffeTour' => $coffeTour]);
    }

    public function experienceGastronomic()
    {
        $experienceGastronomic = ExperienceGastronomic::where('slug', 'experiencia-gastronomica')->first();
        if (!$experienceGastronomic) {
            abort(404);
        }

        return view('experience-gastronomic', ['experienceGastronomic' => $experienceGastronomic]);
    }

    public function restaurant()
    {
        $restaurant = Restaurant::where('slug', 'restaurante')->first();
        if (!$restaurant) {
            abort(404);
        }

        return view('restaurant', ['restaurant' => $restaurant]);
    }

    public function accommodation()
    {
        $accommodation = Accommodation::where('slug', 'hospedaje')->first();
        if (!$accommodation) {
            abort(404);
        }
        return view('accommodation',['accommodation' => $accommodation]);
    }

    public function gallery()
    {
        $gallery = Gallery::where('slug', 'galeria')->first();
        if (!$gallery) {
            abort(404);
        }
        return view('gallery',['gallery' => $gallery]);
    }

    public function contact()
    {
        $contact = Contact::where('slug', 'contacto')->first();
        if (!$contact) {
            abort(404);
        }

        return view('contact',['contact' => $contact]);
    }
}

