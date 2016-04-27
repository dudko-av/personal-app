<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Personal income outlay</title>

    <!-- important -->
    <base href="/">

    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>

    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="node_modules/angular2/bundles/http.dev.js"></script>
    <!-- routing -->
    <script src="node_modules/angular2/bundles/router.dev.js"></script>

    <!---->
    <script src="node_modules/socket.io-client/socket.io.js"></script>

    <!---->
    <!--<script src="node_modules/@angular2-material/core/core.js"></script>-->
    <!--<script src="node_modules/@angular2-material/button/button.js"></script>-->

    <!-- 2. Configure SystemJS -->
    <script src="system.config.js"></script>
</head>

<!-- 3. Display the application -->
<body>
<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                Personal income outlay
            </a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <my-app>Loading...</my-app>
        </div>
    </div>
</div>

</body>
</html>