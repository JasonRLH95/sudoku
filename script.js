


// ----------------------------------------------------------------------------------------------------------------------------------------
// login page
// ----------------------------------------------------------------------------------------------------------------------------------------

// משתני עזר להמשך
// const username = 'abcd';
// const password = '1234';
var username ='';
var password = '';
var temp = 0;
var numButton = null;
var tile = null;
var solution = 0;
var tempCheckMatrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

//temp

let nameInput= document.getElementById('user-name');
let passInput= document.getElementById('password');
const saveName=()=>{
    username=nameInput.value;
    console.log(username)
    return username
}
const savePass=()=>{
    password=passInput.value;
    console.log(password)
    return password;
}
const validation=()=>{

}

// כפתור לוגין בודק את פרטי המשתמש בעת ההתחברות
function checkLogin(){
    let loginPage = document.getElementById('login');
    let paragraph1 = document.createElement('p');
    let paragraph2 = document.createElement('p');
    let cnt = 0;
    // let inputBox1 = document.getElementById('user-name');
    // let inputBox2 = document.getElementById('password');
    let after = 0;
    // console.log(inputBox1.value)
    if(username.length===0&&password.length===0){
        return alert('must insert name and password first')
    }
    if(username.length>10||password.length>10){
        return alert('username and password length could be maximum of 10 characters length ')
    }
    if(username.length!==0){
        after = setTimeout(checkAgain, 4000);
        for(let i=0;i<username.length;i++){
            if(username[i]<='z'&&username[i]>='a'){
                continue;
            }
            if(username[i]<='Z'&&username[i]>='A'){
                continue;
            }
            else{
                loginPage.appendChild(paragraph1);
                paragraph1.setAttribute('id','p1');
                paragraph1.innerHTML = 'Fill Username only with English letters!';
                return;
            }
        }
        cnt++;
        paragraph1.remove('id');
    }
    if(password.length!==0){
        after = setTimeout(checkAgain, 4000);
        for(let i=0;i<password.length;i++){
            if(password[i]>=0&&password[i]<=9){
                continue;
            }
            else{
                loginPage.appendChild(paragraph2);
                paragraph2.setAttribute('id','p2');
                paragraph2.innerHTML = 'Fill Password only with numbers!';
                return;
            }
        }
        cnt++;
        paragraph2.remove('id');
    }
    if(cnt === 2){
        let loginOk = document.getElementById('login')
        loginOk.remove('id')
        loginOk.setAttribute('id', 'if-login-ok')
        document.body.style.background = "rgba(13, 67, 243, 0.308)";
        document.getElementById('difficult-lvl-page').style.display = 'flex';
        document.getElementById('usernamespan').innerHTML = username;
        document.getElementById('usernamespan').style.color = "red";
        console.log(`Welcome back ${username}!`);
    }
}

// בעת לחיצה על כפתור ההתחברות, במידה ופרטי ההתחברות היו שגויים יופיעו מתחת לכל אינפוט הודעות שגיאה מותאמות אישית
// מטרת הפונקציה הבאה היא לבדוק האם הודעות השגיאה מופיעות או לא, ובמידה וכן, לתפוס את הודעות השגיאה האלו 
// ולהעלים אותן לאחר זמן מסויים שהגדרנו ל4 שניות, כך שאם נלחץ על כפתור הלוגין פעם נוספת לא ייווצר מצב
// שנוצרות הודעות שגיאה אחת על גבי השנייה, אלא הודעת שגיאה אחת בלבד
function checkAgain(){
    let paragraph1 = document.getElementById('p1');
    let paragraph2 = document.getElementById('p2');
    if(paragraph1 != null || paragraph2 != null){
        if(paragraph1 != null){
            paragraph1.remove('id');
            console.log('The user name is not correct')
        }
        if(paragraph2 != null){
            paragraph2.remove('id');
            console.log('The password is not correct')
        }
    }
}

