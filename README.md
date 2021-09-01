<div align="center">
  <h1>42JS</h1>
  <p>...설명 추가 필요...</p>
</div>

## Stack

- Next.js
- TypeScript
- Asynchronous HTTP microservices base API

## API 명세

- /api/v1
  - /certificate - 증명서 발급
    - /[course]/ - 해당 과정 명
      - /[intraId] - 피시너 증명서
        - 404
          - `Content-Type`: `application/json`
          - `result`:
            - `status`: http status code
            - `msg`: 실패 이유
        - 200
          - `Content-Type`: `image/svg+xml`
          - `result`: 증명서 SVG 이미지
      - /staff/[intraId] - 스태프 증명서
        - 404
          - `Content-Type`: `application/json`
          - `result`:
            - `status`: http status code
            - `msg`: 실패 이유
        - 200
          - `Content-Type`: `image/svg+xml`
          - `result`: 증명서 SVG 이미지
