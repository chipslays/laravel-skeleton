<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    @csrf

    <script src="//unpkg.com/alpinejs" defer></script>

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    <title>@yield('title', 'Home')</title>

    @yield('styles')
</head>

<body>
    @yield('content')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

    @yield('scripts')
</body>

</html>