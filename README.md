# office-htw

## What you need for build?
### node.js
* `v16.13.2`
* `npm 8.3.1`
* `yarn`

### firebase-tools
* `npm i -g firebase-tools`

## CLI
* client
  * `yarn`
  * `yarn build`
  * `yarn deploy`
  * 안되는 경우 `firebase login --reauth` 를 해주고 다시 `yarn deploy` 하면 됨
* server
  * `cd functions`
  * `npm run serve`

## 개발환경에서 Functions 호출 및 실행 방법
* https://firebase.google.com/docs/functions/local-emulator#unix
* 키를 등록 해 줘야 함