// הפונקציה הבאה משוייכת לכפתור
// show password / hide password
// אשר ייצרנו לצד האינפוט של הסיסמא, והוא משוייך לאינפוט עצמו כך שבכל לחיצה על הכפתור הזה, הוא משנה את הגדרת האינפוט
// מטקסט לסיסמא ולהיפך, ובהתאמה גם את התוכן שכתוב על הכפתור, וזאת על מנת שהשחקן יוכל להציג את הסיסמא במידה והוא מקבל 
// הרבה הודעות שגיאה על סיסמא לא נכונה ולראות איפה הבעיה מתקבלת
function showOrHidePassword(){
    let btn = document.getElementById('show-password-span');
    let inputBox2 = document.getElementById('password');
    if(btn.innerHTML == 'Show'){
        btn.innerHTML = 'Hide';
        inputBox2.setAttribute('type','text');
    }
    else if(btn.innerHTML == 'Hide'){
        btn.innerHTML = 'Show';
        inputBox2.setAttribute('type','password');
    }
}


// ----------------------------------------------------------------------------------------------------------------------------------------
// choose difficult lvl page
// ----------------------------------------------------------------------------------------------------------------------------------------


// הפונקציות הבאות משוייכות בהתאמה לכל כפתור בעמוד בחירת הקושי, כך שבעת לחיצה על הכפתור הרלוונטי
// יופעלו הפעולות הכתובות בפונקציה
// ותחל פריסת המשחק עצמו בהתאם לרמת קושי שמותאמת לכפתור שנלחץ על ידי השחקן
function btn1(){
    document.getElementById('difficult-lvl-page').style.display = 'none';
    document.getElementById('main-game-page').style.display = 'block';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('main-game').style.display = 'flex';
    document.getElementById('board').style.display = 'flex';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('finishBtn').style.display = 'inline-block';
    deployment(1)
}
function btn2(){
    document.getElementById('difficult-lvl-page').style.display = 'none';
    document.getElementById('main-game-page').style.display = 'block';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('main-game').style.display = 'flex';
    document.getElementById('board').style.display = 'flex';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('finishBtn').style.display = 'inline-block';
    deployment(2)
}
function btn3(){
    document.getElementById('difficult-lvl-page').style.display = 'none';
    document.getElementById('main-game-page').style.display = 'block';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('main-game').style.display = 'flex';
    document.getElementById('board').style.display = 'flex';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('finishBtn').style.display = 'inline-block';
    deployment(3)
}








// ----------------------------------------------------------------------------------------------------------------------------------------
// game page
// ----------------------------------------------------------------------------------------------------------------------------------------

// window.onload = function(){
    //     deployment();
// } // temporary // מיועד למחיקה בהמשך, התפקיד של זה הוא להעלות ישר רק את הסודוקו בלי עמוד ההתחברות, אבל מצריך לשים את עמוד
// ההתחברות בדיספליי נון וגם את עמוד בחירת הקושי





// הפונקציה הפורסת את המשחק, מקבלת רמת קושי מוגדרת מראש בעת לחיצה על כפתור בעמוד בחירת הקושי
// קיים בהמשך הקוד מאגר של כמה אובייקטים של מטריצות, אשר הראשון מהווה את מאגר הפתרונות, השני מהווה את מאגר המטריצות ברמת קושי 1
// השלישי את מאגר המטריצות ברמת קושי 2 וכן גם הרביעי את מאגר המטריצות ברמת קושי 3
// מטרת הפונקציה היא לגשת אל מאגר המטריצות הרלוונטי בהתאם לרמת הקושי שהיא קיבלה בלחיצה על הכפתור תחילה
// ולתפוס משם באופן רנדומלי את אחת המטריצות שקיימות במאגר, לאחר מכן, בלולאה שהגדרנו הפונקציה תפרוס את הדיבים 
// בהתאם למה שהגדרנו לה, הפונקציה תזהה לפי מיקומים היכן עליה לפרוס את הקווים השחורים שמסמנים את תאי המשחק,
// לאחר מכן היא תשבץ על כל דיב את התוכן שכתוב לה במטריצה שתפסה קודם לכן, כמובן בהתאם למיקום הרלוונטי המבוקש
// הפונקציה הזו גם תגדיר שאם דיב מסויים מכיל תוכן '.' היא תשנה אותו לדיב עם תוכן ריק, ותאפשר לנו בסוף הפריסה גם להפעיל תכונות בעת
// לחיצה על הדיב שניגע בהם בהמשך,
// בנוסף הפונקציה תפרוס גם את הכפתורים שנמצאים לצד המשחק עצמו, ותגדיר להם גם את האפשרות להפעיל תכונות בעת לחיצה שגם בהם ניגע בהמשך
// ברגע שסיימה הפונקציה את הפריסה של המספרים והתאים, הגדרנו משתנה זמני שאצלו שמרנו את המטריצה שתפסנו בכדי שנוכל בלחיצה על שחק שוב
// לפרוס את אותה המטריצה בדיוק

