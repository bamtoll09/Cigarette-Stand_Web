var express = require('express');
var pug = require('pug');
var router = express.Router();

var Cigarette = {
	"FIT매치": 0,
	"FIT스파키": 1,
	"FIT체인지": 2,
	"FIT체인지업": 3,
	"FIT체인지톡": 4,
	"FIT쿨샷": 5,
	"GT아이스볼트6mg": 6,
	"New라일락": 7,
	"다비도프리치블루3mg": 8,
	"다비도프클래식6mg": 9,
	"더원0.5": 10,
	"더원임팩트": 11,
	"더원0.1": 12,
	"더원1mg": 13,
	"더원체인지1mg": 14,
	"더원체인지립톡1mg": 15,
	"디스": 16,
	"디스아프리카아이스잭": 17,
	"디스아프리카룰라": 18,
	"디스아프리카몰라": 19,
	"디스플러스": 20,
	"레종프렌치라인": 21,
	"레종프렌치번": 22,
	"레종휘바": 23,
	"레종블랙1mg": 24,
	"레종블루3mg": 25,
	"레종썬프레쏘6mg": 26,
	"레종아이스프레쏘": 27,
	"레종프레쏘1mg": 28,
	"레종프렌치블랙": 29,
	"레종프렌치요고": 30,
	"보헴시가No3": 31,
	"보헴시가리브레": 32,
	"보헴시가넘버1": 33,
	"보헴시가넘버6": 34,
	"보헴시가마스터": 35,
	"보헴시가미니1mg": 36,
	"보헴시가미니5mg": 37,
	"보헴시가슬림핏브라운": 38,
	"보헴시가슬림핏화이트": 39,
	"보헴시가쿠바나1mg": 40,
	"보헴시가쿠바나더블": 41,
	"보헴파이프스코티": 42,
	"시즌": 43,
	"심플": 44,
	"심플비젼": 45,
	"심플에이스1mg": 46,
	"심플에이스5mg": 47,
	"에쎄체인지린": 48,
	"에쎄체인지빙": 49,
	"에쎄체인지업": 50,
	"에쎄골든리프": 51,
	"에쎄골든리프1mg": 52,
	"에쎄로열팰리스": 53,
	"에쎄멘솔1mg": 54,
	"에쎄센스1mg": 55,
	"에쎄수": 56,
	"에쎄수0.1": 57,
	"에쎄수0.5": 58,
	"에쎄수명작": 59,
	"에쎄스페셜골드": 60,
	"에쎄스페셜골드0.5": 61,
	"에쎄스페셜골드1mg": 62,
	"에쎄스페셜골드오션1mg": 63,
	"에쎄아이스": 64,
	"에쎄엣지1mg": 65,
	"에쎄원": 66,
	"에쎄체인지1mg": 67,
	"에쎄체인지4mg": 68,
	"에쎄체인지W1mg": 69,
	"에쎄클래식": 70,
	"에쎄프라임": 71,
	"에쎄프레쏘1mg": 72,
	"클라우드나인1mg": 73,
	"클라우드나인5mg": 74,
	"타임": 75,
	"타임Mid": 76,
	"한라산": 77,
	"허밍타임": 78,
	"New로스만클릭6mg": 79,
	"네오스틱다크토바코플러스": 80,
	"네오스틱부스트플러스": 81,
	"네오스틱브라이트토바코": 82,
	"네오스틱스위치": 83,
	"네오스틱스위치new": 84,
	"네오스틱퍼플": 85,
	"네오스틱프레쉬믹스": 86,
	"네오스틱프레시": 87,
	"던힐DTOLL1mg": 88,
	"던힐DTOLL1mg14입": 89,
	"던힐DTOLL3mg": 90,
	"던힐DTOLL6mg": 91,
	"던힐DTOLL6mg14입": 92,
	"던힐DTOLL프로스트": 93,
	"던힐스위치6mg": 94,
	"던힐스위치ONE": 95,
	"던힐파인컷0.1": 96,
	"던힐파인컷1mg": 97,
	"던힐파인컷마스터3mg": 98,
	"던힐파인컷수프림": 99,
	"던힐파인컷캡슐스위치new": 100,
	"던힐파인컷프로스트1mg": 101,
	"로스만1mg": 102,
	"로스만5mg": 103,
	"로스만SS뉴보그1mg": 104,
	"로스만SS뉴보그0.5": 105,
	"로스만SS뉴보그블루1mg": 106,
	"로스만SS뉴보그프리마": 107,
	"로스만수퍼슬림클릭": 108,
	"뉴팔리아하이브리드수퍼슬": 109,
	"말보로아이스블라스트": 110,
	"말보로징퓨전더블": 111,
	"말보로블랙멘솔": 112,
	"말보로실버": 113,
	"말보로하이브리드1mg": 114,
	"말보로하이브리드5mg": 115,
	"버지니아슬림1mg": 116,
	"버지니아슬림골드": 117,
	"팔리아멘트듀얼센세이션": 118,
	"팔리아멘트하이브리드": 119,
	"팔리아멘트1mg": 120,
	"팔리아멘트수퍼슬림레드": 121,
	"팔리아멘트수퍼슬림블루": 122,
	"팔리아멘트아쿠아3": 123,
	"팔리아멘트하이브리드1mg": 124,
	"팔리아수퍼슬림원1mg": 125,
	"팔리아수퍼슬림클리어1mg": 126,
	"히츠그린": 127,
	"히츠그린징": 128,
	"히츠브론즈": 129,
	"히츠블루": 130,
	"히츠실버": 131,
	"히츠앰버": 132,
	"히츠퍼플": 133,
	"말보로아이스블라스트원": 134,
	"라크원": 135,
	"말보로골드오리지널": 136,
	"말보로레드BOX": 137,
	"말보로미듐B": 138,
	"말보로화이트멘솔": 139,
	"팔리아멘트아쿠아5": 140,
	"메비우스E스타일3": 141,
	"메비우스E스타일6": 142,
	"메비우스LBS블루": 143,
	"메비우스LBS옐로우": 144,
	"메비우스수퍼슬림1mg": 145,
	"메비우스LSSv1수퍼슬림": 146,
	"메비우스LSSv5": 147,
	"메비우스LSS3mg": 148,
	"메비우스LSS원": 149,
	"메비우스오리지널": 150,
	"메비우스옵션2퍼플": 151,
	"세븐스타": 152,
	"카멜라이트": 153,
	"카멜수퍼슬림1mg": 154,
	"카멜수퍼슬림3mg": 155,
	"카멜필터": 156,
	"메비우스윈드블루": 157,
	"메비우스스카이블루": 158,
	"메비우스스카이블루소프트": 159,
	"아이코스클리닝스틱": 160,
	"아이코스연속패키지네이비": 161,
	"아이코스연속패키지화이트": 162,
	"아이코스키트네이비": 163,
	"아이코스키트메탈릭레드": 164,
	"아이코스키트화이트": 165,
	"LIL미니민트": 166,
	"LIL미니화이트": 167,
	"LIL캡레이저블루": 168,
	"LIL캡밀키블루": 169,
	"LIL플러스다크네이비": 170,
	"LIL플러스화이트": 171,
	"글로시리즈2그레이": 172,
	"글로시리즈2블랙": 173
};
var cigaSize = 175;

