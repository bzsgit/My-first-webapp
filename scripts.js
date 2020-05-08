let data = [
    {
        photo: 'images/Santis.jpg'
        title: 'Säntis'
        description: 'To see Switzerland, Germany, Austria, Liechtenstein, France and Italy all at the same time - this can be accomplished from the 2,502-meter-high Säntis. The highest mountain of the Alpstein region is the starting point and destination for mountain tours, hikes and ski trips.'
    },
    {
        photo: 'images/Zurich.jpg'
        title: 'Zürich'
        description: 'The cosmopolitan city by the water combines creative urban life with nature in all its glory. Zurich is abuzz with activity day and night with its countless events, diverse museums, own food festival and Switzerland’s most vibrant nightlife. And if you’re after rest and relaxation, you can be in the Swiss mountains in less than an hour.'
    },
    {
        photo: 'images/Rheinfall.jpg'
        title: 'Rhine Falls'
        description: "To stand high above Europe's largest waterfall, feeling the roar and vibration of the water over one's entire body - this can be experienced at the Rhine Falls near Schaffhausen. By ship one can reach castles, the Rhine Falls Basin and even the mighty rock in the midst of the waterfall."
    },
    {
        photo: 'images/Bern.jpg'
        title: 'Bern'
        description: "Not many cities have managed to retain their historic features quite as successfully as Bern, the capital of Switzerland. The old town of Bern is a UNESCO World Heritage Site and thanks to its 6 kilometres of arcades - the locals refer to them as 'Lauben' - boasts on of the longest weather-sheltered shopping promenades in Europe. "
    }, 
    {
        photo: 'images/Aletsch.jpg'
        title: 'Aletsch Glacier'
        description: 'With a length of 23 kilometers, an average width of 1,800 meters, and a surface area of approximately 100 square kilometers, the Aletsch Glacier has an impressive 27 billion tons of ice. The ice mass moves from the northern flanks of the Eiger, Mönch and Jungfrau down into the valley of Valais, and its meltwater flows through the wild Massa Gorge into the Rhone. As a landscape of extraordinary beauty, the Swiss Alps Jungfrau-Aletsch Region was included in the list of UNESCO World Natural Heritage sites in 2001. '
    },
    {
        photo: 'images/Bettmeralp.jpg'
        title: 'Bettmeralp'
        description: 'The car-free village of Bettmeralp which is only accessible by a large-car cableway is located in the immediate vicinity of the impressive Aletsch Glacier, the first Unesco World Heritage Site of the Alps. The family-friendly summer and winter holiday resort boasts almost 300 sunny days a year.'  
    },
    {
        photo: 'images/Brienz.jpg'
        title: 'Lake Brienz'
        description: 'The turquoise Lake Brienz and neighbouring Lake Thun are set amid the spectacular mountain scenery of the Bernese Oberland. Passengers aboard the “Lötschberg” paddle steamer from the Belle Epoque (built in 1914) are inspired by its wonderfully nostalgic atmosphere.'
    },
    {
        photo:'images/Cauma.jpg'
        title: 'Caumasee'
        description: 'Caumasee is a lake near Flims. It is one of the lakes on the Flims Rockslide deposits. Also knonw as “Lake of mid-day rest”. Not only water lovers consider the idyllic landscape around Lake Cauma to be a paradise.'
    },
    {
        photo: 'images/Davos.jpg'
        title: 'Davos'
        description: 'Davos in Grisons is a place of superlatives: this holiday destination with international ambience is the largest resort in the Alps for mountain holidays, sport and conferences, at 1560 m the highest town in the Alps and a high-altitude health resort with a long tradition.'
    },
    {
        photo: 'images/Luzern.jpg'
        title: 'Luzern'
        description: 'Lucerne, the gateway to central Switzerland, sited on Lake Lucerne, is embedded within an impressive mountainous panorama. Thanks to its attractions, its attractive shopping offer, the beautiful lakeside setting and the nearby excursion mountains of the Rigi, Pilatus and Stanserhorn, the town is a destination for many travel groups and individuals on their journey through central Switzerland.'
    },
    {
        photo: 'images/Zermatt.jpg'
        title: 'Zermatt'
        description: "Zermatt lies at the foot of the Matterhorn. The town's touristic development is closely linked to what is most probably the world's most famous mountain. The vacation destination is a car-free zone, has preserved its original character and offers nearly unlimited possibilities as far as excursions are concerned."
    }]
 
let currentPhoto = 0;

$('#photo').attr('src', data[currentPhoto].photo)
$('#photo-title').text(data[currentPhoto].title)
$('#photo-description').text(data[currentPhoto].description)