function deployment(difficulty){
    
    let random = Math.floor(Math.random()*6);
    solution = [...matrixSolved[random]];
    if(difficulty == 1){
        matrix = [...easyOptions[random]];
        console.log('difficult lvl is 1');
        console.log('the solution is:');
        console.log(solution)
    }
    if(difficulty == 2){
        matrix = [...middleOptions[random]];
        console.log('difficult lvl is 2');
        console.log('the solution is:');
        console.log(solution)
    }
    if(difficulty == 3){
        matrix = [...hardOptions[random]];
        console.log('difficult lvl is 3');
        console.log('the solution is: ');
        console.log(solution)
    }
    for(let i =0;i < 9;i++){
        for(let j = 0;j < 9;j++){
            tile = document.createElement('div');
            tile.id = i.toString() + '-' + j.toString();
            tile.classList.add('tile');
            document.getElementById('main-game').appendChild(tile)
            tile.innerHTML = matrix[i][j];
            if(i ==2 || i ==5){
                tile.classList.add('horizontal-line');
            }
            if((j ==2 || j ==5)){
                tile.classList.add('vertical-line');
            }
            if(tile.innerHTML != '.'){
                tile.style.background = 'lightgrey';
            }
            if(tile.innerHTML == '.'){
                tile.innerHTML = '';
                tile.style.cursor = 'pointer';
                tile.addEventListener('click', clickedEmptyTile);
            }
        }
    }
    for(let k=1;k<=9;k++){
        let numButtons = document.createElement('div');
        numButtons.id = k;
        numButtons.innerHTML = k;
        numButtons.addEventListener('click', clickedNumTile);
        numButtons.classList.add('numBtnsTile');
        document.getElementById('numBtns').appendChild(numButtons);
    }
    temp = matrix;
    return temp, matrix, solution;
}

// הפונקציה הבאה תופעל בעת לחיצה על אחד מתשעת הכפתורים הממוספרים לצד המשחק
// מטרת הפונקציה היא לשנות את תכונות הדיב עליו לחצנו, כך שבעת לחיצה על הדיב הצבע של הרקע שלו ישתנה
// ובעת לחיצה על דיב אחר לאחר מכן הצבע של הדיב הקודם יחזור למצבו הראשוני

function clickedNumTile(){
    if(numButton != null){
        numButton.classList.remove('tileSelected');
        let numButtonID = this.id;
        for(let i=0;i<matrix.length;i++){
            for(let j = 0;j<matrix[i].length;j++){
                let tile = document.getElementById(`${i}-${j}`)
                    if(tile.innerHTML != numButtonID){
                        tile.style.color = 'black'
                    }
                    if(matrix[i][j] == '.'){
                        tile.style.color = 'black'
                    }
                }
            }
        }
    numButton = this;
    numButton.classList.add('tileSelected');
    let numButtonID = this.id;
    for(let i=0;i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++){
            let tile = document.getElementById(`${i}-${j}`)
            if(matrix[i][j] == numButtonID){
                tile.style.color = 'red'
            }
            if(temp[i][j] =='.' && tile.innerHTML == numButtonID){
                tile.style.color = 'blue'
            }
        }
    }
    return numButtonID
}