function Sector(x, y) {
  this.x = x;
  this.y = y;

  this.sector = new Array(this.x);
  for (var i=0; i<this.x; ++i)
  this.sector[i] = new Array(this.y);
}

Sector.prototype.set = function(arr) {
  for(var i=0; i<this.x; ++i) {
    for (var j=0; j<this.y; ++j) {
      this.sector[i][j] = arr[i][j]
    }
  }
}

Sector.prototype.get = function(x, y) {
  return this.sector[x][y];
}

Sector.prototype.size = function() {
  return this.x * this.y;
}

var sectors = new Array(7);
sectors[0] = new Sector(2, 4);
sectors[1] = new Sector(7, 4);
sectors[2] = new Sector(5, 9);
sectors[3] = new Sector(5, 9);
sectors[4] = new Sector(6, 4);
sectors[5] = new Sector(6, 4);
sectors[6] = new Sector(2, 4);

sectors[0].set([
  [Cigarette.말보로징퓨전더블, Cigarette.버지니아슬림1mg, Cigarette.말보로블랙멘솔, Cigarette.말보로화이트멘솔],
  [Cigarette.팔리아멘트듀얼센세이션, Cigarette.팔리아멘트수퍼슬림블루, Cigarette.뉴팔리아하이브리드수퍼슬, Cigarette.팔리아멘트하이브리드1mg]
]);
sectors[1].set([
  [Cigarette.히츠브론즈, -1, -1, -1],
  [Cigarette.히츠그린징, Cigarette.히츠실버, Cigarette.히츠앰버, -1],
  [Cigarette.히츠퍼플, Cigarette.히츠블루, Cigarette.히츠그린, -1],
  [Cigarette.말보로레드BOX, Cigarette.말보로미듐B, Cigarette.말보로골드오리지널, Cigarette.말보로실버],
  [Cigarette.말보로아이스블라스트, Cigarette.말보로아이스블라스트원, Cigarette.말보로하이브리드5mg, Cigarette.말보로하이브리드1mg],
  [Cigarette.팔리아멘트아쿠아5, Cigarette.팔리아멘트아쿠아3, Cigarette.팔리아멘트1mg, Cigarette.팔리아멘트하이브리드],
  [Cigarette.팔리아멘트수퍼슬림레드, Cigarette.팔리아수퍼슬림원1mg, Cigarette.라크원, Cigarette.버지니아슬림골드]
]);
sectors[2].set([
  [Cigarette.FIT매치, Cigarette.FIT스파키, Cigarette.FIT체인지, Cigarette.FIT체인지업, Cigarette.FIT체인지톡, Cigarette.FIT쿨샷, -1, -1, -1],
  [Cigarette.에쎄로열팰리스, Cigarette.에쎄골든리프, Cigarette.에쎄골든리프1mg, Cigarette["에쎄스페셜골드0.5"], Cigarette.에쎄수명작, Cigarette.에쎄스페셜골드1mg, Cigarette.에쎄스페셜골드, -1, -1],
  [Cigarette.더원1mg, Cigarette["더원0.5"], Cigarette["더원0.1"], Cigarette.더원체인지1mg, Cigarette.더원임팩트, Cigarette.더원체인지립톡1mg, Cigarette.보헴시가슬림핏브라운, Cigarette.보헴시가슬림핏화이트, -1],
  [Cigarette.레종블루3mg, Cigarette.레종블랙1mg, Cigarette.레종아이스프레쏘, Cigarette.레종썬프레쏘6mg, Cigarette.레종프레쏘1mg, Cigarette.시즌, Cigarette.에쎄센스1mg, -1, -1],
  [Cigarette.한라산, Cigarette.New라일락, Cigarette.심플, Cigarette.심플에이스5mg, Cigarette.심플비젼, Cigarette.심플에이스1mg, Cigarette.디스플러스, Cigarette.디스, -1]
]);
sectors[3].set([
  [Cigarette.에쎄스페셜골드오션1mg, Cigarette.에쎄체인지빙, Cigarette.에쎄체인지4mg, Cigarette.에쎄체인지1mg, Cigarette.에쎄체인지W1mg, Cigarette.에쎄체인지업, Cigarette.에쎄체인지린, -1, -1],
  [Cigarette.레종프렌치라인, Cigarette.레종프렌치블랙, Cigarette.레종프렌치요고, Cigarette.레종프렌치번, Cigarette.레종휘바, Cigarette.보헴파이프스코티, Cigarette.디스아프리카룰라, Cigarette.디스아프리카몰라, Cigarette.디스아프리카아이스잭],
  [Cigarette.보헴시가마스터, Cigarette.보헴시가미니5mg, Cigarette.보헴시가미니1mg, Cigarette.보헴시가리브레, Cigarette.보헴시가넘버6, Cigarette.보헴시가No3, Cigarette.보헴시가넘버1, Cigarette.보헴시가쿠바나더블, Cigarette.보헴시가쿠바나1mg],
  [Cigarette.에쎄클래식, Cigarette.에쎄프라임, Cigarette.에쎄원, Cigarette.에쎄수, Cigarette["에쎄수0.5"], Cigarette["에쎄수0.1"], Cigarette.에쎄프레쏘1mg, Cigarette.에쎄아이스, Cigarette.에쎄멘솔1mg],
  [Cigarette.타임, Cigarette.타임Mid, Cigarette.허밍타임, Cigarette.GT아이스볼트6mg, Cigarette.다비도프클래식6mg, Cigarette.다비도프리치블루3mg, Cigarette.클라우드나인5mg, Cigarette.클라우드나인1mg, Cigarette.에쎄엣지1mg]
]);
sectors[4].set([
  [Cigarette.메비우스LBS블루, Cigarette.메비우스LBS옐로우, -1, -1],
  [Cigarette.세븐스타, -1, -1, -1],
  [Cigarette.메비우스LSSv5, Cigarette.메비우스LSS3mg, Cigarette.메비우스LSS원, -1],
  [Cigarette.메비우스스카이블루, Cigarette.메비우스스카이블루소프트, Cigarette.메비우스윈드블루, Cigarette.메비우스수퍼슬림1mg],
  [Cigarette.메비우스오리지널, Cigarette.메비우스옵션2퍼플, Cigarette.메비우스E스타일6, Cigarette.메비우스E스타일3],
  [Cigarette.카멜필터, Cigarette.카멜라이트, Cigarette.카멜수퍼슬림3mg, Cigarette.카멜수퍼슬림1mg]
]);
sectors[5].set([
  [Cigarette.네오스틱부스트플러스, Cigarette.네오스틱다크토바코플러스, -1, -1],
  [Cigarette.네오스틱프레시, Cigarette.네오스틱브라이트토바코, Cigarette.네오스틱퍼플, Cigarette.네오스틱스위치new],
  [Cigarette.던힐DTOLL6mg, Cigarette.던힐DTOLL3mg, Cigarette.던힐DTOLL1mg, Cigarette.던힐DTOLL프로스트],
  [Cigarette.던힐스위치6mg, Cigarette.던힐스위치ONE, Cigarette.던힐파인컷마스터3mg, Cigarette.던힐파인컷캡슐스위치new],
  [Cigarette.던힐파인컷수프림, Cigarette.던힐파인컷1mg, Cigarette.던힐파인컷프로스트1mg, Cigarette["던힐파인컷0.1"]],
  [Cigarette.로스만SS뉴보그1mg, Cigarette.로스만SS뉴보그블루1mg, Cigarette["로스만SS뉴보그0.5"], Cigarette.로스만수퍼슬림클릭]
]);
sectors[6].set([
  [Cigarette.던힐DTOLL6mg14입, Cigarette.던힐DTOLL1mg14입, Cigarette.로스만SS뉴보그프리마, Cigarette.팔리아수퍼슬림클리어1mg],
  [Cigarette.New로스만클릭6mg, Cigarette.로스만5mg, Cigarette.로스만1mg, -1]
]);

