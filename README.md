[![.github/workflows/CICD.yml](https://github.com/SJ0826/todolist-project/actions/workflows/CICD.yml/badge.svg)](https://github.com/SJ0826/todolist-project/actions/workflows/CICD.yml)

## 사용 라이브러리 및 툴

- yarn
- CRA
- typescript
- Styled Components
- 리덕스

## 배포링크

AWSS3 + githubActions

[배포링크](http://todolist-sj0826.s3-website.ap-northeast-2.amazonaws.com)

## 기본 세팅

- [x] CI/CD 파이프라인 구축하기
- [x] eslint, pritter, husky 적용하기

## 회원가입/로그인 페이지

### 이메일/비밀번호 유효성 검사

- [x] 이메일 조건: '@`포함, 비밀번호 조건: 8자 이상
- [x] 이메일과 비밀번호의 조건이 만족할 때만 버튼 활성화

### 로그인/회원가입 API

- [x] 로그인/회원가입 API를 호출해서 올바른 응답시 /todo경로로 이동
- [x] 로그인/회원가입 성공시 응답받은 JWT를 로컬 스토리지에 저장

### 로그인 여부에 따른 리다이렉트 처리

- [x] 로컬 스토리지에 토큰 있는 상태로 / 페이지에 접속시, /todo경로로 이동
- [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속시, /경로로 이동

## 투두리스트 페이지

- [x] /todo경로에 접속하면 투두리스트로 이동
- [] 투두리스트 페이지에 투두리스트의 내용과 완료 여부 표시

### 투두리스트 추가/수정/삭제

- [] 투두리스트 페이지에 입력창과 추가버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 투두리스트에 추가
- [] 투두아이템 우측에 수정버튼을 추가하고 클릭시 수정모드 활성화
- [] 수정모드에서 투두아이템 우측에 제출버튼과 취소버튼 추가하고 클릭시 수정 내용 제출 및 수정모드 취소
- [] 투두아이템 우측에 삭제버튼 추가하고 버튼 클릭시 해당 투두 아이템 삭제