// הפונקציה הבאה מופעלת בעת לחיצה על אחד מהדיבים הריקים במשחק עצמו, מטרתה היא לתפוס את הדיב עליו לחצנו
// ולהזין לתוכו את התוכן שנמצא באחד מתשעת הכפתורים שלצד המשחק, כלומר, ברגע שלחצנו על כפתור כלשהו בצד, הצבע שלו השתנה, וכעת 
// התוכן שלו כביכול נשמר לנו בצד, כך שברגע שאנחנו לוחצים על דיב ריק במשחק עצמו התוכן של הכפתור מוכנס אל תוך הדיב הריק
// כמו כן הגדרנו בפונקציה הזו שאם הדיב הריק כעת כבר אינו ריק אלא מכיל את התוכן של הכפתור, ונלחץ עליו שוב עם אותו
// התוכן של אותו כפתור, הפעולה הזו תמחק את התוכן של הדיב, כך שבמידה והשחקן בטעות בחר דיב לא נכון והזין בו מספר שגוי
// וברצונו למחוק אותו בכדי שלא יבלבל אותו במהלך המשחק, הפעולה הזו של לחיצה נוספת על הדיב פשוט תמחק את התוכן ותחזירו להיות דיב ריק

function clickedEmptyTile(){
    tile = this;
    if(numButton == null || tile.innerHTML == numButton.innerHTML){
        tile.innerHTML = ''
    }
    else{
        tile.innerHTML = numButton.innerHTML;
        tile.style.color = 'blue';
    }
}



// הפונקציה הזו מקושרת לכפתור שחק שוב, מטרתה היא לעבור בשנית על כל הדיבים של המשחק שפרסנו
// ולהזין שוב מחדש את התוכן מהמטריצה הזמנית ששמרנו בצד עם משתנה העזר
// temp
// כך שבעצם בעת לחיצה על הכפתור שחק שוב - היא מוחקת את כל השינויים שנוצרו על ידי השחקן ומחזירה הכל להתחלה בכדי לפתוח את
// אותו המשחק בדיוק פשוט מההתחלה
// כמו כן הגדרנו בפונקציה הזו שגם הכפתורים בצד עם המספרים, הצבע של הרקע שלהם יתאפס ושהתוכן שלהם לא יהיה עדיין שמור
// כלומר בשורה התחתונה - לשחק את אותו המשחק בדיוק פשוט מההתחלה

function playAgain(){
    for(let i =0;i<9;i++){
        for(let j =0;j<9;j++){
            tile = document.getElementById(`${i}-${j}`)
            if(temp[i][j] == '.'){
                temp[i][j] =''
            }
            if(temp[i][j] != '.'){
                tile.style.color = 'black'
            }
            tile.innerHTML = temp[i][j]
        }
    }
    if(numButton != null){
        numButton.classList.remove('tileSelected');
        numButton = null;
    }
}


// פונקציה זו משוייכת לכפתור הפיניש, בשלב הראשון היא בודקת כל תא במטריצת המשחק
// במידה והתא אינו ריבוע ריק אלא מספר, הפונקציה תכניס אותה למטריצה זמנית באמצעות פוש
// במידה והתא הוא אכן ריבוע ריק אשר מוזן בו מספר, הפונקציה תכניס את המספר המוזן בריבוע לאותה מטריצה זמנית על ידי פוש
// כך שבסופו של דבר תיווצר מטריצה זמנית חדשה אשר מכילה את כל תבנית המשחק כולל מה שהוזן על ידי השחקן
// לאחר מכן כל תא במטריצת הפיתרון ייבדק אל מול התא התואם לו במטריצת המשחק הזמנית ובמידה והערכים יהיו תואמים  אז נגדיל את ה
// cnt
// כל פעם באחד, לאחר מכאן בסוף הלולאה נבדוק האם ה
// cnt = 81    /    cnt < 81
// במידה וקטן מ81 הפונקציה תציג הודעה מותאמת למשתמש שהוא נכשל ושיינסה שוב
// במידה וכן שווה ל 81 הפונקציה תציג הודעה מותאמת שהמשתמש הצליח, ולאחר מכן ירוצו שתי לולאות שמטרתן כביכול למחוק את הדיבים
// ששוייכו למשחק עצמו ולכפתורים שבצד ימין של המשחק, על מנת שפונקציית
// deployment
// לא תפרוס פעמיים על אותו דיב ראשי ותידחס מתחת לדיבים שהיו כבר קיימים קודם לכן,
// בסופו של דבר אחרי ששתי הלולאות יסיימו את מחיקת הדיבים נגדיר שהעמוד יתחלף באותו הרגע בחזרה לעמוד בחירת רמת קושי
// כמובן באותה נשימה נאפס את הפרמטרים של הספירה ואת המטריצה הזמנית כדי שבהרצה חוזרת של הפונקציה הזו הם יהיו ריקים

