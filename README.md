# Status Code Generator

## Overview

Sample application just returns any HTTP status code including 5xx.


## How to demonstrate

- Aceess to `GET /` for test web page.

  - `http://localhost:8080`

- Aceess to `GET /status` fort direct API with HTTP status code parameter(default=200).

  - `http://localhost:8080/status?code=524`


## Environment values

- PORT

  - listening HTTP port(default=8080)

- ALLOW_CORS

  - allows CORS access from outside of server, for example '*'(default='')


## Licensing

This code is licensed under MIT.


## Copyright

2021 K.Kimura @ Juge.Me all rights reserved.

