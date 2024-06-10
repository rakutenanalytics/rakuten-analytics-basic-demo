const ENDPOINT_PREFIX = "";

const items = [
  {
    name: "asd",
    id: 1,
    price: 1,
    categories: ["cat A", "cat B", "cat C"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fermentum diam. Ut venenatis ligula ut iaculis placerat. Aenean erat nisi, aliquet a diam nec, tristique semper mi. Nunc vel nulla congue, imperdiet nunc consectetur, lacinia libero. Morbi scelerisque, diam quis convallis semper, purus turpis lobortis eros, vestibulum feugiat elit lacus non massa. Etiam egestas diam non fringilla dapibus. Aliquam in justo in neque tincidunt scelerisque vel sed nisi. Vestibulum ac lorem volutpat sapien dignissim lobortis ac sed felis. Quisque ut mi augue. Sed at ex feugiat, laoreet lacus non, ullamcorper tellus. Integer id iaculis nulla, sed suscipit nisi. Vivamus efficitur, dui ut interdum malesuada, magna odio congue nisl, a gravida elit est ac justo. Pellentesque lobortis tellus eget enim sollicitudin, vitae pulvinar tellus mollis. Nunc viverra, arcu quis convallis fermentum, ex dolor porttitor elit, vitae consequat sapien magna ac magna.",
  },
  {
    name: "bnm",
    id: 2,
    price: 6.99,
    categories: ["cat B", "cat C"],
    description:
      "In tellus nunc, accumsan vitae placerat quis, suscipit sit amet nibh. Integer odio orci, rutrum dignissim eleifend pulvinar, venenatis in dolor. Nulla viverra at est nec porta. Vestibulum eleifend elit ac eleifend rhoncus. Aliquam sed neque sit amet ligula dictum aliquam. Vivamus pellentesque at ante vel sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor at magna tempus pulvinar non at urna. Integer vitae elit risus. Nullam sem tortor, lobortis quis ultrices non, sagittis convallis purus. Nam elementum elit nec urna hendrerit consectetur. Maecenas consequat quis augue in varius. Curabitur consectetur nec sapien et dignissim. Sed pretium orci a neque tempor, in dignissim purus eleifend.",
  },
  {
    name: "cvb",
    id: 3,
    price: 1,
    categories: ["cat C"],
    description:
      "Aliquam maximus mattis nunc, ut pretium ipsum dapibus eu. Nullam pulvinar dictum tincidunt. Aliquam varius posuere erat, vitae lacinia nulla euismod sit amet. Aenean tempor vestibulum massa sed suscipit. Donec maximus euismod velit, sit amet accumsan lorem efficitur vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet turpis purus. Nunc convallis dictum turpis, vitae pretium ipsum blandit non. Ut quis sem lectus. Donec lobortis finibus ultricies. Morbi consequat, urna sed ultrices vehicula, lorem urna consectetur nisl, non vulputate odio justo ut dui. Curabitur dignissim ligula vel massa luctus vehicula. Nulla tincidunt libero nec diam ullamcorper, ac congue sem aliquam.",
  },
  {
    name: "dfg",
    id: 4,
    price: 4.5,
    categories: ["cat A", "cat B"],
    description:
      "Etiam maximus mollis nunc, sit amet facilisis massa tincidunt at. Mauris laoreet urna odio, id pretium nisl tempor sed. Donec pulvinar efficitur sem, vitae consequat enim eleifend a. Etiam vitae porta augue, non feugiat metus. Aenean eget quam vehicula, elementum nisl non, euismod quam. Fusce non pulvinar sem. Nullam aliquet arcu metus, vel consequat dui hendrerit in. Aliquam feugiat leo a nibh placerat, at bibendum velit dictum. Duis ac dui vel ligula ultrices tempus. Morbi at pulvinar eros. Aenean fringilla malesuada felis, et imperdiet purus interdum a. Etiam vitae finibus tortor, vitae accumsan est. Aenean quis massa eget metus egestas porttitor. Nullam varius lorem et auctor molestie. Suspendisse gravida leo nec posuere rhoncus.",
  },
  {
    name: "ert",
    id: 5,
    price: 1.99,
    categories: ["cat A"],
    description:
      "Suspendisse tellus metus, consectetur et metus id, mollis porta dui. Integer dolor velit, vehicula sed convallis vitae, dignissim et magna. In facilisis, turpis ut dictum consequat, urna dolor luctus est, tincidunt rhoncus ipsum lorem ac metus. In hac habitasse platea dictumst. Integer fringilla dapibus turpis, ut commodo ex pellentesque at. Vestibulum vel arcu id risus maximus posuere in non nunc. Nullam a eleifend purus. Pellentesque sit amet dignissim mauris. Quisque blandit tincidunt turpis, eget rhoncus justo porta eu. Donec accumsan sodales felis at dignissim. Proin sollicitudin tristique varius. Nullam in felis id purus tempor rhoncus.",
  },
  {
    name: "fgh",
    id: 6,
    price: 59.99,
    categories: ["cat A", "cat B", "cat C"],
    description:
      "Aliquam velit nulla, semper ut diam ac, cursus finibus nulla. Integer lacinia sem vitae scelerisque bibendum. Duis fringilla libero eu nisl bibendum ullamcorper. Mauris dapibus est eu lorem interdum eleifend. Nam sed metus volutpat, hendrerit lectus eu, fringilla elit. Sed pretium nunc arcu, eleifend varius eros finibus nec. Quisque magna odio, rhoncus sit amet egestas eu, elementum in leo. Etiam placerat sed felis dapibus tempor. Integer euismod tristique ligula. Praesent turpis magna, tincidunt vel odio ut, pellentesque efficitur sem. Aliquam vitae diam at odio tincidunt mollis. Praesent ullamcorper ligula ligula, ut dapibus risus sodales non.",
  },
  {
    name: "ghj",
    id: 7,
    price: 20,
    categories: ["cat B"],
    description:
      "Praesent ut lacus eget felis dictum ultrices. Vivamus a ornare ligula. Aliquam erat volutpat. Quisque sit amet vulputate nisl, quis porttitor lacus. Duis eget ligula mollis, elementum tellus eget, dignissim enim. Vestibulum eget leo elit. Nam id neque eu felis eleifend molestie euismod vel leo. Maecenas mauris enim, gravida eget porta id, lacinia a eros. Proin tincidunt ac dui et laoreet. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pharetra dignissim scelerisque. Sed rutrum eget nulla quis auctor. Quisque volutpat nec nunc nec vulputate. Nullam vulputate placerat nibh.",
  },
  {
    name: "iop",
    id: 8,
    price: 10,
    categories: ["cat B", "cat C"],
    description:
      "Mauris ultricies nibh purus, vitae vehicula ligula rhoncus fringilla. Cras pellentesque risus fringilla enim pretium, non tempor lacus porttitor. Sed ac odio sed elit eleifend ornare in non libero. Aliquam facilisis ligula a libero placerat vestibulum. In vestibulum dictum lorem, eget tincidunt nisl vehicula convallis. Vestibulum non mauris mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    name: "tyu",
    id: 9,
    price: 5,
    categories: ["cat A", "cat C"],
    description:
      "Sed ac est cursus, commodo odio non, fringilla nunc. Integer vel elementum erat. Nam vestibulum nisl viverra vehicula laoreet. In hac habitasse platea dictumst. Donec vestibulum malesuada lectus, nec lacinia quam tristique nec. Vestibulum tristique mi erat. Vestibulum tempus venenatis sem, at venenatis nibh rhoncus id.",
  },
  {
    name: "bnm",
    id: 10,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "Proin",
    id: 11,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "odio",
    id: 12,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "ligula",
    id: 13,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "dapibus",
    id: 14,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "vitae",
    id: 15,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "rhoncus",
    id: 16,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    name: "Nullam",
    id: 17,
    price: 5,
    categories: ["cat D"],
    description:
      "Proin odio ligula, dapibus vitae porta vel, rhoncus eu nisi. Nullam sem arcu, ornare sed ante molestie, viverra elementum neque. Donec pharetra turpis ut lectus mollis ultricies. Etiam sollicitudin quam eget vulputate hendrerit. Phasellus ut augue nec est bibendum lacinia. Nulla efficitur blandit laoreet. Praesent faucibus libero quis sem tincidunt auctor. Nullam pulvinar, odio ut efficitur sollicitudin, nisl nunc suscipit mauris, non interdum velit justo et nisi. Suspendisse vestibulum ex et laoreet vulputate. Nullam facilisis faucibus pulvinar.",
  },
  {
    categories: ["cat A", "cat E", "cat C"],
    description:
      "公確ヲメ生消ニト同転いト復達制ト極投ル京丸ン能7多ラヒヌム郎所ざ会連けやたこ歳参ゆ重87情特名族被ク。確レユ済告期オ話当びろドリ傷都れっゃょ付思マラエ義謙ご可転トそゆ崎意んか手図径ラマノ開提カヒ指施めはわ普島ンぜっレ熊済リ際消科雄類発のご。改ぎ億3康を掛簿宮ふ実義ホムロヘ意作ナチス及重ハモヌワ読伝ひ片失ワ県刷ニツエ越82刺掘顧知3雪がル賞家きひ。",
    id: 18,
    name: "公確ヲメ生",
    price: 401.89,
  },
  {
    categories: ["cat C", "cat B", "cat G", "cat D", "cat F", "cat A"],
    description:
      "制ツ情大実ネス情在じび万集と存署コス聞告力だぱを済住ざ軸更ぎや討傷ル近生夕笑イ宮富ラーびせ味園フ実地ヨソホオ党彦も言写さづざク告25器敗香機ぴこわを。6体テヲカ接3方メナ立無18主ろ小提ルリタ自境つクめ越失リ業突ッうやら代高流載ト女3囲ヨフア馬残年シ自産撤てド売飲盤思票ンなむス。",
    id: 19,
    name: "制ツ情大実",
    price: 768.21,
  },
  {
    categories: ["cat E", "cat B", "cat D", "cat G"],
    description:
      "育12書レシニネ録城れー事民ふじぜ北瞬ッ中器セ責空メミノナ型季最公がべっれ賛健辞1富周務紀れン。前ヱ久虐ニル会載トまづド区世エロコ様応けほんて記紙準ーれト撲権こたぐ谷演っだぐレ提放せんょ発岐ぴべ新表りリむ室91三セメス対8島職ッてへト。掲ハフナ故女でてだ要治ずフぞだ雪齢だ再中ぶスそく料死リぼ使科ノニ永本アヲロ知久ケア取選色テ込特開リひ木読四登聴ょげトレ。",
    id: 20,
    name: "育12書レ",
    price: 524.11,
  },
  {
    categories: ["cat E", "cat F", "cat D"],
    description:
      "約54門ネ生高ッらぶの設竹らぐ提本じれづど販工予ヱ事週べやぐ準身ぼ正走年けーゅて近要ーたゅ。断1事ウ便各マナタ賞選ヨラト譜腕をばずラ決供だ差本ミ画趣わ名景ただご科旋ス施62象びむ踏売せがへほ読脈カキ良心リっ続阪決併継卸ル。立行員スケナツ習決イ冷2地リ格亡さぜ開無ル利京マヤハ適条ツユ掲域利えぞ堀井ワ設翼ヨ従楽間たいレら礎功らいず提抑りぽひ。",
    id: 21,
    name: "約54門ネ",
    price: 562.1,
  },
  {
    categories: ["cat B"],
    description:
      "担ホイタ角更ホヤウレ写真ハニラア必聞心代んげ船見料ソマホ欺82会豪35会豪45活ラ全廟握湯壁リ。少ネナウヌ由捜みだきさ著小ヒツ東剤セミ巻展モノ県報マヲル府武紙ほゃ林通フが動毎だらめさ属手際の値中困摘覧ちゆどイ。地むぴらね統応ろらう将演り当75会豪78小え著協かフまレ特打ょ作間ょす文連ルク挙岡リ毎面く断生線がづ類原サ行韓体の人弾ソミユロ月視笑混遠スと。",
    id: 22,
    name: "担ホイタ角",
    price: 900.0,
  },
  {
    categories: ["cat B", "cat E", "cat C", "cat A", "cat G"],
    description:
      "何ゆつッ善禁ほレこふ応線図さ詐組トハ覧増掲エ球菱嗤と追約きちょ家1五じゅ能思ニサリ検申ニエナイ吸製贈そド。更ヘコ求換まッ開安ンつぞ候紙有せじお投医制けさの送個ロフモト載価イ今1対びはゆ立程ゃー手家ゆ自連ラオケ開苦ノユケ択南監やぶわじ。7県無ちへ県71料歌ヘメ済碁イ豊合ヘメネウ断世配セイ容芸4市じくめ去能ホロヲシ葉転ムマ員見へよ成若ムロ近肯に類忠誉較ん。",
    id: 23,
    name: "何ゆつッ善",
    price: 549.74,
  },
  {
    categories: ["cat E", "cat C"],
    description:
      "身ム測取ト売間スキム事吉天ーら裏俊ユナ墓稿ヨオフヌ確聞じ教食やレリな博9質レ沢官メヒマ代部む晶器なッ動量エコ窓布益陣て。気たふ禁総ラずんこ上質光れ立田ホマ月2掘ア一現ヌ油95金状のむいす料準心載べはく航1追ミリ仕痛回況限仕ょぜくに。物ふと民究イフとを権孤いゅゆ援並レコキ枚転ロ守夫台ノラツ図7条トアニ試層う業昇フ青伝衛こょぱだ田高ぎリゃい高帯制につれば。",
    id: 24,
    name: "身ム測取ト",
    price: 520.53,
  },
  {
    categories: ["cat D", "cat E", "cat A", "cat F", "cat G"],
    description:
      "正く福北高トノカナ聞長れびい公階げえ人件8第復ソ想費多ヱソサ話報リチ今子無ヤエユオ他川わ領供わゆやー仙62承らにク時平准みえッ。雪ぞぜせ中出ア氏8満そゆー分素正ヤシ地能ナ看速ノヱネ飲茶ッめりて描璧ぎえ豊都むろまれ謝場イオニ野仰はやょ。供ミノヤ転78録た真平ぽり高南第のぽ知別づ暮8万ハフク力家レシトキ検建テリケ電際ずざッ慌志りっルし車追ぱやべ例受キセチケ離四酒球だふゃ。",
    id: 25,
    name: "正く福北高",
    price: 638.47,
  },
  {
    categories: ["cat F", "cat A"],
    description:
      "参隈ラむ載初テクヨス形急荷リセ坊腎心どさご紀質びをぎぱ取京潘だれ需3術モ強大わ転続げぜづ意44欺茶0内よ治川聴つやごえ。保ハエ著未方ど議属お稿清ラだす文択ごょ森善ニヨ事意ルだよわ在更モ分収惑しラ坂横ぐ点第こ掲弾ユマチ航書ルミ工28部セムケ選到あろづえ断逃念ウツレノ禁仕ゃ。",
    id: 26,
    name: "参隈ラむ載",
    price: 466.06,
  },
  {
    categories: ["cat E", "cat F", "cat B", "cat C"],
    description:
      "92交日もれなぶ初手倍イリ上評ちずる半都エキワオ営長けろだ負9間ちおゆつ立入ほぎそ館跡がル失値了レ。3久たうとね大統ぱづ容必リ千択ヱウラ最居エメヲウ戦宜ま統申げッ換政負分ヱ場表ほぎ善変そ紹朝ホヘミア紹巨亭ぜたリ。提つうイ調見キヲ短中記ゆ約返シヱヌノ仲市46乗さ露利じふら題故ワアレ稿応ル民試ワイカ分算ニ毎倒ぶ時介ナサヲヤ際重静認極ずてせぱ掲知ざぜね。",
    id: 27,
    name: "92交日も",
    price: 844.69,
  },
  {
    categories: ["cat B"],
    description:
      "問ずき村必ぽゆず育栄つるっわ業西がつへよ福新企ロリ女道授型サヘワミ撤般ゅごぱ代現ノコ体9写へ活庫ぼわ庭自す。務ケ単職三あかた席精ぶさり身謙ヨアオ供保ぞレね加聞にぼわ書聞日ワツオノ午杯アテメ下相ニセヤ前4読三めざぶり。沸メムノ庇国ッえべざ声後キイア比証ッ広鳥府足オ禁8技ネウリ欧形トび線記モステル健6類イっぽざ事横オチ紙内墓レ第筋ゃリ後宏んす判案ニ遅情誠彫慰腐がはへそ。",
    id: 28,
    name: "問ずき村必",
    price: 587.61,
  },
  {
    categories: ["cat B", "cat D"],
    description:
      "探ッこ立7極はれ番社講レテア詳病ムイソナ今虫ホチ流千ま表答ぶでかょ正日イヱメ演議ヌラリツ安心ち将辞た加武がょれ名殖8際完撃苦ろ。世ょ早気メキイス文初エメ乱者りぴ抽年フヘロマ委2情ルょ名京康ルるべ対価ウロヒモ媛顔無フざえ意属カユニ工読居とべや発38側びね広連じは更客披暑棚ゃリつ。要交ユヒニ駆学さらくと図芸そつドね参実メウヨ反北面ヱ月医イリコス写圧ろいどぎ世政ヒア振地6米授享凡な。",
    id: 29,
    name: "探ッこ立7",
    price: 573.93,
  },
  {
    categories: ["cat C", "cat G"],
    description:
      "氏どフレ投雪セユ暮進シア区欠はッべそ型論リツ止中お写議りンイ砂必紙ン演3重統タノケヒ能大ニネイ政聴ラニメエ任黒録瀬ぽつでし。校レさすく板毎場て更2村クムカ終毎ーきさ読差さにき済百ず点乏ヌメロワ教皓よすだ改視ゃぶぐ街保ヲヘトナ録文応サケツ東伝ワコ告議さまほち磨後ナ識激メ常無マキム正番三以青はつ。品すれくし約力フ輪要名あ氷愛旬67最61度トフぼた場対東フめ者立題ヒフヘ自9納じと。",
    id: 30,
    name: "氏どフレ投",
    price: 458.06,
  },
  {
    categories: ["cat B", "cat F", "cat C", "cat G", "cat A"],
    description:
      "原上そてぴふ問抜ド門機テ門獲三ぶるびば勝無フユレ談大せトしえ治作なす進75白ッ崎海護あすゃ崎企イ推測ホ説90分オ市融ヒノユホ円量ノサ兵赤ぞに打橋似単さへゆ。官せなはレ上反アケモネ区両ナオス明士ラサフネ度雪イウヘト載知エモメ回8押売ヤラカイ千判カオル伴1紙タ芸冷勧封慮えてへル。台間めざ歩認る木最毎ゅリンで予地購ゃかゆめ設取しろほ模鉄業んよ読合ヌシ江航さて芝責おにゃリ島票越巡ぽら。",
    id: 31,
    name: "原上そてぴ",
    price: 717.16,
  },
  {
    categories: ["cat D", "cat A", "cat F", "cat G", "cat C"],
    description:
      "毎いげ自都川毎やフゆ勝段4収ホユタ包投けむろを彼材うラ戸一ご来今野チク貨書要ッ老飛スがべ由催ハツチケ歳得位ぎちや。先も人柱ウハラ員稿ヌハカ多成づ企報む投事オツ新区ワユメ法件カセマタ長譜想し小捕ずにどフ操掲モ芸時と転講チフヨ団余さ経説言アツト活星権ア満未エノ山戸証則ぽぱルこ。",
    id: 32,
    name: "毎いげ自都",
    price: 685.64,
  },
  {
    categories: ["cat E"],
    description:
      "助みば多院ホ問2見名フラメ亭対づすば転1矢問球ぜ美付すうの芸記エノレ指岩はぴ今図び訴環さす無審字ゆ。32表ハ導米ござくで黒全社ツヱハヨ速工タワ哲特索ナアロユ上講チエマ明体けべ和事47昭ぽ合白コセヨ率満禁諸クはラび。明ハサ梨結せどひ評牧むびそざ真療ゅま治供惑けこんだ入乱モイ就4情ン松女ヲ覧発ラごど医努レヒ会開スセムヱ竹飛さむ式段も日要ト私視農閣ほ。",
    id: 33,
    name: "助みば多院",
    price: 745.71,
  },
  {
    categories: ["cat C", "cat A", "cat D", "cat B", "cat F"],
    description:
      "稼戸ロヨラツ基証すね激無く義点ネシヤ覧夜論まう道賞とほ盟条やろ川済ホヤ掲体ーめご服府え因脳スぶレか。総げトべ神続ク井5内チシ開化わぐずど集2暮ツノヌ済権ケコトオ抽1出箕ルハス市不んぱけ網米のぶ文93副行ッみだち者沸別れきぴ来見明ラト情独スが。活クヘエユ円紙りげフ調議ゃ人刊マレネ起2隊情ち活覧期ロメリユ意領るうなゃ紙世ルカネ撃法タ年著転セソムエ爬栃ユニケト塊友批模走つ。",
    id: 34,
    name: "稼戸ロヨラ",
    price: 510.54,
  },
  {
    categories: ["cat B"],
    description:
      "63仕ルだぽ野2所さ会的上ムタウモ力4施むごり強庭リエノ賞空株メロニ語人マ長目げだえを展持底肉慎症スすえ。知せもばト英害ラム読違タメヌノ含少ラテ正載事スす投復あイ商結く歯仁こ鮮会レヱソ改絵紙ざフぜ捜稿ルシイリ体抑ろへ。第記ぽゃろ東紙熱ぽりは早6集ゆい夫参メサツ残提ハメナヨ差玲セカフ統技わをほま森題ネヒ一投カ阪的トめ理一あつる歴極天上なゆしれ。",
    id: 35,
    name: "63仕ルだ",
    price: 369.96,
  },
  {
    categories: ["cat G", "cat C", "cat A", "cat B", "cat F", "cat E", "cat D"],
    description:
      "分もす状大48旧ケチ丸動で安受むゆは及囲ワツ早男ソニメオ報挙やト裏弁クセ次問汚ぱふにゅ。軒じ意換キ済件ゃひ年小しぜ捕配児かまは情60樹んほへ三公ふれ告拳オソ過田ヨハ囲応動ゅかッ探型カツラワ媛更由のトなき覧御おまぽ。出ウ済写クマ治表い養北ぞどむ規71的アソマ川庁なめ清注びけみ委秘2球読メニヨ営分し馬受ラカト午推レでル費会速タ年光港ツサネニ提野了晴限だ。",
    id: 36,
    name: "分もす状大",
    price: 724.04,
  },
  {
    categories: ["cat F", "cat A", "cat G", "cat C", "cat B", "cat E", "cat D"],
    description:
      "1政しひっ守村ぐほゆね提2末可強の捕司ヘロヒウ木76禁ト堂界が後沸ずえげ界旅ノニル安父ぎッ。区人ッン援作ちねわ関碁む棋切ロナヒツ桜初ヤサタシ一巡ロト除施ふスゃ羊右ルツム暮断ぽたび必1官混ワヘキト実治ず打文すじ形痛玲父丈ぞせめ。経ホラエレ師3西語ラツコ荒縮ハロユ界官リ街政ぐごと幕追へぐせ宅技究ワユ屋何にぽ際為っレフ図仙天夜ヘ語僧兜函匿ぼ。",
    id: 37,
    name: "1政しひっ",
    price: 425.83,
  },
];

// to-do: hash passwords
const users = [
  {
    username: "a",
    password: "b",
    orders: [],
  },
  {
    username: "username",
    password: "password",
    orders: [],
  },
];

function handleEnterKeyPress(event) {
  if (event.keyCode === 13) event.currentTarget.exec();
}

// add event listeners
window.addEventListener("DOMContentLoaded", function () {
  try {
    const uname = document.getElementById("uname");
    if (uname) {
      uname.exec = login;
      uname.addEventListener("keyup", handleEnterKeyPress);
    }

    const pword = document.getElementById("pword");
    if (pword) {
      pword.addEventListener("keyup", handleEnterKeyPress);
      pword.exec = login;
    }

    const searchBar = document.getElementById("searchPrompt");
    if (searchBar) {
      searchBar.exec = goToSearch;
      searchBar.addEventListener("keyup", handleEnterKeyPress);
    }
  } catch (error) {
    console.error(error);
  }
});

// functions
function goToSearch() {
  const prompt = document.getElementById("searchPrompt").value || "";
  window.location.href =
    ENDPOINT_PREFIX + "/search_results.html?search=" + prompt;
}

/*
  for binding Add to Cart buttons generated in item cards for click event
  itemId: <String> item id corresponding to the item card where buttons are to be bound
*/
function bindButton(itemId) {
  const $newElementsToTrack = jQuery(
    "#add-to-cart-div-" + itemId.toString()
  ).find("[data-ratId]");
  RAT.bind($newElementsToTrack);
}

function getSearchRes() {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("search");
  let page = urlparams.get("p");
  try {
    page = parseInt(page);
    if (page === null || isNaN(page)) page = 1;
  } catch (err) {
    page = 1;
  }

  const displayCount = 9;
  const BreakError = {};
  const results = items.filter((i) => i.name.includes(prompt));
  const startInd = (page - 1) * displayCount;
  const endInd =
    startInd + displayCount <= results.length
      ? startInd + displayCount
      : results.length;

  createPgn(Math.ceil(results.length / displayCount), page);

  try {
    results.slice(startInd, endInd).forEach(function (item, index, arr) {
      const icard = generateItemCard(item);
      document.getElementById("item-display").appendChild(icard);
      bindButton(item.id);
    });
  } catch (err) {
    if (err !== BreakError) throw err;
  }

  displayCategories();
}

function createPgn(pageCount = 1, currentPage = 1) {
  const paginationList = document.getElementById("search-pages");

  for (let i = 1; i <= pageCount; i++) {
    const tmp = document.createElement("a");
    tmp.setAttribute("href", "#");
    tmp.setAttribute("onclick", "'moveSearchPage(" + i.toString() + ")'");
    tmp.setAttribute(
      "class",
      "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white rounded-none border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    );
    tmp.innerHTML = i.toString();
    const pg = document.createElement("li");
    pg.appendChild(tmp);
    if (i === currentPage)
      pg.firstElementChild.setAttribute("aria-current", "page");
    paginationList.insertBefore(pg, paginationList.lastElementChild);
  }
}

function moveSearchPageNext() {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("search");
  let page = urlparams.get("p");
  try {
    page = parseInt(page);
    if (page === null || isNaN(page)) page = 1;
  } catch (err) {
    page = 1;
  }
  const pageCount = document.getElementById("search-pages").childElementCount;
  if (page < pageCount - 2) {
    page += 1;
    window.location.href =
      window.location.origin +
      window.location.pathname +
      "?search=" +
      prompt +
      "&p=" +
      page.toString();
  }
}

function moveSearchPagePrevious() {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("search");
  let page = urlparams.get("p");
  try {
    page = parseInt(page);
    if (page === null || isNaN(page)) page = 1;
  } catch (err) {
    page = 1;
  }
  if (page > 1) {
    page -= 1;
    window.location.href =
      window.location.origin +
      window.location.pathname +
      "?search=" +
      prompt +
      "&p=" +
      page.toString();
  }
}

function moveSearchPage(targetPage) {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("search");
  window.location.href =
    window.location.origin +
    window.location.pathname +
    "?search=" +
    prompt +
    "&p=" +
    targetPage.toString();
}

function generateItemCard(item, type = 0, qty = 1) {
  const icard = document.createElement("div");
  icard.setAttribute(
    "class",
    "rounded overflow-hidden shadow-lg text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  );
  let cardContent = `
    <div class="px-6 py-4" onclick="goToItem([item-id-holder])">
      <div class="font-bold text-xl mb-2">[item-name-holder]</div>
      <p class="text-gray-700 text-base">
        [item-price-holder]
      </p>
      <p class="truncate text-gray-700 text-base">
        [item-description-holder]
      </p>
    </div>
  `;

  switch (type) {
    // home
    case 0:
      cardContent += `
      <div id="add-to-cart-div-[item-id-holder]" class="px-6 pt-4 pb-2 grid grid-cols-2 gap-4">
        <input type="number" id="item-qty-[item-id-holder]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="[item-qty-holder]" required>
        <button onclick="addToCart(document.getElementById('item-qty-[item-id-holder]').value, [item-id-holder])" data-ratId="add[item-id-holder]" data-ratEvent="click" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
      </div>
      `;
      break;
    // cart
    case 1:
      cardContent += `
      <div class="px-6 pt-4 pb-2">
        <input type="number" id="item-qty-[item-id-holder]" min="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="[item-qty-holder]" onChange=updateCart([item-id-holder])>
      </div>
      `;
      break;
    // confirmation
    case 2:
      cardContent += `
      <div class="px-6 pt-4 pb-2">
        <input type="number" id="item-qty-[item-id-holder]" min="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="[item-qty-holder]" readonly>
      </div>
      `;
      break;
  }

  cardContent = cardContent.replaceAll("[item-name-holder]", item.name);
  cardContent = cardContent.replaceAll(
    "[item-price-holder]",
    item.price + "円"
  );
  cardContent = cardContent.replaceAll(
    "[item-description-holder]",
    item.description
  );
  cardContent = cardContent.replaceAll("[item-name-holder]", item.name);
  cardContent = cardContent.replaceAll("[item-id-holder]", item.id);
  cardContent = cardContent.replaceAll("[item-qty-holder]", qty.toString());

  icard.innerHTML = cardContent;
  return icard;
}

function getCategory() {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("search");
  let page = urlparams.get("p");
  try {
    page = parseInt(page);
    if (page === null || isNaN(page)) page = 1;
  } catch (err) {
    page = 1;
  }

  const displayCount = 9;
  const BreakError = {};
  const results = items.filter((i) => i.categories.includes(prompt));
  const startInd = (page - 1) * displayCount;
  const endInd =
    startInd + displayCount <= results.length
      ? startInd + displayCount
      : results.length;

  createPgn(Math.ceil(results.length / displayCount), page);

  try {
    results.slice(startInd, endInd).forEach(function (item, index, arr) {
      const icard = generateItemCard(item);
      document.getElementById("item-display").appendChild(icard);
      bindButton(item.id);
    });
  } catch (err) {
    if (err !== BreakError) throw err;
  }

  displayCategories();
}

function displayRandomItems(count) {
  const shuffledItems = items.sort(() => 0.5 - Math.random());
  shuffledItems.slice(0, count).forEach(function (item, index, arr) {
    const listitem = document.createElement("li");
    const itemlink = document.createElement("a");
    const icard = generateItemCard(item);
    document.getElementById("item-display").appendChild(icard);
    bindButton(item.id);
  });

  displayCategories();
}

function displayCategories() {
  let catList = [];
  items.forEach(function (item, index, arr) {
    catList = catList.concat(item.categories);
  });

  const uniqueCat = [...new Set(catList)].sort();
  uniqueCat.forEach(function (item, index, arr) {
    const listitem = document.createElement("li");
    const itemlink = document.createElement("a");
    itemlink.setAttribute("href", "/category.html?search=" + item);
    itemlink.setAttribute(
      "class",
      "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    const label = document.createElement("span");
    label.setAttribute("class", "ml-3");
    label.innerHTML = item;
    itemlink.appendChild(label);
    listitem.appendChild(itemlink);
    document.getElementById("category-display").appendChild(listitem);
  });
}

function goToItem(id) {
  window.location.href = ENDPOINT_PREFIX + "/item.html?id=" + id;
}

function updateBookmarkButton(targetId) {
  const bmkCk = getCookie("_bmk") ? JSON.parse(getCookie("_bmk")) : undefined;
  let val;
  let onclickfunc;
  if (bmkCk !== undefined && bmkCk.indexOf(targetId) !== -1) {
    val = "Remove Bookmark";
    onclickfunc = "removeBookmark(" + targetId.toString() + ")";
  } else {
    val = "Add Bookmark";
    onclickfunc = "addBookmark(" + targetId.toString() + ")";
  }
  const btns = document.querySelectorAll("[data-value='Bookmark']");
  btns.forEach((btn) => {
    btn.setAttribute("value", val);
    btn.setAttribute("onClick", onclickfunc);
  });
}

function getItemInfo() {
  initializeCarousel();
  // show the modal
  const modal = document.getElementById("defaultModal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  // set modal close buttons
  const elements = document.querySelectorAll("[data-modal-hide]");
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      const modal = document.getElementById("defaultModal");
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  });

  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const itemid = urlparams.get("id");

  const item = items.find(function (i, index) {
    if (i.id == itemid) return true;
  });

  const name = document.getElementById("item-name");
  const desc = document.getElementById("item-desc");
  const floatName = document.getElementById("float-name");
  const floatPrice = document.getElementById("float-price");
  name.innerHTML = item.name;
  desc.innerHTML = item.description;
  floatName.innerHTML = item.name;
  floatPrice.innerHTML = item.price.toString() + "円";
  updateBookmarkButton(item.id);

  const price = document.getElementById("item-price");
  price.innerHTML = item.price.toString() + "円";
}

function updateCart(id) {
  const currentCart = getCart();
  currentCart.forEach(function (item, index) {
    if (id == item.id) {
      item.qty = document.getElementById("item-qty-" + id).value;
    }
  });
  localStorage.setItem("cart", JSON.stringify(currentCart));
  const price = document.getElementById("total-price");
  price.innerHTML = "Total: " + calculateCartTotal().toString();
}

function addToCart(qty, id = null) {
  if (!isLoggedIn()) {
    // log in first
    window.location.href = ENDPOINT_PREFIX + "/login";
  } else if (qty > 0) {
    const query = window.location.search;
    const urlparams = new URLSearchParams(query);
    let itemid = urlparams.get("id");

    if (id != null) itemid = id;

    const currentCart = getCart();
    const exists = currentCart.find(function (i, index) {
      if (i.id == itemid) {
        i.qty = parseInt(i.qty) + parseInt(qty);
        return true;
      }
    });
    if (exists == undefined) {
      currentCart.push({
        id: itemid,
        qty: parseInt(qty),
      });
    }
    window.localStorage.setItem("cart", JSON.stringify(currentCart));
    // change alert to modal
    window.alert("Added to cart!");
  }
}

function displayBookmarks() {
  if (!isLoggedIn()) window.location.href = ENDPOINT_PREFIX + "/login.html";
  const bmkListDisp = document.getElementById("bookmark-items");
  const bmks = JSON.parse(getCookie("_bmk"));
  const itemsToDisplay = items.filter((item) => bmks.includes(item.id));

  itemsToDisplay.forEach((item) => {
    const tmp = createBookmarkListItem(item);
    bmkListDisp.appendChild(tmp);
  });
}

function addBookmark(itemid) {
  if (!isLoggedIn()) {
    // log in first
    window.location.href = ENDPOINT_PREFIX + "/login.html";
  } else {
    const bmkCk =
      getCookie("_bmk") !== null ? JSON.parse(getCookie("_bmk")) : [];
    if (!bmkCk.includes(itemid)) {
      bmkCk.push(itemid);
      setCookie("_bmk", JSON.stringify(bmkCk), 365);
      // add modal for confirmation
      window.alert("Bookmarked!");
      updateBookmarkButton(itemid);
    } else {
      window.alert("Already bookmarked.");
    }
  }
}

function removeBookmark(targetId) {
  let bmkCk = getCookie("_bmk") !== null ? JSON.parse(getCookie("_bmk")) : [];
  const ind = bmkCk.indexOf(targetId);
  bmkCk = bmkCk.filter((val) => val != targetId);
  setCookie("_bmk", JSON.stringify(bmkCk), 365);
  updateBookmarkButton(targetId);
  window.alert("Bookmark removed!");
}

function clearBookmark() {
  deleteCookie("_bmk");
}

function createBookmarkListItem(item) {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "pb-1 pt-1");
  listItem.setAttribute("onclick", "goToItem(" + item.id.toString() + ")");
  const listDiv = document.createElement("div");
  listDiv.setAttribute(
    "class",
    "flex items-center gap-4 space-x-4 rounded shadow-lg text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  );

  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "flex-shrink-0");

  const img = document.createElement("img");
  img.setAttribute("class", "w-8 h-8 rounded-full");
  img.setAttribute("src", "/docs/images/people/profile-picture-1.jpg");
  img.setAttribute("alt", "Neil image");

  const textDiv = document.createElement("div");
  textDiv.setAttribute("class", "flex-1 min-w-0");

  const itemName = document.createElement("p");
  itemName.setAttribute(
    "class",
    "text-sm font-large pt-4 text-gray-900 truncate dark:text-white"
  );
  const itemDesc = document.createElement("p");
  itemDesc.setAttribute(
    "class",
    "text-sm text-gray-500 pb-4 truncate dark:text-gray-400"
  );

  const priceDiv = document.createElement("div");
  priceDiv.setAttribute(
    "class",
    "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
  );

  imgDiv.appendChild(img);
  listDiv.appendChild(imgDiv);

  itemName.innerHTML = item.name;
  textDiv.appendChild(itemName);
  itemDesc.innerHTML = item.description;
  textDiv.appendChild(itemDesc);
  listDiv.appendChild(textDiv);

  priceDiv.innerHTML = item.price.toString() + "円";
  listDiv.appendChild(priceDiv);

  listItem.appendChild(listDiv);

  return listItem;
}

function confirmPurchase() {
  const query = window.location.search;
  const urlparams = new URLSearchParams(query);
  const prompt = urlparams.get("po");
  let paymentOption = "";
  switch (prompt) {
    case "cc":
      paymentOption = "Credit Card";
      break;
    case "c":
      paymentOption = "Cash";
      break;
    case "cs":
      paymentOption = "Convenience Store";
      break;
  }
  const paymentDisplay = document.getElementById("payment-option");
  if (paymentDisplay) {
    paymentDisplay.innerHTML = "Payment Method: " + paymentOption;
  }
  displayCart(false);
}

function clearCart() {
  if (window.localStorage.hasOwnProperty("cart")) {
    window.localStorage.removeItem("cart");
  }
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  const price = document.getElementById("total-price");
  price.innerHTML = "";
}

function goHome() {
  window.location.href = "/index";
}

function goToCart() {
  window.location.href = "/cart";
}

function goToConfirmPurchase() {
  if (isLoggedIn()) {
    const po = document.getElementsByName("payment-option");
    po.forEach((item, i) => {
      if (item.checked) {
        window.location.href =
          ENDPOINT_PREFIX + "/purchase_confirm.html?po=" + item.value;
      }
    });
  } else {
    window.location.href = ENDPOINT_PREFIX + "/login.html";
  }
}

function goToPaymentOptions() {
  if (localStorage.hasOwnProperty("cart"))
    window.location.href = ENDPOINT_PREFIX + "/payment_options.html";
}

function goToCompletePurchase() {
  if (isLoggedIn()) {
    window.location.href = "/purchase_complete";
  } else {
    window.location.href = "/login";
  }
}

function getCart() {
  if (window.localStorage.hasOwnProperty("cart"))
    return JSON.parse(window.localStorage.getItem("cart"));
  return [];
}

function calculateCartTotal() {
  const cart = getCart();
  return Math.round(
    (cart.reduce(function (acc, item) {
      const itemDetail = items.find(function (i, index) {
        if (item.id == i.id) return true;
      });
      return acc + parseFloat(itemDetail.price) * item.qty;
    }, 0.0) *
      100) /
      100
  );
}

function displayCart(allowModify = false) {
  if (!isLoggedIn()) window.location.href = ENDPOINT_PREFIX + "/login.html";
  const cart = getCart();
  const list = document.getElementById("cart-items");

  const totalPrice = calculateCartTotal();

  cart.forEach(function (i, index) {
    const item = items.find(function (i2, index2) {
      if (i2.id == i.id) return true;
    });
    const icard = generateItemCard(item, allowModify ? 1 : 2, i.qty);
    list.appendChild(icard);
  });
  document.getElementById("total-price").innerHTML = "Total: " + totalPrice;
}

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  // direction +1/-1
  const activeItem = document.querySelector('[data-carousel-item="active"]');
  const activeIndex = Array.prototype.indexOf.call(
    carousel.children,
    activeItem
  );

  let targetIndex = (activeIndex + direction) % carousel.childElementCount;
  targetIndex =
    targetIndex >= 0 ? targetIndex : carousel.childElementCount + targetIndex;
  const targetItem = carousel.children[targetIndex];

  activeItem.setAttribute(
    "class",
    "hidden " + activeItem.getAttribute("class")
  );
  activeItem.setAttribute("data-carousel-item", "");

  targetItem.setAttribute(
    "class",
    targetItem.getAttribute("class").replace("hidden ", "")
  );
  targetItem.setAttribute("data-carousel-item", "active");
}

function initializeCarousel() {
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("carousel-next");
  const prevBtn = document.getElementById("carousel-prev");

  const itemClass = carousel.children[0].getAttribute("class");
  carousel.children[0].setAttribute("class", itemClass.replace("hidden ", ""));

  let carouselInterval = setInterval(() => {
    moveCarousel(1);
  }, 4000);

  nextBtn.addEventListener("click", () => {
    moveCarousel(1);
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      moveCarousel(1);
    }, 4000);
  });

  prevBtn.addEventListener("click", () => {
    moveCarousel(-1);
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      moveCarousel(1);
    }, 4000);
  });
}

