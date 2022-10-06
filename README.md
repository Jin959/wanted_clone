# wanted_clone

workspace for cloning [wanted](https://www.wanted.co.kr/) website, [recruite page](https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=-1&locations=all)

## Result
 - [main page](https://jin959.github.io/wanted_clone/)
    * [html src](https://github.com/Jin959/wanted_clone/blob/master/index.html)
    * [css src](https://github.com/Jin959/wanted_clone/blob/master/css/style.css)  
      
  
 - recruite page : 아직이요  
   
----------------------------  
  
## Layout

 - ![레이아웃 설계 이미지 불러오](https://github.com/Jin959/wanted_clone/blob/master/img/layout.bmp)   
  
 - section1에서 안팍으로 움직이는 div가 하나 있는데 추후에 생각하기로 했다.

 - [에릭 마이어의 CSS Reset](https://meyerweb.com/eric/tools/css/reset/)을 사용하여 초기화 한다.  

 - 다음과 같이 일단 구획을 나누었다. 이후 세부 구획으로 다시 나눈다.  
   
    ```HTML
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>원티드 - 나다운 클론의 시작</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="nav_container">
            <nav>navigation bar</nav>
        </div>
        <main>
            <section id="top_banner">top_banner</section>
            <!--<div></div>-->
            <section id="section1">1</section>
            <section id="section2">2</section>
            <section id="section3">3</section>
            <section id="section4">4</section>
            <section id="section5">5</section>
            <section id="section6">6</section>
            <section id="section7">7</section>
        </main>
        <div class="footer_container">
            <footer>footer</footer>
        </div>
    </body>
    </html>
    ```  
      
    ```CSS
    /* begin */
    body
    {
        display: flex;
        flex-direction: column;
    }

    .nav_container
    {
        border: 1px solid black;
        height: 50px;
    }

    main section
    {
        border: 1px solid black;
        height : 100px;
    }


    .footer_container
    {
        border: 1px solid black;
        height: 265px;
    }
    ```
    ![레이아웃 설계 이미지 불러오](https://github.com/Jin959/wanted_clone/blob/master/img/layout2.png) 

-------------------------------
## HTML

- ```<svg>```를 사용해 보았는데 원티드 홈페이지에는 일단 필요없는 태그나 CSS property들이 많이 들어있어 다른 사이트의 svg를 참고하여 구현했다.
    * ```HTML
        <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18">
            <path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z">
            </path>
        </svg>
        ```

-------------------------------  
  
## CSS

 - ```<div>```와 같은 블록요소는 ```{marine: 0px auto}```를 사용하면 가로정렬을 손쉽게 할 수 있다.
    * 세로 정렬은 flex를 이용한다.  

 - navigation bar의 wanted 글자 로고인 home 버튼 이미지 링크가 개발자 도구에 없어서 다음과 같이 ```position``` property를 사용하여 유사 로고를 잘라서 사용했다.
    * ```CSS
        #home
        {
            position: relative;
            overflow: hidden;
            width: 74.38px;
        }

        #home img
        {
            position: absolute;
            top: -50%;
            left: -55%;

            height: 200%;
            width: 150%;
        }
        ```
  
 - navigation bar가 따라다니는 것을 볼 수 있는데 아직 안해봤다. 모르겠다.

 - 마우스가 navigation bar 메뉴에 hover 될때 밑 줄 표시

----------------------------------  
  
## JS

 