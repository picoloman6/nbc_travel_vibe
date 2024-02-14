# Travel Vibe 🏖️
React를 이용한 여행 컨셉의 블로그 플랫폼 만들기

<br>


### 🔽 **프로젝트 소개**

**프로젝트명** : Travel Vibe

**개발 기간** : 2024.02.07 ~ 2024.02.14

**프로젝트 소개** : 여행 컨셉의 블로그 플랫폼으로 각 카테고리에 따라 여행에 관련된 글을 쓰고, 공유할 수 있는 블로그 플랫폼 입니다.

<br>

### 🔽 **팀원 소개**


|                            신서연                           |                            유한빈                            |                            김승희                            |                            곽인해                            |                            서지원                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <p align="center"><img src="https://avatars.githubusercontent.com/u/128902050?v=4" style="width:87%; border-radius: 40px"/></p> | <p align="center"><img src="https://avatars.githubusercontent.com/u/85938399?v=4)" style="width:95%; border-radius: 40px" /></p> | <p align="center"><img src="https://avatars.githubusercontent.com/u/154486286?v=4" style="width:230px; border-radius: 40px" /></p> | <p align="center"><img src="https://avatars.githubusercontent.com/u/148458439?v=4" style="width:80%; border-radius: 40px" /></p> | <p align="center"><img src="https://avatars.githubusercontent.com/u/103973797?v=4" style="width:90%; border-radius: 40px" /></p> |
|            [@seoyeon-1206](https://github.com/seoyeon-1206)           |         [@picoloman6](https://github.com/picoloman6)         |       [@HuaHuaChiChi](https://github.com/HuaHuaChiChi)       |       [@innes-k](https://github.com/innes-k)        |           [@seopport](https://github.com/seopport)           |
|                             리더                             |                             팀원                             |                             팀원                             |                             팀원                             |                             팀원                             |
|                        마이페이지                           |                                            |                          |                           |      메인페이지, 게시물 관리 페이지  |
 



<br>

### 🔽  **개발 환경**

- **Environment :** vscode, github
- **Development :** React, Javascript, HTML, CSS
- **Database :** Firebase, Firestore
- **Library :** redux, router, styled-components, react-icons
- **Design :** Figma
- **Deployment:** 



<br>


### **🔽 시작 가이드**

**1. git clone**

```bash
$ git clone https://github.com/picoloman6/nbc_travel_vibe.git
$ cd nbc_travel_vibe
```

**2. yarn start**

```bash
npm i
yarn start
```



<br>

### **🔽 와이어프레임**

| 메인 페이지 - 로그아웃시 |    메인 페이지 - 로그인시    |
| :----------------------: | :--------------------------: |
|  ![메인  페이지 - 로그인 안했을 때](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/c51f0dcb-696b-42e7-92fd-820f896b424a)   |       ![메인  페이지 - 로그인 했을 때](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/d2c769dd-6f4d-4cf0-8ae3-a56149cafe65)   |
|     **로그인 모달**      |      **회원가입 모달**       |
|              ![로그인 모달](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/7e36db18-a337-4157-a99c-e4cc34d9ad5a)      |        ![회원가입 모달](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/b97b028f-9b34-4ff9-a5a3-b0abff225e82)      |
|    **글 작성 페이지**    |        **마이페이지**        |
|  ![글 작성 페이지](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/bde07122-a65c-40b7-a486-e56135315f7a)       |      ![마이페이지](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/d0c5d902-45a8-49dc-8176-7eabb5d42951)   |
|    **게시물 페이지**     | **게시글 관리 페이지** |
|   ![게시물 페이지](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/63d613eb-86af-4364-be1c-36d99389b9a7)  | ![게시글 관리 페이지 - My Blog 메인페이지](https://github.com/picoloman6/nbc_travel_vibe/assets/103973797/52833f6f-fecd-4757-9e8b-8c9fb8337c08)  |


<br>

### 🔽 화면 구성 및 기능

#### 1. 메인 페이지

| 로그인하는 사진 |
| --------------- |

|      |
| :--: |

#### 1.1. 로그인 및 회원가입

+ 헤더의 로그인을 눌러 로그인을 할 수 있습니다.
  + 로그인을 누르면 모달창이 뜨고, 이메일과 비밀번호를 입력하고 로그인합니다.
  + 각 입력란에 대한 유효성 검사로 조건에 부합하는 값을 입력해야 합니다.
+ 로그인 정보가 없을 시 회원 가입을 눌러 회원을 등록할 수 있습니다.
  + 이메일과 닉네임, 비밀번호를 입력하고 회원가입합니다.
  + 각 입력란에 대한 유효성 검사로 조건에 부합하는 값을 입력해야 합니다.

+ 로그인이 되지 않았을 때는 Post와 My Blog 기능을 사용할 수 없습니다.
+ 로그인 했을 시에는 로그아웃 버튼을 눌러 로그아웃할 수 있습니다.



**1.2. 카테고리 탭**

+ 각 카테고리에 올라온 글을 카테고리 탭에서 선별하여 조회할 수 있습니다.
+ All을 누르면 모든 카테고리의 글을 조회합니다.



**1.3. 게시글 프리뷰** 

+ 게시글 내용 일부를 프리뷰를 통해 확인할 수 있습니다.
+ 하단의 조회수와 댓글수, 좋아요수를 통해 게시글의 통계를 확인할 수 있습니다.
+ 게시글을 누르면 게시물 상세 페이지로 이동합니다.



<br>

#### 2. 게시물 페이지

+ 게시물의 상세 내용을 조회할 수 있습니다.
+ 게시물을 수정, 삭제할 수 있습니다.
+ 하트 버튼을 눌러 게시글에 좋아요를 표시할 수 있습니다.
+ 댓글을 작성하고 등록을 눌러 댓글을 추가할 수 있습니다.
+ 등록 한 댓글은 삭제 버튼을 눌러 삭제할 수 있습니다.



#### 3. 글 작성하기

|      |
| ---- |

+ 헤더의 Post 버튼을 눌러 글을 작성할 수 있습니다.
+ 지정할 카테고리를 선택합니다.
+ 사진 등록하기를 눌러 사진을 등록할 수 있습니다.
  + 사진을 등록하면 회색 칸에 보여지게 되고, 사진을 클릭하면 확대하여 볼 수 있습니다.
+ 제목과 내용을 입력하고 등록 버튼을 눌러 게시글을 등록할 수 있습니다.
+ 수정하기를 눌러 ***[추가 필요]***

<br>



#### 4. 마이페이지

+ 헤더의 프로필 이미지를 눌러 마이페이지로 이동할 수 있습니다.
+ 마이페이지에서는 닉네임과 프로필 사진을 수정할 수 있습니다.
  + 수정할 닉네임을 입력하고 수정할 사진을 첨부한 뒤 완료를 눌러 수정을 완료합니다.
  + 취소 버튼을 누르면 이전 페이지로 돌아갑니다.


<br>

#### 5. 게시글 관리 페이지

+ 헤더의 My Blog를 눌러 자신이 쓴 게시글들을 확인할 수 있습니다.
+ 게시글을 누르면 해당 게시글 페이지로 이동합니다.

<br>

### 🚦트러블 슈팅
