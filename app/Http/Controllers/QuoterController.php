<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuoterController extends Controller
{
    //
    public function sendQuoter()
    {
        return response()->json(['status' => 'success']);
    }
}
