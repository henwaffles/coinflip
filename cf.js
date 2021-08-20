var para = 10;
var text = Math.random() <= 0.5 ? 'yazı' : 'tura';
var rulet = Math.random() <= 0.5 ? 'kırmızı' : 'siyah';
var readline = require('readline'),
 rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(line) {
    if(line.trim() != 'yazı' && line.trim() != 'tura' && line.trim() != 'para' && line.trim() != 'kırmızı' && line.trim() != 'siyah') {
        console.log("yazı veya tura yaz,paranı öğrenmek için para yazabilirsin");
        rl.prompt();
        return;
    }

    for(let i = 0; i < 100; i++) {
        console.log(' ');
    }


    text = Math.random() <= 0.5 ? 'yazı' : 'tura';


    var işlem = Math.random() <= 0.5 ? 2 : 3;
    
    rulet = Math.random() <= 0.5 ? 'kırmızı' : 'siyah';

    if(line.trim() === text) {
        console.log('Doğru Tahmin! +' +işlem+ ' para kazandın');
        para = para + işlem;
    }

    else if(line.trim() === 'para') {
        console.log(para + ' ' + 'paran var.')
    }
    else if(line.trim() === 'kırmızı' && line.trim() === 'siyah' ) {
    }

    else {
        console.log('Yanlış Tahmin! -' +(işlem+işlem)+ ' para kaybettin');
        para = para - işlem+işlem;
    }
    
    
    
     console.log('Para: ' + para)

     if(para <= 0) {
         console.log('Paran Kalmadı.');
         process.exit(0);
         return;
     }

     rl.prompt();
    }).on('close', function() {
        console.log('Oyun bitti.');
        process.exit(0);
    });