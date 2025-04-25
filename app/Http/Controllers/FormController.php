<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Mail\NewsletterMail;
use App\Mail\QouterMail;
use App\Models\Accommodation;
use App\Models\CoffeTour;
use App\Models\Contact;
use App\Models\Event;
use App\Models\ExperienceGastronomic;
use App\Models\FormContact;
use App\Models\FormNewsletter;
use App\Models\HomeSetting;
use App\Models\Qouter;
use App\Models\Restaurant;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function postSendQouter(Request $request)
    {
        try {
            if ($request->page_qouter == 'coffee-tour') {
                $validator = Validator::make($request->all(), [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255',
                    'phone' => ['required', 'string', 'regex:/^\+503\s\d{4}-\d{4}$/'], // Formato +503 9999-9999
                    'date_event' => 'required|date',
                    'number_people' => 'required|integer',
                    'page_qouter' => 'required|string|min:3',
                    'message' => 'required|string',
                ], [
                    'phone.regex' => 'El número de teléfono debe tener el formato +503 9999-9999'
                ]);
            } else {
                $validator = Validator::make($request->all(), [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255',
                    'phone' => ['required', 'string', 'regex:/^\+503\s\d{4}-\d{4}$/'], // Formato +503 9999-9999
                    'type_event' => 'required|string|min:3',
                    'date_event' => 'required|date',
                    'number_people' => 'required|integer',
                    'page_qouter' => 'required|string|min:3',
                    'message' => 'required|string',
                ], [
                    'phone.regex' => 'El número de teléfono debe tener el formato +503 9999-9999'
                ]);
            }

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Error de validación',
                    'errors' => $validator->errors()
                ], 422);
            }
            Log::info($request->page_qouter);
            $qouter = Qouter::create($validator->validated());

            switch ($qouter->page_qouter) {
                case 'home':
                    $emails = HomeSetting::where('id', 1)->first()->quoter_destination;
                    break;
                case 'bodas':
                    $emails = Event::where('slug', 'bodas')->first()->quoter_destination;
                    break;
                case 'eventos-sociales':
                    $emails = Event::where('slug', 'eventos-sociales')->first()->quoter_destination;
                    break;
                case 'eventos-corporativos':
                    $emails = Event::where('slug', 'eventos-corporativos')->first()->quoter_destination;
                    break;
                case 'coffee-tour':
                    $emails = CoffeTour::where('slug', 'coffee-tour')->first()->quoter_destination;
                    break;
                case 'experiencia-gastronomica':
                    $emails = ExperienceGastronomic::where('slug', 'experiencia-gastronomica')->first()->quoter_destination;
                    break;
                case 'restaurante':
                    $emails = Restaurant::where('slug', 'restaurante')->first()->quoter_destination;
                    break;
                case 'hospedaje':
                    $emails = Accommodation::where('slug', 'hospedaje')->first()->quoter_destination;
                    break;
                default:
                    $emails = 'admin@digitaldobleu.com';
            }

            foreach (explode(',', $emails) as $email) {
                Mail::to($email)->send(new QouterMail($qouter));
            }

            return response()->json([
                'message' => 'Cotización enviada exitosamente',
                'data' => $qouter
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function postSendContact(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'phone' => ['required', 'string', 'regex:/^\+503\s\d{4}-\d{4}$/'], // Formato +503 9999-9999
                'message' => 'required|string',
            ], [
                'phone.regex' => 'El número de teléfono debe tener el formato +503 9999-9999'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Error de validación',
                    'errors' => $validator->errors()
                ], 422);
            }

            $contact = FormContact::create($validator->validated());

            $emails = Contact::where('id', 1)->first()->quoter_destination;

            foreach (explode(',', $emails) as $email) {
                Mail::to($email)->send(new ContactMail($contact));
            }

            return response()->json([
                'message' => 'Contacto enviada exitosamente',
                'data' => $contact
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function postSendNewsletter(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'string|max:255',
                'email' => 'required|string|email|max:255',
                'phone' => ['nullable', 'string', 'regex:/^\+503\s\d{4}-\d{4}$/'], // Formato +503 9999-9999
            ], [
                'phone.regex' => 'El número de teléfono debe tener el formato +503 9999-9999'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Error de validación',
                    'errors' => $validator->errors()
                ], 422);
            }

            $newsletter = FormNewsletter::create($validator->validated());

            $emails = Setting::where('id', 1)->first()->newsletter_destination;

            foreach (explode(',', $emails) as $email) {
                Mail::to($email)->send(new NewsletterMail($newsletter));
            }

            return response()->json([
                'message' => 'Suscrito exitosamente',
                'data' => $newsletter
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al procesar la solicitud',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