var nonSector = [
	Cigarette.네오스틱스위치, Cigarette.네오스틱프레쉬믹스,
	Cigarette.메비우스LSSv1수퍼슬림, Cigarette.아이코스클리닝스틱,
	Cigarette.아이코스연속패키지네이비, Cigarette.아이코스연속패키지화이트,
	Cigarette.아이코스키트네이비, Cigarette.아이코스키트메탈릭레드, Cigarette.아이코스키트화이트,
	Cigarette.LIL미니민트, Cigarette.LIL미니화이트, Cigarette.LIL캡레이저블루,
	Cigarette.LIL캡밀키블루, Cigarette.LIL플러스다크네이비, Cigarette.LIL플러스화이트,
	Cigarette.글로시리즈2그레이, Cigarette.글로시리즈2블랙
];

var getNonSector = function(res) {
  var ciga = new Array(cigaSize);
  for (var i=0; i<ciga.length; ++i)
    ciga[i] = 0;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  for (var i=0; i<sectors.length; ++i) {
    for (var j=0; j<sectors[i].x; ++j) {
      for (var k=0; k<sectors[i].y; ++k) {
        if (sectors[i].get(j, k) != -1)
          ciga[sectors[i].get(j, k)] = 1;
      }
    }
  }
  console.log(sectors[0].length + '');
  for (var element in Cigarette) {
    if (ciga[Cigarette[element]] == 0)
      res.write(element + "<br>");
  }
  res.end();
}

