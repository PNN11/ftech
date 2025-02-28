import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'selector',
    theme: {
        screens: {
            xs: '380px',
            sm: '430px',
            '2sm': '490px',
            md: '744px',
            lg: '1024px',
            '2lg': '1124px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1920px',
            '4xl': '2560px',
        },
        extend: {
            backgroundImage: {
                gradient: 'linear-gradient(180.28deg, #FFFFFF -3.64%, #F4F4F4 99.62%)',
                'primary-blue': 'linear-gradient(180.28deg, #10A9FF -3.64%, #1D87E9 80.56%)',
                'primary-gray': 'linear-gradient(180.28deg, #606060 -3.64%, #373737 99.62%)',
                'primary-black': 'linear-gradient(180.28deg, #303030 -3.64%, #1E1E1E 86.01%)',
                'primary-white': 'linear-gradient(180.28deg, #FFFFFF -3.64%, #F4F4F4 99.62%)',
                'contact-us-blue': 'linear-gradient(180.28deg, #10A9FF -3.64%, #0070D7 80.56%)',
                'services-first-screen':
                    'linear-gradient(185.83deg, #575757 12.21%, #484848 40%, #343434 61.46%, #161616 80.15%)',
                'expertise-first-screen':
                    'linear-gradient(180deg, #FFFFFF 39.49%, rgba(255, 255, 255, 0.849829) 71.59%, rgba(255, 255, 255, 0.72) 91.62%)',
            },
            boxShadow: {
                heading: '0px 5px 3.4px 0px rgba(246, 246, 246, 1)',
                button: '0px 1px 8px 1px #BCBCBC12',
                header: '0px 1px 16.8px 1px #BCBCBC12',
                'about-us-card': '0px 1px 8px 1px #BCBCBC12',
                'about-us-card-blue': '0px 1px 8px 1px #BCBCBC12, 0px 12px 26.7px -1px #36A2EE85',
                'input-default': '0px 2px 15.9px 0px #F1F1F1',
                'input-hover': '0px 2px 5.7px 0px #E2E2E28A',
                map: '0px 8px 18.5px -1px #CFCFCF29',
                'case-image': '0px 9px 16.8px 6px #F1F1F1 inset',
                'services-first-screen': '0px 36px 62.6px 0px #33333338 inset',
                'power-button': ' 0px 0px 79.4px 0px #0093FF47',
            },
            spacing: {
                0.75: '0.1875rem', // 3px
                1.25: '0.3125rem', // 5px
                1.5: '0.375rem', // 6px
                1.75: '0.4375rem', // 7px
                2.25: '0.5625rem', // 9px
                2.375: '0.5938rem', // 9.5px
                2.5: '0.625rem', // 10px
                3.25: '0.8125rem', // 13px
                3.625: '0.9063rem', // 14.5px
                3.75: '0.9375rem', // 15px
                4.25: '1.0625rem', // 17px
                4.5: '1.125rem', // 18px
                4.75: '1.1875rem', // 19px
                5.25: '1.3125rem', // 21px
                5.5: '1.375rem', // 22px
                5.75: '1.4375rem', // 23px
                6.25: '1.5625rem', // 25px
                6.5: '1.625rem', // 26px
                6.625: '1.6563rem', // 26.5px
                6.75: '1.6875rem', // 27px
                7.25: '1.8125rem', // 29px
                7.5: '1.875rem', // 30px
                7.75: '1.9375rem', // 31px
                8.25: '2.0625rem', // 33px
                8.5: '2.125rem', // 34px
                9.5: '2.375rem', // 38px
                9.75: '2.4375rem', // 39px
                10.25: '2.5625rem', // 41px
                10.5: '2.625rem', // 42px
                11.25: '2.8125rem', // 45px
                11.5: '2.875rem', // 46px
                11.75: '2.9375rem', // 47px
                12.5: '3.125rem', // 50px
                12.75: '3.1875rem', // 51px
                13: '3.25rem', // 52px
                13.5: '3.375rem', // 54px
                13.75: '3.4375rem', // 55px
                14.5: '3.625rem', // 58px
                15: '3.75rem', // 60px
                15.5: '3.875rem', // 62px
                15.75: '3.9375rem', // 63px
                16.5: '4.125rem', // 66px
                17: '4.25rem', // 68px
                17.25: '4.3125rem', // 69px
                17.5: '4.375rem', // 70px
                18: '4.5rem', // 72px
                18.25: '4.5625rem', // 73px
                18.5: '4.625rem', // 74px
                18.75: '4.6875rem', // 75px
                19: '4.75rem', // 76px
                19.25: '4.8125rem', // 77px
                19.5: '4.875rem', // 78px
                20.25: '5.0625rem', // 81px
                20.5: '5.125rem', // 82px
                21: '5.25rem', // 84px
                21.5: '5.375rem', // 86px
                22: '5.5rem', // 88px
                23: '5.75rem', // 92px
                23.25: '5.8125rem', // 93px
                23.75: '5.9375rem', // 95px
                24.5: '6.125rem', // 98px
                25: '6.25rem', // 100px
                25.25: '6.3125rem', // 101px
                25.5: '6.375rem', // 102px
                25.75: '6.4375rem', // 103px
                26: '6.5rem', // 104px
                26.75: '6.6875rem', // 107px
                27: '6.75rem', // 108px
                27.25: '6.8125rem', // 109px
                27.5: '6.875rem', // 110px
                28.75: '7.1875rem', // 115px
                29: '7.25rem', // 116px
                30: '7.5rem', // 120px
                30.25: '7.5625rem', // 121px
                30.75: '7.6875rem', // 123px
                31: '7.75rem', // 124px
                31.25: '7.8125rem', // 125px
                31.5: '7.875rem', // 126px
                31.75: '7.9375rem', // 127px
                32.25: '8.0625rem', // 129px
                32.75: '8.1875rem', // 131px
                33: '8.25rem', // 132px
                33.75: '8.4375rem', // 135px
                34: '8.5rem', // 136px
                34.75: '8.6875rem', // 139px
                36.25: '9.0625rem', // 145px
                36.5: '9.125rem', // 146px
                37: '9.25rem', // 148px
                38.5: '9.625rem', // 154px
                40.5: '10.125rem', // 162px
                40.75: '10.1875rem', // 163px
                42: '10.5rem', // 168px
                42.125: '10.5313rem', // 168.5px
                45: '11.25rem', // 180px
                45.25: '11.3125rem', // 181px
                46.5: '11.625rem', // 186px
                46.75: '11.6875rem', // 187px
                47.25: '11.8125rem', // 189px
                47.5: '11.875rem', // 190px
                47.75: '11.9375rem', // 191px
                48: '12rem', // 192px
                49: '12.25rem', // 196px
                49.5: '12.375rem', // 198px
                50: '12.5rem', // 200px
                51.25: '12.8125rem', // 205px
                51.5: '12.875rem', // 206px
                52.5: '13.125rem', // 210px
                53: '13.25rem', // 212px
                53.75: '13.4375rem', // 215px
                54.75: '13.6875rem', // 219px
                55: '13.75rem', // 220px
                58: '14.5rem', // 232px
                58.25: '14.5625rem', // 233px
                58.75: '14.6875rem', // 235px
                59.25: '14.8125rem', // 237px
                61: '15.25rem', // 244px
                61.25: '15.3125rem', // 245px
                62: '15.5rem', // 248px
                62.5: '15.625rem', // 250px
                63.25: '15.8125rem', // 253px
                65: '16.25rem', // 260px
                65.5: '16.375rem', // 262px
                66: '16.5rem', // 264px
                68: '17rem', // 272px
                68.5: '17.125rem', // 274px
                69: '17.25rem', // 276px
                70: '17.5rem', // 280px
                72: '18rem', // 288px
                73: '18.25rem', // 292px
                74: '18.5rem', // 296px
                75: '18.75rem', // 300px
                75.5: '18.875rem', // 302px
                76: '19rem', // 304px
                76.5: '19.125rem', // 306px
                78: '19.5rem', // 312px
                78.375: '19.5938rem', // 313.5px
                78.5: '19.625rem', // 314px
                79: '19.75rem', // 316px
                80: '20rem', // 320px
                81: '20.25rem', // 324px
                81.25: '20.3125rem', // 325px
                82: '20.5rem', // 328px
                83.5: '20.875rem', // 334px
                84: '21rem', // 336px
                84.5: '21.125rem', // 338px
                85: '21.25rem', // 340px
                86: '21.5rem', // 344px
                86.5: '21.625rem', // 346px
                87: '21.75rem', // 348px
                88: '22rem', // 352px
                88.5: '22.125rem', // 354px
                89.5: '22.375rem', // 358px
                90: '22.5rem', // 360px
                91.25: '22.8125rem', // 365px
                93: '23.25rem', // 372px
                93.25: '23.3125rem', // 373px
                94: '23.5rem', // 376px
                95: '23.75rem', // 380px
                96.5: '24.125rem', // 386px
                98.25: '24.5625rem', // 393px
                99: '24.75rem', // 396px
                100: '25rem', // 400px
                100.5: '25.125rem', // 402px
                101: '25.25rem', // 404px
                102: '25.5rem', // 408px
                102.5: '25.625rem', // 410px
                102.75: '25.6875rem', // 411px
                103: '25.75rem', // 412px
                104: '26rem', // 416px
                105.5: '26.375rem', // 422px
                106.25: '26.5625rem', // 425px
                108: '27rem', // 432px
                109.25: '27.3125rem', // 437px
                112: '28rem', // 448px
                114.5: '28.625rem', // 458px
                115.5: '28.875rem', // 462px
                116: '29rem', // 464px
                117: '29.25rem', // 468px
                120: '30rem', // 480px
                122: '30.5rem', // 488px
                123: '30.75rem', // 492px
                123.75: '30.9375rem', // 495px
                125: '31.25rem', // 500px
                129.5: '32.375rem', // 518px
                130: '32.5rem', // 520px
                131: '32.75rem', // 524px
                133: '33.25rem', // 532px
                134: '33.5rem', // 536px
                135: '33.75rem', // 540px
                135.5: '33.875rem', // 542px
                137.5: '34.375rem', // 550px
                145: '36.25rem', // 580px
                145.5: '36.375rem', // 582px
                146.75: '36.6875rem', // 587px
                147: '36.75rem', // 588px
                150: '37.5rem', // 600px
                152: '38rem', // 608px
                153.75: '38.4375rem', // 615px
                155: '38.75rem', // 620px
                156.25: '39.0625rem', // 625px
                156.75: '39.1875rem', // 627px
                157: '39.25rem', // 628px
                158: '39.5rem', // 632px
                159: '39.5rem', // 636px
                160: '40rem', // 640px
                162: '40.5rem', // 648px
                165: '41.25rem', // 660px
                165.5: '41.375rem', // 662px
                169.5: '42.375rem', // 678px
                170.5: '42.625rem', // 682px
                171: '42.75rem', // 684px
                173.75: '43.4375rem', // 695px
                175: '43.75rem', // 700px
                175.75: '43.9375rem', // 703px
                183.75: '45.9375rem', // 735px
                184: '46rem', // 736px
                187.5: '46.875rem', // 750px
                201: '50.25rem', // 804px
                203.5: '50.875rem', // 814px
                205.25: '51.3125rem', // 821px
                209.5: '52.375rem', // 838px
                210.5: '52.625rem', // 842px
                226.5: '56.625rem', // 906px
                227.75: '56.9375rem', // 911px
                231: '57.75rem', // 924px
                232: '58rem', // 928px
                237.5: '59.375rem', // 950px
                248: '62rem', // 992px
                248.25: '62.0625rem', // 993px
                250: '62.5rem', // 1000px
                273.75: '68.4375rem', // 1095px
                318.75: '79.6875rem', // 1275px
                320: '80rem', // 1280px
                341.75: '85.4375rem', // 1367px
                344: '86rem', // 1376px
                360: '90rem', // 1440px
                475: '118.75rem', // 1900px
                535: '133.75rem', // 2140px

                '2xl-screen-home-section': 'calc(100%+8.0625rem)',
                '3xl-screen-home-section': 'calc(100%+11.3125rem)',
            },
            colors: {
                'bg-page': '#FBFBFB',

                'gray-50': '#F5F5F5',
                'gray-100': '#F1F1F1',
                'gray-200': '#EBEBEB',
                'gray-300': '#E4E4E4',
                'gray-350': '#DADADA',
                'gray-400': '#1F1F1F',
                'gray-500': '#C0C0C0',
                'gray-600': '#8A8A8A',
                'gray-700': '#5F5F5F',
                'gray-750': '#767676',
                'gray-800': '#E9E9E9',
                'gray-900': '#313131',
                'gray-1000': '#1E1E1E',

                'dark-blue-100': '#F1F1F2',
                'dark-blue-200': '#EDEDED',
                'dark-blue-300': '#E2E2E3',
                'dark-blue-350': '#B7B9BB',
                'dark-blue-500': '#929599',
                'dark-blue-600': '#797C81',
                'dark-blue-700': '#484B52',
                'dark-blue-900': '#131821',
                'dark-blue-1000': '#070B16',

                'blue-100': '#F1F4F6',
                'blue-200': '#E9F1F6',
                'blue-300': '#E0EEF7',
                'blue-350': '#D3E8F7',
                'blue-500': '#B2DDF9',
                'blue-600': '#8ACDFA',
                'blue-700': '#39AFFD',
                'blue-800': '#54BBF5',
                'blue-900': '#0099FF',
                'blue-1000': '#1D87E9',

                'white-10': '#FFFFFF',
                'white-100': '#F8F9FA',
                'white-200': '#F9FAFC',
                'white-300': '#FBFAFA',

                'clutch-star': '#EF4335',
                error: '#FF3D00',
            },
            fontSize: {
                '2xs': '0.8125rem', // 13px
                '2sm': '0.9375rem', // 15px
                xl: '1.25rem', // 20px
                '1xl': '1.375rem', // 22px
                '2xl': '1.5rem', // 24px
                '3xl': '1.625rem', // 26px
                '4xl': '1.75rem', // 28px
                '4.5xl': '1.8rem', // 28.8px
                '5xl': '1.875rem', // 30px
                '6xl': '2rem', // 32px
                '6.5xl': '2.25rem', // 36px
                '7xl': '2.375rem', // 38px
                '8xl': '2.5rem', // 40px
                '8.2xl': '2.625rem', // 42px
                '8.5xl': '3rem', // 48px
                '9xl': '3.375rem', // 54px
            },
            letterSpacing: {
                'footer-link': '0.044375rem', // 0.71px
                p: '0.06rem', // 0.96px
                alt: '0.09rem', // 1.44px
                'button-l': '0.0625rem', // 1px
                'button-m': '-0.0625rem', // -1px
                'button-sm': '-0.0425rem', // -0.68px
                'button-md': '-0.0563rem', // -0.9px
                'tab-m': '-0.0469rem', // -0.75px

                h2: '0.044375rem', // 0.71px
                h4: '0.0656rem', // 1.05px
            },
            lineHeight: {
                6.75: '1.6875rem', //  27px
                6.9: '1.725rem', //  27.6px
                7.475: '1.8687rem', //  29.9px
                7.5: '1.875rem', //  30px
                8.05: '2.0125rem', //  32.2px
                8.25: '2.0625rem', //  33px
                9.1: '2.275rem', //  36.4px
                9.2: '2.3rem', //  36.8px
                10.35: '2.5875rem', //  41.4px
                11.5: '2.875rem', //  46px
                12.7: '3.175rem', // 50.8px
                13.5: '3.375rem', // 54px
                13.8: '3.45rem', // 55.2px
                14.4: '3.6rem', // 57.6px
                15.5: '3.875rem', // 62px
                16.2: '4.05rem', // 64.8px
                24.3: '6.075rem', // 97.2px
            },
            borderRadius: {
                1.25: '0.3125rem', // 5px
                2.25: '0.5625rem', // 9px
                2.5: '0.625rem', // 10px
                8: '2rem', // 32px
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(50%)' },
                    '100%': { opacity: '1', transform: 'translateY(0%)' },
                },
                'mobile-menu': {
                    '0%': { height: '0', opacity: '0', paddingTop: '0', paddingBottom: '0' },
                    '100%': { height: '15.125rem', opacity: '1' },
                },
                'main-page-mobile-menu': {
                    '0%': { height: '0', opacity: '0', paddingTop: '0', paddingBottom: '0' },
                    '100%': { height: '16.875rem', opacity: '1' },
                },
                'fade-in-up-bounce': {
                    '0%': { opacity: '0', transform: 'translateY(50%)' },
                    '50%': { opacity: '1', transform: 'translateY(-20%)' },
                    '80%': { opacity: '1', transform: 'translateY(5%)' },
                    '100%': { opacity: '1', transform: 'translateY(0%)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.3s linear',
                'fade-in-up': 'fade-in-up 0.3s linear',
                'fade-in-up-bounce': 'fade-in-up-bounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)',
                'mobile-menu': 'mobile-menu 0.5s linear',
                'main-page-mobile-menu': 'main-page-mobile-menu 0.5s linear',
            },
            gridTemplateColumns: {
                'review-with-quotes': '1.3125rem 1fr 1.3125rem',
            },
        },
    },
    plugins: [],
}
export default config