function finish(){
    let cnt = 0;
    for(let i = 0;i<temp.length;i++){
        for(let j =0;j<temp[i].length;j++){
            if(temp[i][j] != '.'){
                tempCheckMatrix[i].push(temp[i][j]);
            }
            if(temp[i][j] == '.'){
                let tempTile = document.getElementById(`${i}-${j}`);
                tempCheckMatrix[i].push(tempTile.innerHTML);
            }
            if(solution[i][j] == tempCheckMatrix[i][j]){
                cnt++;
            }
        }
    }
    if(cnt == 81){
        alert (`Congrats ${username}, You won! :)`);
        for(let i = 0;i<9;i++){
            for(let j = 0;j<9;j++){
                tile = document.getElementById(`${i}-${j}`);
                document.getElementById('main-game').removeChild(tile);
            }
        }
        for(let k=1;k<=9;k++){
            numButton = document.getElementById(`${k}`);
            document.getElementById('numBtns').removeChild(numButton);
        }
        document.getElementById('difficult-lvl-page').style.display = 'flex';
        document.getElementById('main-game-page').style.display = 'none';
        document.getElementById('header2').style.display = 'none';
        document.getElementById('main-game').style.display = 'none';
        document.getElementById('board').style.display = 'none';
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('finishBtn').style.display = 'none';
    }
    if(cnt < 81){
        alert ('Oops.. You failed! Please try again!');
    }
    cnt = 0;
    tempCheckMatrix = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
}





// ----------------------------------------------------------------------------------------------------------------------------------------
// The whole matrix data
// ----------------------------------------------------------------------------------------------------------------------------------------


// -----> כאן נמצא כל המאגר של המטריצות אשר שמורות בזיכרון של הקוד, מהן הוא ייקח את הפתרונות ואת הפריסות ההתחלתיות, וביניהן הוא ישווה

