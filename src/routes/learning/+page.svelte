<script>
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import Taskbar from "../../components/taskbar.svelte";
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getDatabase, ref, child, get } from "firebase/database";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBCnzOJzpM0eg0gMHiTsyKHTg4qP61ClSA",
      authDomain: "test-bf5e4.firebaseapp.com",
      databaseURL: "https://test-bf5e4-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "test-bf5e4",
      storageBucket: "test-bf5e4.firebasestorage.app",
      messagingSenderId: "131268407638",
      appId: "1:131268407638:web:9a35aa84e8b546148fe6f7",
      measurementId: "G-36J40GW5P2"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const database = getDatabase();

    const nations = {
        Data: [
            {
                URL_ID: "https://www.worldometers.info/img/flags/af-flag.gif",
                nation: "Afghanistan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/al-flag.gif",
                nation: "Albania",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ag-flag.gif",
                nation: "Algeria",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/an-flag.gif",
                nation: "Andorra",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ao-flag.gif",
                nation: "Angola",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ag-flag.gif",
                nation: "Antigua and Barbuda",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ar-flag.gif",
                nation: "Argentina",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/am-flag.gif",
                nation: "Armenia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/at-flag.gif",
                nation: "Australia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/au-flag.gif",
                nation: "Austria",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/aj-flag.gif",
                nation: "Azerbaijan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bf-flag.gif",
                nation: "Bahamas",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ba-flag.gif",
                nation: "Bahrain",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bg-flag.gif",
                nation: "Bangladesh",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bb-flag.gif",
                nation: "Barbados",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bo-flag.gif",
                nation: "Belarus",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/be-flag.gif",
                nation: "Belgium",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bh-flag.gif",
                nation: "Belize",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bn-flag.gif",
                nation: "Benin",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bt-flag.gif",
                nation: "Bhutan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bl-flag.gif",
                nation: "Bolivia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bk-flag.gif",
                nation: "Bosnia and Herzegovina",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bc-flag.gif",
                nation: "Botswana",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/br-flag.gif",
                nation: "Brazil",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bx-flag.gif",
                nation: "Brunei",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/bu-flag.gif",
                nation: "Bulgaria",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/uv-flag.gif",
                nation: "Burkina Faso",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/by-flag.gif",
                nation: "Burundi",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cv-flag.gif",
                nation: "Cabo Verde",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cm-flag.gif",
                nation: "Cameroon",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ca-flag.gif",
                nation: "Canada",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ct-flag.gif",
                nation: "Central African Republic",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cf-flag.gif",
                nation: "Chad",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cl-flag.gif",
                nation: "Chile",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cn-flag.gif",
                nation: "China",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/co-flag.gif",
                nation: "Colombia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/km-flag.gif",
                nation: "Comoros",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cg-flag.gif",
                nation: "Congo",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cr-flag.gif",
                nation: "Costa Rica",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/hr-flag.gif",
                nation: "Croatia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cu-flag.gif",
                nation: "Cuba",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cy-flag.gif",
                nation: "Cyprus",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cz-flag.gif",
                nation: "Czechia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/dk-flag.gif",
                nation: "Denmark",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/dj-flag.gif",
                nation: "Djibouti",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/do-flag.gif",
                nation: "Dominica",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/dr-flag.gif",
                nation: "Dominican Republic",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/cd-flag.gif",
                nation: "Democratic Republic of Congo",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ec-flag.gif",
                nation: "Ecuador",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/eg-flag.gif",
                nation: "Egypt",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sv-flag.gif",
                nation: "El Salvador",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gq-flag.gif",
                nation: "Equatorial Guinea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/er-flag.gif",
                nation: "Eritrea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ee-flag.gif",
                nation: "Estonia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sz-flag.gif",
                nation: "Eswatini",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/et-flag.gif",
                nation: "Ethiopia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/fj-flag.gif",
                nation: "Fiji",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/fi-flag.gif",
                nation: "Finland",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/fr-flag.gif",
                nation: "France",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gb-flag.gif",
                nation: "Gabon",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gm-flag.gif",
                nation: "Gambia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gh-flag.gif",
                nation: "Ghana",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ga-flag.gif",
                nation: "Georgia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gy-flag.gif",
                nation: "Grenada",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gu-flag.gif",
                nation: "Guatemala",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gf-flag.gif",
                nation: "Guyana",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gn-flag.gif",
                nation: "Guinea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gq-flag.gif",
                nation: "Guinea-Bissau",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gr-flag.gif",
                nation: "Greece",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gt-flag.gif",
                nation: "Guatemala",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gv-flag.gif",
                nation: "Guadeloupe",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gw-flag.gif",
                nation: "Guinea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/hg-flag.gif",
                nation: "Honduras",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/hk-flag.gif",
                nation: "Hong Kong",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/hu-flag.gif",
                nation: "Hungary",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/is-flag.gif",
                nation: "Iceland",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/in-flag.gif",
                nation: "India",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/id-flag.gif",
                nation: "Indonesia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ir-flag.gif",
                nation: "Iran",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/iq-flag.gif",
                nation: "Iraq",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ie-flag.gif",
                nation: "Ireland",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/il-flag.gif",
                nation: "Israel",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/it-flag.gif",
                nation: "Italy",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ci-flag.gif",
                nation: "Ivory Coast",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/jm-flag.gif",
                nation: "Jamaica",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/jp-flag.gif",
                nation: "Japan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/jo-flag.gif",
                nation: "Jordan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/kz-flag.gif",
                nation: "Kazakhstan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ke-flag.gif",
                nation: "Kenya",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ki-flag.gif",
                nation: "Kiribati",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/kw-flag.gif",
                nation: "Kuwait",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/kg-flag.gif",
                nation: "Kyrgyzstan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/la-flag.gif",
                nation: "Laos",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lv-flag.gif",
                nation: "Latvia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lb-flag.gif",
                nation: "Lebanon",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ls-flag.gif",
                nation: "Lesotho",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lr-flag.gif",
                nation: "Liberia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ly-flag.gif",
                nation: "Libya",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/li-flag.gif",
                nation: "Liechtenstein",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lt-flag.gif",
                nation: "Lithuania",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lu-flag.gif",
                nation: "Luxembourg",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mo-flag.gif",
                nation: "Macau",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mk-flag.gif",
                nation: "North Macedonia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mg-flag.gif",
                nation: "Madagascar",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mw-flag.gif",
                nation: "Malawi",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/my-flag.gif",
                nation: "Malaysia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mv-flag.gif",
                nation: "Maldives",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ml-flag.gif",
                nation: "Mali",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mt-flag.gif",
                nation: "Malta",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mh-flag.gif",
                nation: "Marshall Islands",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mq-flag.gif",
                nation: "Martinique",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mr-flag.gif",
                nation: "Mauritania",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mu-flag.gif",
                nation: "Mauritius",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mx-flag.gif",
                nation: "Mexico",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/fm-flag.gif",
                nation: "Micronesia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/md-flag.gif",
                nation: "Moldova",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mc-flag.gif",
                nation: "Monaco",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mn-flag.gif",
                nation: "Mongolia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/me-flag.gif",
                nation: "Montenegro",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ma-flag.gif",
                nation: "Morocco",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mz-flag.gif",
                nation: "Mozambique",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/mm-flag.gif",
                nation: "Myanmar",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/na-flag.gif",
                nation: "Namibia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/nr-flag.gif",
                nation: "Nauru",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/np-flag.gif",
                nation: "Nepal",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/nl-flag.gif",
                nation: "Netherlands",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/nc-flag.gif",
                nation: "New Caledonia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/nz-flag.gif",
                nation: "New Zealand",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ni-flag.gif",
                nation: "Nicaragua",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ne-flag.gif",
                nation: "Niger",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ng-flag.gif",
                nation: "Nigeria",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/neu-flag.gif",
                nation: "Niue",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/fg-flag.gif",
                nation: "Norfolk Island",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/no-flag.gif",
                nation: "Norway",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/om-flag.gif",
                nation: "Oman",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pk-flag.gif",
                nation: "Pakistan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ps-flag.gif",
                nation: "Palestinian Territories",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pa-flag.gif",
                nation: "Panama",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pg-flag.gif",
                nation: "Papua New Guinea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/py-flag.gif",
                nation: "Paraguay",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pe-flag.gif",
                nation: "Peru",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ph-flag.gif",
                nation: "Philippines",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pl-flag.gif",
                nation: "Poland",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/pt-flag.gif",
                nation: "Portugal",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/qa-flag.gif",
                nation: "Qatar",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/re-flag.gif",
                nation: "Réunion",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ro-flag.gif",
                nation: "Romania",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ru-flag.gif",
                nation: "Russia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/rw-flag.gif",
                nation: "Rwanda",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sa-flag.gif",
                nation: "Saudi Arabia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sc-flag.gif",
                nation: "Seychelles",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sl-flag.gif",
                nation: "Sierra Leone",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sg-flag.gif",
                nation: "Singapore",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sk-flag.gif",
                nation: "Slovakia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/si-flag.gif",
                nation: "Slovenia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sb-flag.gif",
                nation: "Solomon Islands",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/som-flag.gif",
                nation: "Somalia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/za-flag.gif",
                nation: "South Africa",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/kr-flag.gif",
                nation: "South Korea",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/es-flag.gif",
                nation: "Spain",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/lk-flag.gif",
                nation: "Sri Lanka",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sg-flag.gif",
                nation: "Singapore",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sd-flag.gif",
                nation: "Sudan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/sy-flag.gif",
                nation: "Syria",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tw-flag.gif",
                nation: "Taiwan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tj-flag.gif",
                nation: "Tajikistan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tz-flag.gif",
                nation: "Tanzania",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/th-flag.gif",
                nation: "Thailand",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tl-flag.gif",
                nation: "Timor-Leste",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tg-flag.gif",
                nation: "Togo",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tn-flag.gif",
                nation: "Tunisia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tr-flag.gif",
                nation: "Turkey",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tu-flag.gif",
                nation: "Turkmenistan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tt-flag.gif",
                nation: "Trinidad and Tobago",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/tv-flag.gif",
                nation: "Tuvalu",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ug-flag.gif",
                nation: "Uganda",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ua-flag.gif",
                nation: "Ukraine",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ae-flag.gif",
                nation: "United Arab Emirates",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/gb-flag.gif",
                nation: "United Kingdom",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/us-flag.gif",
                nation: "United States",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/uy-flag.gif",
                nation: "Uruguay",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/uz-flag.gif",
                nation: "Uzbekistan",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/vu-flag.gif",
                nation: "Vanuatu",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ve-flag.gif",
                nation: "Venezuela",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/vn-flag.gif",
                nation: "Vietnam",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/wf-flag.gif",
                nation: "Wallis and Futuna",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/ye-flag.gif",
                nation: "Yemen",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/zm-flag.gif",
                nation: "Zambia",
            },
            {
                URL_ID: "https://www.worldometers.info/img/flags/zw-flag.gif",
                nation: "Zimbabwe",
            },
        ],
    };

    async function getFlag() {
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `0/URL_ID`)).then((snapshot) => {
            console.log(snapshot.val());
        })
        .catch((error) => {
          console.error("no");
        });
    }

    function incrementa() {
        ind++;
        getFlag();
    }

    function decrementa() {
        ind--;
    }

    let ind = 0;
    let current = 2;
</script>

<div class="container">
    <div class="left">
        <Arrow direction="dir-left" direzione="left" handler={decrementa} />
    </div>
    <div class="flag">
        <Flag src={ind} />
    </div>
    <div class="right">
        <Arrow direction="dir-right" handler={incrementa} />
    </div>
    <div class="flag-name">
        <Flagname name={nations.Data[ind].nation} />
    </div>
</div>

<Taskbar bind:selection={current} />

<style>
    /** {
        border: 2px solid yellow;
    }*/

    .container {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 0.25fr 1fr 0.25fr;
        padding-top: 10%;
    }

    .left {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-column: 1 / 2;
    }

    .flag {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        grid-column: 2 / 3;
    }

    .right {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        grid-column: 3 / 4;
    }

    .flag-name {
        width: 30%;
        height: 40%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        grid-row: 2 / 3;
        grid-column: 1 / 4;
        padding-top: 2%;
    }
</style>