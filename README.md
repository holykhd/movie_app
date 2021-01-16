# 깃허브에 프로젝트 연동하기
## 1. git 리파지토리 생성하기
 - 생성 : https://github.com/new
 - 만들기 : create Repository
 - 만든 주소 복사 : copy repository https://github.com/(GitHub ID)/(Repository name)

## 2. 작업중인 프로젝트와 연결하기  
 - local에서 git과 연동하기 : git remote add origin https://github.com/(GitHub ID)/(Repository name)
 
## 3. 연동이 잘 됐는지 확인
 - 깃에 파일 추가하기 : git add .
 - 코멘트 작성 : git comment -m "comment~~"
 - 올려진 파일들 확인하기 : git status
 - 깃에 올리기 : git push origin master

## 4. 확인하기
 - github 사이트에서 확인하기


# GitHub Pages로 무료 호스팅 사용해서 홈페이지 띄우
## 1. 패키지 설치하기
 - npm i gh-pages

## 2. package.json 파일 수정하기
 - 제일 아래에 github 주소 추가 : {"homepage": "https://(GitHub ID).github.io/(Repository name)/"}
 - 실행 스크립트 추가
   {
    "script": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
   }
- add script : "deploy": "gh-pages -d build",
- add script : "predeploy": "npm run build"

## 3. 프로젝트 빌드하기 
 - npm run build 
 
## 4. 빌드 결과물 배포하기 
 - npm run deploy

## 5. 사이트에서 확인하기
 - https://(GitHub ID).github.io/(Repository name)