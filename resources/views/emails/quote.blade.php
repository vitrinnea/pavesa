<!-- resources/views/emails/quote.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Nueva solicitud de cotización</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
        .detail {
            border-bottom: 1px solid #eee;
            padding: 10px 0;
        }
        .label {
            font-weight: bold;
            width: 100px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nueva solicitud de cotización</h1>
        </div>
        <div class="content">
            <p>Hola,</p>
            <p>Has recibido una nueva solicitud de cotización a través del sitio web. A continuación se detallan los datos:</p>

            <div class="detail">
                <span class="label">Nombre:</span> {{ $data['name'] }}
            </div>
            <div class="detail">
                <span class="label">Email:</span> {{ $data['email'] }}
            </div>
            <div class="detail">
                <span class="label">Teléfono:</span> {{ $data['phone'] }}
            </div>
            <div class="detail">
                <span class="label">Servicio:</span> {{ $data['serviceType'] }}
            </div>
            <div class="detail">
                <span class="label">Mensaje:</span>
                <p>{{ $data['message'] }}</p>
            </div>

            <p>Por favor, contacte al cliente a la brevedad posible para proporcionar la cotización solicitada.</p>
        </div>
        <div class="footer">
            <p>Este correo ha sido enviado automáticamente desde el formulario de cotización de su sitio web.</p>
        </div>
    </div>
</body>
</html>
