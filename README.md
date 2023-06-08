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
  * `yarn serve`

* Trouble shooting
  * 서비스 계정 만료 오류
    * ```bash
      "message": "The App Engine service account 'office-htw@appspot.gserviceaccount.com' does not exist or is disabled. Follow https://cloud.google.com/iam/docs/creating-managing-service-accounts#enabling to enable it."
      ```
    * 이런 경우 아래 URL로 가서 사용 설정 하면 됨
    * `https://console.cloud.google.com/iam-admin/serviceaccounts/details/105637575321814613927;edit=true?previousPage=%2Fapis%2Fcredentials%3Fhl%3Dko%26project%3Doffice-htw&hl=ko&project=office-htw`

## 개발환경에서 Functions 호출 및 실행 방법
* https://firebase.google.com/docs/functions/local-emulator#unix
* 키를 등록 해 줘야 함