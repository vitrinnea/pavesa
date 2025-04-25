<?php
// app/Http/Controllers/Api/ContactController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use App\Mail\QuoteFormMail;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Enviar email
        Mail::to(config('mail.from.address'))->send(new ContactFormMail($validated));

        return response()->json(['message' => 'Mensaje enviado correctamente']);
    }

    public function quote(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'serviceType' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Enviar email
        Mail::to(config('mail.from.address'))->send(new QuoteFormMail($validated));

        return response()->json(['message' => 'Solicitud de cotización enviada correctamente']);
    }

    public function newsletter(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        // Aquí podrías guardar el email en una tabla de suscriptores
        // o usar un servicio externo como Mailchimp

        return response()->json(['message' => 'Suscripción realizada correctamente']);
    }
}
