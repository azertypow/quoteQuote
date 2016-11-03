//  parametres :
    //  document
    var documentHeight = 150,
        documentWidth = 150;

    //  type ellements liste :
    var ellementsTypeList = [
        'cadre',
        'couvertureEtInterrieurDeCouvertur',
        'culDeLampe',
        'illustration',
        'logoEllementsDeCom',
        'note',
        'numerotationPage',
        'ornement',
        'premiereEtDernierePageDuLivret',
        'texte',
        'titreChapitre'
    ];

    //  sources :
        var source1 = './src/imgs/1072035570/hierarchieDossiers/illustration/1.jpg';

//  objects :

    function Type(name, defaultStatus){
        this.name = name;
        this.isUsed = defaultStatus;
    }

    function TypesGroupe() {

        //  recupérer la liste des type placé dans le groupe :
        this.getTypes = [];

        //  créer les types demandé lors de la création du groupe et les lister dans getTypes :
        this.initAddTypes = function (listOfTypes) {

            print('tous ces Types ont été créé et ajouté au groupe créé avec '+this.constructor.name );

            for(var i=0; i<listOfTypes.length; i++){

                this.getTypes.push(new Type(listOfTypes[i], false));

            }

            print(this.getTypes);

        }
    }

    function Ellements(src, type){

        print('recuperation des ellements dans '+src);

        this.getMeta = function (){
            var img = new Image();
            img.addEventListener("load", function(){

                console.log( this.naturalWidth +' '+ this.naturalHeight );
            });
            img.src = src;
        };

        this.pages = function () {
            return 'hehehe';
        };

        this.info = function () {
            print(this.pages());
            print(this.getMeta());
        }
    }

function setup() {
    print('Ultimate Faust Generator init');
    createCanvas(640, 480);

    var docTypeEllements = new TypesGroupe();
    docTypeEllements.initAddTypes(ellementsTypeList);

    var page1 = new Ellements(source1, 'page');
    page1.info();

}

// function draw() {
//
// }