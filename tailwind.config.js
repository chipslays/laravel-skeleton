const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    mode: false,
    darkMode: 'class',
    theme: {
        extend: {
            // fontFamily: {
            //     'sans': ['Montserrat', 'sans-serif'],
            // },
            colors: {
                'primary': {
                    DEFAULT: '#05828B',
                    '50': '#65EFF9',
                    '100': '#4FEDF9',
                    '200': '#23E9F7',
                    '300': '#08D5E4',
                    '400': '#07ABB7',
                    '500': '#05828B',
                    '600': '#046B72',
                    '700': '#03545A',
                    '800': '#023D41',
                    '900': '#012629'
                },
                'accent': {
                    DEFAULT: '#E02F1D',
                    '50': '#FCE9E7',
                    '100': '#F9D4D0',
                    '200': '#F3AAA3',
                    '300': '#ED8176',
                    '400': '#E75749',
                    '500': '#E02F1D',
                    '600': '#BC2718',
                    '700': '#982014',
                    '800': '#74180F',
                    '900': '#50110A'
                },
            },
            borderColor: theme => ({
                DEFAULT: theme('colors.gray.200'),
            }),
            fontSize: {
                '2xs': ['.65rem', '0.75rem'],
            },
            boxShadow: {
                "xs": '0 6px 12px rgba(0,0,0,.030);',
                "2xs": '0 6px 12px rgba(0,0,0,.055);',
                "full": '0px 7px 35px -14px rgba(0, 0, 0, 0.1);',
                "2full": '0px 3px 24px -5px rgba(0, 0, 0, 0.18);',
            },
            backgroundOpacity: {
                '4': '0.04',
                '3': '0.03',
                '2': '0.02',
                '1': '0.01',
                '05': '0.005',
            },
            scale: {
                '1-03': '1.003',
                '101': '1.01',
                '102': '1.02',
                '103': '1.03',
                '104': '1.04',
            },
        },
    },
    plugins: [],
}
