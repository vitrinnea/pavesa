<?php

namespace App\Http\Controllers;

use App\Models\Qouter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class QouterController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|max:255',
            'phone'         => 'nullable|string|max:50',
            'location'      => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
            'message'       => 'nullable|string|max:1000',
        ]);

        // Aquí puedes guardar en base de datos si tienes un modelo Quote
            Qouter::create($request->all());

        return response()->json(['success' => true, 'message' => 'Cotización enviada correctamente.']);
    }
}
