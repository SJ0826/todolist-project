[![.github/workflows/CICD.yml](https://github.com/SJ0826/todolist-project/actions/workflows/CICD.yml/badge.svg)](https://github.com/SJ0826/todolist-project/actions/workflows/CICD.yml)
# TodoList Project
원티드에서 진행한 TodoList과제에 고민하던 부분을 적용하고 참가했던 모든 팀의 Best Practice를 정리해 흡수하기 위해 만들어진 투두리스트 프로젝트 입니다.

## 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
</div>

## 프로젝트 확인하기

AWSS3 + githubActions를 통해 CD라인을 구축했습니다.

[배포링크](http://todolist-sj0826.s3-website.ap-northeast-2.amazonaws.com)

## 프로젝트 살펴보기

📖 [위키](https://github.com/SJ0826/todolist-project/wiki)에서 기능 구현에 대한 상세 설명을 확인할 수 있습니다.

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
- [x] 투두리스트 페이지에 투두리스트의 내용과 완료 여부 표시

### 투두리스트 추가/수정/삭제

- [x] 투두리스트 페이지에 입력창과 추가버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 투두리스트에 추가
- [x] 투두아이템 우측에 수정버튼을 추가하고 클릭시 수정모드 활성화
- [x] 수정모드에서 투두아이템 우측에 제출버튼과 취소버튼 추가하고 클릭시 수정 내용 제출 및 수정모드 취소
- [x] 투두아이템 우측에 삭제버튼 추가하고 버튼 클릭시 해당 투두 아이템 삭제

### 리덕스 적용해보기
* [x] get은 store에서 호출해서 초기값으로 설정해보자
* [x] create, update, delete는 store또는 컴포넌트에서 불러서 인자로 값을 넘겨줘보자