function initializeIndex() {
  const cart = getCart();
  displayRandomItems(8);

  initializeCarousel();

  const logout = document.createElement("li");
  logout.setAttribute("id", "logout-link");
  const logoutlink = document.createElement("a");
  logoutlink.setAttribute("href", ENDPOINT_PREFIX + "/logout.html");
  logoutlink.setAttribute(
    "class",
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  );
  logoutlink.innerHTML = "Logout";
  logout.appendChild(logoutlink);

  const login = document.createElement("li");
  login.setAttribute("id", "login-link");
  const loginlink = document.createElement("a");
  loginlink.setAttribute("href", ENDPOINT_PREFIX + "/login.html");
  loginlink.setAttribute(
    "class",
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  );
  loginlink.innerHTML = "Login";
  login.appendChild(loginlink);

  const navbar = document.getElementById("navbar-options-container");

  // check if logged in
  if (isLoggedIn()) {
    const login = document.getElementById("login-link");
    if (login) login.parentNode.removeChild(login);
    navbar.appendChild(logout);
    document.getElementById("welcome-user").innerHTML =
      "Welcome, " + getCookie("_uu");
  } else {
    const logoutTmp = document.getElementById("logout-link");
    if (logoutTmp) logoutTmp.parentNode.removeChild(logoutTmp);
    navbar.appendChild(login);
    document.getElementById("welcome-user").innerHTML = "";
  }
}

/*
  add cookie
  name: <String> Cookie name
  value: <String> Cookie value
  duration: <Integer> Duration of cookie in days
*/
function setCookie(name, value, duration) {
  const date = new Date();
  date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + ";path=/";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires= Thu, 01 Jan 1969 00:00:00 UTC; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const ck = cookies[i].split("=");
    if (ck[0] === name) return ck[1];
  }
  return null;
}

function isLoggedIn() {
  if (getCookie("loggedin") !== null) return true;
  return false;
}

// Login/Logout functions
function login() {
  const uname = document.getElementById("uname").value;
  const pword = document.getElementById("pword").value;
  const loggedinUser = users.find(function (user, index) {
    if (user.username == uname && user.password == pword) return true;
  });
  if (loggedinUser) {
    setCookie("loggedin", "true", 365);
    // uname should be encrypted
    setCookie("_uu", uname, 365);
  } else {
    document.getElementById("message").innerHTML = "Failed to login";
  }
  if (document.referrer === "" || document.referrer === window.location.href) {
    window.location.href = window.location.origin;
  } else {
    window.location.href = document.referrer;
  }
}

function logout() {
  deleteCookie("_uu");
  deleteCookie("loggedin");
}