const matrixSolved = [
    mat1 = [
        ['4','1','7','3','6','9','8','2','5'],
        ['6','3','2','1','5','8','9','4','7'],
        ['9','5','8','7','2','4','3','1','6'],
        ['8','2','5','4','3','7','1','6','9'],
        ['7','9','1','5','8','6','4','3','2'],
        ['3','4','6','9','1','2','7','5','8'],
        ['2','8','9','6','4','3','5','7','1'],
        ['5','7','3','2','9','1','6','8','4'],
        ['1','6','4','8','7','5','2','9','3']
    ],
    mat2 = [
        ['5','2','7','3','1','6','4','8','9'],
        ['8','9','6','5','4','2','7','3','1'],
        ['3','1','4','9','8','7','5','6','2'],
        ['1','7','2','4','5','3','8','9','6'],
        ['6','8','9','2','7','1','3','5','4'],
        ['4','5','3','6','9','8','2','1','7'],
        ['9','4','1','8','2','5','6','7','3'],
        ['7','6','5','1','3','4','9','2','8'],
        ['2','3','8','7','6','9','1','4','5']
    ],
    mat3 = [
        ['6','1','7','4','5','9','8','2','3'],
        ['2','4','8','7','3','6','9','1','5'],
        ['5','3','9','1','2','8','4','6','7'],
        ['9','8','2','5','6','4','3','7','1'],
        ['3','7','4','2','9','1','5','8','6'],
        ['1','5','6','8','7','3','2','9','4'],
        ['8','2','3','6','4','7','1','5','9'],
        ['7','9','1','3','8','5','6','4','2'],
        ['4','6','5','9','1','2','7','3','8']
    ],
    mat4 = [
        ['4','8','7','3','1','2','6','9','5'],
        ['5','9','3','6','8','4','2','7','1'],
        ['1','2','6','5','9','7','3','8','4'],
        ['7','3','5','8','4','9','1','6','2'],
        ['9','1','4','2','6','5','8','3','7'],
        ['2','6','8','7','3','1','5','4','9'],
        ['8','5','1','4','7','6','9','2','3'],
        ['3','7','9','1','2','8','4','5','6'],
        ['6','4','2','9','5','3','7','1','8']
    ],
    mat5 = [
        ['9','6','2','3','1','4','8','5','7'],
        ['1','3','4','5','8','7','2','6','9'],
        ['5','7','8','2','9','6','4','1','3'],
        ['8','4','7','9','6','2','5','3','1'],
        ['6','5','1','8','7','3','9','4','2'],
        ['3','2','9','1','4','5','7','8','6'],
        ['2','8','5','6','3','9','1','7','4'],
        ['7','9','3','4','5','1','6','2','8'],
        ['4','1','6','7','2','8','3','9','5']
    ],
    mat6 = [
        ['4','1','6','8','3','7','5','2','9'],
        ['9','8','2','4','6','5','3','7','1'],
        ['7','3','5','1','2','9','4','6','8'],
        ['5','7','1','2','9','8','6','4','3'],
        ['2','9','3','7','4','6','1','8','5'],
        ['8','6','4','3','5','1','2','9','7'],
        ['6','4','7','9','1','3','8','5','2'],
        ['3','5','9','6','8','2','7','1','4'],
        ['1','2','8','5','7','4','9','3','6']
    ]
]

// ---------------------------------------------------------easy lvl----------------------------------------------------------------
const easyOptions = [// בערך 20 בלוקים חסרים
    mat1 = [
        ['4','1','.','.','6','9','8','.','5'],
        ['6','3','2','.','5','.','9','4','7'],
        ['9','.','8','7','.','4','3','1','6'],
        ['8','2','5','4','.','7','1','.','9'],
        ['7','9','1','.','8','6','4','3','2'],
        ['3','.','6','9','1','.','7','5','8'],
        ['.','8','9','6','4','.','5','.','1'],
        ['5','.','.','2','9','1','6','8','4'],
        ["1",'.','4','8','7','.','2','9','3']
    ],
    mat2 = [
        ['.','.','7','3','1','6','4','8','9'],
        ['8','9','.','5','4','2','7','.','1'],
        ['3','1','4','9','8','.','5','6','.'],
        ['.','7','.','4','5','3','8','9','6'],
        ['6','8','9','2','7','1','3','.','4'],
        ['4','5','3','.','.','8','2','1','7'],
        ['9','4','1','8','2','5','.','.','3'],
        ['7','.','5','.','3','4','9','.','.'],
        ['2','3','8','7','6','9','1','.','.']
    ],
    mat3 = [
        ['6','.','7','4','5','9','8','2','3'],
        ['2','4','8','7','3','6','.','1','5'],
        ['5','3','9','.','.','.','4','6','7'],
        ['9','8','.','5','6','.','.','7','1'],
        ['.','.','.','2','9','1','.','8','6'],
        ['1','5','6','8','7','3','2','9','4'],
        ['8','.','3','6','4','7','1','5','9'],
        ['7','.','.','3','.','5','6','4','2'],
        ['4','.','.','9','.','.','.','.','8']
    ],
    mat4 = [
        ['4','.','7','3','1','2','6','9','5'],
        ['5','9','3','6','.','4','2','7','1'],
        ['1','2','.','5','9','7','.','8','4'],
        ['7','3','.','.','4','9','.','.','2'],
        ['9','1','.','2','6','5','8','3','7'],
        ['2','6','8','7','.','1','5','.','9'],
        ['8','.','.','4','7','6','9','.','3'],
        ['3','.','9','.','.','.','4','5','6'],
        ['6','4','2','.','5','3','7','1','.']
    ],
    mat5 = [
        ['9','.','2','3','1','4','8','5','7'],
        ['.','3','4','5','8','7','2','6','9'],
        ['.','7','.','2','.','6','4','.','3'],
        ['.','.','7','9','6','2','.','3','1'],
        ['6','5','1','8','7','3','.','4','2'],
        ['3','2','.','1','4','.','7','.','6'],
        ['2','8','.','6','3','9','1','7','.'],
        ['7','.','3','.','.','1','6','2','8'],
        ['4','1','6','.','2','8','3','9','5']
    ],
    mat6 = [
        ['4','.','6','8','3','7','5','2','9'],
        ['9','8','2','4','6','5','.','.','1'],
        ['7','3','.','1','2','9','4','.','8'],
        ['.','7','.','2','9','8','6','4','3'],
        ['2','9','3','7','.','6','1','8','5'],
        ['8','6','4','3','5','1','2','9','.'],
        ['6','.','7','9','1','3','8','.','.'],
        ['3','.','9','6','.','2','.','1','4'],
        ['.','2','8','.','.','.','9','.','6']
    ]
]