var inputHtml = '';
var  inputItem = pug.compileFile('views/item_input.pug');
var divider = pug.compileFile('views/divider.pug');

var cigaName = new Array();
var cigaCount = new Array();

var getSectorsSize = function(until) {
  var size = 0;
  for (var i=0; i<until; ++i) {
    size += sectors[i].size()
  }
  return size;
}

var getCigaName = function(cigaCode) {
  for (var element in Cigarette) {
    if (Cigarette[element] == cigaCode) {
      return element;
    }
  }
  return "";
}

var getCigaCode = function(cigaName) {
  for (var element in Cigarette) {
    if (element == cigaName) {
      return Cigarette[element];
    }
  }
  return "";
}

var getCigaAsPosOrder = function(arr) {
  var array = new Array(cigaSize);
  for (var i=0; i<arr.length; ++i) {
    var code = getCigaCode(arr[i]);
    array[code] = arr[i];
  }
  return array;
}

/* GET users listing. */
router.get('/', function(req, res) {
  var count = 0;
  for (var i=0; i<sectors.length; ++i) {
    for (var j=0; j<sectors[i].x; ++j) {
      for (var k=0; k<sectors[i].y; ++k) {
        if (sectors[i].get(j, k) == -1) continue;
        cigaName[count] = getCigaName(sectors[i].get(j, k));
        count++;
      }
    }
  }
  for (var i=0; i<nonSector.length; ++i) {
    cigaName[count] = getCigaName(nonSector[i]);
    count++;
  }
  // var asdf = getCigaAsPosOrder(cigaName);
  // console.log(count);
  res.render('cigarette', { cigaNames: cigaName, cigaSize: cigaSize, show: false });

  // getNonSector(res);

  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.write(asdf.length + '<br>');
  // for (var i=0; i<asdf.length; ++i)
  //   res.write(asdf[i] + '<br>');
  // res.end();
});

router.post('/result', function(req, res) {
  for (var element in Cigarette) {
    cigaName[Cigarette[element]] = element;
    cigaCount[Cigarette[element]] = req.body[element];
  }
  res.render('cigarette', { cigaNames: cigaName, cigaCounts: cigaCount, cigaSize: cigaSize, show: true });
});

module.exports = router;