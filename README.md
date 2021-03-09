# Web_Vue-2-

### Vue CLI
- vue-cli global 설치 : npm i -g @vue/cli
  - @vue가 version 2
- 프로젝트 생성 : vue create (프로젝트 이름)
- 구성
  - assets : 이미지 파일, 음악 파일 등 각종 작업물들을 저장해두는 곳
  - **components** : module과 비슷한 역할을 하는(**재사용**을 하기위한) component들을 만드는 곳
  - **router** : **routing 설정**을 해주는 곳
  - **store** : Vue.js의 상태 관리(getter, setter 및 state 등 선언)
  - **views** : router를 통해 보여주는 페이지 생성
  - **App.vue** : **Vue의 최상위 컴포넌트**
  - **main.js** : **가장 먼저 실행**되는 javaScript 파일, **Vue 인스턴스를 생성**

### Vue Router
- 기능
  - Node.js express의 routing 기능과 유사
  - URL이 들어오면, 그에 맞는 데이터를 뿌려줌
  - URL과 소스코드를 매칭시켜주는 작업을 매핑이라고 함
  
  | express | Vue Router |
  | --- | --- |
  | RestAPI 제작 시 | URL마다 다른 Content를 보여주고 싶을 때 |
  | ejs 사용 시 |
  
- 필요성
  - Vue.js는 SPA(Single Page Application)
  - Vue.js는 한 페이지에서, 내용만 바꾸면서 보여주는 방식
  - Vue Router가 안에 있는 내용을 바꾸어 보여주는 원리로 구현
  
### props와 emit
- props : 부모에서 자식에 데이터를 내려줄 때 사용
  - 상위 컴포넌트에서 하위 컴포넌트에 데이터 전달
  
  >> [props를 활용한 프로젝트 실습](https://github.com/KimUJin3359/Web_Vue-2-/tree/master/project002/src)
  
  - App.vue -> FriedChicken(Component) -> Fry(Component) -> Chicken(Component)
  
- emit : 자식에서 부모로 데이터 및 이벤트를 전달할 때 사용
  - 하위 컴포넌트 -> 상위 컴포넌트 데이터 전달
  
  >> [emit을 활용한 프로젝트 실습](https://github.com/KimUJin3359/Web_Vue-2-/tree/master/project003/src)
  
  - App.vue -> 라우팅을 통한 /friedChicken 페이지(View) -> Fry(Component) -> Chicken(Component)

### Vuex
- 개요
  - 반복되는 props와 emit으로 **데이터 관리의 복잡성** 증가
    - 데이터의 위치 파악 및 관리가 어려워짐
    - 예측이 가능한 방식으로 상태를 변경할 수 있음
    
    | props, emit | vuex |
    | --- | --- |
    | ![props_emit](https://user-images.githubusercontent.com/50474972/110508867-d5396600-8144-11eb-9c49-b301c512ab65.jpg) | ![store](https://user-images.githubusercontent.com/50474972/110508870-d7032980-8144-11eb-8302-c058b056d55d.jpg) |
    
  - Vue의 **상태 관리 패턴 + 라이브러리**
    - 중앙 집중식 저장소 역할
    - state는 데이터를 정의
    - mutations는 state를 변경할 때 사용
    ![vuex](https://user-images.githubusercontent.com/50474972/110509759-cbfcc900-8145-11eb-83bf-0633517cc9b6.jpeg)
    
  >> [mapGetters, mapMutations, commit, dispatch를 활용한 store 접근](https://github.com/KimUJin3359/Web_Vue-2-/tree/master/project004/src)
  
    - **state, getters는** .state, .getters으로 **단순히 변수에 접근하여 값을 가지고 오는 것**
    - **mutations, actions는 함수에 접근**하여 변수의 값을 변경하는 것
      - 함수에 접근하는 것이기 때문에 .commit, .dispatch를 사용
      
### Vue-Bootstrap
- Bootstrap Vue
  - **Bootstrap을 vue.js에서 사용할 수 있도록 만든 패키지**
  - 미리 컴포넌트로 구현을 해두어서 사용만 하면 되는 간편한 라이브러리
- 특징
  - **컴포넌트 형태**로 제작
  - vue에 맞게 data 바인딩이 최적화 되어있음
  - bootstrap의 기능들 또한 사용 가능
- 설치 : npm i vue bootstrap-vue bootstrap

>> [bootstrap-vue를 사용한 calendar 표시](https://github.com/KimUJin3359/Web_Vue-2-/tree/master/project005/src)
  
  
