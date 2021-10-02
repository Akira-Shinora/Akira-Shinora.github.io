'use strict';

{ 
  // ヘッダー header

  const descBtn = document.getElementById('descBtn');
  const description = document.getElementById('description');
  const descReturn = document.getElementById('descReturn');  

  descBtn.addEventListener('click', () => {
    description.classList.remove('hidden');
  });
  
  descReturn.addEventListener('click', () => {
    description.classList.add('hidden');
  });


  // コンテンツ(演奏楽器別)

  const fpContents = [
    // {
    //   op: "",
    //   img: "",
    //   alt: "",
    //   comment: "",
    //   mp3A: "",
    //   mp3B: "",
    //   piascore: "",
    // },
    {
      op: "08",
      img: "img/08 thumb Beautiful suspect.png",
      alt: "美しい逃亡者 (Beautiful suspect)",
      comment: "ギルティなのかそうでないのか。ミステリアスな逃避行。",
      mp3A: "MP3/op.8  Beautiful suspect ... flute & piano.mp3",
      mp3B: "MP3/op.8  Beautiful suspect ... flute & piano-Piano.mp3",
      piascore: "",
    },
    {
      op: "10",
      img: "img/10 thumbnail  Hop in grassland.png",
      alt: "はらっぱほっぷ (Hop in grassland)",
      comment: '気持ちのいい原っぱで子供のころのように',
      mp3A: "MP3/op.10 Hop in grassland ...  flute & piano.mp3",
      mp3B: "MP3/op.10 Hop in grassland ...  piano.mp3",
      piascore: "https://store.piascore.com/scores/113323",
    },
    {
      op: "06",
      img: "img/06 thumbnail (on the water surface).png",
      alt: "on the water surface",
      comment: '水面のきらめきや揺らぎのように、あるいは、さんざめく人の波のように',
      mp3A: "MP3/op.6  on the water surface ... flute & piano.mp3",
      mp3B: "MP3/op.6  on the water surface ... piano.mp3",
      piascore: "https://store.piascore.com/scores/109446",
    },
    {
      op: "05",
      img: "img/05 thumb (soar into the air).png",
      alt: "soar into the air",
      comment: '好奇心のままに、寄り道したり、空を飛んだりしてみたい',
      mp3A: "MP3/op.5  Soar into the air ... flute & piano.mp3",
      mp3B: "MP3/op.5  Soar into the air ... piano.mp3",
      piascore: "https://store.piascore.com/scores/109554",
    },
  ];

  const cpContents = [
    // {
    //   op: "",
    //   img: "",
    //   alt: "",
    //   comment: "",
    //   mp3A: "",
    //   mp3B: "",
    //   piascore: "",
    // },
    {
      op: "11",
      img: "img/11 thumb new scenery.png",
      alt: "新しい景色 (new scenery)",
      comment: '続けていれば、あるとき新しいフェーズに',
      mp3A: "MP3/op.11 new scenery ... cello & piano.mp3",
      mp3B: "MP3/op.11 new scenery ... Piano.mp3",
      piascore: "https://store.piascore.com/scores/115627",
    },
    {
      op: "09", 
      img: "img/09 thumbnail ( in the highlands).png",
      alt: "in the highlands",
      comment: '厳しくも美しいハイランド',
      mp3A: "MP3/op.9  in the Highlands ... cello & piano.mp3",
      mp3B: "MP3/op.9  in the Highlands ... piano.mp3",
      piascore: "https://store.piascore.com/scores/111767",
    },
    {
      op: "07",
      img: "img/07 thumb Bloom in secret.png",
      alt: "Bloom in secret",
      comment: '暗がりに咲くのはミステリアスな何か',
      mp3A: "MP3/op.7  Bloom in secret ... cello & piano.mp3",
      mp3B: "MP3/op.7  Bloom in secret ... piano.mp3",
      piascore: "https://store.piascore.com/scores/110900",
    },
    {
      op: "04",
      img: "img/04 thubm  canal in the night.png",
      alt: "夜の運河を (canal in the night)",
      comment: '小説「ピエタ」(大島真寿美) を読んで',
      mp3A: "MP3/op.4  Canal in the night ...  Cello & Piano.mp3",
      mp3B: "MP3/op.4  Canal in the night ...  Piano.mp3",
      piascore: "https://store.piascore.com/scores/110172",
    }
  ];

  const vapContents = [
    // {
    //   op: "",
    //   img: "",
    //   alt: "",
    //   comment: "",
    //   mp3A: "",
    //   mp3B: "",
    //   piascore: "",
    // },
    {
      op: "03",
      img: "img/03 thumbnail (viola nocturne).png",
      alt: "ヴィオラ・ノクターン(viola nocturne)",
      comment: '静けさも激しさも',
      mp3A: "MP3/op.3  Viola Nocturne... Viola & Piano.mp3",
      mp3B: "MP3/op.3  Viola Nocturne... Piano.mp3",
      piascore: "https://store.piascore.com/scores/109474",
    },
  ];

  const fgContents = [
    {
      op: "15",
      img: "img/IMGP0086 ｾﾝﾄ･ｼﾞｮﾝｽﾞ･ｶﾚｯｼﾞ wide.jpg",
      alt: "",
      comment: "時が経っても、遠く離れても",
      mp3A: "MP3/op.15  ... flute & guitar.mp3",
      mp3B: "MP3/op.15  ... flute & guitar-クラシックギター.mp3",
      piascore: "",
    },
  ];


  // 演奏楽器別のコンテンツ配置

  let li;
  let image
  let figure;
  let buttonPia;
  
  function makeAudio(text, mp3) {
    figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.textContent = "Your browser does not support the audio element.";
    figcaption.textContent = text;
    audio.src = mp3;
    figure.appendChild(figcaption);
    figure.appendChild(audio);
  }
  
  function makeBtn(pia) {
    buttonPia = document.createElement('button');
    const anchor = document.createElement('a');
    anchor.target = "_blank";
    anchor.textContent = "楽譜は Piascore へ (to score shop)";
    anchor.href = pia;
    buttonPia.appendChild(anchor);
  }
  
  function setList(contents, text1, text2, listname) {
    for (let i = 0; i < contents.length; i++) {
      const li = document.createElement('li');
      li.id = contents[i].op;

      image = document.createElement('img');
      image.src = contents[i].img;
      image.alt = contents[i].alt;
      li.appendChild(image);
      
      // const title = document.createElement('h2');
      // title.textContent = contents[i].alt;
      // li.appendChild(title);
      
      const p = document.createElement('p');
      p.textContent = contents[i].comment;
      li.appendChild(p);

      const div = document.createElement('div');
      div.classList.add('hidden');
      
      makeAudio(text1, contents[i].mp3A); 
      div.appendChild(figure);
      
      makeAudio(text2, contents[i].mp3B);
      div.appendChild(figure);
      
      makeBtn(contents[i].piascore);
      div.appendChild(buttonPia);

      li.appendChild(div);
      
      li.addEventListener('click', () => {
        div.classList.remove('hidden');
      });
      
      document.getElementById(listname).appendChild(li);    
    };    
  }
  
  const tbody = document.querySelector('tbody');
  let tr;
  
  function makeTr(op, title, inst) {
    tr = document.createElement('tr');
    
    const tdOp = document.createElement('td');
    tdOp.textContent = op;
    tr.appendChild(tdOp);
    
    const tdTitle = document.createElement('td');
    const a = document.createElement('a');
    a.href = `#${op}`;
    a.textContent = title;
    tdTitle.appendChild(a);
    tr.appendChild(tdTitle);
    
    const tdInst = document.createElement('td');
    tdInst.textContent = inst;
    tr.appendChild(tdInst);
    
    tbody.appendChild(tr);
  }
  
  setList(fpContents, "フルート＆ピアノ  Flute & Piano", "ピアノ伴奏  Piano Part", 'flutePianoUl');
  setList(cpContents, "チェロ＆ピアノ  Cello & Piano", "ピアノ伴奏  Piano Part", 'celloPianoUl');  
  setList(vapContents, "ヴィオラ＆ピアノ  Viola & Piano", "ピアノ伴奏  Piano Part", 'violaPianoUl');
  setList(fgContents, "フルート＆ギター  Flute & Guitar", "ギター伴奏  Guitar Part", 'fluteGuitarUl');


  // 楽曲一覧
  
  makeTr('03', 'ヴィオラ・ノクターン (Viola Nocturne)', 'viola & piano');
  makeTr('04', '夜の運河を (canal in the night)', 'cello & piano');
  makeTr('05', "soar into the air", 'flute & piano');
  makeTr('06', "on the water surface", 'flute & piano');
  makeTr('07', "Bloom in secret", 'cello & piano');
  makeTr('08', "美しい逃亡者 (Beautiful suspect)", 'flute & piano');
  makeTr('09', "in the highlands", 'cello & piano');
  makeTr('10', "はらっぱほっぷ (Hop in grassland)", 'flute & piano');
  makeTr('11', "new scenery", 'cello & piano');
  makeTr('15', "(未定)", 'flute & guitar');

  
  
  
  
  
  
  
}