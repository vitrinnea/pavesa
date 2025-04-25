<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Pavesa') }}</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="Empresa líder en construcción y desarrollo de proyectos, especializada en concreto, asfalto, terracería y obra gris.">
    <meta name="keywords" content="pavisa, construcción, concreto, asfalto, terracería, obra gris, proyectos">
    <meta name="author" content="Pavisa">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="{{ config('app.name', 'Pavisa') }}">
    <meta property="og:description" content="Empresa líder en construcción y desarrollo de proyectos, especializada en concreto, asfalto, terracería y obra gris.">
    <meta property="og:image" content="{{ asset('images/og-image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title" content="{{ config('app.name', 'Pavisa') }}">
    <meta property="twitter:description" content="Empresa líder en construcción y desarrollo de proyectos, especializada en concreto, asfalto, terracería y obra gris.">
    <meta property="twitter:image" content="{{ asset('images/og-image.jpg') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Scripts and Styles -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="font-sans antialiased bg-gray-50">
    <div id="app"></div>
</body>
</html>
