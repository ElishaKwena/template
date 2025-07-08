/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all your component files
  ],
  theme: {
    extend: {
      colors:{
        // black
        dark900 :'#0a0a0a',
        dark800 :'#161616',
        dark700 :'#454444',

        // blue
        sapphire :'#0908c3',
        cosmic :'#0c34e9',
        midnight :'#050170',
        electric :'#1586f5',
        depth :'#01001c',
        neon_blue : '#2323FF',

        // red

        crimson :'#990000',
        nintedo :'#E4000F',
        candy :'#FF0800',
        chilli :'#CE0000',
        tart :'#FF2E2E',
        orangered :'#FE420F',

        // yello

        sunflower :'#FFDA03',
        pantone :'#FCE300',
        yellowlight :'#FCF951',

        // pink

        neon_pink :'#F535AA',
        red_pink :'#FA2A55',
        fashion_pink :'#F400A1',

        // purple

        neon_purple :'#8A00C4',

        // green
        lime_green :'#66FE08',
        italy_green : '#008C45',
        royal_green : '#136207',
        recycling_green :'#009900',
        pine_green :'#166138',
        velvet_green :'#005942',


        // ORANGE

        orange : '#FF5B00',

        // brown
        caramel :'#AB7743',
        espresso : '#4C2B0B',
        almond : '#B7957F',
        vanilla : '#D7BDA6',
        coffee : '#6D3914',


        // GRAY

        midnight_gray : '#121820',
        chrome :'#9EA0A7',
        frost : '#ECEFFA',
        nickel : '#7B7D7F',
        pewter : '#C0BFC6',
        carbon : '#51565A',

        //  white

        white :'#FFFFFF',
        ivory_white : '#FFFFF0',
        off_white : '#F5F5F5',
        light_gray: '#D3D3D3',
        dark_gray: '#A9A9A9',

        // random
        grape_jelly :'#432531',
        dried_chillies :'#472525',
        pinot : '#581A29',
        black_bean : '#3d0C02',
        smokey_black :'#100C0B',
        black: '#000000',
        flennel : '#20404F',
        autumnal : '#F15822'
      },
      fontFamily: {
        // Coding
        'fira-code': ['"Fira Code"', 'monospace'], // For code snippets
        'plex-sans': ['"IBM Plex Sans"', 'sans-serif'], // UI text
        
        // Anime
        'lobster': ['Lobster', 'cursive'], // Anime titles/headings
        'varela': ['"Varela Round"', 'sans-serif'], // Body text
        
        // Custom fonts
        'altar': ['AltarGothicDemo', 'sans-serif'],
        'anurati': ['Anurati', 'sans-serif'],
        'berosong': ['Berosong', 'sans-serif'],
        'dracutaz': ['Dracutaz', 'sans-serif'],
        'elianto': ['Elianto', 'sans-serif'],
        'elixia1j6lb': ['Elixia1j6LB', 'sans-serif'],
        'elixia': ['ELIXIA', 'sans-serif'],
        'elixir': ['Elixir', 'sans-serif'],
        'javierskull': ['JavierSkull', 'sans-serif'],
        'mareno': ['Mareno', 'sans-serif'],
        'rustyattack': ['RustyAttack', 'sans-serif'],
        'sadrock': ['SadRock', 'sans-serif'],
        'sheword': ['Sheword', 'sans-serif'],
        'shloprg': ['ShlopRG', 'sans-serif'],
        'topsagain': ['TopsAgain', 'sans-serif'],
        'wildwesthunt': ['WildwestHunt', 'sans-serif'],
        'worldseries': ['WorldSeries', 'sans-serif'],
        'synchro': ['Synchro', 'sans-serif'],
        'privus': ['PrivusMedium', 'sans-serif'],
        'losttimoh-otf': ['LosttimohOTF', 'sans-serif'],
        'losttimoh-ttf': ['LosttimohTTF', 'sans-serif'],
      },
    },
  },
  plugins: [],
}