// ---------------------------------------------------------middle lvl----------------------------------------------------------------

const middleOptions = [// בערך 30 בלוקים חסרים
    mat1 = [
        ['.','1','7','.','6','9','8','2','.'],
        ['6','3','2','1','5','.','9','.','7'],
        ['9','5','8','.','.','4','3','.','6'],
        ['8','.','5','.','.','7','.','6','.'],
        ['.','9','.','5','.','.','4','3','2'],
        ['3','.','.','9','1','2','7','5','.'],
        ['2','.','9','6','4','.','5','.','1'],
        ['5','7','3','.','9','.','.','8','4'],
        ['1','.','.','8','.','.','2','9','3']
    ],
    mat2 = [
        ['5','.','7','.','1','.','.','8','9'],
        ['8','.','.','.','4','.','.','.','.'],
        ['3','.','.','9','8','.','5','.','2'],
        ['1','7','2','.','5','3','.','9','6'],
        ['6','.','.','2','.','.','3','.','.'],
        ['4','5','3','6','.','8','2','.','.'],
        ['9','4','.','8','2','5','6','7','3'],
        ['7','6','.','.','3','4','9','2','8'],
        ['2','3','.','7','6','9','1','4','5']
    ],
    mat3 = [
        ['6','1','7','.','.','9','8','2','3'],
        ['2','4','8','.','.','.','9','1','5'],
        ['5','3','9','1','2','8','.','6','7'],
        ['.','.','2','5','.','.','3','.','1'],
        ['.','.','.','2','9','1','.','.','6'],
        ['.','.','6','8','7','3','2','9','4'],
        ['8','.','.','6','4','7','.','.','9'],
        ['7','.','1','.','8','.','.','4','2'],
        ['4','6','5','.','1','.','.','.','8']
    ],
    mat4 = [
        ['4','8','7','.','.','.','6','9','5'],
        ['.','.','3','6','8','.','.','7','1'],
        ['1','2','.','5','.','7','3','8','4'],
        ['.','.','5','.','4','9','1','.','2'],
        ['9','.','4','2','.','5','8','3','7'],
        ['2','.','8','.','.','.','5','4','9'],
        ['.','.','1','.','.','6','9','2','3'],
        ['.','.','.','1','2','8','4','.','6'],
        ['.','.','.','9','5','3','7','1','8']
    ],
    mat5 = [
        ['9','.','2','3','1','.','.','5','7'],
        ['1','.','4','5','.','.','2','6','9'],
        ['.','7','8','2','9','6','4','.','3'],
        ['8','.','.','9','.','.','5','.','1'],
        ['.','5','.','8','.','.','9','4','.'],
        ['3','.','.','.','4','5','.','8','6'],
        ['.','.','5','6','3','9','1','.','4'],
        ['7','.','3','4','5','.','.','2','8'],
        ['4','1','6','.','.','.','3','9','5']
    ],
    mat6 = [
        ['4','1','6','8','3','.','5','2','9'],
        ['.','.','2','4','6','.','.','7','1'],
        ['7','3','5','1','2','.','.','6','.'],
        ['5','7','1','.','.','.','6','4','.'],
        ['.','.','3','7','4','6','1','8','.'],
        ['8','.','4','3','5','1','2','.','7'],
        ['6','4','.','9','1','.','.','.','2'],
        ['3','5','.','6','8','.','.','.','4'],
        ['1','.','.','.','.','4','9','.','6']
    ]
]


