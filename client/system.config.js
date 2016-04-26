System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
            // map: {
            //     '@angular2-material/core/annotations/field-value': 'node_modules/@angular2-material/core/annotations/field-value.js',
            //     '@angular2-material/core': 'node_modules/@angular2-material/core/core.js',
            //     '@angular2-material/button': 'node_modules/@angular2-material/button/button.js',
            //     '@angular2-material/input': 'node_modules/@angular2-material/input/input.js'
            // }
        },
        // '@angular2-material/core/annotations/field-value': {
        //     format: 'cjs',
        //     defaultExtension: 'js',
        //     main: 'field-value.js'
        // },
        '@angular2-material/core': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'core.js'
        },
        '@angular2-material/button': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'button.js'
        },
        '@angular2-material/input': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'input.js'
        }
    }
});
System.import('app/main').then(null, console.error.bind(console));

// System.config({
//     packages: {
//         app: {
//             format: 'register',
//             defaultExtension: 'js'
//         },
//         '@angular2-material/core': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'core.js'
//         },
//         '@angular2-material/sidenav': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'sidenav.js'
//         },
//         '@angular2-material/toolbar': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'toolbar.js'
//         },
//         '@angular2-material/card': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'card.js'
//         },
//         '@angular2-material/button': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'button.js'
//         },
//         '@angular2-material/checkbox': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'checkbox.js'
//         },
//         '@angular2-material/radio': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'radio.js'
//         },
//         '@angular2-material/progress-circle': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'progress-circle.js'
//         },
//         '@angular2-material/progress-bar': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'progress-bar.js'
//         },
//         '@angular2-material/input': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'input.js'
//         },
//         '@angular2-material/list': {
//             format: 'cjs',
//             defaultExtension: 'js',
//             main: 'list.js'
//         },
//     }
// });
// System.import('app.js').then(null, console.error.bind(console));