// ---------------------------------------------------------hard lvl----------------------------------------------------------------


const hardOptions = [// בערך 45 בלוקים חסרים
    mat1 = [
        ['.','.','7','.','6','.','8','2','.'],
        ['.','.','.','1','5','.','.','.','7'],
        ['9','.','8','.','.','.','.','.','6'],
        ['8','.','5','.','.','.','.','6','.'],
        ['.','9','.','.','.','.','4','.','2'],
        ['3','.','.','9','1','.','7','5','.'],
        ['2','.','9','6','4','.','5','.','1'],
        ['.','7','3','.','.','.','.','8','4'],
        ['1','.','.','8','.','.','2','.','3']
    ],
    mat2 = [
        ['5','2','7','.','1','.','4','.','9'],
        ['8','.','6','.','.','.','.','3','.'],
        ['.','.','.','9','.','7','5','.','2'],
        ['.','.','.','4','.','3','.','.','.'],
        ['.','.','.','.','.','1','3','.','.'],
        ['4','5','.','6','.','8','2','.','7'],
        ['.','4','1','.','.','.','.','7','.'],
        ['7','.','.','1','3','4','.','.','8'],
        ['2','.','.','7','.','9','.','.','5']
    ],
    mat3 = [
        ['6','.','.','.','.','9','.','.','3'],
        ['2','4','.','.','.','6','.','.','5'],
        ['.','3','.','1','2','.','.','6','7'],
        ['9','.','.','5','.','4','3','.','1'],
        ['.','.','.','2','.','1','.','.','6'],
        ['.','5','6','8','.','.','2','.','4'],
        ['.','.','.','6','.','.','1','5','.'],
        ['.','.','.','.','.','5','.','4','2'],
        ['.','.','5','.','1','.','7','.','8']
    ],
    mat4 = [
        ['.','.','.','3','1','.','.','.','5'],
        ['5','.','.','6','.','.','.','7','1'],
        ['1','.','6','.','9','7','.','.','4'],
        ['.','.','.','8','4','.','1','.','.'],
        ['.','1','4','.','6','.','.','3','7'],
        ['2','.','.','7','3','.','5','.','.'],
        ['8','.','.','4','7','.','9','.','3'],
        ['.','.','.','1','2','.','.','5','.'],
        ['6','4','.','9','.','.','7','.','8']
    ],
    mat5 = [
        ['.','.','.','.','1','4','8','.','.'],
        ['.','.','4','5','.','.','2','.','9'],
        ['5','7','8','.','.','6','.','1','3'],
        ['8','.','7','.','.','.','5','3','.'],
        ['.','5','1','8','.','3','9','.','.'],
        ['.','.','.','1','4','.','.','.','.'],
        ['2','.','.','.','3','9','1','.','4'],
        ['7','9','.','4','.','.','6','.','8'],
        ['4','1','.','.','.','.','3','9','.']
    ],
    mat6 = [
        ['4','1','.','.','.','.','.','.','9'],
        ['9','.','.','4','.','.','.','.','.'],
        ['.','3','5','1','2','9','.','.','8'],
        ['5','7','.','2','9','.','.','4','3'],
        ['2','9','.','.','.','.','1','8','.'],
        ['8','.','4','.','5','.','2','.','7'],
        ['.','.','.','9','.','3','8','.','2'],
        ['.','.','9','.','.','.','.','.','4'],
        ['.','2','8','.','.','.','9','3','.']
    ]
]